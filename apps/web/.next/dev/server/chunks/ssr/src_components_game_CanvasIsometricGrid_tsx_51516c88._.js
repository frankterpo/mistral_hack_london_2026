module.exports = [
"[project]/src/components/game/CanvasIsometricGrid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasIsometricGrid",
    ()=>CanvasIsometricGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gt-next/dist/index.client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/GameContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$game$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/types/game.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/games/isocity/types/game.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/simulation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Icons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/renderConfig.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$buildingSprite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/buildingSprite.ts [app-ssr] (ecmascript)");
// Import shadcn components
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
// Import extracted game components, types, and utilities
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$drawing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/drawing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$overlays$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/overlays.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$placeholders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/placeholders.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/imageLoader.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/game/panels/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$TileInfoPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/panels/TileInfoPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$gridFinders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/gridFinders.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$drawAircraft$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/drawAircraft.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$vehicleSystems$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/vehicleSystems.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$buildingHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/buildingHelpers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$aircraftSystems$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/aircraftSystems.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$bargeSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/bargeSystem.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$boatSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/boatSystem.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$seaplaneSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/seaplaneSystem.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$effectsSystems$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/effectsSystems.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$trafficSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/trafficSystem.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$roadDrawing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/roadDrawing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$bridgeDrawing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/bridgeDrawing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$incidentData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/incidentData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$railSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/railSystem.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$trainSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/trainSystem.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$lightingSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/lightingSystem.ts [app-ssr] (ecmascript)");
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
;
;
;
;
function CanvasIsometricGrid({ overlayMode, selectedTile, setSelectedTile, isMobile = false, navigationTarget, onNavigationComplete, onViewportChange, onBargeDelivery }) {
    const { state, latestStateRef, placeAtTile, finishTrackDrag, connectToCity, checkAndDiscoverCities, currentSpritePack, visualHour, investorSession } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGame"])();
    const { grid, gridSize, selectedTool, speed, adjacentCities, waterBodies, gameVersion } = state;
    const portfolioCompanyTiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>state.portfolioCompanyTiles || [], [
        state.portfolioCompanyTiles
    ]);
    const portfolioTileByKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = new Map();
        for (const marker of portfolioCompanyTiles){
            map.set(`${marker.x},${marker.y}`, marker);
        }
        return map;
    }, [
        portfolioCompanyTiles
    ]);
    // PERF: Use latestStateRef for real-time grid access in animation loops
    // This avoids waiting for React state sync which is throttled for performance
    const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMessages"])();
    const gt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGT"])();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hoverCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null); // PERF: Separate canvas for hover/selection highlights
    const carsCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const buildingsCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null); // Buildings rendered on top of cars/trains
    const airCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null); // Aircraft + fireworks rendered above buildings
    const lightingCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const renderPendingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null); // PERF: Track pending render frame
    const lastMainRenderTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0); // PERF: Throttle main renders at high speed
    const [offset, setOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: isMobile ? 200 : 620,
        y: isMobile ? 100 : 160
    });
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPanning, setIsPanning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isWheelZooming, setIsWheelZooming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // State to trigger re-render when wheel zooming stops
    const isPanningRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false); // Ref for animation loop to check panning state
    const isPinchZoomingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false); // Ref for animation loop to check pinch zoom state
    const isWheelZoomingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false); // Ref for animation loop to check desktop wheel zoom state
    const wheelZoomTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null); // Timeout to detect end of wheel zoom
    const zoomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(isMobile ? 0.6 : 1); // Ref for animation loop to check zoom level
    const [dragStart, setDragStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const panCandidateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hoveredTile, setHoveredTile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredIncident, setHoveredIncident] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isMobile ? 0.6 : 1);
    const isInspectableTile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((x, y)=>{
        const tile = grid[y]?.[x];
        if (!tile) return false;
        const buildingType = tile.building.type;
        const isOpenGround = buildingType === 'empty' || buildingType === 'grass' || buildingType === 'water';
        if (!isOpenGround) return true;
        if (tile.zone !== 'none') return true;
        if ((tile.building.population ?? 0) > 0 || (tile.building.jobs ?? 0) > 0) return true;
        if (tile.building.onFire) return true;
        return false;
    }, [
        grid
    ]);
    const carsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const carIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const carSpawnTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const busesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const busIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const busSpawnTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const emergencyVehiclesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const emergencyVehicleIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const emergencyDispatchTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const activeFiresRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set()); // Track fires that already have a truck dispatched
    const activeCrimesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set()); // Track crimes that already have a car dispatched
    const activeCrimeIncidentsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map()); // Persistent crime incidents
    const crimeSpawnTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0); // Timer for spawning new crime incidents
    // Pedestrian system refs
    const pedestriansRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const pedestrianIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const pedestrianSpawnTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Touch gesture state for mobile
    const touchStartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initialPinchDistanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initialZoomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(zoom);
    const lastTouchCenterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Airplane system refs
    const airplanesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const airplaneIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const airplaneSpawnTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Helicopter system refs
    const helicoptersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const helicopterIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const helicopterSpawnTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Seaplane system refs
    const seaplanesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const seaplaneIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const seaplaneSpawnTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Boat system refs
    const boatsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const boatIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const boatSpawnTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Barge system refs (ocean cargo ships)
    const bargesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const bargeIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const bargeSpawnTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Train system refs
    const trainsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const trainIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const trainSpawnTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Navigation light flash timer for planes/helicopters/boats at night
    const navLightFlashTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Railroad crossing state
    const crossingFlashTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const crossingGateAnglesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map()); // key = y * gridSize + x, value = angle (0=open, 90=closed)
    const crossingPositionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]); // Cached crossing positions for O(1) iteration
    // Firework system refs
    const fireworksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const fireworkIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const fireworkSpawnTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const fireworkShowActiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const fireworkShowStartTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const fireworkLastHourRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(-1); // Track hour changes to detect night transitions
    // Factory smog system refs
    const factorySmogRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const smogLastGridVersionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(-1); // Track when to rebuild factory list
    // Cloud system refs
    const cloudsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const cloudIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const cloudSpawnTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Traffic light system timer (cumulative time for cycling through states)
    const trafficLightTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Performance: Cache expensive grid calculations
    const cachedRoadTileCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        count: 0,
        gridVersion: -1
    });
    const cachedPopulationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        count: 0,
        gridVersion: -1
    });
    // PERF: Cache intersection status per-tile to avoid repeated getDirectionOptions() calls
    const cachedIntersectionMapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        map: new Map(),
        gridVersion: -1
    });
    const gridVersionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Performance: Cache road merge analysis (expensive calculation done per-road-tile)
    const roadAnalysisCacheRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const roadAnalysisCacheVersionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(-1);
    // PERF: Cache background gradient - only recreate when canvas height changes
    const bgGradientCacheRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        gradient: null,
        height: 0
    });
    const renderQueuesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        buildingQueue: [],
        waterQueue: [],
        roadQueue: [],
        bridgeQueue: [],
        railQueue: [],
        beachQueue: [],
        baseTileQueue: [],
        greenBaseTileQueue: [],
        overlayQueue: []
    });
    const worldStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        grid,
        gridSize,
        offset,
        zoom,
        speed,
        canvasSize: {
            width: 1200,
            height: 800
        }
    });
    const [roadDrawDirection, setRoadDrawDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const placedRoadTilesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    // Track progressive image loading - start true to render immediately with placeholders
    const [imagesLoaded, setImagesLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Counter to trigger re-renders when new images become available
    const [imageLoadVersion, setImageLoadVersion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [canvasSize, setCanvasSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        width: 1200,
        height: 800
    });
    const [dragStartTile, setDragStartTile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragEndTile, setDragEndTile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cityConnectionDialog, setCityConnectionDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const keysPressedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    // Only zoning tools show the grid/rectangle selection visualization
    // Note: zone_water uses supportsDragPlace behavior (place on click/drag) instead of rectangle selection
    const showsDragGrid = [
        'zone_residential',
        'zone_commercial',
        'zone_industrial',
        'zone_dezone'
    ].includes(selectedTool);
    // Roads, bulldoze, and other tools support drag-to-place but don't show the grid
    const supportsDragPlace = selectedTool !== 'select';
    const PAN_DRAG_THRESHOLD = 6;
    // Use extracted building helpers (with pre-computed tile metadata for O(1) lookups)
    const { isPartOfMultiTileBuilding, findBuildingOrigin, isPartOfParkBuilding, getTileMetadata } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$buildingHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBuildingHelpers"])(grid, gridSize);
    // Use extracted vehicle systems
    const vehicleSystemRefs = {
        carsRef,
        carIdRef,
        carSpawnTimerRef,
        busesRef,
        busIdRef,
        busSpawnTimerRef,
        emergencyVehiclesRef,
        emergencyVehicleIdRef,
        emergencyDispatchTimerRef,
        activeFiresRef,
        activeCrimesRef,
        activeCrimeIncidentsRef,
        crimeSpawnTimerRef,
        pedestriansRef,
        pedestrianIdRef,
        pedestrianSpawnTimerRef,
        trafficLightTimerRef,
        trainsRef
    };
    const vehicleSystemState = {
        worldStateRef,
        gridVersionRef,
        cachedRoadTileCountRef,
        cachedIntersectionMapRef,
        state: {
            services: state.services,
            stats: state.stats
        },
        isMobile
    };
    const { spawnRandomCar, spawnPedestrian, spawnCrimeIncidents, updateCrimeIncidents, findCrimeIncidents, dispatchEmergencyVehicle, updateEmergencyDispatch, updateEmergencyVehicles, updateCars, updateBuses, updatePedestrians, drawCars, drawBuses, drawPedestrians, drawRecreationPedestrians, drawEmergencyVehicles, drawIncidentIndicators } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$vehicleSystems$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVehicleSystems"])(vehicleSystemRefs, vehicleSystemState);
    // Use extracted aircraft systems
    const aircraftSystemRefs = {
        airplanesRef,
        airplaneIdRef,
        airplaneSpawnTimerRef,
        helicoptersRef,
        helicopterIdRef,
        helicopterSpawnTimerRef
    };
    const aircraftSystemState = {
        worldStateRef,
        gridVersionRef,
        cachedPopulationRef,
        isMobile
    };
    const { updateAirplanes, updateHelicopters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$aircraftSystems$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAircraftSystems"])(aircraftSystemRefs, aircraftSystemState);
    // Use extracted seaplane system
    const seaplaneSystemRefs = {
        seaplanesRef,
        seaplaneIdRef,
        seaplaneSpawnTimerRef
    };
    const seaplaneSystemState = {
        worldStateRef,
        gridVersionRef,
        cachedPopulationRef,
        isMobile
    };
    const { updateSeaplanes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$seaplaneSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSeaplaneSystem"])(seaplaneSystemRefs, seaplaneSystemState);
    // Use extracted barge system
    const bargeSystemRefs = {
        bargesRef,
        bargeIdRef,
        bargeSpawnTimerRef
    };
    const bargeSystemState = {
        worldStateRef,
        isMobile,
        visualHour,
        onBargeDelivery
    };
    const { updateBarges, drawBarges } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$bargeSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBargeSystem"])(bargeSystemRefs, bargeSystemState);
    // Use extracted boat system
    const boatSystemRefs = {
        boatsRef,
        boatIdRef,
        boatSpawnTimerRef
    };
    const boatSystemState = {
        worldStateRef,
        isMobile,
        visualHour
    };
    const { updateBoats, drawBoats } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$boatSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBoatSystem"])(boatSystemRefs, boatSystemState);
    // Use extracted effects systems (fireworks and smog)
    const effectsSystemRefs = {
        fireworksRef,
        fireworkIdRef,
        fireworkSpawnTimerRef,
        fireworkShowActiveRef,
        fireworkShowStartTimeRef,
        fireworkLastHourRef,
        factorySmogRef,
        smogLastGridVersionRef,
        cloudsRef,
        cloudIdRef,
        cloudSpawnTimerRef
    };
    const effectsSystemState = {
        worldStateRef,
        gridVersionRef,
        isMobile
    };
    const { updateFireworks, drawFireworks, updateSmog, drawSmog, updateClouds, drawClouds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$effectsSystems$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffectsSystems"])(effectsSystemRefs, effectsSystemState);
    // PERF: Sync worldStateRef from latestStateRef (real-time) instead of React state (throttled)
    // This runs on every animation frame via the render loop, not on React state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Initial sync from React state
        worldStateRef.current.grid = grid;
        worldStateRef.current.gridSize = gridSize;
        gridVersionRef.current++;
        crossingPositionsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$railSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findRailroadCrossings"])(grid, gridSize);
    }, [
        grid,
        gridSize
    ]);
    // PERF: Continuously sync from latestStateRef for real-time grid updates
    // This allows canvas to see simulation changes before React state syncs
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let animFrameId;
        let lastGridVersion = 0;
        const syncFromRef = ()=>{
            animFrameId = requestAnimationFrame(syncFromRef);
            // Only update if latestStateRef has newer data
            const latest = latestStateRef.current;
            if (latest && latest.grid !== worldStateRef.current.grid) {
                worldStateRef.current.grid = latest.grid;
                worldStateRef.current.gridSize = latest.gridSize;
                // Only recalculate crossings if grid actually changed
                const newVersion = gridVersionRef.current + 1;
                if (newVersion !== lastGridVersion) {
                    lastGridVersion = newVersion;
                    gridVersionRef.current = newVersion;
                    crossingPositionsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$railSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findRailroadCrossings"])(latest.grid, latest.gridSize);
                }
            }
        };
        animFrameId = requestAnimationFrame(syncFromRef);
        return ()=>cancelAnimationFrame(animFrameId);
    }, [
        latestStateRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        worldStateRef.current.offset = offset;
    }, [
        offset
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        worldStateRef.current.zoom = zoom;
    }, [
        zoom
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        worldStateRef.current.speed = speed;
    }, [
        speed
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        worldStateRef.current.canvasSize = canvasSize;
    }, [
        canvasSize
    ]);
    // Clear all vehicles/entities when game version changes (new game, load state, etc.)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Clear all vehicle refs
        carsRef.current = [];
        carIdRef.current = 0;
        carSpawnTimerRef.current = 0;
        emergencyVehiclesRef.current = [];
        emergencyVehicleIdRef.current = 0;
        emergencyDispatchTimerRef.current = 0;
        activeFiresRef.current.clear();
        activeCrimesRef.current.clear();
        activeCrimeIncidentsRef.current.clear();
        crimeSpawnTimerRef.current = 0;
        // Clear pedestrians
        pedestriansRef.current = [];
        pedestrianIdRef.current = 0;
        pedestrianSpawnTimerRef.current = 0;
        // Clear aircraft
        airplanesRef.current = [];
        airplaneIdRef.current = 0;
        airplaneSpawnTimerRef.current = 0;
        helicoptersRef.current = [];
        helicopterIdRef.current = 0;
        helicopterSpawnTimerRef.current = 0;
        seaplanesRef.current = [];
        seaplaneIdRef.current = 0;
        seaplaneSpawnTimerRef.current = 0;
        // Clear boats
        boatsRef.current = [];
        boatIdRef.current = 0;
        boatSpawnTimerRef.current = 0;
        // Clear barges
        bargesRef.current = [];
        bargeIdRef.current = 0;
        bargeSpawnTimerRef.current = 0;
        // Clear trains
        trainsRef.current = [];
        trainIdRef.current = 0;
        trainSpawnTimerRef.current = 0;
        // Clear fireworks
        fireworksRef.current = [];
        fireworkIdRef.current = 0;
        fireworkSpawnTimerRef.current = 0;
        fireworkShowActiveRef.current = false;
        // Clear factory smog
        factorySmogRef.current = [];
        smogLastGridVersionRef.current = -1;
        // Clear clouds
        cloudsRef.current = [];
        cloudIdRef.current = 0;
        cloudSpawnTimerRef.current = 0;
        // Reset traffic light timer
        trafficLightTimerRef.current = 0;
    }, [
        gameVersion
    ]);
    // Sync isPanning state to ref for animation loop access
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        isPanningRef.current = isPanning;
    }, [
        isPanning
    ]);
    // Sync zoom state to ref for animation loop access
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        zoomRef.current = zoom;
    }, [
        zoom
    ]);
    // Notify parent of viewport changes for minimap
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        onViewportChange?.({
            offset,
            zoom,
            canvasSize
        });
    }, [
        offset,
        zoom,
        canvasSize,
        onViewportChange
    ]);
    // Keyboard panning (WASD / arrow keys)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const pressed = keysPressedRef.current;
        const isTypingTarget = (target)=>{
            const el = target;
            return !!el?.closest('input, textarea, select, [contenteditable="true"]');
        };
        const handleKeyDown = (e)=>{
            if (isTypingTarget(e.target)) return;
            const key = e.key.toLowerCase();
            if ([
                'w',
                'a',
                's',
                'd',
                'arrowup',
                'arrowleft',
                'arrowdown',
                'arrowright'
            ].includes(key)) {
                pressed.add(key);
                e.preventDefault();
            }
        };
        const handleKeyUp = (e)=>{
            const key = e.key.toLowerCase();
            pressed.delete(key);
        };
        let animationFrameId = 0;
        let lastTime = performance.now();
        const tick = (time)=>{
            animationFrameId = requestAnimationFrame(tick);
            const delta = Math.min((time - lastTime) / 1000, 0.05);
            lastTime = time;
            if (!pressed.size) return;
            let dx = 0;
            let dy = 0;
            if (pressed.has('w') || pressed.has('arrowup')) dy += __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEY_PAN_SPEED"] * delta;
            if (pressed.has('s') || pressed.has('arrowdown')) dy -= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEY_PAN_SPEED"] * delta;
            if (pressed.has('a') || pressed.has('arrowleft')) dx += __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEY_PAN_SPEED"] * delta;
            if (pressed.has('d') || pressed.has('arrowright')) dx -= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEY_PAN_SPEED"] * delta;
            if (dx !== 0 || dy !== 0) {
                const { zoom: currentZoom, gridSize: n, canvasSize: cs } = worldStateRef.current;
                // Calculate bounds inline
                const padding = 100;
                const mapLeft = -(n - 1) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2;
                const mapRight = (n - 1) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2;
                const mapTop = 0;
                const mapBottom = (n - 1) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_HEIGHT"];
                const minOffsetX = padding - mapRight * currentZoom;
                const maxOffsetX = cs.width - padding - mapLeft * currentZoom;
                const minOffsetY = padding - mapBottom * currentZoom;
                const maxOffsetY = cs.height - padding - mapTop * currentZoom;
                setOffset((prev)=>({
                        x: Math.max(minOffsetX, Math.min(maxOffsetX, prev.x + dx)),
                        y: Math.max(minOffsetY, Math.min(maxOffsetY, prev.y + dy))
                    }));
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        animationFrameId = requestAnimationFrame(tick);
        return ()=>{
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            cancelAnimationFrame(animationFrameId);
            pressed.clear();
        };
    }, []);
    // Find marinas and piers (uses imported utility)
    const findMarinasAndPiersCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const { grid: currentGrid, gridSize: currentGridSize } = worldStateRef.current;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$gridFinders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findMarinasAndPiers"])(currentGrid, currentGridSize);
    }, []);
    // Find adjacent water tile (uses imported utility)
    const findAdjacentWaterTileCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((dockX, dockY)=>{
        const { grid: currentGrid, gridSize: currentGridSize } = worldStateRef.current;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$gridFinders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findAdjacentWaterTile"])(currentGrid, currentGridSize, dockX, dockY);
    }, []);
    // Check if screen position is over water (uses imported utility)
    const isOverWaterCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((screenX, screenY)=>{
        const { grid: currentGrid, gridSize: currentGridSize } = worldStateRef.current;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$gridFinders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isOverWater"])(currentGrid, currentGridSize, screenX, screenY);
    }, []);
    // Generate tour waypoints (uses imported utility)
    const generateTourWaypointsCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((startTileX, startTileY)=>{
        const { grid: currentGrid, gridSize: currentGridSize } = worldStateRef.current;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$gridFinders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateTourWaypoints"])(currentGrid, currentGridSize, startTileX, startTileY);
    }, []);
    // Draw airplanes with contrails (uses extracted utility)
    const drawAirplanes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ctx)=>{
        const { offset: currentOffset, zoom: currentZoom, grid: currentGrid, gridSize: currentGridSize } = worldStateRef.current;
        const canvas = ctx.canvas;
        const dpr = window.devicePixelRatio || 1;
        // Early exit if no airplanes
        if (!currentGrid || currentGridSize <= 0 || airplanesRef.current.length === 0) {
            return;
        }
        ctx.save();
        ctx.scale(dpr * currentZoom, dpr * currentZoom);
        ctx.translate(currentOffset.x / currentZoom, currentOffset.y / currentZoom);
        const viewWidth = canvas.width / (dpr * currentZoom);
        const viewHeight = canvas.height / (dpr * currentZoom);
        const viewBounds = {
            viewLeft: -currentOffset.x / currentZoom - 200,
            viewTop: -currentOffset.y / currentZoom - 200,
            viewRight: viewWidth - currentOffset.x / currentZoom + 200,
            viewBottom: viewHeight - currentOffset.y / currentZoom + 200
        };
        // Use extracted utility function for drawing
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$drawAircraft$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawAirplanes"])(ctx, airplanesRef.current, viewBounds, visualHour, navLightFlashTimerRef.current, isMobile);
        ctx.restore();
    }, [
        visualHour,
        isMobile
    ]);
    // Draw helicopters with rotor wash (uses extracted utility)
    const drawHelicopters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ctx)=>{
        const { offset: currentOffset, zoom: currentZoom, grid: currentGrid, gridSize: currentGridSize } = worldStateRef.current;
        const canvas = ctx.canvas;
        const dpr = window.devicePixelRatio || 1;
        // Early exit if no helicopters
        if (!currentGrid || currentGridSize <= 0 || helicoptersRef.current.length === 0) {
            return;
        }
        ctx.save();
        ctx.scale(dpr * currentZoom, dpr * currentZoom);
        ctx.translate(currentOffset.x / currentZoom, currentOffset.y / currentZoom);
        const viewWidth = canvas.width / (dpr * currentZoom);
        const viewHeight = canvas.height / (dpr * currentZoom);
        const viewBounds = {
            viewLeft: -currentOffset.x / currentZoom - 100,
            viewTop: -currentOffset.y / currentZoom - 100,
            viewRight: viewWidth - currentOffset.x / currentZoom + 100,
            viewBottom: viewHeight - currentOffset.y / currentZoom + 100
        };
        // Use extracted utility function for drawing
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$drawAircraft$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawHelicopters"])(ctx, helicoptersRef.current, viewBounds, visualHour, navLightFlashTimerRef.current, isMobile, currentZoom);
        ctx.restore();
    }, [
        visualHour,
        isMobile
    ]);
    // Draw seaplanes with wakes and contrails (uses extracted utility)
    const drawSeaplanes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ctx)=>{
        const { offset: currentOffset, zoom: currentZoom, grid: currentGrid, gridSize: currentGridSize } = worldStateRef.current;
        const canvas = ctx.canvas;
        const dpr = window.devicePixelRatio || 1;
        // Early exit if no seaplanes
        if (!currentGrid || currentGridSize <= 0 || seaplanesRef.current.length === 0) {
            return;
        }
        ctx.save();
        ctx.scale(dpr * currentZoom, dpr * currentZoom);
        ctx.translate(currentOffset.x / currentZoom, currentOffset.y / currentZoom);
        const viewWidth = canvas.width / (dpr * currentZoom);
        const viewHeight = canvas.height / (dpr * currentZoom);
        const viewBounds = {
            viewLeft: -currentOffset.x / currentZoom - 200,
            viewTop: -currentOffset.y / currentZoom - 200,
            viewRight: viewWidth - currentOffset.x / currentZoom + 200,
            viewBottom: viewHeight - currentOffset.y / currentZoom + 200
        };
        // Use extracted utility function for drawing
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$drawAircraft$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawSeaplanes"])(ctx, seaplanesRef.current, viewBounds, visualHour, navLightFlashTimerRef.current, isMobile);
        ctx.restore();
    }, [
        visualHour,
        isMobile
    ]);
    // Boats are now handled by useBoatSystem hook (see above)
    // Update trains - spawn, move, and manage lifecycle
    const updateTrains = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((delta)=>{
        const { grid: currentGrid, gridSize: currentGridSize, speed: currentSpeed } = worldStateRef.current;
        if (!currentGrid || currentGridSize <= 0 || currentSpeed === 0) {
            return;
        }
        // Count rail tiles
        const railTileCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$railSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["countRailTiles"])(currentGrid, currentGridSize);
        // No trains if not enough rail
        if (railTileCount < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$trainSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MIN_RAIL_TILES_FOR_TRAINS"]) {
            trainsRef.current = [];
            return;
        }
        // Calculate max trains based on rail network size - lower limits on mobile
        const maxTrainsLimit = isMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$trainSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_TRAINS_MOBILE"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$trainSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_TRAINS"];
        const trainsPerTile = isMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$trainSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRAINS_PER_RAIL_TILES_MOBILE"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$trainSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRAINS_PER_RAIL_TILES"];
        const maxTrains = Math.min(maxTrainsLimit, Math.ceil(railTileCount / trainsPerTile));
        // Speed multiplier based on game speed
        const speedMultiplier = currentSpeed === 1 ? 1 : currentSpeed === 2 ? 2 : 3;
        // Spawn timer - slower on mobile
        const spawnInterval = isMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$trainSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRAIN_SPAWN_INTERVAL_MOBILE"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$trainSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRAIN_SPAWN_INTERVAL"];
        trainSpawnTimerRef.current -= delta;
        if (trainsRef.current.length < maxTrains && trainSpawnTimerRef.current <= 0) {
            const newTrain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$trainSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spawnTrain"])(currentGrid, currentGridSize, trainIdRef);
            if (newTrain) {
                trainsRef.current.push(newTrain);
            }
            trainSpawnTimerRef.current = spawnInterval;
        }
        // Update existing trains (pass all trains for collision detection)
        const allTrains = trainsRef.current;
        trainsRef.current = trainsRef.current.filter((train)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$trainSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateTrain"])(train, delta, speedMultiplier, currentGrid, currentGridSize, allTrains, isMobile));
    }, [
        isMobile
    ]);
    // Draw trains on the rail network
    const drawTrainsCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ctx)=>{
        const { offset: currentOffset, zoom: currentZoom, grid: currentGrid, gridSize: currentGridSize, canvasSize: size } = worldStateRef.current;
        if (!currentGrid || currentGridSize <= 0 || trainsRef.current.length === 0) {
            return;
        }
        // Skip drawing trains when very zoomed out (for large map performance)
        if (currentZoom < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRAIN_MIN_ZOOM"]) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$trainSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawTrains"])(ctx, trainsRef.current, currentOffset, currentZoom, size, currentGrid, currentGridSize, visualHour, isMobile);
    }, [
        visualHour,
        isMobile
    ]);
    // Fireworks and smog are now handled by useEffectsSystems hook (see above)
    // Progressive image loading - load sprites in background, render immediately
    // Subscribe to image load notifications to trigger re-renders as assets become available
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onImageLoaded"])(()=>{
            // Trigger re-render when any new image loads
            setImageLoadVersion((v)=>v + 1);
        });
        return unsubscribe;
    }, []);
    // Load sprite sheets on mount and when sprite pack changes
    // This now runs in background - rendering starts immediately with placeholders
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Load images progressively - each will trigger a re-render when ready
        // Priority: main sprite sheet first, then water, then secondary sheets
        // High priority - main sprite sheet
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadSpriteImage"])(currentSpritePack.src, true).catch(console.error);
        // High priority - water texture
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadImage"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WATER_ASSET_PATH"]).catch(console.error);
        // Medium priority - load secondary sheets after a small delay
        // This allows the main content to render first
        const loadSecondarySheets = ()=>{
            if (currentSpritePack.constructionSrc) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadSpriteImage"])(currentSpritePack.constructionSrc, true).catch(console.error);
            }
            if (currentSpritePack.abandonedSrc) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadSpriteImage"])(currentSpritePack.abandonedSrc, true).catch(console.error);
            }
            if (currentSpritePack.denseSrc) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadSpriteImage"])(currentSpritePack.denseSrc, true).catch(console.error);
            }
            if (currentSpritePack.parksSrc) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadSpriteImage"])(currentSpritePack.parksSrc, true).catch(console.error);
            }
            if (currentSpritePack.parksConstructionSrc) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadSpriteImage"])(currentSpritePack.parksConstructionSrc, true).catch(console.error);
            }
            if (currentSpritePack.farmsSrc) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadSpriteImage"])(currentSpritePack.farmsSrc, true).catch(console.error);
            }
            if (currentSpritePack.shopsSrc) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadSpriteImage"])(currentSpritePack.shopsSrc, true).catch(console.error);
            }
            if (currentSpritePack.stationsSrc) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadSpriteImage"])(currentSpritePack.stationsSrc, true).catch(console.error);
            }
            if (currentSpritePack.modernSrc) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadSpriteImage"])(currentSpritePack.modernSrc, true).catch(console.error);
            }
            if (currentSpritePack.servicesSrc) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadSpriteImage"])(currentSpritePack.servicesSrc, true).catch(console.error);
            }
            if (currentSpritePack.infrastructureSrc) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadSpriteImage"])(currentSpritePack.infrastructureSrc, true).catch(console.error);
            }
            if (currentSpritePack.mansionsSrc) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadSpriteImage"])(currentSpritePack.mansionsSrc, true).catch(console.error);
            }
            // Load airplane sprite sheet (always loaded, not dependent on sprite pack)
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadSpriteImage"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AIRPLANE_SPRITE_SRC"], false).catch(console.error);
        };
        // Load secondary sheets after 50ms to prioritize first paint
        const timer = setTimeout(loadSecondarySheets, 50);
        return ()=>clearTimeout(timer);
    }, [
        currentSpritePack
    ]);
    // Building helper functions moved to buildingHelpers.ts
    // Update canvas size on resize with high-DPI support
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateSize = ()=>{
            if (containerRef.current && canvasRef.current) {
                const dpr = window.devicePixelRatio || 1;
                const rect = containerRef.current.getBoundingClientRect();
                // Set display size
                canvasRef.current.style.width = `${rect.width}px`;
                canvasRef.current.style.height = `${rect.height}px`;
                if (hoverCanvasRef.current) {
                    hoverCanvasRef.current.style.width = `${rect.width}px`;
                    hoverCanvasRef.current.style.height = `${rect.height}px`;
                }
                if (carsCanvasRef.current) {
                    carsCanvasRef.current.style.width = `${rect.width}px`;
                    carsCanvasRef.current.style.height = `${rect.height}px`;
                }
                if (buildingsCanvasRef.current) {
                    buildingsCanvasRef.current.style.width = `${rect.width}px`;
                    buildingsCanvasRef.current.style.height = `${rect.height}px`;
                }
                if (airCanvasRef.current) {
                    airCanvasRef.current.style.width = `${rect.width}px`;
                    airCanvasRef.current.style.height = `${rect.height}px`;
                }
                if (lightingCanvasRef.current) {
                    lightingCanvasRef.current.style.width = `${rect.width}px`;
                    lightingCanvasRef.current.style.height = `${rect.height}px`;
                }
                // Set actual size in memory (scaled for DPI)
                setCanvasSize({
                    width: Math.round(rect.width * dpr),
                    height: Math.round(rect.height * dpr)
                });
            }
        };
        updateSize();
        window.addEventListener('resize', updateSize);
        return ()=>window.removeEventListener('resize', updateSize);
    }, []);
    // Main render function - PERF: Uses requestAnimationFrame throttling to batch multiple state updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas || !imagesLoaded) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        // PERF: Cancel any pending render to avoid duplicate work
        if (renderPendingRef.current !== null) {
            cancelAnimationFrame(renderPendingRef.current);
        }
        // PERF: Defer render to next animation frame - batches multiple state updates into one render
        renderPendingRef.current = requestAnimationFrame(()=>{
            renderPendingRef.current = null;
            // PERF: Throttle main renders at 3x speed to reduce dropped frames
            // At high speed, we can skip some renders since simulation ticks are frequent
            const currentSpeed = worldStateRef.current.speed;
            const now = performance.now();
            const timeSinceLastRender = now - lastMainRenderTimeRef.current;
            const minRenderInterval = currentSpeed === 3 ? 50 : 0; // Skip renders within 50ms at 3x speed
            if (timeSinceLastRender < minRenderInterval) {
                return; // Skip this render, next tick will trigger a new one
            }
            lastMainRenderTimeRef.current = now;
            const dpr = window.devicePixelRatio || 1;
            // Disable image smoothing for crisp pixel art
            ctx.imageSmoothingEnabled = false;
            // PERF: Clear canvas with cached gradient background - only recreate when canvas height changes
            const bgCache = bgGradientCacheRef.current;
            if (!bgCache.gradient || bgCache.height !== canvas.height) {
                const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
                gradient.addColorStop(0, '#0f1419');
                gradient.addColorStop(0.5, '#141c24');
                gradient.addColorStop(1, '#1a2a1f');
                bgCache.gradient = gradient;
                bgCache.height = canvas.height;
            }
            ctx.fillStyle = bgCache.gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.save();
            // Scale for device pixel ratio first, then apply zoom
            ctx.scale(dpr * zoom, dpr * zoom);
            ctx.translate(offset.x / zoom, offset.y / zoom);
            // Calculate visible tile range for culling (account for DPR in canvas size)
            const viewWidth = canvas.width / (dpr * zoom);
            const viewHeight = canvas.height / (dpr * zoom);
            const viewLeft = -offset.x / zoom - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_WIDTH"];
            const viewTop = -offset.y / zoom - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] * 2;
            const viewRight = viewWidth - offset.x / zoom + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_WIDTH"];
            const viewBottom = viewHeight - offset.y / zoom + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] * 2;
            // PERF: Pre-compute visible diagonal range to skip entire rows of tiles
            // In isometric rendering, screenY = (x + y) * (TILE_HEIGHT / 2), so sum = x + y = screenY * 2 / TILE_HEIGHT
            // Add padding for tall buildings that may extend above their tile position
            const visibleMinSum = Math.max(0, Math.floor((viewTop - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] * 6) * 2 / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_HEIGHT"]));
            const visibleMaxSum = Math.min(gridSize * 2 - 2, Math.ceil((viewBottom + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_HEIGHT"]) * 2 / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_HEIGHT"]));
            // PERF: Use cached render queue arrays to avoid GC pressure
            // Clear arrays by setting length = 0 (much faster than recreating)
            const queues = renderQueuesRef.current;
            queues.buildingQueue.length = 0;
            queues.waterQueue.length = 0;
            queues.roadQueue.length = 0;
            queues.bridgeQueue.length = 0;
            queues.railQueue.length = 0;
            queues.beachQueue.length = 0;
            queues.baseTileQueue.length = 0;
            queues.greenBaseTileQueue.length = 0;
            queues.overlayQueue.length = 0;
            const buildingQueue = queues.buildingQueue;
            const waterQueue = queues.waterQueue;
            const roadQueue = queues.roadQueue;
            const bridgeQueue = queues.bridgeQueue;
            const railQueue = queues.railQueue;
            const beachQueue = queues.beachQueue;
            const baseTileQueue = queues.baseTileQueue;
            const greenBaseTileQueue = queues.greenBaseTileQueue;
            const overlayQueue = queues.overlayQueue;
            // PERF: Insertion sort for nearly-sorted arrays (O(n) vs O(n log n) for .sort())
            // Since tiles are iterated in diagonal order, queues are already nearly sorted
            function insertionSortByDepth(arr) {
                for(let i = 1; i < arr.length; i++){
                    const current = arr[i];
                    let j = i - 1;
                    // Only move elements that are strictly greater (maintains stability)
                    while(j >= 0 && arr[j].depth > current.depth){
                        arr[j + 1] = arr[j];
                        j--;
                    }
                    arr[j + 1] = current;
                }
            }
            // Helper function to check if a tile is water
            function isWater(gridX, gridY) {
                if (gridX < 0 || gridX >= gridSize || gridY < 0 || gridY >= gridSize) return false;
                return grid[gridY][gridX].building.type === 'water';
            }
            // Helper function to check if a tile has a road or bridge
            function hasRoad(gridX, gridY) {
                if (gridX < 0 || gridX >= gridSize || gridY < 0 || gridY >= gridSize) return false;
                const type = grid[gridY][gridX].building.type;
                return type === 'road' || type === 'bridge';
            }
            // Helper function to check if a tile is a bridge (for beach exclusion)
            function isBridge(gridX, gridY) {
                if (gridX < 0 || gridX >= gridSize || gridY < 0 || gridY >= gridSize) return false;
                return grid[gridY][gridX].building.type === 'bridge';
            }
            // Helper function to check if a tile has a marina dock or pier (no beaches next to these)
            // Also checks 'empty' tiles that are part of multi-tile marina buildings
            function hasMarinaPier(gridX, gridY) {
                if (gridX < 0 || gridX >= gridSize || gridY < 0 || gridY >= gridSize) return false;
                const buildingType = grid[gridY][gridX].building.type;
                if (buildingType === 'marina_docks_small' || buildingType === 'pier_large') return true;
                // Check if this is an 'empty' tile that belongs to a marina (2x2 building)
                // Marina is 2x2, so check up to 1 tile away for the origin
                if (buildingType === 'empty') {
                    for(let dy = 0; dy <= 1; dy++){
                        for(let dx = 0; dx <= 1; dx++){
                            const checkX = gridX - dx;
                            const checkY = gridY - dy;
                            if (checkX >= 0 && checkY >= 0 && checkX < gridSize && checkY < gridSize) {
                                const checkType = grid[checkY][checkX].building.type;
                                if (checkType === 'marina_docks_small') {
                                    // Verify this tile is within the 2x2 footprint
                                    if (gridX >= checkX && gridX < checkX + 2 && gridY >= checkY && gridY < checkY + 2) {
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                }
                return false;
            }
            // Helper to get cached road merge analysis (invalidates when grid changes)
            function getCachedMergeInfo(gx, gy) {
                const currentVersion = gridVersionRef.current;
                if (roadAnalysisCacheVersionRef.current !== currentVersion) {
                    roadAnalysisCacheRef.current.clear();
                    roadAnalysisCacheVersionRef.current = currentVersion;
                }
                const key = `${gx},${gy}`;
                let info = roadAnalysisCacheRef.current.get(key);
                if (!info) {
                    info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$trafficSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analyzeMergedRoad"])(grid, gridSize, gx, gy);
                    roadAnalysisCacheRef.current.set(key, info);
                }
                return info;
            }
            // Create road drawing options for the extracted drawRoad function
            const roadDrawingOptions = {
                hasRoad,
                getMergeInfo: getCachedMergeInfo,
                isMobile,
                isPanning: isPanningRef.current,
                isPinchZooming: isPinchZoomingRef.current,
                trafficLightTimer: trafficLightTimerRef.current
            };
            // Draw isometric tile base
            function drawIsometricTile(ctx, x, y, tile, highlight, currentZoom, skipGreyBase = false, skipGreenBase = false) {
                const w = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_WIDTH"];
                const h = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_HEIGHT"];
                // Determine tile colors (top face and shading)
                let topColor = '#4a7c3f'; // grass
                let strokeColor = '#2d4a26';
                // PERF: Use pre-computed tile metadata for grey base check (O(1) lookup)
                const tileRenderMetadata = getTileMetadata(tile.x, tile.y);
                const isPark = tileRenderMetadata?.isPartOfParkBuilding || [
                    'park',
                    'park_large',
                    'tennis',
                    'basketball_courts',
                    'playground_small',
                    'playground_large',
                    'baseball_field_small',
                    'soccer_field_small',
                    'football_field',
                    'skate_park',
                    'mini_golf_course',
                    'bleachers_field',
                    'go_kart_track',
                    'amphitheater',
                    'greenhouse_garden',
                    'animal_pens_farm',
                    'cabin_house',
                    'campground',
                    'marina_docks_small',
                    'pier_large',
                    'roller_coaster_small',
                    'community_garden',
                    'pond_park',
                    'park_gate',
                    'mountain_lodge',
                    'mountain_trailhead'
                ].includes(tile.building.type);
                const hasGreyBase = tileRenderMetadata?.needsGreyBase ?? false;
                if (tile.building.type === 'water') {
                    topColor = '#2563eb';
                    strokeColor = '#1e3a8a';
                } else if (tile.building.type === 'road' || tile.building.type === 'bridge') {
                    topColor = '#4a4a4a';
                    strokeColor = '#333';
                } else if (isPark) {
                    topColor = '#4a7c3f';
                    strokeColor = '#2d4a26';
                } else if (hasGreyBase && !skipGreyBase) {
                    // Grey/concrete base tiles for ALL buildings (except parks)
                    // Skip if skipGreyBase is true (will be drawn later after water)
                    topColor = '#6b7280';
                    strokeColor = '#374151';
                } else if (tile.zone === 'residential') {
                    if (tile.building.type !== 'grass' && tile.building.type !== 'empty') {
                        topColor = '#3d7c3f';
                    } else {
                        topColor = '#2d5a2d';
                    }
                    strokeColor = '#22c55e';
                } else if (tile.zone === 'commercial') {
                    if (tile.building.type !== 'grass' && tile.building.type !== 'empty') {
                        topColor = '#3a5c7c';
                    } else {
                        topColor = '#2a4a6a';
                    }
                    strokeColor = '#3b82f6';
                } else if (tile.zone === 'industrial') {
                    if (tile.building.type !== 'grass' && tile.building.type !== 'empty') {
                        topColor = '#7c5c3a';
                    } else {
                        topColor = '#6a4a2a';
                    }
                    strokeColor = '#f59e0b';
                }
                // Skip drawing green base for tiles adjacent to water (will be drawn later over water)
                // This includes grass, empty, and tree tiles - all have green bases
                // Also skip bridge tiles - they will have water drawn underneath them in the road queue
                const shouldSkipDrawing = skipGreenBase && (tile.building.type === 'grass' || tile.building.type === 'empty' || tile.building.type === 'tree') || tile.building.type === 'bridge';
                // Draw the isometric diamond (top face)
                if (!shouldSkipDrawing) {
                    ctx.fillStyle = topColor;
                    ctx.beginPath();
                    ctx.moveTo(x + w / 2, y);
                    ctx.lineTo(x + w, y + h / 2);
                    ctx.lineTo(x + w / 2, y + h);
                    ctx.lineTo(x, y + h / 2);
                    ctx.closePath();
                    ctx.fill();
                    // Draw grid lines only when zoomed in (hide when zoom < 0.6)
                    if (currentZoom >= 0.6) {
                        ctx.strokeStyle = strokeColor;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                    // Draw zone border with dashed line (hide when zoomed out, only on grass/empty tiles - not on roads or buildings)
                    if (tile.zone !== 'none' && currentZoom >= 0.95 && (tile.building.type === 'grass' || tile.building.type === 'empty')) {
                        ctx.strokeStyle = tile.zone === 'residential' ? '#22c55e' : tile.zone === 'commercial' ? '#3b82f6' : '#f59e0b';
                        ctx.lineWidth = 1.5;
                        ctx.setLineDash([
                            4,
                            2
                        ]);
                        ctx.stroke();
                        ctx.setLineDash([]);
                    }
                }
                // Highlight on hover/select (always draw, even if base was skipped)
                if (highlight) {
                    // Draw a semi-transparent fill for better visibility
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
                    ctx.beginPath();
                    ctx.moveTo(x + w / 2, y);
                    ctx.lineTo(x + w, y + h / 2);
                    ctx.lineTo(x + w / 2, y + h);
                    ctx.lineTo(x, y + h / 2);
                    ctx.closePath();
                    ctx.fill();
                    // Draw white border
                    ctx.strokeStyle = '#ffffff';
                    ctx.lineWidth = 2;
                    ctx.stroke();
                }
            }
            // Helper function to draw water tile at a given screen position
            // Used for marina/pier buildings that sit on water
            function drawWaterTileAt(ctx, screenX, screenY, gridX, gridY) {
                const waterImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCachedImage"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WATER_ASSET_PATH"]);
                if (!waterImage) return;
                const w = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_WIDTH"];
                const h = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_HEIGHT"];
                const tileCenterX = screenX + w / 2;
                const tileCenterY = screenY + h / 2;
                // Random subcrop of water texture based on tile position for variety
                const imgW = waterImage.naturalWidth || waterImage.width;
                const imgH = waterImage.naturalHeight || waterImage.height;
                // Deterministic "random" offset based on tile position
                const seedX = (gridX * 7919 + gridY * 6271) % 1000 / 1000;
                const seedY = (gridX * 4177 + gridY * 9311) % 1000 / 1000;
                // Take a subcrop for variety
                const cropScale = 0.35;
                const cropW = imgW * cropScale;
                const cropH = imgH * cropScale;
                const maxOffsetX = imgW - cropW;
                const maxOffsetY = imgH - cropH;
                const srcX = seedX * maxOffsetX;
                const srcY = seedY * maxOffsetY;
                ctx.save();
                // Clip to isometric diamond shape
                ctx.beginPath();
                ctx.moveTo(screenX + w / 2, screenY); // top
                ctx.lineTo(screenX + w, screenY + h / 2); // right
                ctx.lineTo(screenX + w / 2, screenY + h); // bottom
                ctx.lineTo(screenX, screenY + h / 2); // left
                ctx.closePath();
                ctx.clip();
                const aspectRatio = cropH / cropW;
                const jitterX = (seedX - 0.5) * w * 0.3;
                const jitterY = (seedY - 0.5) * h * 0.3;
                // Draw water with slight transparency
                const destWidth = w * 1.15;
                const destHeight = destWidth * aspectRatio;
                ctx.globalAlpha = 0.95;
                ctx.drawImage(waterImage, srcX, srcY, cropW, cropH, Math.round(tileCenterX - destWidth / 2 + jitterX * 0.3), Math.round(tileCenterY - destHeight / 2 + jitterY * 0.3), Math.round(destWidth), Math.round(destHeight));
                ctx.restore();
            }
            // Draw building sprite
            function drawBuilding(ctx, x, y, tile) {
                const buildingType = tile.building.type;
                const w = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_WIDTH"];
                const h = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_HEIGHT"];
                // Handle roads separately with adjacency
                if (buildingType === 'road') {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$roadDrawing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawRoad"])(ctx, x, y, tile.x, tile.y, zoom, roadDrawingOptions);
                    return;
                }
                // Handle bridges with special rendering
                if (buildingType === 'bridge') {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$bridgeDrawing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawBridgeTile"])(ctx, x, y, tile.building, tile.x, tile.y, zoom);
                    return;
                }
                // Draw water tiles underneath marina/pier buildings
                if (buildingType === 'marina_docks_small' || buildingType === 'pier_large') {
                    const buildingSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBuildingSize"])(buildingType);
                    // Draw water tiles for each tile in the building's footprint
                    for(let dx = 0; dx < buildingSize.width; dx++){
                        for(let dy = 0; dy < buildingSize.height; dy++){
                            const tileGridX = tile.x + dx;
                            const tileGridY = tile.y + dy;
                            const { screenX, screenY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToScreen"])(tileGridX, tileGridY, 0, 0);
                            drawWaterTileAt(ctx, screenX, screenY, tileGridX, tileGridY);
                        }
                    }
                }
                // Check if this building type has a sprite in the tile renderer, parks sheet, or stations sheet
                const activePack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActiveSpritePack"])();
                const hasTileSprite = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUILDING_TO_SPRITE"][buildingType] || activePack.parksBuildings && activePack.parksBuildings[buildingType] || activePack.stationsVariants && activePack.stationsVariants[buildingType];
                if (hasTileSprite) {
                    // Special handling for water: use separate water.png image with blending for adjacent water tiles
                    if (buildingType === 'water') {
                        const waterImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCachedImage"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WATER_ASSET_PATH"]);
                        // Check which adjacent tiles are also water for blending
                        const gridX = tile.x;
                        const gridY = tile.y;
                        const adjacentWater = {
                            north: gridX > 0 && grid[gridY]?.[gridX - 1]?.building.type === 'water',
                            east: gridY > 0 && grid[gridY - 1]?.[gridX]?.building.type === 'water',
                            south: gridX < gridSize - 1 && grid[gridY]?.[gridX + 1]?.building.type === 'water',
                            west: gridY < gridSize - 1 && grid[gridY + 1]?.[gridX]?.building.type === 'water'
                        };
                        // Count adjacent water tiles
                        const adjacentCount = (adjacentWater.north ? 1 : 0) + (adjacentWater.east ? 1 : 0) + (adjacentWater.south ? 1 : 0) + (adjacentWater.west ? 1 : 0);
                        if (waterImage) {
                            // Center the water sprite on the tile
                            const tileCenterX = x + w / 2;
                            const tileCenterY = y + h / 2;
                            // Random subcrop of water texture based on tile position for variety
                            const imgW = waterImage.naturalWidth || waterImage.width;
                            const imgH = waterImage.naturalHeight || waterImage.height;
                            // Deterministic "random" offset based on tile position
                            const seedX = (gridX * 7919 + gridY * 6271) % 1000 / 1000;
                            const seedY = (gridX * 4177 + gridY * 9311) % 1000 / 1000;
                            // Take a subcrop - use 35% of the image, offset randomly for variety
                            const cropScale = 0.35;
                            const cropW = imgW * cropScale;
                            const cropH = imgH * cropScale;
                            const maxOffsetX = imgW - cropW;
                            const maxOffsetY = imgH - cropH;
                            const srcX = seedX * maxOffsetX;
                            const srcY = seedY * maxOffsetY;
                            // Create a clipping path - expand toward adjacent WATER tiles only
                            // This allows blending between water tiles while preventing bleed onto land
                            const expand = w * 0.4; // How much to expand toward water neighbors
                            // Calculate expanded corners based on water adjacency
                            // North edge (top-left): between left and top corners
                            // East edge (top-right): between top and right corners
                            // South edge (bottom-right): between right and bottom corners
                            // West edge (bottom-left): between bottom and left corners
                            const topY = y - (adjacentWater.north && adjacentWater.east ? expand * 0.5 : 0);
                            const rightX = x + w + (adjacentWater.east && adjacentWater.south ? expand * 0.5 : 0);
                            const bottomY = y + h + (adjacentWater.south && adjacentWater.west ? expand * 0.5 : 0);
                            const leftX = x - (adjacentWater.west && adjacentWater.north ? expand * 0.5 : 0);
                            // Expand individual edges toward water neighbors only
                            // Each edge should only expand if THAT specific edge direction has water
                            const topExpand = adjacentWater.north && adjacentWater.east ? expand * 0.3 : 0;
                            const rightExpand = adjacentWater.east && adjacentWater.south ? expand * 0.3 : 0;
                            const bottomExpand = adjacentWater.south && adjacentWater.west ? expand * 0.3 : 0;
                            const leftExpand = adjacentWater.west && adjacentWater.north ? expand * 0.3 : 0;
                            ctx.save();
                            ctx.beginPath();
                            ctx.moveTo(x + w / 2, topY - topExpand); // top
                            ctx.lineTo(rightX + rightExpand, y + h / 2); // right
                            ctx.lineTo(x + w / 2, bottomY + bottomExpand); // bottom
                            ctx.lineTo(leftX - leftExpand, y + h / 2); // left
                            ctx.closePath();
                            ctx.clip();
                            const aspectRatio = cropH / cropW;
                            const savedAlpha = ctx.globalAlpha;
                            // Jitter for variety
                            const jitterX = (seedX - 0.5) * w * 0.3;
                            const jitterY = (seedY - 0.5) * h * 0.3;
                            // PERF: When zoomed out (zoom < 0.5), use single pass water rendering to reduce draw calls
                            // At low zoom, the blending detail is not visible anyway
                            if (zoom < 0.5) {
                                // Simplified single-pass water at low zoom
                                const destWidth = w * 1.15;
                                const destHeight = destWidth * aspectRatio;
                                ctx.globalAlpha = 0.9;
                                ctx.drawImage(waterImage, srcX, srcY, cropW, cropH, Math.round(tileCenterX - destWidth / 2), Math.round(tileCenterY - destHeight / 2), Math.round(destWidth), Math.round(destHeight));
                            } else if (adjacentCount >= 2) {
                                // Two passes: large soft outer, smaller solid core
                                // Outer pass - large, semi-transparent for blending
                                const outerScale = 2.0 + adjacentCount * 0.3;
                                const outerWidth = w * outerScale;
                                const outerHeight = outerWidth * aspectRatio;
                                ctx.globalAlpha = 0.35;
                                ctx.drawImage(waterImage, srcX, srcY, cropW, cropH, Math.round(tileCenterX - outerWidth / 2 + jitterX), Math.round(tileCenterY - outerHeight / 2 + jitterY), Math.round(outerWidth), Math.round(outerHeight));
                                // Core pass - full opacity
                                const coreScale = 1.1;
                                const coreWidth = w * coreScale;
                                const coreHeight = coreWidth * aspectRatio;
                                ctx.globalAlpha = 0.9;
                                ctx.drawImage(waterImage, srcX, srcY, cropW, cropH, Math.round(tileCenterX - coreWidth / 2 + jitterX * 0.5), Math.round(tileCenterY - coreHeight / 2 + jitterY * 0.5), Math.round(coreWidth), Math.round(coreHeight));
                            } else {
                                // Edge tile with few water neighbors - single contained draw
                                const destWidth = w * 1.15;
                                const destHeight = destWidth * aspectRatio;
                                ctx.globalAlpha = 0.95;
                                ctx.drawImage(waterImage, srcX, srcY, cropW, cropH, Math.round(tileCenterX - destWidth / 2 + jitterX * 0.3), Math.round(tileCenterY - destHeight / 2 + jitterY * 0.3), Math.round(destWidth), Math.round(destHeight));
                            }
                            ctx.globalAlpha = savedAlpha;
                            ctx.restore();
                        } else {
                            // Water image not loaded yet - draw placeholder diamond
                            ctx.fillStyle = '#0ea5e9';
                            ctx.beginPath();
                            ctx.moveTo(x + w / 2, y);
                            ctx.lineTo(x + w, y + h / 2);
                            ctx.lineTo(x + w / 2, y + h);
                            ctx.lineTo(x, y + h / 2);
                            ctx.closePath();
                            ctx.fill();
                        }
                    } else {
                        // ===== TILE RENDERER PATH =====
                        // Handles both single-tile and multi-tile buildings using extracted sprite utilities
                        // Check if building is under construction (constructionProgress < 100)
                        const isUnderConstruction = tile.building.constructionProgress !== undefined && tile.building.constructionProgress < 100;
                        // Construction has two phases:
                        // Phase 1 (0-40%): Foundation/dirt plot phase - just show a dirt mound
                        // Phase 2 (40-100%): Construction scaffolding phase - show construction sprite
                        const constructionProgress = tile.building.constructionProgress ?? 100;
                        const isFoundationPhase = isUnderConstruction && constructionProgress < 40;
                        // If in foundation phase, draw the foundation plot and skip sprite rendering
                        if (isFoundationPhase) {
                            // Get building size to handle multi-tile foundations
                            const buildingSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBuildingSize"])(buildingType);
                            // For multi-tile buildings, we only draw the foundation from the origin tile
                            if (buildingSize.width > 1 || buildingSize.height > 1) {
                                // Draw foundation plots for each tile in the footprint
                                for(let dy = 0; dy < buildingSize.height; dy++){
                                    for(let dx = 0; dx < buildingSize.width; dx++){
                                        const plotX = x + (dx - dy) * (w / 2);
                                        const plotY = y + (dx + dy) * (h / 2);
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$drawing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawFoundationPlot"])(ctx, plotX, plotY, w, h, zoom);
                                    }
                                }
                            } else {
                                // Single-tile building - just draw one foundation
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$drawing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawFoundationPlot"])(ctx, x, y, w, h, zoom);
                            }
                            return;
                        }
                        // Use extracted utilities to determine sprite source, coords, scale, and offsets
                        const spriteSourceInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$buildingSprite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectSpriteSource"])(buildingType, tile.building, tile.x, tile.y, activePack);
                        const filteredSpriteSheet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCachedImage"])(spriteSourceInfo.source, true) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCachedImage"])(spriteSourceInfo.source);
                        if (filteredSpriteSheet) {
                            const sheetWidth = filteredSpriteSheet.naturalWidth || filteredSpriteSheet.width;
                            const sheetHeight = filteredSpriteSheet.naturalHeight || filteredSpriteSheet.height;
                            // Calculate sprite coordinates using extracted utility
                            const coords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$buildingSprite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateSpriteCoords"])(buildingType, spriteSourceInfo, sheetWidth, sheetHeight, activePack);
                            if (coords) {
                                // Calculate scale and offsets using extracted utilities
                                const scaleMultiplier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$buildingSprite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateSpriteScale"])(buildingType, spriteSourceInfo, tile.building, activePack);
                                const offsets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$buildingSprite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateSpriteOffsets"])(buildingType, spriteSourceInfo, tile.building, activePack);
                                // Get building size for positioning
                                const buildingSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBuildingSize"])(buildingType);
                                const isMultiTile = buildingSize.width > 1 || buildingSize.height > 1;
                                // Calculate draw position for multi-tile buildings
                                let drawPosX = x;
                                let drawPosY = y;
                                if (isMultiTile) {
                                    const frontmostOffsetX = buildingSize.width - 1;
                                    const frontmostOffsetY = buildingSize.height - 1;
                                    const screenOffsetX = (frontmostOffsetX - frontmostOffsetY) * (w / 2);
                                    const screenOffsetY = (frontmostOffsetX + frontmostOffsetY) * (h / 2);
                                    drawPosX = x + screenOffsetX;
                                    drawPosY = y + screenOffsetY;
                                }
                                // Calculate destination size
                                const destWidth = w * 1.2 * scaleMultiplier;
                                const aspectRatio = coords.sh / coords.sw;
                                const destHeight = destWidth * aspectRatio;
                                // Calculate final position with offsets
                                const drawX = drawPosX + w / 2 - destWidth / 2 + offsets.horizontal * w;
                                let verticalPush;
                                if (isMultiTile) {
                                    const footprintDepth = buildingSize.width + buildingSize.height - 2;
                                    verticalPush = footprintDepth * h * 0.25;
                                } else {
                                    verticalPush = destHeight * 0.15;
                                }
                                verticalPush += offsets.vertical * h;
                                const drawY = drawPosY + h - destHeight + verticalPush;
                                // Determine flip based on road adjacency or random
                                const isWaterfrontAsset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["requiresWaterAdjacency"])(buildingType);
                                const shouldRoadMirror = (()=>{
                                    if (isWaterfrontAsset) return false;
                                    const originMetadata = getTileMetadata(tile.x, tile.y);
                                    if (originMetadata?.hasAdjacentRoad) {
                                        return originMetadata.shouldFlipForRoad;
                                    }
                                    const mirrorSeed = (tile.x * 47 + tile.y * 83) % 100;
                                    return mirrorSeed < 50;
                                })();
                                const baseFlipped = tile.building.flipped === true;
                                const isFlipped = baseFlipped !== shouldRoadMirror;
                                if (isFlipped) {
                                    ctx.save();
                                    const centerX = Math.round(drawX + destWidth / 2);
                                    ctx.translate(centerX, 0);
                                    ctx.scale(-1, 1);
                                    ctx.translate(-centerX, 0);
                                    ctx.drawImage(filteredSpriteSheet, coords.sx, coords.sy, coords.sw, coords.sh, Math.round(drawX), Math.round(drawY), Math.round(destWidth), Math.round(destHeight));
                                    ctx.restore();
                                } else {
                                    ctx.drawImage(filteredSpriteSheet, coords.sx, coords.sy, coords.sw, coords.sh, Math.round(drawX), Math.round(drawY), Math.round(destWidth), Math.round(destHeight));
                                }
                            }
                        } else {
                            // Sprite sheet not loaded yet - draw placeholder building
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$placeholders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawPlaceholderBuilding"])(ctx, x, y, buildingType, w, h);
                        }
                    }
                }
                // Draw fire effect
                if (tile.building.onFire) {
                    const fireX = x + w / 2;
                    const fireY = y - 10;
                    ctx.fillStyle = 'rgba(255, 100, 0, 0.5)';
                    ctx.beginPath();
                    ctx.ellipse(fireX, fireY, 18, 25, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.fillStyle = 'rgba(255, 200, 0, 0.8)';
                    ctx.beginPath();
                    ctx.ellipse(fireX, fireY + 5, 10, 15, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.fillStyle = 'rgba(255, 255, 200, 0.9)';
                    ctx.beginPath();
                    ctx.ellipse(fireX, fireY + 8, 5, 8, 0, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            // Draw tiles in isometric order (back to front)
            // PERF: Only iterate through diagonal bands that intersect the visible viewport
            for(let sum = visibleMinSum; sum <= visibleMaxSum; sum++){
                for(let x = Math.max(0, sum - gridSize + 1); x <= Math.min(sum, gridSize - 1); x++){
                    const y = sum - x;
                    if (y < 0 || y >= gridSize) continue;
                    const { screenX, screenY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToScreen"])(x, y, 0, 0);
                    // Viewport culling
                    if (screenX + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_WIDTH"] < viewLeft || screenX > viewRight || screenY + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] * 4 < viewTop || screenY > viewBottom) {
                        continue;
                    }
                    const tile = grid[y][x];
                    // PERF: Hover and selection highlights are now rendered on a separate canvas layer
                    // Only keep drag rect and subway station highlights in main render (these change infrequently)
                    // Check if tile is in drag selection rectangle (only show for zoning tools)
                    const isInDragRect = showsDragGrid && dragStartTile && dragEndTile && x >= Math.min(dragStartTile.x, dragEndTile.x) && x <= Math.max(dragStartTile.x, dragEndTile.x) && y >= Math.min(dragStartTile.y, dragEndTile.y) && y <= Math.max(dragStartTile.y, dragEndTile.y);
                    // PERF: Use pre-computed tile metadata (O(1) lookup instead of expensive per-tile calculations)
                    const tileMetadata = getTileMetadata(x, y);
                    const needsGreyBase = tileMetadata?.needsGreyBase ?? false;
                    const needsGreenBaseOverWater = tileMetadata?.needsGreenBaseOverWater ?? false;
                    const needsGreenBaseForPark = tileMetadata?.needsGreenBaseForPark ?? false;
                    // Draw base tile for all tiles (including water), but skip gray bases for buildings and green bases for grass/empty adjacent to water or parks
                    // Highlight subway stations when subway overlay is active
                    const isSubwayStationHighlight = overlayMode === 'subway' && tile.building.type === 'subway_station';
                    drawIsometricTile(ctx, screenX, screenY, tile, !!(isInDragRect || isSubwayStationHighlight), zoom, true, needsGreenBaseOverWater || needsGreenBaseForPark);
                    if (needsGreyBase) {
                        baseTileQueue.push({
                            screenX,
                            screenY,
                            tile,
                            depth: x + y
                        });
                    }
                    if (needsGreenBaseOverWater || needsGreenBaseForPark) {
                        greenBaseTileQueue.push({
                            screenX,
                            screenY,
                            tile,
                            depth: x + y
                        });
                    }
                    // Separate water tiles into their own queue (drawn after base tiles, below other buildings)
                    if (tile.building.type === 'water') {
                        const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBuildingSize"])(tile.building.type);
                        const depth = x + y + size.width + size.height - 2;
                        waterQueue.push({
                            screenX,
                            screenY,
                            tile,
                            depth
                        });
                    } else if (tile.building.type === 'road') {
                        const depth = x + y;
                        roadQueue.push({
                            screenX,
                            screenY,
                            tile,
                            depth
                        });
                    } else if (tile.building.type === 'bridge') {
                        const depth = x + y;
                        bridgeQueue.push({
                            screenX,
                            screenY,
                            tile,
                            depth
                        });
                    } else if (tile.building.type === 'rail') {
                        const depth = x + y;
                        railQueue.push({
                            screenX,
                            screenY,
                            tile,
                            depth
                        });
                    } else if ((tile.building.type === 'grass' || tile.building.type === 'empty') && (tileMetadata?.isAdjacentToWater ?? false)) {
                        beachQueue.push({
                            screenX,
                            screenY,
                            tile,
                            depth: x + y
                        });
                    } else {
                        const isBuilding = tile.building.type !== 'grass' && tile.building.type !== 'empty';
                        if (isBuilding) {
                            const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBuildingSize"])(tile.building.type);
                            const depth = x + y + size.width + size.height - 2;
                            buildingQueue.push({
                                screenX,
                                screenY,
                                tile,
                                depth
                            });
                        }
                    }
                    // For subway overlay, show ALL non-water tiles (valid placement areas + existing subway)
                    // For other overlays, show buildings only
                    const showOverlay = overlayMode !== 'none' && (overlayMode === 'subway' ? tile.building.type !== 'water' // For subway mode, show all non-water tiles
                     : tile.building.type !== 'grass' && tile.building.type !== 'water' && tile.building.type !== 'road');
                    if (showOverlay) {
                        overlayQueue.push({
                            screenX,
                            screenY,
                            tile
                        });
                    }
                }
            }
            // Draw water sprites (after base tiles, below other buildings)
            // Add clipping to prevent water from overflowing map boundaries
            ctx.save();
            // Create clipping path for map boundaries - form a diamond shape around the map
            // Get the four corner tiles of the map
            const topLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToScreen"])(0, 0, 0, 0);
            const topRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToScreen"])(gridSize - 1, 0, 0, 0);
            const bottomRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToScreen"])(gridSize - 1, gridSize - 1, 0, 0);
            const bottomLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToScreen"])(0, gridSize - 1, 0, 0);
            const w = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_WIDTH"];
            const h = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_HEIGHT"];
            // Create clipping path following the outer edges of the map
            // The path goes around the perimeter: top -> right -> bottom -> left -> back to top
            ctx.beginPath();
            // Start at top point (top-left tile's top corner)
            ctx.moveTo(topLeft.screenX + w / 2, topLeft.screenY);
            // Go to right point (top-right tile's right corner)
            ctx.lineTo(topRight.screenX + w, topRight.screenY + h / 2);
            // Go to bottom point (bottom-right tile's bottom corner)
            ctx.lineTo(bottomRight.screenX + w / 2, bottomRight.screenY + h);
            // Go to left point (bottom-left tile's left corner)
            ctx.lineTo(bottomLeft.screenX, bottomLeft.screenY + h / 2);
            // Close the path back to top
            ctx.closePath();
            ctx.clip();
            // PERF: Use insertion sort instead of .sort() - O(n) for nearly-sorted data
            insertionSortByDepth(waterQueue);
            // PERF: Use for loop instead of forEach to avoid function call overhead
            for(let i = 0; i < waterQueue.length; i++){
                const { tile, screenX, screenY } = waterQueue[i];
                drawBuilding(ctx, screenX, screenY, tile);
            }
            ctx.restore(); // Remove clipping after drawing water
            // Draw beaches on water tiles (after water, outside clipping region)
            // Note: waterQueue is already sorted from above
            // PERF: Skip beach rendering when zoomed out - detail is not visible
            if (zoom >= 0.4) {
                // PERF: Use for loop instead of forEach
                for(let i = 0; i < waterQueue.length; i++){
                    const { tile, screenX, screenY } = waterQueue[i];
                    // Compute land adjacency for each edge (opposite of water adjacency)
                    // Only consider tiles within bounds - don't draw beaches on map edges
                    // Also exclude beaches next to marina docks, piers, and bridges (bridges are over water)
                    const adjacentLand = {
                        north: tile.x - 1 >= 0 && tile.x - 1 < gridSize && tile.y >= 0 && tile.y < gridSize && !isWater(tile.x - 1, tile.y) && !hasMarinaPier(tile.x - 1, tile.y) && !isBridge(tile.x - 1, tile.y),
                        east: tile.x >= 0 && tile.x < gridSize && tile.y - 1 >= 0 && tile.y - 1 < gridSize && !isWater(tile.x, tile.y - 1) && !hasMarinaPier(tile.x, tile.y - 1) && !isBridge(tile.x, tile.y - 1),
                        south: tile.x + 1 >= 0 && tile.x + 1 < gridSize && tile.y >= 0 && tile.y < gridSize && !isWater(tile.x + 1, tile.y) && !hasMarinaPier(tile.x + 1, tile.y) && !isBridge(tile.x + 1, tile.y),
                        west: tile.x >= 0 && tile.x < gridSize && tile.y + 1 >= 0 && tile.y + 1 < gridSize && !isWater(tile.x, tile.y + 1) && !hasMarinaPier(tile.x, tile.y + 1) && !isBridge(tile.x, tile.y + 1)
                    };
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$drawing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawBeachOnWater"])(ctx, screenX, screenY, adjacentLand);
                }
            }
            // PERF: Pre-compute tile dimensions once outside loops
            const tileWidth = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_WIDTH"];
            const tileHeight = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_HEIGHT"];
            const halfTileWidth = tileWidth / 2;
            const halfTileHeight = tileHeight / 2;
            // Draw green base tiles for grass/empty tiles adjacent to water BEFORE bridges
            // This ensures bridge railings are drawn on top of the green base tiles
            insertionSortByDepth(greenBaseTileQueue);
            for(let i = 0; i < greenBaseTileQueue.length; i++){
                const { tile, screenX, screenY } = greenBaseTileQueue[i];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$drawing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawGreenBaseTile"])(ctx, screenX, screenY, tile, zoom);
            }
            // Draw roads (above water, needs full redraw including base tile)
            insertionSortByDepth(roadQueue);
            // PERF: Use for loop instead of forEach
            for(let i = 0; i < roadQueue.length; i++){
                const { tile, screenX, screenY } = roadQueue[i];
                // Draw road base tile first (grey diamond)
                ctx.fillStyle = '#4a4a4a';
                ctx.beginPath();
                ctx.moveTo(screenX + halfTileWidth, screenY);
                ctx.lineTo(screenX + tileWidth, screenY + halfTileHeight);
                ctx.lineTo(screenX + halfTileWidth, screenY + tileHeight);
                ctx.lineTo(screenX, screenY + halfTileHeight);
                ctx.closePath();
                ctx.fill();
                // Draw road markings and sidewalks
                drawBuilding(ctx, screenX, screenY, tile);
                // If this road has a rail overlay, draw just the rail tracks (ties and rails, no ballast)
                // Crossing signals/gates are drawn later (after rail tiles) to avoid z-order issues
                if (tile.hasRailOverlay) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$railSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawRailTracksOnly"])(ctx, screenX, screenY, tile.x, tile.y, grid, gridSize, zoom);
                }
            }
            // Draw bridges AFTER roads to ensure bridge decks cover road centerlines
            insertionSortByDepth(bridgeQueue);
            for(let i = 0; i < bridgeQueue.length; i++){
                const { tile, screenX, screenY } = bridgeQueue[i];
                // Draw water tile underneath the bridge
                drawWaterTileAt(ctx, screenX, screenY, tile.x, tile.y);
                // Draw bridge structure
                drawBuilding(ctx, screenX, screenY, tile);
            }
            // Draw rail tracks (above water, similar to roads)
            insertionSortByDepth(railQueue);
            // PERF: Use for loop instead of forEach
            for(let i = 0; i < railQueue.length; i++){
                const { tile, screenX, screenY } = railQueue[i];
                // Draw rail base tile first (dark gravel colored diamond)
                ctx.fillStyle = '#5B6345'; // Dark gravel color for contrast with ballast
                ctx.beginPath();
                ctx.moveTo(screenX + halfTileWidth, screenY);
                ctx.lineTo(screenX + tileWidth, screenY + halfTileHeight);
                ctx.lineTo(screenX + halfTileWidth, screenY + tileHeight);
                ctx.lineTo(screenX, screenY + halfTileHeight);
                ctx.closePath();
                ctx.fill();
                // Draw edge shading for depth
                ctx.strokeStyle = '#4B5335';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(screenX + halfTileWidth, screenY + tileHeight);
                ctx.lineTo(screenX, screenY + halfTileHeight);
                ctx.lineTo(screenX + halfTileWidth, screenY);
                ctx.stroke();
                // Draw the rail tracks
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$railSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawRailTrack"])(ctx, screenX, screenY, tile.x, tile.y, grid, gridSize, zoom);
            }
            // Draw gray building base tiles (after rail, before crossings)
            insertionSortByDepth(baseTileQueue);
            // PERF: Use for loop instead of forEach
            for(let i = 0; i < baseTileQueue.length; i++){
                const { tile, screenX, screenY } = baseTileQueue[i];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$drawing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawGreyBaseTile"])(ctx, screenX, screenY, tile, zoom);
            }
            // Draw suspension bridge towers AGAIN on main canvas after base tiles
            // Draw suspension bridge FRONT towers on main canvas after base tiles
            // Only the front tower is drawn here (back tower was drawn before deck in drawBridgeTile)
            for(let i = 0; i < bridgeQueue.length; i++){
                const { tile, screenX, screenY } = bridgeQueue[i];
                if (tile.building.bridgeType === 'suspension') {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$bridgeDrawing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawSuspensionBridgeTowers"])(ctx, screenX, screenY, tile.building, zoom);
                }
            }
            // Draw railroad crossing signals and gates AFTER base tiles to ensure they appear on top
            // PERF: Build a Set of crossing keys for O(1) lookup instead of calling isRailroadCrossing
            const crossingKeySet = new Set();
            const cachedCrossings = crossingPositionsRef.current;
            for(let i = 0; i < cachedCrossings.length; i++){
                const { x, y } = cachedCrossings[i];
                crossingKeySet.add(y * gridSize + x);
            }
            // PERF: Pre-compute constants used in loop
            const currentTrains = trainsRef.current;
            const currentFlashTimer = crossingFlashTimerRef.current;
            const gateAnglesMap = crossingGateAnglesRef.current;
            // Only iterate roads with rail overlay that are crossings
            // PERF: Use for loop instead of forEach
            for(let i = 0; i < roadQueue.length; i++){
                const { tile, screenX, screenY } = roadQueue[i];
                if (tile.hasRailOverlay) {
                    // PERF: Use numeric key and Set lookup instead of isRailroadCrossing call
                    const crossingKey = tile.y * gridSize + tile.x;
                    if (crossingKeySet.has(crossingKey)) {
                        const gateAngle = gateAnglesMap.get(crossingKey) ?? 0;
                        const crossingState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$railSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCrossingStateForTile"])(currentTrains, tile.x, tile.y);
                        const isActive = crossingState !== 'open';
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$railSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawRailroadCrossing"])(ctx, screenX, screenY, tile.x, tile.y, grid, gridSize, zoom, currentFlashTimer, gateAngle, isActive);
                    }
                }
            }
            // Note: Beach drawing has been moved to water tiles (drawBeachOnWater)
            // The beachQueue is no longer used for drawing beaches on land tiles
            // Draw buildings sorted by depth so multi-tile sprites sit above adjacent tiles
            // NOTE: Building sprites are now drawn on a separate canvas (buildingsCanvasRef) 
            // that renders on top of cars/trains. We render them here so we can use the same
            // drawBuilding function and context.
            insertionSortByDepth(buildingQueue);
            // Render buildings on the buildings canvas (on top of cars/trains)
            const buildingsCanvas = buildingsCanvasRef.current;
            if (buildingsCanvas) {
                // PERF: Only update canvas dimensions if they've changed
                const dpr = window.devicePixelRatio || 1;
                const expectedWidth = Math.round(canvasSize.width);
                const expectedHeight = Math.round(canvasSize.height);
                if (buildingsCanvas.width !== expectedWidth || buildingsCanvas.height !== expectedHeight) {
                    buildingsCanvas.width = expectedWidth;
                    buildingsCanvas.height = expectedHeight;
                }
                const buildingsCtx = buildingsCanvas.getContext('2d');
                if (buildingsCtx) {
                    // Clear buildings canvas
                    buildingsCtx.setTransform(1, 0, 0, 1, 0, 0);
                    buildingsCtx.clearRect(0, 0, buildingsCanvas.width, buildingsCanvas.height);
                    // Apply same transform as main canvas
                    buildingsCtx.scale(dpr, dpr);
                    buildingsCtx.translate(offset.x, offset.y);
                    buildingsCtx.scale(zoom, zoom);
                    // Disable image smoothing for crisp pixel art
                    buildingsCtx.imageSmoothingEnabled = false;
                    // Draw buildings on the buildings canvas
                    // PERF: Use for loop instead of forEach
                    for(let i = 0; i < buildingQueue.length; i++){
                        const { tile, screenX, screenY } = buildingQueue[i];
                        drawBuilding(buildingsCtx, screenX, screenY, tile);
                    }
                    // Draw suspension bridge towers ON TOP of buildings
                    // These need to appear above nearby buildings for proper visual layering
                    for(let i = 0; i < bridgeQueue.length; i++){
                        const { tile, screenX, screenY } = bridgeQueue[i];
                        if (tile.building.bridgeType === 'suspension') {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$bridgeDrawing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawSuspensionBridgeTowers"])(buildingsCtx, screenX, screenY, tile.building, zoom);
                        }
                    }
                    // Draw suspension bridge cables ON TOP of towers
                    for(let i = 0; i < bridgeQueue.length; i++){
                        const { tile, screenX, screenY } = bridgeQueue[i];
                        if (tile.building.bridgeType === 'suspension') {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$bridgeDrawing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawSuspensionBridgeOverlay"])(buildingsCtx, screenX, screenY, tile.building, zoom);
                        }
                    }
                    // NOTE: Recreation pedestrians are now drawn in the animation loop on the air canvas
                    // so their animations are smooth (the buildings canvas only updates when grid changes)
                    // Draw overlays on the buildings canvas so they appear ON TOP of buildings
                    // (The buildings canvas is layered above the main canvas, so overlays must be drawn here)
                    // PERF: Use for loop instead of forEach
                    for(let i = 0; i < overlayQueue.length; i++){
                        const { tile, screenX, screenY } = overlayQueue[i];
                        // Get service coverage for this tile
                        const coverage = {
                            fire: state.services.fire[tile.y][tile.x],
                            police: state.services.police[tile.y][tile.x],
                            health: state.services.health[tile.y][tile.x],
                            education: state.services.education[tile.y][tile.x]
                        };
                        const fillStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$overlays$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOverlayFillStyle"])(overlayMode, tile, coverage);
                        // Only draw if there's actually a color to show
                        if (fillStyle !== 'rgba(0, 0, 0, 0)') {
                            buildingsCtx.fillStyle = fillStyle;
                            buildingsCtx.beginPath();
                            buildingsCtx.moveTo(screenX + halfTileWidth, screenY);
                            buildingsCtx.lineTo(screenX + tileWidth, screenY + halfTileHeight);
                            buildingsCtx.lineTo(screenX + halfTileWidth, screenY + tileHeight);
                            buildingsCtx.lineTo(screenX, screenY + halfTileHeight);
                            buildingsCtx.closePath();
                            buildingsCtx.fill();
                        }
                    }
                    // Draw service radius circles and building highlights for the active overlay
                    if (overlayMode !== 'none' && overlayMode !== 'subway') {
                        const serviceBuildingTypes = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$overlays$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OVERLAY_TO_BUILDING_TYPES"][overlayMode];
                        const circleColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$overlays$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OVERLAY_CIRCLE_COLORS"][overlayMode];
                        const circleFillColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$overlays$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OVERLAY_CIRCLE_FILL_COLORS"][overlayMode];
                        const highlightColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$overlays$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OVERLAY_HIGHLIGHT_COLORS"][overlayMode];
                        // Find all service buildings of this type and draw their radii
                        for(let y = 0; y < gridSize; y++){
                            for(let x = 0; x < gridSize; x++){
                                const tile = grid[y][x];
                                if (!serviceBuildingTypes.includes(tile.building.type)) continue;
                                // Skip buildings under construction
                                if (tile.building.constructionProgress !== undefined && tile.building.constructionProgress < 100) continue;
                                // Skip abandoned buildings (they don't provide coverage in simulation)
                                if (tile.building.abandoned) continue;
                                // Get service config for this building type
                                const config = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SERVICE_CONFIG"][tile.building.type];
                                if (!config || !('range' in config)) continue;
                                // Calculate effective range based on building level (linear increase per level)
                                // Level 1: 100%, Level 2: 120%, Level 3: 140%, Level 4: 160%, Level 5: 180%
                                const baseRange = config.range;
                                const effectiveRange = baseRange * (1 + (tile.building.level - 1) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SERVICE_RANGE_INCREASE_PER_LEVEL"]);
                                const range = Math.floor(effectiveRange);
                                // NOTE: For multi-tile service buildings (e.g. 2x2 hospital, 3x3 university),
                                // coverage is computed from the building's anchor tile (top-left of footprint)
                                // in the simulation. We center the radius on that same tile to keep the
                                // overlay consistent with actual service coverage.
                                const { screenX: bldgScreenX, screenY: bldgScreenY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToScreen"])(x, y, 0, 0);
                                const centerX = bldgScreenX + halfTileWidth;
                                const centerY = bldgScreenY + halfTileHeight;
                                // Draw isometric ellipse for the radius
                                // In isometric view, a circle becomes an ellipse
                                // The radius in tiles needs to be converted to screen pixels
                                const radiusX = range * halfTileWidth;
                                const radiusY = range * halfTileHeight;
                                buildingsCtx.strokeStyle = circleColor;
                                buildingsCtx.lineWidth = 2 / zoom; // Keep line width consistent at different zoom levels
                                buildingsCtx.beginPath();
                                buildingsCtx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
                                buildingsCtx.stroke();
                                // Draw a subtle filled ellipse for better visibility
                                buildingsCtx.fillStyle = circleFillColor;
                                buildingsCtx.fill();
                                // Draw highlight glow around the service building
                                buildingsCtx.strokeStyle = highlightColor;
                                buildingsCtx.lineWidth = 3 / zoom;
                                buildingsCtx.beginPath();
                                buildingsCtx.moveTo(bldgScreenX + halfTileWidth, bldgScreenY);
                                buildingsCtx.lineTo(bldgScreenX + tileWidth, bldgScreenY + halfTileHeight);
                                buildingsCtx.lineTo(bldgScreenX + halfTileWidth, bldgScreenY + tileHeight);
                                buildingsCtx.lineTo(bldgScreenX, bldgScreenY + halfTileHeight);
                                buildingsCtx.closePath();
                                buildingsCtx.stroke();
                                // Draw a dot at the building center
                                buildingsCtx.fillStyle = highlightColor;
                                buildingsCtx.beginPath();
                                buildingsCtx.arc(centerX, centerY, 4 / zoom, 0, Math.PI * 2);
                                buildingsCtx.fill();
                            }
                        }
                    }
                    buildingsCtx.setTransform(1, 0, 0, 1, 0, 0);
                }
            }
            // Draw water body names (after everything else so they're on top)
            if (waterBodies && waterBodies.length > 0) {
                ctx.save();
                ctx.font = `${Math.max(10, 12 / zoom)}px sans-serif`;
                ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
                ctx.lineWidth = 2;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                // Use same viewport calculation as main rendering (accounting for DPR)
                const viewWidth = canvasSize.width / (dpr * zoom);
                const viewHeight = canvasSize.height / (dpr * zoom);
                const viewLeft = -offset.x / zoom - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_WIDTH"];
                const viewTop = -offset.y / zoom - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] * 2;
                const viewRight = viewWidth - offset.x / zoom + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_WIDTH"];
                const viewBottom = viewHeight - offset.y / zoom + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] * 2;
                for (const waterBody of waterBodies){
                    if (waterBody.tiles.length === 0) continue;
                    // Convert grid coordinates to screen coordinates (context is already translated)
                    const { screenX, screenY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToScreen"])(waterBody.centerX, waterBody.centerY, 0, 0);
                    // Only draw if visible on screen (with some padding for text)
                    if (screenX >= viewLeft - 100 && screenX <= viewRight + 100 && screenY >= viewTop - 50 && screenY <= viewBottom + 50) {
                        // Draw text with outline for better visibility, centered on tile
                        ctx.strokeText(waterBody.name, screenX + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2, screenY + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] / 2);
                        ctx.fillText(waterBody.name, screenX + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2, screenY + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] / 2);
                    }
                }
                ctx.restore();
            }
            // Company names are intentionally hover-only to keep the map readable.
            // Swarm communication overlays for LLM call channels.
            const isSwarmOverlay = overlayMode === 'swarm_investor_company' || overlayMode === 'swarm_investor_investor' || overlayMode === 'swarm_company_company' || overlayMode === 'swarm_employee_leadership';
            if (isSwarmOverlay && portfolioCompanyTiles.length > 0) {
                ctx.save();
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                const drawLink = (from, to, color, width = 2 / zoom, dashed = true)=>{
                    ctx.beginPath();
                    ctx.setLineDash(dashed ? [
                        6 / zoom,
                        5 / zoom
                    ] : []);
                    ctx.lineWidth = width;
                    ctx.strokeStyle = color;
                    ctx.moveTo(from.x, from.y);
                    ctx.lineTo(to.x, to.y);
                    ctx.stroke();
                };
                const sortedMarkers = [
                    ...portfolioCompanyTiles
                ].sort((a, b)=>a.y - b.y || a.x - b.x);
                const portfolioMarkers = sortedMarkers.filter((m)=>m.kind !== 'competitor');
                const competitorMarkers = sortedMarkers.filter((m)=>m.kind === 'competitor');
                const fundAnchorTile = sortedMarkers[Math.floor(sortedMarkers.length / 2)] || sortedMarkers[0];
                const fundAnchor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToScreen"])(fundAnchorTile.x, Math.max(0, fundAnchorTile.y - 5), 0, 0);
                const fundAnchorPoint = {
                    x: fundAnchor.screenX + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2,
                    y: fundAnchor.screenY + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] / 2
                };
                const minLinkDistance = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_WIDTH"] * 1.5 / Math.max(0.5, zoom);
                const markerPoint = (marker)=>{
                    const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToScreen"])(marker.x, marker.y, 0, 0);
                    return {
                        x: p.screenX + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2,
                        y: p.screenY + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] / 2
                    };
                };
                const dedupeMarkers = (markers)=>{
                    const seen = new Set();
                    const out = [];
                    for (const marker of markers){
                        const key = `${marker.companyId}:${marker.x}:${marker.y}:${marker.kind}`;
                        if (seen.has(key)) continue;
                        seen.add(key);
                        out.push(marker);
                    }
                    return out;
                };
                const selectReadableTargets = (markers, maxLinks, bucketCount = 14)=>{
                    const candidates = dedupeMarkers(markers).map((marker)=>{
                        const target = markerPoint(marker);
                        const dx = target.x - fundAnchorPoint.x;
                        const dy = target.y - fundAnchorPoint.y;
                        const distance = Math.hypot(dx, dy);
                        return {
                            marker,
                            target,
                            distance,
                            angle: Math.atan2(dy, dx)
                        };
                    }).filter((item)=>item.distance > minLinkDistance).sort((a, b)=>a.distance - b.distance);
                    const byBucket = new Map();
                    for (const item of candidates){
                        const bucket = Math.floor((item.angle + Math.PI) / (Math.PI * 2) * bucketCount);
                        if (!byBucket.has(bucket)) {
                            byBucket.set(bucket, item);
                        }
                    }
                    return [
                        ...byBucket.values()
                    ].sort((a, b)=>a.angle - b.angle).slice(0, maxLinks);
                };
                if (overlayMode === 'swarm_investor_company') {
                    const primaryPortfolio = portfolioMarkers.filter((m)=>m.kind === 'portfolio');
                    const targets = selectReadableTargets(primaryPortfolio, 12);
                    for (const { target } of targets){
                        drawLink(fundAnchorPoint, target, 'rgba(232, 121, 249, 0.95)', 2.2 / zoom, true);
                    }
                } else if (overlayMode === 'swarm_investor_investor') {
                    const rivals = investorSession?.rivalInvestors || [
                        'Rival A',
                        'Rival B',
                        'Rival C'
                    ];
                    const radius = 5;
                    rivals.slice(0, 4).forEach((_, idx)=>{
                        const angle = Math.PI * 2 * idx / Math.max(1, Math.min(4, rivals.length));
                        const rx = Math.round(fundAnchorTile.x + Math.cos(angle) * radius);
                        const ry = Math.round(fundAnchorTile.y + Math.sin(angle) * radius);
                        const rival = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToScreen"])(rx, ry, 0, 0);
                        const rivalPoint = {
                            x: rival.screenX + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2,
                            y: rival.screenY + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] / 2
                        };
                        drawLink(fundAnchorPoint, rivalPoint, 'rgba(129, 140, 248, 0.95)', 2.1 / zoom, true);
                        ctx.beginPath();
                        ctx.setLineDash([]);
                        ctx.fillStyle = 'rgba(129, 140, 248, 0.95)';
                        ctx.arc(rivalPoint.x, rivalPoint.y, 2.5 / zoom, 0, Math.PI * 2);
                        ctx.fill();
                    });
                } else if (overlayMode === 'swarm_company_company') {
                    const chainSource = competitorMarkers.length > 1 ? competitorMarkers : portfolioMarkers;
                    const chain = selectReadableTargets(chainSource, 10).map((item)=>item.marker);
                    for(let i = 0; i < chain.length - 1; i++){
                        const a = markerPoint(chain[i]);
                        const b = markerPoint(chain[i + 1]);
                        drawLink(a, b, 'rgba(52, 211, 153, 0.95)', 2 / zoom, true);
                    }
                } else if (overlayMode === 'swarm_employee_leadership') {
                    for (const marker of portfolioMarkers){
                        const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToScreen"])(marker.x, marker.y, 0, 0);
                        const px = p.screenX + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2;
                        const py = p.screenY + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] / 2;
                        drawLink({
                            x: px - 8 / zoom,
                            y: py + 8 / zoom
                        }, {
                            x: px + 8 / zoom,
                            y: py - 8 / zoom
                        }, 'rgba(34, 211, 238, 0.95)', 2 / zoom, false);
                    }
                }
                ctx.restore();
            }
            ctx.restore();
        }); // End requestAnimationFrame callback
        // PERF: Cleanup - cancel pending render on unmount or deps change
        return ()=>{
            if (renderPendingRef.current !== null) {
                cancelAnimationFrame(renderPendingRef.current);
                renderPendingRef.current = null;
            }
        };
    // PERF: hoveredTile and selectedTile removed from deps - now rendered on separate hover canvas layer
    }, [
        grid,
        gridSize,
        offset,
        zoom,
        overlayMode,
        imagesLoaded,
        imageLoadVersion,
        canvasSize,
        dragStartTile,
        dragEndTile,
        state.services,
        currentSpritePack,
        waterBodies,
        portfolioCompanyTiles,
        investorSession,
        getTileMetadata,
        showsDragGrid,
        isMobile
    ]);
    // PERF: Lightweight hover/selection overlay - renders ONLY tile highlights
    // This runs frequently (on mouse move) but is extremely fast since it only draws simple shapes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = hoverCanvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const dpr = window.devicePixelRatio || 1;
        // Clear the hover canvas
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Apply transform (same as main canvas)
        ctx.scale(dpr, dpr);
        ctx.translate(offset.x, offset.y);
        ctx.scale(zoom, zoom);
        // Helper to draw highlight diamond
        const drawHighlight = (screenX, screenY, color = 'rgba(255, 255, 255, 0.25)', strokeColor = '#ffffff')=>{
            const w = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_WIDTH"];
            const h = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_HEIGHT"];
            // Draw semi-transparent fill
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(screenX + w / 2, screenY);
            ctx.lineTo(screenX + w, screenY + h / 2);
            ctx.lineTo(screenX + w / 2, screenY + h);
            ctx.lineTo(screenX, screenY + h / 2);
            ctx.closePath();
            ctx.fill();
            // Draw border
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = 2;
            ctx.stroke();
        };
        // Draw hovered tile highlight (with multi-tile preview for buildings)
        if (hoveredTile && hoveredTile.x >= 0 && hoveredTile.x < gridSize && hoveredTile.y >= 0 && hoveredTile.y < gridSize) {
            // Check if selectedTool is a building type (not a non-building tool)
            const nonBuildingTools = [
                'select',
                'bulldoze',
                'road',
                'rail',
                'subway',
                'tree',
                'zone_residential',
                'zone_commercial',
                'zone_industrial',
                'zone_dezone',
                'zone_water',
                'zone_land'
            ];
            const isBuildingTool = selectedTool && !nonBuildingTools.includes(selectedTool);
            if (isBuildingTool) {
                // Get building size and draw preview for all tiles in footprint
                const buildingType = selectedTool;
                const buildingSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBuildingSize"])(buildingType);
                // Draw highlight for each tile in the building footprint
                for(let dx = 0; dx < buildingSize.width; dx++){
                    for(let dy = 0; dy < buildingSize.height; dy++){
                        const tx = hoveredTile.x + dx;
                        const ty = hoveredTile.y + dy;
                        if (tx >= 0 && tx < gridSize && ty >= 0 && ty < gridSize) {
                            const { screenX, screenY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToScreen"])(tx, ty, 0, 0);
                            drawHighlight(screenX, screenY);
                        }
                    }
                }
            } else {
                // Single tile highlight for non-building tools
                const { screenX, screenY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToScreen"])(hoveredTile.x, hoveredTile.y, 0, 0);
                drawHighlight(screenX, screenY);
            }
            // Show hovered portfolio company name in-map (same style as water labels).
            const hoveredOrigin = findBuildingOrigin(hoveredTile.x, hoveredTile.y);
            const hoverKey = hoveredOrigin ? `${hoveredOrigin.originX},${hoveredOrigin.originY}` : `${hoveredTile.x},${hoveredTile.y}`;
            const hoveredPortfolio = portfolioTileByKey.get(hoverKey);
            if (hoveredPortfolio) {
                const targetX = hoveredOrigin ? hoveredOrigin.originX : hoveredTile.x;
                const targetY = hoveredOrigin ? hoveredOrigin.originY : hoveredTile.y;
                const { screenX, screenY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToScreen"])(targetX, targetY, 0, 0);
                const companyName = hoveredPortfolio.name.length > 30 ? `${hoveredPortfolio.name.slice(0, 29)}…` : hoveredPortfolio.name;
                const label = `${hoveredPortfolio.kind === 'competitor' ? '[C]' : hoveredPortfolio.kind === 'opportunity' ? '[O]' : '[P]'} ${companyName}`;
                ctx.save();
                const fontSize = Math.max(12, 13 / zoom);
                ctx.font = `600 ${fontSize}px sans-serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                // Draw a readable capsule above entity footprint.
                const textWidth = ctx.measureText(label).width;
                const padX = 8 / zoom;
                const padY = 4 / zoom;
                const badgeW = textWidth + padX * 2;
                const badgeH = fontSize + padY * 2;
                const badgeX = screenX + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2 - badgeW / 2;
                const badgeY = screenY - 28 / zoom - badgeH;
                let fg = 'rgba(56, 189, 248, 0.98)';
                if (hoveredPortfolio.kind === 'competitor') fg = 'rgba(244, 114, 182, 0.98)';
                if (hoveredPortfolio.kind === 'opportunity') fg = 'rgba(251, 191, 36, 0.99)';
                ctx.fillStyle = 'rgba(2, 6, 23, 0.94)';
                ctx.strokeStyle = fg;
                ctx.lineWidth = Math.max(1, 1.4 / zoom);
                ctx.beginPath();
                ctx.roundRect(badgeX, badgeY, badgeW, badgeH, 6 / zoom);
                ctx.fill();
                ctx.stroke();
                ctx.fillStyle = fg;
                ctx.fillText(label, badgeX + badgeW / 2, badgeY + badgeH / 2 + 0.5);
                ctx.restore();
            }
        }
        // Draw selected tile highlight (including multi-tile buildings)
        if (selectedTile && selectedTile.x >= 0 && selectedTile.x < gridSize && selectedTile.y >= 0 && selectedTile.y < gridSize) {
            const selectedOrigin = grid[selectedTile.y]?.[selectedTile.x];
            if (selectedOrigin) {
                const selectedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBuildingSize"])(selectedOrigin.building.type);
                // Draw highlight for each tile in the building footprint
                for(let dx = 0; dx < selectedSize.width; dx++){
                    for(let dy = 0; dy < selectedSize.height; dy++){
                        const tx = selectedTile.x + dx;
                        const ty = selectedTile.y + dy;
                        if (tx >= 0 && tx < gridSize && ty >= 0 && ty < gridSize) {
                            const { screenX, screenY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToScreen"])(tx, ty, 0, 0);
                            drawHighlight(screenX, screenY, 'rgba(100, 200, 255, 0.3)', '#60a5fa');
                        }
                    }
                }
            }
        }
        // Draw road/rail drag preview with bridge validity indication
        if (isDragging && (selectedTool === 'road' || selectedTool === 'rail') && dragStartTile && dragEndTile) {
            const minX = Math.min(dragStartTile.x, dragEndTile.x);
            const maxX = Math.max(dragStartTile.x, dragEndTile.x);
            const minY = Math.min(dragStartTile.y, dragEndTile.y);
            const maxY = Math.max(dragStartTile.y, dragEndTile.y);
            // Collect all tiles in the path
            const pathTiles = [];
            for(let x = minX; x <= maxX; x++){
                for(let y = minY; y <= maxY; y++){
                    if (x >= 0 && x < gridSize && y >= 0 && y < gridSize) {
                        const tile = grid[y][x];
                        pathTiles.push({
                            x,
                            y,
                            isWater: tile.building.type === 'water'
                        });
                    }
                }
            }
            // Analyze the path for bridge validity
            // A valid bridge: water tiles that are bounded by land/road on both ends
            // An invalid partial crossing: water tiles that don't form a complete bridge
            const analyzePathForBridges = ()=>{
                const result = new Map();
                // Determine if this is a horizontal or vertical path
                const isHorizontal = maxX - minX > maxY - minY;
                // Sort tiles by their position along the path
                const sortedTiles = [
                    ...pathTiles
                ].sort((a, b)=>isHorizontal ? a.x - b.x : a.y - b.y);
                // Find water segments and check if they're valid bridges
                let i = 0;
                while(i < sortedTiles.length){
                    const tile = sortedTiles[i];
                    if (!tile.isWater) {
                        // Land tile - always valid
                        result.set(`${tile.x},${tile.y}`, 'land');
                        i++;
                        continue;
                    }
                    // Found water - find the extent of this water segment
                    const waterStart = i;
                    while(i < sortedTiles.length && sortedTiles[i].isWater){
                        i++;
                    }
                    const waterEnd = i - 1;
                    const waterLength = waterEnd - waterStart + 1;
                    // Check if this water segment is bounded by land on both sides
                    const hasLandBefore = waterStart > 0 && !sortedTiles[waterStart - 1].isWater;
                    const hasLandAfter = waterEnd < sortedTiles.length - 1 && !sortedTiles[waterEnd + 1].isWater;
                    // Also check if there's existing land/road adjacent to the start/end of path
                    let hasExistingLandBefore = false;
                    let hasExistingLandAfter = false;
                    if (waterStart === 0) {
                        // Check the tile before the path start
                        const firstWater = sortedTiles[waterStart];
                        const checkX = isHorizontal ? firstWater.x - 1 : firstWater.x;
                        const checkY = isHorizontal ? firstWater.y : firstWater.y - 1;
                        if (checkX >= 0 && checkY >= 0 && checkX < gridSize && checkY < gridSize) {
                            const prevTile = grid[checkY][checkX];
                            hasExistingLandBefore = prevTile.building.type !== 'water';
                        }
                    }
                    if (waterEnd === sortedTiles.length - 1) {
                        // Check the tile after the path end
                        const lastWater = sortedTiles[waterEnd];
                        const checkX = isHorizontal ? lastWater.x + 1 : lastWater.x;
                        const checkY = isHorizontal ? lastWater.y : lastWater.y + 1;
                        if (checkX >= 0 && checkY >= 0 && checkX < gridSize && checkY < gridSize) {
                            const nextTile = grid[checkY][checkX];
                            hasExistingLandAfter = nextTile.building.type !== 'water';
                        }
                    }
                    const isValidBridge = (hasLandBefore || hasExistingLandBefore) && (hasLandAfter || hasExistingLandAfter) && waterLength <= 10; // Max bridge span
                    // Mark all water tiles in this segment
                    for(let j = waterStart; j <= waterEnd; j++){
                        const waterTile = sortedTiles[j];
                        result.set(`${waterTile.x},${waterTile.y}`, isValidBridge ? 'valid' : 'invalid');
                    }
                }
                return result;
            };
            const bridgeAnalysis = analyzePathForBridges();
            // Draw preview for each tile in the path
            for (const tile of pathTiles){
                const { screenX, screenY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToScreen"])(tile.x, tile.y, 0, 0);
                const key = `${tile.x},${tile.y}`;
                const status = bridgeAnalysis.get(key) || 'land';
                if (status === 'valid') {
                    // Valid bridge - show blue/cyan placeholder
                    drawHighlight(screenX, screenY, 'rgba(59, 130, 246, 0.5)', '#3b82f6');
                } else if (status === 'invalid') {
                    // Invalid water crossing - show red
                    drawHighlight(screenX, screenY, 'rgba(239, 68, 68, 0.5)', '#ef4444');
                }
            // Land tiles don't need special preview - they're already being placed
            }
        }
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }, [
        hoveredTile,
        selectedTile,
        selectedTool,
        offset,
        zoom,
        gridSize,
        grid,
        isDragging,
        dragStartTile,
        dragEndTile,
        findBuildingOrigin,
        portfolioTileByKey
    ]);
    // Animate decorative car traffic AND emergency vehicles on top of the base canvas
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = carsCanvasRef.current;
        const airCanvas = airCanvasRef.current;
        if (!canvas || !airCanvas) return;
        const ctx = canvas.getContext('2d');
        const airCtx = airCanvas.getContext('2d');
        if (!ctx || !airCtx) return;
        ctx.imageSmoothingEnabled = false;
        airCtx.imageSmoothingEnabled = false;
        const clearAirCanvas = ()=>{
            airCtx.setTransform(1, 0, 0, 1, 0, 0);
            airCtx.clearRect(0, 0, airCanvas.width, airCanvas.height);
        };
        let animationFrameId;
        let lastTime = performance.now();
        let lastRenderTime = 0;
        // Target 30fps on mobile (33ms per frame), 60fps on desktop (16ms per frame)
        const targetFrameTime = isMobile ? 33 : 16;
        const render = (time)=>{
            animationFrameId = requestAnimationFrame(render);
            // Frame rate limiting for mobile - skip frames to maintain target FPS
            const timeSinceLastRender = time - lastRenderTime;
            if (isMobile && timeSinceLastRender < targetFrameTime) {
                return; // Skip this frame on mobile to reduce CPU load
            }
            const delta = Math.min((time - lastTime) / 1000, 0.3);
            lastTime = time;
            lastRenderTime = time;
            // PERF: Skip ALL vehicle/entity updates during mobile panning/zooming (not just drawing)
            // This provides a massive performance boost for big cities on mobile
            const skipMobileUpdates = isMobile && (isPanningRef.current || isPinchZoomingRef.current);
            if (delta > 0 && !skipMobileUpdates) {
                updateCars(delta);
                updateBuses(delta);
                spawnCrimeIncidents(delta); // Spawn new crime incidents
                updateCrimeIncidents(delta); // Update/decay crime incidents
                updateEmergencyVehicles(delta); // Update emergency vehicles!
                updatePedestrians(delta); // Update pedestrians (zoom-gated)
                updateAirplanes(delta); // Update airplanes (airport required)
                updateHelicopters(delta); // Update helicopters (hospital/airport required)
                updateSeaplanes(delta); // Update seaplanes (bay/large water required)
                updateBoats(delta); // Update boats (marina/pier required)
                updateBarges(delta); // Update ocean barges (ocean marinas required)
                updateTrains(delta); // Update trains on rail network
                updateFireworks(delta, visualHour); // Update fireworks (nighttime only)
                updateSmog(delta); // Update factory smog particles
                updateClouds(delta, visualHour); // Update atmospheric clouds
                navLightFlashTimerRef.current += delta * 3; // Update nav light flash timer
                trafficLightTimerRef.current += delta; // Update traffic light cycle timer
                crossingFlashTimerRef.current += delta; // Update crossing flash timer
                // Update railroad crossing gate angles based on train proximity
                // PERF: Use cached crossing positions instead of O(n²) grid scan
                const trains = trainsRef.current;
                const gateAngles = crossingGateAnglesRef.current;
                // PERF: Access speed via worldStateRef to avoid animation restart on speed change
                const currentSpeed = worldStateRef.current.speed;
                const gateSpeedMult = currentSpeed === 0 ? 0 : currentSpeed === 1 ? 1 : currentSpeed === 2 ? 2.5 : 4;
                const crossings = crossingPositionsRef.current;
                const currentGridSize = worldStateRef.current.gridSize;
                // Iterate only over known crossings (O(k) where k = number of crossings)
                for(let i = 0; i < crossings.length; i++){
                    const { x: gx, y: gy } = crossings[i];
                    // PERF: Use numeric key instead of string concatenation
                    const key = gy * currentGridSize + gx;
                    const currentAngle = gateAngles.get(key) ?? 0;
                    const crossingState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$railSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCrossingStateForTile"])(trains, gx, gy);
                    // Determine target angle based on state
                    const targetAngle = crossingState === 'open' ? 0 : 90;
                    // Animate gate toward target
                    if (currentAngle !== targetAngle) {
                        const angleDelta = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$railSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GATE_ANIMATION_SPEED"] * delta * gateSpeedMult;
                        if (currentAngle < targetAngle) {
                            gateAngles.set(key, Math.min(targetAngle, currentAngle + angleDelta));
                        } else {
                            gateAngles.set(key, Math.max(targetAngle, currentAngle - angleDelta));
                        }
                    }
                }
            }
            // PERF: Skip drawing animated elements during mobile panning/zooming for better performance
            const skipAnimatedElements = isMobile && (isPanningRef.current || isPinchZoomingRef.current);
            // PERF: Skip small elements (boats, helis, smog) on desktop when panning while very zoomed out
            const skipSmallElements = !isMobile && isPanningRef.current && zoomRef.current < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SKIP_SMALL_ELEMENTS_ZOOM_THRESHOLD"];
            if (skipAnimatedElements) {
                // Clear the canvases but don't draw anything - hides all animated elements while panning/zooming
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                clearAirCanvas();
            } else {
                drawCars(ctx);
                drawBuses(ctx);
                if (!skipSmallElements) {
                    drawBoats(ctx); // Draw boats on water (skip when panning zoomed out on desktop)
                }
                drawBarges(ctx); // Draw ocean barges (larger, keep visible)
                drawTrainsCallback(ctx); // Draw trains on rail network
                if (!skipSmallElements) {
                    drawSmog(ctx); // Draw factory smog (skip when panning zoomed out on desktop)
                }
                drawPedestrians(ctx); // Draw walking pedestrians (below buildings)
                drawEmergencyVehicles(ctx); // Draw emergency vehicles!
                clearAirCanvas();
                // Draw incident indicators on air canvas (above buildings so tooltips are visible)
                drawIncidentIndicators(airCtx, delta); // Draw fire/crime incident indicators!
                // Draw recreation pedestrians on air canvas (above parks, not other buildings)
                drawRecreationPedestrians(airCtx); // Draw recreation pedestrians (at parks, benches, etc.)
                if (!skipSmallElements) {
                    drawHelicopters(airCtx); // Draw helicopters (skip when panning zoomed out on desktop)
                    drawSeaplanes(airCtx); // Draw seaplanes (skip when panning zoomed out on desktop)
                }
                drawClouds(airCtx, visualHour); // Draw atmospheric clouds (above helicopters)
                drawAirplanes(airCtx); // Draw airplanes above clouds
                drawFireworks(airCtx); // Draw fireworks above everything (nighttime only)
            }
        };
        animationFrameId = requestAnimationFrame(render);
        return ()=>cancelAnimationFrame(animationFrameId);
    // PERF: Removed grid, gridSize, speed from deps - they're accessed via worldStateRef to avoid restarting animation on every tick
    }, [
        canvasSize.width,
        canvasSize.height,
        updateCars,
        updateBuses,
        drawCars,
        drawBuses,
        spawnCrimeIncidents,
        updateCrimeIncidents,
        updateEmergencyVehicles,
        drawEmergencyVehicles,
        updatePedestrians,
        drawPedestrians,
        drawRecreationPedestrians,
        updateAirplanes,
        drawAirplanes,
        updateHelicopters,
        drawHelicopters,
        updateSeaplanes,
        drawSeaplanes,
        updateBoats,
        drawBoats,
        updateBarges,
        drawBarges,
        updateTrains,
        drawTrainsCallback,
        drawIncidentIndicators,
        updateFireworks,
        drawFireworks,
        updateSmog,
        drawSmog,
        updateClouds,
        drawClouds,
        visualHour,
        isMobile
    ]);
    // Day/Night cycle lighting rendering - extracted to useLightingSystem hook
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$lightingSystem$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLightingSystem"])({
        canvasRef: lightingCanvasRef,
        worldStateRef,
        visualHour,
        offset,
        zoom,
        canvasWidth: canvasSize.width,
        canvasHeight: canvasSize.height,
        isMobile,
        isPanningRef,
        isPinchZoomingRef,
        isWheelZoomingRef,
        isPanning,
        isWheelZooming
    });
    const handleMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (e.button === 1 || e.button === 0 && e.altKey) {
            setIsPanning(true);
            setDragStart({
                x: e.clientX - offset.x,
                y: e.clientY - offset.y
            });
            panCandidateRef.current = null;
            e.preventDefault();
            return;
        }
        if (e.button === 0) {
            const rect = containerRef.current?.getBoundingClientRect();
            if (rect) {
                const mouseX = (e.clientX - rect.left) / zoom;
                const mouseY = (e.clientY - rect.top) / zoom;
                const { gridX, gridY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["screenToGrid"])(mouseX, mouseY, offset.x / zoom, offset.y / zoom);
                const isInsideGrid = gridX >= 0 && gridX < gridSize && gridY >= 0 && gridY < gridSize;
                if (!isInsideGrid) {
                    setIsPanning(true);
                    setDragStart({
                        x: e.clientX - offset.x,
                        y: e.clientY - offset.y
                    });
                    panCandidateRef.current = null;
                    return;
                }
                if (selectedTool === 'select') {
                    const tile = grid[gridY]?.[gridX];
                    const isOpenTile = tile?.building.type === 'empty' || tile?.building.type === 'grass' || tile?.building.type === 'water';
                    if (isOpenTile) {
                        panCandidateRef.current = {
                            startX: e.clientX,
                            startY: e.clientY,
                            gridX,
                            gridY
                        };
                        return;
                    }
                    panCandidateRef.current = null;
                    // For multi-tile buildings, select the origin tile
                    const origin = findBuildingOrigin(gridX, gridY);
                    if (origin) {
                        setSelectedTile({
                            x: origin.originX,
                            y: origin.originY
                        });
                    } else {
                        setSelectedTile({
                            x: gridX,
                            y: gridY
                        });
                    }
                } else if (showsDragGrid) {
                    panCandidateRef.current = null;
                    // Start drag rectangle selection for zoning tools
                    setDragStartTile({
                        x: gridX,
                        y: gridY
                    });
                    setDragEndTile({
                        x: gridX,
                        y: gridY
                    });
                    setIsDragging(true);
                } else if (supportsDragPlace) {
                    panCandidateRef.current = null;
                    // For roads, bulldoze, and other tools, start drag-to-place
                    setDragStartTile({
                        x: gridX,
                        y: gridY
                    });
                    setDragEndTile({
                        x: gridX,
                        y: gridY
                    });
                    setIsDragging(true);
                    // Reset road drawing state for new drag
                    setRoadDrawDirection(null);
                    placedRoadTilesRef.current.clear();
                    // Place immediately on first click
                    placeAtTile(gridX, gridY);
                    // Track initial tile for roads, rail, and subways
                    if (selectedTool === 'road' || selectedTool === 'rail' || selectedTool === 'subway') {
                        placedRoadTilesRef.current.add(`${gridX},${gridY}`);
                    }
                }
            }
        }
    }, [
        offset,
        gridSize,
        selectedTool,
        placeAtTile,
        zoom,
        showsDragGrid,
        supportsDragPlace,
        setSelectedTile,
        findBuildingOrigin,
        grid
    ]);
    // Calculate camera bounds based on grid size
    const getMapBounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((currentZoom, canvasW, canvasH)=>{
        const n = gridSize;
        const padding = 100; // Allow some over-scroll
        // Map bounds in world coordinates
        const mapLeft = -(n - 1) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2;
        const mapRight = (n - 1) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2;
        const mapTop = 0;
        const mapBottom = (n - 1) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_HEIGHT"];
        const minOffsetX = padding - mapRight * currentZoom;
        const maxOffsetX = canvasW - padding - mapLeft * currentZoom;
        const minOffsetY = padding - mapBottom * currentZoom;
        const maxOffsetY = canvasH - padding - mapTop * currentZoom;
        return {
            minOffsetX,
            maxOffsetX,
            minOffsetY,
            maxOffsetY
        };
    }, [
        gridSize
    ]);
    // Clamp offset to keep camera within reasonable bounds
    const clampOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newOffset, currentZoom)=>{
        const bounds = getMapBounds(currentZoom, canvasSize.width, canvasSize.height);
        return {
            x: Math.max(bounds.minOffsetX, Math.min(bounds.maxOffsetX, newOffset.x)),
            y: Math.max(bounds.minOffsetY, Math.min(bounds.maxOffsetY, newOffset.y))
        };
    }, [
        getMapBounds,
        canvasSize.width,
        canvasSize.height
    ]);
    // Handle minimap navigation - center the view on the target tile
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!navigationTarget) return;
        // Convert grid coordinates to screen coordinates
        const { screenX, screenY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridToScreen"])(navigationTarget.x, navigationTarget.y, 0, 0);
        // Calculate offset to center this position on the canvas
        const centerX = canvasSize.width / 2;
        const centerY = canvasSize.height / 2;
        const newOffset = {
            x: centerX - screenX * zoom,
            y: centerY - screenY * zoom
        };
        // Clamp and set the new offset - this is a legitimate use case for responding to navigation requests
        const bounds = getMapBounds(zoom, canvasSize.width, canvasSize.height);
        setOffset({
            x: Math.max(bounds.minOffsetX, Math.min(bounds.maxOffsetX, newOffset.x)),
            y: Math.max(bounds.minOffsetY, Math.min(bounds.maxOffsetY, newOffset.y))
        });
        // Signal that navigation is complete
        onNavigationComplete?.();
    }, [
        navigationTarget,
        zoom,
        canvasSize.width,
        canvasSize.height,
        getMapBounds,
        onNavigationComplete
    ]);
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (!isPanning && panCandidateRef.current) {
            const { startX, startY } = panCandidateRef.current;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            if (Math.abs(dx) >= PAN_DRAG_THRESHOLD || Math.abs(dy) >= PAN_DRAG_THRESHOLD) {
                setIsPanning(true);
                setDragStart({
                    x: startX - offset.x,
                    y: startY - offset.y
                });
                panCandidateRef.current = null;
                const newOffset = {
                    x: e.clientX - (startX - offset.x),
                    y: e.clientY - (startY - offset.y)
                };
                setOffset(clampOffset(newOffset, zoom));
                return;
            }
        }
        if (isPanning) {
            const newOffset = {
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y
            };
            setOffset(clampOffset(newOffset, zoom));
            return;
        }
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
            const mouseX = (e.clientX - rect.left) / zoom;
            const mouseY = (e.clientY - rect.top) / zoom;
            const { gridX, gridY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["screenToGrid"])(mouseX, mouseY, offset.x / zoom, offset.y / zoom);
            if (gridX >= 0 && gridX < gridSize && gridY >= 0 && gridY < gridSize) {
                // Only update hovered tile if it actually changed to avoid unnecessary re-renders
                setHoveredTile((prev)=>prev?.x === gridX && prev?.y === gridY ? prev : {
                        x: gridX,
                        y: gridY
                    });
                // Check for fire or crime incidents at this tile for tooltip display
                const tile = grid[gridY]?.[gridX];
                const crimeKey = `${gridX},${gridY}`;
                const crimeIncident = activeCrimeIncidentsRef.current.get(crimeKey);
                if (tile?.building.onFire) {
                    // Fire incident
                    setHoveredIncident({
                        x: gridX,
                        y: gridY,
                        type: 'fire',
                        screenX: e.clientX,
                        screenY: e.clientY
                    });
                } else if (crimeIncident) {
                    // Crime incident
                    setHoveredIncident({
                        x: gridX,
                        y: gridY,
                        type: 'crime',
                        crimeType: crimeIncident.type,
                        screenX: e.clientX,
                        screenY: e.clientY
                    });
                } else {
                    // No incident at this tile
                    setHoveredIncident(null);
                }
                // Update drag rectangle end point for zoning tools
                if (isDragging && showsDragGrid && dragStartTile) {
                    setDragEndTile({
                        x: gridX,
                        y: gridY
                    });
                } else if (isDragging && (selectedTool === 'road' || selectedTool === 'rail' || selectedTool === 'subway') && dragStartTile) {
                    const dx = Math.abs(gridX - dragStartTile.x);
                    const dy = Math.abs(gridY - dragStartTile.y);
                    // Lock direction after moving at least 1 tile
                    let direction = roadDrawDirection;
                    if (!direction && (dx > 0 || dy > 0)) {
                        // Lock to the axis with more movement, or horizontal if equal
                        direction = dx >= dy ? 'h' : 'v';
                        setRoadDrawDirection(direction);
                    }
                    // Calculate target position along the locked axis
                    let targetX = gridX;
                    let targetY = gridY;
                    if (direction === 'h') {
                        targetY = dragStartTile.y; // Lock to horizontal
                    } else if (direction === 'v') {
                        targetX = dragStartTile.x; // Lock to vertical
                    }
                    setDragEndTile({
                        x: targetX,
                        y: targetY
                    });
                    // Place all tiles from start to target in a straight line
                    // Skip water tiles - they'll be handled on mouse up for bridge creation
                    const minX = Math.min(dragStartTile.x, targetX);
                    const maxX = Math.max(dragStartTile.x, targetX);
                    const minY = Math.min(dragStartTile.y, targetY);
                    const maxY = Math.max(dragStartTile.y, targetY);
                    for(let x = minX; x <= maxX; x++){
                        for(let y = minY; y <= maxY; y++){
                            const key = `${x},${y}`;
                            if (!placedRoadTilesRef.current.has(key)) {
                                // Skip water tiles during drag - they'll show preview and be handled on mouse up
                                const tile = grid[y]?.[x];
                                if (tile && tile.building.type === 'water') {
                                    // Don't place on water during drag, just mark as "seen"
                                    placedRoadTilesRef.current.add(key);
                                    continue;
                                }
                                placeAtTile(x, y);
                                placedRoadTilesRef.current.add(key);
                            }
                        }
                    }
                } else if (isDragging && supportsDragPlace && dragStartTile) {
                    placeAtTile(gridX, gridY);
                }
            }
        }
    }, [
        isPanning,
        dragStart,
        offset,
        zoom,
        gridSize,
        isDragging,
        showsDragGrid,
        dragStartTile,
        selectedTool,
        roadDrawDirection,
        supportsDragPlace,
        placeAtTile,
        clampOffset,
        grid
    ]);
    const handleMouseUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (panCandidateRef.current && !isPanning && selectedTool === 'select') {
            const { gridX, gridY } = panCandidateRef.current;
            panCandidateRef.current = null;
            const origin = findBuildingOrigin(gridX, gridY);
            if (origin && isInspectableTile(origin.originX, origin.originY)) {
                setSelectedTile({
                    x: origin.originX,
                    y: origin.originY
                });
            } else if (!origin && isInspectableTile(gridX, gridY)) {
                setSelectedTile({
                    x: gridX,
                    y: gridY
                });
            } else {
                setSelectedTile(null);
            }
        } else {
            panCandidateRef.current = null;
        }
        // Fill the drag rectangle when mouse is released (only for zoning tools)
        if (isDragging && dragStartTile && dragEndTile && showsDragGrid) {
            const minX = Math.min(dragStartTile.x, dragEndTile.x);
            const maxX = Math.max(dragStartTile.x, dragEndTile.x);
            const minY = Math.min(dragStartTile.y, dragEndTile.y);
            const maxY = Math.max(dragStartTile.y, dragEndTile.y);
            for(let x = minX; x <= maxX; x++){
                for(let y = minY; y <= maxY; y++){
                    placeAtTile(x, y);
                }
            }
        }
        // After placing roads or rail, create bridges for valid water crossings and check for city discovery
        if (isDragging && (selectedTool === 'road' || selectedTool === 'rail') && dragStartTile && dragEndTile) {
            // Collect all tiles in the drag path
            const minX = Math.min(dragStartTile.x, dragEndTile.x);
            const maxX = Math.max(dragStartTile.x, dragEndTile.x);
            const minY = Math.min(dragStartTile.y, dragEndTile.y);
            const maxY = Math.max(dragStartTile.y, dragEndTile.y);
            const pathTiles = [];
            for(let x = minX; x <= maxX; x++){
                for(let y = minY; y <= maxY; y++){
                    pathTiles.push({
                        x,
                        y
                    });
                }
            }
            // Create bridges for valid water crossings in the drag path
            finishTrackDrag(pathTiles, selectedTool);
            // Use setTimeout to allow state to update first, then check for discoverable cities
            setTimeout(()=>{
                checkAndDiscoverCities((discoveredCity)=>{
                    // Show dialog for the newly discovered city
                    setCityConnectionDialog({
                        direction: discoveredCity.direction
                    });
                });
            }, 50);
        }
        // Clear drag state
        setIsDragging(false);
        setDragStartTile(null);
        setDragEndTile(null);
        setIsPanning(false);
        setRoadDrawDirection(null);
        placedRoadTilesRef.current.clear();
        // Clear hovered tile when mouse leaves
        if (!containerRef.current) {
            setHoveredTile(null);
        }
    }, [
        isDragging,
        showsDragGrid,
        dragStartTile,
        placeAtTile,
        finishTrackDrag,
        selectedTool,
        dragEndTile,
        checkAndDiscoverCities,
        findBuildingOrigin,
        isInspectableTile,
        setSelectedTile,
        isPanning
    ]);
    const handleWheel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.preventDefault();
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        // Mouse position relative to canvas (in screen pixels)
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        // Calculate new zoom with proportional scaling for smoother feel
        // Use smaller base delta (0.05) and scale by current zoom for consistent feel at all levels
        const baseZoomDelta = 0.05;
        const scaledDelta = baseZoomDelta * Math.max(0.5, zoom); // Scale with zoom, min 0.5x
        const zoomDelta = e.deltaY > 0 ? -scaledDelta : scaledDelta;
        const newZoom = Math.max(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZOOM_MIN"], Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZOOM_MAX"], zoom + zoomDelta));
        if (newZoom === zoom) return;
        // PERF: Track wheel zooming state to disable lights during zoom (like mobile pinch zoom)
        if (!isWheelZoomingRef.current) {
            isWheelZoomingRef.current = true;
            setIsWheelZooming(true);
        }
        if (wheelZoomTimeoutRef.current) {
            clearTimeout(wheelZoomTimeoutRef.current);
        }
        wheelZoomTimeoutRef.current = setTimeout(()=>{
            isWheelZoomingRef.current = false;
            setIsWheelZooming(false); // Trigger re-render to restore lights
        }, 150); // Wait 150ms after last wheel event to consider zooming complete
        // World position under the mouse before zoom
        // screen = world * zoom + offset → world = (screen - offset) / zoom
        const worldX = (mouseX - offset.x) / zoom;
        const worldY = (mouseY - offset.y) / zoom;
        // After zoom, keep the same world position under the mouse
        // mouseX = worldX * newZoom + newOffset.x → newOffset.x = mouseX - worldX * newZoom
        const newOffsetX = mouseX - worldX * newZoom;
        const newOffsetY = mouseY - worldY * newZoom;
        // Clamp to map bounds
        const clampedOffset = clampOffset({
            x: newOffsetX,
            y: newOffsetY
        }, newZoom);
        setOffset(clampedOffset);
        setZoom(newZoom);
    }, [
        zoom,
        offset,
        clampOffset
    ]);
    // Touch handlers for mobile
    const getTouchDistance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((touch1, touch2)=>{
        const dx = touch1.clientX - touch2.clientX;
        const dy = touch1.clientY - touch2.clientY;
        return Math.sqrt(dx * dx + dy * dy);
    }, []);
    const getTouchCenter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((touch1, touch2)=>{
        return {
            x: (touch1.clientX + touch2.clientX) / 2,
            y: (touch1.clientY + touch2.clientY) / 2
        };
    }, []);
    // Visual alignment tweak requested for map framing.
    const canvasPositionStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            left: '-71px',
            top: '5px'
        }), []);
    const handleTouchStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (e.touches.length === 1) {
            // Single touch - could be pan or tap
            const touch = e.touches[0];
            touchStartRef.current = {
                x: touch.clientX,
                y: touch.clientY,
                time: Date.now()
            };
            setDragStart({
                x: touch.clientX - offset.x,
                y: touch.clientY - offset.y
            });
            setIsPanning(true);
            isPinchZoomingRef.current = false;
        } else if (e.touches.length === 2) {
            // Two finger touch - pinch to zoom
            const distance = getTouchDistance(e.touches[0], e.touches[1]);
            initialPinchDistanceRef.current = distance;
            initialZoomRef.current = zoom;
            lastTouchCenterRef.current = getTouchCenter(e.touches[0], e.touches[1]);
            setIsPanning(false);
            isPinchZoomingRef.current = true;
        }
    }, [
        offset,
        zoom,
        getTouchDistance,
        getTouchCenter
    ]);
    const handleTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.preventDefault();
        if (e.touches.length === 1 && isPanning && !initialPinchDistanceRef.current) {
            // Single touch pan
            const touch = e.touches[0];
            const newOffset = {
                x: touch.clientX - dragStart.x,
                y: touch.clientY - dragStart.y
            };
            setOffset(clampOffset(newOffset, zoom));
        } else if (e.touches.length === 2 && initialPinchDistanceRef.current !== null) {
            // Pinch to zoom
            const currentDistance = getTouchDistance(e.touches[0], e.touches[1]);
            const scale = currentDistance / initialPinchDistanceRef.current;
            const newZoom = Math.max(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZOOM_MIN"], Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZOOM_MAX"], initialZoomRef.current * scale));
            const currentCenter = getTouchCenter(e.touches[0], e.touches[1]);
            const rect = containerRef.current?.getBoundingClientRect();
            if (rect && lastTouchCenterRef.current) {
                // Calculate center position relative to canvas
                const centerX = currentCenter.x - rect.left;
                const centerY = currentCenter.y - rect.top;
                // World position at pinch center
                const worldX = (centerX - offset.x) / zoom;
                const worldY = (centerY - offset.y) / zoom;
                // Keep the same world position under the pinch center after zoom
                const newOffsetX = centerX - worldX * newZoom;
                const newOffsetY = centerY - worldY * newZoom;
                // Also account for pan movement during pinch
                const panDeltaX = currentCenter.x - lastTouchCenterRef.current.x;
                const panDeltaY = currentCenter.y - lastTouchCenterRef.current.y;
                const clampedOffset = clampOffset({
                    x: newOffsetX + panDeltaX,
                    y: newOffsetY + panDeltaY
                }, newZoom);
                setOffset(clampedOffset);
                setZoom(newZoom);
                lastTouchCenterRef.current = currentCenter;
            }
        }
    }, [
        isPanning,
        dragStart,
        zoom,
        offset,
        clampOffset,
        getTouchDistance,
        getTouchCenter
    ]);
    const handleTouchEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const touchStart = touchStartRef.current;
        if (e.touches.length === 0) {
            // All fingers lifted
            if (touchStart && e.changedTouches.length === 1) {
                const touch = e.changedTouches[0];
                const deltaX = Math.abs(touch.clientX - touchStart.x);
                const deltaY = Math.abs(touch.clientY - touchStart.y);
                const deltaTime = Date.now() - touchStart.time;
                // Detect tap (short duration, minimal movement)
                if (deltaTime < 300 && deltaX < 10 && deltaY < 10) {
                    const rect = containerRef.current?.getBoundingClientRect();
                    if (rect) {
                        const mouseX = (touch.clientX - rect.left) / zoom;
                        const mouseY = (touch.clientY - rect.top) / zoom;
                        const { gridX, gridY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["screenToGrid"])(mouseX, mouseY, offset.x / zoom, offset.y / zoom);
                        if (gridX >= 0 && gridX < gridSize && gridY >= 0 && gridY < gridSize) {
                            if (selectedTool === 'select') {
                                const origin = findBuildingOrigin(gridX, gridY);
                                if (origin && isInspectableTile(origin.originX, origin.originY)) {
                                    setSelectedTile({
                                        x: origin.originX,
                                        y: origin.originY
                                    });
                                } else if (!origin && isInspectableTile(gridX, gridY)) {
                                    setSelectedTile({
                                        x: gridX,
                                        y: gridY
                                    });
                                } else {
                                    setSelectedTile(null);
                                }
                            } else {
                                placeAtTile(gridX, gridY);
                            }
                        }
                    }
                }
            }
            // Reset all touch state
            setIsPanning(false);
            setIsDragging(false);
            isPinchZoomingRef.current = false;
            touchStartRef.current = null;
            initialPinchDistanceRef.current = null;
            lastTouchCenterRef.current = null;
        } else if (e.touches.length === 1) {
            // Went from 2 touches to 1 - reset to pan mode
            const touch = e.touches[0];
            setDragStart({
                x: touch.clientX - offset.x,
                y: touch.clientY - offset.y
            });
            setIsPanning(true);
            isPinchZoomingRef.current = false;
            initialPinchDistanceRef.current = null;
            lastTouchCenterRef.current = null;
        }
    }, [
        zoom,
        offset,
        gridSize,
        selectedTool,
        placeAtTile,
        setSelectedTile,
        findBuildingOrigin,
        isInspectableTile
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "overflow-hidden relative w-full h-full touch-none",
        style: {
            cursor: isPanning ? 'grabbing' : isDragging ? 'crosshair' : 'default'
        },
        onMouseDown: handleMouseDown,
        onMouseMove: handleMouseMove,
        onMouseUp: handleMouseUp,
        onMouseLeave: handleMouseUp,
        onWheel: handleWheel,
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        onTouchCancel: handleTouchEnd,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                width: canvasSize.width,
                height: canvasSize.height,
                className: "absolute top-0 left-0",
                style: canvasPositionStyle
            }, void 0, false, {
                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                lineNumber: 3279,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: hoverCanvasRef,
                width: canvasSize.width,
                height: canvasSize.height,
                className: "absolute top-0 left-0 pointer-events-none",
                style: canvasPositionStyle
            }, void 0, false, {
                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                lineNumber: 3287,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: carsCanvasRef,
                width: canvasSize.width,
                height: canvasSize.height,
                className: "absolute top-0 left-0 pointer-events-none",
                style: canvasPositionStyle
            }, void 0, false, {
                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                lineNumber: 3294,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: buildingsCanvasRef,
                width: canvasSize.width,
                height: canvasSize.height,
                className: "absolute top-0 left-0 pointer-events-none",
                style: canvasPositionStyle
            }, void 0, false, {
                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                lineNumber: 3301,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: airCanvasRef,
                width: canvasSize.width,
                height: canvasSize.height,
                className: "absolute top-0 left-0 pointer-events-none",
                style: canvasPositionStyle
            }, void 0, false, {
                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                lineNumber: 3308,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: lightingCanvasRef,
                width: canvasSize.width,
                height: canvasSize.height,
                className: "absolute top-0 left-0 pointer-events-none",
                style: {
                    ...canvasPositionStyle,
                    mixBlendMode: 'multiply'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                lineNumber: 3315,
                columnNumber: 7
            }, this),
            selectedTile && selectedTool === 'select' && !isMobile && isInspectableTile(selectedTile.x, selectedTile.y) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$TileInfoPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TileInfoPanel"], {
                tile: grid[selectedTile.y][selectedTile.x],
                services: state.services,
                onClose: ()=>setSelectedTile(null)
            }, void 0, false, {
                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                lineNumber: 3324,
                columnNumber: 9
            }, this),
            portfolioCompanyTiles.length > 0 && !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 z-40 rounded-md border border-border/70 bg-card/85 px-2 py-1 text-[10px] tracking-wide text-muted-foreground",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mr-3 text-sky-300",
                        children: "[P] Portfolio"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                        lineNumber: 3333,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mr-3 text-pink-300",
                        children: "[C] Competitor"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                        lineNumber: 3334,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-amber-300",
                        children: "[O] Open Round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                        lineNumber: 3335,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                lineNumber: 3332,
                columnNumber: 9
            }, this),
            cityConnectionDialog && (()=>{
                // Find a discovered but not connected city in this direction
                const city = adjacentCities.find((c)=>c.direction === cityConnectionDialog.direction && c.discovered && !c.connected);
                if (!city) return null;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                    open: true,
                    onOpenChange: ()=>{
                        setCityConnectionDialog(null);
                        setDragStartTile(null);
                        setDragEndTile(null);
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                        className: "max-w-[400px]",
                        onPointerDown: (e)=>e.stopPropagation(),
                        onMouseDown: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                            children: "City Discovered!"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                            lineNumber: 3358,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                        lineNumber: 3357,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                            children: [
                                                "Your road has reached the ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Var"], {
                                                    children: cityConnectionDialog.direction
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                                    lineNumber: 3362,
                                                    columnNumber: 47
                                                }, this),
                                                " border! You've discovered ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Var"], {
                                                    children: city.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                                    lineNumber: 3362,
                                                    columnNumber: 122
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                            lineNumber: 3361,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                        lineNumber: 3360,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                lineNumber: 3356,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-muted-foreground",
                                            children: [
                                                "Connecting to ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Var"], {
                                                    children: city.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                                    lineNumber: 3369,
                                                    columnNumber: 35
                                                }, this),
                                                " will establish a trade route, providing:",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "mt-2 space-y-1 list-disc list-inside",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "$5,000 one-time bonus"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                                            lineNumber: 3371,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "$200/month additional income"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                                            lineNumber: 3372,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                                    lineNumber: 3370,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                            lineNumber: 3368,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                        lineNumber: 3367,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 justify-end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        setCityConnectionDialog(null);
                                                        setDragStartTile(null);
                                                        setDragEndTile(null);
                                                    },
                                                    children: "Maybe Later"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                                    lineNumber: 3378,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                                lineNumber: 3377,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        connectToCity(city.id);
                                                        setCityConnectionDialog(null);
                                                        setDragStartTile(null);
                                                        setDragEndTile(null);
                                                    },
                                                    children: [
                                                        "Connect to ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Var"], {
                                                            children: city.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                                            lineNumber: 3400,
                                                            columnNumber: 34
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                                    lineNumber: 3391,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                                lineNumber: 3390,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                        lineNumber: 3376,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                lineNumber: 3366,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                        lineNumber: 3351,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                    lineNumber: 3346,
                    columnNumber: 11
                }, this);
            })(),
            hoveredTile && selectedTool !== 'select' && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOOL_INFO"][selectedTool] && (()=>{
                // Check if this is a waterfront building tool and if placement is valid
                const buildingType = selectedTool;
                const isWaterfrontTool = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["requiresWaterAdjacency"])(buildingType);
                let isWaterfrontPlacementInvalid = false;
                if (isWaterfrontTool && hoveredTile) {
                    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBuildingSize"])(buildingType);
                    const waterCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWaterAdjacency"])(grid, hoveredTile.x, hoveredTile.y, size.width, size.height, gridSize);
                    isWaterfrontPlacementInvalid = !waterCheck.hasWater;
                }
                const toolName = m(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOOL_INFO"][selectedTool].name);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-md text-sm ${isWaterfrontPlacementInvalid ? 'border bg-destructive/90 border-destructive-foreground/30 text-destructive-foreground' : 'border bg-card/90 border-border'}`,
                    children: isDragging && dragStartTile && dragEndTile && showsDragGrid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: (()=>{
                            const areaWidth = Math.abs(dragEndTile.x - dragStartTile.x) + 1;
                            const areaHeight = Math.abs(dragEndTile.y - dragStartTile.y) + 1;
                            const totalCost = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOOL_INFO"][selectedTool].cost * areaWidth * areaHeight;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    gt('{toolName} - {width}x{height} area', {
                                        toolName,
                                        width: areaWidth,
                                        height: areaHeight
                                    }),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOOL_INFO"][selectedTool].cost > 0 && ` - $${totalCost}`
                                ]
                            }, void 0, true);
                        })()
                    }, void 0, false) : isWaterfrontPlacementInvalid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: gt('{toolName} must be placed next to water', {
                            toolName
                        })
                    }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            gt('{toolName} at ({x}, {y})', {
                                toolName,
                                x: hoveredTile.x,
                                y: hoveredTile.y
                            }),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOOL_INFO"][selectedTool].cost > 0 && ` - $${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOOL_INFO"][selectedTool].cost}`,
                            showsDragGrid && gt(' - Drag to zone area'),
                            supportsDragPlace && !showsDragGrid && gt(' - Drag to place')
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                    lineNumber: 3425,
                    columnNumber: 11
                }, this);
            })(),
            hoveredIncident && (()=>{
                // Calculate position to avoid overflow
                const tooltipWidth = 200;
                const padding = 16;
                const viewportWidth = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1920;
                // Check if tooltip would overflow right edge
                const wouldOverflowRight = hoveredIncident.screenX + padding + tooltipWidth > viewportWidth - padding;
                const left = wouldOverflowRight ? hoveredIncident.screenX - tooltipWidth - padding : hoveredIncident.screenX + padding;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed pointer-events-none z-[100]",
                    style: {
                        left,
                        top: hoveredIncident.screenY - 8
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-sidebar border border-sidebar-border rounded-md shadow-lg px-3 py-2 w-[220px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 items-center mb-1",
                                children: [
                                    hoveredIncident.type === 'fire' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FireIcon"], {
                                        size: 14,
                                        className: "text-red-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                        lineNumber: 3482,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SafetyIcon"], {
                                        size: 14,
                                        className: "text-blue-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                        lineNumber: 3484,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold text-sidebar-foreground",
                                        children: hoveredIncident.type === 'fire' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$incidentData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFireNameForTile"])(hoveredIncident.x, hoveredIncident.y) : hoveredIncident.crimeType ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$incidentData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCrimeName"])(hoveredIncident.crimeType) : gt('Incident')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                        lineNumber: 3486,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                lineNumber: 3480,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-muted-foreground leading-tight",
                                children: hoveredIncident.type === 'fire' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$incidentData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFireDescriptionForTile"])(hoveredIncident.x, hoveredIncident.y) : hoveredIncident.crimeType ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$incidentData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCrimeDescription"])(hoveredIncident.crimeType) : gt('Incident reported.')
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                lineNumber: 3496,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1.5 pt-1.5 border-t border-sidebar-border/50 text-[10px] text-muted-foreground/60 font-mono",
                                children: [
                                    "(",
                                    hoveredIncident.x,
                                    ", ",
                                    hoveredIncident.y,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                lineNumber: 3505,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                        lineNumber: 3478,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                    lineNumber: 3474,
                    columnNumber: 11
                }, this);
            })()
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
        lineNumber: 3263,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_components_game_CanvasIsometricGrid_tsx_51516c88._.js.map