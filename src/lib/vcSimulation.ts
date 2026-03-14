export const API_BASE_URL =
  process.env.NEXT_PUBLIC_VC_SIM_API_BASE_URL?.replace(/\/$/, '') || 'http://localhost:8000';

export type SimulationInteraction = {
  event_id: string;
  tick_index: number;
  company_id: string;
  company_name: string;
  event_type: string;
  actor_id: string;
  actor_name: string;
  actor_role: string;
  counterpart_id?: string;
  counterpart_name?: string;
  counterpart_role?: string;
  summary: string;
  payload: Record<string, unknown>;
};

export type SimulationCompany = {
  id: string;
  name: string;
  sector: string;
  founder_id: string;
  founder_name: string;
  valuation: number;
  cash_on_hand: number;
  burn_rate: number;
  headcount: number;
  runway_months: number;
  logo_url?: string;
  logo_source?: string;
  current_action: string;
  staffing_update: string;
  investor_status: string;
  headline: string;
};

export type ReplayTick = {
  tick_index: number;
  created_at: string;
  metrics: {
    company_count: number;
    interaction_count: number;
    total_valuation: number;
    total_cash: number;
    average_runway_months: number;
  };
  companies: SimulationCompany[];
  interactions: SimulationInteraction[];
};

export type SimulationState = {
  session_id: string;
  seed: number;
  status: string;
  deterministic_mode: boolean;
  current_tick: number;
  restored_from_db: boolean;
  persistence_mode: 'supabase' | 'memory';
  current_snapshot: {
    tick: number;
    market_signal: string;
    companies: SimulationCompany[];
    interactions: SimulationInteraction[];
    investors: Array<Record<string, unknown>>;
    metrics: ReplayTick['metrics'];
    updated_at: string;
  };
  recent_replay: ReplayTick[];
};

function buildFallbackLogo(name: string) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('') || 'VC';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96"><rect width="96" height="96" rx="24" fill="#164e63"/><text x="48" y="58" text-anchor="middle" font-family="Georgia, serif" font-size="34" fill="white">${initials}</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export const FALLBACK_SIMULATION_STATE: SimulationState = {
  session_id: 'local-fallback',
  seed: 20260301,
  status: 'primed',
  deterministic_mode: true,
  current_tick: 0,
  restored_from_db: false,
  persistence_mode: 'memory',
  current_snapshot: {
    tick: 0,
    market_signal: 'Waiting for the simulation API.',
    companies: [
      {
        id: 'fallback-company',
        name: 'Mistral Swarm Corp',
        sector: 'Developer tooling',
        founder_id: 'founder-alice',
        founder_name: 'Alice Swarm',
        valuation: 14500000,
        cash_on_hand: 2400000,
        burn_rate: 175000,
        headcount: 18,
        runway_months: 13.7,
        logo_url: buildFallbackLogo('Mistral Swarm Corp'),
        logo_source: 'fallback_svg',
        current_action: 'waiting for backend',
        staffing_update: 'state stream unavailable',
        investor_status: 'offline',
        headline: 'The dashboard will hydrate once the API responds.',
      },
    ],
    interactions: [],
    investors: [],
    metrics: {
      company_count: 1,
      interaction_count: 0,
      total_valuation: 14500000,
      total_cash: 2400000,
      average_runway_months: 13.7,
    },
    updated_at: new Date(0).toISOString(),
  },
  recent_replay: [],
};

