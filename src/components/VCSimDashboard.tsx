'use client';

import Image from 'next/image';
import React, { startTransition, useDeferredValue, useEffect, useMemo, useState } from 'react';
import {
  FALLBACK_SIMULATION_STATE,
  fetchSimulationState,
  type ReplayTick,
  type SimulationInteraction,
  type SimulationState,
} from '@/lib/vcSimulation';

const POLL_INTERVAL_MS = 6000;

function formatCompactCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value);
}

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function StatusPill({ label, muted = false }: { label: string; muted?: boolean }) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.24em]',
        muted
          ? 'border-white/10 bg-white/5 text-white/55'
          : 'border-cyan-300/30 bg-cyan-300/10 text-cyan-100',
      ].join(' ')}
    >
      {label}
    </span>
  );
}

function InteractionCard({ interaction }: { interaction: SimulationInteraction }) {
  const isInvestor = interaction.event_type === 'investor_negotiation';
  
  // Defensive payload access
  const payload = interaction.payload || {};
  const amount = typeof payload.amount_usd === 'number' ? payload.amount_usd : null;
  const equity = typeof payload.equity_pct === 'number' ? payload.equity_pct : null;
  const status = typeof payload.status === 'string' ? payload.status : interaction.event_type;

  // Defensive string access
  const safeCompanyName = interaction.company_name || 'Unknown Company';
  const safeSummary = interaction.summary || 'No summary available';
  const safeActorName = interaction.actor_name || 'Unknown Actor';
  const safeCounterpartName = interaction.counterpart_name || 'Unknown Counterpart';

  return (
    <div className="rounded-2xl border border-white/10 bg-[#09111f] p-3 shadow-[0_18px_40px_rgba(0,0,0,0.24)]">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-[11px] uppercase tracking-[0.28em] text-white/45">{safeCompanyName}</div>
          <div className="mt-1 text-sm text-white">{safeSummary}</div>
        </div>
        <StatusPill label={status} muted={!isInvestor} />
      </div>
      <div className="mt-3 flex items-center justify-between text-[11px] text-white/55">
        <span>
          {safeActorName} {'->'} {safeCounterpartName}
        </span>
        <span>
          {amount ? `${formatCompactCurrency(amount)} ` : ''}
          {equity ? `${equity}%` : ''}
        </span>
      </div>
    </div>
  );
}

function ReplayCard({ tick }: { tick: ReplayTick }) {
  // Defensive access to tick data
  const safeTickIndex = typeof tick.tick_index === 'number' ? tick.tick_index : 0;
  const safeCreatedAt = typeof tick.created_at === 'string' ? tick.created_at : new Date(0).toISOString();
  
  // Safe metrics access
  const safeMetrics = tick.metrics || {
    interaction_count: 0,
    average_runway_months: 0,
    total_cash: 0
  };
  
  // Safe interactions access
  const safeInteractions = Array.isArray(tick.interactions) ? tick.interactions.slice(0, 2) : [];

  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm text-white">Tick {safeTickIndex}</div>
        <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">{formatDate(safeCreatedAt)}</div>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2 text-[11px] text-white/60">
        <div>Interactions {safeMetrics.interaction_count}</div>
        <div>Runway {safeMetrics.average_runway_months}m</div>
        <div>Cash {formatCompactCurrency(safeMetrics.total_cash)}</div>
      </div>
      <div className="mt-3 space-y-2">
        {safeInteractions.map((interaction) => (
          <div key={interaction.event_id} className="rounded-xl border border-white/6 bg-white/5 px-3 py-2 text-xs text-white/72">
            {interaction.summary}
          </div>
        ))}
      </div>
    </div>
  );
}

