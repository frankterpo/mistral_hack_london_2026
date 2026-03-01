module.exports = [
"[project]/src/games/isocity/types/buildings.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/games/isocity/types/zones.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * IsoCity Zone Types
 */ __turbopack_context__.s([]);
;
}),
"[project]/src/games/isocity/types/economy.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * IsoCity Economy Types
 */ __turbopack_context__.s([]);
;
}),
"[project]/src/games/isocity/types/services.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * IsoCity Service Types
 */ __turbopack_context__.s([]);
;
}),
"[project]/src/games/isocity/types/game.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TOOL_INFO",
    ()=>TOOL_INFO
]);
/**
 * IsoCity Game State Types
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gt-next/dist/index.client.js [app-ssr] (ecmascript)");
;
const TOOL_INFO = {
    select: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Inspect'),
        cost: 0,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Inspect company tile details')
    },
    bulldoze: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Restructure'),
        cost: 10,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Clear underperforming assets and zones')
    },
    road: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Offering Partnership'),
        cost: 25,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Improve PMF Signal via offering partnerships')
    },
    rail: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Enterprise Rail'),
        cost: 40,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Scale high-throughput operations')
    },
    subway: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Data Pipeline'),
        cost: 50,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Underground high-speed routing')
    },
    expand_city: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Expand Market'),
        cost: 0,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Add 15 tiles to each edge')
    },
    shrink_city: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Contract Market'),
        cost: 0,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Remove 15 tiles from each edge')
    },
    tree: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Tree'),
        cost: 15,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Plant trees to improve environment')
    },
    zone_residential: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Founder Talent'),
        cost: 50,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Attract founders and talent')
    },
    zone_commercial: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Startup HQ'),
        cost: 50,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Establish startup headquarters')
    },
    zone_industrial: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('R&D Lab'),
        cost: 50,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Deep tech and research labs')
    },
    zone_dezone: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('De-zone'),
        cost: 0,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Remove zoning')
    },
    zone_water: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Water Terraform'),
        cost: 50000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Terraform land into water')
    },
    zone_land: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Land Terraform'),
        cost: 50000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Terraform water into land')
    },
    police_station: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Legal/Regulatory Compliance'),
        cost: 500,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Legal and regulatory compliance'),
        size: 1
    },
    fire_station: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Crisis Response'),
        cost: 500,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Incident and crisis response'),
        size: 1
    },
    hospital: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Employee Health/Benefits'),
        cost: 1000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Employee wellness and health (2x2)'),
        size: 2
    },
    school: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Talent Training'),
        cost: 400,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Talent training and onboarding (2x2)'),
        size: 2
    },
    university: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Startup Accelerator'),
        cost: 2000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Startup accelerator and incubator (3x3)'),
        size: 3
    },
    park: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Founder Retreat'),
        cost: 150,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Boost happiness and land value (1x1)'),
        size: 1
    },
    park_large: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Large Founder Retreat'),
        cost: 600,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Large retreat (3x3)'),
        size: 3
    },
    tennis: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Tennis Court'),
        cost: 200,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Recreation facility'),
        size: 1
    },
    power_plant: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Event Collaboration'),
        cost: 3000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Improve growth momentum via event collaboration'),
        size: 2
    },
    water_tower: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Commercial Partnership'),
        cost: 1000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Improve growth momentum via commercial partnerships'),
        size: 1
    },
    subway_station: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Data Pipeline Node'),
        cost: 750,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Access to data pipeline network'),
        size: 1
    },
    rail_station: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Enterprise Hub'),
        cost: 1000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('High-throughput enterprise hub'),
        size: 2
    },
    stadium: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Distribution Channel'),
        cost: 5000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Boosts commercial demand (3x3)'),
        size: 3
    },
    museum: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Industry Conference'),
        cost: 4000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Boosts commercial & residential demand (3x3)'),
        size: 3
    },
    airport: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Global Market Access'),
        cost: 10000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Boosts commercial & industrial demand (4x4)'),
        size: 4
    },
    space_program: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Moonshot R&D'),
        cost: 15000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Boosts industrial & residential demand (3x3)'),
        size: 3
    },
    city_hall: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('LP Headquarters'),
        cost: 6000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Boosts all demand types (2x2)'),
        size: 2
    },
    amusement_park: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Viral Growth Loop'),
        cost: 12000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Major boost to commercial demand (4x4)'),
        size: 4
    },
    basketball_courts: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Basketball Court'),
        cost: 250,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Recreational facility'),
        size: 1
    },
    playground_small: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Small Playground'),
        cost: 200,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Recreational facility'),
        size: 1
    },
    playground_large: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Large Playground'),
        cost: 350,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Recreational facility (2x2)'),
        size: 2
    },
    baseball_field_small: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Local Field'),
        cost: 800,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Recreational facility (2x2)'),
        size: 2
    },
    soccer_field_small: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Soccer Pitch'),
        cost: 400,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Recreational facility'),
        size: 1
    },
    football_field: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Football Field'),
        cost: 1200,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Recreational facility (2x2)'),
        size: 2
    },
    baseball_stadium: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Regional Arena'),
        cost: 6000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Major distribution node (3x3)'),
        size: 3
    },
    community_center: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Network Hub'),
        cost: 500,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Local community/network hub'),
        size: 1
    },
    office_building_small: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Satellite Office'),
        cost: 600,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Small satellite office'),
        size: 1
    },
    swimming_pool: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Wellness Center'),
        cost: 450,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Employee wellness facility'),
        size: 1
    },
    skate_park: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Innovation Lab'),
        cost: 300,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Rapid prototyping space'),
        size: 1
    },
    mini_golf_course: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Team Bonding'),
        cost: 700,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Team building facility (2x2)'),
        size: 2
    },
    bleachers_field: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Demo Day Arena'),
        cost: 350,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Pitch and demo arena'),
        size: 1
    },
    go_kart_track: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Growth Hack Track'),
        cost: 1000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Experimental growth facility (2x2)'),
        size: 2
    },
    amphitheater: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Keynote Stage'),
        cost: 1500,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Large presentation venue (2x2)'),
        size: 2
    },
    greenhouse_garden: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Incubation Lab'),
        cost: 800,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Controlled growth environment (2x2)'),
        size: 2
    },
    animal_pens_farm: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Data Farm'),
        cost: 400,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Raw data processing facility'),
        size: 1
    },
    cabin_house: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Offsite Cabin'),
        cost: 300,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Remote offsite retreat'),
        size: 1
    },
    campground: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Bootcamp Site'),
        cost: 250,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Intensive training ground'),
        size: 1
    },
    marina_docks_small: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Offshore Ops'),
        cost: 1200,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('International operations (2x2)'),
        size: 2
    },
    pier_large: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Export Pier'),
        cost: 600,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Global distribution pier'),
        size: 1
    },
    roller_coaster_small: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Pivot Loop'),
        cost: 3000,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('High-intensity iteration (2x2)'),
        size: 2
    },
    community_garden: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Open Source Hub'),
        cost: 200,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Shared ecosystem projects'),
        size: 1
    },
    pond_park: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Zen Garden'),
        cost: 350,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Focus and meditation space'),
        size: 1
    },
    park_gate: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Campus Gate'),
        cost: 150,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Secure campus entrance'),
        size: 1
    },
    mountain_lodge: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Summit Retreat'),
        cost: 1500,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Executive strategy lodge (2x2)'),
        size: 2
    },
    mountain_trailhead: {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Growth Path'),
        cost: 400,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Guided growth journey (3x3)'),
        size: 3
    }
};
}),
"[project]/src/games/isocity/types/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// IsoCity Types - re-exports all game-specific types
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$buildings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/games/isocity/types/buildings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$zones$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/games/isocity/types/zones.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$economy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/games/isocity/types/economy.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/games/isocity/types/services.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/games/isocity/types/game.ts [app-ssr] (ecmascript)");
;
;
;
;
;
}),
"[project]/src/types/game.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/games/isocity/types/index.ts [app-ssr] (ecmascript) <locals>");
;
}),
"[project]/src/hooks/useMobile.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getIsMobileSSR",
    ()=>getIsMobileSSR,
    "useMobile",
    ()=>useMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$device$2d$detect$2f$dist$2f$lib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-device-detect/dist/lib.js [app-ssr] (ecmascript)");
'use client';
;
;
function useMobile() {
    const [screenWidth, setScreenWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [screenHeight, setScreenHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isSmallScreen, setIsSmallScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTouchDevice, setIsTouchDevice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [orientation, setOrientation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('portrait');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateDimensions = ()=>{
            const width = window.innerWidth;
            const height = window.innerHeight;
            setScreenWidth(width);
            setScreenHeight(height);
            setIsSmallScreen(width < 768);
            setOrientation(width > height ? 'landscape' : 'portrait');
        };
        const checkTouch = ()=>{
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0 || // @ts-expect-error - msMaxTouchPoints is a legacy property
            navigator.msMaxTouchPoints > 0);
        };
        updateDimensions();
        checkTouch();
        window.addEventListener('resize', updateDimensions);
        window.addEventListener('orientationchange', updateDimensions);
        return ()=>{
            window.removeEventListener('resize', updateDimensions);
            window.removeEventListener('orientationchange', updateDimensions);
        };
    }, []);
    return {
        isMobileDevice: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$device$2d$detect$2f$dist$2f$lib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMobile"] || isSmallScreen,
        isTabletDevice: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$device$2d$detect$2f$dist$2f$lib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTablet"],
        isMobileOnly: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$device$2d$detect$2f$dist$2f$lib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMobileOnly"],
        isSmallScreen,
        isTouchDevice,
        screenWidth,
        screenHeight,
        orientation
    };
}
function getIsMobileSSR() {
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
}
}),
"[project]/src/hooks/useCheatCodes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCheatCodes",
    ()=>useCheatCodes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
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
    const [triggeredCheat, setTriggeredCheat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showVinnieDialog, setShowVinnieDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const konamiBufferRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const typedBufferRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])('');
    const konamiTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isTypingTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((target)=>{
        const el = target;
        return !!el?.closest('input, textarea, select, [contenteditable="true"]');
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            // Ignore if typing in an input field
            if (isTypingTarget(e.target)) return;
            const key = e.key;
            // Check Konami code
            // Clear timeout if it exists
            if (konamiTimeoutRef.current) {
                clearTimeout(konamiTimeoutRef.current);
                konamiTimeoutRef.current = null;
            }
            konamiBufferRef.current.push(key.toLowerCase());
            if (konamiBufferRef.current.length > KONAMI_CODE.length) {
                konamiBufferRef.current.shift();
            }
            // Check if Konami code matches (check if buffer ends with the sequence)
            if (konamiBufferRef.current.length >= KONAMI_CODE.length) {
                const recentKeys = konamiBufferRef.current.slice(-KONAMI_CODE.length);
                const matches = recentKeys.every((k, i)=>k === KONAMI_CODE[i].toLowerCase());
                if (matches) {
                    setTriggeredCheat({
                        type: 'konami',
                        amount: 50000
                    });
                    konamiBufferRef.current = [];
                    if (konamiTimeoutRef.current) {
                        clearTimeout(konamiTimeoutRef.current);
                        konamiTimeoutRef.current = null;
                    }
                }
            }
            // Reset buffer if no key pressed for 2 seconds
            konamiTimeoutRef.current = setTimeout(()=>{
                konamiBufferRef.current = [];
                konamiTimeoutRef.current = null;
            }, 2000);
            // Track typed characters for phrase detection
            // Only track letter keys (a-z) and space
            if (key.length === 1 && /[a-z\s]/i.test(key)) {
                typedBufferRef.current += key.toLowerCase();
                // Keep buffer size manageable
                if (typedBufferRef.current.length > MAX_BUFFER_SIZE) {
                    typedBufferRef.current = typedBufferRef.current.slice(-MAX_BUFFER_SIZE);
                }
                // Check for cheat phrases (normalize spaces for matching)
                const buffer = typedBufferRef.current;
                const normalizedBuffer = buffer.replace(/\s+/g, '');
                if (buffer.includes('vinnie')) {
                    console.log('🎮 Cheat activated: vinnie');
                    setShowVinnieDialog(true);
                    setTriggeredCheat({
                        type: 'vinnie'
                    });
                    typedBufferRef.current = '';
                } else if (normalizedBuffer.includes('motherlode')) {
                    console.log('🎮 Cheat activated: motherlode');
                    setTriggeredCheat({
                        type: 'motherlode',
                        amount: 50000
                    });
                    typedBufferRef.current = '';
                } else if (normalizedBuffer.includes('fund')) {
                    console.log('🎮 Cheat activated: fund');
                    setTriggeredCheat({
                        type: 'fund',
                        amount: 10000
                    });
                    typedBufferRef.current = '';
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>{
            window.removeEventListener('keydown', handleKeyDown);
            if (konamiTimeoutRef.current) {
                clearTimeout(konamiTimeoutRef.current);
            }
        };
    }, [
        isTypingTarget
    ]);
    // Clear triggered cheat after handling
    const clearTriggeredCheat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setTriggeredCheat(null);
    }, []);
    return {
        triggeredCheat,
        showVinnieDialog,
        setShowVinnieDialog,
        clearTriggeredCheat
    };
}
}),
"[project]/src/hooks/useTipSystem.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTipSystem",
    ()=>useTipSystem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gt-next/dist/index.client.js [app-ssr] (ecmascript)");
'use client';
;
;
// Define all tips with their conditions
const TIP_DEFINITIONS = [
    {
        id: 'get_started',
        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Welcome to ISOBUSINESS. Start by allocating founder talent, startup HQ, and R&D zones. Then connect offering partnerships, event collaboration, and commercial partnership to activate growth.'),
        priority: 0,
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
        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Company expansion needs event collaboration, commercial partnership, and offering partnerships before execution can begin.'),
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
        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Watch portfolio demand signals. Sustained negative demand can push companies into distressed mode.'),
        priority: 2,
        check: (state)=>{
            const { residential, commercial, industrial } = state.stats.demand;
            // Check if any demand is significantly negative
            return residential < -20 || commercial < -20 || industrial < -20;
        }
    },
    {
        id: 'needs_safety_services',
        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Add risk-control and compliance coverage to protect portfolio companies from operational shocks.'),
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
        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Invest in brand and culture assets to improve team sentiment and retention signal.'),
        priority: 4,
        check: (state)=>{
            // Check if environment score is low
            return state.stats.environment < 40 && state.stats.population >= 100;
        }
    },
    {
        id: 'needs_health_education',
        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msg"])('Build wellness and upskilling capacity to sustain long-term founder and operator performance.'),
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
    const [tipsEnabled, setTipsEnabledState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentTip, setCurrentTip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shownTips, setShownTips] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const lastTipTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const checkIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasLoadedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Use a ref to always have the latest state without causing effect re-runs
    const stateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(state);
    stateRef.current = state;
    // Load preferences from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }, []);
    // Save shown tips to localStorage when they change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!hasLoadedRef.current) return;
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }, [
        shownTips
    ]);
    // Set tips enabled preference
    const setTipsEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((enabled)=>{
        setTipsEnabledState(enabled);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (!enabled) {
            setIsVisible(false);
            setCurrentTip(null);
        }
    }, []);
    // Track shown tips in a ref as well for synchronous access
    const shownTipsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    // Keep ref in sync with state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        shownTipsRef.current = shownTips;
    }, [
        shownTips
    ]);
    // Check for conditions and show tip - uses refs to get latest values
    const checkAndShowTip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
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
        const applicableTips = TIP_DEFINITIONS.filter((tip)=>!currentShownTips.has(tip.id) && tip.check(currentState)).sort((a, b)=>a.priority - b.priority);
        if (applicableTips.length > 0) {
            const tip = applicableTips[0];
            setCurrentTip(tip.message);
            setIsVisible(true);
            lastTipTimeRef.current = now;
            setShownTips((prev)=>new Set([
                    ...prev,
                    tip.id
                ]));
        }
    }, [
        tipsEnabled,
        isVisible
    ]);
    // Set up periodic check for tip conditions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Clear any existing interval
        if (checkIntervalRef.current) {
            clearInterval(checkIntervalRef.current);
        }
        if (!tipsEnabled) return;
        // Initial check after a short delay (give time for game to initialize)
        const initialTimeout = setTimeout(()=>{
            checkAndShowTip();
        }, INITIAL_TIP_DELAY_MS);
        // Set up periodic checking
        checkIntervalRef.current = setInterval(checkAndShowTip, TIP_CHECK_INTERVAL_MS);
        return ()=>{
            clearTimeout(initialTimeout);
            if (checkIntervalRef.current) {
                clearInterval(checkIntervalRef.current);
            }
        };
    }, [
        tipsEnabled,
        checkAndShowTip
    ]);
    // Handle continue button - dismiss current tip
    const onContinue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsVisible(false);
        // Small delay before clearing the message to allow exit animation
        setTimeout(()=>{
            setCurrentTip(null);
        }, 300);
    }, []);
    // Handle skip all button - disable tips permanently
    const onSkipAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setTipsEnabled(false);
        setIsVisible(false);
        setCurrentTip(null);
    }, [
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
}),
"[project]/src/hooks/useMultiplayerSync.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMultiplayerSync",
    ()=>useMultiplayerSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MultiplayerContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/MultiplayerContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/GameContext.tsx [app-ssr] (ecmascript)");
'use client';
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
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function useMultiplayerSync() {
    const multiplayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MultiplayerContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMultiplayerOptional"])();
    const game = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGame"])();
    const lastActionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initialStateLoadedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Batching for placements - use refs to avoid stale closures
    const placementBufferRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const flushTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const multiplayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(multiplayer);
    // Keep multiplayer ref updated
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        multiplayerRef.current = multiplayer;
    }, [
        multiplayer
    ]);
    // Load initial state when joining a room (received from other players)
    // This can happen even if we already loaded from cache - network state takes priority
    const lastInitialStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!multiplayer || !multiplayer.initialState) return;
        // Only load if this is a new state (prevent duplicate loads of same state)
        const stateKey = JSON.stringify(multiplayer.initialState.tick || 0);
        if (lastInitialStateRef.current === stateKey && initialStateLoadedRef.current) return;
        console.log('[useMultiplayerSync] Received initial state from network, loading...');
        // Use loadState to load the received game state
        const stateString = JSON.stringify(multiplayer.initialState);
        const success = game.loadState(stateString);
        if (success) {
            initialStateLoadedRef.current = true;
            lastInitialStateRef.current = stateKey;
        }
    }, [
        multiplayer?.initialState,
        game
    ]);
    // Apply a remote action to the local game state
    const applyRemoteAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((action)=>{
        // Guard against null/undefined actions (can happen with malformed broadcasts)
        if (!action || !action.type) {
            console.warn('[useMultiplayerSync] Received invalid action:', action);
            return;
        }
        switch(action.type){
            case 'place':
                {
                    // Save current tool, apply placement, restore tool
                    const currentTool = game.state.selectedTool;
                    game.setTool(action.tool);
                    game.placeAtTile(action.x, action.y, true); // isRemote = true
                    game.setTool(currentTool);
                    break;
                }
            case 'placeBatch':
                {
                    // Apply multiple placements from a single message (e.g., road drag)
                    const originalTool = game.state.selectedTool;
                    for (const placement of action.placements){
                        game.setTool(placement.tool);
                        game.placeAtTile(placement.x, placement.y, true); // isRemote = true
                    }
                    game.setTool(originalTool);
                    break;
                }
            case 'bulldoze':
                {
                    const savedTool = game.state.selectedTool;
                    game.setTool('bulldoze');
                    game.placeAtTile(action.x, action.y, true); // isRemote = true
                    game.setTool(savedTool);
                    break;
                }
            case 'setTaxRate':
                game.setTaxRate(action.rate);
                break;
            case 'setBudget':
                game.setBudgetFunding(action.key, action.funding);
                break;
            case 'setSpeed':
                game.setSpeed(action.speed);
                break;
            case 'setDisasters':
                game.setDisastersEnabled(action.enabled);
                break;
            case 'createBridges':
                // Create bridges along a drag path (for road/rail drags across water)
                game.finishTrackDrag(action.pathTiles, action.trackType, true); // isRemote = true
                break;
            case 'fullState':
                break;
            case 'tick':
                break;
        }
    }, [
        game
    ]);
    // Register callback to receive remote actions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!multiplayer) return;
        multiplayer.setOnRemoteAction((action)=>{
            // Apply remote actions to local game state
            applyRemoteAction(action);
        });
        return ()=>{
            multiplayer.setOnRemoteAction(null);
        };
    }, [
        multiplayer,
        applyRemoteAction
    ]);
    // Flush batched placements - uses ref to avoid stale closure issues
    const flushPlacements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const mp = multiplayerRef.current;
        if (!mp || placementBufferRef.current.length === 0) return;
        if (flushTimeoutRef.current) {
            clearTimeout(flushTimeoutRef.current);
            flushTimeoutRef.current = null;
        }
        const placements = [
            ...placementBufferRef.current
        ];
        placementBufferRef.current = [];
        if (placements.length === 1) {
            // Single placement - send as regular place action
            const p = placements[0];
            mp.dispatchAction({
                type: 'place',
                x: p.x,
                y: p.y,
                tool: p.tool
            });
        } else {
            // Multiple placements - send as batch
            mp.dispatchAction({
                type: 'placeBatch',
                placements
            });
        }
    }, []);
    // Register callback to broadcast local placements (with batching)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!multiplayer || multiplayer.connectionState !== 'connected') {
            game.setPlaceCallback(null);
            // Flush any pending placements
            if (placementBufferRef.current.length > 0) {
                placementBufferRef.current = [];
            }
            if (flushTimeoutRef.current) {
                clearTimeout(flushTimeoutRef.current);
                flushTimeoutRef.current = null;
            }
            return;
        }
        game.setPlaceCallback(({ x, y, tool })=>{
            if (tool === 'bulldoze') {
                // Bulldoze is sent immediately (not batched)
                flushPlacements(); // Flush any pending placements first
                multiplayer.dispatchAction({
                    type: 'bulldoze',
                    x,
                    y
                });
            } else if (tool !== 'select') {
                // Add to batch
                placementBufferRef.current.push({
                    x,
                    y,
                    tool
                });
                // Force flush if batch is large
                if (placementBufferRef.current.length >= BATCH_MAX_SIZE) {
                    flushPlacements();
                } else if (!flushTimeoutRef.current) {
                    // Schedule flush after interval
                    flushTimeoutRef.current = setTimeout(()=>{
                        flushTimeoutRef.current = null;
                        flushPlacements();
                    }, BATCH_FLUSH_INTERVAL);
                }
            }
        });
        return ()=>{
            // Flush remaining placements before disconnecting
            flushPlacements();
            game.setPlaceCallback(null);
        };
    }, [
        multiplayer,
        multiplayer?.connectionState,
        game,
        flushPlacements
    ]);
    // Register callback to broadcast bridge creation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!multiplayer || multiplayer.connectionState !== 'connected') {
            game.setBridgeCallback(null);
            return;
        }
        game.setBridgeCallback(({ pathTiles, trackType })=>{
            multiplayer.dispatchAction({
                type: 'createBridges',
                pathTiles,
                trackType
            });
        });
        return ()=>{
            game.setBridgeCallback(null);
        };
    }, [
        multiplayer,
        multiplayer?.connectionState,
        game
    ]);
    // Keep the game state synced with the Supabase database
    // The provider handles throttling internally (saves every 3 seconds max)
    // Also updates the local saved cities index so the city appears on the homepage
    const lastUpdateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastIndexUpdateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!multiplayer || multiplayer.connectionState !== 'connected') return;
        const now = Date.now();
        if (now - lastUpdateRef.current < 2000) return; // Throttle to 2 second intervals
        lastUpdateRef.current = now;
        // Update the game state - provider will save to Supabase database (throttled)
        multiplayer.updateGameState(game.state);
        // Also update the local saved cities index (less frequently - every 10 seconds)
        if (multiplayer.roomCode && now - lastIndexUpdateRef.current > 10000) {
            lastIndexUpdateRef.current = now;
            updateSavedCitiesIndex(game.state, multiplayer.roomCode);
        }
    }, [
        multiplayer,
        game.state
    ]);
    // Broadcast a local action to peers
    const broadcastAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((action)=>{
        if (!multiplayer || multiplayer.connectionState !== 'connected') return;
        // Prevent broadcasting the same action twice
        const actionKey = JSON.stringify(action);
        if (lastActionRef.current === actionKey) return;
        lastActionRef.current = actionKey;
        // Clear the ref after a short delay to allow repeated actions
        setTimeout(()=>{
            if (lastActionRef.current === actionKey) {
                lastActionRef.current = null;
            }
        }, 100);
        multiplayer.dispatchAction(action);
    }, [
        multiplayer
    ]);
    // Helper to broadcast a placement action
    // Uses object parameter to prevent accidental coordinate swapping
    const broadcastPlace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(({ x, y, tool })=>{
        if (tool === 'bulldoze') {
            broadcastAction({
                type: 'bulldoze',
                x,
                y
            });
        } else if (tool !== 'select') {
            broadcastAction({
                type: 'place',
                x,
                y,
                tool
            });
        }
    }, [
        broadcastAction
    ]);
    // Helper to broadcast tax rate change
    const broadcastTaxRate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((rate)=>{
        broadcastAction({
            type: 'setTaxRate',
            rate
        });
    }, [
        broadcastAction
    ]);
    // Helper to broadcast budget change
    const broadcastBudget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key, funding)=>{
        broadcastAction({
            type: 'setBudget',
            key,
            funding
        });
    }, [
        broadcastAction
    ]);
    // Helper to broadcast speed change
    const broadcastSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((speed)=>{
        broadcastAction({
            type: 'setSpeed',
            speed
        });
    }, [
        broadcastAction
    ]);
    // Helper to broadcast disasters toggle
    const broadcastDisasters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((enabled)=>{
        broadcastAction({
            type: 'setDisasters',
            enabled
        });
    }, [
        broadcastAction
    ]);
    // Check if we're in multiplayer mode
    const isMultiplayer = multiplayer?.connectionState === 'connected';
    const isHost = multiplayer?.isHost ?? false;
    const playerCount = multiplayer?.players.length ?? 0;
    const roomCode = multiplayer?.roomCode ?? null;
    const connectionState = multiplayer?.connectionState ?? 'disconnected';
    return {
        isMultiplayer,
        isHost,
        playerCount,
        roomCode,
        connectionState,
        players: multiplayer?.players ?? [],
        broadcastPlace,
        broadcastTaxRate,
        broadcastBudget,
        broadcastSpeed,
        broadcastDisasters,
        broadcastAction,
        leaveRoom: multiplayer?.leaveRoom ?? (()=>{})
    };
}
}),
"[project]/src/hooks/useCopyRoomLink.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCopyRoomLink",
    ()=>useCopyRoomLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useCopyRoomLink(roomCode, path) {
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const resetCopied = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setCopied(false);
    }, []);
    const handleCopyRoomLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const normalizedPath = undefined;
        const url = undefined;
    }, [
        roomCode,
        path,
        resetCopied
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);
    return {
        copied,
        handleCopyRoomLink,
        resetCopied
    };
}
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/GameContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MultiplayerContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/MultiplayerContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Game$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Game.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$multiplayer$2f$CoopModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/multiplayer/CoopModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMobile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMobile.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/renderConfig.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lz$2d$string$2f$libs$2f$lz$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lz-string/libs/lz-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LanguageSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/LanguageSelector.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VCSimDashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/VCSimDashboard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$investorProfiles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/investorProfiles.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$vcSimulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/vcSimulation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gt-next/dist/index.client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
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
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
}
// Load saved cities index from localStorage
function loadSavedCities() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
// Save a city to the saved cities index (for multiplayer cities)
function saveCityToIndex(state, roomCode) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
// Sprite Gallery component that renders sprites using canvas (like SpriteTestPanel)
function SpriteGallery({ count = 16, cols = 4, cellSize = 120, displayWidth, displayHeight }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [filteredSheet, setFilteredSheet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const spritePack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpritePack"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SPRITE_PACK_ID"]), []);
    // Get random sprite keys from the sprite order, pre-validated to have valid coords
    const randomSpriteKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        // Filter to only sprites that have valid building type mappings
        const validSpriteKeys = spritePack.spriteOrder.filter((spriteKey)=>{
            // Check if this sprite key has a building type mapping
            const hasBuildingMapping = Object.values(spritePack.buildingToSprite).includes(spriteKey);
            return hasBuildingMapping;
        });
        const shuffled = shuffleArray([
            ...validSpriteKeys
        ]);
        return shuffled.slice(0, count);
    }, [
        spritePack.spriteOrder,
        spritePack.buildingToSprite,
        count
    ]);
    // Load and filter sprite sheet
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const img = new Image();
        img.onload = ()=>{
            const filtered = filterBackgroundColor(img);
            setFilteredSheet(filtered);
        };
        img.src = spritePack.src;
    }, [
        spritePack.src
    ]);
    // Pre-compute sprite data with valid coords
    const spriteData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!filteredSheet) return [];
        const sheetWidth = filteredSheet.width;
        const sheetHeight = filteredSheet.height;
        return randomSpriteKeys.map((spriteKey)=>{
            const buildingType = Object.entries(spritePack.buildingToSprite).find(([, value])=>value === spriteKey)?.[0] || spriteKey;
            const coords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpriteCoords"])(buildingType, sheetWidth, sheetHeight, spritePack);
            return coords ? {
                spriteKey,
                coords
            } : null;
        }).filter((item)=>item !== null);
    }, [
        filteredSheet,
        randomSpriteKeys,
        spritePack
    ]);
    // Draw sprites to canvas
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas || !filteredSheet || spriteData.length === 0) return;
        const ctx = canvas.getContext('2d', {
            alpha: true
        });
        if (!ctx) return;
        const dpr = window.devicePixelRatio || 1;
        const rows = Math.ceil(spriteData.length / cols);
        const padding = 10;
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
        // Clear canvas (transparent)
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        // Draw each sprite
        spriteData.forEach(({ coords }, index)=>{
            const col = index % cols;
            const row = Math.floor(index / cols);
            const cellX = col * cellSize;
            const cellY = row * cellSize;
            // Draw cell background
            ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.roundRect(cellX + 2, cellY + 2, cellSize - 4, cellSize - 4, 4);
            ctx.fill();
            ctx.stroke();
            // Calculate destination size preserving aspect ratio
            const maxSize = cellSize - padding * 2;
            const aspectRatio = coords.sh / coords.sw;
            let destWidth = maxSize;
            let destHeight = destWidth * aspectRatio;
            if (destHeight > maxSize) {
                destHeight = maxSize;
                destWidth = destHeight / aspectRatio;
            }
            // Center sprite in cell
            const drawX = cellX + (cellSize - destWidth) / 2;
            const drawY = cellY + (cellSize - destHeight) / 2 + destHeight * 0.1; // Slight offset down
            // Draw sprite
            ctx.drawImage(filteredSheet, coords.sx, coords.sy, coords.sw, coords.sh, Math.round(drawX), Math.round(drawY), Math.round(destWidth), Math.round(destHeight));
        });
    }, [
        filteredSheet,
        spriteData,
        cols,
        cellSize,
        displayWidth,
        displayHeight
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "opacity-80 hover:opacity-100 transition-opacity",
        style: {
            imageRendering: 'pixelated'
        }
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 328,
        columnNumber: 5
    }, this);
}
function CompanyLogoGrid({ max = 9, compact = false }) {
    const [companies, setCompanies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(SEEDED_SPECTER_LOGOS.slice(0, max));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let mounted = true;
        const load = async ()=>{
            try {
                const params = new URLSearchParams({
                    advance: 'false'
                });
                const selectedDomain = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$vcSimulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE_URL"]}/api/v1/simulation/state?${params.toString()}`);
                if (!response.ok) return;
                const payload = await response.json();
                const rows = Array.isArray(payload?.current_snapshot?.companies) ? payload.current_snapshot.companies : [];
                const mapped = rows.filter((row)=>!!row && typeof row === 'object').map((row, index)=>({
                        id: typeof row.id === 'string' ? row.id : `company-${index}`,
                        name: typeof row.name === 'string' && row.name.length > 0 ? row.name : `Company ${index + 1}`,
                        logoUrl: typeof row.logo_url === 'string' && row.logo_url.length > 0 ? row.logo_url : ''
                    })).filter((row)=>row.logoUrl.length > 0).slice(0, max);
                if (mounted && mapped.length > 0) {
                    setCompanies(mapped);
                }
            } catch  {
            // Keep seeded Specter logos on fetch failure.
            }
        };
        load();
        return ()=>{
            mounted = false;
        };
    }, [
        max
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full ${compact ? 'max-w-[180px]' : 'max-w-[280px]'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 text-center text-[10px] uppercase tracking-[0.22em] text-white/50",
                children: "Top Portfolio Logos"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 376,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `grid grid-cols-3 ${compact ? 'gap-1.5' : 'gap-2'}`,
                children: companies.slice(0, max).map((company)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group flex aspect-square items-center justify-center rounded-md border border-white/12 bg-white/5 p-1.5",
                        title: company.name,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                            lineNumber: 384,
                            columnNumber: 13
                        }, this)
                    }, company.id, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 379,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 377,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 375,
        columnNumber: 5
    }, this);
}
// Saved City Card Component
function SavedCityCard({ city, onLoad, onDelete }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onLoad,
                className: "w-full text-left p-3 pr-8 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-none transition-all duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-white font-medium truncate group-hover:text-white/90 text-sm flex-1",
                                children: city.cityName
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 413,
                                columnNumber: 11
                            }, this),
                            city.roomCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs px-1.5 py-0.5 bg-blue-500/20 text-blue-300 rounded shrink-0",
                                children: "Co-op"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 417,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 412,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mt-1 text-xs text-white/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Pop: ",
                                    city.population.toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 423,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "$",
                                    city.money.toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 424,
                                columnNumber: 11
                            }, this),
                            city.roomCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-blue-400/60",
                                children: city.roomCode
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 425,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 422,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 408,
                columnNumber: 7
            }, this),
            onDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: (e)=>{
                    e.stopPropagation();
                    onDelete();
                },
                className: "absolute top-1/2 -translate-y-1/2 right-1.5 p-1.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 hover:bg-red-500/20 text-white/40 hover:text-red-400 rounded transition-all duration-200",
                title: "Delete city",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "w-3.5 h-3.5"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 437,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 429,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 407,
        columnNumber: 5
    }, this);
}
const SAVED_CITY_PREFIX = 'isobusiness-city-';
function HomePage() {
    const [showGame, setShowGame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isChecking, setIsChecking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [savedCities, setSavedCities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hasSaved, setHasSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCoopModal, setShowCoopModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMultiplayer, setIsMultiplayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [startFreshGame, setStartFreshGame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingRoomCode, setPendingRoomCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { isMobileDevice, isSmallScreen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMobile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMobile"])();
    const isMobile = isMobileDevice || isSmallScreen;
    // Check for saved game and room code in URL after mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkSavedGame = ()=>{
            setIsChecking(false);
            setSavedCities(loadSavedCities());
            setHasSaved(hasSavedGame());
            // Check for room code in URL (legacy format) - redirect to new format
            const params = new URLSearchParams(window.location.search);
            const roomCode = params.get('room');
            if (roomCode && roomCode.length === 5) {
                // Redirect to new /coop/XXXXX format
                window.location.replace(`/coop/${roomCode.toUpperCase()}`);
                return;
            }
        // Always show landing page - don't auto-load into game
        // User can select from saved cities or start new
        };
        // Use requestAnimationFrame to avoid synchronous setState in effect
        requestAnimationFrame(checkSavedGame);
    }, []);
    // Handle exit from game - refresh saved cities list
    const handleExitGame = ()=>{
        setShowGame(false);
        setIsMultiplayer(false);
        setStartFreshGame(false);
        setSavedCities(loadSavedCities());
        setHasSaved(hasSavedGame());
        // Clear room code from URL
        window.history.replaceState({}, '', '/');
    };
    // Load a saved city
    const loadSavedCity = (city)=>{
        // If it's a multiplayer city, navigate to the room
        if (city.roomCode) {
            window.history.replaceState({}, '', `/coop/${city.roomCode}`);
            setPendingRoomCode(city.roomCode);
            setShowCoopModal(true);
            return;
        }
        // Otherwise load from local storage
        try {
            const saved = localStorage.getItem(SAVED_CITY_PREFIX + city.id);
            if (saved) {
                localStorage.setItem(STORAGE_KEY, saved);
                setShowGame(true);
            }
        } catch  {
            console.error('Failed to load saved city');
        }
    };
    // Delete a saved city from the index
    const deleteSavedCity = (city)=>{
        try {
            // Remove from saved cities index
            const updatedCities = savedCities.filter((c)=>c.id !== city.id);
            localStorage.setItem(SAVED_CITIES_INDEX_KEY, JSON.stringify(updatedCities));
            setSavedCities(updatedCities);
            // Also remove the city state data if it exists
            if (!city.roomCode) {
                localStorage.removeItem(SAVED_CITY_PREFIX + city.id);
            }
        } catch  {
            console.error('Failed to delete saved city');
        }
    };
    // Handle co-op game start
    const handleCoopStart = (isHost, initialState, roomCode)=>{
        setIsMultiplayer(true);
        if (isHost && initialState) {
            // Host starts with the state they created - save it so GameProvider loads it
            try {
                const compressed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lz$2d$string$2f$libs$2f$lz$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compressToUTF16"])(JSON.stringify(initialState));
                localStorage.setItem(STORAGE_KEY, compressed);
                // Also save to saved cities index so it appears on homepage
                if (roomCode) {
                    saveCityToIndex(initialState, roomCode);
                }
            } catch (e) {
                console.error('Failed to save co-op state:', e);
            }
            setStartFreshGame(false);
        } else if (isHost) {
            // Host without state - fallback to fresh game
            setStartFreshGame(true);
        } else if (initialState) {
            // Guest received state from host - save it so GameProvider loads it
            try {
                const compressed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lz$2d$string$2f$libs$2f$lz$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compressToUTF16"])(JSON.stringify(initialState));
                localStorage.setItem(STORAGE_KEY, compressed);
                // Also save to saved cities index so it appears on homepage
                if (roomCode) {
                    saveCityToIndex(initialState, roomCode);
                }
            } catch (e) {
                console.error('Failed to save co-op state:', e);
            }
            setStartFreshGame(false);
        } else {
            // Guest without state - fallback to fresh game
            setStartFreshGame(true);
        }
        setShowGame(true);
    };
    if (isChecking) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white/60",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"], {
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 576,
                    columnNumber: 40
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 576,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 575,
            columnNumber: 7
        }, this);
    }
    if (showGame) {
        const gameContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "h-screen w-screen overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Game$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onExit: handleExitGame
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 584,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 583,
            columnNumber: 7
        }, this);
        // Always wrap in MultiplayerContextProvider so players can invite others from within the game
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MultiplayerContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MultiplayerContextProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GameProvider"], {
                startFresh: startFreshGame,
                children: gameContent
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 591,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 590,
            columnNumber: 7
        }, this);
    }
    // Mobile landing page
    if (isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MultiplayerContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MultiplayerContextProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "h-[100dvh] max-h-[100dvh] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0 h-4 sm:h-8"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 604,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl sm:text-5xl font-light tracking-wider text-white/90 mb-4 sm:mb-6 flex-shrink-0",
                        children: "ISOBUSINESS"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 607,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 sm:mb-6 flex-shrink-0 flex flex-col items-center gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CompanyLogoGrid, {
                            max: 9,
                            compact: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 613,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 612,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 sm:gap-3 w-full max-w-xs flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>{
                                    setStartFreshGame(!hasSaved);
                                    setShowGame(true);
                                },
                                className: "w-full py-4 sm:py-6 text-lg sm:text-xl font-light tracking-wide bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-none transition-all duration-300",
                                children: hasSaved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"], {
                                    children: "Continue"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 625,
                                    columnNumber: 27
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"], {
                                    children: "New Game"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 625,
                                    columnNumber: 45
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 618,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>setShowCoopModal(true),
                                variant: "outline",
                                className: "w-full py-4 sm:py-6 text-lg sm:text-xl font-light tracking-wide bg-white/5 hover:bg-white/15 text-white/60 hover:text-white border border-white/15 rounded-none transition-all duration-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"], {
                                    children: "Co-op"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 633,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 628,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: async ()=>{
                                    // Clear any room code from URL to prevent multiplayer conflicts
                                    if (window.location.search.includes('room=')) {
                                        window.history.replaceState({}, '', '/');
                                        setPendingRoomCode(null);
                                    }
                                    const response = await fetch('/example-states/example_state_9.json');
                                    const exampleState = await response.json();
                                    try {
                                        const compressed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lz$2d$string$2f$libs$2f$lz$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compressToUTF16"])(JSON.stringify(exampleState));
                                        localStorage.setItem(STORAGE_KEY, compressed);
                                    } catch (e) {
                                        console.error('Failed to save example state:', e);
                                    }
                                    setShowGame(true);
                                },
                                variant: "outline",
                                className: "w-full py-4 sm:py-6 text-lg sm:text-xl font-light tracking-wide bg-transparent hover:bg-white/10 text-white/40 hover:text-white/60 border border-white/10 rounded-none transition-all duration-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"], {
                                    children: "Load Example"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 656,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 636,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://cursor.com",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "text-left py-2 text-sm font-light tracking-wide text-white/40 hover:text-white/70 transition-colors duration-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"], {
                                                    children: "Made with Cursor"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 666,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 660,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://github.com/amilich/isometric-city",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "text-left py-2 text-sm font-light tracking-wide text-white/40 hover:text-white/70 transition-colors duration-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"], {
                                                    children: "Open GitHub"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 674,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 668,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 659,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LanguageSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageSelector"], {
                                        variant: "ghost",
                                        className: "text-white/40 hover:text-white/70 hover:bg-white/10"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 677,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 658,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 617,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 mb-3 flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SpriteGallery, {
                            count: 9,
                            cols: 3,
                            cellSize: 94,
                            displayWidth: 283,
                            displayHeight: 268
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 683,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 682,
                        columnNumber: 11
                    }, this),
                    savedCities.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-xs mt-3 sm:mt-4 flex-1 min-h-0 flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xs font-medium text-white/40 uppercase tracking-wider mb-2 flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"], {
                                    children: "Saved Cities"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 690,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 689,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 flex-1 overflow-y-auto overscroll-y-contain",
                                style: {
                                    WebkitOverflowScrolling: 'touch',
                                    touchAction: 'pan-y'
                                },
                                children: savedCities.slice(0, 5).map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SavedCityCard, {
                                        city: city,
                                        onLoad: ()=>loadSavedCity(city),
                                        onDelete: ()=>deleteSavedCity(city)
                                    }, city.id, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 697,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 692,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 688,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0 h-2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 709,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$multiplayer$2f$CoopModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CoopModal"], {
                        open: showCoopModal,
                        onOpenChange: setShowCoopModal,
                        onStartGame: handleCoopStart,
                        pendingRoomCode: pendingRoomCode
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 712,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 602,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 601,
            columnNumber: 7
        }, this);
    }
    // Desktop landing page
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MultiplayerContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MultiplayerContextProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl w-full grid lg:grid-cols-[1fr_auto_1fr] gap-16 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center lg:items-start justify-center space-y-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-8xl font-light tracking-wider text-white/90",
                                    children: "ISOBUSINESS"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 731,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: ()=>{
                                                setStartFreshGame(!hasSaved);
                                                setShowGame(true);
                                            },
                                            className: "w-64 py-8 text-2xl font-light tracking-wide bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-none transition-all duration-300",
                                            children: hasSaved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"], {
                                                children: "Continue"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 742,
                                                columnNumber: 29
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"], {
                                                children: "New Game"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 742,
                                                columnNumber: 47
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 735,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: ()=>setShowCoopModal(true),
                                            variant: "outline",
                                            className: "w-64 py-8 text-2xl font-light tracking-wide bg-white/5 hover:bg-white/15 text-white/60 hover:text-white border border-white/15 rounded-none transition-all duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"], {
                                                children: "Co-op"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 749,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 744,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: async ()=>{
                                                // Clear any room code from URL to prevent multiplayer conflicts
                                                if (window.location.search.includes('room=')) {
                                                    window.history.replaceState({}, '', '/');
                                                    setPendingRoomCode(null);
                                                }
                                                const response = await fetch('/example-states/example_state_9.json');
                                                const exampleState = await response.json();
                                                try {
                                                    const compressed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lz$2d$string$2f$libs$2f$lz$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compressToUTF16"])(JSON.stringify(exampleState));
                                                    localStorage.setItem(STORAGE_KEY, compressed);
                                                } catch (e) {
                                                    console.error('Failed to save example state:', e);
                                                }
                                                setShowGame(true);
                                            },
                                            variant: "outline",
                                            className: "w-64 py-8 text-2xl font-light tracking-wide bg-transparent hover:bg-white/10 text-white/40 hover:text-white/60 border border-white/10 rounded-none transition-all duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"], {
                                                children: "Load Example"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 771,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 751,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between w-64",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "https://cursor.com",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "text-left py-2 text-sm font-light tracking-wide text-white/40 hover:text-white/70 transition-colors duration-200",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"], {
                                                                children: "Made with Cursor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 781,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 775,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "https://github.com/amilich/isometric-city",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "text-left py-2 text-sm font-light tracking-wide text-white/40 hover:text-white/70 transition-colors duration-200",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"], {
                                                                children: "Open GitHub"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 789,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 783,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 774,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LanguageSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageSelector"], {
                                                    variant: "ghost",
                                                    className: "text-white/40 hover:text-white/70 hover:bg-white/10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 792,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 773,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 734,
                                    columnNumber: 13
                                }, this),
                                savedCities.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-64",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xs font-medium text-white/40 uppercase tracking-wider mb-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"], {
                                                children: "Saved Cities"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 800,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 799,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-2 max-h-64 overflow-y-auto overscroll-y-contain",
                                            style: {
                                                WebkitOverflowScrolling: 'touch',
                                                touchAction: 'pan-y'
                                            },
                                            children: savedCities.slice(0, 5).map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SavedCityCard, {
                                                    city: city,
                                                    onLoad: ()=>loadSavedCity(city),
                                                    onDelete: ()=>deleteSavedCity(city)
                                                }, city.id, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 807,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 802,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 798,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 730,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VCSimDashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VCSimDashboard"], {}, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 821,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 820,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center lg:items-end gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SpriteGallery, {
                                    count: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 826,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CompanyLogoGrid, {
                                    max: 9
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 827,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 825,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 727,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$multiplayer$2f$CoopModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CoopModal"], {
                    open: showCoopModal,
                    onOpenChange: setShowCoopModal,
                    onStartGame: handleCoopStart,
                    pendingRoomCode: pendingRoomCode
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 832,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 726,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 725,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_6c0a617c._.js.map