function asRecord(value: unknown): Record<string, unknown> | null {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function asNumber(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function asString(value: unknown, fallback: string): string {
  return typeof value === 'string' && value.length > 0 ? value : fallback;
}

function normalizeInteraction(value: unknown, index: number): SimulationInteraction | null {
  const record = asRecord(value);
  if (!record) {
    return null;
  }

  // Handle null/undefined payload with safe defaults
  const payload = asRecord(record.payload) ?? {};
  const amount = typeof payload.amount_usd === 'number' ? payload.amount_usd : null;
  const equity = typeof payload.equity_pct === 'number' ? payload.equity_pct : null;
  const status = typeof payload.status === 'string' ? payload.status : record.event_type;

  return {
    event_id: asString(record.event_id, `fallback-event-${index}`),
    tick_index: asNumber(record.tick_index, 0),
    company_id: asString(record.company_id, 'fallback-company'),
    company_name: asString(record.company_name, 'Unknown company'),
    event_type: asString(record.event_type, 'unknown'),
    actor_id: asString(record.actor_id, `fallback-actor-${index}`),
    actor_name: asString(record.actor_name, 'Unknown actor'),
    actor_role: asString(record.actor_role, 'unknown'),
    counterpart_id: typeof record.counterpart_id === 'string' ? record.counterpart_id : undefined,
    counterpart_name: typeof record.counterpart_name === 'string' ? record.counterpart_name : undefined,
    counterpart_role: typeof record.counterpart_role === 'string' ? record.counterpart_role : undefined,
    summary: asString(record.summary, 'No interaction summary available.'),
    payload: payload,
  };
}

function normalizeCompany(value: unknown, index: number): SimulationCompany | null {
  const record = asRecord(value);
  if (!record) {
    return null;
  }

  const fallbackCompany = FALLBACK_SIMULATION_STATE.current_snapshot.companies[0];
  const name = asString(record.name, fallbackCompany.name);

  // Handle null/undefined logo_url safely
  const logoUrl = typeof record.logo_url === 'string' && record.logo_url.length > 0
    ? record.logo_url
    : buildFallbackLogo(name);

  return {
    id: asString(record.id, `fallback-company-${index}`),
    name,
    sector: asString(record.sector, fallbackCompany.sector),
    founder_id: asString(record.founder_id, fallbackCompany.founder_id),
    founder_name: asString(record.founder_name, fallbackCompany.founder_name),
    valuation: asNumber(record.valuation, fallbackCompany.valuation),
    cash_on_hand: asNumber(record.cash_on_hand, fallbackCompany.cash_on_hand),
    burn_rate: asNumber(record.burn_rate, fallbackCompany.burn_rate),
    headcount: asNumber(record.headcount, fallbackCompany.headcount),
    runway_months: asNumber(record.runway_months, fallbackCompany.runway_months),
    logo_url: logoUrl,
    logo_source: typeof record.logo_source === 'string' ? record.logo_source : fallbackCompany.logo_source,
    current_action: asString(record.current_action, fallbackCompany.current_action),
    staffing_update: asString(record.staffing_update, fallbackCompany.staffing_update),
    investor_status: asString(record.investor_status, fallbackCompany.investor_status),
    headline: asString(record.headline, fallbackCompany.headline),
  };
}

function normalizeMetrics(value: unknown): ReplayTick['metrics'] {
  const record = asRecord(value);
  const fallback = FALLBACK_SIMULATION_STATE.current_snapshot.metrics;
  if (!record) {
    return fallback;
  }

  return {
    company_count: asNumber(record.company_count, fallback.company_count),
    interaction_count: asNumber(record.interaction_count, fallback.interaction_count),
    total_valuation: asNumber(record.total_valuation, fallback.total_valuation),
    total_cash: asNumber(record.total_cash, fallback.total_cash),
    average_runway_months: asNumber(record.average_runway_months, fallback.average_runway_months),
  };
}

function normalizeReplayTick(value: unknown, index: number): ReplayTick | null {
  const record = asRecord(value);
  if (!record) {
    return null;
  }

  return {
    tick_index: asNumber(record.tick_index, index),
    created_at: asString(record.created_at, new Date(0).toISOString()),
    metrics: normalizeMetrics(record.metrics),
    companies: Array.isArray(record.companies)
      ? record.companies.map(normalizeCompany).filter((company): company is SimulationCompany => company !== null)
      : [],
    interactions: Array.isArray(record.interactions)
      ? record.interactions
          .map(normalizeInteraction)
          .filter((interaction): interaction is SimulationInteraction => interaction !== null)
      : [],
  };
}

function normalizeSimulationState(payload: unknown): SimulationState {
  const record = asRecord(payload);
  if (!record) {
    return FALLBACK_SIMULATION_STATE;
  }

  const snapshot = asRecord(record.current_snapshot);
  const fallbackSnapshot = FALLBACK_SIMULATION_STATE.current_snapshot;
  const companies = Array.isArray(snapshot?.companies)
    ? snapshot.companies.map(normalizeCompany).filter((company): company is SimulationCompany => company !== null)
    : [];
  const interactions = Array.isArray(snapshot?.interactions)
    ? snapshot.interactions
        .map(normalizeInteraction)
        .filter((interaction): interaction is SimulationInteraction => interaction !== null)
    : [];

  return {
    session_id: asString(record.session_id, FALLBACK_SIMULATION_STATE.session_id),
    seed: asNumber(record.seed, FALLBACK_SIMULATION_STATE.seed),
    status: asString(record.status, FALLBACK_SIMULATION_STATE.status),
    deterministic_mode:
      typeof record.deterministic_mode === 'boolean'
        ? record.deterministic_mode
        : FALLBACK_SIMULATION_STATE.deterministic_mode,
    current_tick: asNumber(record.current_tick, FALLBACK_SIMULATION_STATE.current_tick),
    restored_from_db:
      typeof record.restored_from_db === 'boolean'
        ? record.restored_from_db
        : FALLBACK_SIMULATION_STATE.restored_from_db,
    persistence_mode: record.persistence_mode === 'supabase' ? 'supabase' : 'memory',
    current_snapshot: {
      tick: asNumber(snapshot?.tick, fallbackSnapshot.tick),
      market_signal: asString(snapshot?.market_signal, fallbackSnapshot.market_signal),
      companies: companies.length > 0 ? companies : fallbackSnapshot.companies,
      interactions,
      investors: Array.isArray(snapshot?.investors)
        ? snapshot.investors.map((investor) => asRecord(investor) ?? {})
        : [],
      metrics: normalizeMetrics(snapshot?.metrics),
      updated_at: asString(snapshot?.updated_at, fallbackSnapshot.updated_at),
    },
    recent_replay: Array.isArray(record.recent_replay)
      ? record.recent_replay
          .map(normalizeReplayTick)
          .filter((tick): tick is ReplayTick => tick !== null)
      : [],
  };
}

export async function fetchSimulationState(signal?: AbortSignal): Promise<SimulationState> {
  const response = await fetch(`${API_BASE_URL}/api/v1/simulation/state?advance=true`, {
    cache: 'no-store',
    signal,
  });

  if (!response.ok) {
    throw new Error(`Simulation API returned ${response.status}`);
  }

  return normalizeSimulationState(await response.json());
}
