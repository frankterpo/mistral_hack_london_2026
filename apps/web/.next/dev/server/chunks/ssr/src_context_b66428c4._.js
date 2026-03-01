module.exports = [
"[project]/src/context/GameContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lz$2d$string$2f$libs$2f$lz$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lz-string/libs/lz-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$saveWorkerManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/saveWorkerManager.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/simulation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$game$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/types/game.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/games/isocity/types/game.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/renderConfig.ts [app-ssr] (ecmascript)");
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
const GameContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
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
    return Math.max(1, gridSize / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_GRID_SIZE"]);
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
        gameVersion: (prev.gameVersion ?? 0) + 1
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
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
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
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
// Wrapper that takes a callback for compatibility with existing code
function saveGameState(state, callback) {
    saveGameStateAsync(state).finally(()=>{
        callback?.();
    });
}
// Clear saved game state
function clearGameState() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
// Load sprite pack from localStorage
function loadSpritePackId() {
    if ("TURBOPACK compile-time truthy", 1) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SPRITE_PACK_ID"];
    //TURBOPACK unreachable
    ;
}
// Save sprite pack to localStorage
function saveSpritePackId(packId) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
// Load day/night mode from localStorage
function loadDayNightMode() {
    if ("TURBOPACK compile-time truthy", 1) return 'auto';
    //TURBOPACK unreachable
    ;
}
// Save day/night mode to localStorage
function saveDayNightMode(mode) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
// Save current city for later restoration (when viewing shared cities)
function saveCityForRestore(state) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
// Helper to decompress saved city data (supports both compressed and legacy formats)
function decompressSavedCity(saved) {
    // Try to decompress first (new format)
    let jsonString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lz$2d$string$2f$libs$2f$lz$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decompressFromUTF16"])(saved);
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
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
// Load full saved city state
function loadSavedCityState() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
// Clear saved city
function clearSavedCityStorage() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
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
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
// Save saved cities index to localStorage
function saveSavedCitiesIndex(cities) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
// Save a city state to localStorage with compression
// PERF: Uses Web Worker for BOTH serialization and compression - no main thread blocking!
async function saveCityStateAsync(cityId, state) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
// Wrapper for compatibility
function saveCityState(cityId, state) {
    saveCityStateAsync(cityId, state);
}
// Load a saved city state from localStorage (supports compressed and legacy formats)
function loadCityState(cityId) {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
// Delete a saved city from localStorage
function deleteCityState(cityId) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function GameProvider({ children, startFresh = false }) {
    // Start with a default state, we'll load from localStorage after mount (unless startFresh is true)
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createInitialGameState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_GRID_SIZE"], 'ISOBUSINESS'));
    const [hasExistingGame, setHasExistingGame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isStateReady, setIsStateReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const saveTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const skipNextSaveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const hasLoadedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Callback for multiplayer action broadcast
    const placeCallbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bridgeCallbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Sprite pack state
    const [currentSpritePack, setCurrentSpritePack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpritePack"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SPRITE_PACK_ID"]));
    // Day/night mode state
    const [dayNightMode, setDayNightModeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('auto');
    // Saved cities state for multi-city save system
    const [savedCities, setSavedCities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [investorSession, setInvestorSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [investorLoading, setInvestorLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const investorSessionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const vcSpawnTickRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const vcStealTickRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Load game state and sprite pack from localStorage on mount (client-side only)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Load sprite pack preference
        const savedPackId = loadSpritePackId();
        const pack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpritePack"])(savedPackId);
        setCurrentSpritePack(pack);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setActiveSpritePack"])(pack);
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
    }, [
        startFresh
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        investorSessionRef.current = investorSession;
    }, [
        investorSession
    ]);
    // Track the state that needs to be saved
    const lastSaveTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const saveIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Update the state to save whenever state changes
    // PERF: Just mark that state has changed - defer expensive deep copy to actual save time
    const stateChangedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const latestStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(state);
    latestStateRef.current = state;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, [
        state
    ]);
    // PERF: Track if a save is in progress to avoid overlapping saves
    const saveInProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Separate effect that actually performs saves on an interval
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Wait for initial load - just check once after a short delay
        const checkLoadedTimeout = setTimeout(()=>{
            if (!hasLoadedRef.current) {
                return;
            }
            // Clear any existing save interval
            if (saveIntervalRef.current) {
                clearInterval(saveIntervalRef.current);
            }
            // Set up interval to save every 5 seconds
            // PERF: Save operation is broken into chunks internally to avoid blocking
            saveIntervalRef.current = setInterval(()=>{
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
                saveGameState(latestStateRef.current, ()=>{
                    lastSaveTimeRef.current = Date.now();
                    setHasExistingGame(true);
                    setIsSaving(false);
                    saveInProgressRef.current = false;
                });
            }, 5000); // Save every 5 seconds
        }, 200); // Wait 200ms for initial load
        return ()=>{
            clearTimeout(checkLoadedTimeout);
            if (saveIntervalRef.current) {
                clearInterval(saveIntervalRef.current);
            }
        };
    }, []);
    // PERF: Track tick count to only sync UI-visible changes to React periodically
    const tickCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastUiSyncRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Simulation loop - PERF: Runs simulation but throttles React updates aggressively
    // Grid updates go to ref (canvas reads from ref), React only gets UI updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let timer = null;
        if (state.speed > 0) {
            // Check if running on mobile for performance optimization
            const isMobileDevice = ("TURBOPACK compile-time value", "undefined") !== 'undefined' && (window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
            // PERF: Balanced tick intervals
            // Desktop: 500ms, 300ms, 200ms for speeds 1, 2, 3
            // Mobile: 750ms, 450ms, 300ms for speeds 1, 2, 3
            const interval = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : state.speed === 1 ? 500 : state.speed === 2 ? 300 : 200;
            timer = setInterval(()=>{
                tickCountRef.current++;
                const now = performance.now();
                // PERF: Run simulation and update ref immediately (for canvas)
                let nextTickState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simulateTick"])(latestStateRef.current);
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
                                setState((prev)=>({
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
                                    }));
                                nextTickState.stats.happiness = clamp(nextTickState.stats.happiness - 5, 0, 100);
                            }
                        }
                        // Randomly trigger "portfolio competitor attacking revenue"
                        if (Math.random() < Math.min(0.14, 0.03 * expansionPressure)) {
                            setState((prev)=>({
                                    ...prev,
                                    notifications: [
                                        {
                                            id: `vc-attack-${Date.now()}`,
                                            title: 'Market War',
                                            description: 'A well-funded competitor is attacking your portfolio\'s core market.',
                                            icon: 'trending-down',
                                            timestamp: Date.now()
                                        },
                                        ...prev.notifications.slice(0, 9)
                                    ]
                                }));
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
                    const expansionPressure = getExpansionPressure(nextTickState.gridSize);
                    const spawnInterval = Math.max(8, Math.round(18 / expansionPressure));
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
                            const markerAlreadyExists = (nextTickState.portfolioCompanyTiles || []).some((entry)=>entry.companyId === selectedOpportunity.id);
                            if (!markerAlreadyExists) {
                                const buildingType = pickOpportunityBuildingType(selectedOpportunity.industry, selectedOpportunity.valuationUsd, selectedOpportunity.headcount);
                                const placed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["placeBuilding"])(nextTickState, tile.x, tile.y, buildingType, null);
                                if (placed !== nextTickState) {
                                    // Kick off Specter agents for new opportunities
                                    kickoffSpecterAgents(selectedOpportunity.id);
                                    const rivalForOpportunity = selectedInvestor.rivalInvestors.length > 0 ? selectedInvestor.rivalInvestors[(nextTickState.month + nextTickState.day + tickCountRef.current) % Math.max(selectedInvestor.rivalInvestors.length, 1)] : undefined;
                                    setState((prev)=>({
                                            ...prev,
                                            notifications: [
                                                {
                                                    id: `vc-opportunity-${Date.now()}`,
                                                    title: isCompetitorOpportunity ? 'Competitor Company Spotted' : 'New Deal Signal',
                                                    description: isCompetitorOpportunity ? `${selectedOpportunity.name} entered as a competitor in your portfolio's sector.` : `${selectedOpportunity.name} surfaced as an investable opportunity for ${selectedInvestor.profile.name}.`,
                                                    icon: 'chart',
                                                    timestamp: Date.now()
                                                },
                                                ...prev.notifications.slice(0, 9)
                                            ]
                                        }));
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
                    const stealInterval = Math.max(12, Math.round(27 / expansionPressure));
                    if (vcStealTickRef.current >= stealInterval) {
                        vcStealTickRef.current = 0;
                        const competitors = selectedInvestor.rivalInvestors;
                        const currentQueue = selectedInvestor.portfolio;
                        if (currentQueue.length > 0 && Math.random() < 0.45) {
                            const candidate = currentQueue[(nextTickState.month + nextTickState.day + tickCountRef.current) % currentQueue.length];
                            const alreadyOpen = (nextTickState.pendingOpportunities || []).some((entry)=>entry.companyId === candidate.id && entry.kind === 'portfolio_round' && entry.openRound);
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
                        if (competitors.length > 0 && currentQueue.length > 0) {
                            const competitor = competitors[(nextTickState.month + tickCountRef.current) % Math.max(competitors.length, 1)];
                            const stolen = currentQueue[0];
                            setInvestorSession((prevSession)=>{
                                if (!prevSession) return prevSession;
                                return {
                                    ...prevSession,
                                    rivalInvestors: prevSession.rivalInvestors.includes(competitor) ? prevSession.rivalInvestors : [
                                        competitor,
                                        ...prevSession.rivalInvestors
                                    ].slice(0, 8),
                                    stats: {
                                        ...prevSession.stats,
                                        investorConfidencePercentile: clamp(prevSession.stats.investorConfidencePercentile - 3, 0, 100),
                                        dealFlow: clamp(prevSession.stats.dealFlow - 1, 0, 99)
                                    }
                                };
                            });
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
                            setState((prev)=>({
                                    ...prev,
                                    notifications: [
                                        {
                                            id: `vc-steal-${Date.now()}`,
                                            title: 'Deal Contested',
                                            description: `${competitor} pre-empted ${stolen.name}; confidence and deal flow took a hit.`,
                                            icon: 'warning',
                                            timestamp: Date.now()
                                        },
                                        ...prev.notifications.slice(0, 9)
                                    ]
                                }));
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
            }, interval);
        }
        return ()=>{
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [
        state.speed
    ]);
    const setTool = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((tool)=>{
        setState((prev)=>({
                ...prev,
                selectedTool: tool,
                activePanel: 'none'
            }));
    }, []);
    const setSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((speed)=>{
        setState((prev)=>({
                ...prev,
                speed
            }));
    }, []);
    const setTaxRate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((rate)=>{
        setState((prev)=>({
                ...prev,
                taxRate: clamp(rate, 0, 100)
            }));
    }, []);
    const setCompetitionDegree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((degree)=>{
        setState((prev)=>({
                ...prev,
                competitionDegree: clamp(degree, 0, 100)
            }));
    }, []);
    const runInvestorAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((actionId, targetCompanyId)=>{
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
            setState((prev)=>({
                    ...prev,
                    notifications: [
                        {
                            id: `action-target-required-${Date.now()}`,
                            title: 'Select Target Company',
                            description: 'Use Inspect on a company tile to choose who this action should target.',
                            icon: 'warning',
                            timestamp: Date.now()
                        },
                        ...prev.notifications.slice(0, 9)
                    ]
                }));
            return;
        }
        const pendingEntries = latestStateRef.current.pendingOpportunities || [];
        const targetOpportunity = targetCompanyId ? pendingEntries.find((entry)=>entry.companyId === targetCompanyId && entry.openRound) : undefined;
        if (actionsNeedingCounterparty.has(actionId) && !targetOpportunity) {
            setState((prev)=>({
                    ...prev,
                    notifications: [
                        {
                            id: `action-round-closed-${Date.now()}`,
                            title: 'Round Not Open',
                            description: 'That company is not currently in an open financing process.',
                            icon: 'warning',
                            timestamp: Date.now()
                        },
                        ...prev.notifications.slice(0, 9)
                    ]
                }));
            return;
        }
        if (targetOpportunity?.rivalInvestor) {
            const competitionDegree = latestStateRef.current.competitionDegree ?? 32;
            const baseWinChance = actionId === 'defend_deal' ? 0.66 : actionId === 'follow_on' ? 0.62 : actionId === 'gtm_intro' ? 0.58 : 0.56;
            const adjustedWinChance = clamp(baseWinChance - (competitionDegree - 50) * 0.004, 0.22, 0.88);
            if (Math.random() > adjustedWinChance) {
                setState((prev)=>({
                        ...prev,
                        pendingOpportunities: (prev.pendingOpportunities || []).filter((entry)=>entry.id !== targetOpportunity.id),
                        notifications: [
                            {
                                id: `action-lost-${Date.now()}`,
                                title: 'Round Lost to Rival',
                                description: `${targetOpportunity.rivalInvestor} convinced ${targetOpportunity.name} to take their offer.`,
                                icon: 'warning',
                                timestamp: Date.now()
                            },
                            ...prev.notifications.slice(0, 9)
                        ]
                    }));
                setInvestorSession((prevSession)=>{
                    if (!prevSession) return prevSession;
                    return {
                        ...prevSession,
                        stats: {
                            ...prevSession.stats,
                            investorConfidencePercentile: clamp(prevSession.stats.investorConfidencePercentile - 6, 0, 100),
                            dealFlow: clamp(prevSession.stats.dealFlow - 1, 0, 99)
                        }
                    };
                });
                return;
            }
        }
        setInvestorSession((prevSession)=>{
            if (!prevSession) return prevSession;
            const prevStats = prevSession.stats;
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
                ...prevSession,
                portfolio: promotedCompany ? [
                    promotedCompany,
                    ...prevSession.portfolio
                ].slice(0, 28) : prevSession.portfolio,
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
        });
        setState((prev)=>{
            const isTargetedAction = actionsNeedingCounterparty.has(actionId);
            const resolvedTargetName = targetOpportunity?.name || 'selected company';
            const nextStats = {
                ...prev.stats,
                money: prev.stats.money + (effect.city.money ?? 0),
                income: Math.max(0, prev.stats.income + (effect.city.income ?? 0)),
                expenses: Math.max(0, prev.stats.expenses + (effect.city.expenses ?? 0)),
                happiness: clamp(prev.stats.happiness + (effect.city.happiness ?? 0), 0, 100),
                education: clamp(prev.stats.education + (effect.city.education ?? 0), 0, 100),
                health: clamp(prev.stats.health + (effect.city.health ?? 0), 0, 100),
                safety: clamp(prev.stats.safety + (effect.city.safety ?? 0), 0, 100),
                environment: clamp(prev.stats.environment + (effect.city.environment ?? 0), 0, 100)
            };
            return {
                ...prev,
                stats: nextStats,
                pendingOpportunities: isTargetedAction && targetOpportunity ? (prev.pendingOpportunities || []).filter((entry)=>entry.id !== targetOpportunity.id) : prev.pendingOpportunities,
                portfolioCompanyTiles: actionId === 'lead_round' && targetOpportunity && targetOpportunity.kind === 'opportunity' ? (prev.portfolioCompanyTiles || []).map((tile)=>tile.companyId === targetOpportunity.companyId ? {
                        ...tile,
                        kind: 'portfolio'
                    } : tile) : prev.portfolioCompanyTiles,
                notifications: [
                    {
                        id: `action-${Date.now()}`,
                        title: effect.title,
                        description: isTargetedAction ? `${effect.description} Target: ${resolvedTargetName}.` : effect.description,
                        icon: 'sparkles',
                        timestamp: Date.now()
                    },
                    ...prev.notifications.slice(0, 9)
                ]
            };
        });
    }, []);
    const setActivePanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((panel)=>{
        setState((prev)=>({
                ...prev,
                activePanel: panel
            }));
    }, []);
    const setBudgetFunding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key, funding)=>{
        const clamped = clamp(funding, 0, 100);
        setState((prev)=>({
                ...prev,
                budget: {
                    ...prev.budget,
                    [key]: {
                        ...prev.budget[key],
                        funding: clamped
                    }
                }
            }));
    }, []);
    const placeAtTile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((x, y, isRemote = false)=>{
        // For multiplayer broadcast, we need to capture the tool synchronously
        // before React batches the setState. We read from the latest state ref.
        const currentTool = latestStateRef.current.selectedTool;
        setState((prev)=>{
            const tool = prev.selectedTool;
            if (tool === 'select') return prev;
            const info = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOOL_INFO"][tool];
            const cost = info?.cost ?? 0;
            const tile = prev.grid[y]?.[x];
            if (!tile) return prev;
            if (cost > 0 && prev.stats.money < cost) return prev;
            // Prevent wasted spend if nothing would change
            if (tool === 'bulldoze' && tile.building.type === 'grass' && tile.zone === 'none') {
                return prev;
            }
            const building = toolBuildingMap[tool];
            const zone = toolZoneMap[tool];
            if (zone && tile.zone === zone) return prev;
            if (building && tile.building.type === building) return prev;
            // Handle subway tool separately (underground placement)
            if (tool === 'subway') {
                // Can't place subway under water
                if (tile.building.type === 'water') return prev;
                // Already has subway
                if (tile.hasSubway) return prev;
                const nextState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["placeSubway"])(prev, x, y);
                if (nextState === prev) return prev;
                return {
                    ...nextState,
                    stats: {
                        ...nextState.stats,
                        money: nextState.stats.money - cost
                    }
                };
            }
            // Handle water terraform tool separately
            if (tool === 'zone_water') {
                // Already water - do nothing
                if (tile.building.type === 'water') return prev;
                // Don't allow terraforming bridges - would break them
                if (tile.building.type === 'bridge') return prev;
                const nextState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["placeWaterTerraform"])(prev, x, y);
                if (nextState === prev) return prev;
                return {
                    ...nextState,
                    stats: {
                        ...nextState.stats,
                        money: nextState.stats.money - cost
                    }
                };
            }
            // Handle land terraform tool separately
            if (tool === 'zone_land') {
                // Only works on water
                if (tile.building.type !== 'water') return prev;
                const nextState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["placeLandTerraform"])(prev, x, y);
                if (nextState === prev) return prev;
                return {
                    ...nextState,
                    stats: {
                        ...nextState.stats,
                        money: nextState.stats.money - cost
                    }
                };
            }
            let nextState;
            if (tool === 'bulldoze') {
                nextState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bulldozeTile"])(prev, x, y);
            } else if (zone) {
                nextState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["placeBuilding"])(prev, x, y, null, zone);
            } else if (building) {
                nextState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["placeBuilding"])(prev, x, y, building, null);
            } else {
                return prev;
            }
            if (nextState === prev) return prev;
            if (cost > 0) {
                nextState = {
                    ...nextState,
                    stats: {
                        ...nextState.stats,
                        money: nextState.stats.money - cost
                    }
                };
            }
            return nextState;
        });
        // Broadcast to multiplayer if this is a local action (not remote)
        // We use the tool captured before setState since React 18 batches async
        if (!isRemote && currentTool !== 'select' && placeCallbackRef.current) {
            placeCallbackRef.current({
                x,
                y,
                tool: currentTool
            });
        }
    }, []);
    const upgradeServiceBuildingHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((x, y)=>{
        let upgradeSucceeded = false;
        setState((prev)=>{
            const upgradedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["upgradeServiceBuilding"])(prev, x, y);
            if (upgradedState) {
                upgradeSucceeded = true;
                return upgradedState;
            }
            return prev;
        });
        return upgradeSucceeded;
    }, []);
    // Called after a road/rail drag operation to create bridges for water crossings
    const finishTrackDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((pathTiles, trackType, isRemote = false)=>{
        setState((prev)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBridgesOnPath"])(prev, pathTiles, trackType));
        // Broadcast to multiplayer if this is a local action (not remote)
        if (!isRemote && bridgeCallbackRef.current) {
            bridgeCallbackRef.current({
                pathTiles,
                trackType
            });
        }
    }, []);
    const connectToCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((cityId)=>{
        setState((prev)=>{
            const city = prev.adjacentCities.find((c)=>c.id === cityId);
            if (!city || city.connected) return prev;
            // Mark city as connected (and discovered if not already) and add trade income
            const updatedCities = prev.adjacentCities.map((c)=>c.id === cityId ? {
                    ...c,
                    connected: true,
                    discovered: true
                } : c);
            // Add trade income bonus (one-time bonus + monthly income)
            const tradeBonus = 5000;
            const tradeIncome = 200; // Monthly income from trade
            return {
                ...prev,
                adjacentCities: updatedCities,
                stats: {
                    ...prev.stats,
                    money: prev.stats.money + tradeBonus,
                    income: prev.stats.income + tradeIncome
                },
                notifications: [
                    {
                        id: `city-connect-${Date.now()}`,
                        title: 'City Connected!',
                        description: `Trade route established with ${city.name}. +$${tradeBonus} bonus and +$${tradeIncome}/month income.`,
                        icon: 'road',
                        timestamp: Date.now()
                    },
                    ...prev.notifications.slice(0, 9)
                ]
            };
        });
    }, []);
    const discoverCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((cityId)=>{
        setState((prev)=>{
            const city = prev.adjacentCities.find((c)=>c.id === cityId);
            if (!city || city.discovered) return prev;
            // Mark city as discovered
            const updatedCities = prev.adjacentCities.map((c)=>c.id === cityId ? {
                    ...c,
                    discovered: true
                } : c);
            return {
                ...prev,
                adjacentCities: updatedCities,
                notifications: [
                    {
                        id: `city-discover-${Date.now()}`,
                        title: 'City Discovered!',
                        description: `Your road has reached the ${city.direction} border! You can now connect to ${city.name}.`,
                        icon: 'road',
                        timestamp: Date.now()
                    },
                    ...prev.notifications.slice(0, 9)
                ]
            };
        });
    }, []);
    // Check for cities that should be discovered based on roads reaching edges
    // Calls onDiscover callback with city info if a new city was discovered
    const checkAndDiscoverCities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((onDiscover)=>{
        setState((prev)=>{
            const newlyDiscovered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkForDiscoverableCities"])(prev.grid, prev.gridSize, prev.adjacentCities);
            if (newlyDiscovered.length === 0) return prev;
            // Discover the first city found
            const cityToDiscover = newlyDiscovered[0];
            const updatedCities = prev.adjacentCities.map((c)=>c.id === cityToDiscover.id ? {
                    ...c,
                    discovered: true
                } : c);
            // Call the callback after state update is scheduled
            if (onDiscover) {
                setTimeout(()=>{
                    onDiscover({
                        id: cityToDiscover.id,
                        direction: cityToDiscover.direction,
                        name: cityToDiscover.name
                    });
                }, 0);
            }
            return {
                ...prev,
                adjacentCities: updatedCities
            };
        });
    }, []);
    const setDisastersEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((enabled)=>{
        setState((prev)=>({
                ...prev,
                disastersEnabled: enabled
            }));
    }, []);
    const setPlaceCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((callback)=>{
        placeCallbackRef.current = callback;
    }, []);
    const setBridgeCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((callback)=>{
        bridgeCallbackRef.current = callback;
    }, []);
    const setSpritePack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((packId)=>{
        const pack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpritePack"])(packId);
        setCurrentSpritePack(pack);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setActiveSpritePack"])(pack);
        saveSpritePackId(packId);
    }, []);
    const setDayNightMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((mode)=>{
        setDayNightModeState(mode);
        saveDayNightMode(mode);
    }, []);
    // Compute the visual hour based on the day/night mode override
    // This doesn't affect time progression, just the rendering
    const visualHour = dayNightMode === 'auto' ? state.hour : dayNightMode === 'day' ? 12 // Noon - full daylight
     : 22; // Night time
    const newGame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((name, size)=>{
        clearGameState(); // Clear saved state when starting fresh
        const fresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createInitialGameState"])(size ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_GRID_SIZE"], name || 'ISOBUSINESS');
        fresh.competitionDegree = 32;
        let seeded = fresh;
        const activeSession = investorSessionRef.current;
        if (activeSession && activeSession.portfolio.length > 0) {
            activeSession.portfolio.slice(0, 6).forEach((company)=>{
                const tile = findEmptyGrassTile(seeded.grid);
                if (!tile) return;
                const buildingType = pickOpportunityBuildingType(company.industry, company.valuationUsd, company.headcount);
                seeded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["placeBuilding"])(seeded, tile.x, tile.y, buildingType, null);
            });
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
        setState((prev)=>({
                ...seeded,
                gameVersion: (prev.gameVersion ?? 0) + 1
            }));
    }, []);
    const loadState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((stateString)=>{
        try {
            const parsed = JSON.parse(stateString);
            // Validate it has essential properties
            if (parsed && parsed.grid && Array.isArray(parsed.grid) && parsed.gridSize && typeof parsed.gridSize === 'number' && parsed.stats && parsed.stats.money !== undefined && parsed.stats.population !== undefined) {
                // Ensure new fields exist for backward compatibility
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
                // Increment gameVersion to clear vehicles/entities when loading a new state
                setState((prev)=>({
                        ...parsed,
                        gameVersion: (prev.gameVersion ?? 0) + 1
                    }));
                return true;
            }
            return false;
        } catch  {
            return false;
        }
    }, []);
    const exportState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        return JSON.stringify(state);
    }, [
        state
    ]);
    const generateRandomCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        clearGameState(); // Clear saved state when generating a new city
        const randomCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRandomAdvancedCity"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_GRID_SIZE"]);
        // Increment gameVersion to ensure vehicles/entities are cleared
        setState((prev)=>({
                ...randomCity,
                gameVersion: (prev.gameVersion ?? 0) + 1
            }));
    }, []);
    // Expand the city grid by 15 tiles on each side (30x30 total increase)
    const expandCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setState((prev)=>{
            const { grid: newGrid, newSize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandGrid"])(prev.grid, prev.gridSize, 15);
            // Create new service grids with expanded size (all initialized to 0)
            const createServiceGrid = ()=>{
                const grid = [];
                for(let y = 0; y < newSize; y++){
                    grid.push(new Array(newSize).fill(0));
                }
                return grid;
            };
            // Create new boolean grids with expanded size (all initialized to false)
            const createBoolGrid = ()=>{
                const grid = [];
                for(let y = 0; y < newSize; y++){
                    grid.push(new Array(newSize).fill(false));
                }
                return grid;
            };
            // Copy old service values to new positions (offset by 15)
            const expandServiceGrid = (oldGrid)=>{
                const newServiceGrid = createServiceGrid();
                const offset = 15;
                // Safely iterate through the old grid
                if (oldGrid && Array.isArray(oldGrid)) {
                    for(let y = 0; y < prev.gridSize; y++){
                        const row = oldGrid[y];
                        if (row && Array.isArray(row)) {
                            for(let x = 0; x < prev.gridSize; x++){
                                const value = row[x];
                                if (typeof value === 'number') {
                                    newServiceGrid[y + offset][x + offset] = value;
                                }
                            }
                        }
                    }
                }
                return newServiceGrid;
            };
            // Copy old boolean grid values to new positions (offset by 15)
            const expandBoolGrid = (oldGrid)=>{
                const newBoolGrid = createBoolGrid();
                const offset = 15;
                if (oldGrid && Array.isArray(oldGrid)) {
                    for(let y = 0; y < prev.gridSize; y++){
                        const row = oldGrid[y];
                        if (row && Array.isArray(row)) {
                            for(let x = 0; x < prev.gridSize; x++){
                                const value = row[x];
                                if (typeof value === 'boolean') {
                                    newBoolGrid[y + offset][x + offset] = value;
                                }
                            }
                        }
                    }
                }
                return newBoolGrid;
            };
            return {
                ...prev,
                grid: newGrid,
                gridSize: newSize,
                // Expand all service grids
                services: {
                    power: expandBoolGrid(prev.services.power),
                    water: expandBoolGrid(prev.services.water),
                    fire: expandServiceGrid(prev.services.fire),
                    police: expandServiceGrid(prev.services.police),
                    health: expandServiceGrid(prev.services.health),
                    education: expandServiceGrid(prev.services.education)
                },
                // Update bounds
                bounds: {
                    minX: 0,
                    minY: 0,
                    maxX: newSize - 1,
                    maxY: newSize - 1
                },
                // Increment game version to reset vehicles/entities
                gameVersion: (prev.gameVersion ?? 0) + 1
            };
        });
    }, []);
    // Shrink the city grid by 15 tiles on each side (30x30 total reduction)
    const shrinkCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        let success = false;
        setState((prev)=>{
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shrinkGrid"])(prev.grid, prev.gridSize, 15);
            // If shrink failed (grid too small), return previous state unchanged
            if (!result) {
                return prev;
            }
            success = true;
            const { grid: newGrid, newSize } = result;
            // Create new service grids with shrunken size
            const createServiceGrid = ()=>{
                const grid = [];
                for(let y = 0; y < newSize; y++){
                    grid.push(new Array(newSize).fill(0));
                }
                return grid;
            };
            // Create new boolean grids with shrunken size
            const createBoolGrid = ()=>{
                const grid = [];
                for(let y = 0; y < newSize; y++){
                    grid.push(new Array(newSize).fill(false));
                }
                return grid;
            };
            // Copy old service values from interior positions (offset by 15)
            const shrinkServiceGrid = (oldGrid)=>{
                const newServiceGrid = createServiceGrid();
                const offset = 15;
                // Safely iterate through the new grid
                if (oldGrid && Array.isArray(oldGrid)) {
                    for(let y = 0; y < newSize; y++){
                        const oldRow = oldGrid[y + offset];
                        if (oldRow && Array.isArray(oldRow)) {
                            for(let x = 0; x < newSize; x++){
                                const value = oldRow[x + offset];
                                if (typeof value === 'number') {
                                    newServiceGrid[y][x] = value;
                                }
                            }
                        }
                    }
                }
                return newServiceGrid;
            };
            // Copy old boolean grid values from interior positions (offset by 15)
            const shrinkBoolGrid = (oldGrid)=>{
                const newBoolGrid = createBoolGrid();
                const offset = 15;
                if (oldGrid && Array.isArray(oldGrid)) {
                    for(let y = 0; y < newSize; y++){
                        const oldRow = oldGrid[y + offset];
                        if (oldRow && Array.isArray(oldRow)) {
                            for(let x = 0; x < newSize; x++){
                                const value = oldRow[x + offset];
                                if (typeof value === 'boolean') {
                                    newBoolGrid[y][x] = value;
                                }
                            }
                        }
                    }
                }
                return newBoolGrid;
            };
            return {
                ...prev,
                grid: newGrid,
                gridSize: newSize,
                // Shrink all service grids
                services: {
                    power: shrinkBoolGrid(prev.services.power),
                    water: shrinkBoolGrid(prev.services.water),
                    fire: shrinkServiceGrid(prev.services.fire),
                    police: shrinkServiceGrid(prev.services.police),
                    health: shrinkServiceGrid(prev.services.health),
                    education: shrinkServiceGrid(prev.services.education)
                },
                // Update bounds
                bounds: {
                    minX: 0,
                    minY: 0,
                    maxX: newSize - 1,
                    maxY: newSize - 1
                },
                // Increment game version to reset vehicles/entities
                gameVersion: (prev.gameVersion ?? 0) + 1
            };
        });
        return success;
    }, []);
    const addMoney = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((amount)=>{
        setState((prev)=>({
                ...prev,
                stats: {
                    ...prev.stats,
                    money: prev.stats.money + amount
                }
            }));
    }, []);
    const addNotification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((title, description, icon)=>{
        setState((prev)=>{
            const newNotifications = [
                {
                    id: `cheat-${Date.now()}-${Math.random()}`,
                    title,
                    description,
                    icon,
                    timestamp: Date.now()
                },
                ...prev.notifications
            ];
            // Keep only recent notifications
            while(newNotifications.length > 10){
                newNotifications.pop();
            }
            return {
                ...prev,
                notifications: newNotifications
            };
        });
    }, []);
    const selectInvestorByDomain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (domainInput)=>{
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
                const parsed = parseInvestorSessionPayload(payload, normalizedDomain);
                if (parsed) {
                    session = parsed;
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
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        setState((prev)=>({
                ...applyInvestorSessionToState(prev, session),
                llmRouterMode: runtimeMode || prev.llmRouterMode || 'unknown'
            }));
        const loadSource = session.source === 'api' ? 'SQL' : 'fallback';
        addNotification('Investor Session Loaded', `${session.profile.name} selected (${session.profile.domain}). ${session.portfolio.length} portfolio companies synced via ${loadSource}.`, 'trophy');
        return true;
    }, [
        addNotification
    ]);
    const clearInvestorSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setInvestorSession(null);
        vcSpawnTickRef.current = 0;
        vcStealTickRef.current = 0;
        setState((prev)=>({
                ...prev,
                investorProfile: undefined,
                portfolioCompanies: [],
                portfolioCompanyTiles: [],
                pendingOpportunities: []
            }));
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const savedDomain = undefined;
    }, [
        selectInvestorByDomain
    ]);
    // Save current city for restore (when viewing shared cities)
    const saveCurrentCityForRestore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        saveCityForRestore(state);
    }, [
        state
    ]);
    // Restore saved city
    const restoreSavedCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const savedState = loadSavedCityState();
        if (savedState) {
            skipNextSaveRef.current = true;
            setState(savedState);
            clearSavedCityStorage();
            return true;
        }
        return false;
    }, []);
    // Get saved city info
    const getSavedCityInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        return loadSavedCityInfo();
    }, []);
    // Clear saved city
    const clearSavedCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        clearSavedCityStorage();
    }, []);
    // Save current city to the multi-save system
    const saveCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
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
        setSavedCities((prev)=>{
            // Check if this city already exists in the list
            const existingIndex = prev.findIndex((c)=>c.id === state.id);
            let newCities;
            if (existingIndex >= 0) {
                // Update existing entry
                newCities = [
                    ...prev
                ];
                newCities[existingIndex] = cityMeta;
            } else {
                // Add new entry
                newCities = [
                    ...prev,
                    cityMeta
                ];
            }
            // Sort by savedAt descending (most recent first)
            newCities.sort((a, b)=>b.savedAt - a.savedAt);
            // Persist to localStorage
            saveSavedCitiesIndex(newCities);
            return newCities;
        });
    }, [
        state
    ]);
    // Load a saved city from the multi-save system
    const loadSavedCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((cityId)=>{
        const cityState = loadCityState(cityId);
        if (!cityState) return false;
        // Ensure the loaded state has an ID
        if (!cityState.id) {
            cityState.id = cityId;
        }
        // Perform migrations for backward compatibility
        if (!cityState.adjacentCities) {
            cityState.adjacentCities = [];
        }
        for (const city of cityState.adjacentCities){
            if (city.discovered === undefined) {
                city.discovered = true;
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
            for(let y = 0; y < cityState.grid.length; y++){
                for(let x = 0; x < cityState.grid[y].length; x++){
                    if (cityState.grid[y][x]?.building && cityState.grid[y][x].building.constructionProgress === undefined) {
                        cityState.grid[y][x].building.constructionProgress = 100;
                    }
                    if (cityState.grid[y][x]?.building && cityState.grid[y][x].building.abandoned === undefined) {
                        cityState.grid[y][x].building.abandoned = false;
                    }
                }
            }
        }
        skipNextSaveRef.current = true;
        setState((prev)=>({
                ...cityState,
                gameVersion: (prev.gameVersion ?? 0) + 1
            }));
        // Also update the current game in local storage
        saveGameState(cityState);
        return true;
    }, []);
    // Delete a saved city from the multi-save system
    const deleteSavedCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((cityId)=>{
        // Delete the city state
        deleteCityState(cityId);
        // Update the index
        setSavedCities((prev)=>{
            const newCities = prev.filter((c)=>c.id !== cityId);
            saveSavedCitiesIndex(newCities);
            return newCities;
        });
    }, []);
    // Rename a saved city
    const renameSavedCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((cityId, newName)=>{
        // Load the city state, update the name, and save it back
        const cityState = loadCityState(cityId);
        if (cityState) {
            cityState.cityName = newName;
            saveCityState(cityId, cityState);
        }
        // Update the index
        setSavedCities((prev)=>{
            const newCities = prev.map((c)=>c.id === cityId ? {
                    ...c,
                    cityName: newName
                } : c);
            saveSavedCitiesIndex(newCities);
            return newCities;
        });
        // If the current game is the one being renamed, update its state too
        if (state.id === cityId) {
            setState((prev)=>({
                    ...prev,
                    cityName: newName
                }));
        }
    }, [
        state.id
    ]);
    const value = {
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
        availableSpritePacks: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPRITE_PACKS"],
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GameContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/GameContext.tsx",
        lineNumber: 2829,
        columnNumber: 10
    }, this);
}
function useGame() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(GameContext);
    if (!ctx) {
        throw new Error('useGame must be used within a GameProvider');
    }
    return ctx;
}
}),
"[project]/src/context/MultiplayerContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MultiplayerContextProvider",
    ()=>MultiplayerContextProvider,
    "useMultiplayer",
    ()=>useMultiplayer,
    "useMultiplayerOptional",
    ()=>useMultiplayerOptional
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$multiplayer$2f$supabaseProvider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/multiplayer/supabaseProvider.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gt-next/dist/index.client.js [app-ssr] (ecmascript)");
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
const MultiplayerContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function MultiplayerContextProvider({ children }) {
    const gt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGT"])();
    const [connectionState, setConnectionState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('disconnected');
    const [roomCode, setRoomCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [players, setPlayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [initialState, setInitialState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [provider, setProvider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [onRemoteAction, setOnRemoteAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const providerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onRemoteActionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Set up remote action callback
    const handleSetOnRemoteAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((callback)=>{
        onRemoteActionRef.current = callback;
        setOnRemoteAction(callback);
    }, []);
    // Create a room (first player to start a session)
    const createRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (cityName, gameState)=>{
        setConnectionState('connecting');
        setError(null);
        try {
            // Generate room code
            const newRoomCode = generateRoomCode();
            // Create multiplayer provider with initial state
            // State will be saved to Supabase database
            const provider = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$multiplayer$2f$supabaseProvider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMultiplayerProvider"])({
                roomCode: newRoomCode,
                cityName,
                initialGameState: gameState,
                onConnectionChange: (connected)=>{
                    setConnectionState(connected ? 'connected' : 'disconnected');
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
                    setConnectionState('error');
                }
            });
            providerRef.current = provider;
            setProvider(provider);
            setRoomCode(newRoomCode);
            setConnectionState('connected');
            return newRoomCode;
        } catch (err) {
            setConnectionState('error');
            setError(err instanceof Error ? err.message : gt('Failed to create room'));
            throw err;
        }
    }, [
        gt
    ]);
    // Join an existing room
    const joinRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (code)=>{
        setConnectionState('connecting');
        setError(null);
        try {
            const normalizedCode = code.toUpperCase();
            // Create multiplayer provider - state will be loaded from Supabase database
            const provider = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$multiplayer$2f$supabaseProvider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMultiplayerProvider"])({
                roomCode: normalizedCode,
                cityName: gt('Co-op City'),
                // No initialGameState - we'll load from database
                onConnectionChange: (connected)=>{
                    setConnectionState(connected ? 'connected' : 'disconnected');
                },
                onPlayersChange: (newPlayers)=>{
                    setPlayers(newPlayers);
                },
                onAction: (action)=>{
                    if (onRemoteActionRef.current) {
                        onRemoteActionRef.current(action);
                    }
                },
                onStateReceived: (state)=>{
                    // State loaded from database
                    setInitialState(state);
                },
                onError: (errorMsg)=>{
                    setError(errorMsg);
                    setConnectionState('error');
                }
            });
            providerRef.current = provider;
            setProvider(provider);
            setRoomCode(normalizedCode);
            setConnectionState('connected');
            // Return room data
            const room = {
                code: normalizedCode,
                hostId: '',
                cityName: gt('Co-op City'),
                createdAt: Date.now(),
                playerCount: 1
            };
            return room;
        } catch (err) {
            setConnectionState('error');
            setError(err instanceof Error ? err.message : gt('Failed to join room'));
            throw err;
        }
    }, [
        gt
    ]);
    // Leave the current room
    const leaveRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (providerRef.current) {
            providerRef.current.destroy();
            providerRef.current = null;
        }
        setProvider(null);
        setConnectionState('disconnected');
        setRoomCode(null);
        setPlayers([]);
        setError(null);
        setInitialState(null);
    }, []);
    // Dispatch a game action to all peers
    const dispatchAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((action)=>{
        if (providerRef.current) {
            providerRef.current.dispatchAction(action);
        }
    }, []);
    // Update the game state (any player can do this)
    const updateGameState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((state)=>{
        if (providerRef.current) {
            providerRef.current.updateGameState(state);
        }
    }, []);
    // Clean up on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (providerRef.current) {
                providerRef.current.destroy();
            }
        };
    }, []);
    const value = {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MultiplayerContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/MultiplayerContext.tsx",
        lineNumber: 264,
        columnNumber: 5
    }, this);
}
function useMultiplayer() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(MultiplayerContext);
    if (!context) {
        throw new Error('useMultiplayer must be used within a MultiplayerContextProvider');
    }
    return context;
}
function useMultiplayerOptional() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(MultiplayerContext);
}
}),
];

//# sourceMappingURL=src_context_b66428c4._.js.map