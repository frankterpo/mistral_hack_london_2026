(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/games/isocity/types/buildings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * IsoCity Building Types
 */ __turbopack_context__.s([
    "BUILDING_STATS",
    ()=>BUILDING_STATS,
    "COMMERCIAL_BUILDINGS",
    ()=>COMMERCIAL_BUILDINGS,
    "INDUSTRIAL_BUILDINGS",
    ()=>INDUSTRIAL_BUILDINGS,
    "RESIDENTIAL_BUILDINGS",
    ()=>RESIDENTIAL_BUILDINGS
]);
const RESIDENTIAL_BUILDINGS = [
    'house_small',
    'house_medium',
    'mansion',
    'apartment_low',
    'apartment_high'
];
const COMMERCIAL_BUILDINGS = [
    'shop_small',
    'shop_medium',
    'office_low',
    'office_high',
    'mall'
];
const INDUSTRIAL_BUILDINGS = [
    'factory_small',
    'factory_medium',
    'warehouse',
    'factory_large',
    'factory_large'
];
const BUILDING_STATS = {
    empty: {
        maxPop: 0,
        maxJobs: 0,
        pollution: 0,
        landValue: 0
    },
    grass: {
        maxPop: 0,
        maxJobs: 0,
        pollution: 0,
        landValue: 0
    },
    water: {
        maxPop: 0,
        maxJobs: 0,
        pollution: 0,
        landValue: 5
    },
    road: {
        maxPop: 0,
        maxJobs: 0,
        pollution: 2,
        landValue: 0
    },
    bridge: {
        maxPop: 0,
        maxJobs: 0,
        pollution: 1,
        landValue: 5
    },
    rail: {
        maxPop: 0,
        maxJobs: 0,
        pollution: 1,
        landValue: -2
    },
    tree: {
        maxPop: 0,
        maxJobs: 0,
        pollution: -5,
        landValue: 2
    },
    house_small: {
        maxPop: 6,
        maxJobs: 0,
        pollution: 0,
        landValue: 10
    },
    house_medium: {
        maxPop: 14,
        maxJobs: 0,
        pollution: 0,
        landValue: 22
    },
    mansion: {
        maxPop: 18,
        maxJobs: 0,
        pollution: 0,
        landValue: 60
    },
    apartment_low: {
        maxPop: 120,
        maxJobs: 0,
        pollution: 2,
        landValue: 40
    },
    apartment_high: {
        maxPop: 260,
        maxJobs: 0,
        pollution: 3,
        landValue: 55
    },
    shop_small: {
        maxPop: 0,
        maxJobs: 10,
        pollution: 1,
        landValue: 16
    },
    shop_medium: {
        maxPop: 0,
        maxJobs: 28,
        pollution: 2,
        landValue: 26
    },
    office_low: {
        maxPop: 0,
        maxJobs: 90,
        pollution: 2,
        landValue: 40
    },
    office_high: {
        maxPop: 0,
        maxJobs: 210,
        pollution: 3,
        landValue: 55
    },
    mall: {
        maxPop: 0,
        maxJobs: 260,
        pollution: 6,
        landValue: 70
    },
    factory_small: {
        maxPop: 0,
        maxJobs: 40,
        pollution: 15,
        landValue: -5
    },
    factory_medium: {
        maxPop: 0,
        maxJobs: 90,
        pollution: 28,
        landValue: -10
    },
    factory_large: {
        maxPop: 0,
        maxJobs: 180,
        pollution: 55,
        landValue: -18
    },
    warehouse: {
        maxPop: 0,
        maxJobs: 60,
        pollution: 18,
        landValue: -6
    },
    police_station: {
        maxPop: 0,
        maxJobs: 20,
        pollution: 0,
        landValue: 15
    },
    fire_station: {
        maxPop: 0,
        maxJobs: 20,
        pollution: 0,
        landValue: 10
    },
    hospital: {
        maxPop: 0,
        maxJobs: 80,
        pollution: 0,
        landValue: 25
    },
    school: {
        maxPop: 0,
        maxJobs: 25,
        pollution: 0,
        landValue: 15
    },
    university: {
        maxPop: 0,
        maxJobs: 100,
        pollution: 0,
        landValue: 35
    },
    park: {
        maxPop: 0,
        maxJobs: 2,
        pollution: -10,
        landValue: 20
    },
    park_large: {
        maxPop: 0,
        maxJobs: 6,
        pollution: -25,
        landValue: 50
    },
    tennis: {
        maxPop: 0,
        maxJobs: 1,
        pollution: -5,
        landValue: 15
    },
    power_plant: {
        maxPop: 0,
        maxJobs: 30,
        pollution: 30,
        landValue: -20
    },
    water_tower: {
        maxPop: 0,
        maxJobs: 5,
        pollution: 0,
        landValue: 5
    },
    stadium: {
        maxPop: 0,
        maxJobs: 50,
        pollution: 5,
        landValue: 40
    },
    museum: {
        maxPop: 0,
        maxJobs: 40,
        pollution: 0,
        landValue: 45
    },
    airport: {
        maxPop: 0,
        maxJobs: 200,
        pollution: 20,
        landValue: 50
    },
    space_program: {
        maxPop: 0,
        maxJobs: 150,
        pollution: 5,
        landValue: 80
    },
    subway_station: {
        maxPop: 0,
        maxJobs: 15,
        pollution: 0,
        landValue: 25
    },
    rail_station: {
        maxPop: 0,
        maxJobs: 25,
        pollution: 2,
        landValue: 20
    },
    city_hall: {
        maxPop: 0,
        maxJobs: 60,
        pollution: 0,
        landValue: 50
    },
    amusement_park: {
        maxPop: 0,
        maxJobs: 100,
        pollution: 8,
        landValue: 60
    },
    basketball_courts: {
        maxPop: 0,
        maxJobs: 2,
        pollution: -3,
        landValue: 12
    },
    playground_small: {
        maxPop: 0,
        maxJobs: 1,
        pollution: -5,
        landValue: 15
    },
    playground_large: {
        maxPop: 0,
        maxJobs: 2,
        pollution: -8,
        landValue: 18
    },
    baseball_field_small: {
        maxPop: 0,
        maxJobs: 4,
        pollution: -10,
        landValue: 25
    },
    soccer_field_small: {
        maxPop: 0,
        maxJobs: 2,
        pollution: -5,
        landValue: 15
    },
    football_field: {
        maxPop: 0,
        maxJobs: 8,
        pollution: -8,
        landValue: 30
    },
    baseball_stadium: {
        maxPop: 0,
        maxJobs: 60,
        pollution: 5,
        landValue: 45
    },
    community_center: {
        maxPop: 0,
        maxJobs: 10,
        pollution: 0,
        landValue: 20
    },
    office_building_small: {
        maxPop: 0,
        maxJobs: 25,
        pollution: 1,
        landValue: 22
    },
    swimming_pool: {
        maxPop: 0,
        maxJobs: 5,
        pollution: -5,
        landValue: 18
    },
    skate_park: {
        maxPop: 0,
        maxJobs: 2,
        pollution: -3,
        landValue: 12
    },
    mini_golf_course: {
        maxPop: 0,
        maxJobs: 6,
        pollution: -8,
        landValue: 22
    },
    bleachers_field: {
        maxPop: 0,
        maxJobs: 3,
        pollution: -5,
        landValue: 15
    },
    go_kart_track: {
        maxPop: 0,
        maxJobs: 10,
        pollution: 5,
        landValue: 20
    },
    amphitheater: {
        maxPop: 0,
        maxJobs: 15,
        pollution: -5,
        landValue: 35
    },
    greenhouse_garden: {
        maxPop: 0,
        maxJobs: 8,
        pollution: -15,
        landValue: 28
    },
    animal_pens_farm: {
        maxPop: 0,
        maxJobs: 4,
        pollution: 2,
        landValue: 10
    },
    cabin_house: {
        maxPop: 4,
        maxJobs: 0,
        pollution: -3,
        landValue: 15
    },
    campground: {
        maxPop: 0,
        maxJobs: 3,
        pollution: -8,
        landValue: 12
    },
    marina_docks_small: {
        maxPop: 0,
        maxJobs: 8,
        pollution: 2,
        landValue: 25
    },
    pier_large: {
        maxPop: 0,
        maxJobs: 12,
        pollution: 1,
        landValue: 30
    },
    roller_coaster_small: {
        maxPop: 0,
        maxJobs: 20,
        pollution: 3,
        landValue: 40
    },
    community_garden: {
        maxPop: 0,
        maxJobs: 2,
        pollution: -12,
        landValue: 18
    },
    pond_park: {
        maxPop: 0,
        maxJobs: 2,
        pollution: -15,
        landValue: 22
    },
    park_gate: {
        maxPop: 0,
        maxJobs: 1,
        pollution: -2,
        landValue: 8
    },
    mountain_lodge: {
        maxPop: 0,
        maxJobs: 15,
        pollution: -5,
        landValue: 35
    },
    mountain_trailhead: {
        maxPop: 0,
        maxJobs: 2,
        pollution: -10,
        landValue: 15
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/games/isocity/types/zones.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * IsoCity Zone Types
 */ __turbopack_context__.s([]);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/games/isocity/types/economy.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * IsoCity Economy Types
 */ __turbopack_context__.s([]);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/games/isocity/types/services.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * IsoCity Service Types
 */ __turbopack_context__.s([]);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/games/isocity/types/game.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TOOL_INFO",
    ()=>TOOL_INFO
]);
/**
 * IsoCity Game State Types
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gt-next/dist/index.client.js [app-client] (ecmascript)");
;
const TOOL_INFO = {
    select: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Inspect'),
        cost: 0,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Inspect company tile details')
    },
    bulldoze: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Restructure'),
        cost: 10,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Clear underperforming assets and zones')
    },
    road: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Offering Partnership'),
        cost: 25,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Improve PMF Signal via offering partnerships')
    },
    rail: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Enterprise Rail'),
        cost: 40,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Scale high-throughput operations')
    },
    subway: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Data Pipeline'),
        cost: 50,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Underground high-speed routing')
    },
    expand_city: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Expand Market'),
        cost: 0,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Add 15 tiles to each edge')
    },
    shrink_city: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Contract Market'),
        cost: 0,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Remove 15 tiles from each edge')
    },
    tree: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Tree'),
        cost: 15,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Plant trees to improve environment')
    },
    zone_residential: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Founder Talent'),
        cost: 50,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Attract founders and talent')
    },
    zone_commercial: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Startup HQ'),
        cost: 50,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Establish startup headquarters')
    },
    zone_industrial: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('R&D Lab'),
        cost: 50,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Deep tech and research labs')
    },
    zone_dezone: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('De-zone'),
        cost: 0,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Remove zoning')
    },
    zone_water: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Water Terraform'),
        cost: 50000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Terraform land into water')
    },
    zone_land: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Land Terraform'),
        cost: 50000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Terraform water into land')
    },
    police_station: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Legal/Regulatory Compliance'),
        cost: 500,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Legal and regulatory compliance'),
        size: 1
    },
    fire_station: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Crisis Response'),
        cost: 500,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Incident and crisis response'),
        size: 1
    },
    hospital: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Employee Health/Benefits'),
        cost: 1000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Employee wellness and health (2x2)'),
        size: 2
    },
    school: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Talent Training'),
        cost: 400,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Talent training and onboarding (2x2)'),
        size: 2
    },
    university: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Startup Accelerator'),
        cost: 2000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Startup accelerator and incubator (3x3)'),
        size: 3
    },
    park: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Founder Retreat'),
        cost: 150,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Boost happiness and land value (1x1)'),
        size: 1
    },
    park_large: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Large Founder Retreat'),
        cost: 600,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Large retreat (3x3)'),
        size: 3
    },
    tennis: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Tennis Court'),
        cost: 200,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Recreation facility'),
        size: 1
    },
    power_plant: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Event Collaboration'),
        cost: 3000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Improve growth momentum via event collaboration'),
        size: 2
    },
    water_tower: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Commercial Partnership'),
        cost: 1000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Improve growth momentum via commercial partnerships'),
        size: 1
    },
    subway_station: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Data Pipeline Node'),
        cost: 750,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Access to data pipeline network'),
        size: 1
    },
    rail_station: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Enterprise Hub'),
        cost: 1000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('High-throughput enterprise hub'),
        size: 2
    },
    stadium: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Distribution Channel'),
        cost: 5000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Boosts commercial demand (3x3)'),
        size: 3
    },
    museum: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Industry Conference'),
        cost: 4000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Boosts commercial & residential demand (3x3)'),
        size: 3
    },
    airport: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Global Market Access'),
        cost: 10000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Boosts commercial & industrial demand (4x4)'),
        size: 4
    },
    space_program: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Moonshot R&D'),
        cost: 15000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Boosts industrial & residential demand (3x3)'),
        size: 3
    },
    city_hall: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('LP Headquarters'),
        cost: 6000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Boosts all demand types (2x2)'),
        size: 2
    },
    amusement_park: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Viral Growth Loop'),
        cost: 12000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Major boost to commercial demand (4x4)'),
        size: 4
    },
    basketball_courts: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Basketball Court'),
        cost: 250,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Recreational facility'),
        size: 1
    },
    playground_small: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Small Playground'),
        cost: 200,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Recreational facility'),
        size: 1
    },
    playground_large: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Large Playground'),
        cost: 350,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Recreational facility (2x2)'),
        size: 2
    },
    baseball_field_small: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Local Field'),
        cost: 800,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Recreational facility (2x2)'),
        size: 2
    },
    soccer_field_small: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Soccer Pitch'),
        cost: 400,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Recreational facility'),
        size: 1
    },
    football_field: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Football Field'),
        cost: 1200,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Recreational facility (2x2)'),
        size: 2
    },
    baseball_stadium: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Regional Arena'),
        cost: 6000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Major distribution node (3x3)'),
        size: 3
    },
    community_center: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Network Hub'),
        cost: 500,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Local community/network hub'),
        size: 1
    },
    office_building_small: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Satellite Office'),
        cost: 600,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Small satellite office'),
        size: 1
    },
    swimming_pool: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Wellness Center'),
        cost: 450,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Employee wellness facility'),
        size: 1
    },
    skate_park: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Innovation Lab'),
        cost: 300,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Rapid prototyping space'),
        size: 1
    },
    mini_golf_course: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Team Bonding'),
        cost: 700,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Team building facility (2x2)'),
        size: 2
    },
    bleachers_field: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Demo Day Arena'),
        cost: 350,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Pitch and demo arena'),
        size: 1
    },
    go_kart_track: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Growth Hack Track'),
        cost: 1000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Experimental growth facility (2x2)'),
        size: 2
    },
    amphitheater: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Keynote Stage'),
        cost: 1500,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Large presentation venue (2x2)'),
        size: 2
    },
    greenhouse_garden: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Incubation Lab'),
        cost: 800,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Controlled growth environment (2x2)'),
        size: 2
    },
    animal_pens_farm: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Data Farm'),
        cost: 400,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Raw data processing facility'),
        size: 1
    },
    cabin_house: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Offsite Cabin'),
        cost: 300,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Remote offsite retreat'),
        size: 1
    },
    campground: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Bootcamp Site'),
        cost: 250,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Intensive training ground'),
        size: 1
    },
    marina_docks_small: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Offshore Ops'),
        cost: 1200,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('International operations (2x2)'),
        size: 2
    },
    pier_large: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Export Pier'),
        cost: 600,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Global distribution pier'),
        size: 1
    },
    roller_coaster_small: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Pivot Loop'),
        cost: 3000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('High-intensity iteration (2x2)'),
        size: 2
    },
    community_garden: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Open Source Hub'),
        cost: 200,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Shared ecosystem projects'),
        size: 1
    },
    pond_park: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Zen Garden'),
        cost: 350,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Focus and meditation space'),
        size: 1
    },
    park_gate: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Campus Gate'),
        cost: 150,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Secure campus entrance'),
        size: 1
    },
    mountain_lodge: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Summit Retreat'),
        cost: 1500,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Executive strategy lodge (2x2)'),
        size: 2
    },
    mountain_trailhead: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Growth Path'),
        cost: 400,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Guided growth journey (3x3)'),
        size: 3
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/games/isocity/types/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// IsoCity Types - re-exports all game-specific types
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$buildings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/games/isocity/types/buildings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$zones$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/games/isocity/types/zones.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$economy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/games/isocity/types/economy.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/games/isocity/types/services.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/games/isocity/types/game.ts [app-client] (ecmascript)");
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/types/game.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/**
 * Game type definitions for IsoCity
 * 
 * BACKWARD COMPATIBILITY FILE
 * 
 * This file re-exports all IsoCity types from their new canonical locations
 * in @/games/isocity/types for backward compatibility with existing imports.
 * 
 * New code should import directly from:
 *   import { GameState, Building } from '@/games/isocity/types';
 * 
 * Existing code using this file will continue to work:
 *   import { GameState, Building } from '@/types/game';
 */ // Re-export all types from the IsoCity module
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/games/isocity/types/index.ts [app-client] (ecmascript) <locals>");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/GameContext.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/context/GameContext.tsx'\n\nA 'continue' statement can only jump to a label of an enclosing iteration statement");
e.code = 'MODULE_UNPARSABLE';
throw e;
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
"[project]/src/hooks/useMobile.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getIsMobileSSR",
    ()=>getIsMobileSSR,
    "useMobile",
    ()=>useMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$device$2d$detect$2f$dist$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-device-detect/dist/lib.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useMobile() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "148cc6b11117ccf8cd44b1f7e7bd818b335e6cf0ef2384fcaabcefbba1aa066c") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "148cc6b11117ccf8cd44b1f7e7bd818b335e6cf0ef2384fcaabcefbba1aa066c";
    }
    const [screenWidth, setScreenWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [screenHeight, setScreenHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isSmallScreen, setIsSmallScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTouchDevice, setIsTouchDevice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [orientation, setOrientation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("portrait");
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "useMobile[useEffect()]": ()=>{
                const updateDimensions = {
                    "useMobile[useEffect() > updateDimensions]": ()=>{
                        const width = window.innerWidth;
                        const height = window.innerHeight;
                        setScreenWidth(width);
                        setScreenHeight(height);
                        setIsSmallScreen(width < 768);
                        setOrientation(width > height ? "landscape" : "portrait");
                    }
                }["useMobile[useEffect() > updateDimensions]"];
                const checkTouch = {
                    "useMobile[useEffect() > checkTouch]": ()=>{
                        setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
                    }
                }["useMobile[useEffect() > checkTouch]"];
                updateDimensions();
                checkTouch();
                window.addEventListener("resize", updateDimensions);
                window.addEventListener("orientationchange", updateDimensions);
                return ()=>{
                    window.removeEventListener("resize", updateDimensions);
                    window.removeEventListener("orientationchange", updateDimensions);
                };
            }
        })["useMobile[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const t2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$device$2d$detect$2f$dist$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"] || isSmallScreen;
    let t3;
    if ($[3] !== isSmallScreen || $[4] !== isTouchDevice || $[5] !== orientation || $[6] !== screenHeight || $[7] !== screenWidth || $[8] !== t2) {
        t3 = {
            isMobileDevice: t2,
            isTabletDevice: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$device$2d$detect$2f$dist$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"],
            isMobileOnly: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$device$2d$detect$2f$dist$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobileOnly"],
            isSmallScreen,
            isTouchDevice,
            screenWidth,
            screenHeight,
            orientation
        };
        $[3] = isSmallScreen;
        $[4] = isTouchDevice;
        $[5] = orientation;
        $[6] = screenHeight;
        $[7] = screenWidth;
        $[8] = t2;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    return t3;
}
_s(useMobile, "Mz/HJ8ekJ/iIcV5hoaEVICRvuz8=");
function getIsMobileSSR() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return window.innerWidth < 768 || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$device$2d$detect$2f$dist$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useCheatCodes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCheatCodes",
    ()=>useCheatCodes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const KONAMI_CODE = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a'
];
const MAX_BUFFER_SIZE = 50;
function useCheatCodes() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "e8fc4c3fbe99fbff6f2e169ea891c6020c9a9206e4adcdc3ffb10b19ebe6866a") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e8fc4c3fbe99fbff6f2e169ea891c6020c9a9206e4adcdc3ffb10b19ebe6866a";
    }
    const [triggeredCheat, setTriggeredCheat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showVinnieDialog, setShowVinnieDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const konamiBufferRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t0);
    const typedBufferRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const konamiTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isTypingTarget = _useCheatCodesIsTypingTarget;
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "useCheatCodes[useEffect()]": ()=>{
                const handleKeyDown = {
                    "useCheatCodes[useEffect() > handleKeyDown]": (e)=>{
                        if (isTypingTarget(e.target)) {
                            return;
                        }
                        const key = e.key;
                        if (konamiTimeoutRef.current) {
                            clearTimeout(konamiTimeoutRef.current);
                            konamiTimeoutRef.current = null;
                        }
                        konamiBufferRef.current.push(key.toLowerCase());
                        if (konamiBufferRef.current.length > KONAMI_CODE.length) {
                            konamiBufferRef.current.shift();
                        }
                        if (konamiBufferRef.current.length >= KONAMI_CODE.length) {
                            const recentKeys = konamiBufferRef.current.slice(-KONAMI_CODE.length);
                            const matches = recentKeys.every(_useCheatCodesUseEffectHandleKeyDownRecentKeysEvery);
                            if (matches) {
                                setTriggeredCheat({
                                    type: "konami",
                                    amount: 50000
                                });
                                konamiBufferRef.current = [];
                                if (konamiTimeoutRef.current) {
                                    clearTimeout(konamiTimeoutRef.current);
                                    konamiTimeoutRef.current = null;
                                }
                            }
                        }
                        konamiTimeoutRef.current = setTimeout({
                            "useCheatCodes[useEffect() > handleKeyDown > setTimeout()]": ()=>{
                                konamiBufferRef.current = [];
                                konamiTimeoutRef.current = null;
                            }
                        }["useCheatCodes[useEffect() > handleKeyDown > setTimeout()]"], 2000);
                        if (key.length === 1 && /[a-z\s]/i.test(key)) {
                            typedBufferRef.current = typedBufferRef.current + key.toLowerCase();
                            if (typedBufferRef.current.length > MAX_BUFFER_SIZE) {
                                typedBufferRef.current = typedBufferRef.current.slice(-MAX_BUFFER_SIZE);
                            }
                            const buffer = typedBufferRef.current;
                            const normalizedBuffer = buffer.replace(/\s+/g, "");
                            if (buffer.includes("vinnie")) {
                                console.log("\uD83C\uDFAE Cheat activated: vinnie");
                                setShowVinnieDialog(true);
                                setTriggeredCheat({
                                    type: "vinnie"
                                });
                                typedBufferRef.current = "";
                            } else {
                                if (normalizedBuffer.includes("motherlode")) {
                                    console.log("\uD83C\uDFAE Cheat activated: motherlode");
                                    setTriggeredCheat({
                                        type: "motherlode",
                                        amount: 50000
                                    });
                                    typedBufferRef.current = "";
                                } else {
                                    if (normalizedBuffer.includes("fund")) {
                                        console.log("\uD83C\uDFAE Cheat activated: fund");
                                        setTriggeredCheat({
                                            type: "fund",
                                            amount: 10000
                                        });
                                        typedBufferRef.current = "";
                                    }
                                }
                            }
                        }
                    }
                }["useCheatCodes[useEffect() > handleKeyDown]"];
                window.addEventListener("keydown", handleKeyDown);
                return ()=>{
                    window.removeEventListener("keydown", handleKeyDown);
                    if (konamiTimeoutRef.current) {
                        clearTimeout(konamiTimeoutRef.current);
                    }
                };
            }
        })["useCheatCodes[useEffect()]"];
        t2 = [
            isTypingTarget
        ];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "useCheatCodes[clearTriggeredCheat]": ()=>{
                setTriggeredCheat(null);
            }
        })["useCheatCodes[clearTriggeredCheat]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const clearTriggeredCheat = t3;
    let t4;
    if ($[5] !== showVinnieDialog || $[6] !== triggeredCheat) {
        t4 = {
            triggeredCheat,
            showVinnieDialog,
            setShowVinnieDialog,
            clearTriggeredCheat
        };
        $[5] = showVinnieDialog;
        $[6] = triggeredCheat;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    return t4;
}
_s(useCheatCodes, "ATQgmbHvSvY4oBAsXAn4ARr2ck0=");
function _useCheatCodesUseEffectHandleKeyDownRecentKeysEvery(k, i) {
    return k === KONAMI_CODE[i].toLowerCase();
}
function _useCheatCodesIsTypingTarget(target) {
    const el = target;
    return !!el?.closest("input, textarea, select, [contenteditable=\"true\"]");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useTipSystem.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTipSystem",
    ()=>useTipSystem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gt-next/dist/index.client.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// Define all tips with their conditions
const TIP_DEFINITIONS = [
    {
        id: 'get_started',
        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Welcome to ISOBUSINESS. Start by allocating founder talent, startup HQ, and R&D zones. Then connect offering partnerships, event collaboration, and commercial partnership to activate growth.'),
        priority: 0,
        // Highest priority - shows first on fresh cities
        check: (state)=>{
            // Check if this is a fresh/empty city - no zones placed yet
            let hasAnyZone = false;
            let hasAnyBuilding = false;
            for(let y = 0; y < state.gridSize; y++){
                for(let x = 0; x < state.gridSize; x++){
                    const tile = state.grid[y][x];
                    if (tile.zone !== 'none') {
                        hasAnyZone = true;
                    }
                    const type = tile.building.type;
                    // Check for any placed buildings (not natural terrain)
                    if (type !== 'grass' && type !== 'water' && type !== 'tree') {
                        hasAnyBuilding = true;
                    }
                }
            }
            // Show on fresh cities with no zones and no buildings
            return !hasAnyZone && !hasAnyBuilding;
        }
    },
    {
        id: 'needs_utilities',
        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Company expansion needs event collaboration, commercial partnership, and offering partnerships before execution can begin.'),
        priority: 1,
        check: (state)=>{
            // Check if there are zoned tiles (even just grass) but no utilities infrastructure
            let hasZonedTiles = false;
            let hasPowerPlant = false;
            let hasWaterTower = false;
            let hasRoad = false;
            for(let y = 0; y < state.gridSize; y++){
                for(let x = 0; x < state.gridSize; x++){
                    const tile = state.grid[y][x];
                    if (tile.zone !== 'none') {
                        hasZonedTiles = true;
                    }
                    const type = tile.building.type;
                    if (type === 'power_plant') hasPowerPlant = true;
                    if (type === 'water_tower') hasWaterTower = true;
                    if (type === 'road' || type === 'bridge') hasRoad = true;
                }
            }
            // Trigger if: have zones but missing any utility infrastructure
            return hasZonedTiles && (!hasPowerPlant || !hasWaterTower || !hasRoad);
        }
    },
    {
        id: 'negative_demand',
        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Watch portfolio demand signals. Sustained negative demand can push companies into distressed mode.'),
        priority: 2,
        check: (state)=>{
            const { residential, commercial, industrial } = state.stats.demand;
            // Check if any demand is significantly negative
            return residential < -20 || commercial < -20 || industrial < -20;
        }
    },
    {
        id: 'needs_safety_services',
        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Add risk-control and compliance coverage to protect portfolio companies from operational shocks.'),
        priority: 3,
        check: (state)=>{
            // Check if there are buildings but no fire/police stations
            let hasBuildings = false;
            let hasFireStation = false;
            let hasPoliceStation = false;
            for(let y = 0; y < state.gridSize; y++){
                for(let x = 0; x < state.gridSize; x++){
                    const type = state.grid[y][x].building.type;
                    if (type === 'fire_station') hasFireStation = true;
                    if (type === 'police_station') hasPoliceStation = true;
                    // Check for any developed zone buildings
                    const zone = state.grid[y][x].zone;
                    if (zone !== 'none' && type !== 'grass') {
                        hasBuildings = true;
                    }
                }
            }
            // Has at least 50 population but no safety services
            return hasBuildings && state.stats.population >= 50 && (!hasFireStation || !hasPoliceStation);
        }
    },
    {
        id: 'needs_parks',
        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Invest in brand and culture assets to improve team sentiment and retention signal.'),
        priority: 4,
        check: (state)=>{
            // Check if environment score is low
            return state.stats.environment < 40 && state.stats.population >= 100;
        }
    },
    {
        id: 'needs_health_education',
        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Build wellness and upskilling capacity to sustain long-term founder and operator performance.'),
        priority: 5,
        check: (state)=>{
            // Check if there's population but no hospitals or schools
            let hasHospital = false;
            let hasSchool = false;
            for(let y = 0; y < state.gridSize; y++){
                for(let x = 0; x < state.gridSize; x++){
                    const type = state.grid[y][x].building.type;
                    if (type === 'hospital') hasHospital = true;
                    if (type === 'school' || type === 'university') hasSchool = true;
                }
            }
            // Has at least 100 population but no health/education
            return state.stats.population >= 100 && (!hasHospital || !hasSchool);
        }
    }
];
const STORAGE_KEY = 'isocity-tips-disabled';
const SHOWN_TIPS_KEY = 'isocity-tips-shown';
const MIN_TIP_INTERVAL_MS = 15000; // Minimum 15 seconds between tips
const TIP_CHECK_INTERVAL_MS = 5000; // Check for tip conditions every 5 seconds
const INITIAL_TIP_DELAY_MS = 3000; // Wait 3 seconds before first tip
function useTipSystem(state) {
    _s();
    const [tipsEnabled, setTipsEnabledState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentTip, setCurrentTip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shownTips, setShownTips] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const lastTipTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const checkIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasLoadedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Use a ref to always have the latest state without causing effect re-runs
    const stateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(state);
    stateRef.current = state;
    // Load preferences from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTipSystem.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                const disabled = localStorage.getItem(STORAGE_KEY);
                if (disabled === 'true') {
                    setTipsEnabledState(false);
                }
                const shown = localStorage.getItem(SHOWN_TIPS_KEY);
                if (shown) {
                    const parsed = JSON.parse(shown);
                    if (Array.isArray(parsed)) {
                        setShownTips(new Set(parsed));
                    }
                }
            } catch (e) {
                console.error('Failed to load tip preferences:', e);
            }
            hasLoadedRef.current = true;
        }
    }["useTipSystem.useEffect"], []);
    // Save shown tips to localStorage when they change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTipSystem.useEffect": ()=>{
            if (!hasLoadedRef.current) return;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                localStorage.setItem(SHOWN_TIPS_KEY, JSON.stringify(Array.from(shownTips)));
            } catch (e_0) {
                console.error('Failed to save shown tips:', e_0);
            }
        }
    }["useTipSystem.useEffect"], [
        shownTips
    ]);
    // Set tips enabled preference
    const setTipsEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTipSystem.useCallback[setTipsEnabled]": (enabled)=>{
            setTipsEnabledState(enabled);
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    localStorage.setItem(STORAGE_KEY, enabled ? 'false' : 'true');
                } catch (e_1) {
                    console.error('Failed to save tip preference:', e_1);
                }
            }
            if (!enabled) {
                setIsVisible(false);
                setCurrentTip(null);
            }
        }
    }["useTipSystem.useCallback[setTipsEnabled]"], []);
    // Track shown tips in a ref as well for synchronous access
    const shownTipsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    // Keep ref in sync with state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTipSystem.useEffect": ()=>{
            shownTipsRef.current = shownTips;
        }
    }["useTipSystem.useEffect"], [
        shownTips
    ]);
    // Check for conditions and show tip - uses refs to get latest values
    const checkAndShowTip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTipSystem.useCallback[checkAndShowTip]": ()=>{
            if (!hasLoadedRef.current) return;
            if (!tipsEnabled) return;
            if (isVisible) return;
            const now = Date.now();
            // Rate limiting - don't show tips too frequently (skip for first tip)
            if (lastTipTimeRef.current > 0 && now - lastTipTimeRef.current < MIN_TIP_INTERVAL_MS) {
                return;
            }
            const currentState = stateRef.current;
            const currentShownTips = shownTipsRef.current;
            // Find the first applicable tip that hasn't been shown
            const applicableTips = TIP_DEFINITIONS.filter({
                "useTipSystem.useCallback[checkAndShowTip].applicableTips": (tip)=>!currentShownTips.has(tip.id) && tip.check(currentState)
            }["useTipSystem.useCallback[checkAndShowTip].applicableTips"]).sort({
                "useTipSystem.useCallback[checkAndShowTip].applicableTips": (a, b)=>a.priority - b.priority
            }["useTipSystem.useCallback[checkAndShowTip].applicableTips"]);
            if (applicableTips.length > 0) {
                const tip_0 = applicableTips[0];
                setCurrentTip(tip_0.message);
                setIsVisible(true);
                lastTipTimeRef.current = now;
                setShownTips({
                    "useTipSystem.useCallback[checkAndShowTip]": (prev)=>new Set([
                            ...prev,
                            tip_0.id
                        ])
                }["useTipSystem.useCallback[checkAndShowTip]"]);
            }
        }
    }["useTipSystem.useCallback[checkAndShowTip]"], [
        tipsEnabled,
        isVisible
    ]);
    // Set up periodic check for tip conditions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTipSystem.useEffect": ()=>{
            // Clear any existing interval
            if (checkIntervalRef.current) {
                clearInterval(checkIntervalRef.current);
            }
            if (!tipsEnabled) return;
            // Initial check after a short delay (give time for game to initialize)
            const initialTimeout = setTimeout({
                "useTipSystem.useEffect.initialTimeout": ()=>{
                    checkAndShowTip();
                }
            }["useTipSystem.useEffect.initialTimeout"], INITIAL_TIP_DELAY_MS);
            // Set up periodic checking
            checkIntervalRef.current = setInterval(checkAndShowTip, TIP_CHECK_INTERVAL_MS);
            return ({
                "useTipSystem.useEffect": ()=>{
                    clearTimeout(initialTimeout);
                    if (checkIntervalRef.current) {
                        clearInterval(checkIntervalRef.current);
                    }
                }
            })["useTipSystem.useEffect"];
        }
    }["useTipSystem.useEffect"], [
        tipsEnabled,
        checkAndShowTip
    ]);
    // Handle continue button - dismiss current tip
    const onContinue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTipSystem.useCallback[onContinue]": ()=>{
            setIsVisible(false);
            // Small delay before clearing the message to allow exit animation
            setTimeout({
                "useTipSystem.useCallback[onContinue]": ()=>{
                    setCurrentTip(null);
                }
            }["useTipSystem.useCallback[onContinue]"], 300);
        }
    }["useTipSystem.useCallback[onContinue]"], []);
    // Handle skip all button - disable tips permanently
    const onSkipAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTipSystem.useCallback[onSkipAll]": ()=>{
            setTipsEnabled(false);
            setIsVisible(false);
            setCurrentTip(null);
        }
    }["useTipSystem.useCallback[onSkipAll]"], [
        setTipsEnabled
    ]);
    return {
        currentTip,
        isVisible,
        onContinue,
        onSkipAll,
        tipsEnabled,
        setTipsEnabled
    };
}
_s(useTipSystem, "mhAmo7HMCGRmvcdJ0GBmm1gGhTE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useMultiplayerSync.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMultiplayerSync",
    ()=>useMultiplayerSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MultiplayerContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/MultiplayerContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/GameContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Batch placement buffer for reducing message count during drags
const BATCH_FLUSH_INTERVAL = 100; // ms - flush every 100ms during drag
const BATCH_MAX_SIZE = 100; // Max placements before force flush
// Storage key for saved cities index (matches page.tsx)
const SAVED_CITIES_INDEX_KEY = 'isocity-saved-cities-index';
// Update the saved cities index with the current multiplayer city state
function updateSavedCitiesIndex(state, roomCode) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        // Load existing cities
        const saved = localStorage.getItem(SAVED_CITIES_INDEX_KEY);
        const cities = saved ? JSON.parse(saved) : [];
        // Create updated city meta
        const cityMeta = {
            id: state.id || `city-${Date.now()}`,
            cityName: state.cityName || 'Co-op City',
            population: state.stats.population,
            money: state.stats.money,
            year: state.year,
            month: state.month,
            gridSize: state.gridSize,
            savedAt: Date.now(),
            roomCode: roomCode
        };
        // Find and update or add
        const existingIndex = cities.findIndex((c)=>c.roomCode === roomCode);
        if (existingIndex >= 0) {
            cities[existingIndex] = cityMeta;
        } else {
            cities.unshift(cityMeta);
        }
        // Keep only the last 20 cities and save
        localStorage.setItem(SAVED_CITIES_INDEX_KEY, JSON.stringify(cities.slice(0, 20)));
    } catch (e) {
        console.error('Failed to update saved cities index:', e);
    }
}
function useMultiplayerSync() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(66);
    if ($[0] !== "2c7e6a11041b1863a29af54980a39f3e3b40013f9031c4ee8696c99d8d34036e") {
        for(let $i = 0; $i < 66; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2c7e6a11041b1863a29af54980a39f3e3b40013f9031c4ee8696c99d8d34036e";
    }
    const multiplayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MultiplayerContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMultiplayerOptional"])();
    const game = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"])();
    const lastActionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initialStateLoadedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const placementBufferRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t0);
    const flushTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const multiplayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(multiplayer);
    let t1;
    let t2;
    if ($[2] !== multiplayer) {
        t1 = ({
            "useMultiplayerSync[useEffect()]": ()=>{
                multiplayerRef.current = multiplayer;
            }
        })["useMultiplayerSync[useEffect()]"];
        t2 = [
            multiplayer
        ];
        $[2] = multiplayer;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const lastInitialStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t3;
    if ($[5] !== game || $[6] !== multiplayer) {
        t3 = ({
            "useMultiplayerSync[useEffect()]": ()=>{
                if (!multiplayer || !multiplayer.initialState) {
                    return;
                }
                const stateKey = JSON.stringify(multiplayer.initialState.tick || 0);
                if (lastInitialStateRef.current === stateKey && initialStateLoadedRef.current) {
                    return;
                }
                console.log("[useMultiplayerSync] Received initial state from network, loading...");
                const stateString = JSON.stringify(multiplayer.initialState);
                const success = game.loadState(stateString);
                if (success) {
                    initialStateLoadedRef.current = true;
                    lastInitialStateRef.current = stateKey;
                }
            }
        })["useMultiplayerSync[useEffect()]"];
        $[5] = game;
        $[6] = multiplayer;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const t4 = multiplayer?.initialState;
    let t5;
    if ($[8] !== game || $[9] !== t4) {
        t5 = [
            t4,
            game
        ];
        $[8] = game;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t5);
    let t6;
    if ($[11] !== game) {
        t6 = ({
            "useMultiplayerSync[applyRemoteAction]": (action)=>{
                if (!action || !action.type) {
                    console.warn("[useMultiplayerSync] Received invalid action:", action);
                    return;
                }
                bb35: switch(action.type){
                    case "place":
                        {
                            const currentTool = game.state.selectedTool;
                            game.setTool(action.tool);
                            game.placeAtTile(action.x, action.y, true);
                            game.setTool(currentTool);
                            break bb35;
                        }
                    case "placeBatch":
                        {
                            const originalTool = game.state.selectedTool;
                            for (const placement of action.placements){
                                game.setTool(placement.tool);
                                game.placeAtTile(placement.x, placement.y, true);
                            }
                            game.setTool(originalTool);
                            break bb35;
                        }
                    case "bulldoze":
                        {
                            const savedTool = game.state.selectedTool;
                            game.setTool("bulldoze");
                            game.placeAtTile(action.x, action.y, true);
                            game.setTool(savedTool);
                            break bb35;
                        }
                    case "setTaxRate":
                        {
                            game.setTaxRate(action.rate);
                            break bb35;
                        }
                    case "setBudget":
                        {
                            game.setBudgetFunding(action.key, action.funding);
                            break bb35;
                        }
                    case "setSpeed":
                        {
                            game.setSpeed(action.speed);
                            break bb35;
                        }
                    case "setDisasters":
                        {
                            game.setDisastersEnabled(action.enabled);
                            break bb35;
                        }
                    case "createBridges":
                        {
                            game.finishTrackDrag(action.pathTiles, action.trackType, true);
                            break bb35;
                        }
                    case "fullState":
                        {
                            break bb35;
                        }
                    case "tick":
                }
            }
        })["useMultiplayerSync[applyRemoteAction]"];
        $[11] = game;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const applyRemoteAction = t6;
    let t7;
    let t8;
    if ($[13] !== applyRemoteAction || $[14] !== multiplayer) {
        t7 = ({
            "useMultiplayerSync[useEffect()]": ()=>{
                if (!multiplayer) {
                    return;
                }
                multiplayer.setOnRemoteAction({
                    "useMultiplayerSync[useEffect() > multiplayer.setOnRemoteAction()]": (action_0)=>{
                        applyRemoteAction(action_0);
                    }
                }["useMultiplayerSync[useEffect() > multiplayer.setOnRemoteAction()]"]);
                return ()=>{
                    multiplayer.setOnRemoteAction(null);
                };
            }
        })["useMultiplayerSync[useEffect()]"];
        t8 = [
            multiplayer,
            applyRemoteAction
        ];
        $[13] = applyRemoteAction;
        $[14] = multiplayer;
        $[15] = t7;
        $[16] = t8;
    } else {
        t7 = $[15];
        t8 = $[16];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t9;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "useMultiplayerSync[flushPlacements]": ()=>{
                const mp = multiplayerRef.current;
                if (!mp || placementBufferRef.current.length === 0) {
                    return;
                }
                if (flushTimeoutRef.current) {
                    clearTimeout(flushTimeoutRef.current);
                    flushTimeoutRef.current = null;
                }
                const placements = [
                    ...placementBufferRef.current
                ];
                placementBufferRef.current = [];
                if (placements.length === 1) {
                    const p = placements[0];
                    mp.dispatchAction({
                        type: "place",
                        x: p.x,
                        y: p.y,
                        tool: p.tool
                    });
                } else {
                    mp.dispatchAction({
                        type: "placeBatch",
                        placements
                    });
                }
            }
        })["useMultiplayerSync[flushPlacements]"];
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    const flushPlacements = t9;
    let t10;
    if ($[18] !== game || $[19] !== multiplayer) {
        t10 = ({
            "useMultiplayerSync[useEffect()]": ()=>{
                if (!multiplayer || multiplayer.connectionState !== "connected") {
                    game.setPlaceCallback(null);
                    if (placementBufferRef.current.length > 0) {
                        placementBufferRef.current = [];
                    }
                    if (flushTimeoutRef.current) {
                        clearTimeout(flushTimeoutRef.current);
                        flushTimeoutRef.current = null;
                    }
                    return;
                }
                game.setPlaceCallback({
                    "useMultiplayerSync[useEffect() > game.setPlaceCallback()]": (t11)=>{
                        const { x, y, tool } = t11;
                        if (tool === "bulldoze") {
                            flushPlacements();
                            multiplayer.dispatchAction({
                                type: "bulldoze",
                                x,
                                y
                            });
                        } else {
                            if (tool !== "select") {
                                placementBufferRef.current.push({
                                    x,
                                    y,
                                    tool
                                });
                                if (placementBufferRef.current.length >= BATCH_MAX_SIZE) {
                                    flushPlacements();
                                } else {
                                    if (!flushTimeoutRef.current) {
                                        flushTimeoutRef.current = setTimeout({
                                            "useMultiplayerSync[useEffect() > game.setPlaceCallback() > setTimeout()]": ()=>{
                                                flushTimeoutRef.current = null;
                                                flushPlacements();
                                            }
                                        }["useMultiplayerSync[useEffect() > game.setPlaceCallback() > setTimeout()]"], BATCH_FLUSH_INTERVAL);
                                    }
                                }
                            }
                        }
                    }
                }["useMultiplayerSync[useEffect() > game.setPlaceCallback()]"]);
                return ()=>{
                    flushPlacements();
                    game.setPlaceCallback(null);
                };
            }
        })["useMultiplayerSync[useEffect()]"];
        $[18] = game;
        $[19] = multiplayer;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    const t11 = multiplayer?.connectionState;
    let t12;
    if ($[21] !== game || $[22] !== multiplayer || $[23] !== t11) {
        t12 = [
            multiplayer,
            t11,
            game,
            flushPlacements
        ];
        $[21] = game;
        $[22] = multiplayer;
        $[23] = t11;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t10, t12);
    let t13;
    if ($[25] !== game || $[26] !== multiplayer) {
        t13 = ({
            "useMultiplayerSync[useEffect()]": ()=>{
                if (!multiplayer || multiplayer.connectionState !== "connected") {
                    game.setBridgeCallback(null);
                    return;
                }
                game.setBridgeCallback({
                    "useMultiplayerSync[useEffect() > game.setBridgeCallback()]": (t14)=>{
                        const { pathTiles, trackType } = t14;
                        multiplayer.dispatchAction({
                            type: "createBridges",
                            pathTiles,
                            trackType
                        });
                    }
                }["useMultiplayerSync[useEffect() > game.setBridgeCallback()]"]);
                return ()=>{
                    game.setBridgeCallback(null);
                };
            }
        })["useMultiplayerSync[useEffect()]"];
        $[25] = game;
        $[26] = multiplayer;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    const t14 = multiplayer?.connectionState;
    let t15;
    if ($[28] !== game || $[29] !== multiplayer || $[30] !== t14) {
        t15 = [
            multiplayer,
            t14,
            game
        ];
        $[28] = game;
        $[29] = multiplayer;
        $[30] = t14;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t13, t15);
    const lastUpdateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastIndexUpdateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    let t16;
    let t17;
    if ($[32] !== game.state || $[33] !== multiplayer) {
        t16 = ({
            "useMultiplayerSync[useEffect()]": ()=>{
                if (!multiplayer || multiplayer.connectionState !== "connected") {
                    return;
                }
                const now = Date.now();
                if (now - lastUpdateRef.current < 2000) {
                    return;
                }
                lastUpdateRef.current = now;
                multiplayer.updateGameState(game.state);
                if (multiplayer.roomCode && now - lastIndexUpdateRef.current > 10000) {
                    lastIndexUpdateRef.current = now;
                    updateSavedCitiesIndex(game.state, multiplayer.roomCode);
                }
            }
        })["useMultiplayerSync[useEffect()]"];
        t17 = [
            multiplayer,
            game.state
        ];
        $[32] = game.state;
        $[33] = multiplayer;
        $[34] = t16;
        $[35] = t17;
    } else {
        t16 = $[34];
        t17 = $[35];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t16, t17);
    let t18;
    if ($[36] !== multiplayer) {
        t18 = ({
            "useMultiplayerSync[broadcastAction]": (action_1)=>{
                if (!multiplayer || multiplayer.connectionState !== "connected") {
                    return;
                }
                const actionKey = JSON.stringify(action_1);
                if (lastActionRef.current === actionKey) {
                    return;
                }
                lastActionRef.current = actionKey;
                setTimeout({
                    "useMultiplayerSync[broadcastAction > setTimeout()]": ()=>{
                        if (lastActionRef.current === actionKey) {
                            lastActionRef.current = null;
                        }
                    }
                }["useMultiplayerSync[broadcastAction > setTimeout()]"], 100);
                multiplayer.dispatchAction(action_1);
            }
        })["useMultiplayerSync[broadcastAction]"];
        $[36] = multiplayer;
        $[37] = t18;
    } else {
        t18 = $[37];
    }
    const broadcastAction = t18;
    let t19;
    if ($[38] !== broadcastAction) {
        t19 = ({
            "useMultiplayerSync[broadcastPlace]": (t20)=>{
                const { x: x_0, y: y_0, tool: tool_0 } = t20;
                if (tool_0 === "bulldoze") {
                    broadcastAction({
                        type: "bulldoze",
                        x: x_0,
                        y: y_0
                    });
                } else {
                    if (tool_0 !== "select") {
                        broadcastAction({
                            type: "place",
                            x: x_0,
                            y: y_0,
                            tool: tool_0
                        });
                    }
                }
            }
        })["useMultiplayerSync[broadcastPlace]"];
        $[38] = broadcastAction;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    const broadcastPlace = t19;
    let t20;
    if ($[40] !== broadcastAction) {
        t20 = ({
            "useMultiplayerSync[broadcastTaxRate]": (rate)=>{
                broadcastAction({
                    type: "setTaxRate",
                    rate
                });
            }
        })["useMultiplayerSync[broadcastTaxRate]"];
        $[40] = broadcastAction;
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    const broadcastTaxRate = t20;
    let t21;
    if ($[42] !== broadcastAction) {
        t21 = ({
            "useMultiplayerSync[broadcastBudget]": (key, funding)=>{
                broadcastAction({
                    type: "setBudget",
                    key,
                    funding
                });
            }
        })["useMultiplayerSync[broadcastBudget]"];
        $[42] = broadcastAction;
        $[43] = t21;
    } else {
        t21 = $[43];
    }
    const broadcastBudget = t21;
    let t22;
    if ($[44] !== broadcastAction) {
        t22 = ({
            "useMultiplayerSync[broadcastSpeed]": (speed)=>{
                broadcastAction({
                    type: "setSpeed",
                    speed
                });
            }
        })["useMultiplayerSync[broadcastSpeed]"];
        $[44] = broadcastAction;
        $[45] = t22;
    } else {
        t22 = $[45];
    }
    const broadcastSpeed = t22;
    let t23;
    if ($[46] !== broadcastAction) {
        t23 = ({
            "useMultiplayerSync[broadcastDisasters]": (enabled)=>{
                broadcastAction({
                    type: "setDisasters",
                    enabled
                });
            }
        })["useMultiplayerSync[broadcastDisasters]"];
        $[46] = broadcastAction;
        $[47] = t23;
    } else {
        t23 = $[47];
    }
    const broadcastDisasters = t23;
    const isMultiplayer = multiplayer?.connectionState === "connected";
    const isHost = multiplayer?.isHost ?? false;
    const playerCount = multiplayer?.players.length ?? 0;
    const roomCode = multiplayer?.roomCode ?? null;
    const connectionState = multiplayer?.connectionState ?? "disconnected";
    let t24;
    if ($[48] !== multiplayer?.players) {
        t24 = multiplayer?.players ?? [];
        $[48] = multiplayer?.players;
        $[49] = t24;
    } else {
        t24 = $[49];
    }
    let t25;
    if ($[50] !== multiplayer?.leaveRoom) {
        t25 = multiplayer?.leaveRoom ?? _temp;
        $[50] = multiplayer?.leaveRoom;
        $[51] = t25;
    } else {
        t25 = $[51];
    }
    let t26;
    if ($[52] !== broadcastAction || $[53] !== broadcastBudget || $[54] !== broadcastDisasters || $[55] !== broadcastPlace || $[56] !== broadcastSpeed || $[57] !== broadcastTaxRate || $[58] !== connectionState || $[59] !== isHost || $[60] !== isMultiplayer || $[61] !== playerCount || $[62] !== roomCode || $[63] !== t24 || $[64] !== t25) {
        t26 = {
            isMultiplayer,
            isHost,
            playerCount,
            roomCode,
            connectionState,
            players: t24,
            broadcastPlace,
            broadcastTaxRate,
            broadcastBudget,
            broadcastSpeed,
            broadcastDisasters,
            broadcastAction,
            leaveRoom: t25
        };
        $[52] = broadcastAction;
        $[53] = broadcastBudget;
        $[54] = broadcastDisasters;
        $[55] = broadcastPlace;
        $[56] = broadcastSpeed;
        $[57] = broadcastTaxRate;
        $[58] = connectionState;
        $[59] = isHost;
        $[60] = isMultiplayer;
        $[61] = playerCount;
        $[62] = roomCode;
        $[63] = t24;
        $[64] = t25;
        $[65] = t26;
    } else {
        t26 = $[65];
    }
    return t26;
}
_s(useMultiplayerSync, "j5uJFQNBJrtNJz+KJhWwrbqdyfI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MultiplayerContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMultiplayerOptional"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"]
    ];
});
function _temp() {}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useCopyRoomLink.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCopyRoomLink",
    ()=>useCopyRoomLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useCopyRoomLink(roomCode, path) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "7f29e550e228fa3bba26bc38073e51098464e9d3f79b5fbb0b37d1008b4fe121") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7f29e550e228fa3bba26bc38073e51098464e9d3f79b5fbb0b37d1008b4fe121";
    }
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "useCopyRoomLink[resetCopied]": ()=>{
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                    timeoutRef.current = null;
                }
                setCopied(false);
            }
        })["useCopyRoomLink[resetCopied]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const resetCopied = t0;
    let t1;
    if ($[2] !== path || $[3] !== roomCode) {
        t1 = ({
            "useCopyRoomLink[handleCopyRoomLink]": ()=>{
                if (!roomCode || ("TURBOPACK compile-time value", "object") === "undefined") {
                    return;
                }
                const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
                const url = `${window.location.origin}/${normalizedPath}/${roomCode}`;
                navigator.clipboard.writeText(url);
                setCopied(true);
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }
                timeoutRef.current = setTimeout({
                    "useCopyRoomLink[handleCopyRoomLink > setTimeout()]": ()=>{
                        resetCopied();
                    }
                }["useCopyRoomLink[handleCopyRoomLink > setTimeout()]"], 2000);
            }
        })["useCopyRoomLink[handleCopyRoomLink]"];
        $[2] = path;
        $[3] = roomCode;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const handleCopyRoomLink = t1;
    let t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "useCopyRoomLink[useEffect()]": ()=>()=>{
                    if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                    }
                }
        })["useCopyRoomLink[useEffect()]"];
        t3 = [];
        $[5] = t2;
        $[6] = t3;
    } else {
        t2 = $[5];
        t3 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[7] !== copied || $[8] !== handleCopyRoomLink) {
        t4 = {
            copied,
            handleCopyRoomLink,
            resetCopied
        };
        $[7] = copied;
        $[8] = handleCopyRoomLink;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    return t4;
}
_s(useCopyRoomLink, "Gdr2F5Io475kDuAuIGHzwEDq8DQ=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/GameContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MultiplayerContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/MultiplayerContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Game$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Game.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$multiplayer$2f$CoopModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/multiplayer/CoopModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMobile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/renderConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lz$2d$string$2f$libs$2f$lz$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lz-string/libs/lz-string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LanguageSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/LanguageSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VCSimDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/VCSimDashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$investorProfiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/investorProfiles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$vcSimulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/vcSimulation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gt-next/dist/index.client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const STORAGE_KEY = 'isobusiness-game-state';
const SAVED_CITIES_INDEX_KEY = 'isobusiness-saved-cities-index';
function normalizeInvestorDomain(domainInput) {
    const normalized = domainInput.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/.*$/, '');
    return normalized || 'ycombinator.com';
}
// Seeded from top 10 companies in public.vc_company_logo_manifest (source=specter_postgres)
const SEEDED_SPECTER_LOGOS = [
    {
        id: 'mock_9',
        name: 'Delta Robotics',
        logoUrl: 'https://logo.clearbit.com/deltarobotics.com'
    },
    {
        id: 'mock_5',
        name: 'Foundry AI',
        logoUrl: 'https://logo.clearbit.com/foundryai.com'
    },
    {
        id: 'mock_8',
        name: 'Helios Cloud',
        logoUrl: 'https://logo.clearbit.com/helioscloud.com'
    },
    {
        id: 'mock_7',
        name: 'Kite Finance',
        logoUrl: 'https://logo.clearbit.com/kitefinance.com'
    },
    {
        id: 'mock_1',
        name: 'Mistral Swarm Corp',
        logoUrl: 'https://logo.clearbit.com/mistralswarmcorp.com'
    },
    {
        id: 'mock_2',
        name: 'Nova Capital',
        logoUrl: 'https://logo.clearbit.com/novacapital.com'
    },
    {
        id: 'mock_4',
        name: 'Orbit Ventures',
        logoUrl: 'https://logo.clearbit.com/orbitventures.com'
    },
    {
        id: 'mock_10',
        name: 'Pioneer Health',
        logoUrl: 'https://logo.clearbit.com/pioneerhealth.com'
    },
    {
        id: 'mock_6',
        name: 'Signal Bio',
        logoUrl: 'https://logo.clearbit.com/signalbio.com'
    },
    {
        id: 'mock_3',
        name: 'Vertex Labs',
        logoUrl: 'https://logo.clearbit.com/vertexlabs.com'
    }
];
// Background color to filter from sprite sheets (red)
const BACKGROUND_COLOR = {
    r: 255,
    g: 0,
    b: 0
};
const COLOR_THRESHOLD = 155;
// Filter red background from sprite sheet
function filterBackgroundColor(img) {
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth || img.width;
    canvas.height = img.naturalHeight || img.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return canvas;
    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for(let i = 0; i < data.length; i += 4){
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const distance = Math.sqrt(Math.pow(r - BACKGROUND_COLOR.r, 2) + Math.pow(g - BACKGROUND_COLOR.g, 2) + Math.pow(b - BACKGROUND_COLOR.b, 2));
        if (distance <= COLOR_THRESHOLD) {
            data[i + 3] = 0; // Make transparent
        }
    }
    ctx.putImageData(imageData, 0, 0);
    return canvas;
}
// Shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
    const shuffled = [
        ...array
    ];
    for(let i = shuffled.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [
            shuffled[j],
            shuffled[i]
        ];
    }
    return shuffled;
}
// Check if there's a saved game in localStorage
// Supports both compressed (lz-string) and uncompressed (legacy) formats
function hasSavedGame() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
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
                    return false;
                }
            }
            const parsed = JSON.parse(jsonString);
            return parsed.grid && parsed.gridSize && parsed.stats;
        }
    } catch  {
        return false;
    }
    return false;
}
// Load saved cities index from localStorage
function loadSavedCities() {
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
    } catch  {
        return [];
    }
    return [];
}
// Save a city to the saved cities index (for multiplayer cities)
function saveCityToIndex(state, roomCode) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const cities = loadSavedCities();
        // Create city meta
        const cityMeta = {
            id: state.id || `city-${Date.now()}`,
            cityName: state.cityName || 'Co-op City',
            population: state.stats.population,
            money: state.stats.money,
            year: state.year,
            month: state.month,
            gridSize: state.gridSize,
            savedAt: Date.now(),
            roomCode: roomCode
        };
        // Check if city already exists (by id or roomCode)
        const existingIndex = cities.findIndex((c)=>c.id === cityMeta.id || roomCode && c.roomCode === roomCode);
        if (existingIndex >= 0) {
            // Update existing entry
            cities[existingIndex] = cityMeta;
        } else {
            // Add new entry at the beginning
            cities.unshift(cityMeta);
        }
        // Keep only the last 20 cities
        const trimmed = cities.slice(0, 20);
        localStorage.setItem(SAVED_CITIES_INDEX_KEY, JSON.stringify(trimmed));
    } catch (e) {
        console.error('Failed to save city to index:', e);
    }
}
// Sprite Gallery component that renders sprites using canvas (like SpriteTestPanel)
function SpriteGallery(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "12929fa0f7a932a48d884991daec4c0a1cb3e60ab77e04f103504908f976c6eb") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "12929fa0f7a932a48d884991daec4c0a1cb3e60ab77e04f103504908f976c6eb";
    }
    const { count: t1, cols: t2, cellSize: t3, displayWidth, displayHeight } = t0;
    const count = t1 === undefined ? 16 : t1;
    const cols = t2 === undefined ? 4 : t2;
    const cellSize = t3 === undefined ? 120 : t3;
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [filteredSheet, setFilteredSheet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpritePack"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SPRITE_PACK_ID"]);
        $[1] = t4;
    } else {
        t4 = $[1];
    }
    const spritePack = t4;
    let t5;
    if ($[2] !== count) {
        let t6;
        if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = ({
                "SpriteGallery[spritePack.spriteOrder.filter()]": (spriteKey)=>{
                    const hasBuildingMapping = Object.values(spritePack.buildingToSprite).includes(spriteKey);
                    return hasBuildingMapping;
                }
            })["SpriteGallery[spritePack.spriteOrder.filter()]"];
            $[4] = t6;
        } else {
            t6 = $[4];
        }
        const validSpriteKeys = spritePack.spriteOrder.filter(t6);
        const shuffled = shuffleArray([
            ...validSpriteKeys
        ]);
        t5 = shuffled.slice(0, count);
        $[2] = count;
        $[3] = t5;
    } else {
        t5 = $[3];
    }
    const randomSpriteKeys = t5;
    let t6;
    let t7;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "SpriteGallery[useEffect()]": ()=>{
                const img = new Image();
                img.onload = ()=>{
                    const filtered = filterBackgroundColor(img);
                    setFilteredSheet(filtered);
                };
                img.src = spritePack.src;
            }
        })["SpriteGallery[useEffect()]"];
        t7 = [
            spritePack.src
        ];
        $[5] = t6;
        $[6] = t7;
    } else {
        t6 = $[5];
        t7 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    bb0: {
        if (!filteredSheet) {
            let t9;
            if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
                t9 = [];
                $[7] = t9;
            } else {
                t9 = $[7];
            }
            t8 = t9;
            break bb0;
        }
        const sheetWidth = filteredSheet.width;
        const sheetHeight = filteredSheet.height;
        let t9;
        if ($[8] !== randomSpriteKeys || $[9] !== sheetHeight || $[10] !== sheetWidth) {
            let t10;
            if ($[12] !== sheetHeight || $[13] !== sheetWidth) {
                t10 = ({
                    "SpriteGallery[randomSpriteKeys.map()]": (spriteKey_0)=>{
                        const buildingType = Object.entries(spritePack.buildingToSprite).find({
                            "SpriteGallery[randomSpriteKeys.map() > (anonymous)()]": (t11)=>{
                                const [, value] = t11;
                                return value === spriteKey_0;
                            }
                        }["SpriteGallery[randomSpriteKeys.map() > (anonymous)()]"])?.[0] || spriteKey_0;
                        const coords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpriteCoords"])(buildingType, sheetWidth, sheetHeight, spritePack);
                        return coords ? {
                            spriteKey: spriteKey_0,
                            coords
                        } : null;
                    }
                })["SpriteGallery[randomSpriteKeys.map()]"];
                $[12] = sheetHeight;
                $[13] = sheetWidth;
                $[14] = t10;
            } else {
                t10 = $[14];
            }
            t9 = randomSpriteKeys.map(t10).filter(_SpriteGalleryAnonymous);
            $[8] = randomSpriteKeys;
            $[9] = sheetHeight;
            $[10] = sheetWidth;
            $[11] = t9;
        } else {
            t9 = $[11];
        }
        t8 = t9;
    }
    const spriteData = t8;
    let t10;
    let t9;
    if ($[15] !== cellSize || $[16] !== cols || $[17] !== displayHeight || $[18] !== displayWidth || $[19] !== filteredSheet || $[20] !== spriteData) {
        t9 = ({
            "SpriteGallery[useEffect()]": ()=>{
                const canvas = canvasRef.current;
                if (!canvas || !filteredSheet || spriteData.length === 0) {
                    return;
                }
                const ctx = canvas.getContext("2d", {
                    alpha: true
                });
                if (!ctx) {
                    return;
                }
                const dpr = window.devicePixelRatio || 1;
                const rows = Math.ceil(spriteData.length / cols);
                const canvasWidth = cols * cellSize;
                const canvasHeight = rows * cellSize;
                canvas.width = canvasWidth * dpr;
                canvas.height = canvasHeight * dpr;
                const resolvedDisplayWidth = displayWidth ?? canvasWidth;
                const resolvedDisplayHeight = displayHeight ?? canvasHeight;
                canvas.style.width = `${resolvedDisplayWidth}px`;
                canvas.style.height = `${resolvedDisplayHeight}px`;
                ctx.scale(dpr, dpr);
                ctx.imageSmoothingEnabled = false;
                ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                spriteData.forEach({
                    "SpriteGallery[useEffect() > spriteData.forEach()]": (t11, index)=>{
                        const { coords: coords_0 } = t11;
                        const col = index % cols;
                        const row = Math.floor(index / cols);
                        const cellX = col * cellSize;
                        const cellY = row * cellSize;
                        ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
                        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.roundRect(cellX + 2, cellY + 2, cellSize - 4, cellSize - 4, 4);
                        ctx.fill();
                        ctx.stroke();
                        const maxSize = cellSize - 20;
                        const aspectRatio = coords_0.sh / coords_0.sw;
                        let destWidth = maxSize;
                        let destHeight = destWidth * aspectRatio;
                        if (destHeight > maxSize) {
                            destHeight = maxSize;
                            destWidth = destHeight / aspectRatio;
                        }
                        const drawX = cellX + (cellSize - destWidth) / 2;
                        const drawY = cellY + (cellSize - destHeight) / 2 + destHeight * 0.1;
                        ctx.drawImage(filteredSheet, coords_0.sx, coords_0.sy, coords_0.sw, coords_0.sh, Math.round(drawX), Math.round(drawY), Math.round(destWidth), Math.round(destHeight));
                    }
                }["SpriteGallery[useEffect() > spriteData.forEach()]"]);
            }
        })["SpriteGallery[useEffect()]"];
        t10 = [
            filteredSheet,
            spriteData,
            cols,
            cellSize,
            displayWidth,
            displayHeight
        ];
        $[15] = cellSize;
        $[16] = cols;
        $[17] = displayHeight;
        $[18] = displayWidth;
        $[19] = filteredSheet;
        $[20] = spriteData;
        $[21] = t10;
        $[22] = t9;
    } else {
        t10 = $[21];
        t9 = $[22];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t9, t10);
    let t11;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            className: "opacity-80 hover:opacity-100 transition-opacity",
            style: {
                imageRendering: "pixelated"
            }
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 409,
            columnNumber: 11
        }, this);
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    return t11;
}
_s(SpriteGallery, "j5keD7hi+CVvt2PJ9zLgsYjAQFU=");
_c = SpriteGallery;
function _SpriteGalleryAnonymous(item) {
    return item !== null;
}
function CompanyLogoGrid({ max = 9, compact = false }) {
    _s1();
    const [companies, setCompanies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(SEEDED_SPECTER_LOGOS.slice(0, max));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompanyLogoGrid.useEffect": ()=>{
            let mounted = true;
            const load = {
                "CompanyLogoGrid.useEffect.load": async ()=>{
                    try {
                        const params = new URLSearchParams({
                            advance: 'false'
                        });
                        const selectedDomain = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$investorProfiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INVESTOR_DOMAIN_STORAGE_KEY"]) : "TURBOPACK unreachable";
                        if (selectedDomain) {
                            params.set('investor_domain', normalizeInvestorDomain(selectedDomain));
                        }
                        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$vcSimulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]}/api/v1/simulation/state?${params.toString()}`);
                        if (!response.ok) return;
                        const payload = await response.json();
                        const rows = Array.isArray(payload?.current_snapshot?.companies) ? payload.current_snapshot.companies : [];
                        const mapped = rows.filter({
                            "CompanyLogoGrid.useEffect.load.mapped": (row)=>!!row && typeof row === 'object'
                        }["CompanyLogoGrid.useEffect.load.mapped"]).map({
                            "CompanyLogoGrid.useEffect.load.mapped": (row_0, index)=>({
                                    id: typeof row_0.id === 'string' ? row_0.id : `company-${index}`,
                                    name: typeof row_0.name === 'string' && row_0.name.length > 0 ? row_0.name : `Company ${index + 1}`,
                                    logoUrl: typeof row_0.logo_url === 'string' && row_0.logo_url.length > 0 ? row_0.logo_url : ''
                                })
                        }["CompanyLogoGrid.useEffect.load.mapped"]).filter({
                            "CompanyLogoGrid.useEffect.load.mapped": (row_1)=>row_1.logoUrl.length > 0
                        }["CompanyLogoGrid.useEffect.load.mapped"]).slice(0, max);
                        if (mounted && mapped.length > 0) {
                            setCompanies(mapped);
                        }
                    } catch  {
                    // Keep seeded Specter logos on fetch failure.
                    }
                }
            }["CompanyLogoGrid.useEffect.load"];
            load();
            return ({
                "CompanyLogoGrid.useEffect": ()=>{
                    mounted = false;
                }
            })["CompanyLogoGrid.useEffect"];
        }
    }["CompanyLogoGrid.useEffect"], [
        max
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full ${compact ? 'max-w-[180px]' : 'max-w-[280px]'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 text-center text-[10px] uppercase tracking-[0.22em] text-white/50",
                children: "Top Portfolio Logos"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 462,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `grid grid-cols-3 ${compact ? 'gap-1.5' : 'gap-2'}`,
                children: companies.slice(0, max).map((company)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group flex aspect-square items-center justify-center rounded-md border border-white/12 bg-white/5 p-1.5",
                        title: company.name,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: company.logoUrl,
                            alt: `${company.name} logo`,
                            className: "h-full w-full object-contain opacity-85 transition-opacity group-hover:opacity-100",
                            onError: (event)=>{
                                const img = event.currentTarget;
                                img.onerror = null;
                                const initial = (company.name[0] || 'V').toUpperCase();
                                img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96"><rect width="96" height="96" rx="16" fill="#1e3a5f"/><text x="48" y="58" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" fill="white">${initial}</text></svg>`)}`;
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 465,
                            columnNumber: 13
                        }, this)
                    }, company.id, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 464,
                        columnNumber: 49
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 463,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 461,
        columnNumber: 10
    }, this);
}
_s1(CompanyLogoGrid, "FkF/AiYaTTmxQ0ASJWXX2P4E6gA=");
_c1 = CompanyLogoGrid;
// Saved City Card Component
function SavedCityCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "12929fa0f7a932a48d884991daec4c0a1cb3e60ab77e04f103504908f976c6eb") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "12929fa0f7a932a48d884991daec4c0a1cb3e60ab77e04f103504908f976c6eb";
    }
    const { city, onLoad, onDelete } = t0;
    let t1;
    if ($[1] !== city.cityName) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-white font-medium truncate group-hover:text-white/90 text-sm flex-1",
            children: city.cityName
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 492,
            columnNumber: 10
        }, this);
        $[1] = city.cityName;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== city.roomCode) {
        t2 = city.roomCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs px-1.5 py-0.5 bg-blue-500/20 text-blue-300 rounded shrink-0",
            children: "Co-op"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 500,
            columnNumber: 27
        }, this);
        $[3] = city.roomCode;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 508,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== city.population) {
        t4 = city.population.toLocaleString();
        $[8] = city.population;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                "Pop: ",
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 525,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== city.money) {
        t6 = city.money.toLocaleString();
        $[12] = city.money;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                "$",
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 541,
            columnNumber: 10
        }, this);
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== city.roomCode) {
        t8 = city.roomCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-blue-400/60",
            children: city.roomCode
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 549,
            columnNumber: 27
        }, this);
        $[16] = city.roomCode;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== t5 || $[19] !== t7 || $[20] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 mt-1 text-xs text-white/50",
            children: [
                t5,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 557,
            columnNumber: 10
        }, this);
        $[18] = t5;
        $[19] = t7;
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== onLoad || $[23] !== t3 || $[24] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onLoad,
            className: "w-full text-left p-3 pr-8 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-none transition-all duration-200",
            children: [
                t3,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 567,
            columnNumber: 11
        }, this);
        $[22] = onLoad;
        $[23] = t3;
        $[24] = t9;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    let t11;
    if ($[26] !== onDelete) {
        t11 = onDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "SavedCityCard[<button>.onClick]": (e)=>{
                    e.stopPropagation();
                    onDelete();
                }
            }["SavedCityCard[<button>.onClick]"],
            className: "absolute top-1/2 -translate-y-1/2 right-1.5 p-1.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 hover:bg-red-500/20 text-white/40 hover:text-red-400 rounded transition-all duration-200",
            title: "Delete city",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                className: "w-3.5 h-3.5"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 582,
                columnNumber: 266
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 577,
            columnNumber: 23
        }, this);
        $[26] = onDelete;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== t10 || $[29] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative group",
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 590,
            columnNumber: 11
        }, this);
        $[28] = t10;
        $[29] = t11;
        $[30] = t12;
    } else {
        t12 = $[30];
    }
    return t12;
}
_c2 = SavedCityCard;
const SAVED_CITY_PREFIX = 'isobusiness-city-';
function HomePage() {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(75);
    if ($[0] !== "12929fa0f7a932a48d884991daec4c0a1cb3e60ab77e04f103504908f976c6eb") {
        for(let $i = 0; $i < 75; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "12929fa0f7a932a48d884991daec4c0a1cb3e60ab77e04f103504908f976c6eb";
    }
    const [showGame, setShowGame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isChecking, setIsChecking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [savedCities, setSavedCities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [hasSaved, setHasSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCoopModal, setShowCoopModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [, setIsMultiplayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [startFreshGame, setStartFreshGame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingRoomCode, setPendingRoomCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { isMobileDevice, isSmallScreen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobile"])();
    const isMobile = isMobileDevice || isSmallScreen;
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "HomePage[useEffect()]": ()=>{
                const checkSavedGame = {
                    "HomePage[useEffect() > checkSavedGame]": ()=>{
                        setIsChecking(false);
                        setSavedCities(loadSavedCities());
                        setHasSaved(hasSavedGame());
                        const params = new URLSearchParams(window.location.search);
                        const roomCode = params.get("room");
                        if (roomCode && roomCode.length === 5) {
                            window.location.replace(`/coop/${roomCode.toUpperCase()}`);
                            return;
                        }
                    }
                }["HomePage[useEffect() > checkSavedGame]"];
                requestAnimationFrame(checkSavedGame);
            }
        })["HomePage[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "HomePage[handleExitGame]": ()=>{
                setShowGame(false);
                setIsMultiplayer(false);
                setStartFreshGame(false);
                setSavedCities(loadSavedCities());
                setHasSaved(hasSavedGame());
                window.history.replaceState({}, "", "/");
            }
        })["HomePage[handleExitGame]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handleExitGame = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "HomePage[loadSavedCity]": (city)=>{
                if (city.roomCode) {
                    window.history.replaceState({}, "", `/coop/${city.roomCode}`);
                    setPendingRoomCode(city.roomCode);
                    setShowCoopModal(true);
                    return;
                }
                try {
                    const saved = localStorage.getItem(SAVED_CITY_PREFIX + city.id);
                    if (saved) {
                        localStorage.setItem(STORAGE_KEY, saved);
                        setShowGame(true);
                    }
                } catch  {
                    console.error("Failed to load saved city");
                }
            }
        })["HomePage[loadSavedCity]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const loadSavedCity = t4;
    let t5;
    if ($[6] !== savedCities) {
        t5 = ({
            "HomePage[deleteSavedCity]": (city_0)=>{
                try {
                    const updatedCities = savedCities.filter({
                        "HomePage[deleteSavedCity > savedCities.filter()]": (c)=>c.id !== city_0.id
                    }["HomePage[deleteSavedCity > savedCities.filter()]"]);
                    localStorage.setItem(SAVED_CITIES_INDEX_KEY, JSON.stringify(updatedCities));
                    setSavedCities(updatedCities);
                    if (!city_0.roomCode) {
                        localStorage.removeItem(SAVED_CITY_PREFIX + city_0.id);
                    }
                } catch  {
                    console.error("Failed to delete saved city");
                }
            }
        })["HomePage[deleteSavedCity]"];
        $[6] = savedCities;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const deleteSavedCity = t5;
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "HomePage[handleCoopStart]": (isHost, initialState, roomCode_0)=>{
                setIsMultiplayer(true);
                if (isHost && initialState) {
                    ;
                    try {
                        const compressed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lz$2d$string$2f$libs$2f$lz$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compressToUTF16"])(JSON.stringify(initialState));
                        localStorage.setItem(STORAGE_KEY, compressed);
                        if (roomCode_0) {
                            saveCityToIndex(initialState, roomCode_0);
                        }
                    } catch (t7) {
                        const e = t7;
                        console.error("Failed to save co-op state:", e);
                    }
                    setStartFreshGame(false);
                } else {
                    if (isHost) {
                        setStartFreshGame(true);
                    } else {
                        if (initialState) {
                            ;
                            try {
                                const compressed_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lz$2d$string$2f$libs$2f$lz$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compressToUTF16"])(JSON.stringify(initialState));
                                localStorage.setItem(STORAGE_KEY, compressed_0);
                                if (roomCode_0) {
                                    saveCityToIndex(initialState, roomCode_0);
                                }
                            } catch (t8) {
                                const e_0 = t8;
                                console.error("Failed to save co-op state:", e_0);
                            }
                            setStartFreshGame(false);
                        } else {
                            setStartFreshGame(true);
                        }
                    }
                }
                setShowGame(true);
            }
        })["HomePage[handleCoopStart]"];
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const handleCoopStart = t6;
    if (isChecking) {
        let t7;
        if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white/60",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"], {
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 775,
                        columnNumber: 167
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 775,
                    columnNumber: 136
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 775,
                columnNumber: 12
            }, this);
            $[9] = t7;
        } else {
            t7 = $[9];
        }
        return t7;
    }
    if (showGame) {
        let t7;
        if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "h-screen w-screen overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Game$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onExit: handleExitGame
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 785,
                    columnNumber: 64
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 785,
                columnNumber: 12
            }, this);
            $[10] = t7;
        } else {
            t7 = $[10];
        }
        const gameContent = t7;
        let t8;
        if ($[11] !== startFreshGame) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MultiplayerContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiplayerContextProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GameProvider"], {
                    startFresh: startFreshGame,
                    children: gameContent
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 793,
                    columnNumber: 40
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 793,
                columnNumber: 12
            }, this);
            $[11] = startFreshGame;
            $[12] = t8;
        } else {
            t8 = $[12];
        }
        return t8;
    }
    if (isMobile) {
        let t7;
        let t8;
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0 h-4 sm:h-8"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 805,
                columnNumber: 12
            }, this);
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl sm:text-5xl font-light tracking-wider text-white/90 mb-4 sm:mb-6 flex-shrink-0",
                children: "ISOBUSINESS"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 806,
                columnNumber: 12
            }, this);
            $[13] = t7;
            $[14] = t8;
        } else {
            t7 = $[13];
            t8 = $[14];
        }
        let t9;
        if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 sm:mb-6 flex-shrink-0 flex flex-col items-center gap-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CompanyLogoGrid, {
                    max: 9,
                    compact: true
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 815,
                    columnNumber: 89
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 815,
                columnNumber: 12
            }, this);
            $[15] = t9;
        } else {
            t9 = $[15];
        }
        let t10;
        if ($[16] !== hasSaved) {
            t10 = ({
                "HomePage[<Button>.onClick]": ()=>{
                    setStartFreshGame(!hasSaved);
                    setShowGame(true);
                }
            })["HomePage[<Button>.onClick]"];
            $[16] = hasSaved;
            $[17] = t10;
        } else {
            t10 = $[17];
        }
        let t11;
        if ($[18] !== hasSaved) {
            t11 = hasSaved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"], {
                children: "Continue"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 835,
                columnNumber: 24
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"], {
                children: "New Game"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 835,
                columnNumber: 42
            }, this);
            $[18] = hasSaved;
            $[19] = t11;
        } else {
            t11 = $[19];
        }
        let t12;
        if ($[20] !== t10 || $[21] !== t11) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: t10,
                className: "w-full py-4 sm:py-6 text-lg sm:text-xl font-light tracking-wide bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-none transition-all duration-300",
                children: t11
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 843,
                columnNumber: 13
            }, this);
            $[20] = t10;
            $[21] = t11;
            $[22] = t12;
        } else {
            t12 = $[22];
        }
        let t13;
        if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = ({
                "HomePage[<Button>.onClick]": ()=>setShowCoopModal(true)
            })["HomePage[<Button>.onClick]"];
            $[23] = t13;
        } else {
            t13 = $[23];
        }
        let t14;
        if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: t13,
                variant: "outline",
                className: "w-full py-4 sm:py-6 text-lg sm:text-xl font-light tracking-wide bg-white/5 hover:bg-white/15 text-white/60 hover:text-white border border-white/15 rounded-none transition-all duration-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"], {
                    children: "Co-op"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 861,
                    columnNumber: 253
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 861,
                columnNumber: 13
            }, this);
            $[24] = t14;
        } else {
            t14 = $[24];
        }
        let t15;
        if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = ({
                "HomePage[<Button>.onClick]": async ()=>{
                    if (window.location.search.includes("room=")) {
                        window.history.replaceState({}, "", "/");
                        setPendingRoomCode(null);
                    }
                    const response = await fetch("/example-states/example_state_9.json");
                    const exampleState = await response.json();
                    ;
                    try {
                        const compressed_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lz$2d$string$2f$libs$2f$lz$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compressToUTF16"])(JSON.stringify(exampleState));
                        localStorage.setItem(STORAGE_KEY, compressed_1);
                    } catch (t16) {
                        const e_1 = t16;
                        console.error("Failed to save example state:", e_1);
                    }
                    setShowGame(true);
                }
            })["HomePage[<Button>.onClick]"];
            $[25] = t15;
        } else {
            t15 = $[25];
        }
        let t16;
        if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: t15,
                variant: "outline",
                className: "w-full py-4 sm:py-6 text-lg sm:text-xl font-light tracking-wide bg-transparent hover:bg-white/10 text-white/40 hover:text-white/60 border border-white/10 rounded-none transition-all duration-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"], {
                    children: "Load Example"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 893,
                    columnNumber: 260
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 893,
                columnNumber: 13
            }, this);
            $[26] = t16;
        } else {
            t16 = $[26];
        }
        let t17;
        if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "https://cursor.com",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-left py-2 text-sm font-light tracking-wide text-white/40 hover:text-white/70 transition-colors duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"], {
                    children: "Made with Cursor"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 900,
                    columnNumber: 209
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 900,
                columnNumber: 13
            }, this);
            $[27] = t17;
        } else {
            t17 = $[27];
        }
        let t18;
        if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            t17,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://github.com/amilich/isometric-city",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-left py-2 text-sm font-light tracking-wide text-white/40 hover:text-white/70 transition-colors duration-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"], {
                                    children: "Open GitHub"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 907,
                                    columnNumber: 325
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 907,
                                columnNumber: 106
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 907,
                        columnNumber: 70
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LanguageSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSelector"], {
                        variant: "ghost",
                        className: "text-white/40 hover:text-white/70 hover:bg-white/10"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 907,
                        columnNumber: 353
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 907,
                columnNumber: 13
            }, this);
            $[28] = t18;
        } else {
            t18 = $[28];
        }
        let t19;
        if ($[29] !== t12) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 sm:gap-3 w-full max-w-xs flex-shrink-0",
                children: [
                    t12,
                    t14,
                    t16,
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 914,
                columnNumber: 13
            }, this);
            $[29] = t12;
            $[30] = t19;
        } else {
            t19 = $[30];
        }
        let t20;
        if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 mb-3 flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpriteGallery, {
                    count: 9,
                    cols: 3,
                    cellSize: 94,
                    displayWidth: 283,
                    displayHeight: 268
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 922,
                    columnNumber: 54
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 922,
                columnNumber: 13
            }, this);
            $[31] = t20;
        } else {
            t20 = $[31];
        }
        let t21;
        if ($[32] !== deleteSavedCity || $[33] !== savedCities) {
            t21 = savedCities.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-xs mt-3 sm:mt-4 flex-1 min-h-0 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xs font-medium text-white/40 uppercase tracking-wider mb-2 flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"], {
                            children: "Saved Cities"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 929,
                            columnNumber: 208
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 929,
                        columnNumber: 114
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 flex-1 overflow-y-auto overscroll-y-contain",
                        style: {
                            WebkitOverflowScrolling: "touch",
                            touchAction: "pan-y"
                        },
                        children: savedCities.slice(0, 5).map({
                            "HomePage[(anonymous)()]": (city_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SavedCityCard, {
                                    city: city_1,
                                    onLoad: {
                                        "HomePage[(anonymous)() > <SavedCityCard>.onLoad]": ()=>loadSavedCity(city_1)
                                    }["HomePage[(anonymous)() > <SavedCityCard>.onLoad]"],
                                    onDelete: {
                                        "HomePage[(anonymous)() > <SavedCityCard>.onDelete]": ()=>deleteSavedCity(city_1)
                                    }["HomePage[(anonymous)() > <SavedCityCard>.onDelete]"]
                                }, city_1.id, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 933,
                                    columnNumber: 50
                                }, this)
                        }["HomePage[(anonymous)()]"])
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 929,
                        columnNumber: 232
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 929,
                columnNumber: 39
            }, this);
            $[32] = deleteSavedCity;
            $[33] = savedCities;
            $[34] = t21;
        } else {
            t21 = $[34];
        }
        let t22;
        if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0 h-2"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 947,
                columnNumber: 13
            }, this);
            $[35] = t22;
        } else {
            t22 = $[35];
        }
        let t23;
        if ($[36] !== pendingRoomCode || $[37] !== showCoopModal) {
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$multiplayer$2f$CoopModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoopModal"], {
                open: showCoopModal,
                onOpenChange: setShowCoopModal,
                onStartGame: handleCoopStart,
                pendingRoomCode: pendingRoomCode
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 954,
                columnNumber: 13
            }, this);
            $[36] = pendingRoomCode;
            $[37] = showCoopModal;
            $[38] = t23;
        } else {
            t23 = $[38];
        }
        let t24;
        if ($[39] !== t19 || $[40] !== t21 || $[41] !== t23) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MultiplayerContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiplayerContextProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "h-[100dvh] max-h-[100dvh] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] overflow-y-auto",
                    children: [
                        t7,
                        t8,
                        t9,
                        t19,
                        t20,
                        t21,
                        t22,
                        t23
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 963,
                    columnNumber: 41
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 963,
                columnNumber: 13
            }, this);
            $[39] = t19;
            $[40] = t21;
            $[41] = t23;
            $[42] = t24;
        } else {
            t24 = $[42];
        }
        return t24;
    }
    let t7;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-8xl font-light tracking-wider text-white/90",
            children: "ISOBUSINESS"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 975,
            columnNumber: 10
        }, this);
        $[43] = t7;
    } else {
        t7 = $[43];
    }
    let t8;
    if ($[44] !== hasSaved) {
        t8 = ({
            "HomePage[<Button>.onClick]": ()=>{
                setStartFreshGame(!hasSaved);
                setShowGame(true);
            }
        })["HomePage[<Button>.onClick]"];
        $[44] = hasSaved;
        $[45] = t8;
    } else {
        t8 = $[45];
    }
    let t9;
    if ($[46] !== hasSaved) {
        t9 = hasSaved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"], {
            children: "Continue"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 995,
            columnNumber: 21
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"], {
            children: "New Game"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 995,
            columnNumber: 39
        }, this);
        $[46] = hasSaved;
        $[47] = t9;
    } else {
        t9 = $[47];
    }
    let t10;
    if ($[48] !== t8 || $[49] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: t8,
            className: "w-64 py-8 text-2xl font-light tracking-wide bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-none transition-all duration-300",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1003,
            columnNumber: 11
        }, this);
        $[48] = t8;
        $[49] = t9;
        $[50] = t10;
    } else {
        t10 = $[50];
    }
    let t11;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "HomePage[<Button>.onClick]": ()=>setShowCoopModal(true)
        })["HomePage[<Button>.onClick]"];
        $[51] = t11;
    } else {
        t11 = $[51];
    }
    let t12;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: t11,
            variant: "outline",
            className: "w-64 py-8 text-2xl font-light tracking-wide bg-white/5 hover:bg-white/15 text-white/60 hover:text-white border border-white/15 rounded-none transition-all duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"], {
                children: "Co-op"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1021,
                columnNumber: 231
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1021,
            columnNumber: 11
        }, this);
        $[52] = t12;
    } else {
        t12 = $[52];
    }
    let t13;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "HomePage[<Button>.onClick]": async ()=>{
                if (window.location.search.includes("room=")) {
                    window.history.replaceState({}, "", "/");
                    setPendingRoomCode(null);
                }
                const response_0 = await fetch("/example-states/example_state_9.json");
                const exampleState_0 = await response_0.json();
                ;
                try {
                    const compressed_2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lz$2d$string$2f$libs$2f$lz$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compressToUTF16"])(JSON.stringify(exampleState_0));
                    localStorage.setItem(STORAGE_KEY, compressed_2);
                } catch (t14) {
                    const e_2 = t14;
                    console.error("Failed to save example state:", e_2);
                }
                setShowGame(true);
            }
        })["HomePage[<Button>.onClick]"];
        $[53] = t13;
    } else {
        t13 = $[53];
    }
    let t14;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: t13,
            variant: "outline",
            className: "w-64 py-8 text-2xl font-light tracking-wide bg-transparent hover:bg-white/10 text-white/40 hover:text-white/60 border border-white/10 rounded-none transition-all duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"], {
                children: "Load Example"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1053,
                columnNumber: 238
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1053,
            columnNumber: 11
        }, this);
        $[54] = t14;
    } else {
        t14 = $[54];
    }
    let t15;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "https://cursor.com",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-left py-2 text-sm font-light tracking-wide text-white/40 hover:text-white/70 transition-colors duration-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"], {
                children: "Made with Cursor"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1060,
                columnNumber: 207
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1060,
            columnNumber: 11
        }, this);
        $[55] = t15;
    } else {
        t15 = $[55];
    }
    let t16;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between w-64",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col",
                    children: [
                        t15,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://github.com/amilich/isometric-city",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-left py-2 text-sm font-light tracking-wide text-white/40 hover:text-white/70 transition-colors duration-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"], {
                                children: "Open GitHub"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1067,
                                columnNumber: 321
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1067,
                            columnNumber: 102
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1067,
                    columnNumber: 66
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LanguageSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSelector"], {
                    variant: "ghost",
                    className: "text-white/40 hover:text-white/70 hover:bg-white/10"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1067,
                    columnNumber: 349
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1067,
            columnNumber: 11
        }, this);
        $[56] = t16;
    } else {
        t16 = $[56];
    }
    let t17;
    if ($[57] !== t10) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3",
            children: [
                t10,
                t12,
                t14,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1074,
            columnNumber: 11
        }, this);
        $[57] = t10;
        $[58] = t17;
    } else {
        t17 = $[58];
    }
    let t18;
    if ($[59] !== deleteSavedCity || $[60] !== savedCities) {
        t18 = savedCities.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-64",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xs font-medium text-white/40 uppercase tracking-wider mb-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"], {
                        children: "Saved Cities"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1082,
                        columnNumber: 139
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1082,
                    columnNumber: 59
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2 max-h-64 overflow-y-auto overscroll-y-contain",
                    style: {
                        WebkitOverflowScrolling: "touch",
                        touchAction: "pan-y"
                    },
                    children: savedCities.slice(0, 5).map({
                        "HomePage[(anonymous)()]": (city_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SavedCityCard, {
                                city: city_2,
                                onLoad: {
                                    "HomePage[(anonymous)() > <SavedCityCard>.onLoad]": ()=>loadSavedCity(city_2)
                                }["HomePage[(anonymous)() > <SavedCityCard>.onLoad]"],
                                onDelete: {
                                    "HomePage[(anonymous)() > <SavedCityCard>.onDelete]": ()=>deleteSavedCity(city_2)
                                }["HomePage[(anonymous)() > <SavedCityCard>.onDelete]"]
                            }, city_2.id, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1086,
                                columnNumber: 48
                            }, this)
                    }["HomePage[(anonymous)()]"])
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1082,
                    columnNumber: 163
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1082,
            columnNumber: 37
        }, this);
        $[59] = deleteSavedCity;
        $[60] = savedCities;
        $[61] = t18;
    } else {
        t18 = $[61];
    }
    let t19;
    if ($[62] !== t17 || $[63] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center lg:items-start justify-center space-y-12",
            children: [
                t7,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1100,
            columnNumber: 11
        }, this);
        $[62] = t17;
        $[63] = t18;
        $[64] = t19;
    } else {
        t19 = $[64];
    }
    let t20;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VCSimDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VCSimDashboard"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1109,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1109,
            columnNumber: 11
        }, this);
        $[65] = t20;
    } else {
        t20 = $[65];
    }
    let t21;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center lg:items-end gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpriteGallery, {
                    count: 16
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1116,
                    columnNumber: 89
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CompanyLogoGrid, {
                    max: 9
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1116,
                    columnNumber: 117
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1116,
            columnNumber: 11
        }, this);
        $[66] = t21;
    } else {
        t21 = $[66];
    }
    let t22;
    if ($[67] !== t19) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl w-full grid lg:grid-cols-[1fr_auto_1fr] gap-16 items-start",
            children: [
                t19,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1123,
            columnNumber: 11
        }, this);
        $[67] = t19;
        $[68] = t22;
    } else {
        t22 = $[68];
    }
    let t23;
    if ($[69] !== pendingRoomCode || $[70] !== showCoopModal) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$multiplayer$2f$CoopModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoopModal"], {
            open: showCoopModal,
            onOpenChange: setShowCoopModal,
            onStartGame: handleCoopStart,
            pendingRoomCode: pendingRoomCode
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1131,
            columnNumber: 11
        }, this);
        $[69] = pendingRoomCode;
        $[70] = showCoopModal;
        $[71] = t23;
    } else {
        t23 = $[71];
    }
    let t24;
    if ($[72] !== t22 || $[73] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MultiplayerContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiplayerContextProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-8",
                children: [
                    t22,
                    t23
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1140,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1140,
            columnNumber: 11
        }, this);
        $[72] = t22;
        $[73] = t23;
        $[74] = t24;
    } else {
        t24 = $[74];
    }
    return t24;
}
_s2(HomePage, "fhzqRj2evmFXhcwqPCIuefaPxI4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobile"]
    ];
});
_c3 = HomePage;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "SpriteGallery");
__turbopack_context__.k.register(_c1, "CompanyLogoGrid");
__turbopack_context__.k.register(_c2, "SavedCityCard");
__turbopack_context__.k.register(_c3, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1f9a42fa._.js.map