export function VCSimDashboard() {
  const [simulation, setSimulation] = useState<SimulationState>(FALLBACK_SIMULATION_STATE);
  const [fetchState, setFetchState] = useState<'connecting' | 'live' | 'offline'>('connecting');
  const [errorCount, setErrorCount] = useState(0);
  const deferredSimulation = useDeferredValue(simulation);

  useEffect(() => {
    let mounted = true;
    let inFlight: AbortController | null = null;

    const refresh = async () => {
      inFlight?.abort();
      const controller = new AbortController();
      inFlight = controller;

      try {
        const nextState = await fetchSimulationState(controller.signal);
        if (!mounted) {
          return;
        }
        startTransition(() => {
          setSimulation(nextState);
          setFetchState('live');
          // Reset error count on successful fetch
          if (errorCount > 0) {
            setErrorCount(0);
          }
        });
      } catch (error) {
        if (!mounted || controller.signal.aborted) {
          return;
        }
        console.error('Simulation API error:', error);
        
        // Implement exponential backoff for errors
        const newErrorCount = errorCount + 1;
        setErrorCount(newErrorCount);
        
        startTransition(() => {
          setSimulation(FALLBACK_SIMULATION_STATE);
        });
        
        // If too many consecutive errors, stop polling
        if (newErrorCount >= 5) {
          setFetchState('offline');
          console.warn('Too many consecutive errors, stopping polling');
          return;
        }
        
        setFetchState('offline');
      }
    };

    // Add hydration safety check
    if (typeof window === 'undefined') {
      return;
    }

    refresh();
    const interval = window.setInterval(refresh, POLL_INTERVAL_MS);

    return () => {
      mounted = false;
      inFlight?.abort();
      window.clearInterval(interval);
    };
  }, [errorCount]);

  const snapshot = deferredSimulation.current_snapshot;

  // Defensive data access with fallbacks
  const featuredCompanies = useMemo(() => {
    try {
      return Array.isArray(snapshot.companies) ? snapshot.companies.slice(0, 4) : [];
    } catch {
      return [];
    }
  }, [snapshot.companies]);

  const currentInteractions = useMemo(() => {
    try {
      return Array.isArray(snapshot.interactions) ? snapshot.interactions.slice(0, 6) : [];
    } catch {
      return [];
    }
  }, [snapshot.interactions]);

  // Safe access to recent replay
  const safeRecentReplay = useMemo(() => {
    try {
      return Array.isArray(deferredSimulation.recent_replay) 
        ? deferredSimulation.recent_replay
        : [];
    } catch {
      return [];
    }
  }, [deferredSimulation.recent_replay]);

  return (
    <aside className="h-full w-[640px] overflow-y-auto border-l border-white/8 bg-[linear-gradient(180deg,rgba(8,18,35,0.96),rgba(4,8,18,0.96))] px-4 py-4 backdrop-blur-xl">
      <div className="rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4 shadow-[0_28px_80px_rgba(0,0,0,0.34)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.35em] text-cyan-100/70">Live Session</div>
            <h2 className="mt-1 text-xl font-light tracking-[0.08em] text-white">VC Agent Feed</h2>
            <p className="mt-2 text-sm text-white/60">{snapshot.market_signal}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <StatusPill label={fetchState === 'live' ? 'live' : fetchState === 'offline' ? 'offline' : 'connecting'} muted={fetchState !== 'live'} />
            <StatusPill label={deferredSimulation.persistence_mode} muted={deferredSimulation.persistence_mode !== 'supabase'} />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/8 bg-black/20 p-3">
            <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">Current Tick</div>
            <div className="mt-2 text-3xl font-light text-white">{deferredSimulation.current_tick}</div>
          </div>
          <div className="rounded-2xl border border-white/8 bg-black/20 p-3">
            <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">Average Runway</div>
            <div className="mt-2 text-3xl font-light text-white">{snapshot.metrics.average_runway_months}m</div>
          </div>
          <div className="rounded-2xl border border-white/8 bg-black/20 p-3">
            <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">Cash</div>
            <div className="mt-2 text-2xl font-light text-white">{formatCompactCurrency(snapshot.metrics.total_cash)}</div>
          </div>
          <div className="rounded-2xl border border-white/8 bg-black/20 p-3">
            <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">Valuation</div>
            <div className="mt-2 text-2xl font-light text-white">{formatCompactCurrency(snapshot.metrics.total_valuation)}</div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="text-[11px] uppercase tracking-[0.32em] text-white/45">Current Company Actions</div>
          <div className="text-xs text-white/45">
            Session {deferredSimulation.session_id.slice(0, 8)}
            {deferredSimulation.restored_from_db ? ' restored' : ' fresh'}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          {featuredCompanies.map((company) => (
            <article
              key={company.id}
              className="rounded-[24px] border border-white/10 bg-[#081221] p-3 shadow-[0_18px_48px_rgba(0,0,0,0.28)]"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-white/90">
                  <Image
                    src={company.logo_url || 'data:image/gif;base64,R0lGODlhAQABAAAAACw='}
                    alt={`${company.name || 'Company'} logo`}
                    width={48}
                    height={48}
                    unoptimized
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      // Fallback for broken image URLs
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
                        `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
                          <rect width="96" height="96" rx="24" fill="#164e63"/>
                          <text x="48" y="58" text-anchor="middle" font-family="Georgia, serif" font-size="34" fill="white">${(company.name || 'VC')[0].toUpperCase()}</text>
                        </svg>`
                      )}`;
                    }}
                  />
                </div>
                <div className="min-w-0">
                  <div className="truncate text-sm text-white">{company.name || 'Unknown Company'}</div>
                  <div className="truncate text-[11px] uppercase tracking-[0.22em] text-white/45">{company.sector || 'Unknown Sector'}</div>
                </div>
              </div>

              <div className="mt-3 text-sm text-cyan-50">{company.current_action || 'No current action'}</div>
              <div className="mt-2 text-xs leading-5 text-white/62">{company.headline || 'No headline available'}</div>

              <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-white/60">
                <div>Cash {formatCompactCurrency(company.cash_on_hand || 0)}</div>
                <div>Value {formatCompactCurrency(company.valuation || 0)}</div>
                <div>Team {company.headcount || 0}</div>
                <div>Status {company.investor_status || 'unknown'}</div>
              </div>

              <div className="mt-3 rounded-xl border border-white/8 bg-white/5 px-3 py-2 text-xs text-white/72">
                {company.staffing_update || 'No staffing updates'}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5">
          <div className="text-[11px] uppercase tracking-[0.32em] text-white/45">Investor Interactions</div>
          <div className="mt-3 space-y-3">
            {currentInteractions.length > 0 ? (
              currentInteractions.map((interaction) => <InteractionCard key={interaction.event_id} interaction={interaction} />)
            ) : (
              <div className="rounded-2xl border border-dashed border-white/10 px-4 py-6 text-sm text-white/40">
                Waiting for the next persisted interaction tick.
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between">
            <div className="text-[11px] uppercase tracking-[0.32em] text-white/45">Replay Last 5 Ticks</div>
            <div className="text-xs text-white/40">Supabase restore and recent replay</div>
          </div>
          <div className="mt-3 space-y-3">
            {safeRecentReplay.length > 0 ? (
              safeRecentReplay.map((tick) => (
                <ReplayCard key={`${tick.tick_index}-${tick.created_at}`} tick={tick} />
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-white/10 px-4 py-6 text-sm text-white/40">
                No replay data available
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
