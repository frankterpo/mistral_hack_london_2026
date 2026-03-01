(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/context/GameContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameProvider",
    ()=>GameProvider,
    "INVESTOR_CONTEXT_SQL",
    ()=>INVESTOR_CONTEXT_SQL,
    "INVESTOR_SESSION_DOMAIN_KEY",
    ()=>INVESTOR_SESSION_DOMAIN_KEY,
    "useGame",
    ()=>useGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lz$2d$string$2f$libs$2f$lz$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lz-string/libs/lz-string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$saveWorkerManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/saveWorkerManager.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/simulation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/types/game.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/games/isocity/types/game.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/renderConfig.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
// Consolidated GameContext for the SimCity-like game
'use client';
;
;
;
;
;
;
;
;
const STORAGE_KEY = 'isocity-game-state';
const SAVED_CITY_STORAGE_KEY = 'isocity-saved-city'; // For restoring after viewing shared city
const SAVED_CITIES_INDEX_KEY = 'isocity-saved-cities-index'; // Index of all saved cities
const SAVED_CITY_PREFIX = 'isocity-city-'; // Prefix for individual saved city states
const SPRITE_PACK_STORAGE_KEY = 'isocity-sprite-pack';
const DAY_NIGHT_MODE_STORAGE_KEY = 'isocity-day-night-mode';
const INVESTOR_SESSION_DOMAIN_KEY = 'isobusiness-investor-domain';
const INVESTOR_CONTEXT_SQL = `
WITH selected_investor AS (
  SELECT
    i.id AS investor_id,
    i.name,
    i.domain,
    i.march_rank,
    i.hq_city,
    i.hq_country,
    i.founded_year,
    i.investor_type,
    i.aum_usd,
    i.follow_on_rate_pct,
    i.lead_investment_ratio_pct,
    i.exit_ratio_pct
  FROM investors i
  WHERE lower(i.domain) = lower($1)
  LIMIT 1
),
portfolio_companies AS (
  SELECT
    c.id AS company_id,
    c.name,
    c.domain AS company_domain,
    c.industry,
    c.stage,
    c.valuation_usd,
    c.headcount,
    c.runway_months,
    c.growth_momentum_pct
  FROM selected_investor si
  JOIN investor_investments ii ON ii.investor_id = si.investor_id
  JOIN companies c ON c.id = ii.company_id
  ORDER BY ii.invested_at DESC NULLS LAST
  LIMIT 24
),
similar_company_stream AS (
  SELECT
    sc.company_id,
    sc.company_name,
    sc.company_domain,
    sc.industry,
    sc.similarity_score
  FROM selected_investor si
  JOIN similar_companies sc ON lower(sc.investor_domain) = lower(si.domain)
  ORDER BY sc.similarity_score DESC
  LIMIT 24
)
SELECT json_build_object(
  'profile',
  (SELECT row_to_json(si) FROM selected_investor si),
  'portfolio_companies',
  COALESCE((SELECT json_agg(row_to_json(pc)) FROM portfolio_companies pc), '[]'::json),
  'similar_companies',
  COALESCE((SELECT json_agg(row_to_json(sc)) FROM similar_company_stream sc), '[]'::json)
) AS investor_context;
`.trim();
const GameContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
function pickOpportunityBuildingType(industry, valuationUsd, headcount) {
    const sector = industry.toLowerCase();
    const valuation = valuationUsd || 0;
    const count = headcount || 0;
    // Define "Small", "Medium", and "Large" company thresholds
    const isLarge = valuation >= 1_000_000_000 || count >= 1000;
    const isMedium = valuation >= 50_000_000 && valuation < 1_000_000_000 || count >= 100 && count < 1000;
    const isSmall = !isLarge && !isMedium;
    // Mapping based on industry and size
    if (sector.includes('fintech') || sector.includes('bank') || sector.includes('ai') || sector.includes('dev') || sector.includes('cyber')) {
        if (isLarge) return 'office_high';
        if (isMedium) return 'office_low';
        return 'shop_small';
    }
    if (sector.includes('health') || sector.includes('bio')) {
        if (isLarge || isMedium) return 'hospital';
        return 'office_building_small';
    }
    if (sector.includes('logistics') || sector.includes('supply') || sector.includes('ecommerce')) {
        if (valuation >= 10_000_000_000) return 'airport'; // Global Market Access
        if (isLarge) return 'stadium'; // Distribution Channel / Large Hub
        if (isMedium) return 'warehouse';
        return 'shop_small';
    }
    if (sector.includes('manufacturing') || sector.includes('hardware')) {
        if (isLarge) return 'factory_large';
        if (isMedium) return 'factory_medium';
        return 'factory_small';
    }
    if (sector.includes('marketplace') || sector.includes('retail') || sector.includes('consumer')) {
        if (isLarge) return 'mall';
        if (isMedium) return 'shop_medium';
        return 'shop_small';
    }
    // Default fallback based on size
    if (isLarge) return 'office_high';
    if (isMedium) return 'office_low';
    return 'shop_small';
}
function classifyCompanySize(valuationUsd, headcount) {
    const valuation = valuationUsd || 0;
    const count = headcount || 0;
    if (valuation >= 1_000_000_000 || count >= 1000) return 'large';
    if (valuation >= 50_000_000 && valuation < 1_000_000_000 || count >= 100 && count < 1000) return 'medium';
    return 'small';
}
function dedupeCompanies(companies) {
    const seen = new Set();
    const result = [];
    for (const company of companies){
        const key = `${company.id || ''}::${(company.domain || '').toLowerCase()}::${company.name.toLowerCase()}`;
        if (seen.has(key)) continue;
        seen.add(key);
        result.push(company);
    }
    return result;
}
function getExpansionPressure(gridSize) {
    return Math.max(1, gridSize / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_GRID_SIZE"]);
}
function findEmptyGrassTile(grid) {
    const candidates = [];
    for(let y = 0; y < grid.length; y++){
        for(let x = 0; x < grid[y].length; x++){
            const tile = grid[y][x];
            if (tile?.building.type === 'grass' && tile.zone === 'none') {
                candidates.push({
                    x,
                    y
                });
            }
        }
    }
    if (candidates.length === 0) return null;
    return candidates[Math.floor(Math.random() * candidates.length)];
}
function normalizeDomain(domainInput) {
    return domainInput.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/.*$/, '');
}
function asObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value) ? value : null;
}
function asString(value, fallback = '') {
    return typeof value === 'string' && value.trim().length > 0 ? value : fallback;
}
function asNumber(value, fallback = 0) {
    return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}
function asPercent(value) {
    return clamp(Math.round(value), 0, 100);
}
function toDisplayNameFromDomain(domain) {
    return domain.split('.')[0].split(/[-_]/g).filter(Boolean).map((part)=>part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
}
function buildStats(profile, portfolio) {
    const ecosystemValue = portfolio.reduce((sum, company)=>sum + company.valuationUsd, 0);
    const operatorHeadcount = portfolio.reduce((sum, company)=>sum + company.headcount, 0);
    const runwayMonths = portfolio.length > 0 ? Number((portfolio.reduce((sum, company)=>sum + company.runwayMonths, 0) / portfolio.length).toFixed(1)) : 12;
    const growthAvg = portfolio.length > 0 ? portfolio.reduce((sum, company)=>sum + company.growthMomentumPct, 0) / portfolio.length : 58;
    const dryPowder = Math.round(profile.aumUsd * 0.24);
    const netBurn = -Math.max(80_000, Math.round(operatorHeadcount * 1_400));
    const dealFlow = clamp(Math.round(portfolio.length * 1.4), 3, 30);
    return {
        ecosystemValue,
        operatorHeadcount,
        dryPowder,
        netBurn,
        runwayMonths,
        dealFlow,
        pmfSignalPercentile: asPercent(57 + growthAvg * 0.35 + profile.leadInvestmentRatioPct * 0.18),
        growthMomentumPercentile: asPercent(45 + growthAvg * 0.55),
        burnDisciplinePercentile: asPercent(50 + profile.followOnRatePct * 0.55),
        investorConfidencePercentile: asPercent(57 + profile.exitRatioPct * 0.8 - profile.monthRank * 0.38),
        hiringVelocityPercentile: asPercent(45 + operatorHeadcount / Math.max(portfolio.length, 1) * 0.42)
    };
}
function buildFallbackInvestorSession(domainInput) {
    const domain = normalizeDomain(domainInput) || 'ycombinator.com';
    if (domain === 'ycombinator.com') {
        const profile = {
            id: 'investor-ycombinator',
            name: 'Y Combinator',
            domain,
            monthRank: 1,
            hq: 'San Francisco, US',
            foundedYear: 2005,
            investorType: 'Accelerator + Seed VC',
            aumUsd: 17_000_000_000,
            followOnRatePct: 44,
            leadInvestmentRatioPct: 36,
            exitRatioPct: 28,
            highlights: [
                'Founder-first mentorship loops and office hours',
                'Strong recruiting + distribution support network',
                'High follow-on conviction backed by alumni density'
            ]
        };
        const portfolio = [
            {
                id: 'yc-1',
                name: 'Stripe',
                domain: 'stripe.com',
                industry: 'Fintech',
                stage: 'Late',
                valuationUsd: 65_000_000_000,
                headcount: 7200,
                runwayMonths: 26,
                growthMomentumPct: 74
            },
            {
                id: 'yc-2',
                name: 'Airbnb',
                domain: 'airbnb.com',
                industry: 'Marketplace',
                stage: 'Public',
                valuationUsd: 84_000_000_000,
                headcount: 6900,
                runwayMonths: 20,
                growthMomentumPct: 68
            },
            {
                id: 'yc-3',
                name: 'DoorDash',
                domain: 'doordash.com',
                industry: 'Logistics',
                stage: 'Public',
                valuationUsd: 52_000_000_000,
                headcount: 19000,
                runwayMonths: 14,
                growthMomentumPct: 63
            },
            {
                id: 'yc-4',
                name: 'Scale AI',
                domain: 'scale.com',
                industry: 'AI Infrastructure',
                stage: 'Growth',
                valuationUsd: 13_800_000_000,
                headcount: 1100,
                runwayMonths: 18,
                growthMomentumPct: 82
            },
            {
                id: 'yc-5',
                name: 'Brex',
                domain: 'brex.com',
                industry: 'Fintech',
                stage: 'Growth',
                valuationUsd: 12_300_000_000,
                headcount: 1500,
                runwayMonths: 16,
                growthMomentumPct: 61
            },
            {
                id: 'yc-6',
                name: 'Replit',
                domain: 'replit.com',
                industry: 'Developer Tools',
                stage: 'Growth',
                valuationUsd: 1_200_000_000,
                headcount: 320,
                runwayMonths: 17,
                growthMomentumPct: 86
            }
        ];
        return {
            profile,
            portfolio,
            similarCompanies: portfolio.slice(0, 3),
            rivalInvestors: [
                'Sequoia Capital',
                'Andreessen Horowitz',
                'Benchmark'
            ],
            stats: buildStats(profile, portfolio),
            source: 'fallback',
            queryContract: {
                investor_context_sql: INVESTOR_CONTEXT_SQL
            }
        };
    }
    const seed = domain.split('').reduce((sum, ch)=>(sum + ch.charCodeAt(0)) % 10000, 101);
    const profile = {
        id: `investor-${domain.replace(/\./g, '-')}`,
        name: `${toDisplayNameFromDomain(domain)} Ventures`,
        domain,
        monthRank: 8 + seed % 50,
        hq: 'London, UK',
        foundedYear: 2012 + seed % 9,
        investorType: 'Early-stage VC',
        aumUsd: 450_000_000 + seed % 8 * 175_000_000,
        followOnRatePct: 22 + seed % 28,
        leadInvestmentRatioPct: 18 + seed % 30,
        exitRatioPct: 8 + seed % 14,
        highlights: [
            'Mentorship-driven portfolio operating sessions',
            'Dedicated recruiting and distribution partner bench',
            'Follow-on reserve discipline tied to milestone velocity'
        ]
    };
    const industries = [
        'AI Applications',
        'Fintech',
        'Healthtech',
        'Developer Tools',
        'Logistics',
        'Cybersecurity'
    ];
    const portfolio = Array.from({
        length: 6
    }, (_, index)=>({
            id: `${profile.id}-${index + 1}`,
            name: `${toDisplayNameFromDomain(domain)} Co ${index + 1}`,
            domain: `${toDisplayNameFromDomain(domain).toLowerCase().replace(/\s+/g, '')}${index + 1}.com`,
            industry: industries[(seed + index) % industries.length],
            stage: index < 3 ? 'Seed' : 'Series A',
            valuationUsd: 8_500_000 + index * 3_200_000,
            headcount: 18 + index * 9,
            runwayMonths: 10 + index % 5,
            growthMomentumPct: 53 + index * 5
        }));
    return {
        profile,
        portfolio,
        similarCompanies: portfolio.slice(0, 3),
        rivalInvestors: [
            'Accel',
            'Index Ventures'
        ],
        stats: buildStats(profile, portfolio),
        source: 'fallback',
        queryContract: {
            investor_context_sql: INVESTOR_CONTEXT_SQL
        }
    };
}
function parseInvestorSessionPayload(payload, domainInput) {
    const root = asObject(payload);
    if (!root) return null;
    const context = asObject(root.investor_context) ?? root;
    const profileRaw = asObject(context.profile);
    if (!profileRaw) return null;
    const portfolioRaw = Array.isArray(context.portfolio_companies) ? context.portfolio_companies : Array.isArray(context.portfolio) ? context.portfolio : [];
    if (portfolioRaw.length === 0) return null;
    const normalizedDomain = normalizeDomain(asString(profileRaw.domain, domainInput) || domainInput);
    const profile = {
        id: asString(profileRaw.id, `investor-${normalizedDomain.replace(/\./g, '-')}`),
        name: asString(profileRaw.name, 'Investor'),
        domain: normalizedDomain,
        monthRank: asNumber(profileRaw.march_rank ?? profileRaw.month_rank, 25),
        hq: asString(profileRaw.hq, [
            asString(profileRaw.hq_city),
            asString(profileRaw.hq_country)
        ].filter(Boolean).join(', ') || 'Unknown'),
        foundedYear: asNumber(profileRaw.founded_year, 2014),
        investorType: asString(profileRaw.investor_type, 'VC'),
        aumUsd: asNumber(profileRaw.aum_usd, 500_000_000),
        followOnRatePct: asNumber(profileRaw.follow_on_rate_pct, 35),
        leadInvestmentRatioPct: asNumber(profileRaw.lead_investment_ratio_pct, 25),
        exitRatioPct: asNumber(profileRaw.exit_ratio_pct, 12),
        highlights: Array.isArray(profileRaw.highlights) ? profileRaw.highlights.filter((item)=>typeof item === 'string') : []
    };
    const parseCompany = (value, index)=>{
        const row = asObject(value) ?? {};
        return {
            id: asString(row.id ?? row.company_id, `${profile.id}-company-${index + 1}`),
            name: asString(row.name ?? row.company_name, `Portfolio ${index + 1}`),
            domain: asString(row.domain ?? row.company_domain, `portfolio-${index + 1}.example`),
            industry: asString(row.industry ?? row.sector, 'Software'),
            stage: asString(row.stage, 'Seed'),
            valuationUsd: asNumber(row.valuation_usd ?? row.latest_valuation_usd, 8_000_000 + index * 2_000_000),
            headcount: asNumber(row.headcount, 20 + index * 5),
            runwayMonths: asNumber(row.runway_months, 12),
            growthMomentumPct: asNumber(row.growth_momentum_pct ?? row.growth_mom_pct, 60)
        };
    };
    const portfolio = portfolioRaw.map(parseCompany);
    const similarCompanies = Array.isArray(context.similar_companies) ? context.similar_companies.map(parseCompany) : [];
    const rivalInvestors = Array.isArray(context.competitors) ? context.competitors.map((entry)=>asObject(entry)).filter((entry)=>entry !== null).map((entry)=>asString(entry.name ?? entry.fund_name ?? entry.domain)).filter((entry)=>entry.length > 0) : [];
    const sourceRaw = asString(context.source ?? root.source, 'api').toLowerCase();
    const resolvedSource = sourceRaw.includes('fallback') ? 'fallback' : 'api';
    return {
        profile,
        portfolio,
        similarCompanies,
        rivalInvestors,
        stats: buildStats(profile, portfolio),
        source: resolvedSource,
        queryContract: asObject(context.query_contract)
    };
}
function kickoffSpecterAgents(companyId) {
    console.log(`[Specter] Querying Specter for founders and key employees of company ${companyId} to initialize agent personas.`);
}
function applyInvestorSessionToState(prev, session) {
    const uniquePortfolio = dedupeCompanies(session.portfolio);
    console.log(`[GameContext] Applying investor session for ${session.profile.name} to state. Portfolio size: ${uniquePortfolio.length}`);
    // Create a deep copy of the grid to modify once
    const newGrid = prev.grid.map((row)=>row.map((tile)=>({
                ...tile,
                building: {
                    ...tile.building,
                    type: 'grass',
                    constructionProgress: 100,
                    abandoned: false,
                    powered: true,
                    watered: true,
                    level: 1,
                    population: 0,
                    jobs: 0
                },
                zone: 'none',
                hasSubway: false
            })));
    // Place portfolio companies in a structured cluster in the center
    const centerX = Math.floor(prev.gridSize / 2);
    const centerY = Math.floor(prev.gridSize / 2);
    const clusterRadius = Math.ceil(Math.sqrt(Math.min(uniquePortfolio.length, 24))) + 2;
    const portfolioCompanyTiles = [];
    uniquePortfolio.slice(0, 24).forEach((company, index)=>{
        // Kick off Specter agents for each portfolio company
        kickoffSpecterAgents(company.id);
        // Try to find a spot in the cluster first
        let tx = centerX + index % clusterRadius - Math.floor(clusterRadius / 2);
        let ty = centerY + Math.floor(index / clusterRadius) - Math.floor(clusterRadius / 2);
        // Ensure within bounds
        tx = clamp(tx, 0, prev.gridSize - 1);
        ty = clamp(ty, 0, prev.gridSize - 1);
        const buildingType = pickOpportunityBuildingType(company.industry, company.valuationUsd, company.headcount);
        // Check if tile is empty, if not find a random one
        let targetX = tx;
        let targetY = ty;
        if (newGrid[targetY][targetX].building.type !== 'grass' || newGrid[targetY][targetX].zone !== 'none') {
            const emptyTile = findEmptyGrassTile(newGrid);
            if (emptyTile) {
                targetX = emptyTile.x;
                targetY = emptyTile.y;
            } else {
                return; // No space left
            }
        }
        // Direct assignment to the grid copy
        newGrid[targetY][targetX] = {
            ...newGrid[targetY][targetX],
            building: {
                ...newGrid[targetY][targetX].building,
                type: buildingType,
                constructionProgress: 100,
                abandoned: false,
                powered: true,
                watered: true,
                level: 1
            },
            zone: 'none'
        };
        portfolioCompanyTiles.push({
            companyId: company.id,
            name: company.name,
            x: targetX,
            y: targetY,
            kind: 'portfolio',
            size: classifyCompanySize(company.valuationUsd, company.headcount),
            headcount: company.headcount
        });
    });
    const stateWithPortfolio = {
        ...prev,
        grid: newGrid,
        investorProfile: session.profile,
        portfolioCompanies: uniquePortfolio,
        portfolioCompanyTiles,
        pendingOpportunities: [],
        cityName: session.profile.name,
        gameVersion: (prev.gameVersion ?? 0) + 1 // Increment gameVersion to trigger re-renders
    };
    return {
        ...stateWithPortfolio,
        stats: {
            ...stateWithPortfolio.stats,
            population: Math.round(session.stats.operatorHeadcount),
            jobs: Math.round(session.stats.operatorHeadcount),
            money: Math.round(session.stats.dryPowder),
            income: Math.max(0, Math.round(session.stats.ecosystemValue / 1800)),
            expenses: Math.max(1, Math.round(Math.abs(session.stats.netBurn))),
            happiness: session.stats.investorConfidencePercentile,
            education: session.stats.pmfSignalPercentile,
            health: session.stats.burnDisciplinePercentile,
            safety: session.stats.growthMomentumPercentile,
            environment: session.stats.hiringVelocityPercentile,
            demand: {
                residential: clamp(Math.round((session.stats.hiringVelocityPercentile - 50) * 1.4), -100, 100),
                commercial: clamp(Math.round(session.stats.dealFlow * 8 - 40), -100, 100),
                industrial: clamp(Math.round((session.stats.growthMomentumPercentile - 50) * 1.3), -100, 100)
            }
        }
    };
}
const toolBuildingMap = {
    road: 'road',
    rail: 'rail',
    rail_station: 'rail_station',
    tree: 'tree',
    police_station: 'police_station',
    fire_station: 'fire_station',
    hospital: 'hospital',
    school: 'school',
    university: 'university',
    park: 'park',
    park_large: 'park_large',
    tennis: 'tennis',
    power_plant: 'power_plant',
    water_tower: 'water_tower',
    subway_station: 'subway_station',
    stadium: 'stadium',
    museum: 'museum',
    airport: 'airport',
    space_program: 'space_program',
    city_hall: 'city_hall',
    amusement_park: 'amusement_park',
    // New parks
    basketball_courts: 'basketball_courts',
    playground_small: 'playground_small',
    playground_large: 'playground_large',
    baseball_field_small: 'baseball_field_small',
    soccer_field_small: 'soccer_field_small',
    football_field: 'football_field',
    baseball_stadium: 'baseball_stadium',
    community_center: 'community_center',
    office_building_small: 'office_building_small',
    swimming_pool: 'swimming_pool',
    skate_park: 'skate_park',
    mini_golf_course: 'mini_golf_course',
    bleachers_field: 'bleachers_field',
    go_kart_track: 'go_kart_track',
    amphitheater: 'amphitheater',
    greenhouse_garden: 'greenhouse_garden',
    animal_pens_farm: 'animal_pens_farm',
    cabin_house: 'cabin_house',
    campground: 'campground',
    marina_docks_small: 'marina_docks_small',
    pier_large: 'pier_large',
    roller_coaster_small: 'roller_coaster_small',
    community_garden: 'community_garden',
    pond_park: 'pond_park',
    park_gate: 'park_gate',
    mountain_lodge: 'mountain_lodge',
    mountain_trailhead: 'mountain_trailhead'
};
const toolZoneMap = {
    zone_residential: 'residential',
    zone_commercial: 'commercial',
    zone_industrial: 'industrial',
    zone_dezone: 'none'
};
// Load game state from localStorage
// Supports both compressed (lz-string) and uncompressed (legacy) formats
function loadGameState() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            // Try to decompress first (new format)
            // If it fails or returns null/garbage, fall back to parsing as plain JSON (legacy format)
            let jsonString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lz$2d$string$2f$libs$2f$lz$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decompressFromUTF16"])(saved);
            // Check if decompression returned valid-looking JSON (should start with '{')
            // lz-string can return garbage strings when given invalid input
            if (!jsonString || !jsonString.startsWith('{')) {
                // Check if the saved string itself looks like JSON (legacy uncompressed format)
                if (saved.startsWith('{')) {
                    jsonString = saved;
                } else {
                    // Data is corrupted - clear it and return null
                    console.error('Corrupted save data detected, clearing...');
                    localStorage.removeItem(STORAGE_KEY);
                    return null;
                }
            }
            const parsed = JSON.parse(jsonString);
            // Validate it has essential properties
            if (parsed && parsed.grid && Array.isArray(parsed.grid) && parsed.gridSize && typeof parsed.gridSize === 'number' && parsed.stats && parsed.stats.money !== undefined && parsed.stats.population !== undefined) {
                // Migrate park_medium to park_large
                if (parsed.grid) {
                    for(let y = 0; y < parsed.grid.length; y++){
                        for(let x = 0; x < parsed.grid[y].length; x++){
                            if (parsed.grid[y][x]?.building?.type === 'park_medium') {
                                parsed.grid[y][x].building.type = 'park_large';
                            }
                        }
                    }
                }
                // Migrate selectedTool if it's park_medium
                if (parsed.selectedTool === 'park_medium') {
                    parsed.selectedTool = 'park_large';
                }
                // Ensure adjacentCities and waterBodies exist for backward compatibility
                if (!parsed.adjacentCities) {
                    parsed.adjacentCities = [];
                }
                // Migrate adjacentCities to have 'discovered' property
                for (const city of parsed.adjacentCities){
                    if (city.discovered === undefined) {
                        // Old cities that exist are implicitly discovered (they were visible in the old system)
                        city.discovered = true;
                    }
                }
                if (!parsed.waterBodies) {
                    parsed.waterBodies = [];
                }
                // Ensure cities exists for multi-city support
                if (!parsed.cities) {
                    // Create a default city covering the entire map
                    parsed.cities = [
                        {
                            id: parsed.id || 'default-city',
                            name: parsed.cityName || 'City',
                            bounds: {
                                minX: 0,
                                minY: 0,
                                maxX: (parsed.gridSize || 50) - 1,
                                maxY: (parsed.gridSize || 50) - 1
                            },
                            economy: {
                                population: parsed.stats?.population || 0,
                                jobs: parsed.stats?.jobs || 0,
                                income: parsed.stats?.income || 0,
                                expenses: parsed.stats?.expenses || 0,
                                happiness: parsed.stats?.happiness || 50,
                                lastCalculated: 0
                            },
                            color: '#3b82f6'
                        }
                    ];
                }
                // Ensure hour exists for day/night cycle
                if (parsed.hour === undefined) {
                    parsed.hour = 12; // Default to noon
                }
                // Ensure effectiveTaxRate exists for lagging tax effect
                if (parsed.effectiveTaxRate === undefined) {
                    parsed.effectiveTaxRate = parsed.taxRate ?? 9; // Start at current tax rate
                }
                // Migrate constructionProgress for existing buildings (they're already built)
                if (parsed.grid) {
                    for(let y = 0; y < parsed.grid.length; y++){
                        for(let x = 0; x < parsed.grid[y].length; x++){
                            if (parsed.grid[y][x]?.building && parsed.grid[y][x].building.constructionProgress === undefined) {
                                parsed.grid[y][x].building.constructionProgress = 100; // Existing buildings are complete
                            }
                            // Migrate abandoned property for existing buildings (they're not abandoned)
                            if (parsed.grid[y][x]?.building && parsed.grid[y][x].building.abandoned === undefined) {
                                parsed.grid[y][x].building.abandoned = false;
                            }
                        }
                    }
                }
                // Ensure gameVersion exists for backward compatibility
                if (parsed.gameVersion === undefined) {
                    parsed.gameVersion = 0;
                }
                // Migrate to include UUID if missing
                if (!parsed.id) {
                    parsed.id = generateUUID();
                }
                return parsed;
            } else {
                localStorage.removeItem(STORAGE_KEY);
            }
        }
    } catch (e) {
        console.error('Failed to load game state:', e);
        // Clear corrupted data
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch (clearError) {
            console.error('Failed to clear corrupted game state:', clearError);
        }
    }
    return null;
}
// Optimize game state for saving by removing unnecessary/transient data
function optimizeStateForSave(state) {
    // Create a shallow copy to avoid mutating the original
    const optimized = {
        ...state
    };
    // Clear notifications (they're transient)
    optimized.notifications = [];
    // Clear advisor messages (they're regenerated each tick)
    optimized.advisorMessages = [];
    // Limit history to last 50 entries (instead of 100)
    if (optimized.history && optimized.history.length > 50) {
        optimized.history = optimized.history.slice(-50);
    }
    return optimized;
}
// Try to free up localStorage space by clearing old/unused data
function tryFreeLocalStorageSpace() {
    try {
        // Clear any old saved city restore data
        localStorage.removeItem(SAVED_CITY_STORAGE_KEY);
        // Clear sprite test data if any
        localStorage.removeItem('isocity_sprite_test');
        // Clear any other temporary keys
        const keysToRemove = [];
        for(let i = 0; i < localStorage.length; i++){
            const key = localStorage.key(i);
            if (key && key.startsWith('isocity_temp_')) {
                keysToRemove.push(key);
            }
        }
        keysToRemove.forEach((key)=>localStorage.removeItem(key));
    } catch (e) {
        console.error('Failed to free localStorage space:', e);
    }
}
// Save game state to localStorage with lz-string compression
// Compression typically reduces size by 60-80%, allowing much larger cities
// PERF: Uses Web Worker for BOTH serialization and compression - no main thread blocking!
async function saveGameStateAsync(state) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Validate state before saving
    if (!state || !state.grid || !state.gridSize || !state.stats) {
        console.error('Invalid game state, cannot save', {
            state,
            hasGrid: !!state?.grid,
            hasGridSize: !!state?.gridSize,
            hasStats: !!state?.stats
        });
        return;
    }
    try {
        // Step 1: Optimize state (fast, stays on main thread)
        const optimizedState = optimizeStateForSave(state);
        // Step 2: Serialize + Compress using Web Worker (BOTH operations off main thread!)
        const compressed = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$saveWorkerManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAndCompressAsync"])(optimizedState);
        // Check size limit
        if (compressed.length > 5 * 1024 * 1024) {
            console.error('Compressed game state too large to save:', compressed.length, 'chars');
            return;
        }
        // Step 3: Write to localStorage (fast)
        try {
            localStorage.setItem(STORAGE_KEY, compressed);
        } catch (quotaError) {
            if (quotaError instanceof DOMException && (quotaError.code === 22 || quotaError.code === 1014)) {
                console.warn('localStorage quota exceeded, trying to free space...');
                tryFreeLocalStorageSpace();
                try {
                    localStorage.setItem(STORAGE_KEY, compressed);
                } catch  {
                    console.error('localStorage still full after cleanup');
                }
            }
        }
    } catch (e) {
        console.error('Failed to save game state:', e);
    }
}
// Wrapper that takes a callback for compatibility with existing code
function saveGameState(state, callback) {
    saveGameStateAsync(state).finally(()=>{
        callback?.();
    });
}
// Clear saved game state
function clearGameState() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
        console.error('Failed to clear game state:', e);
    }
}
// Load sprite pack from localStorage
function loadSpritePackId() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const saved = localStorage.getItem(SPRITE_PACK_STORAGE_KEY);
        if (saved && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRITE_PACKS"].some((p)=>p.id === saved)) {
            return saved;
        }
    } catch (e) {
        console.error('Failed to load sprite pack preference:', e);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SPRITE_PACK_ID"];
}
// Save sprite pack to localStorage
function saveSpritePackId(packId) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.setItem(SPRITE_PACK_STORAGE_KEY, packId);
    } catch (e) {
        console.error('Failed to save sprite pack preference:', e);
    }
}
// Load day/night mode from localStorage
function loadDayNightMode() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const saved = localStorage.getItem(DAY_NIGHT_MODE_STORAGE_KEY);
        if (saved === 'auto' || saved === 'day' || saved === 'night') {
            return saved;
        }
    } catch (e) {
        console.error('Failed to load day/night mode preference:', e);
    }
    return 'auto';
}
// Save day/night mode to localStorage
function saveDayNightMode(mode) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.setItem(DAY_NIGHT_MODE_STORAGE_KEY, mode);
    } catch (e) {
        console.error('Failed to save day/night mode preference:', e);
    }
}
// Save current city for later restoration (when viewing shared cities)
function saveCityForRestore(state) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const savedData = {
            state: state,
            info: {
                cityName: state.cityName,
                population: state.stats.population,
                money: state.stats.money,
                savedAt: Date.now()
            }
        };
        const compressed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lz$2d$string$2f$libs$2f$lz$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compressToUTF16"])(JSON.stringify(savedData));
        localStorage.setItem(SAVED_CITY_STORAGE_KEY, compressed);
    } catch (e) {
        console.error('Failed to save city for restore:', e);
    }
}
// Helper to decompress saved city data (supports both compressed and legacy formats)
function decompressSavedCity(saved) {
    // Try to decompress first (new format)
    let jsonString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lz$2d$string$2f$libs$2f$lz$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decompressFromUTF16"])(saved);
    if (!jsonString) {
        // Legacy uncompressed format
        jsonString = saved;
    }
    try {
        return JSON.parse(jsonString);
    } catch  {
        return null;
    }
}
// Load saved city info (just metadata, not full state)
function loadSavedCityInfo() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const saved = localStorage.getItem(SAVED_CITY_STORAGE_KEY);
        if (saved) {
            const parsed = decompressSavedCity(saved);
            if (parsed?.info) {
                return parsed.info;
            }
        }
    } catch (e) {
        console.error('Failed to load saved city info:', e);
    }
    return null;
}
// Load full saved city state
function loadSavedCityState() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const saved = localStorage.getItem(SAVED_CITY_STORAGE_KEY);
        if (saved) {
            const parsed = decompressSavedCity(saved);
            if (parsed?.state && parsed.state.grid && parsed.state.gridSize && parsed.state.stats) {
                return parsed.state;
            }
        }
    } catch (e) {
        console.error('Failed to load saved city state:', e);
    }
    return null;
}
// Clear saved city
function clearSavedCityStorage() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.removeItem(SAVED_CITY_STORAGE_KEY);
    } catch (e) {
        console.error('Failed to clear saved city:', e);
    }
}
// Generate a UUID v4
function generateUUID() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    // Fallback for older environments
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=>{
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}
// Load saved cities index from localStorage
function loadSavedCitiesIndex() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const saved = localStorage.getItem(SAVED_CITIES_INDEX_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed)) {
                return parsed.filter((city)=>!!city && typeof city === 'object').map((city, index)=>({
                        id: typeof city.id === 'string' && city.id ? city.id : `city-${index}`,
                        cityName: typeof city.cityName === 'string' && city.cityName ? city.cityName : 'Saved City',
                        population: typeof city.population === 'number' ? city.population : 0,
                        money: typeof city.money === 'number' ? city.money : 0,
                        year: typeof city.year === 'number' ? city.year : 1,
                        month: typeof city.month === 'number' ? city.month : 1,
                        gridSize: typeof city.gridSize === 'number' ? city.gridSize : 24,
                        savedAt: typeof city.savedAt === 'number' ? city.savedAt : Date.now(),
                        roomCode: typeof city.roomCode === 'string' ? city.roomCode : undefined
                    }));
            }
        }
    } catch (e) {
        console.error('Failed to load saved cities index:', e);
    }
    return [];
}
// Save saved cities index to localStorage
function saveSavedCitiesIndex(cities) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.setItem(SAVED_CITIES_INDEX_KEY, JSON.stringify(cities));
    } catch (e) {
        console.error('Failed to save cities index:', e);
    }
}
// Save a city state to localStorage with compression
// PERF: Uses Web Worker for BOTH serialization and compression - no main thread blocking!
async function saveCityStateAsync(cityId, state) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        // Both JSON.stringify and compression happen in the worker
        const compressed = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$saveWorkerManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAndCompressAsync"])(state);
        if (compressed.length > 5 * 1024 * 1024) {
            console.error('Compressed city state too large to save');
            return;
        }
        localStorage.setItem(SAVED_CITY_PREFIX + cityId, compressed);
    } catch (e) {
        if (e instanceof DOMException && (e.code === 22 || e.code === 1014)) {
            console.error('localStorage quota exceeded');
        } else {
            console.error('Failed to save city state:', e);
        }
    }
}
// Wrapper for compatibility
function saveCityState(cityId, state) {
    saveCityStateAsync(cityId, state);
}
// Load a saved city state from localStorage (supports compressed and legacy formats)
function loadCityState(cityId) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const saved = localStorage.getItem(SAVED_CITY_PREFIX + cityId);
        if (saved) {
            // Try to decompress first (new format)
            // lz-string can return garbage when given invalid input, so check for valid JSON start
            let jsonString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lz$2d$string$2f$libs$2f$lz$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decompressFromUTF16"])(saved);
            // Check if decompression returned valid-looking JSON
            if (!jsonString || !jsonString.startsWith('{')) {
                // Check if saved string itself is JSON (legacy uncompressed format)
                if (saved.startsWith('{')) {
                    jsonString = saved;
                } else {
                    // Data is corrupted
                    console.error('Corrupted city save data for:', cityId);
                    return null;
                }
            }
            const parsed = JSON.parse(jsonString);
            if (parsed && parsed.grid && parsed.gridSize && parsed.stats) {
                return parsed;
            }
        }
    } catch (e) {
        console.error('Failed to load city state:', e);
    }
    return null;
}
// Delete a saved city from localStorage
function deleteCityState(cityId) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.removeItem(SAVED_CITY_PREFIX + cityId);
    } catch (e) {
        console.error('Failed to delete city state:', e);
    }
}
function GameProvider({ children, startFresh = false }) {
    _s();
    // Start with a default state, we'll load from localStorage after mount (unless startFresh is true)
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "GameProvider.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInitialGameState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_GRID_SIZE"], 'ISOBUSINESS')
    }["GameProvider.useState"]);
    const [hasExistingGame, setHasExistingGame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isStateReady, setIsStateReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const saveTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const skipNextSaveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const hasLoadedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Callback for multiplayer action broadcast
    const placeCallbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bridgeCallbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Sprite pack state
    const [currentSpritePack, setCurrentSpritePack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "GameProvider.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpritePack"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SPRITE_PACK_ID"])
    }["GameProvider.useState"]);
    // Day/night mode state
    const [dayNightMode, setDayNightModeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('auto');
    // Saved cities state for multi-city save system
    const [savedCities, setSavedCities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [investorSession, setInvestorSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [investorLoading, setInvestorLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const investorSessionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const vcSpawnTickRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const vcStealTickRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Load game state and sprite pack from localStorage on mount (client-side only)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameProvider.useEffect": ()=>{
            // Load sprite pack preference
            const savedPackId = loadSpritePackId();
            const pack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpritePack"])(savedPackId);
            setCurrentSpritePack(pack);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setActiveSpritePack"])(pack);
            // Load day/night mode preference
            const savedDayNightMode = loadDayNightMode();
            setDayNightModeState(savedDayNightMode);
            // Load saved cities index
            const cities = loadSavedCitiesIndex();
            setSavedCities(cities);
            // Load game state (unless startFresh is true - used for co-op to start with a new city)
            if (!startFresh) {
                const saved = loadGameState();
                if (saved) {
                    skipNextSaveRef.current = true; // Set skip flag BEFORE updating state
                    setState(saved);
                    setHasExistingGame(true);
                } else {
                    setHasExistingGame(false);
                }
            } else {
                setHasExistingGame(false);
            }
            // Mark as loaded immediately - the skipNextSaveRef will handle skipping the first save
            hasLoadedRef.current = true;
            // Mark state as ready - consumers should wait for this before using state
            setIsStateReady(true);
        }
    }["GameProvider.useEffect"], [
        startFresh
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameProvider.useEffect": ()=>{
            investorSessionRef.current = investorSession;
        }
    }["GameProvider.useEffect"], [
        investorSession
    ]);
    // Track the state that needs to be saved
    const lastSaveTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const saveIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Update the state to save whenever state changes
    // PERF: Just mark that state has changed - defer expensive deep copy to actual save time
    const stateChangedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const latestStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(state);
    latestStateRef.current = state;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameProvider.useEffect": ()=>{
            if (!hasLoadedRef.current) {
                return;
            }
            if (skipNextSaveRef.current) {
                skipNextSaveRef.current = false;
                lastSaveTimeRef.current = Date.now();
                return;
            }
            // PERF: Just mark that state changed instead of expensive deep copy every time
            stateChangedRef.current = true;
        }
    }["GameProvider.useEffect"], [
        state
    ]);
    // PERF: Track if a save is in progress to avoid overlapping saves
    const saveInProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Separate effect that actually performs saves on an interval
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameProvider.useEffect": ()=>{
            // Wait for initial load - just check once after a short delay
            const checkLoadedTimeout = setTimeout({
                "GameProvider.useEffect.checkLoadedTimeout": ()=>{
                    if (!hasLoadedRef.current) {
                        return;
                    }
                    // Clear any existing save interval
                    if (saveIntervalRef.current) {
                        clearInterval(saveIntervalRef.current);
                    }
                    // Set up interval to save every 5 seconds
                    // PERF: Save operation is broken into chunks internally to avoid blocking
                    saveIntervalRef.current = setInterval({
                        "GameProvider.useEffect.checkLoadedTimeout": ()=>{
                            // Don't save if we just loaded
                            if (skipNextSaveRef.current) {
                                skipNextSaveRef.current = false;
                                return;
                            }
                            // Don't save if a save is already in progress
                            if (saveInProgressRef.current) {
                                return;
                            }
                            // Don't save if state hasn't changed
                            if (!stateChangedRef.current) {
                                return;
                            }
                            // Mark save as in progress
                            saveInProgressRef.current = true;
                            stateChangedRef.current = false;
                            setIsSaving(true);
                            // PERF: No need for structuredClone here - the worker handles everything
                            // postMessage internally clones the data when sending to the worker
                            saveGameState(latestStateRef.current, {
                                "GameProvider.useEffect.checkLoadedTimeout": ()=>{
                                    lastSaveTimeRef.current = Date.now();
                                    setHasExistingGame(true);
                                    setIsSaving(false);
                                    saveInProgressRef.current = false;
                                }
                            }["GameProvider.useEffect.checkLoadedTimeout"]);
                        }
                    }["GameProvider.useEffect.checkLoadedTimeout"], 5000); // Save every 5 seconds
                }
            }["GameProvider.useEffect.checkLoadedTimeout"], 200); // Wait 200ms for initial load
            return ({
                "GameProvider.useEffect": ()=>{
                    clearTimeout(checkLoadedTimeout);
                    if (saveIntervalRef.current) {
                        clearInterval(saveIntervalRef.current);
                    }
                }
            })["GameProvider.useEffect"];
        }
    }["GameProvider.useEffect"], []);
    // PERF: Track tick count to only sync UI-visible changes to React periodically
    const tickCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastUiSyncRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Simulation loop - PERF: Runs simulation but throttles React updates aggressively
    // Grid updates go to ref (canvas reads from ref), React only gets UI updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameProvider.useEffect": ()=>{
            let timer = null;
            if (state.speed > 0) {
                // Check if running on mobile for performance optimization
                const isMobileDevice = ("TURBOPACK compile-time value", "object") !== 'undefined' && (window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
                // PERF: Balanced tick intervals
                // Desktop: 500ms, 300ms, 200ms for speeds 1, 2, 3
                // Mobile: 750ms, 450ms, 300ms for speeds 1, 2, 3
                const interval = isMobileDevice ? state.speed === 1 ? 750 : state.speed === 2 ? 450 : 300 : state.speed === 1 ? 500 : state.speed === 2 ? 300 : 200;
                timer = setInterval({
                    "GameProvider.useEffect": ()=>{
                        tickCountRef.current++;
                        const now = performance.now();
                        // PERF: Run simulation and update ref immediately (for canvas)
                        let nextTickState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["simulateTick"])(latestStateRef.current);
                        const selectedInvestor = investorSessionRef.current;
                        if (selectedInvestor) {
                            vcSpawnTickRef.current += 1;
                            vcStealTickRef.current += 1;
                            // Competition dynamics based on competitionDegree
                            const competitionDegree = nextTickState.competitionDegree ?? 32;
                            const isHighCompetition = competitionDegree > 60;
                            const isLowCompetition = competitionDegree < 20;
                            if (isHighCompetition) {
                                const expansionPressure = getExpansionPressure(nextTickState.gridSize);
                                // Increase netBurn (management fees)
                                nextTickState.stats.expenses = Math.round(nextTickState.stats.expenses * (1.15 + (expansionPressure - 1) * 0.04));
                                // Randomly trigger "rival investor stole a deal"
                                if (Math.random() < Math.min(0.18, 0.05 * expansionPressure)) {
                                    const competitors = selectedInvestor.rivalInvestors;
                                    if (competitors.length > 0) {
                                        const competitor = competitors[Math.floor(Math.random() * competitors.length)];
                                        setState({
                                            "GameProvider.useEffect": (prev)=>({
                                                    ...prev,
                                                    notifications: [
                                                        {
                                                            id: `vc-steal-high-${Date.now()}`,
                                                            title: 'Aggressive Rival Action',
                                                            description: `${competitor} aggressively outbid you on a hot deal. Confidence dropping.`,
                                                            icon: 'warning',
                                                            timestamp: Date.now()
                                                        },
                                                        ...prev.notifications.slice(0, 9)
                                                    ]
                                                })
                                        }["GameProvider.useEffect"]);
                                        nextTickState.stats.happiness = clamp(nextTickState.stats.happiness - 5, 0, 100);
                                    }
                                }
                                // Randomly trigger "portfolio competitor attacking revenue"
                                if (Math.random() < Math.min(0.14, 0.03 * expansionPressure)) {
                                    setState({
                                        "GameProvider.useEffect": (prev_0)=>({
                                                ...prev_0,
                                                notifications: [
                                                    {
                                                        id: `vc-attack-${Date.now()}`,
                                                        title: 'Market War',
                                                        description: 'A well-funded competitor is attacking your portfolio\'s core market.',
                                                        icon: 'trending-down',
                                                        timestamp: Date.now()
                                                    },
                                                    ...prev_0.notifications.slice(0, 9)
                                                ]
                                            })
                                    }["GameProvider.useEffect"]);
                                    nextTickState.stats.income = Math.round(nextTickState.stats.income * 0.9);
                                }
                            } else if (isLowCompetition) {
                                // Reduce portfolio company runway (reducing confidence/happiness)
                                if (Math.random() < 0.08) {
                                    nextTickState.stats.happiness = clamp(nextTickState.stats.happiness - 2, 0, 100);
                                }
                                // Reduce fund runway due to lack of LP engagement (simulated as expense increase)
                                if (Math.random() < 0.05) {
                                    nextTickState.stats.expenses = Math.round(nextTickState.stats.expenses * 1.05);
                                }
                            }
                            const expansionPressure_0 = getExpansionPressure(nextTickState.gridSize);
                            const spawnInterval = Math.max(8, Math.round(18 / expansionPressure_0));
                            if (vcSpawnTickRef.current >= spawnInterval) {
                                vcSpawnTickRef.current = 0;
                                const tile = findEmptyGrassTile(nextTickState.grid);
                                const hasSimilarCompetitors = selectedInvestor.similarCompanies.length > 0;
                                const opportunityPool = hasSimilarCompetitors ? selectedInvestor.similarCompanies : selectedInvestor.portfolio;
                                const isCompetitorOpportunity = hasSimilarCompetitors;
                                if (tile && opportunityPool.length > 0) {
                                    const anchor = opportunityPool[(nextTickState.month + nextTickState.day + tickCountRef.current) % opportunityPool.length];
                                    const selectedOpportunity = isCompetitorOpportunity ? anchor : {
                                        id: `opportunity-${anchor.id}-${nextTickState.tick}-${tickCountRef.current}`,
                                        name: `${anchor.name} Next`,
                                        domain: anchor.domain,
                                        industry: anchor.industry,
                                        stage: anchor.stage,
                                        valuationUsd: Math.max(3_000_000, Math.round(anchor.valuationUsd * 0.4)),
                                        headcount: Math.max(6, Math.round(anchor.headcount * 0.35)),
                                        runwayMonths: Math.max(8, Math.round(anchor.runwayMonths * 0.8)),
                                        growthMomentumPct: anchor.growthMomentumPct
                                    };
                                    const markerAlreadyExists = (nextTickState.portfolioCompanyTiles || []).some({
                                        "GameProvider.useEffect.markerAlreadyExists": (entry)=>entry.companyId === selectedOpportunity.id
                                    }["GameProvider.useEffect.markerAlreadyExists"]);
                                    if (!markerAlreadyExists) {
                                        const buildingType = pickOpportunityBuildingType(selectedOpportunity.industry, selectedOpportunity.valuationUsd, selectedOpportunity.headcount);
                                        const placed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placeBuilding"])(nextTickState, tile.x, tile.y, buildingType, null);
                                        if (placed !== nextTickState) {
                                            // Kick off Specter agents for new opportunities
                                            kickoffSpecterAgents(selectedOpportunity.id);
                                            const rivalForOpportunity = selectedInvestor.rivalInvestors.length > 0 ? selectedInvestor.rivalInvestors[(nextTickState.month + nextTickState.day + tickCountRef.current) % Math.max(selectedInvestor.rivalInvestors.length, 1)] : undefined;
                                            setState({
                                                "GameProvider.useEffect": (prev_1)=>({
                                                        ...prev_1,
                                                        notifications: [
                                                            {
                                                                id: `vc-opportunity-${Date.now()}`,
                                                                title: isCompetitorOpportunity ? 'Competitor Company Spotted' : 'New Deal Signal',
                                                                description: isCompetitorOpportunity ? `${selectedOpportunity.name} entered as a competitor in your portfolio's sector.` : `${selectedOpportunity.name} surfaced as an investable opportunity for ${selectedInvestor.profile.name}.`,
                                                                icon: 'chart',
                                                                timestamp: Date.now()
                                                            },
                                                            ...prev_1.notifications.slice(0, 9)
                                                        ]
                                                    })
                                            }["GameProvider.useEffect"]);
                                            nextTickState = {
                                                ...placed,
                                                pendingOpportunities: isCompetitorOpportunity ? placed.pendingOpportunities || [] : [
                                                    ...placed.pendingOpportunities || [],
                                                    {
                                                        id: `opp-${selectedOpportunity.id}-${Date.now()}`,
                                                        companyId: selectedOpportunity.id,
                                                        name: selectedOpportunity.name,
                                                        kind: 'opportunity',
                                                        industry: selectedOpportunity.industry,
                                                        stage: selectedOpportunity.stage,
                                                        valuationUsd: selectedOpportunity.valuationUsd,
                                                        headcount: selectedOpportunity.headcount,
                                                        rivalInvestor: rivalForOpportunity,
                                                        openRound: true,
                                                        createdAt: Date.now()
                                                    }
                                                ],
                                                portfolioCompanyTiles: [
                                                    ...placed.portfolioCompanyTiles || [],
                                                    {
                                                        companyId: selectedOpportunity.id,
                                                        name: selectedOpportunity.name,
                                                        x: tile.x,
                                                        y: tile.y,
                                                        kind: isCompetitorOpportunity ? 'competitor' : 'opportunity',
                                                        size: classifyCompanySize(selectedOpportunity.valuationUsd, selectedOpportunity.headcount),
                                                        headcount: selectedOpportunity.headcount
                                                    }
                                                ]
                                            };
                                        }
                                    }
                                }
                            }
                            const stealInterval = Math.max(12, Math.round(27 / expansionPressure_0));
                            if (vcStealTickRef.current >= stealInterval) {
                                vcStealTickRef.current = 0;
                                const competitors_0 = selectedInvestor.rivalInvestors;
                                const currentQueue = selectedInvestor.portfolio;
                                if (currentQueue.length > 0 && Math.random() < 0.45) {
                                    const candidate = currentQueue[(nextTickState.month + nextTickState.day + tickCountRef.current) % currentQueue.length];
                                    const alreadyOpen = (nextTickState.pendingOpportunities || []).some({
                                        "GameProvider.useEffect.alreadyOpen": (entry_0)=>entry_0.companyId === candidate.id && entry_0.kind === 'portfolio_round' && entry_0.openRound
                                    }["GameProvider.useEffect.alreadyOpen"]);
                                    if (!alreadyOpen) {
                                        nextTickState = {
                                            ...nextTickState,
                                            pendingOpportunities: [
                                                ...nextTickState.pendingOpportunities || [],
                                                {
                                                    id: `round-${candidate.id}-${Date.now()}`,
                                                    companyId: candidate.id,
                                                    name: candidate.name,
                                                    kind: 'portfolio_round',
                                                    industry: candidate.industry,
                                                    stage: candidate.stage,
                                                    valuationUsd: candidate.valuationUsd,
                                                    headcount: candidate.headcount,
                                                    openRound: true,
                                                    createdAt: Date.now()
                                                }
                                            ]
                                        };
                                    }
                                }
                                if (competitors_0.length > 0 && currentQueue.length > 0) {
                                    const competitor_0 = competitors_0[(nextTickState.month + tickCountRef.current) % Math.max(competitors_0.length, 1)];
                                    const stolen = currentQueue[0];
                                    setInvestorSession({
                                        "GameProvider.useEffect": (prevSession)=>{
                                            if (!prevSession) return prevSession;
                                            return {
                                                ...prevSession,
                                                rivalInvestors: prevSession.rivalInvestors.includes(competitor_0) ? prevSession.rivalInvestors : [
                                                    competitor_0,
                                                    ...prevSession.rivalInvestors
                                                ].slice(0, 8),
                                                stats: {
                                                    ...prevSession.stats,
                                                    investorConfidencePercentile: clamp(prevSession.stats.investorConfidencePercentile - 3, 0, 100),
                                                    dealFlow: clamp(prevSession.stats.dealFlow - 1, 0, 99)
                                                }
                                            };
                                        }
                                    }["GameProvider.useEffect"]);
                                    nextTickState = {
                                        ...nextTickState,
                                        stats: {
                                            ...nextTickState.stats,
                                            happiness: clamp(nextTickState.stats.happiness - 2, 0, 100),
                                            demand: {
                                                ...nextTickState.stats.demand,
                                                commercial: clamp(nextTickState.stats.demand.commercial - 4, -100, 100)
                                            }
                                        }
                                    };
                                    setState({
                                        "GameProvider.useEffect": (prev_2)=>({
                                                ...prev_2,
                                                notifications: [
                                                    {
                                                        id: `vc-steal-${Date.now()}`,
                                                        title: 'Deal Contested',
                                                        description: `${competitor_0} pre-empted ${stolen.name}; confidence and deal flow took a hit.`,
                                                        icon: 'warning',
                                                        timestamp: Date.now()
                                                    },
                                                    ...prev_2.notifications.slice(0, 9)
                                                ]
                                            })
                                    }["GameProvider.useEffect"]);
                                }
                            }
                        }
                        latestStateRef.current = nextTickState;
                        stateChangedRef.current = true;
                        // PERF: Only sync to React every 500ms to avoid expensive reconciliation
                        // Canvas reads from latestStateRef so it sees updates immediately
                        // React state is only needed for UI elements (stats, budget display)
                        if (now - lastUiSyncRef.current >= 500) {
                            lastUiSyncRef.current = now;
                            setState(nextTickState);
                        }
                    }
                }["GameProvider.useEffect"], interval);
            }
            return ({
                "GameProvider.useEffect": ()=>{
                    if (timer) {
                        clearInterval(timer);
                    }
                }
            })["GameProvider.useEffect"];
        }
    }["GameProvider.useEffect"], [
        state.speed
    ]);
    const setTool = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[setTool]": (tool)=>{
            setState({
                "GameProvider.useCallback[setTool]": (prev_3)=>({
                        ...prev_3,
                        selectedTool: tool,
                        activePanel: 'none'
                    })
            }["GameProvider.useCallback[setTool]"]);
        }
    }["GameProvider.useCallback[setTool]"], []);
    const setSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[setSpeed]": (speed)=>{
            setState({
                "GameProvider.useCallback[setSpeed]": (prev_4)=>({
                        ...prev_4,
                        speed
                    })
            }["GameProvider.useCallback[setSpeed]"]);
        }
    }["GameProvider.useCallback[setSpeed]"], []);
    const setTaxRate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[setTaxRate]": (rate)=>{
            setState({
                "GameProvider.useCallback[setTaxRate]": (prev_5)=>({
                        ...prev_5,
                        taxRate: clamp(rate, 0, 100)
                    })
            }["GameProvider.useCallback[setTaxRate]"]);
        }
    }["GameProvider.useCallback[setTaxRate]"], []);
    const setCompetitionDegree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[setCompetitionDegree]": (degree)=>{
            setState({
                "GameProvider.useCallback[setCompetitionDegree]": (prev_6)=>({
                        ...prev_6,
                        competitionDegree: clamp(degree, 0, 100)
                    })
            }["GameProvider.useCallback[setCompetitionDegree]"]);
        }
    }["GameProvider.useCallback[setCompetitionDegree]"], []);
    const runInvestorAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[runInvestorAction]": (actionId, targetCompanyId)=>{
            const actionEffects = {
                source_deals: {
                    title: 'Deal Flow Sourced',
                    description: 'Scan the ecosystem for high-potential startups.',
                    city: {
                        money: -10_000,
                        happiness: 3
                    },
                    investor: {
                        dealFlow: 5,
                        dryPowder: -10_000
                    }
                },
                lead_round: {
                    title: 'Round Led',
                    description: 'Lead a high-conviction financing round.',
                    city: {
                        money: -100_000,
                        education: 8,
                        income: 120
                    },
                    investor: {
                        ecosystemValue: 5_000_000,
                        investorConfidencePercentile: 10,
                        dryPowder: -100_000
                    }
                },
                hiring_support: {
                    title: 'Talent Deployed',
                    description: 'Deploy recruiting help to portfolio teams.',
                    city: {
                        money: -25_000,
                        environment: 7,
                        health: 2
                    },
                    investor: {
                        hiringVelocityPercentile: 15,
                        dryPowder: -25_000
                    }
                },
                gtm_intro: {
                    title: 'GTM Intro Activated',
                    description: 'Unlock customer and partner introductions.',
                    city: {
                        money: -15_000,
                        safety: 4,
                        environment: 3,
                        income: 500
                    },
                    investor: {
                        growthMomentumPercentile: 12,
                        dryPowder: -15_000
                    }
                },
                defend_deal: {
                    title: 'Deal Defended',
                    description: 'Protect allocation against competing funds.',
                    city: {
                        money: -30_000,
                        safety: 10,
                        happiness: 5
                    },
                    investor: {
                        investorConfidencePercentile: 12,
                        dryPowder: -30_000
                    }
                },
                follow_on: {
                    title: 'Follow-on Deployed',
                    description: 'Double down on top-performing companies.',
                    city: {
                        money: -75_000,
                        education: 5,
                        happiness: 2,
                        income: 250
                    },
                    investor: {
                        ecosystemValue: 3_200_000,
                        dryPowder: -75_000
                    }
                }
            };
            const effect = actionEffects[actionId];
            if (!effect) return;
            const actionsNeedingCounterparty = new Set([
                'lead_round',
                'defend_deal',
                'follow_on',
                'gtm_intro',
                'hiring_support'
            ]);
            if (actionsNeedingCounterparty.has(actionId) && !targetCompanyId) {
                setState({
                    "GameProvider.useCallback[runInvestorAction]": (prev_7)=>({
                            ...prev_7,
                            notifications: [
                                {
                                    id: `action-target-required-${Date.now()}`,
                                    title: 'Select Target Company',
                                    description: 'Use Inspect on a company tile to choose who this action should target.',
                                    icon: 'warning',
                                    timestamp: Date.now()
                                },
                                ...prev_7.notifications.slice(0, 9)
                            ]
                        })
                }["GameProvider.useCallback[runInvestorAction]"]);
                return;
            }
            const pendingEntries = latestStateRef.current.pendingOpportunities || [];
            const targetOpportunity = targetCompanyId ? pendingEntries.find({
                "GameProvider.useCallback[runInvestorAction]": (entry_1)=>entry_1.companyId === targetCompanyId && entry_1.openRound
            }["GameProvider.useCallback[runInvestorAction]"]) : undefined;
            if (actionsNeedingCounterparty.has(actionId) && !targetOpportunity) {
                setState({
                    "GameProvider.useCallback[runInvestorAction]": (prev_8)=>({
                            ...prev_8,
                            notifications: [
                                {
                                    id: `action-round-closed-${Date.now()}`,
                                    title: 'Round Not Open',
                                    description: 'That company is not currently in an open financing process.',
                                    icon: 'warning',
                                    timestamp: Date.now()
                                },
                                ...prev_8.notifications.slice(0, 9)
                            ]
                        })
                }["GameProvider.useCallback[runInvestorAction]"]);
                return;
            }
            if (targetOpportunity?.rivalInvestor) {
                const competitionDegree_0 = latestStateRef.current.competitionDegree ?? 32;
                const baseWinChance = actionId === 'defend_deal' ? 0.66 : actionId === 'follow_on' ? 0.62 : actionId === 'gtm_intro' ? 0.58 : 0.56;
                const adjustedWinChance = clamp(baseWinChance - (competitionDegree_0 - 50) * 0.004, 0.22, 0.88);
                if (Math.random() > adjustedWinChance) {
                    setState({
                        "GameProvider.useCallback[runInvestorAction]": (prev_9)=>({
                                ...prev_9,
                                pendingOpportunities: (prev_9.pendingOpportunities || []).filter({
                                    "GameProvider.useCallback[runInvestorAction]": (entry_2)=>entry_2.id !== targetOpportunity.id
                                }["GameProvider.useCallback[runInvestorAction]"]),
                                notifications: [
                                    {
                                        id: `action-lost-${Date.now()}`,
                                        title: 'Round Lost to Rival',
                                        description: `${targetOpportunity.rivalInvestor} convinced ${targetOpportunity.name} to take their offer.`,
                                        icon: 'warning',
                                        timestamp: Date.now()
                                    },
                                    ...prev_9.notifications.slice(0, 9)
                                ]
                            })
                    }["GameProvider.useCallback[runInvestorAction]"]);
                    setInvestorSession({
                        "GameProvider.useCallback[runInvestorAction]": (prevSession_0)=>{
                            if (!prevSession_0) return prevSession_0;
                            return {
                                ...prevSession_0,
                                stats: {
                                    ...prevSession_0.stats,
                                    investorConfidencePercentile: clamp(prevSession_0.stats.investorConfidencePercentile - 6, 0, 100),
                                    dealFlow: clamp(prevSession_0.stats.dealFlow - 1, 0, 99)
                                }
                            };
                        }
                    }["GameProvider.useCallback[runInvestorAction]"]);
                    return;
                }
            }
            setInvestorSession({
                "GameProvider.useCallback[runInvestorAction]": (prevSession_1)=>{
                    if (!prevSession_1) return prevSession_1;
                    const prevStats = prevSession_1.stats;
                    const isLeadRoundOnNewOpportunity = actionId === 'lead_round' && !!targetOpportunity && targetOpportunity.kind === 'opportunity';
                    const promotedCompany = isLeadRoundOnNewOpportunity ? {
                        id: targetOpportunity.companyId,
                        name: targetOpportunity.name,
                        domain: '',
                        industry: targetOpportunity.industry || 'Software',
                        stage: targetOpportunity.stage || 'Seed',
                        valuationUsd: targetOpportunity.valuationUsd || 12_000_000,
                        headcount: targetOpportunity.headcount || 18,
                        runwayMonths: 14,
                        growthMomentumPct: 62
                    } : null;
                    return {
                        ...prevSession_1,
                        portfolio: promotedCompany ? [
                            promotedCompany,
                            ...prevSession_1.portfolio
                        ].slice(0, 28) : prevSession_1.portfolio,
                        stats: {
                            ...prevStats,
                            ecosystemValue: Math.max(0, prevStats.ecosystemValue + (effect.investor.ecosystemValue ?? 0) + (promotedCompany?.valuationUsd || 0)),
                            operatorHeadcount: Math.max(0, prevStats.operatorHeadcount + (effect.investor.operatorHeadcount ?? 0) + (promotedCompany?.headcount || 0)),
                            dryPowder: Math.max(0, prevStats.dryPowder + (effect.investor.dryPowder ?? 0)),
                            netBurn: prevStats.netBurn + (effect.investor.netBurn ?? 0),
                            runwayMonths: Math.max(1, Number((prevStats.runwayMonths + (effect.investor.runwayMonths ?? 0)).toFixed(1))),
                            dealFlow: clamp(prevStats.dealFlow + (effect.investor.dealFlow ?? 0), 0, 99),
                            pmfSignalPercentile: clamp(prevStats.pmfSignalPercentile + (effect.investor.pmfSignalPercentile ?? 0), 0, 100),
                            growthMomentumPercentile: clamp(prevStats.growthMomentumPercentile + (effect.investor.growthMomentumPercentile ?? 0), 0, 100),
                            burnDisciplinePercentile: clamp(prevStats.burnDisciplinePercentile + (effect.investor.burnDisciplinePercentile ?? 0), 0, 100),
                            investorConfidencePercentile: clamp(prevStats.investorConfidencePercentile + (effect.investor.investorConfidencePercentile ?? 0), 0, 100),
                            hiringVelocityPercentile: clamp(prevStats.hiringVelocityPercentile + (effect.investor.hiringVelocityPercentile ?? 0), 0, 100)
                        }
                    };
                }
            }["GameProvider.useCallback[runInvestorAction]"]);
            setState({
                "GameProvider.useCallback[runInvestorAction]": (prev_10)=>{
                    const isTargetedAction = actionsNeedingCounterparty.has(actionId);
                    const resolvedTargetName = targetOpportunity?.name || 'selected company';
                    const nextStats = {
                        ...prev_10.stats,
                        money: prev_10.stats.money + (effect.city.money ?? 0),
                        income: Math.max(0, prev_10.stats.income + (effect.city.income ?? 0)),
                        expenses: Math.max(0, prev_10.stats.expenses + (effect.city.expenses ?? 0)),
                        happiness: clamp(prev_10.stats.happiness + (effect.city.happiness ?? 0), 0, 100),
                        education: clamp(prev_10.stats.education + (effect.city.education ?? 0), 0, 100),
                        health: clamp(prev_10.stats.health + (effect.city.health ?? 0), 0, 100),
                        safety: clamp(prev_10.stats.safety + (effect.city.safety ?? 0), 0, 100),
                        environment: clamp(prev_10.stats.environment + (effect.city.environment ?? 0), 0, 100)
                    };
                    return {
                        ...prev_10,
                        stats: nextStats,
                        pendingOpportunities: isTargetedAction && targetOpportunity ? (prev_10.pendingOpportunities || []).filter({
                            "GameProvider.useCallback[runInvestorAction]": (entry_3)=>entry_3.id !== targetOpportunity.id
                        }["GameProvider.useCallback[runInvestorAction]"]) : prev_10.pendingOpportunities,
                        portfolioCompanyTiles: actionId === 'lead_round' && targetOpportunity && targetOpportunity.kind === 'opportunity' ? (prev_10.portfolioCompanyTiles || []).map({
                            "GameProvider.useCallback[runInvestorAction]": (tile_0)=>tile_0.companyId === targetOpportunity.companyId ? {
                                    ...tile_0,
                                    kind: 'portfolio'
                                } : tile_0
                        }["GameProvider.useCallback[runInvestorAction]"]) : prev_10.portfolioCompanyTiles,
                        notifications: [
                            {
                                id: `action-${Date.now()}`,
                                title: effect.title,
                                description: isTargetedAction ? `${effect.description} Target: ${resolvedTargetName}.` : effect.description,
                                icon: 'sparkles',
                                timestamp: Date.now()
                            },
                            ...prev_10.notifications.slice(0, 9)
                        ]
                    };
                }
            }["GameProvider.useCallback[runInvestorAction]"]);
        }
    }["GameProvider.useCallback[runInvestorAction]"], []);
    const setActivePanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[setActivePanel]": (panel)=>{
            setState({
                "GameProvider.useCallback[setActivePanel]": (prev_11)=>({
                        ...prev_11,
                        activePanel: panel
                    })
            }["GameProvider.useCallback[setActivePanel]"]);
        }
    }["GameProvider.useCallback[setActivePanel]"], []);
    const setBudgetFunding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[setBudgetFunding]": (key, funding)=>{
            const clamped = clamp(funding, 0, 100);
            setState({
                "GameProvider.useCallback[setBudgetFunding]": (prev_12)=>({
                        ...prev_12,
                        budget: {
                            ...prev_12.budget,
                            [key]: {
                                ...prev_12.budget[key],
                                funding: clamped
                            }
                        }
                    })
            }["GameProvider.useCallback[setBudgetFunding]"]);
        }
    }["GameProvider.useCallback[setBudgetFunding]"], []);
    const placeAtTile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[placeAtTile]": (x, y, isRemote = false)=>{
            // For multiplayer broadcast, we need to capture the tool synchronously
            // before React batches the setState. We read from the latest state ref.
            const currentTool = latestStateRef.current.selectedTool;
            setState({
                "GameProvider.useCallback[placeAtTile]": (prev_13)=>{
                    const tool_0 = prev_13.selectedTool;
                    if (tool_0 === 'select') return prev_13;
                    const info = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOL_INFO"][tool_0];
                    const cost = info?.cost ?? 0;
                    const tile_1 = prev_13.grid[y]?.[x];
                    if (!tile_1) return prev_13;
                    if (cost > 0 && prev_13.stats.money < cost) return prev_13;
                    // Prevent wasted spend if nothing would change
                    if (tool_0 === 'bulldoze' && tile_1.building.type === 'grass' && tile_1.zone === 'none') {
                        return prev_13;
                    }
                    const building = toolBuildingMap[tool_0];
                    const zone = toolZoneMap[tool_0];
                    if (zone && tile_1.zone === zone) return prev_13;
                    if (building && tile_1.building.type === building) return prev_13;
                    // Handle subway tool separately (underground placement)
                    if (tool_0 === 'subway') {
                        // Can't place subway under water
                        if (tile_1.building.type === 'water') return prev_13;
                        // Already has subway
                        if (tile_1.hasSubway) return prev_13;
                        const nextState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placeSubway"])(prev_13, x, y);
                        if (nextState === prev_13) return prev_13;
                        return {
                            ...nextState,
                            stats: {
                                ...nextState.stats,
                                money: nextState.stats.money - cost
                            }
                        };
                    }
                    // Handle water terraform tool separately
                    if (tool_0 === 'zone_water') {
                        // Already water - do nothing
                        if (tile_1.building.type === 'water') return prev_13;
                        // Don't allow terraforming bridges - would break them
                        if (tile_1.building.type === 'bridge') return prev_13;
                        const nextState_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placeWaterTerraform"])(prev_13, x, y);
                        if (nextState_0 === prev_13) return prev_13;
                        return {
                            ...nextState_0,
                            stats: {
                                ...nextState_0.stats,
                                money: nextState_0.stats.money - cost
                            }
                        };
                    }
                    // Handle land terraform tool separately
                    if (tool_0 === 'zone_land') {
                        // Only works on water
                        if (tile_1.building.type !== 'water') return prev_13;
                        const nextState_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placeLandTerraform"])(prev_13, x, y);
                        if (nextState_1 === prev_13) return prev_13;
                        return {
                            ...nextState_1,
                            stats: {
                                ...nextState_1.stats,
                                money: nextState_1.stats.money - cost
                            }
                        };
                    }
                    let nextState_2;
                    if (tool_0 === 'bulldoze') {
                        nextState_2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bulldozeTile"])(prev_13, x, y);
                    } else if (zone) {
                        nextState_2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placeBuilding"])(prev_13, x, y, null, zone);
                    } else if (building) {
                        nextState_2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placeBuilding"])(prev_13, x, y, building, null);
                    } else {
                        return prev_13;
                    }
                    if (nextState_2 === prev_13) return prev_13;
                    if (cost > 0) {
                        nextState_2 = {
                            ...nextState_2,
                            stats: {
                                ...nextState_2.stats,
                                money: nextState_2.stats.money - cost
                            }
                        };
                    }
                    return nextState_2;
                }
            }["GameProvider.useCallback[placeAtTile]"]);
            // Broadcast to multiplayer if this is a local action (not remote)
            // We use the tool captured before setState since React 18 batches async
            if (!isRemote && currentTool !== 'select' && placeCallbackRef.current) {
                placeCallbackRef.current({
                    x,
                    y,
                    tool: currentTool
                });
            }
        }
    }["GameProvider.useCallback[placeAtTile]"], []);
    const upgradeServiceBuildingHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[upgradeServiceBuildingHandler]": (x_0, y_0)=>{
            let upgradeSucceeded = false;
            setState({
                "GameProvider.useCallback[upgradeServiceBuildingHandler]": (prev_14)=>{
                    const upgradedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upgradeServiceBuilding"])(prev_14, x_0, y_0);
                    if (upgradedState) {
                        upgradeSucceeded = true;
                        return upgradedState;
                    }
                    return prev_14;
                }
            }["GameProvider.useCallback[upgradeServiceBuildingHandler]"]);
            return upgradeSucceeded;
        }
    }["GameProvider.useCallback[upgradeServiceBuildingHandler]"], []);
    // Called after a road/rail drag operation to create bridges for water crossings
    const finishTrackDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[finishTrackDrag]": (pathTiles, trackType, isRemote_0 = false)=>{
            setState({
                "GameProvider.useCallback[finishTrackDrag]": (prev_15)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBridgesOnPath"])(prev_15, pathTiles, trackType)
            }["GameProvider.useCallback[finishTrackDrag]"]);
            // Broadcast to multiplayer if this is a local action (not remote)
            if (!isRemote_0 && bridgeCallbackRef.current) {
                bridgeCallbackRef.current({
                    pathTiles,
                    trackType
                });
            }
        }
    }["GameProvider.useCallback[finishTrackDrag]"], []);
    const connectToCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[connectToCity]": (cityId)=>{
            setState({
                "GameProvider.useCallback[connectToCity]": (prev_16)=>{
                    const city = prev_16.adjacentCities.find({
                        "GameProvider.useCallback[connectToCity].city": (c)=>c.id === cityId
                    }["GameProvider.useCallback[connectToCity].city"]);
                    if (!city || city.connected) return prev_16;
                    // Mark city as connected (and discovered if not already) and add trade income
                    const updatedCities = prev_16.adjacentCities.map({
                        "GameProvider.useCallback[connectToCity].updatedCities": (c_0)=>c_0.id === cityId ? {
                                ...c_0,
                                connected: true,
                                discovered: true
                            } : c_0
                    }["GameProvider.useCallback[connectToCity].updatedCities"]);
                    // Add trade income bonus (one-time bonus + monthly income)
                    const tradeBonus = 5000;
                    const tradeIncome = 200; // Monthly income from trade
                    return {
                        ...prev_16,
                        adjacentCities: updatedCities,
                        stats: {
                            ...prev_16.stats,
                            money: prev_16.stats.money + tradeBonus,
                            income: prev_16.stats.income + tradeIncome
                        },
                        notifications: [
                            {
                                id: `city-connect-${Date.now()}`,
                                title: 'City Connected!',
                                description: `Trade route established with ${city.name}. +$${tradeBonus} bonus and +$${tradeIncome}/month income.`,
                                icon: 'road',
                                timestamp: Date.now()
                            },
                            ...prev_16.notifications.slice(0, 9) // Keep only 10 most recent
                        ]
                    };
                }
            }["GameProvider.useCallback[connectToCity]"]);
        }
    }["GameProvider.useCallback[connectToCity]"], []);
    const discoverCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[discoverCity]": (cityId_0)=>{
            setState({
                "GameProvider.useCallback[discoverCity]": (prev_17)=>{
                    const city_0 = prev_17.adjacentCities.find({
                        "GameProvider.useCallback[discoverCity].city_0": (c_1)=>c_1.id === cityId_0
                    }["GameProvider.useCallback[discoverCity].city_0"]);
                    if (!city_0 || city_0.discovered) return prev_17;
                    // Mark city as discovered
                    const updatedCities_0 = prev_17.adjacentCities.map({
                        "GameProvider.useCallback[discoverCity].updatedCities_0": (c_2)=>c_2.id === cityId_0 ? {
                                ...c_2,
                                discovered: true
                            } : c_2
                    }["GameProvider.useCallback[discoverCity].updatedCities_0"]);
                    return {
                        ...prev_17,
                        adjacentCities: updatedCities_0,
                        notifications: [
                            {
                                id: `city-discover-${Date.now()}`,
                                title: 'City Discovered!',
                                description: `Your road has reached the ${city_0.direction} border! You can now connect to ${city_0.name}.`,
                                icon: 'road',
                                timestamp: Date.now()
                            },
                            ...prev_17.notifications.slice(0, 9) // Keep only 10 most recent
                        ]
                    };
                }
            }["GameProvider.useCallback[discoverCity]"]);
        }
    }["GameProvider.useCallback[discoverCity]"], []);
    // Check for cities that should be discovered based on roads reaching edges
    // Calls onDiscover callback with city info if a new city was discovered
    const checkAndDiscoverCities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[checkAndDiscoverCities]": (onDiscover)=>{
            setState({
                "GameProvider.useCallback[checkAndDiscoverCities]": (prev_18)=>{
                    const newlyDiscovered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkForDiscoverableCities"])(prev_18.grid, prev_18.gridSize, prev_18.adjacentCities);
                    if (newlyDiscovered.length === 0) return prev_18;
                    // Discover the first city found
                    const cityToDiscover = newlyDiscovered[0];
                    const updatedCities_1 = prev_18.adjacentCities.map({
                        "GameProvider.useCallback[checkAndDiscoverCities].updatedCities_1": (c_3)=>c_3.id === cityToDiscover.id ? {
                                ...c_3,
                                discovered: true
                            } : c_3
                    }["GameProvider.useCallback[checkAndDiscoverCities].updatedCities_1"]);
                    // Call the callback after state update is scheduled
                    if (onDiscover) {
                        setTimeout({
                            "GameProvider.useCallback[checkAndDiscoverCities]": ()=>{
                                onDiscover({
                                    id: cityToDiscover.id,
                                    direction: cityToDiscover.direction,
                                    name: cityToDiscover.name
                                });
                            }
                        }["GameProvider.useCallback[checkAndDiscoverCities]"], 0);
                    }
                    return {
                        ...prev_18,
                        adjacentCities: updatedCities_1
                    };
                }
            }["GameProvider.useCallback[checkAndDiscoverCities]"]);
        }
    }["GameProvider.useCallback[checkAndDiscoverCities]"], []);
    const setDisastersEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[setDisastersEnabled]": (enabled)=>{
            setState({
                "GameProvider.useCallback[setDisastersEnabled]": (prev_19)=>({
                        ...prev_19,
                        disastersEnabled: enabled
                    })
            }["GameProvider.useCallback[setDisastersEnabled]"]);
        }
    }["GameProvider.useCallback[setDisastersEnabled]"], []);
    const setPlaceCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[setPlaceCallback]": (callback)=>{
            placeCallbackRef.current = callback;
        }
    }["GameProvider.useCallback[setPlaceCallback]"], []);
    const setBridgeCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[setBridgeCallback]": (callback_0)=>{
            bridgeCallbackRef.current = callback_0;
        }
    }["GameProvider.useCallback[setBridgeCallback]"], []);
    const setSpritePack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[setSpritePack]": (packId)=>{
            const pack_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpritePack"])(packId);
            setCurrentSpritePack(pack_0);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setActiveSpritePack"])(pack_0);
            saveSpritePackId(packId);
        }
    }["GameProvider.useCallback[setSpritePack]"], []);
    const setDayNightMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[setDayNightMode]": (mode)=>{
            setDayNightModeState(mode);
            saveDayNightMode(mode);
        }
    }["GameProvider.useCallback[setDayNightMode]"], []);
    // Compute the visual hour based on the day/night mode override
    // This doesn't affect time progression, just the rendering
    const visualHour = dayNightMode === 'auto' ? state.hour : dayNightMode === 'day' ? 12 // Noon - full daylight
     : 22; // Night time
    const newGame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[newGame]": (name, size)=>{
            clearGameState(); // Clear saved state when starting fresh
            const fresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInitialGameState"])(size ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_GRID_SIZE"], name || 'ISOBUSINESS');
            fresh.competitionDegree = 32;
            let seeded = fresh;
            const activeSession = investorSessionRef.current;
            if (activeSession && activeSession.portfolio.length > 0) {
                activeSession.portfolio.slice(0, 6).forEach({
                    "GameProvider.useCallback[newGame]": (company)=>{
                        const tile_2 = findEmptyGrassTile(seeded.grid);
                        if (!tile_2) return;
                        const buildingType_0 = pickOpportunityBuildingType(company.industry, company.valuationUsd, company.headcount);
                        seeded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placeBuilding"])(seeded, tile_2.x, tile_2.y, buildingType_0, null);
                    }
                }["GameProvider.useCallback[newGame]"]);
                seeded = {
                    ...seeded,
                    notifications: [
                        {
                            id: `investor-seed-${Date.now()}`,
                            title: 'Portfolio companies seeded',
                            description: `Starting map seeded from ${activeSession.profile.name}'s portfolio.`,
                            icon: 'sparkles',
                            timestamp: Date.now()
                        },
                        ...seeded.notifications.slice(0, 9)
                    ]
                };
            }
            // Increment gameVersion from current state to ensure vehicles/entities are cleared
            setState({
                "GameProvider.useCallback[newGame]": (prev_20)=>({
                        ...seeded,
                        gameVersion: (prev_20.gameVersion ?? 0) + 1
                    })
            }["GameProvider.useCallback[newGame]"]);
        }
    }["GameProvider.useCallback[newGame]"], []);
    const loadState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[loadState]": (stateString)=>{
            try {
                const parsed = JSON.parse(stateString);
                // Validate it has essential properties
                if (parsed && parsed.grid && Array.isArray(parsed.grid) && parsed.gridSize && typeof parsed.gridSize === 'number' && parsed.stats && parsed.stats.money !== undefined && parsed.stats.population !== undefined) {
                    // Ensure new fields exist for backward compatibility
                    if (!parsed.adjacentCities) {
                        parsed.adjacentCities = [];
                    }
                    // Migrate adjacentCities to have 'discovered' property
                    for (const city_1 of parsed.adjacentCities){
                        if (city_1.discovered === undefined) {
                            // Old cities that exist are implicitly discovered (they were visible in the old system)
                            city_1.discovered = true;
                        }
                    }
                    if (!parsed.waterBodies) {
                        parsed.waterBodies = [];
                    }
                    // Ensure cities exists for multi-city support
                    if (!parsed.cities) {
                        parsed.cities = [
                            {
                                id: parsed.id || 'default-city',
                                name: parsed.cityName || 'City',
                                bounds: {
                                    minX: 0,
                                    minY: 0,
                                    maxX: (parsed.gridSize || 50) - 1,
                                    maxY: (parsed.gridSize || 50) - 1
                                },
                                economy: {
                                    population: parsed.stats?.population || 0,
                                    jobs: parsed.stats?.jobs || 0,
                                    income: parsed.stats?.income || 0,
                                    expenses: parsed.stats?.expenses || 0,
                                    happiness: parsed.stats?.happiness || 50,
                                    lastCalculated: 0
                                },
                                color: '#3b82f6'
                            }
                        ];
                    }
                    // Ensure effectiveTaxRate exists for lagging tax effect
                    if (parsed.effectiveTaxRate === undefined) {
                        parsed.effectiveTaxRate = parsed.taxRate ?? 9;
                    }
                    // Migrate constructionProgress for existing buildings (they're already built)
                    if (parsed.grid) {
                        for(let y_1 = 0; y_1 < parsed.grid.length; y_1++){
                            for(let x_1 = 0; x_1 < parsed.grid[y_1].length; x_1++){
                                if (parsed.grid[y_1][x_1]?.building && parsed.grid[y_1][x_1].building.constructionProgress === undefined) {
                                    parsed.grid[y_1][x_1].building.constructionProgress = 100; // Existing buildings are complete
                                }
                                // Migrate abandoned property for existing buildings (they're not abandoned)
                                if (parsed.grid[y_1][x_1]?.building && parsed.grid[y_1][x_1].building.abandoned === undefined) {
                                    parsed.grid[y_1][x_1].building.abandoned = false;
                                }
                            }
                        }
                    }
                    // Increment gameVersion to clear vehicles/entities when loading a new state
                    setState({
                        "GameProvider.useCallback[loadState]": (prev_21)=>({
                                ...parsed,
                                gameVersion: (prev_21.gameVersion ?? 0) + 1
                            })
                    }["GameProvider.useCallback[loadState]"]);
                    return true;
                }
                return false;
            } catch  {
                return false;
            }
        }
    }["GameProvider.useCallback[loadState]"], []);
    const exportState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[exportState]": ()=>{
            return JSON.stringify(state);
        }
    }["GameProvider.useCallback[exportState]"], [
        state
    ]);
    const generateRandomCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[generateRandomCity]": ()=>{
            clearGameState(); // Clear saved state when generating a new city
            const randomCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateRandomAdvancedCity"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_GRID_SIZE"]);
            // Increment gameVersion to ensure vehicles/entities are cleared
            setState({
                "GameProvider.useCallback[generateRandomCity]": (prev_22)=>({
                        ...randomCity,
                        gameVersion: (prev_22.gameVersion ?? 0) + 1
                    })
            }["GameProvider.useCallback[generateRandomCity]"]);
        }
    }["GameProvider.useCallback[generateRandomCity]"], []);
    // Expand the city grid by 15 tiles on each side (30x30 total increase)
    const expandCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[expandCity]": ()=>{
            setState({
                "GameProvider.useCallback[expandCity]": (prev_23)=>{
                    const { grid: newGrid, newSize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expandGrid"])(prev_23.grid, prev_23.gridSize, 15);
                    // Create new service grids with expanded size (all initialized to 0)
                    const createServiceGrid = {
                        "GameProvider.useCallback[expandCity].createServiceGrid": ()=>{
                            const grid = [];
                            for(let y_2 = 0; y_2 < newSize; y_2++){
                                grid.push(new Array(newSize).fill(0));
                            }
                            return grid;
                        }
                    }["GameProvider.useCallback[expandCity].createServiceGrid"];
                    // Create new boolean grids with expanded size (all initialized to false)
                    const createBoolGrid = {
                        "GameProvider.useCallback[expandCity].createBoolGrid": ()=>{
                            const grid_0 = [];
                            for(let y_3 = 0; y_3 < newSize; y_3++){
                                grid_0.push(new Array(newSize).fill(false));
                            }
                            return grid_0;
                        }
                    }["GameProvider.useCallback[expandCity].createBoolGrid"];
                    // Copy old service values to new positions (offset by 15)
                    const expandServiceGrid = {
                        "GameProvider.useCallback[expandCity].expandServiceGrid": (oldGrid)=>{
                            const newServiceGrid = createServiceGrid();
                            const offset = 15;
                            // Safely iterate through the old grid
                            if (oldGrid && Array.isArray(oldGrid)) {
                                for(let y_4 = 0; y_4 < prev_23.gridSize; y_4++){
                                    const row = oldGrid[y_4];
                                    if (row && Array.isArray(row)) {
                                        for(let x_2 = 0; x_2 < prev_23.gridSize; x_2++){
                                            const value = row[x_2];
                                            if (typeof value === 'number') {
                                                newServiceGrid[y_4 + offset][x_2 + offset] = value;
                                            }
                                        }
                                    }
                                }
                            }
                            return newServiceGrid;
                        }
                    }["GameProvider.useCallback[expandCity].expandServiceGrid"];
                    // Copy old boolean grid values to new positions (offset by 15)
                    const expandBoolGrid = {
                        "GameProvider.useCallback[expandCity].expandBoolGrid": (oldGrid_0)=>{
                            const newBoolGrid = createBoolGrid();
                            const offset_0 = 15;
                            if (oldGrid_0 && Array.isArray(oldGrid_0)) {
                                for(let y_5 = 0; y_5 < prev_23.gridSize; y_5++){
                                    const row_0 = oldGrid_0[y_5];
                                    if (row_0 && Array.isArray(row_0)) {
                                        for(let x_3 = 0; x_3 < prev_23.gridSize; x_3++){
                                            const value_0 = row_0[x_3];
                                            if (typeof value_0 === 'boolean') {
                                                newBoolGrid[y_5 + offset_0][x_3 + offset_0] = value_0;
                                            }
                                        }
                                    }
                                }
                            }
                            return newBoolGrid;
                        }
                    }["GameProvider.useCallback[expandCity].expandBoolGrid"];
                    return {
                        ...prev_23,
                        grid: newGrid,
                        gridSize: newSize,
                        // Expand all service grids
                        services: {
                            power: expandBoolGrid(prev_23.services.power),
                            water: expandBoolGrid(prev_23.services.water),
                            fire: expandServiceGrid(prev_23.services.fire),
                            police: expandServiceGrid(prev_23.services.police),
                            health: expandServiceGrid(prev_23.services.health),
                            education: expandServiceGrid(prev_23.services.education)
                        },
                        // Update bounds
                        bounds: {
                            minX: 0,
                            minY: 0,
                            maxX: newSize - 1,
                            maxY: newSize - 1
                        },
                        // Increment game version to reset vehicles/entities
                        gameVersion: (prev_23.gameVersion ?? 0) + 1
                    };
                }
            }["GameProvider.useCallback[expandCity]"]);
        }
    }["GameProvider.useCallback[expandCity]"], []);
    // Shrink the city grid by 15 tiles on each side (30x30 total reduction)
    const shrinkCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[shrinkCity]": ()=>{
            let success = false;
            setState({
                "GameProvider.useCallback[shrinkCity]": (prev_24)=>{
                    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shrinkGrid"])(prev_24.grid, prev_24.gridSize, 15);
                    // If shrink failed (grid too small), return previous state unchanged
                    if (!result) {
                        return prev_24;
                    }
                    success = true;
                    const { grid: newGrid_0, newSize: newSize_0 } = result;
                    // Create new service grids with shrunken size
                    const createServiceGrid_0 = {
                        "GameProvider.useCallback[shrinkCity].createServiceGrid_0": ()=>{
                            const grid_1 = [];
                            for(let y_6 = 0; y_6 < newSize_0; y_6++){
                                grid_1.push(new Array(newSize_0).fill(0));
                            }
                            return grid_1;
                        }
                    }["GameProvider.useCallback[shrinkCity].createServiceGrid_0"];
                    // Create new boolean grids with shrunken size
                    const createBoolGrid_0 = {
                        "GameProvider.useCallback[shrinkCity].createBoolGrid_0": ()=>{
                            const grid_2 = [];
                            for(let y_7 = 0; y_7 < newSize_0; y_7++){
                                grid_2.push(new Array(newSize_0).fill(false));
                            }
                            return grid_2;
                        }
                    }["GameProvider.useCallback[shrinkCity].createBoolGrid_0"];
                    // Copy old service values from interior positions (offset by 15)
                    const shrinkServiceGrid = {
                        "GameProvider.useCallback[shrinkCity].shrinkServiceGrid": (oldGrid_1)=>{
                            const newServiceGrid_0 = createServiceGrid_0();
                            const offset_1 = 15;
                            // Safely iterate through the new grid
                            if (oldGrid_1 && Array.isArray(oldGrid_1)) {
                                for(let y_8 = 0; y_8 < newSize_0; y_8++){
                                    const oldRow = oldGrid_1[y_8 + offset_1];
                                    if (oldRow && Array.isArray(oldRow)) {
                                        for(let x_4 = 0; x_4 < newSize_0; x_4++){
                                            const value_1 = oldRow[x_4 + offset_1];
                                            if (typeof value_1 === 'number') {
                                                newServiceGrid_0[y_8][x_4] = value_1;
                                            }
                                        }
                                    }
                                }
                            }
                            return newServiceGrid_0;
                        }
                    }["GameProvider.useCallback[shrinkCity].shrinkServiceGrid"];
                    // Copy old boolean grid values from interior positions (offset by 15)
                    const shrinkBoolGrid = {
                        "GameProvider.useCallback[shrinkCity].shrinkBoolGrid": (oldGrid_2)=>{
                            const newBoolGrid_0 = createBoolGrid_0();
                            const offset_2 = 15;
                            if (oldGrid_2 && Array.isArray(oldGrid_2)) {
                                for(let y_9 = 0; y_9 < newSize_0; y_9++){
                                    const oldRow_0 = oldGrid_2[y_9 + offset_2];
                                    if (oldRow_0 && Array.isArray(oldRow_0)) {
                                        for(let x_5 = 0; x_5 < newSize_0; x_5++){
                                            const value_2 = oldRow_0[x_5 + offset_2];
                                            if (typeof value_2 === 'boolean') {
                                                newBoolGrid_0[y_9][x_5] = value_2;
                                            }
                                        }
                                    }
                                }
                            }
                            return newBoolGrid_0;
                        }
                    }["GameProvider.useCallback[shrinkCity].shrinkBoolGrid"];
                    return {
                        ...prev_24,
                        grid: newGrid_0,
                        gridSize: newSize_0,
                        // Shrink all service grids
                        services: {
                            power: shrinkBoolGrid(prev_24.services.power),
                            water: shrinkBoolGrid(prev_24.services.water),
                            fire: shrinkServiceGrid(prev_24.services.fire),
                            police: shrinkServiceGrid(prev_24.services.police),
                            health: shrinkServiceGrid(prev_24.services.health),
                            education: shrinkServiceGrid(prev_24.services.education)
                        },
                        // Update bounds
                        bounds: {
                            minX: 0,
                            minY: 0,
                            maxX: newSize_0 - 1,
                            maxY: newSize_0 - 1
                        },
                        // Increment game version to reset vehicles/entities
                        gameVersion: (prev_24.gameVersion ?? 0) + 1
                    };
                }
            }["GameProvider.useCallback[shrinkCity]"]);
            return success;
        }
    }["GameProvider.useCallback[shrinkCity]"], []);
    const addMoney = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[addMoney]": (amount)=>{
            setState({
                "GameProvider.useCallback[addMoney]": (prev_25)=>({
                        ...prev_25,
                        stats: {
                            ...prev_25.stats,
                            money: prev_25.stats.money + amount
                        }
                    })
            }["GameProvider.useCallback[addMoney]"]);
        }
    }["GameProvider.useCallback[addMoney]"], []);
    const addNotification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[addNotification]": (title, description, icon)=>{
            setState({
                "GameProvider.useCallback[addNotification]": (prev_26)=>{
                    const newNotifications = [
                        {
                            id: `cheat-${Date.now()}-${Math.random()}`,
                            title,
                            description,
                            icon,
                            timestamp: Date.now()
                        },
                        ...prev_26.notifications
                    ];
                    // Keep only recent notifications
                    while(newNotifications.length > 10){
                        newNotifications.pop();
                    }
                    return {
                        ...prev_26,
                        notifications: newNotifications
                    };
                }
            }["GameProvider.useCallback[addNotification]"]);
        }
    }["GameProvider.useCallback[addNotification]"], []);
    const selectInvestorByDomain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[selectInvestorByDomain]": async (domainInput)=>{
            const normalizedDomain = normalizeDomain(domainInput);
            if (!normalizedDomain) return false;
            setInvestorLoading(true);
            let session = buildFallbackInvestorSession(normalizedDomain);
            let runtimeMode = 'unknown';
            try {
                const [contextResponse, runtimeResponse] = await Promise.all([
                    fetch(`/api/v1/investor-context?domain=${encodeURIComponent(normalizedDomain)}`, {
                        cache: 'no-store'
                    }),
                    fetch('/api/v1/runtime-status', {
                        cache: 'no-store'
                    })
                ]);
                if (contextResponse.ok) {
                    const payload = await contextResponse.json();
                    const parsed_0 = parseInvestorSessionPayload(payload, normalizedDomain);
                    if (parsed_0) {
                        session = parsed_0;
                    }
                }
                if (runtimeResponse.ok) {
                    const runtimePayload = await runtimeResponse.json();
                    if (typeof runtimePayload?.llm_router_mode === 'string') {
                        runtimeMode = runtimePayload.llm_router_mode;
                    }
                }
            } catch  {
                session = buildFallbackInvestorSession(normalizedDomain);
            } finally{
                setInvestorLoading(false);
            }
            console.log(`[GameContext] Loading investor session for: ${normalizedDomain}`, session);
            setInvestorSession(session);
            vcSpawnTickRef.current = 0;
            vcStealTickRef.current = 0;
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem(INVESTOR_SESSION_DOMAIN_KEY, normalizedDomain);
            }
            setState({
                "GameProvider.useCallback[selectInvestorByDomain]": (prev_27)=>({
                        ...applyInvestorSessionToState(prev_27, session),
                        llmRouterMode: runtimeMode || prev_27.llmRouterMode || 'unknown'
                    })
            }["GameProvider.useCallback[selectInvestorByDomain]"]);
            const loadSource = session.source === 'api' ? 'SQL' : 'fallback';
            addNotification('Investor Session Loaded', `${session.profile.name} selected (${session.profile.domain}). ${session.portfolio.length} portfolio companies synced via ${loadSource}.`, 'trophy');
            return true;
        }
    }["GameProvider.useCallback[selectInvestorByDomain]"], [
        addNotification
    ]);
    const clearInvestorSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[clearInvestorSession]": ()=>{
            setInvestorSession(null);
            vcSpawnTickRef.current = 0;
            vcStealTickRef.current = 0;
            setState({
                "GameProvider.useCallback[clearInvestorSession]": (prev_28)=>({
                        ...prev_28,
                        investorProfile: undefined,
                        portfolioCompanies: [],
                        portfolioCompanyTiles: [],
                        pendingOpportunities: []
                    })
            }["GameProvider.useCallback[clearInvestorSession]"]);
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.removeItem(INVESTOR_SESSION_DOMAIN_KEY);
            }
        }
    }["GameProvider.useCallback[clearInvestorSession]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameProvider.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const savedDomain = localStorage.getItem(INVESTOR_SESSION_DOMAIN_KEY);
            if (savedDomain) {
                void selectInvestorByDomain(savedDomain);
            }
        }
    }["GameProvider.useEffect"], [
        selectInvestorByDomain
    ]);
    // Save current city for restore (when viewing shared cities)
    const saveCurrentCityForRestore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[saveCurrentCityForRestore]": ()=>{
            saveCityForRestore(state);
        }
    }["GameProvider.useCallback[saveCurrentCityForRestore]"], [
        state
    ]);
    // Restore saved city
    const restoreSavedCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[restoreSavedCity]": ()=>{
            const savedState = loadSavedCityState();
            if (savedState) {
                skipNextSaveRef.current = true;
                setState(savedState);
                clearSavedCityStorage();
                return true;
            }
            return false;
        }
    }["GameProvider.useCallback[restoreSavedCity]"], []);
    // Get saved city info
    const getSavedCityInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[getSavedCityInfo]": ()=>{
            return loadSavedCityInfo();
        }
    }["GameProvider.useCallback[getSavedCityInfo]"], []);
    // Clear saved city
    const clearSavedCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[clearSavedCity]": ()=>{
            clearSavedCityStorage();
        }
    }["GameProvider.useCallback[clearSavedCity]"], []);
    // Save current city to the multi-save system
    const saveCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[saveCity]": ()=>{
            const cityMeta = {
                id: state.id,
                cityName: state.cityName,
                population: state.stats.population,
                money: state.stats.money,
                year: state.year,
                month: state.month,
                gridSize: state.gridSize,
                savedAt: Date.now()
            };
            // Save the city state
            saveCityState(state.id, state);
            // Update the index
            setSavedCities({
                "GameProvider.useCallback[saveCity]": (prev_29)=>{
                    // Check if this city already exists in the list
                    const existingIndex = prev_29.findIndex({
                        "GameProvider.useCallback[saveCity].existingIndex": (c_4)=>c_4.id === state.id
                    }["GameProvider.useCallback[saveCity].existingIndex"]);
                    let newCities;
                    if (existingIndex >= 0) {
                        // Update existing entry
                        newCities = [
                            ...prev_29
                        ];
                        newCities[existingIndex] = cityMeta;
                    } else {
                        // Add new entry
                        newCities = [
                            ...prev_29,
                            cityMeta
                        ];
                    }
                    // Sort by savedAt descending (most recent first)
                    newCities.sort({
                        "GameProvider.useCallback[saveCity]": (a, b)=>b.savedAt - a.savedAt
                    }["GameProvider.useCallback[saveCity]"]);
                    // Persist to localStorage
                    saveSavedCitiesIndex(newCities);
                    return newCities;
                }
            }["GameProvider.useCallback[saveCity]"]);
        }
    }["GameProvider.useCallback[saveCity]"], [
        state
    ]);
    // Load a saved city from the multi-save system
    const loadSavedCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[loadSavedCity]": (cityId_1)=>{
            const cityState = loadCityState(cityId_1);
            if (!cityState) return false;
            // Ensure the loaded state has an ID
            if (!cityState.id) {
                cityState.id = cityId_1;
            }
            // Perform migrations for backward compatibility
            if (!cityState.adjacentCities) {
                cityState.adjacentCities = [];
            }
            for (const city_2 of cityState.adjacentCities){
                if (city_2.discovered === undefined) {
                    city_2.discovered = true;
                }
            }
            if (!cityState.waterBodies) {
                cityState.waterBodies = [];
            }
            // Ensure cities exists for multi-city support
            if (!cityState.cities) {
                cityState.cities = [
                    {
                        id: cityState.id || 'default-city',
                        name: cityState.cityName || 'City',
                        bounds: {
                            minX: 0,
                            minY: 0,
                            maxX: (cityState.gridSize || 50) - 1,
                            maxY: (cityState.gridSize || 50) - 1
                        },
                        economy: {
                            population: cityState.stats?.population || 0,
                            jobs: cityState.stats?.jobs || 0,
                            income: cityState.stats?.income || 0,
                            expenses: cityState.stats?.expenses || 0,
                            happiness: cityState.stats?.happiness || 50,
                            lastCalculated: 0
                        },
                        color: '#3b82f6'
                    }
                ];
            }
            if (cityState.effectiveTaxRate === undefined) {
                cityState.effectiveTaxRate = cityState.taxRate ?? 9;
            }
            if (cityState.grid) {
                for(let y_10 = 0; y_10 < cityState.grid.length; y_10++){
                    for(let x_6 = 0; x_6 < cityState.grid[y_10].length; x_6++){
                        if (cityState.grid[y_10][x_6]?.building && cityState.grid[y_10][x_6].building.constructionProgress === undefined) {
                            cityState.grid[y_10][x_6].building.constructionProgress = 100;
                        }
                        if (cityState.grid[y_10][x_6]?.building && cityState.grid[y_10][x_6].building.abandoned === undefined) {
                            cityState.grid[y_10][x_6].building.abandoned = false;
                        }
                    }
                }
            }
            skipNextSaveRef.current = true;
            setState({
                "GameProvider.useCallback[loadSavedCity]": (prev_30)=>({
                        ...cityState,
                        gameVersion: (prev_30.gameVersion ?? 0) + 1
                    })
            }["GameProvider.useCallback[loadSavedCity]"]);
            // Also update the current game in local storage
            saveGameState(cityState);
            return true;
        }
    }["GameProvider.useCallback[loadSavedCity]"], []);
    // Delete a saved city from the multi-save system
    const deleteSavedCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[deleteSavedCity]": (cityId_2)=>{
            // Delete the city state
            deleteCityState(cityId_2);
            // Update the index
            setSavedCities({
                "GameProvider.useCallback[deleteSavedCity]": (prev_31)=>{
                    const newCities_0 = prev_31.filter({
                        "GameProvider.useCallback[deleteSavedCity].newCities_0": (c_5)=>c_5.id !== cityId_2
                    }["GameProvider.useCallback[deleteSavedCity].newCities_0"]);
                    saveSavedCitiesIndex(newCities_0);
                    return newCities_0;
                }
            }["GameProvider.useCallback[deleteSavedCity]"]);
        }
    }["GameProvider.useCallback[deleteSavedCity]"], []);
    // Rename a saved city
    const renameSavedCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[renameSavedCity]": (cityId_3, newName)=>{
            // Load the city state, update the name, and save it back
            const cityState_0 = loadCityState(cityId_3);
            if (cityState_0) {
                cityState_0.cityName = newName;
                saveCityState(cityId_3, cityState_0);
            }
            // Update the index
            setSavedCities({
                "GameProvider.useCallback[renameSavedCity]": (prev_32)=>{
                    const newCities_1 = prev_32.map({
                        "GameProvider.useCallback[renameSavedCity].newCities_1": (c_6)=>c_6.id === cityId_3 ? {
                                ...c_6,
                                cityName: newName
                            } : c_6
                    }["GameProvider.useCallback[renameSavedCity].newCities_1"]);
                    saveSavedCitiesIndex(newCities_1);
                    return newCities_1;
                }
            }["GameProvider.useCallback[renameSavedCity]"]);
            // If the current game is the one being renamed, update its state too
            if (state.id === cityId_3) {
                setState({
                    "GameProvider.useCallback[renameSavedCity]": (prev_33)=>({
                            ...prev_33,
                            cityName: newName
                        })
                }["GameProvider.useCallback[renameSavedCity]"]);
            }
        }
    }["GameProvider.useCallback[renameSavedCity]"], [
        state.id
    ]);
    const value_3 = {
        state,
        latestStateRef,
        setTool,
        setSpeed,
        setTaxRate,
        setCompetitionDegree,
        runInvestorAction,
        setActivePanel,
        setBudgetFunding,
        placeAtTile,
        upgradeServiceBuilding: upgradeServiceBuildingHandler,
        setPlaceCallback,
        finishTrackDrag,
        setBridgeCallback,
        connectToCity,
        discoverCity,
        checkAndDiscoverCities,
        setDisastersEnabled,
        newGame,
        loadState,
        exportState,
        generateRandomCity,
        expandCity,
        shrinkCity,
        hasExistingGame,
        isStateReady,
        isSaving,
        addMoney,
        addNotification,
        // Sprite pack management
        currentSpritePack,
        availableSpritePacks: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRITE_PACKS"],
        setSpritePack,
        // Day/night mode override
        dayNightMode,
        setDayNightMode,
        visualHour,
        // Save/restore city for shared links
        saveCurrentCityForRestore,
        restoreSavedCity,
        getSavedCityInfo,
        clearSavedCity,
        // Multi-city save system
        savedCities,
        saveCity,
        loadSavedCity,
        deleteSavedCity,
        renameSavedCity,
        investorSession,
        investorLoading,
        selectInvestorByDomain,
        clearInvestorSession
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GameContext.Provider, {
        value: value_3,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/GameContext.tsx",
        lineNumber: 2724,
        columnNumber: 10
    }, this);
}
_s(GameProvider, "bvc/aFpDnkKIpPEfnxLYW5ZL5+Y=");
_c = GameProvider;
function useGame() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "8b0e05527cc95a8020ee9408398ca6b411bf3f39c566d584f8325170003fce21") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8b0e05527cc95a8020ee9408398ca6b411bf3f39c566d584f8325170003fce21";
    }
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(GameContext);
    if (!ctx) {
        throw new Error("useGame must be used within a GameProvider");
    }
    return ctx;
}
_s1(useGame, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "GameProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/MultiplayerContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MultiplayerContextProvider",
    ()=>MultiplayerContextProvider,
    "useMultiplayer",
    ()=>useMultiplayer,
    "useMultiplayerOptional",
    ()=>useMultiplayerOptional
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$multiplayer$2f$supabaseProvider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/multiplayer/supabaseProvider.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gt-next/dist/index.client.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Generate a random 5-character room code
function generateRoomCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for(let i = 0; i < 5; i++){
        code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
}
const MultiplayerContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function MultiplayerContextProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "03c6491eb8117c9294817123ea21abfa93a3836ee629a46e3ae5f1972c956b85") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "03c6491eb8117c9294817123ea21abfa93a3836ee629a46e3ae5f1972c956b85";
    }
    const { children } = t0;
    const gt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGT"])();
    const [connectionState, setConnectionState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("disconnected");
    const [roomCode, setRoomCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [players, setPlayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [initialState, setInitialState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [provider, setProvider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [onRemoteAction, setOnRemoteAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const providerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onRemoteActionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "MultiplayerContextProvider[handleSetOnRemoteAction]": (callback)=>{
                onRemoteActionRef.current = callback;
                setOnRemoteAction(callback);
            }
        })["MultiplayerContextProvider[handleSetOnRemoteAction]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const handleSetOnRemoteAction = t2;
    let t3;
    if ($[3] !== gt) {
        t3 = ({
            "MultiplayerContextProvider[createRoom]": async (cityName, gameState)=>{
                setConnectionState("connecting");
                setError(null);
                ;
                try {
                    const newRoomCode = generateRoomCode();
                    const provider_0 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$multiplayer$2f$supabaseProvider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMultiplayerProvider"])({
                        roomCode: newRoomCode,
                        cityName,
                        initialGameState: gameState,
                        onConnectionChange: (connected)=>{
                            setConnectionState(connected ? "connected" : "disconnected");
                        },
                        onPlayersChange: (newPlayers)=>{
                            setPlayers(newPlayers);
                        },
                        onAction: (action)=>{
                            if (onRemoteActionRef.current) {
                                onRemoteActionRef.current(action);
                            }
                        },
                        onError: (errorMsg)=>{
                            setError(errorMsg);
                            setConnectionState("error");
                        }
                    });
                    providerRef.current = provider_0;
                    setProvider(provider_0);
                    setRoomCode(newRoomCode);
                    setConnectionState("connected");
                    return newRoomCode;
                } catch (t4) {
                    const err = t4;
                    setConnectionState("error");
                    setError(err instanceof Error ? err.message : gt("Failed to create room"));
                    throw err;
                }
            }
        })["MultiplayerContextProvider[createRoom]"];
        $[3] = gt;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const createRoom = t3;
    let t4;
    if ($[5] !== gt) {
        t4 = ({
            "MultiplayerContextProvider[joinRoom]": async (code)=>{
                setConnectionState("connecting");
                setError(null);
                ;
                try {
                    const normalizedCode = code.toUpperCase();
                    const provider_1 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$multiplayer$2f$supabaseProvider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMultiplayerProvider"])({
                        roomCode: normalizedCode,
                        cityName: gt("Co-op City"),
                        onConnectionChange: (connected_0)=>{
                            setConnectionState(connected_0 ? "connected" : "disconnected");
                        },
                        onPlayersChange: (newPlayers_0)=>{
                            setPlayers(newPlayers_0);
                        },
                        onAction: (action_0)=>{
                            if (onRemoteActionRef.current) {
                                onRemoteActionRef.current(action_0);
                            }
                        },
                        onStateReceived: (state)=>{
                            setInitialState(state);
                        },
                        onError: (errorMsg_0)=>{
                            setError(errorMsg_0);
                            setConnectionState("error");
                        }
                    });
                    providerRef.current = provider_1;
                    setProvider(provider_1);
                    setRoomCode(normalizedCode);
                    setConnectionState("connected");
                    const room = {
                        code: normalizedCode,
                        hostId: "",
                        cityName: gt("Co-op City"),
                        createdAt: Date.now(),
                        playerCount: 1
                    };
                    return room;
                } catch (t5) {
                    const err_0 = t5;
                    setConnectionState("error");
                    setError(err_0 instanceof Error ? err_0.message : gt("Failed to join room"));
                    throw err_0;
                }
            }
        })["MultiplayerContextProvider[joinRoom]"];
        $[5] = gt;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const joinRoom = t4;
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "MultiplayerContextProvider[leaveRoom]": ()=>{
                if (providerRef.current) {
                    providerRef.current.destroy();
                    providerRef.current = null;
                }
                setProvider(null);
                setConnectionState("disconnected");
                setRoomCode(null);
                setPlayers([]);
                setError(null);
                setInitialState(null);
            }
        })["MultiplayerContextProvider[leaveRoom]"];
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const leaveRoom = t5;
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "MultiplayerContextProvider[dispatchAction]": (action_1)=>{
                if (providerRef.current) {
                    providerRef.current.dispatchAction(action_1);
                }
            }
        })["MultiplayerContextProvider[dispatchAction]"];
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const dispatchAction = t6;
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "MultiplayerContextProvider[updateGameState]": (state_0)=>{
                if (providerRef.current) {
                    providerRef.current.updateGameState(state_0);
                }
            }
        })["MultiplayerContextProvider[updateGameState]"];
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const updateGameState = t7;
    let t8;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "MultiplayerContextProvider[useEffect()]": ()=>()=>{
                    if (providerRef.current) {
                        providerRef.current.destroy();
                    }
                }
        })["MultiplayerContextProvider[useEffect()]"];
        t9 = [];
        $[10] = t8;
        $[11] = t9;
    } else {
        t8 = $[10];
        t9 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t8, t9);
    let t10;
    if ($[12] !== connectionState || $[13] !== createRoom || $[14] !== error || $[15] !== initialState || $[16] !== joinRoom || $[17] !== onRemoteAction || $[18] !== players || $[19] !== provider || $[20] !== roomCode) {
        t10 = {
            connectionState,
            roomCode,
            players,
            error,
            createRoom,
            joinRoom,
            leaveRoom,
            dispatchAction,
            initialState,
            onRemoteAction,
            setOnRemoteAction: handleSetOnRemoteAction,
            updateGameState,
            provider,
            isHost: false
        };
        $[12] = connectionState;
        $[13] = createRoom;
        $[14] = error;
        $[15] = initialState;
        $[16] = joinRoom;
        $[17] = onRemoteAction;
        $[18] = players;
        $[19] = provider;
        $[20] = roomCode;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    const value = t10;
    let t11;
    if ($[22] !== children || $[23] !== value) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MultiplayerContext.Provider, {
            value: value,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/context/MultiplayerContext.tsx",
            lineNumber: 297,
            columnNumber: 11
        }, this);
        $[22] = children;
        $[23] = value;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    return t11;
}
_s(MultiplayerContextProvider, "emakYmmA2kCxL6cvYcB0YPTO9eM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGT"]
    ];
});
_c = MultiplayerContextProvider;
function useMultiplayer() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "03c6491eb8117c9294817123ea21abfa93a3836ee629a46e3ae5f1972c956b85") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "03c6491eb8117c9294817123ea21abfa93a3836ee629a46e3ae5f1972c956b85";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(MultiplayerContext);
    if (!context) {
        throw new Error("useMultiplayer must be used within a MultiplayerContextProvider");
    }
    return context;
}
_s1(useMultiplayer, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function useMultiplayerOptional() {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "03c6491eb8117c9294817123ea21abfa93a3836ee629a46e3ae5f1972c956b85") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "03c6491eb8117c9294817123ea21abfa93a3836ee629a46e3ae5f1972c956b85";
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(MultiplayerContext);
}
_s2(useMultiplayerOptional, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "MultiplayerContextProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_context_eb2ef861._.js.map