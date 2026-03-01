(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/game/CanvasIsometricGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasIsometricGrid",
    ()=>CanvasIsometricGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gt-next/dist/index.client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/GameContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/types/game.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/games/isocity/types/game.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/simulation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/renderConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$buildingSprite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/buildingSprite.ts [app-client] (ecmascript)");
// Import shadcn components
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
// Import extracted game components, types, and utilities
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$drawing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/drawing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$overlays$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/overlays.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$placeholders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/placeholders.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/imageLoader.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/game/panels/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$TileInfoPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/panels/TileInfoPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$gridFinders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/gridFinders.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$drawAircraft$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/drawAircraft.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$vehicleSystems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/vehicleSystems.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$buildingHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/buildingHelpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$aircraftSystems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/aircraftSystems.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$bargeSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/bargeSystem.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$boatSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/boatSystem.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$seaplaneSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/seaplaneSystem.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$effectsSystems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/effectsSystems.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$trafficSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/trafficSystem.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$roadDrawing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/roadDrawing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$bridgeDrawing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/bridgeDrawing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$incidentData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/incidentData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$railSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/railSystem.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$trainSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/trainSystem.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$lightingSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/lightingSystem.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function CanvasIsometricGrid({ overlayMode, selectedTile, setSelectedTile, isMobile = false, navigationTarget, onNavigationComplete, onViewportChange, onBargeDelivery }) {
    _s();
    const { state, latestStateRef, placeAtTile, finishTrackDrag, connectToCity, checkAndDiscoverCities, currentSpritePack, visualHour, investorSession } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"])();
    const { grid, gridSize, selectedTool, speed, adjacentCities, waterBodies, gameVersion } = state;
    const portfolioCompanyTiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CanvasIsometricGrid.useMemo[portfolioCompanyTiles]": ()=>state.portfolioCompanyTiles || []
    }["CanvasIsometricGrid.useMemo[portfolioCompanyTiles]"], [
        state.portfolioCompanyTiles
    ]);
    const portfolioTileByKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CanvasIsometricGrid.useMemo[portfolioTileByKey]": ()=>{
            const map = new Map();
            for (const marker of portfolioCompanyTiles){
                map.set(`${marker.x},${marker.y}`, marker);
            }
            return map;
        }
    }["CanvasIsometricGrid.useMemo[portfolioTileByKey]"], [
        portfolioCompanyTiles
    ]);
    // PERF: Use latestStateRef for real-time grid access in animation loops
    // This avoids waiting for React state sync which is throttled for performance
    const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"])();
    const gt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGT"])();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hoverCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // PERF: Separate canvas for hover/selection highlights
    const carsCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const buildingsCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // Buildings rendered on top of cars/trains
    const airCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // Aircraft + fireworks rendered above buildings
    const lightingCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const renderPendingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // PERF: Track pending render frame
    const lastMainRenderTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0); // PERF: Throttle main renders at high speed
    const [offset, setOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: isMobile ? 200 : 620,
        y: isMobile ? 100 : 160
    });
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPanning, setIsPanning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isWheelZooming, setIsWheelZooming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // State to trigger re-render when wheel zooming stops
    const isPanningRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false); // Ref for animation loop to check panning state
    const isPinchZoomingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false); // Ref for animation loop to check pinch zoom state
    const isWheelZoomingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false); // Ref for animation loop to check desktop wheel zoom state
    const wheelZoomTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // Timeout to detect end of wheel zoom
    const zoomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(isMobile ? 0.6 : 1); // Ref for animation loop to check zoom level
    const [dragStart, setDragStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const panCandidateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hoveredTile, setHoveredTile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredIncident, setHoveredIncident] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isMobile ? 0.6 : 1);
    const isInspectableTile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CanvasIsometricGrid.useCallback[isInspectableTile]": (x, y)=>{
            const tile = grid[y]?.[x];
            if (!tile) return false;
            const buildingType = tile.building.type;
            const isOpenGround = buildingType === 'empty' || buildingType === 'grass' || buildingType === 'water';
            if (!isOpenGround) return true;
            if (tile.zone !== 'none') return true;
            if ((tile.building.population ?? 0) > 0 || (tile.building.jobs ?? 0) > 0) return true;
            if (tile.building.onFire) return true;
            return false;
        }
    }["CanvasIsometricGrid.useCallback[isInspectableTile]"], [
        grid
    ]);
    const carsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const carIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const carSpawnTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const busesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const busIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const busSpawnTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const emergencyVehiclesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const emergencyVehicleIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const emergencyDispatchTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const activeFiresRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set()); // Track fires that already have a truck dispatched
    const activeCrimesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set()); // Track crimes that already have a car dispatched
    const activeCrimeIncidentsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map()); // Persistent crime incidents
    const crimeSpawnTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0); // Timer for spawning new crime incidents
    // Pedestrian system refs
    const pedestriansRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const pedestrianIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const pedestrianSpawnTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Touch gesture state for mobile
    const touchStartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initialPinchDistanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initialZoomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(zoom);
    const lastTouchCenterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Airplane system refs
    const airplanesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const airplaneIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const airplaneSpawnTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Helicopter system refs
    const helicoptersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const helicopterIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const helicopterSpawnTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Seaplane system refs
    const seaplanesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const seaplaneIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const seaplaneSpawnTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Boat system refs
    const boatsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const boatIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const boatSpawnTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Barge system refs (ocean cargo ships)
    const bargesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const bargeIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const bargeSpawnTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Train system refs
    const trainsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const trainIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const trainSpawnTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Navigation light flash timer for planes/helicopters/boats at night
    const navLightFlashTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Railroad crossing state
    const crossingFlashTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const crossingGateAnglesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map()); // key = y * gridSize + x, value = angle (0=open, 90=closed)
    const crossingPositionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]); // Cached crossing positions for O(1) iteration
    // Firework system refs
    const fireworksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const fireworkIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const fireworkSpawnTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const fireworkShowActiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const fireworkShowStartTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const fireworkLastHourRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1); // Track hour changes to detect night transitions
    // Factory smog system refs
    const factorySmogRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const smogLastGridVersionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1); // Track when to rebuild factory list
    // Cloud system refs
    const cloudsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const cloudIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const cloudSpawnTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Traffic light system timer (cumulative time for cycling through states)
    const trafficLightTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Performance: Cache expensive grid calculations
    const cachedRoadTileCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        count: 0,
        gridVersion: -1
    });
    const cachedPopulationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        count: 0,
        gridVersion: -1
    });
    // PERF: Cache intersection status per-tile to avoid repeated getDirectionOptions() calls
    const cachedIntersectionMapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        map: new Map(),
        gridVersion: -1
    });
    const gridVersionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Performance: Cache road merge analysis (expensive calculation done per-road-tile)
    const roadAnalysisCacheRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const roadAnalysisCacheVersionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1);
    // PERF: Cache background gradient - only recreate when canvas height changes
    const bgGradientCacheRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        gradient: null,
        height: 0
    });
    const renderQueuesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
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
    const worldStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
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
    const [roadDrawDirection, setRoadDrawDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const placedRoadTilesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    // Track progressive image loading - start true to render immediately with placeholders
    const [imagesLoaded, setImagesLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Counter to trigger re-renders when new images become available
    const [imageLoadVersion, setImageLoadVersion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [canvasSize, setCanvasSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 1200,
        height: 800
    });
    const [dragStartTile, setDragStartTile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragEndTile, setDragEndTile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cityConnectionDialog, setCityConnectionDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const keysPressedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
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
    const { isPartOfMultiTileBuilding, findBuildingOrigin, isPartOfParkBuilding, getTileMetadata } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$buildingHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuildingHelpers"])(grid, gridSize);
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
    const { spawnRandomCar, spawnPedestrian, spawnCrimeIncidents, updateCrimeIncidents, findCrimeIncidents, dispatchEmergencyVehicle, updateEmergencyDispatch, updateEmergencyVehicles, updateCars, updateBuses, updatePedestrians, drawCars, drawBuses, drawPedestrians, drawRecreationPedestrians, drawEmergencyVehicles, drawIncidentIndicators } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$vehicleSystems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVehicleSystems"])(vehicleSystemRefs, vehicleSystemState);
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
    const { updateAirplanes, updateHelicopters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$aircraftSystems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAircraftSystems"])(aircraftSystemRefs, aircraftSystemState);
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
    const { updateSeaplanes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$seaplaneSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSeaplaneSystem"])(seaplaneSystemRefs, seaplaneSystemState);
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
    const { updateBarges, drawBarges } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$bargeSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBargeSystem"])(bargeSystemRefs, bargeSystemState);
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
    const { updateBoats, drawBoats } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$boatSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBoatSystem"])(boatSystemRefs, boatSystemState);
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
    const { updateFireworks, drawFireworks, updateSmog, drawSmog, updateClouds, drawClouds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$effectsSystems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectsSystems"])(effectsSystemRefs, effectsSystemState);
    // PERF: Sync worldStateRef from latestStateRef (real-time) instead of React state (throttled)
    // This runs on every animation frame via the render loop, not on React state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasIsometricGrid.useEffect": ()=>{
            // Initial sync from React state
            worldStateRef.current.grid = grid;
            worldStateRef.current.gridSize = gridSize;
            gridVersionRef.current++;
            crossingPositionsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$railSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findRailroadCrossings"])(grid, gridSize);
        }
    }["CanvasIsometricGrid.useEffect"], [
        grid,
        gridSize
    ]);
    // PERF: Continuously sync from latestStateRef for real-time grid updates
    // This allows canvas to see simulation changes before React state syncs
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasIsometricGrid.useEffect": ()=>{
            let animFrameId;
            let lastGridVersion = 0;
            const syncFromRef = {
                "CanvasIsometricGrid.useEffect.syncFromRef": ()=>{
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
                            crossingPositionsRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$railSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findRailroadCrossings"])(latest.grid, latest.gridSize);
                        }
                    }
                }
            }["CanvasIsometricGrid.useEffect.syncFromRef"];
            animFrameId = requestAnimationFrame(syncFromRef);
            return ({
                "CanvasIsometricGrid.useEffect": ()=>cancelAnimationFrame(animFrameId)
            })["CanvasIsometricGrid.useEffect"];
        }
    }["CanvasIsometricGrid.useEffect"], [
        latestStateRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasIsometricGrid.useEffect": ()=>{
            worldStateRef.current.offset = offset;
        }
    }["CanvasIsometricGrid.useEffect"], [
        offset
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasIsometricGrid.useEffect": ()=>{
            worldStateRef.current.zoom = zoom;
        }
    }["CanvasIsometricGrid.useEffect"], [
        zoom
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasIsometricGrid.useEffect": ()=>{
            worldStateRef.current.speed = speed;
        }
    }["CanvasIsometricGrid.useEffect"], [
        speed
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasIsometricGrid.useEffect": ()=>{
            worldStateRef.current.canvasSize = canvasSize;
        }
    }["CanvasIsometricGrid.useEffect"], [
        canvasSize
    ]);
    // Clear all vehicles/entities when game version changes (new game, load state, etc.)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasIsometricGrid.useEffect": ()=>{
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
        }
    }["CanvasIsometricGrid.useEffect"], [
        gameVersion
    ]);
    // Sync isPanning state to ref for animation loop access
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasIsometricGrid.useEffect": ()=>{
            isPanningRef.current = isPanning;
        }
    }["CanvasIsometricGrid.useEffect"], [
        isPanning
    ]);
    // Sync zoom state to ref for animation loop access
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasIsometricGrid.useEffect": ()=>{
            zoomRef.current = zoom;
        }
    }["CanvasIsometricGrid.useEffect"], [
        zoom
    ]);
    // Notify parent of viewport changes for minimap
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasIsometricGrid.useEffect": ()=>{
            onViewportChange?.({
                offset,
                zoom,
                canvasSize
            });
        }
    }["CanvasIsometricGrid.useEffect"], [
        offset,
        zoom,
        canvasSize,
        onViewportChange
    ]);
    // Keyboard panning (WASD / arrow keys)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasIsometricGrid.useEffect": ()=>{
            const pressed = keysPressedRef.current;
            const isTypingTarget = {
                "CanvasIsometricGrid.useEffect.isTypingTarget": (target)=>{
                    const el = target;
                    return !!el?.closest('input, textarea, select, [contenteditable="true"]');
                }
            }["CanvasIsometricGrid.useEffect.isTypingTarget"];
            const handleKeyDown = {
                "CanvasIsometricGrid.useEffect.handleKeyDown": (e)=>{
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
                }
            }["CanvasIsometricGrid.useEffect.handleKeyDown"];
            const handleKeyUp = {
                "CanvasIsometricGrid.useEffect.handleKeyUp": (e_0)=>{
                    const key_0 = e_0.key.toLowerCase();
                    pressed.delete(key_0);
                }
            }["CanvasIsometricGrid.useEffect.handleKeyUp"];
            let animationFrameId = 0;
            let lastTime = performance.now();
            const tick = {
                "CanvasIsometricGrid.useEffect.tick": (time)=>{
                    animationFrameId = requestAnimationFrame(tick);
                    const delta = Math.min((time - lastTime) / 1000, 0.05);
                    lastTime = time;
                    if (!pressed.size) return;
                    let dx = 0;
                    let dy = 0;
                    if (pressed.has('w') || pressed.has('arrowup')) dy += __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_PAN_SPEED"] * delta;
                    if (pressed.has('s') || pressed.has('arrowdown')) dy -= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_PAN_SPEED"] * delta;
                    if (pressed.has('a') || pressed.has('arrowleft')) dx += __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_PAN_SPEED"] * delta;
                    if (pressed.has('d') || pressed.has('arrowright')) dx -= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_PAN_SPEED"] * delta;
                    if (dx !== 0 || dy !== 0) {
                        const { zoom: currentZoom, gridSize: n, canvasSize: cs } = worldStateRef.current;
                        // Calculate bounds inline
                        const padding = 100;
                        const mapLeft = -(n - 1) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2;
                        const mapRight = (n - 1) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2;
                        const mapTop = 0;
                        const mapBottom = (n - 1) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"];
                        const minOffsetX = padding - mapRight * currentZoom;
                        const maxOffsetX = cs.width - padding - mapLeft * currentZoom;
                        const minOffsetY = padding - mapBottom * currentZoom;
                        const maxOffsetY = cs.height - padding - mapTop * currentZoom;
                        setOffset({
                            "CanvasIsometricGrid.useEffect.tick": (prev)=>({
                                    x: Math.max(minOffsetX, Math.min(maxOffsetX, prev.x + dx)),
                                    y: Math.max(minOffsetY, Math.min(maxOffsetY, prev.y + dy))
                                })
                        }["CanvasIsometricGrid.useEffect.tick"]);
                    }
                }
            }["CanvasIsometricGrid.useEffect.tick"];
            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('keyup', handleKeyUp);
            animationFrameId = requestAnimationFrame(tick);
            return ({
                "CanvasIsometricGrid.useEffect": ()=>{
                    window.removeEventListener('keydown', handleKeyDown);
                    window.removeEventListener('keyup', handleKeyUp);
                    cancelAnimationFrame(animationFrameId);
                    pressed.clear();
                }
            })["CanvasIsometricGrid.useEffect"];
        }
    }["CanvasIsometricGrid.useEffect"], []);
    // Find marinas and piers (uses imported utility)
    const findMarinasAndPiersCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CanvasIsometricGrid.useCallback[findMarinasAndPiersCallback]": ()=>{
            const { grid: currentGrid, gridSize: currentGridSize } = worldStateRef.current;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$gridFinders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findMarinasAndPiers"])(currentGrid, currentGridSize);
        }
    }["CanvasIsometricGrid.useCallback[findMarinasAndPiersCallback]"], []);
    // Find adjacent water tile (uses imported utility)
    const findAdjacentWaterTileCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CanvasIsometricGrid.useCallback[findAdjacentWaterTileCallback]": (dockX, dockY)=>{
            const { grid: currentGrid_0, gridSize: currentGridSize_0 } = worldStateRef.current;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$gridFinders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findAdjacentWaterTile"])(currentGrid_0, currentGridSize_0, dockX, dockY);
        }
    }["CanvasIsometricGrid.useCallback[findAdjacentWaterTileCallback]"], []);
    // Check if screen position is over water (uses imported utility)
    const isOverWaterCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CanvasIsometricGrid.useCallback[isOverWaterCallback]": (screenX, screenY)=>{
            const { grid: currentGrid_1, gridSize: currentGridSize_1 } = worldStateRef.current;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$gridFinders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOverWater"])(currentGrid_1, currentGridSize_1, screenX, screenY);
        }
    }["CanvasIsometricGrid.useCallback[isOverWaterCallback]"], []);
    // Generate tour waypoints (uses imported utility)
    const generateTourWaypointsCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CanvasIsometricGrid.useCallback[generateTourWaypointsCallback]": (startTileX, startTileY)=>{
            const { grid: currentGrid_2, gridSize: currentGridSize_2 } = worldStateRef.current;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$gridFinders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTourWaypoints"])(currentGrid_2, currentGridSize_2, startTileX, startTileY);
        }
    }["CanvasIsometricGrid.useCallback[generateTourWaypointsCallback]"], []);
    // Draw airplanes with contrails (uses extracted utility)
    const drawAirplanes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CanvasIsometricGrid.useCallback[drawAirplanes]": (ctx)=>{
            const { offset: currentOffset, zoom: currentZoom_0, grid: currentGrid_3, gridSize: currentGridSize_3 } = worldStateRef.current;
            const canvas = ctx.canvas;
            const dpr = window.devicePixelRatio || 1;
            // Early exit if no airplanes
            if (!currentGrid_3 || currentGridSize_3 <= 0 || airplanesRef.current.length === 0) {
                return;
            }
            ctx.save();
            ctx.scale(dpr * currentZoom_0, dpr * currentZoom_0);
            ctx.translate(currentOffset.x / currentZoom_0, currentOffset.y / currentZoom_0);
            const viewWidth = canvas.width / (dpr * currentZoom_0);
            const viewHeight = canvas.height / (dpr * currentZoom_0);
            const viewBounds = {
                viewLeft: -currentOffset.x / currentZoom_0 - 200,
                viewTop: -currentOffset.y / currentZoom_0 - 200,
                viewRight: viewWidth - currentOffset.x / currentZoom_0 + 200,
                viewBottom: viewHeight - currentOffset.y / currentZoom_0 + 200
            };
            // Use extracted utility function for drawing
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$drawAircraft$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawAirplanes"])(ctx, airplanesRef.current, viewBounds, visualHour, navLightFlashTimerRef.current, isMobile);
            ctx.restore();
        }
    }["CanvasIsometricGrid.useCallback[drawAirplanes]"], [
        visualHour,
        isMobile
    ]);
    // Draw helicopters with rotor wash (uses extracted utility)
    const drawHelicopters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CanvasIsometricGrid.useCallback[drawHelicopters]": (ctx_0)=>{
            const { offset: currentOffset_0, zoom: currentZoom_1, grid: currentGrid_4, gridSize: currentGridSize_4 } = worldStateRef.current;
            const canvas_0 = ctx_0.canvas;
            const dpr_0 = window.devicePixelRatio || 1;
            // Early exit if no helicopters
            if (!currentGrid_4 || currentGridSize_4 <= 0 || helicoptersRef.current.length === 0) {
                return;
            }
            ctx_0.save();
            ctx_0.scale(dpr_0 * currentZoom_1, dpr_0 * currentZoom_1);
            ctx_0.translate(currentOffset_0.x / currentZoom_1, currentOffset_0.y / currentZoom_1);
            const viewWidth_0 = canvas_0.width / (dpr_0 * currentZoom_1);
            const viewHeight_0 = canvas_0.height / (dpr_0 * currentZoom_1);
            const viewBounds_0 = {
                viewLeft: -currentOffset_0.x / currentZoom_1 - 100,
                viewTop: -currentOffset_0.y / currentZoom_1 - 100,
                viewRight: viewWidth_0 - currentOffset_0.x / currentZoom_1 + 100,
                viewBottom: viewHeight_0 - currentOffset_0.y / currentZoom_1 + 100
            };
            // Use extracted utility function for drawing
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$drawAircraft$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawHelicopters"])(ctx_0, helicoptersRef.current, viewBounds_0, visualHour, navLightFlashTimerRef.current, isMobile, currentZoom_1);
            ctx_0.restore();
        }
    }["CanvasIsometricGrid.useCallback[drawHelicopters]"], [
        visualHour,
        isMobile
    ]);
    // Draw seaplanes with wakes and contrails (uses extracted utility)
    const drawSeaplanes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CanvasIsometricGrid.useCallback[drawSeaplanes]": (ctx_1)=>{
            const { offset: currentOffset_1, zoom: currentZoom_2, grid: currentGrid_5, gridSize: currentGridSize_5 } = worldStateRef.current;
            const canvas_1 = ctx_1.canvas;
            const dpr_1 = window.devicePixelRatio || 1;
            // Early exit if no seaplanes
            if (!currentGrid_5 || currentGridSize_5 <= 0 || seaplanesRef.current.length === 0) {
                return;
            }
            ctx_1.save();
            ctx_1.scale(dpr_1 * currentZoom_2, dpr_1 * currentZoom_2);
            ctx_1.translate(currentOffset_1.x / currentZoom_2, currentOffset_1.y / currentZoom_2);
            const viewWidth_1 = canvas_1.width / (dpr_1 * currentZoom_2);
            const viewHeight_1 = canvas_1.height / (dpr_1 * currentZoom_2);
            const viewBounds_1 = {
                viewLeft: -currentOffset_1.x / currentZoom_2 - 200,
                viewTop: -currentOffset_1.y / currentZoom_2 - 200,
                viewRight: viewWidth_1 - currentOffset_1.x / currentZoom_2 + 200,
                viewBottom: viewHeight_1 - currentOffset_1.y / currentZoom_2 + 200
            };
            // Use extracted utility function for drawing
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$drawAircraft$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawSeaplanes"])(ctx_1, seaplanesRef.current, viewBounds_1, visualHour, navLightFlashTimerRef.current, isMobile);
            ctx_1.restore();
        }
    }["CanvasIsometricGrid.useCallback[drawSeaplanes]"], [
        visualHour,
        isMobile
    ]);
    // Boats are now handled by useBoatSystem hook (see above)
    // Update trains - spawn, move, and manage lifecycle
    const updateTrains = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CanvasIsometricGrid.useCallback[updateTrains]": (delta_0)=>{
            const { grid: currentGrid_6, gridSize: currentGridSize_6, speed: currentSpeed } = worldStateRef.current;
            if (!currentGrid_6 || currentGridSize_6 <= 0 || currentSpeed === 0) {
                return;
            }
            // Count rail tiles
            const railTileCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$railSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countRailTiles"])(currentGrid_6, currentGridSize_6);
            // No trains if not enough rail
            if (railTileCount < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$trainSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_RAIL_TILES_FOR_TRAINS"]) {
                trainsRef.current = [];
                return;
            }
            // Calculate max trains based on rail network size - lower limits on mobile
            const maxTrainsLimit = isMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$trainSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_TRAINS_MOBILE"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$trainSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_TRAINS"];
            const trainsPerTile = isMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$trainSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRAINS_PER_RAIL_TILES_MOBILE"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$trainSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRAINS_PER_RAIL_TILES"];
            const maxTrains = Math.min(maxTrainsLimit, Math.ceil(railTileCount / trainsPerTile));
            // Speed multiplier based on game speed
            const speedMultiplier = currentSpeed === 1 ? 1 : currentSpeed === 2 ? 2 : 3;
            // Spawn timer - slower on mobile
            const spawnInterval = isMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$trainSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRAIN_SPAWN_INTERVAL_MOBILE"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$trainSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRAIN_SPAWN_INTERVAL"];
            trainSpawnTimerRef.current -= delta_0;
            if (trainsRef.current.length < maxTrains && trainSpawnTimerRef.current <= 0) {
                const newTrain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$trainSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spawnTrain"])(currentGrid_6, currentGridSize_6, trainIdRef);
                if (newTrain) {
                    trainsRef.current.push(newTrain);
                }
                trainSpawnTimerRef.current = spawnInterval;
            }
            // Update existing trains (pass all trains for collision detection)
            const allTrains = trainsRef.current;
            trainsRef.current = trainsRef.current.filter({
                "CanvasIsometricGrid.useCallback[updateTrains]": (train)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$trainSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateTrain"])(train, delta_0, speedMultiplier, currentGrid_6, currentGridSize_6, allTrains, isMobile)
            }["CanvasIsometricGrid.useCallback[updateTrains]"]);
        }
    }["CanvasIsometricGrid.useCallback[updateTrains]"], [
        isMobile
    ]);
    // Draw trains on the rail network
    const drawTrainsCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CanvasIsometricGrid.useCallback[drawTrainsCallback]": (ctx_2)=>{
            const { offset: currentOffset_2, zoom: currentZoom_3, grid: currentGrid_7, gridSize: currentGridSize_7, canvasSize: size } = worldStateRef.current;
            if (!currentGrid_7 || currentGridSize_7 <= 0 || trainsRef.current.length === 0) {
                return;
            }
            // Skip drawing trains when very zoomed out (for large map performance)
            if (currentZoom_3 < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRAIN_MIN_ZOOM"]) {
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$trainSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawTrains"])(ctx_2, trainsRef.current, currentOffset_2, currentZoom_3, size, currentGrid_7, currentGridSize_7, visualHour, isMobile);
        }
    }["CanvasIsometricGrid.useCallback[drawTrainsCallback]"], [
        visualHour,
        isMobile
    ]);
    // Fireworks and smog are now handled by useEffectsSystems hook (see above)
    // Progressive image loading - load sprites in background, render immediately
    // Subscribe to image load notifications to trigger re-renders as assets become available
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasIsometricGrid.useEffect": ()=>{
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onImageLoaded"])({
                "CanvasIsometricGrid.useEffect.unsubscribe": ()=>{
                    // Trigger re-render when any new image loads
                    setImageLoadVersion({
                        "CanvasIsometricGrid.useEffect.unsubscribe": (v)=>v + 1
                    }["CanvasIsometricGrid.useEffect.unsubscribe"]);
                }
            }["CanvasIsometricGrid.useEffect.unsubscribe"]);
            return unsubscribe;
        }
    }["CanvasIsometricGrid.useEffect"], []);
    // Load sprite sheets on mount and when sprite pack changes
    // This now runs in background - rendering starts immediately with placeholders
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasIsometricGrid.useEffect": ()=>{
            // Load images progressively - each will trigger a re-render when ready
            // Priority: main sprite sheet first, then water, then secondary sheets
            // High priority - main sprite sheet
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSpriteImage"])(currentSpritePack.src, true).catch(console.error);
            // High priority - water texture
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadImage"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WATER_ASSET_PATH"]).catch(console.error);
            // Medium priority - load secondary sheets after a small delay
            // This allows the main content to render first
            const loadSecondarySheets = {
                "CanvasIsometricGrid.useEffect.loadSecondarySheets": ()=>{
                    if (currentSpritePack.constructionSrc) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSpriteImage"])(currentSpritePack.constructionSrc, true).catch(console.error);
                    }
                    if (currentSpritePack.abandonedSrc) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSpriteImage"])(currentSpritePack.abandonedSrc, true).catch(console.error);
                    }
                    if (currentSpritePack.denseSrc) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSpriteImage"])(currentSpritePack.denseSrc, true).catch(console.error);
                    }
                    if (currentSpritePack.parksSrc) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSpriteImage"])(currentSpritePack.parksSrc, true).catch(console.error);
                    }
                    if (currentSpritePack.parksConstructionSrc) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSpriteImage"])(currentSpritePack.parksConstructionSrc, true).catch(console.error);
                    }
                    if (currentSpritePack.farmsSrc) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSpriteImage"])(currentSpritePack.farmsSrc, true).catch(console.error);
                    }
                    if (currentSpritePack.shopsSrc) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSpriteImage"])(currentSpritePack.shopsSrc, true).catch(console.error);
                    }
                    if (currentSpritePack.stationsSrc) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSpriteImage"])(currentSpritePack.stationsSrc, true).catch(console.error);
                    }
                    if (currentSpritePack.modernSrc) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSpriteImage"])(currentSpritePack.modernSrc, true).catch(console.error);
                    }
                    if (currentSpritePack.servicesSrc) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSpriteImage"])(currentSpritePack.servicesSrc, true).catch(console.error);
                    }
                    if (currentSpritePack.infrastructureSrc) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSpriteImage"])(currentSpritePack.infrastructureSrc, true).catch(console.error);
                    }
                    if (currentSpritePack.mansionsSrc) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSpriteImage"])(currentSpritePack.mansionsSrc, true).catch(console.error);
                    }
                    // Load airplane sprite sheet (always loaded, not dependent on sprite pack)
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSpriteImage"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIRPLANE_SPRITE_SRC"], false).catch(console.error);
                }
            }["CanvasIsometricGrid.useEffect.loadSecondarySheets"];
            // Load secondary sheets after 50ms to prioritize first paint
            const timer = setTimeout(loadSecondarySheets, 50);
            return ({
                "CanvasIsometricGrid.useEffect": ()=>clearTimeout(timer)
            })["CanvasIsometricGrid.useEffect"];
        }
    }["CanvasIsometricGrid.useEffect"], [
        currentSpritePack
    ]);
    // Building helper functions moved to buildingHelpers.ts
    // Update canvas size on resize with high-DPI support
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasIsometricGrid.useEffect": ()=>{
            const updateSize = {
                "CanvasIsometricGrid.useEffect.updateSize": ()=>{
                    if (containerRef.current && canvasRef.current) {
                        const dpr_2 = window.devicePixelRatio || 1;
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
                            width: Math.round(rect.width * dpr_2),
                            height: Math.round(rect.height * dpr_2)
                        });
                    }
                }
            }["CanvasIsometricGrid.useEffect.updateSize"];
            updateSize();
            window.addEventListener('resize', updateSize);
            return ({
                "CanvasIsometricGrid.useEffect": ()=>window.removeEventListener('resize', updateSize)
            })["CanvasIsometricGrid.useEffect"];
        }
    }["CanvasIsometricGrid.useEffect"], []);
    // Main render function - PERF: Uses requestAnimationFrame throttling to batch multiple state updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasIsometricGrid.useEffect": ()=>{
            const canvas_2 = canvasRef.current;
            if (!canvas_2 || !imagesLoaded) return;
            const ctx_3 = canvas_2.getContext('2d');
            if (!ctx_3) return;
            // PERF: Cancel any pending render to avoid duplicate work
            if (renderPendingRef.current !== null) {
                cancelAnimationFrame(renderPendingRef.current);
            }
            // PERF: Defer render to next animation frame - batches multiple state updates into one render
            renderPendingRef.current = requestAnimationFrame({
                "CanvasIsometricGrid.useEffect": ()=>{
                    renderPendingRef.current = null;
                    // PERF: Throttle main renders at 3x speed to reduce dropped frames
                    // At high speed, we can skip some renders since simulation ticks are frequent
                    const currentSpeed_0 = worldStateRef.current.speed;
                    const now = performance.now();
                    const timeSinceLastRender = now - lastMainRenderTimeRef.current;
                    const minRenderInterval = currentSpeed_0 === 3 ? 50 : 0; // Skip renders within 50ms at 3x speed
                    if (timeSinceLastRender < minRenderInterval) {
                        return; // Skip this render, next tick will trigger a new one
                    }
                    lastMainRenderTimeRef.current = now;
                    const dpr_3 = window.devicePixelRatio || 1;
                    // Disable image smoothing for crisp pixel art
                    ctx_3.imageSmoothingEnabled = false;
                    // PERF: Clear canvas with cached gradient background - only recreate when canvas height changes
                    const bgCache = bgGradientCacheRef.current;
                    if (!bgCache.gradient || bgCache.height !== canvas_2.height) {
                        const gradient = ctx_3.createLinearGradient(0, 0, 0, canvas_2.height);
                        gradient.addColorStop(0, '#0f1419');
                        gradient.addColorStop(0.5, '#141c24');
                        gradient.addColorStop(1, '#1a2a1f');
                        bgCache.gradient = gradient;
                        bgCache.height = canvas_2.height;
                    }
                    ctx_3.fillStyle = bgCache.gradient;
                    ctx_3.fillRect(0, 0, canvas_2.width, canvas_2.height);
                    ctx_3.save();
                    // Scale for device pixel ratio first, then apply zoom
                    ctx_3.scale(dpr_3 * zoom, dpr_3 * zoom);
                    ctx_3.translate(offset.x / zoom, offset.y / zoom);
                    // Calculate visible tile range for culling (account for DPR in canvas size)
                    const viewWidth_2 = canvas_2.width / (dpr_3 * zoom);
                    const viewHeight_2 = canvas_2.height / (dpr_3 * zoom);
                    const viewLeft = -offset.x / zoom - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"];
                    const viewTop = -offset.y / zoom - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] * 2;
                    const viewRight = viewWidth_2 - offset.x / zoom + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"];
                    const viewBottom = viewHeight_2 - offset.y / zoom + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] * 2;
                    // PERF: Pre-compute visible diagonal range to skip entire rows of tiles
                    // In isometric rendering, screenY = (x + y) * (TILE_HEIGHT / 2), so sum = x + y = screenY * 2 / TILE_HEIGHT
                    // Add padding for tall buildings that may extend above their tile position
                    const visibleMinSum = Math.max(0, Math.floor((viewTop - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] * 6) * 2 / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"]));
                    const visibleMaxSum = Math.min(gridSize * 2 - 2, Math.ceil((viewBottom + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"]) * 2 / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"]));
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
                    function hasRoad(gridX_0, gridY_0) {
                        if (gridX_0 < 0 || gridX_0 >= gridSize || gridY_0 < 0 || gridY_0 >= gridSize) return false;
                        const type = grid[gridY_0][gridX_0].building.type;
                        return type === 'road' || type === 'bridge';
                    }
                    // Helper function to check if a tile is a bridge (for beach exclusion)
                    function isBridge(gridX_1, gridY_1) {
                        if (gridX_1 < 0 || gridX_1 >= gridSize || gridY_1 < 0 || gridY_1 >= gridSize) return false;
                        return grid[gridY_1][gridX_1].building.type === 'bridge';
                    }
                    // Helper function to check if a tile has a marina dock or pier (no beaches next to these)
                    // Also checks 'empty' tiles that are part of multi-tile marina buildings
                    function hasMarinaPier(gridX_2, gridY_2) {
                        if (gridX_2 < 0 || gridX_2 >= gridSize || gridY_2 < 0 || gridY_2 >= gridSize) return false;
                        const buildingType_0 = grid[gridY_2][gridX_2].building.type;
                        if (buildingType_0 === 'marina_docks_small' || buildingType_0 === 'pier_large') return true;
                        // Check if this is an 'empty' tile that belongs to a marina (2x2 building)
                        // Marina is 2x2, so check up to 1 tile away for the origin
                        if (buildingType_0 === 'empty') {
                            for(let dy_0 = 0; dy_0 <= 1; dy_0++){
                                for(let dx_0 = 0; dx_0 <= 1; dx_0++){
                                    const checkX = gridX_2 - dx_0;
                                    const checkY = gridY_2 - dy_0;
                                    if (checkX >= 0 && checkY >= 0 && checkX < gridSize && checkY < gridSize) {
                                        const checkType = grid[checkY][checkX].building.type;
                                        if (checkType === 'marina_docks_small') {
                                            // Verify this tile is within the 2x2 footprint
                                            if (gridX_2 >= checkX && gridX_2 < checkX + 2 && gridY_2 >= checkY && gridY_2 < checkY + 2) {
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
                        const key_1 = `${gx},${gy}`;
                        let info = roadAnalysisCacheRef.current.get(key_1);
                        if (!info) {
                            info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$trafficSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyzeMergedRoad"])(grid, gridSize, gx, gy);
                            roadAnalysisCacheRef.current.set(key_1, info);
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
                    function drawIsometricTile(ctx_4, x_0, y_0, tile_0, highlight, currentZoom_4, skipGreyBase = false, skipGreenBase = false) {
                        const w = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"];
                        const h = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"];
                        // Determine tile colors (top face and shading)
                        let topColor = '#4a7c3f'; // grass
                        let strokeColor = '#2d4a26';
                        // PERF: Use pre-computed tile metadata for grey base check (O(1) lookup)
                        const tileRenderMetadata = getTileMetadata(tile_0.x, tile_0.y);
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
                        ].includes(tile_0.building.type);
                        const hasGreyBase = tileRenderMetadata?.needsGreyBase ?? false;
                        if (tile_0.building.type === 'water') {
                            topColor = '#2563eb';
                            strokeColor = '#1e3a8a';
                        } else if (tile_0.building.type === 'road' || tile_0.building.type === 'bridge') {
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
                        } else if (tile_0.zone === 'residential') {
                            if (tile_0.building.type !== 'grass' && tile_0.building.type !== 'empty') {
                                topColor = '#3d7c3f';
                            } else {
                                topColor = '#2d5a2d';
                            }
                            strokeColor = '#22c55e';
                        } else if (tile_0.zone === 'commercial') {
                            if (tile_0.building.type !== 'grass' && tile_0.building.type !== 'empty') {
                                topColor = '#3a5c7c';
                            } else {
                                topColor = '#2a4a6a';
                            }
                            strokeColor = '#3b82f6';
                        } else if (tile_0.zone === 'industrial') {
                            if (tile_0.building.type !== 'grass' && tile_0.building.type !== 'empty') {
                                topColor = '#7c5c3a';
                            } else {
                                topColor = '#6a4a2a';
                            }
                            strokeColor = '#f59e0b';
                        }
                        // Skip drawing green base for tiles adjacent to water (will be drawn later over water)
                        // This includes grass, empty, and tree tiles - all have green bases
                        // Also skip bridge tiles - they will have water drawn underneath them in the road queue
                        const shouldSkipDrawing = skipGreenBase && (tile_0.building.type === 'grass' || tile_0.building.type === 'empty' || tile_0.building.type === 'tree') || tile_0.building.type === 'bridge';
                        // Draw the isometric diamond (top face)
                        if (!shouldSkipDrawing) {
                            ctx_4.fillStyle = topColor;
                            ctx_4.beginPath();
                            ctx_4.moveTo(x_0 + w / 2, y_0);
                            ctx_4.lineTo(x_0 + w, y_0 + h / 2);
                            ctx_4.lineTo(x_0 + w / 2, y_0 + h);
                            ctx_4.lineTo(x_0, y_0 + h / 2);
                            ctx_4.closePath();
                            ctx_4.fill();
                            // Draw grid lines only when zoomed in (hide when zoom < 0.6)
                            if (currentZoom_4 >= 0.6) {
                                ctx_4.strokeStyle = strokeColor;
                                ctx_4.lineWidth = 0.5;
                                ctx_4.stroke();
                            }
                            // Draw zone border with dashed line (hide when zoomed out, only on grass/empty tiles - not on roads or buildings)
                            if (tile_0.zone !== 'none' && currentZoom_4 >= 0.95 && (tile_0.building.type === 'grass' || tile_0.building.type === 'empty')) {
                                ctx_4.strokeStyle = tile_0.zone === 'residential' ? '#22c55e' : tile_0.zone === 'commercial' ? '#3b82f6' : '#f59e0b';
                                ctx_4.lineWidth = 1.5;
                                ctx_4.setLineDash([
                                    4,
                                    2
                                ]);
                                ctx_4.stroke();
                                ctx_4.setLineDash([]);
                            }
                        }
                        // Highlight on hover/select (always draw, even if base was skipped)
                        if (highlight) {
                            // Draw a semi-transparent fill for better visibility
                            ctx_4.fillStyle = 'rgba(255, 255, 255, 0.25)';
                            ctx_4.beginPath();
                            ctx_4.moveTo(x_0 + w / 2, y_0);
                            ctx_4.lineTo(x_0 + w, y_0 + h / 2);
                            ctx_4.lineTo(x_0 + w / 2, y_0 + h);
                            ctx_4.lineTo(x_0, y_0 + h / 2);
                            ctx_4.closePath();
                            ctx_4.fill();
                            // Draw white border
                            ctx_4.strokeStyle = '#ffffff';
                            ctx_4.lineWidth = 2;
                            ctx_4.stroke();
                        }
                    }
                    // Helper function to draw water tile at a given screen position
                    // Used for marina/pier buildings that sit on water
                    function drawWaterTileAt(ctx_5, screenX_0, screenY_0, gridX_3, gridY_3) {
                        const waterImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedImage"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WATER_ASSET_PATH"]);
                        if (!waterImage) return;
                        const w_0 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"];
                        const h_0 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"];
                        const tileCenterX = screenX_0 + w_0 / 2;
                        const tileCenterY = screenY_0 + h_0 / 2;
                        // Random subcrop of water texture based on tile position for variety
                        const imgW = waterImage.naturalWidth || waterImage.width;
                        const imgH = waterImage.naturalHeight || waterImage.height;
                        // Deterministic "random" offset based on tile position
                        const seedX = (gridX_3 * 7919 + gridY_3 * 6271) % 1000 / 1000;
                        const seedY = (gridX_3 * 4177 + gridY_3 * 9311) % 1000 / 1000;
                        // Take a subcrop for variety
                        const cropScale = 0.35;
                        const cropW = imgW * cropScale;
                        const cropH = imgH * cropScale;
                        const maxOffsetX_0 = imgW - cropW;
                        const maxOffsetY_0 = imgH - cropH;
                        const srcX = seedX * maxOffsetX_0;
                        const srcY = seedY * maxOffsetY_0;
                        ctx_5.save();
                        // Clip to isometric diamond shape
                        ctx_5.beginPath();
                        ctx_5.moveTo(screenX_0 + w_0 / 2, screenY_0); // top
                        ctx_5.lineTo(screenX_0 + w_0, screenY_0 + h_0 / 2); // right
                        ctx_5.lineTo(screenX_0 + w_0 / 2, screenY_0 + h_0); // bottom
                        ctx_5.lineTo(screenX_0, screenY_0 + h_0 / 2); // left
                        ctx_5.closePath();
                        ctx_5.clip();
                        const aspectRatio = cropH / cropW;
                        const jitterX = (seedX - 0.5) * w_0 * 0.3;
                        const jitterY = (seedY - 0.5) * h_0 * 0.3;
                        // Draw water with slight transparency
                        const destWidth = w_0 * 1.15;
                        const destHeight = destWidth * aspectRatio;
                        ctx_5.globalAlpha = 0.95;
                        ctx_5.drawImage(waterImage, srcX, srcY, cropW, cropH, Math.round(tileCenterX - destWidth / 2 + jitterX * 0.3), Math.round(tileCenterY - destHeight / 2 + jitterY * 0.3), Math.round(destWidth), Math.round(destHeight));
                        ctx_5.restore();
                    }
                    // Draw building sprite
                    function drawBuilding(ctx_6, x_1, y_1, tile_1) {
                        const buildingType_1 = tile_1.building.type;
                        const w_1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"];
                        const h_1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"];
                        // Handle roads separately with adjacency
                        if (buildingType_1 === 'road') {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$roadDrawing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawRoad"])(ctx_6, x_1, y_1, tile_1.x, tile_1.y, zoom, roadDrawingOptions);
                            return;
                        }
                        // Handle bridges with special rendering
                        if (buildingType_1 === 'bridge') {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$bridgeDrawing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawBridgeTile"])(ctx_6, x_1, y_1, tile_1.building, tile_1.x, tile_1.y, zoom);
                            return;
                        }
                        // Draw water tiles underneath marina/pier buildings
                        if (buildingType_1 === 'marina_docks_small' || buildingType_1 === 'pier_large') {
                            const buildingSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBuildingSize"])(buildingType_1);
                            // Draw water tiles for each tile in the building's footprint
                            for(let dx_1 = 0; dx_1 < buildingSize.width; dx_1++){
                                for(let dy_1 = 0; dy_1 < buildingSize.height; dy_1++){
                                    const tileGridX = tile_1.x + dx_1;
                                    const tileGridY = tile_1.y + dy_1;
                                    const { screenX: screenX_1, screenY: screenY_1 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(tileGridX, tileGridY, 0, 0);
                                    drawWaterTileAt(ctx_6, screenX_1, screenY_1, tileGridX, tileGridY);
                                }
                            }
                        }
                        // Check if this building type has a sprite in the tile renderer, parks sheet, or stations sheet
                        const activePack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveSpritePack"])();
                        const hasTileSprite = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BUILDING_TO_SPRITE"][buildingType_1] || activePack.parksBuildings && activePack.parksBuildings[buildingType_1] || activePack.stationsVariants && activePack.stationsVariants[buildingType_1];
                        if (hasTileSprite) {
                            // Special handling for water: use separate water.png image with blending for adjacent water tiles
                            if (buildingType_1 === 'water') {
                                const waterImage_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedImage"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WATER_ASSET_PATH"]);
                                // Check which adjacent tiles are also water for blending
                                const gridX_4 = tile_1.x;
                                const gridY_4 = tile_1.y;
                                const adjacentWater = {
                                    north: gridX_4 > 0 && grid[gridY_4]?.[gridX_4 - 1]?.building.type === 'water',
                                    east: gridY_4 > 0 && grid[gridY_4 - 1]?.[gridX_4]?.building.type === 'water',
                                    south: gridX_4 < gridSize - 1 && grid[gridY_4]?.[gridX_4 + 1]?.building.type === 'water',
                                    west: gridY_4 < gridSize - 1 && grid[gridY_4 + 1]?.[gridX_4]?.building.type === 'water'
                                };
                                // Count adjacent water tiles
                                const adjacentCount = (adjacentWater.north ? 1 : 0) + (adjacentWater.east ? 1 : 0) + (adjacentWater.south ? 1 : 0) + (adjacentWater.west ? 1 : 0);
                                if (waterImage_0) {
                                    // Center the water sprite on the tile
                                    const tileCenterX_0 = x_1 + w_1 / 2;
                                    const tileCenterY_0 = y_1 + h_1 / 2;
                                    // Random subcrop of water texture based on tile position for variety
                                    const imgW_0 = waterImage_0.naturalWidth || waterImage_0.width;
                                    const imgH_0 = waterImage_0.naturalHeight || waterImage_0.height;
                                    // Deterministic "random" offset based on tile position
                                    const seedX_0 = (gridX_4 * 7919 + gridY_4 * 6271) % 1000 / 1000;
                                    const seedY_0 = (gridX_4 * 4177 + gridY_4 * 9311) % 1000 / 1000;
                                    // Take a subcrop - use 35% of the image, offset randomly for variety
                                    const cropScale_0 = 0.35;
                                    const cropW_0 = imgW_0 * cropScale_0;
                                    const cropH_0 = imgH_0 * cropScale_0;
                                    const maxOffsetX_1 = imgW_0 - cropW_0;
                                    const maxOffsetY_1 = imgH_0 - cropH_0;
                                    const srcX_0 = seedX_0 * maxOffsetX_1;
                                    const srcY_0 = seedY_0 * maxOffsetY_1;
                                    // Create a clipping path - expand toward adjacent WATER tiles only
                                    // This allows blending between water tiles while preventing bleed onto land
                                    const expand = w_1 * 0.4; // How much to expand toward water neighbors
                                    // Calculate expanded corners based on water adjacency
                                    // North edge (top-left): between left and top corners
                                    // East edge (top-right): between top and right corners
                                    // South edge (bottom-right): between right and bottom corners
                                    // West edge (bottom-left): between bottom and left corners
                                    const topY = y_1 - (adjacentWater.north && adjacentWater.east ? expand * 0.5 : 0);
                                    const rightX = x_1 + w_1 + (adjacentWater.east && adjacentWater.south ? expand * 0.5 : 0);
                                    const bottomY = y_1 + h_1 + (adjacentWater.south && adjacentWater.west ? expand * 0.5 : 0);
                                    const leftX = x_1 - (adjacentWater.west && adjacentWater.north ? expand * 0.5 : 0);
                                    // Expand individual edges toward water neighbors only
                                    // Each edge should only expand if THAT specific edge direction has water
                                    const topExpand = adjacentWater.north && adjacentWater.east ? expand * 0.3 : 0;
                                    const rightExpand = adjacentWater.east && adjacentWater.south ? expand * 0.3 : 0;
                                    const bottomExpand = adjacentWater.south && adjacentWater.west ? expand * 0.3 : 0;
                                    const leftExpand = adjacentWater.west && adjacentWater.north ? expand * 0.3 : 0;
                                    ctx_6.save();
                                    ctx_6.beginPath();
                                    ctx_6.moveTo(x_1 + w_1 / 2, topY - topExpand); // top
                                    ctx_6.lineTo(rightX + rightExpand, y_1 + h_1 / 2); // right
                                    ctx_6.lineTo(x_1 + w_1 / 2, bottomY + bottomExpand); // bottom
                                    ctx_6.lineTo(leftX - leftExpand, y_1 + h_1 / 2); // left
                                    ctx_6.closePath();
                                    ctx_6.clip();
                                    const aspectRatio_0 = cropH_0 / cropW_0;
                                    const savedAlpha = ctx_6.globalAlpha;
                                    // Jitter for variety
                                    const jitterX_0 = (seedX_0 - 0.5) * w_1 * 0.3;
                                    const jitterY_0 = (seedY_0 - 0.5) * h_1 * 0.3;
                                    // PERF: When zoomed out (zoom < 0.5), use single pass water rendering to reduce draw calls
                                    // At low zoom, the blending detail is not visible anyway
                                    if (zoom < 0.5) {
                                        // Simplified single-pass water at low zoom
                                        const destWidth_0 = w_1 * 1.15;
                                        const destHeight_0 = destWidth_0 * aspectRatio_0;
                                        ctx_6.globalAlpha = 0.9;
                                        ctx_6.drawImage(waterImage_0, srcX_0, srcY_0, cropW_0, cropH_0, Math.round(tileCenterX_0 - destWidth_0 / 2), Math.round(tileCenterY_0 - destHeight_0 / 2), Math.round(destWidth_0), Math.round(destHeight_0));
                                    } else if (adjacentCount >= 2) {
                                        // Two passes: large soft outer, smaller solid core
                                        // Outer pass - large, semi-transparent for blending
                                        const outerScale = 2.0 + adjacentCount * 0.3;
                                        const outerWidth = w_1 * outerScale;
                                        const outerHeight = outerWidth * aspectRatio_0;
                                        ctx_6.globalAlpha = 0.35;
                                        ctx_6.drawImage(waterImage_0, srcX_0, srcY_0, cropW_0, cropH_0, Math.round(tileCenterX_0 - outerWidth / 2 + jitterX_0), Math.round(tileCenterY_0 - outerHeight / 2 + jitterY_0), Math.round(outerWidth), Math.round(outerHeight));
                                        // Core pass - full opacity
                                        const coreScale = 1.1;
                                        const coreWidth = w_1 * coreScale;
                                        const coreHeight = coreWidth * aspectRatio_0;
                                        ctx_6.globalAlpha = 0.9;
                                        ctx_6.drawImage(waterImage_0, srcX_0, srcY_0, cropW_0, cropH_0, Math.round(tileCenterX_0 - coreWidth / 2 + jitterX_0 * 0.5), Math.round(tileCenterY_0 - coreHeight / 2 + jitterY_0 * 0.5), Math.round(coreWidth), Math.round(coreHeight));
                                    } else {
                                        // Edge tile with few water neighbors - single contained draw
                                        const destWidth_1 = w_1 * 1.15;
                                        const destHeight_1 = destWidth_1 * aspectRatio_0;
                                        ctx_6.globalAlpha = 0.95;
                                        ctx_6.drawImage(waterImage_0, srcX_0, srcY_0, cropW_0, cropH_0, Math.round(tileCenterX_0 - destWidth_1 / 2 + jitterX_0 * 0.3), Math.round(tileCenterY_0 - destHeight_1 / 2 + jitterY_0 * 0.3), Math.round(destWidth_1), Math.round(destHeight_1));
                                    }
                                    ctx_6.globalAlpha = savedAlpha;
                                    ctx_6.restore();
                                } else {
                                    // Water image not loaded yet - draw placeholder diamond
                                    ctx_6.fillStyle = '#0ea5e9';
                                    ctx_6.beginPath();
                                    ctx_6.moveTo(x_1 + w_1 / 2, y_1);
                                    ctx_6.lineTo(x_1 + w_1, y_1 + h_1 / 2);
                                    ctx_6.lineTo(x_1 + w_1 / 2, y_1 + h_1);
                                    ctx_6.lineTo(x_1, y_1 + h_1 / 2);
                                    ctx_6.closePath();
                                    ctx_6.fill();
                                }
                            } else {
                                // ===== TILE RENDERER PATH =====
                                // Handles both single-tile and multi-tile buildings using extracted sprite utilities
                                // Check if building is under construction (constructionProgress < 100)
                                const isUnderConstruction = tile_1.building.constructionProgress !== undefined && tile_1.building.constructionProgress < 100;
                                // Construction has two phases:
                                // Phase 1 (0-40%): Foundation/dirt plot phase - just show a dirt mound
                                // Phase 2 (40-100%): Construction scaffolding phase - show construction sprite
                                const constructionProgress = tile_1.building.constructionProgress ?? 100;
                                const isFoundationPhase = isUnderConstruction && constructionProgress < 40;
                                // If in foundation phase, draw the foundation plot and skip sprite rendering
                                if (isFoundationPhase) {
                                    // Get building size to handle multi-tile foundations
                                    const buildingSize_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBuildingSize"])(buildingType_1);
                                    // For multi-tile buildings, we only draw the foundation from the origin tile
                                    if (buildingSize_0.width > 1 || buildingSize_0.height > 1) {
                                        // Draw foundation plots for each tile in the footprint
                                        for(let dy_2 = 0; dy_2 < buildingSize_0.height; dy_2++){
                                            for(let dx_2 = 0; dx_2 < buildingSize_0.width; dx_2++){
                                                const plotX = x_1 + (dx_2 - dy_2) * (w_1 / 2);
                                                const plotY = y_1 + (dx_2 + dy_2) * (h_1 / 2);
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$drawing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawFoundationPlot"])(ctx_6, plotX, plotY, w_1, h_1, zoom);
                                            }
                                        }
                                    } else {
                                        // Single-tile building - just draw one foundation
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$drawing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawFoundationPlot"])(ctx_6, x_1, y_1, w_1, h_1, zoom);
                                    }
                                    return;
                                }
                                // Use extracted utilities to determine sprite source, coords, scale, and offsets
                                const spriteSourceInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$buildingSprite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectSpriteSource"])(buildingType_1, tile_1.building, tile_1.x, tile_1.y, activePack);
                                const filteredSpriteSheet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedImage"])(spriteSourceInfo.source, true) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$imageLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedImage"])(spriteSourceInfo.source);
                                if (filteredSpriteSheet) {
                                    const sheetWidth = filteredSpriteSheet.naturalWidth || filteredSpriteSheet.width;
                                    const sheetHeight = filteredSpriteSheet.naturalHeight || filteredSpriteSheet.height;
                                    // Calculate sprite coordinates using extracted utility
                                    const coords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$buildingSprite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateSpriteCoords"])(buildingType_1, spriteSourceInfo, sheetWidth, sheetHeight, activePack);
                                    if (coords) {
                                        // Calculate scale and offsets using extracted utilities
                                        const scaleMultiplier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$buildingSprite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateSpriteScale"])(buildingType_1, spriteSourceInfo, tile_1.building, activePack);
                                        const offsets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$buildingSprite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateSpriteOffsets"])(buildingType_1, spriteSourceInfo, tile_1.building, activePack);
                                        // Get building size for positioning
                                        const buildingSize_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBuildingSize"])(buildingType_1);
                                        const isMultiTile = buildingSize_1.width > 1 || buildingSize_1.height > 1;
                                        // Calculate draw position for multi-tile buildings
                                        let drawPosX = x_1;
                                        let drawPosY = y_1;
                                        if (isMultiTile) {
                                            const frontmostOffsetX = buildingSize_1.width - 1;
                                            const frontmostOffsetY = buildingSize_1.height - 1;
                                            const screenOffsetX = (frontmostOffsetX - frontmostOffsetY) * (w_1 / 2);
                                            const screenOffsetY = (frontmostOffsetX + frontmostOffsetY) * (h_1 / 2);
                                            drawPosX = x_1 + screenOffsetX;
                                            drawPosY = y_1 + screenOffsetY;
                                        }
                                        // Calculate destination size
                                        const destWidth_2 = w_1 * 1.2 * scaleMultiplier;
                                        const aspectRatio_1 = coords.sh / coords.sw;
                                        const destHeight_2 = destWidth_2 * aspectRatio_1;
                                        // Calculate final position with offsets
                                        const drawX = drawPosX + w_1 / 2 - destWidth_2 / 2 + offsets.horizontal * w_1;
                                        let verticalPush;
                                        if (isMultiTile) {
                                            const footprintDepth = buildingSize_1.width + buildingSize_1.height - 2;
                                            verticalPush = footprintDepth * h_1 * 0.25;
                                        } else {
                                            verticalPush = destHeight_2 * 0.15;
                                        }
                                        verticalPush += offsets.vertical * h_1;
                                        const drawY = drawPosY + h_1 - destHeight_2 + verticalPush;
                                        // Determine flip based on road adjacency or random
                                        const isWaterfrontAsset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requiresWaterAdjacency"])(buildingType_1);
                                        const shouldRoadMirror = ({
                                            "CanvasIsometricGrid.useEffect.drawBuilding.shouldRoadMirror": ()=>{
                                                if (isWaterfrontAsset) return false;
                                                const originMetadata = getTileMetadata(tile_1.x, tile_1.y);
                                                if (originMetadata?.hasAdjacentRoad) {
                                                    return originMetadata.shouldFlipForRoad;
                                                }
                                                const mirrorSeed = (tile_1.x * 47 + tile_1.y * 83) % 100;
                                                return mirrorSeed < 50;
                                            }
                                        })["CanvasIsometricGrid.useEffect.drawBuilding.shouldRoadMirror"]();
                                        const baseFlipped = tile_1.building.flipped === true;
                                        const isFlipped = baseFlipped !== shouldRoadMirror;
                                        if (isFlipped) {
                                            ctx_6.save();
                                            const centerX = Math.round(drawX + destWidth_2 / 2);
                                            ctx_6.translate(centerX, 0);
                                            ctx_6.scale(-1, 1);
                                            ctx_6.translate(-centerX, 0);
                                            ctx_6.drawImage(filteredSpriteSheet, coords.sx, coords.sy, coords.sw, coords.sh, Math.round(drawX), Math.round(drawY), Math.round(destWidth_2), Math.round(destHeight_2));
                                            ctx_6.restore();
                                        } else {
                                            ctx_6.drawImage(filteredSpriteSheet, coords.sx, coords.sy, coords.sw, coords.sh, Math.round(drawX), Math.round(drawY), Math.round(destWidth_2), Math.round(destHeight_2));
                                        }
                                    }
                                } else {
                                    // Sprite sheet not loaded yet - draw placeholder building
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$placeholders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawPlaceholderBuilding"])(ctx_6, x_1, y_1, buildingType_1, w_1, h_1);
                                }
                            }
                        }
                        // Draw fire effect
                        if (tile_1.building.onFire) {
                            const fireX = x_1 + w_1 / 2;
                            const fireY = y_1 - 10;
                            ctx_6.fillStyle = 'rgba(255, 100, 0, 0.5)';
                            ctx_6.beginPath();
                            ctx_6.ellipse(fireX, fireY, 18, 25, 0, 0, Math.PI * 2);
                            ctx_6.fill();
                            ctx_6.fillStyle = 'rgba(255, 200, 0, 0.8)';
                            ctx_6.beginPath();
                            ctx_6.ellipse(fireX, fireY + 5, 10, 15, 0, 0, Math.PI * 2);
                            ctx_6.fill();
                            ctx_6.fillStyle = 'rgba(255, 255, 200, 0.9)';
                            ctx_6.beginPath();
                            ctx_6.ellipse(fireX, fireY + 8, 5, 8, 0, 0, Math.PI * 2);
                            ctx_6.fill();
                        }
                    }
                    // Draw tiles in isometric order (back to front)
                    // PERF: Only iterate through diagonal bands that intersect the visible viewport
                    for(let sum = visibleMinSum; sum <= visibleMaxSum; sum++){
                        for(let x_2 = Math.max(0, sum - gridSize + 1); x_2 <= Math.min(sum, gridSize - 1); x_2++){
                            const y_2 = sum - x_2;
                            if (y_2 < 0 || y_2 >= gridSize) continue;
                            const { screenX: screenX_2, screenY: screenY_2 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(x_2, y_2, 0, 0);
                            // Viewport culling
                            if (screenX_2 + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] < viewLeft || screenX_2 > viewRight || screenY_2 + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] * 4 < viewTop || screenY_2 > viewBottom) {
                                continue;
                            }
                            const tile_2 = grid[y_2][x_2];
                            // PERF: Hover and selection highlights are now rendered on a separate canvas layer
                            // Only keep drag rect and subway station highlights in main render (these change infrequently)
                            // Check if tile is in drag selection rectangle (only show for zoning tools)
                            const isInDragRect = showsDragGrid && dragStartTile && dragEndTile && x_2 >= Math.min(dragStartTile.x, dragEndTile.x) && x_2 <= Math.max(dragStartTile.x, dragEndTile.x) && y_2 >= Math.min(dragStartTile.y, dragEndTile.y) && y_2 <= Math.max(dragStartTile.y, dragEndTile.y);
                            // PERF: Use pre-computed tile metadata (O(1) lookup instead of expensive per-tile calculations)
                            const tileMetadata = getTileMetadata(x_2, y_2);
                            const needsGreyBase = tileMetadata?.needsGreyBase ?? false;
                            const needsGreenBaseOverWater = tileMetadata?.needsGreenBaseOverWater ?? false;
                            const needsGreenBaseForPark = tileMetadata?.needsGreenBaseForPark ?? false;
                            // Draw base tile for all tiles (including water), but skip gray bases for buildings and green bases for grass/empty adjacent to water or parks
                            // Highlight subway stations when subway overlay is active
                            const isSubwayStationHighlight = overlayMode === 'subway' && tile_2.building.type === 'subway_station';
                            drawIsometricTile(ctx_3, screenX_2, screenY_2, tile_2, !!(isInDragRect || isSubwayStationHighlight), zoom, true, needsGreenBaseOverWater || needsGreenBaseForPark);
                            if (needsGreyBase) {
                                baseTileQueue.push({
                                    screenX: screenX_2,
                                    screenY: screenY_2,
                                    tile: tile_2,
                                    depth: x_2 + y_2
                                });
                            }
                            if (needsGreenBaseOverWater || needsGreenBaseForPark) {
                                greenBaseTileQueue.push({
                                    screenX: screenX_2,
                                    screenY: screenY_2,
                                    tile: tile_2,
                                    depth: x_2 + y_2
                                });
                            }
                            // Separate water tiles into their own queue (drawn after base tiles, below other buildings)
                            if (tile_2.building.type === 'water') {
                                const size_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBuildingSize"])(tile_2.building.type);
                                const depth = x_2 + y_2 + size_0.width + size_0.height - 2;
                                waterQueue.push({
                                    screenX: screenX_2,
                                    screenY: screenY_2,
                                    tile: tile_2,
                                    depth
                                });
                            } else if (tile_2.building.type === 'road') {
                                const depth_0 = x_2 + y_2;
                                roadQueue.push({
                                    screenX: screenX_2,
                                    screenY: screenY_2,
                                    tile: tile_2,
                                    depth: depth_0
                                });
                            } else if (tile_2.building.type === 'bridge') {
                                const depth_1 = x_2 + y_2;
                                bridgeQueue.push({
                                    screenX: screenX_2,
                                    screenY: screenY_2,
                                    tile: tile_2,
                                    depth: depth_1
                                });
                            } else if (tile_2.building.type === 'rail') {
                                const depth_2 = x_2 + y_2;
                                railQueue.push({
                                    screenX: screenX_2,
                                    screenY: screenY_2,
                                    tile: tile_2,
                                    depth: depth_2
                                });
                            } else if ((tile_2.building.type === 'grass' || tile_2.building.type === 'empty') && (tileMetadata?.isAdjacentToWater ?? false)) {
                                beachQueue.push({
                                    screenX: screenX_2,
                                    screenY: screenY_2,
                                    tile: tile_2,
                                    depth: x_2 + y_2
                                });
                            } else {
                                const isBuilding = tile_2.building.type !== 'grass' && tile_2.building.type !== 'empty';
                                if (isBuilding) {
                                    const size_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBuildingSize"])(tile_2.building.type);
                                    const depth_3 = x_2 + y_2 + size_1.width + size_1.height - 2;
                                    buildingQueue.push({
                                        screenX: screenX_2,
                                        screenY: screenY_2,
                                        tile: tile_2,
                                        depth: depth_3
                                    });
                                }
                            }
                            // For subway overlay, show ALL non-water tiles (valid placement areas + existing subway)
                            // For other overlays, show buildings only
                            const showOverlay = overlayMode !== 'none' && (overlayMode === 'subway' ? tile_2.building.type !== 'water' // For subway mode, show all non-water tiles
                             : tile_2.building.type !== 'grass' && tile_2.building.type !== 'water' && tile_2.building.type !== 'road');
                            if (showOverlay) {
                                overlayQueue.push({
                                    screenX: screenX_2,
                                    screenY: screenY_2,
                                    tile: tile_2
                                });
                            }
                        }
                    }
                    // Draw water sprites (after base tiles, below other buildings)
                    // Add clipping to prevent water from overflowing map boundaries
                    ctx_3.save();
                    // Create clipping path for map boundaries - form a diamond shape around the map
                    // Get the four corner tiles of the map
                    const topLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(0, 0, 0, 0);
                    const topRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(gridSize - 1, 0, 0, 0);
                    const bottomRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(gridSize - 1, gridSize - 1, 0, 0);
                    const bottomLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(0, gridSize - 1, 0, 0);
                    const w_2 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"];
                    const h_2 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"];
                    // Create clipping path following the outer edges of the map
                    // The path goes around the perimeter: top -> right -> bottom -> left -> back to top
                    ctx_3.beginPath();
                    // Start at top point (top-left tile's top corner)
                    ctx_3.moveTo(topLeft.screenX + w_2 / 2, topLeft.screenY);
                    // Go to right point (top-right tile's right corner)
                    ctx_3.lineTo(topRight.screenX + w_2, topRight.screenY + h_2 / 2);
                    // Go to bottom point (bottom-right tile's bottom corner)
                    ctx_3.lineTo(bottomRight.screenX + w_2 / 2, bottomRight.screenY + h_2);
                    // Go to left point (bottom-left tile's left corner)
                    ctx_3.lineTo(bottomLeft.screenX, bottomLeft.screenY + h_2 / 2);
                    // Close the path back to top
                    ctx_3.closePath();
                    ctx_3.clip();
                    // PERF: Use insertion sort instead of .sort() - O(n) for nearly-sorted data
                    insertionSortByDepth(waterQueue);
                    // PERF: Use for loop instead of forEach to avoid function call overhead
                    for(let i_0 = 0; i_0 < waterQueue.length; i_0++){
                        const { tile: tile_3, screenX: screenX_3, screenY: screenY_3 } = waterQueue[i_0];
                        drawBuilding(ctx_3, screenX_3, screenY_3, tile_3);
                    }
                    ctx_3.restore(); // Remove clipping after drawing water
                    // Draw beaches on water tiles (after water, outside clipping region)
                    // Note: waterQueue is already sorted from above
                    // PERF: Skip beach rendering when zoomed out - detail is not visible
                    if (zoom >= 0.4) {
                        // PERF: Use for loop instead of forEach
                        for(let i_1 = 0; i_1 < waterQueue.length; i_1++){
                            const { tile: tile_4, screenX: screenX_4, screenY: screenY_4 } = waterQueue[i_1];
                            // Compute land adjacency for each edge (opposite of water adjacency)
                            // Only consider tiles within bounds - don't draw beaches on map edges
                            // Also exclude beaches next to marina docks, piers, and bridges (bridges are over water)
                            const adjacentLand = {
                                north: tile_4.x - 1 >= 0 && tile_4.x - 1 < gridSize && tile_4.y >= 0 && tile_4.y < gridSize && !isWater(tile_4.x - 1, tile_4.y) && !hasMarinaPier(tile_4.x - 1, tile_4.y) && !isBridge(tile_4.x - 1, tile_4.y),
                                east: tile_4.x >= 0 && tile_4.x < gridSize && tile_4.y - 1 >= 0 && tile_4.y - 1 < gridSize && !isWater(tile_4.x, tile_4.y - 1) && !hasMarinaPier(tile_4.x, tile_4.y - 1) && !isBridge(tile_4.x, tile_4.y - 1),
                                south: tile_4.x + 1 >= 0 && tile_4.x + 1 < gridSize && tile_4.y >= 0 && tile_4.y < gridSize && !isWater(tile_4.x + 1, tile_4.y) && !hasMarinaPier(tile_4.x + 1, tile_4.y) && !isBridge(tile_4.x + 1, tile_4.y),
                                west: tile_4.x >= 0 && tile_4.x < gridSize && tile_4.y + 1 >= 0 && tile_4.y + 1 < gridSize && !isWater(tile_4.x, tile_4.y + 1) && !hasMarinaPier(tile_4.x, tile_4.y + 1) && !isBridge(tile_4.x, tile_4.y + 1)
                            };
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$drawing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawBeachOnWater"])(ctx_3, screenX_4, screenY_4, adjacentLand);
                        }
                    }
                    // PERF: Pre-compute tile dimensions once outside loops
                    const tileWidth = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"];
                    const tileHeight = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"];
                    const halfTileWidth = tileWidth / 2;
                    const halfTileHeight = tileHeight / 2;
                    // Draw green base tiles for grass/empty tiles adjacent to water BEFORE bridges
                    // This ensures bridge railings are drawn on top of the green base tiles
                    insertionSortByDepth(greenBaseTileQueue);
                    for(let i_2 = 0; i_2 < greenBaseTileQueue.length; i_2++){
                        const { tile: tile_5, screenX: screenX_5, screenY: screenY_5 } = greenBaseTileQueue[i_2];
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$drawing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawGreenBaseTile"])(ctx_3, screenX_5, screenY_5, tile_5, zoom);
                    }
                    // Draw roads (above water, needs full redraw including base tile)
                    insertionSortByDepth(roadQueue);
                    // PERF: Use for loop instead of forEach
                    for(let i_3 = 0; i_3 < roadQueue.length; i_3++){
                        const { tile: tile_6, screenX: screenX_6, screenY: screenY_6 } = roadQueue[i_3];
                        // Draw road base tile first (grey diamond)
                        ctx_3.fillStyle = '#4a4a4a';
                        ctx_3.beginPath();
                        ctx_3.moveTo(screenX_6 + halfTileWidth, screenY_6);
                        ctx_3.lineTo(screenX_6 + tileWidth, screenY_6 + halfTileHeight);
                        ctx_3.lineTo(screenX_6 + halfTileWidth, screenY_6 + tileHeight);
                        ctx_3.lineTo(screenX_6, screenY_6 + halfTileHeight);
                        ctx_3.closePath();
                        ctx_3.fill();
                        // Draw road markings and sidewalks
                        drawBuilding(ctx_3, screenX_6, screenY_6, tile_6);
                        // If this road has a rail overlay, draw just the rail tracks (ties and rails, no ballast)
                        // Crossing signals/gates are drawn later (after rail tiles) to avoid z-order issues
                        if (tile_6.hasRailOverlay) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$railSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawRailTracksOnly"])(ctx_3, screenX_6, screenY_6, tile_6.x, tile_6.y, grid, gridSize, zoom);
                        }
                    }
                    // Draw bridges AFTER roads to ensure bridge decks cover road centerlines
                    insertionSortByDepth(bridgeQueue);
                    for(let i_4 = 0; i_4 < bridgeQueue.length; i_4++){
                        const { tile: tile_7, screenX: screenX_7, screenY: screenY_7 } = bridgeQueue[i_4];
                        // Draw water tile underneath the bridge
                        drawWaterTileAt(ctx_3, screenX_7, screenY_7, tile_7.x, tile_7.y);
                        // Draw bridge structure
                        drawBuilding(ctx_3, screenX_7, screenY_7, tile_7);
                    }
                    // Draw rail tracks (above water, similar to roads)
                    insertionSortByDepth(railQueue);
                    // PERF: Use for loop instead of forEach
                    for(let i_5 = 0; i_5 < railQueue.length; i_5++){
                        const { tile: tile_8, screenX: screenX_8, screenY: screenY_8 } = railQueue[i_5];
                        // Draw rail base tile first (dark gravel colored diamond)
                        ctx_3.fillStyle = '#5B6345'; // Dark gravel color for contrast with ballast
                        ctx_3.beginPath();
                        ctx_3.moveTo(screenX_8 + halfTileWidth, screenY_8);
                        ctx_3.lineTo(screenX_8 + tileWidth, screenY_8 + halfTileHeight);
                        ctx_3.lineTo(screenX_8 + halfTileWidth, screenY_8 + tileHeight);
                        ctx_3.lineTo(screenX_8, screenY_8 + halfTileHeight);
                        ctx_3.closePath();
                        ctx_3.fill();
                        // Draw edge shading for depth
                        ctx_3.strokeStyle = '#4B5335';
                        ctx_3.lineWidth = 1;
                        ctx_3.beginPath();
                        ctx_3.moveTo(screenX_8 + halfTileWidth, screenY_8 + tileHeight);
                        ctx_3.lineTo(screenX_8, screenY_8 + halfTileHeight);
                        ctx_3.lineTo(screenX_8 + halfTileWidth, screenY_8);
                        ctx_3.stroke();
                        // Draw the rail tracks
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$railSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawRailTrack"])(ctx_3, screenX_8, screenY_8, tile_8.x, tile_8.y, grid, gridSize, zoom);
                    }
                    // Draw gray building base tiles (after rail, before crossings)
                    insertionSortByDepth(baseTileQueue);
                    // PERF: Use for loop instead of forEach
                    for(let i_6 = 0; i_6 < baseTileQueue.length; i_6++){
                        const { tile: tile_9, screenX: screenX_9, screenY: screenY_9 } = baseTileQueue[i_6];
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$drawing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawGreyBaseTile"])(ctx_3, screenX_9, screenY_9, tile_9, zoom);
                    }
                    // Draw suspension bridge towers AGAIN on main canvas after base tiles
                    // Draw suspension bridge FRONT towers on main canvas after base tiles
                    // Only the front tower is drawn here (back tower was drawn before deck in drawBridgeTile)
                    for(let i_7 = 0; i_7 < bridgeQueue.length; i_7++){
                        const { tile: tile_10, screenX: screenX_10, screenY: screenY_10 } = bridgeQueue[i_7];
                        if (tile_10.building.bridgeType === 'suspension') {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$bridgeDrawing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawSuspensionBridgeTowers"])(ctx_3, screenX_10, screenY_10, tile_10.building, zoom);
                        }
                    }
                    // Draw railroad crossing signals and gates AFTER base tiles to ensure they appear on top
                    // PERF: Build a Set of crossing keys for O(1) lookup instead of calling isRailroadCrossing
                    const crossingKeySet = new Set();
                    const cachedCrossings = crossingPositionsRef.current;
                    for(let i_8 = 0; i_8 < cachedCrossings.length; i_8++){
                        const { x: x_3, y: y_3 } = cachedCrossings[i_8];
                        crossingKeySet.add(y_3 * gridSize + x_3);
                    }
                    // PERF: Pre-compute constants used in loop
                    const currentTrains = trainsRef.current;
                    const currentFlashTimer = crossingFlashTimerRef.current;
                    const gateAnglesMap = crossingGateAnglesRef.current;
                    // Only iterate roads with rail overlay that are crossings
                    // PERF: Use for loop instead of forEach
                    for(let i_9 = 0; i_9 < roadQueue.length; i_9++){
                        const { tile: tile_11, screenX: screenX_11, screenY: screenY_11 } = roadQueue[i_9];
                        if (tile_11.hasRailOverlay) {
                            // PERF: Use numeric key and Set lookup instead of isRailroadCrossing call
                            const crossingKey = tile_11.y * gridSize + tile_11.x;
                            if (crossingKeySet.has(crossingKey)) {
                                const gateAngle = gateAnglesMap.get(crossingKey) ?? 0;
                                const crossingState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$railSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCrossingStateForTile"])(currentTrains, tile_11.x, tile_11.y);
                                const isActive = crossingState !== 'open';
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$railSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawRailroadCrossing"])(ctx_3, screenX_11, screenY_11, tile_11.x, tile_11.y, grid, gridSize, zoom, currentFlashTimer, gateAngle, isActive);
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
                        const dpr_4 = window.devicePixelRatio || 1;
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
                            buildingsCtx.scale(dpr_4, dpr_4);
                            buildingsCtx.translate(offset.x, offset.y);
                            buildingsCtx.scale(zoom, zoom);
                            // Disable image smoothing for crisp pixel art
                            buildingsCtx.imageSmoothingEnabled = false;
                            // Draw buildings on the buildings canvas
                            // PERF: Use for loop instead of forEach
                            for(let i_10 = 0; i_10 < buildingQueue.length; i_10++){
                                const { tile: tile_12, screenX: screenX_12, screenY: screenY_12 } = buildingQueue[i_10];
                                drawBuilding(buildingsCtx, screenX_12, screenY_12, tile_12);
                            }
                            // Draw suspension bridge towers ON TOP of buildings
                            // These need to appear above nearby buildings for proper visual layering
                            for(let i_11 = 0; i_11 < bridgeQueue.length; i_11++){
                                const { tile: tile_13, screenX: screenX_13, screenY: screenY_13 } = bridgeQueue[i_11];
                                if (tile_13.building.bridgeType === 'suspension') {
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$bridgeDrawing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawSuspensionBridgeTowers"])(buildingsCtx, screenX_13, screenY_13, tile_13.building, zoom);
                                }
                            }
                            // Draw suspension bridge cables ON TOP of towers
                            for(let i_12 = 0; i_12 < bridgeQueue.length; i_12++){
                                const { tile: tile_14, screenX: screenX_14, screenY: screenY_14 } = bridgeQueue[i_12];
                                if (tile_14.building.bridgeType === 'suspension') {
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$bridgeDrawing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawSuspensionBridgeOverlay"])(buildingsCtx, screenX_14, screenY_14, tile_14.building, zoom);
                                }
                            }
                            // NOTE: Recreation pedestrians are now drawn in the animation loop on the air canvas
                            // so their animations are smooth (the buildings canvas only updates when grid changes)
                            // Draw overlays on the buildings canvas so they appear ON TOP of buildings
                            // (The buildings canvas is layered above the main canvas, so overlays must be drawn here)
                            // PERF: Use for loop instead of forEach
                            for(let i_13 = 0; i_13 < overlayQueue.length; i_13++){
                                const { tile: tile_15, screenX: screenX_15, screenY: screenY_15 } = overlayQueue[i_13];
                                // Get service coverage for this tile
                                const coverage = {
                                    fire: state.services.fire[tile_15.y][tile_15.x],
                                    police: state.services.police[tile_15.y][tile_15.x],
                                    health: state.services.health[tile_15.y][tile_15.x],
                                    education: state.services.education[tile_15.y][tile_15.x]
                                };
                                const fillStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$overlays$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverlayFillStyle"])(overlayMode, tile_15, coverage);
                                // Only draw if there's actually a color to show
                                if (fillStyle !== 'rgba(0, 0, 0, 0)') {
                                    buildingsCtx.fillStyle = fillStyle;
                                    buildingsCtx.beginPath();
                                    buildingsCtx.moveTo(screenX_15 + halfTileWidth, screenY_15);
                                    buildingsCtx.lineTo(screenX_15 + tileWidth, screenY_15 + halfTileHeight);
                                    buildingsCtx.lineTo(screenX_15 + halfTileWidth, screenY_15 + tileHeight);
                                    buildingsCtx.lineTo(screenX_15, screenY_15 + halfTileHeight);
                                    buildingsCtx.closePath();
                                    buildingsCtx.fill();
                                }
                            }
                            // Draw service radius circles and building highlights for the active overlay
                            if (overlayMode !== 'none' && overlayMode !== 'subway') {
                                const serviceBuildingTypes = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$overlays$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OVERLAY_TO_BUILDING_TYPES"][overlayMode];
                                const circleColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$overlays$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OVERLAY_CIRCLE_COLORS"][overlayMode];
                                const circleFillColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$overlays$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OVERLAY_CIRCLE_FILL_COLORS"][overlayMode];
                                const highlightColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$overlays$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OVERLAY_HIGHLIGHT_COLORS"][overlayMode];
                                // Find all service buildings of this type and draw their radii
                                for(let y_4 = 0; y_4 < gridSize; y_4++){
                                    for(let x_4 = 0; x_4 < gridSize; x_4++){
                                        const tile_16 = grid[y_4][x_4];
                                        if (!serviceBuildingTypes.includes(tile_16.building.type)) continue;
                                        // Skip buildings under construction
                                        if (tile_16.building.constructionProgress !== undefined && tile_16.building.constructionProgress < 100) continue;
                                        // Skip abandoned buildings (they don't provide coverage in simulation)
                                        if (tile_16.building.abandoned) continue;
                                        // Get service config for this building type
                                        const config = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICE_CONFIG"][tile_16.building.type];
                                        if (!config || !('range' in config)) continue;
                                        // Calculate effective range based on building level (linear increase per level)
                                        // Level 1: 100%, Level 2: 120%, Level 3: 140%, Level 4: 160%, Level 5: 180%
                                        const baseRange = config.range;
                                        const effectiveRange = baseRange * (1 + (tile_16.building.level - 1) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICE_RANGE_INCREASE_PER_LEVEL"]);
                                        const range = Math.floor(effectiveRange);
                                        // NOTE: For multi-tile service buildings (e.g. 2x2 hospital, 3x3 university),
                                        // coverage is computed from the building's anchor tile (top-left of footprint)
                                        // in the simulation. We center the radius on that same tile to keep the
                                        // overlay consistent with actual service coverage.
                                        const { screenX: bldgScreenX, screenY: bldgScreenY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(x_4, y_4, 0, 0);
                                        const centerX_0 = bldgScreenX + halfTileWidth;
                                        const centerY = bldgScreenY + halfTileHeight;
                                        // Draw isometric ellipse for the radius
                                        // In isometric view, a circle becomes an ellipse
                                        // The radius in tiles needs to be converted to screen pixels
                                        const radiusX = range * halfTileWidth;
                                        const radiusY = range * halfTileHeight;
                                        buildingsCtx.strokeStyle = circleColor;
                                        buildingsCtx.lineWidth = 2 / zoom; // Keep line width consistent at different zoom levels
                                        buildingsCtx.beginPath();
                                        buildingsCtx.ellipse(centerX_0, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
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
                                        buildingsCtx.arc(centerX_0, centerY, 4 / zoom, 0, Math.PI * 2);
                                        buildingsCtx.fill();
                                    }
                                }
                            }
                            buildingsCtx.setTransform(1, 0, 0, 1, 0, 0);
                        }
                    }
                    // Draw water body names (after everything else so they're on top)
                    if (waterBodies && waterBodies.length > 0) {
                        ctx_3.save();
                        ctx_3.font = `${Math.max(10, 12 / zoom)}px sans-serif`;
                        ctx_3.fillStyle = 'rgba(255, 255, 255, 0.9)';
                        ctx_3.strokeStyle = 'rgba(0, 0, 0, 0.5)';
                        ctx_3.lineWidth = 2;
                        ctx_3.textAlign = 'center';
                        ctx_3.textBaseline = 'middle';
                        // Use same viewport calculation as main rendering (accounting for DPR)
                        const viewWidth_3 = canvasSize.width / (dpr_3 * zoom);
                        const viewHeight_3 = canvasSize.height / (dpr_3 * zoom);
                        const viewLeft_0 = -offset.x / zoom - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"];
                        const viewTop_0 = -offset.y / zoom - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] * 2;
                        const viewRight_0 = viewWidth_3 - offset.x / zoom + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"];
                        const viewBottom_0 = viewHeight_3 - offset.y / zoom + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] * 2;
                        for (const waterBody of waterBodies){
                            if (waterBody.tiles.length === 0) continue;
                            // Convert grid coordinates to screen coordinates (context is already translated)
                            const { screenX: screenX_16, screenY: screenY_16 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(waterBody.centerX, waterBody.centerY, 0, 0);
                            // Only draw if visible on screen (with some padding for text)
                            if (screenX_16 >= viewLeft_0 - 100 && screenX_16 <= viewRight_0 + 100 && screenY_16 >= viewTop_0 - 50 && screenY_16 <= viewBottom_0 + 50) {
                                // Draw text with outline for better visibility, centered on tile
                                ctx_3.strokeText(waterBody.name, screenX_16 + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2, screenY_16 + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] / 2);
                                ctx_3.fillText(waterBody.name, screenX_16 + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2, screenY_16 + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] / 2);
                            }
                        }
                        ctx_3.restore();
                    }
                    // Company names are intentionally hover-only to keep the map readable.
                    // Swarm communication overlays for LLM call channels.
                    const isSwarmOverlay = overlayMode === 'swarm_investor_company' || overlayMode === 'swarm_investor_investor' || overlayMode === 'swarm_company_company' || overlayMode === 'swarm_employee_leadership';
                    if (isSwarmOverlay && portfolioCompanyTiles.length > 0) {
                        ctx_3.save();
                        ctx_3.lineCap = 'round';
                        ctx_3.lineJoin = 'round';
                        const drawLink = {
                            "CanvasIsometricGrid.useEffect.drawLink": (from, to, color, width = 2 / zoom, dashed = true)=>{
                                ctx_3.beginPath();
                                ctx_3.setLineDash(dashed ? [
                                    6 / zoom,
                                    5 / zoom
                                ] : []);
                                ctx_3.lineWidth = width;
                                ctx_3.strokeStyle = color;
                                ctx_3.moveTo(from.x, from.y);
                                ctx_3.lineTo(to.x, to.y);
                                ctx_3.stroke();
                            }
                        }["CanvasIsometricGrid.useEffect.drawLink"];
                        const sortedMarkers = [
                            ...portfolioCompanyTiles
                        ].sort({
                            "CanvasIsometricGrid.useEffect.sortedMarkers": (a, b)=>a.y - b.y || a.x - b.x
                        }["CanvasIsometricGrid.useEffect.sortedMarkers"]);
                        const portfolioMarkers = sortedMarkers.filter({
                            "CanvasIsometricGrid.useEffect.portfolioMarkers": (m_0)=>m_0.kind !== 'competitor'
                        }["CanvasIsometricGrid.useEffect.portfolioMarkers"]);
                        const competitorMarkers = sortedMarkers.filter({
                            "CanvasIsometricGrid.useEffect.competitorMarkers": (m_1)=>m_1.kind === 'competitor'
                        }["CanvasIsometricGrid.useEffect.competitorMarkers"]);
                        const fundAnchorTile = sortedMarkers[Math.floor(sortedMarkers.length / 2)] || sortedMarkers[0];
                        const fundAnchor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(fundAnchorTile.x, Math.max(0, fundAnchorTile.y - 5), 0, 0);
                        const fundAnchorPoint = {
                            x: fundAnchor.screenX + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2,
                            y: fundAnchor.screenY + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] / 2
                        };
                        const minLinkDistance = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] * 1.5 / Math.max(0.5, zoom);
                        const markerPoint = {
                            "CanvasIsometricGrid.useEffect.markerPoint": (marker_0)=>{
                                const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(marker_0.x, marker_0.y, 0, 0);
                                return {
                                    x: p.screenX + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2,
                                    y: p.screenY + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] / 2
                                };
                            }
                        }["CanvasIsometricGrid.useEffect.markerPoint"];
                        const dedupeMarkers = {
                            "CanvasIsometricGrid.useEffect.dedupeMarkers": (markers)=>{
                                const seen = new Set();
                                const out = [];
                                for (const marker_1 of markers){
                                    const key_2 = `${marker_1.companyId}:${marker_1.x}:${marker_1.y}:${marker_1.kind}`;
                                    if (seen.has(key_2)) continue;
                                    seen.add(key_2);
                                    out.push(marker_1);
                                }
                                return out;
                            }
                        }["CanvasIsometricGrid.useEffect.dedupeMarkers"];
                        const selectReadableTargets = {
                            "CanvasIsometricGrid.useEffect.selectReadableTargets": (markers_0, maxLinks, bucketCount = 14)=>{
                                const candidates = dedupeMarkers(markers_0).map({
                                    "CanvasIsometricGrid.useEffect.selectReadableTargets.candidates": (marker_2)=>{
                                        const target_0 = markerPoint(marker_2);
                                        const dx_3 = target_0.x - fundAnchorPoint.x;
                                        const dy_3 = target_0.y - fundAnchorPoint.y;
                                        const distance = Math.hypot(dx_3, dy_3);
                                        return {
                                            marker: marker_2,
                                            target: target_0,
                                            distance,
                                            angle: Math.atan2(dy_3, dx_3)
                                        };
                                    }
                                }["CanvasIsometricGrid.useEffect.selectReadableTargets.candidates"]).filter({
                                    "CanvasIsometricGrid.useEffect.selectReadableTargets.candidates": (item)=>item.distance > minLinkDistance
                                }["CanvasIsometricGrid.useEffect.selectReadableTargets.candidates"]).sort({
                                    "CanvasIsometricGrid.useEffect.selectReadableTargets.candidates": (a_0, b_0)=>a_0.distance - b_0.distance
                                }["CanvasIsometricGrid.useEffect.selectReadableTargets.candidates"]);
                                const byBucket = new Map();
                                for (const item_0 of candidates){
                                    const bucket = Math.floor((item_0.angle + Math.PI) / (Math.PI * 2) * bucketCount);
                                    if (!byBucket.has(bucket)) {
                                        byBucket.set(bucket, item_0);
                                    }
                                }
                                return [
                                    ...byBucket.values()
                                ].sort({
                                    "CanvasIsometricGrid.useEffect.selectReadableTargets": (a_1, b_1)=>a_1.angle - b_1.angle
                                }["CanvasIsometricGrid.useEffect.selectReadableTargets"]).slice(0, maxLinks);
                            }
                        }["CanvasIsometricGrid.useEffect.selectReadableTargets"];
                        if (overlayMode === 'swarm_investor_company') {
                            const primaryPortfolio = portfolioMarkers.filter({
                                "CanvasIsometricGrid.useEffect.primaryPortfolio": (m_2)=>m_2.kind === 'portfolio'
                            }["CanvasIsometricGrid.useEffect.primaryPortfolio"]);
                            const targets = selectReadableTargets(primaryPortfolio, 12);
                            for (const { target: target_1 } of targets){
                                drawLink(fundAnchorPoint, target_1, 'rgba(232, 121, 249, 0.95)', 2.2 / zoom, true);
                            }
                        } else if (overlayMode === 'swarm_investor_investor') {
                            const rivals = investorSession?.rivalInvestors || [
                                'Rival A',
                                'Rival B',
                                'Rival C'
                            ];
                            const radius = 5;
                            rivals.slice(0, 4).forEach({
                                "CanvasIsometricGrid.useEffect": (_, idx)=>{
                                    const angle = Math.PI * 2 * idx / Math.max(1, Math.min(4, rivals.length));
                                    const rx = Math.round(fundAnchorTile.x + Math.cos(angle) * radius);
                                    const ry = Math.round(fundAnchorTile.y + Math.sin(angle) * radius);
                                    const rival = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(rx, ry, 0, 0);
                                    const rivalPoint = {
                                        x: rival.screenX + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2,
                                        y: rival.screenY + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] / 2
                                    };
                                    drawLink(fundAnchorPoint, rivalPoint, 'rgba(129, 140, 248, 0.95)', 2.1 / zoom, true);
                                    ctx_3.beginPath();
                                    ctx_3.setLineDash([]);
                                    ctx_3.fillStyle = 'rgba(129, 140, 248, 0.95)';
                                    ctx_3.arc(rivalPoint.x, rivalPoint.y, 2.5 / zoom, 0, Math.PI * 2);
                                    ctx_3.fill();
                                }
                            }["CanvasIsometricGrid.useEffect"]);
                        } else if (overlayMode === 'swarm_company_company') {
                            const chainSource = competitorMarkers.length > 1 ? competitorMarkers : portfolioMarkers;
                            const chain = selectReadableTargets(chainSource, 10).map({
                                "CanvasIsometricGrid.useEffect.chain": (item_1)=>item_1.marker
                            }["CanvasIsometricGrid.useEffect.chain"]);
                            for(let i_14 = 0; i_14 < chain.length - 1; i_14++){
                                const a_2 = markerPoint(chain[i_14]);
                                const b_2 = markerPoint(chain[i_14 + 1]);
                                drawLink(a_2, b_2, 'rgba(52, 211, 153, 0.95)', 2 / zoom, true);
                            }
                        } else if (overlayMode === 'swarm_employee_leadership') {
                            for (const marker_3 of portfolioMarkers){
                                const p_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(marker_3.x, marker_3.y, 0, 0);
                                const px = p_0.screenX + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2;
                                const py = p_0.screenY + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] / 2;
                                drawLink({
                                    x: px - 8 / zoom,
                                    y: py + 8 / zoom
                                }, {
                                    x: px + 8 / zoom,
                                    y: py - 8 / zoom
                                }, 'rgba(34, 211, 238, 0.95)', 2 / zoom, false);
                            }
                        }
                        ctx_3.restore();
                    }
                    ctx_3.restore();
                }
            }["CanvasIsometricGrid.useEffect"]); // End requestAnimationFrame callback
            // PERF: Cleanup - cancel pending render on unmount or deps change
            return ({
                "CanvasIsometricGrid.useEffect": ()=>{
                    if (renderPendingRef.current !== null) {
                        cancelAnimationFrame(renderPendingRef.current);
                        renderPendingRef.current = null;
                    }
                }
            })["CanvasIsometricGrid.useEffect"];
        // PERF: hoveredTile and selectedTile removed from deps - now rendered on separate hover canvas layer
        }
    }["CanvasIsometricGrid.useEffect"], [
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasIsometricGrid.useEffect": ()=>{
            const canvas_3 = hoverCanvasRef.current;
            if (!canvas_3) return;
            const ctx_7 = canvas_3.getContext('2d');
            if (!ctx_7) return;
            const dpr_5 = window.devicePixelRatio || 1;
            // Clear the hover canvas
            ctx_7.setTransform(1, 0, 0, 1, 0, 0);
            ctx_7.clearRect(0, 0, canvas_3.width, canvas_3.height);
            // Apply transform (same as main canvas)
            ctx_7.scale(dpr_5, dpr_5);
            ctx_7.translate(offset.x, offset.y);
            ctx_7.scale(zoom, zoom);
            // Helper to draw highlight diamond
            const drawHighlight = {
                "CanvasIsometricGrid.useEffect.drawHighlight": (screenX_17, screenY_17, color_0 = 'rgba(255, 255, 255, 0.25)', strokeColor_0 = '#ffffff')=>{
                    const w_3 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"];
                    const h_3 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"];
                    // Draw semi-transparent fill
                    ctx_7.fillStyle = color_0;
                    ctx_7.beginPath();
                    ctx_7.moveTo(screenX_17 + w_3 / 2, screenY_17);
                    ctx_7.lineTo(screenX_17 + w_3, screenY_17 + h_3 / 2);
                    ctx_7.lineTo(screenX_17 + w_3 / 2, screenY_17 + h_3);
                    ctx_7.lineTo(screenX_17, screenY_17 + h_3 / 2);
                    ctx_7.closePath();
                    ctx_7.fill();
                    // Draw border
                    ctx_7.strokeStyle = strokeColor_0;
                    ctx_7.lineWidth = 2;
                    ctx_7.stroke();
                }
            }["CanvasIsometricGrid.useEffect.drawHighlight"];
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
                    const buildingType_2 = selectedTool;
                    const buildingSize_2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBuildingSize"])(buildingType_2);
                    // Draw highlight for each tile in the building footprint
                    for(let dx_4 = 0; dx_4 < buildingSize_2.width; dx_4++){
                        for(let dy_4 = 0; dy_4 < buildingSize_2.height; dy_4++){
                            const tx = hoveredTile.x + dx_4;
                            const ty = hoveredTile.y + dy_4;
                            if (tx >= 0 && tx < gridSize && ty >= 0 && ty < gridSize) {
                                const { screenX: screenX_18, screenY: screenY_18 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(tx, ty, 0, 0);
                                drawHighlight(screenX_18, screenY_18);
                            }
                        }
                    }
                } else {
                    // Single tile highlight for non-building tools
                    const { screenX: screenX_19, screenY: screenY_19 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(hoveredTile.x, hoveredTile.y, 0, 0);
                    drawHighlight(screenX_19, screenY_19);
                }
                // Show hovered portfolio company name in-map (same style as water labels).
                const hoveredOrigin = findBuildingOrigin(hoveredTile.x, hoveredTile.y);
                const hoverKey = hoveredOrigin ? `${hoveredOrigin.originX},${hoveredOrigin.originY}` : `${hoveredTile.x},${hoveredTile.y}`;
                const hoveredPortfolio = portfolioTileByKey.get(hoverKey);
                if (hoveredPortfolio) {
                    const targetX = hoveredOrigin ? hoveredOrigin.originX : hoveredTile.x;
                    const targetY = hoveredOrigin ? hoveredOrigin.originY : hoveredTile.y;
                    const { screenX: screenX_20, screenY: screenY_20 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(targetX, targetY, 0, 0);
                    const companyName = hoveredPortfolio.name.length > 30 ? `${hoveredPortfolio.name.slice(0, 29)}…` : hoveredPortfolio.name;
                    const label = `${hoveredPortfolio.kind === 'competitor' ? '[C]' : hoveredPortfolio.kind === 'opportunity' ? '[O]' : '[P]'} ${companyName}`;
                    ctx_7.save();
                    const fontSize = Math.max(12, 13 / zoom);
                    ctx_7.font = `600 ${fontSize}px sans-serif`;
                    ctx_7.textAlign = 'center';
                    ctx_7.textBaseline = 'middle';
                    // Draw a readable capsule above entity footprint.
                    const textWidth = ctx_7.measureText(label).width;
                    const padX = 8 / zoom;
                    const padY = 4 / zoom;
                    const badgeW = textWidth + padX * 2;
                    const badgeH = fontSize + padY * 2;
                    const badgeX = screenX_20 + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2 - badgeW / 2;
                    const badgeY = screenY_20 - 28 / zoom - badgeH;
                    let fg = 'rgba(56, 189, 248, 0.98)';
                    if (hoveredPortfolio.kind === 'competitor') fg = 'rgba(244, 114, 182, 0.98)';
                    if (hoveredPortfolio.kind === 'opportunity') fg = 'rgba(251, 191, 36, 0.99)';
                    ctx_7.fillStyle = 'rgba(2, 6, 23, 0.94)';
                    ctx_7.strokeStyle = fg;
                    ctx_7.lineWidth = Math.max(1, 1.4 / zoom);
                    ctx_7.beginPath();
                    ctx_7.roundRect(badgeX, badgeY, badgeW, badgeH, 6 / zoom);
                    ctx_7.fill();
                    ctx_7.stroke();
                    ctx_7.fillStyle = fg;
                    ctx_7.fillText(label, badgeX + badgeW / 2, badgeY + badgeH / 2 + 0.5);
                    ctx_7.restore();
                }
            }
            // Draw selected tile highlight (including multi-tile buildings)
            if (selectedTile && selectedTile.x >= 0 && selectedTile.x < gridSize && selectedTile.y >= 0 && selectedTile.y < gridSize) {
                const selectedOrigin = grid[selectedTile.y]?.[selectedTile.x];
                if (selectedOrigin) {
                    const selectedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBuildingSize"])(selectedOrigin.building.type);
                    // Draw highlight for each tile in the building footprint
                    for(let dx_5 = 0; dx_5 < selectedSize.width; dx_5++){
                        for(let dy_5 = 0; dy_5 < selectedSize.height; dy_5++){
                            const tx_0 = selectedTile.x + dx_5;
                            const ty_0 = selectedTile.y + dy_5;
                            if (tx_0 >= 0 && tx_0 < gridSize && ty_0 >= 0 && ty_0 < gridSize) {
                                const { screenX: screenX_21, screenY: screenY_21 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(tx_0, ty_0, 0, 0);
                                drawHighlight(screenX_21, screenY_21, 'rgba(100, 200, 255, 0.3)', '#60a5fa');
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
                for(let x_5 = minX; x_5 <= maxX; x_5++){
                    for(let y_5 = minY; y_5 <= maxY; y_5++){
                        if (x_5 >= 0 && x_5 < gridSize && y_5 >= 0 && y_5 < gridSize) {
                            const tile_17 = grid[y_5][x_5];
                            pathTiles.push({
                                x: x_5,
                                y: y_5,
                                isWater: tile_17.building.type === 'water'
                            });
                        }
                    }
                }
                // Analyze the path for bridge validity
                // A valid bridge: water tiles that are bounded by land/road on both ends
                // An invalid partial crossing: water tiles that don't form a complete bridge
                const analyzePathForBridges = {
                    "CanvasIsometricGrid.useEffect.analyzePathForBridges": ()=>{
                        const result = new Map();
                        // Determine if this is a horizontal or vertical path
                        const isHorizontal = maxX - minX > maxY - minY;
                        // Sort tiles by their position along the path
                        const sortedTiles = [
                            ...pathTiles
                        ].sort({
                            "CanvasIsometricGrid.useEffect.analyzePathForBridges.sortedTiles": (a_3, b_3)=>isHorizontal ? a_3.x - b_3.x : a_3.y - b_3.y
                        }["CanvasIsometricGrid.useEffect.analyzePathForBridges.sortedTiles"]);
                        // Find water segments and check if they're valid bridges
                        let i_15 = 0;
                        while(i_15 < sortedTiles.length){
                            const tile_18 = sortedTiles[i_15];
                            if (!tile_18.isWater) {
                                // Land tile - always valid
                                result.set(`${tile_18.x},${tile_18.y}`, 'land');
                                i_15++;
                                continue;
                            }
                            // Found water - find the extent of this water segment
                            const waterStart = i_15;
                            while(i_15 < sortedTiles.length && sortedTiles[i_15].isWater){
                                i_15++;
                            }
                            const waterEnd = i_15 - 1;
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
                                const checkX_0 = isHorizontal ? firstWater.x - 1 : firstWater.x;
                                const checkY_0 = isHorizontal ? firstWater.y : firstWater.y - 1;
                                if (checkX_0 >= 0 && checkY_0 >= 0 && checkX_0 < gridSize && checkY_0 < gridSize) {
                                    const prevTile = grid[checkY_0][checkX_0];
                                    hasExistingLandBefore = prevTile.building.type !== 'water';
                                }
                            }
                            if (waterEnd === sortedTiles.length - 1) {
                                // Check the tile after the path end
                                const lastWater = sortedTiles[waterEnd];
                                const checkX_1 = isHorizontal ? lastWater.x + 1 : lastWater.x;
                                const checkY_1 = isHorizontal ? lastWater.y : lastWater.y + 1;
                                if (checkX_1 >= 0 && checkY_1 >= 0 && checkX_1 < gridSize && checkY_1 < gridSize) {
                                    const nextTile = grid[checkY_1][checkX_1];
                                    hasExistingLandAfter = nextTile.building.type !== 'water';
                                }
                            }
                            const isValidBridge = (hasLandBefore || hasExistingLandBefore) && (hasLandAfter || hasExistingLandAfter) && waterLength <= 10; // Max bridge span
                            // Mark all water tiles in this segment
                            for(let j_0 = waterStart; j_0 <= waterEnd; j_0++){
                                const waterTile = sortedTiles[j_0];
                                result.set(`${waterTile.x},${waterTile.y}`, isValidBridge ? 'valid' : 'invalid');
                            }
                        }
                        return result;
                    }
                }["CanvasIsometricGrid.useEffect.analyzePathForBridges"];
                const bridgeAnalysis = analyzePathForBridges();
                // Draw preview for each tile in the path
                for (const tile_19 of pathTiles){
                    const { screenX: screenX_22, screenY: screenY_22 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(tile_19.x, tile_19.y, 0, 0);
                    const key_3 = `${tile_19.x},${tile_19.y}`;
                    const status = bridgeAnalysis.get(key_3) || 'land';
                    if (status === 'valid') {
                        // Valid bridge - show blue/cyan placeholder
                        drawHighlight(screenX_22, screenY_22, 'rgba(59, 130, 246, 0.5)', '#3b82f6');
                    } else if (status === 'invalid') {
                        // Invalid water crossing - show red
                        drawHighlight(screenX_22, screenY_22, 'rgba(239, 68, 68, 0.5)', '#ef4444');
                    }
                // Land tiles don't need special preview - they're already being placed
                }
            }
            ctx_7.setTransform(1, 0, 0, 1, 0, 0);
        }
    }["CanvasIsometricGrid.useEffect"], [
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasIsometricGrid.useEffect": ()=>{
            const canvas_4 = carsCanvasRef.current;
            const airCanvas = airCanvasRef.current;
            if (!canvas_4 || !airCanvas) return;
            const ctx_8 = canvas_4.getContext('2d');
            const airCtx = airCanvas.getContext('2d');
            if (!ctx_8 || !airCtx) return;
            ctx_8.imageSmoothingEnabled = false;
            airCtx.imageSmoothingEnabled = false;
            const clearAirCanvas = {
                "CanvasIsometricGrid.useEffect.clearAirCanvas": ()=>{
                    airCtx.setTransform(1, 0, 0, 1, 0, 0);
                    airCtx.clearRect(0, 0, airCanvas.width, airCanvas.height);
                }
            }["CanvasIsometricGrid.useEffect.clearAirCanvas"];
            let animationFrameId_0;
            let lastTime_0 = performance.now();
            let lastRenderTime = 0;
            // Target 30fps on mobile (33ms per frame), 60fps on desktop (16ms per frame)
            const targetFrameTime = isMobile ? 33 : 16;
            const render = {
                "CanvasIsometricGrid.useEffect.render": (time_0)=>{
                    animationFrameId_0 = requestAnimationFrame(render);
                    // Frame rate limiting for mobile - skip frames to maintain target FPS
                    const timeSinceLastRender_0 = time_0 - lastRenderTime;
                    if (isMobile && timeSinceLastRender_0 < targetFrameTime) {
                        return; // Skip this frame on mobile to reduce CPU load
                    }
                    const delta_1 = Math.min((time_0 - lastTime_0) / 1000, 0.3);
                    lastTime_0 = time_0;
                    lastRenderTime = time_0;
                    // PERF: Skip ALL vehicle/entity updates during mobile panning/zooming (not just drawing)
                    // This provides a massive performance boost for big cities on mobile
                    const skipMobileUpdates = isMobile && (isPanningRef.current || isPinchZoomingRef.current);
                    if (delta_1 > 0 && !skipMobileUpdates) {
                        updateCars(delta_1);
                        updateBuses(delta_1);
                        spawnCrimeIncidents(delta_1); // Spawn new crime incidents
                        updateCrimeIncidents(delta_1); // Update/decay crime incidents
                        updateEmergencyVehicles(delta_1); // Update emergency vehicles!
                        updatePedestrians(delta_1); // Update pedestrians (zoom-gated)
                        updateAirplanes(delta_1); // Update airplanes (airport required)
                        updateHelicopters(delta_1); // Update helicopters (hospital/airport required)
                        updateSeaplanes(delta_1); // Update seaplanes (bay/large water required)
                        updateBoats(delta_1); // Update boats (marina/pier required)
                        updateBarges(delta_1); // Update ocean barges (ocean marinas required)
                        updateTrains(delta_1); // Update trains on rail network
                        updateFireworks(delta_1, visualHour); // Update fireworks (nighttime only)
                        updateSmog(delta_1); // Update factory smog particles
                        updateClouds(delta_1, visualHour); // Update atmospheric clouds
                        navLightFlashTimerRef.current += delta_1 * 3; // Update nav light flash timer
                        trafficLightTimerRef.current += delta_1; // Update traffic light cycle timer
                        crossingFlashTimerRef.current += delta_1; // Update crossing flash timer
                        // Update railroad crossing gate angles based on train proximity
                        // PERF: Use cached crossing positions instead of O(n²) grid scan
                        const trains = trainsRef.current;
                        const gateAngles = crossingGateAnglesRef.current;
                        // PERF: Access speed via worldStateRef to avoid animation restart on speed change
                        const currentSpeed_1 = worldStateRef.current.speed;
                        const gateSpeedMult = currentSpeed_1 === 0 ? 0 : currentSpeed_1 === 1 ? 1 : currentSpeed_1 === 2 ? 2.5 : 4;
                        const crossings = crossingPositionsRef.current;
                        const currentGridSize_8 = worldStateRef.current.gridSize;
                        // Iterate only over known crossings (O(k) where k = number of crossings)
                        for(let i_16 = 0; i_16 < crossings.length; i_16++){
                            const { x: gx_0, y: gy_0 } = crossings[i_16];
                            // PERF: Use numeric key instead of string concatenation
                            const key_4 = gy_0 * currentGridSize_8 + gx_0;
                            const currentAngle = gateAngles.get(key_4) ?? 0;
                            const crossingState_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$railSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCrossingStateForTile"])(trains, gx_0, gy_0);
                            // Determine target angle based on state
                            const targetAngle = crossingState_0 === 'open' ? 0 : 90;
                            // Animate gate toward target
                            if (currentAngle !== targetAngle) {
                                const angleDelta = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$railSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GATE_ANIMATION_SPEED"] * delta_1 * gateSpeedMult;
                                if (currentAngle < targetAngle) {
                                    gateAngles.set(key_4, Math.min(targetAngle, currentAngle + angleDelta));
                                } else {
                                    gateAngles.set(key_4, Math.max(targetAngle, currentAngle - angleDelta));
                                }
                            }
                        }
                    }
                    // PERF: Skip drawing animated elements during mobile panning/zooming for better performance
                    const skipAnimatedElements = isMobile && (isPanningRef.current || isPinchZoomingRef.current);
                    // PERF: Skip small elements (boats, helis, smog) on desktop when panning while very zoomed out
                    const skipSmallElements = !isMobile && isPanningRef.current && zoomRef.current < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SKIP_SMALL_ELEMENTS_ZOOM_THRESHOLD"];
                    if (skipAnimatedElements) {
                        // Clear the canvases but don't draw anything - hides all animated elements while panning/zooming
                        ctx_8.setTransform(1, 0, 0, 1, 0, 0);
                        ctx_8.clearRect(0, 0, canvas_4.width, canvas_4.height);
                        clearAirCanvas();
                    } else {
                        drawCars(ctx_8);
                        drawBuses(ctx_8);
                        if (!skipSmallElements) {
                            drawBoats(ctx_8); // Draw boats on water (skip when panning zoomed out on desktop)
                        }
                        drawBarges(ctx_8); // Draw ocean barges (larger, keep visible)
                        drawTrainsCallback(ctx_8); // Draw trains on rail network
                        if (!skipSmallElements) {
                            drawSmog(ctx_8); // Draw factory smog (skip when panning zoomed out on desktop)
                        }
                        drawPedestrians(ctx_8); // Draw walking pedestrians (below buildings)
                        drawEmergencyVehicles(ctx_8); // Draw emergency vehicles!
                        clearAirCanvas();
                        // Draw incident indicators on air canvas (above buildings so tooltips are visible)
                        drawIncidentIndicators(airCtx, delta_1); // Draw fire/crime incident indicators!
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
                }
            }["CanvasIsometricGrid.useEffect.render"];
            animationFrameId_0 = requestAnimationFrame(render);
            return ({
                "CanvasIsometricGrid.useEffect": ()=>cancelAnimationFrame(animationFrameId_0)
            })["CanvasIsometricGrid.useEffect"];
        // PERF: Removed grid, gridSize, speed from deps - they're accessed via worldStateRef to avoid restarting animation on every tick
        }
    }["CanvasIsometricGrid.useEffect"], [
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$lightingSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLightingSystem"])({
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
    const handleMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CanvasIsometricGrid.useCallback[handleMouseDown]": (e_1)=>{
            if (e_1.button === 1 || e_1.button === 0 && e_1.altKey) {
                setIsPanning(true);
                setDragStart({
                    x: e_1.clientX - offset.x,
                    y: e_1.clientY - offset.y
                });
                panCandidateRef.current = null;
                e_1.preventDefault();
                return;
            }
            if (e_1.button === 0) {
                const rect_0 = containerRef.current?.getBoundingClientRect();
                if (rect_0) {
                    const mouseX = (e_1.clientX - rect_0.left) / zoom;
                    const mouseY = (e_1.clientY - rect_0.top) / zoom;
                    const { gridX: gridX_5, gridY: gridY_5 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["screenToGrid"])(mouseX, mouseY, offset.x / zoom, offset.y / zoom);
                    const isInsideGrid = gridX_5 >= 0 && gridX_5 < gridSize && gridY_5 >= 0 && gridY_5 < gridSize;
                    if (!isInsideGrid) {
                        setIsPanning(true);
                        setDragStart({
                            x: e_1.clientX - offset.x,
                            y: e_1.clientY - offset.y
                        });
                        panCandidateRef.current = null;
                        return;
                    }
                    if (selectedTool === 'select') {
                        const tile_20 = grid[gridY_5]?.[gridX_5];
                        const isOpenTile = tile_20?.building.type === 'empty' || tile_20?.building.type === 'grass' || tile_20?.building.type === 'water';
                        if (isOpenTile) {
                            panCandidateRef.current = {
                                startX: e_1.clientX,
                                startY: e_1.clientY,
                                gridX: gridX_5,
                                gridY: gridY_5
                            };
                            return;
                        }
                        panCandidateRef.current = null;
                        // For multi-tile buildings, select the origin tile
                        const origin = findBuildingOrigin(gridX_5, gridY_5);
                        if (origin) {
                            setSelectedTile({
                                x: origin.originX,
                                y: origin.originY
                            });
                        } else {
                            setSelectedTile({
                                x: gridX_5,
                                y: gridY_5
                            });
                        }
                    } else if (showsDragGrid) {
                        panCandidateRef.current = null;
                        // Start drag rectangle selection for zoning tools
                        setDragStartTile({
                            x: gridX_5,
                            y: gridY_5
                        });
                        setDragEndTile({
                            x: gridX_5,
                            y: gridY_5
                        });
                        setIsDragging(true);
                    } else if (supportsDragPlace) {
                        panCandidateRef.current = null;
                        // For roads, bulldoze, and other tools, start drag-to-place
                        setDragStartTile({
                            x: gridX_5,
                            y: gridY_5
                        });
                        setDragEndTile({
                            x: gridX_5,
                            y: gridY_5
                        });
                        setIsDragging(true);
                        // Reset road drawing state for new drag
                        setRoadDrawDirection(null);
                        placedRoadTilesRef.current.clear();
                        // Place immediately on first click
                        placeAtTile(gridX_5, gridY_5);
                        // Track initial tile for roads, rail, and subways
                        if (selectedTool === 'road' || selectedTool === 'rail' || selectedTool === 'subway') {
                            placedRoadTilesRef.current.add(`${gridX_5},${gridY_5}`);
                        }
                    }
                }
            }
        }
    }["CanvasIsometricGrid.useCallback[handleMouseDown]"], [
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
    const getMapBounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CanvasIsometricGrid.useCallback[getMapBounds]": (currentZoom_5, canvasW, canvasH)=>{
            const n_0 = gridSize;
            const padding_0 = 100; // Allow some over-scroll
            // Map bounds in world coordinates
            const mapLeft_0 = -(n_0 - 1) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2;
            const mapRight_0 = (n_0 - 1) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2;
            const mapTop_0 = 0;
            const mapBottom_0 = (n_0 - 1) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"];
            const minOffsetX_0 = padding_0 - mapRight_0 * currentZoom_5;
            const maxOffsetX_2 = canvasW - padding_0 - mapLeft_0 * currentZoom_5;
            const minOffsetY_0 = padding_0 - mapBottom_0 * currentZoom_5;
            const maxOffsetY_2 = canvasH - padding_0 - mapTop_0 * currentZoom_5;
            return {
                minOffsetX: minOffsetX_0,
                maxOffsetX: maxOffsetX_2,
                minOffsetY: minOffsetY_0,
                maxOffsetY: maxOffsetY_2
            };
        }
    }["CanvasIsometricGrid.useCallback[getMapBounds]"], [
        gridSize
    ]);
    // Clamp offset to keep camera within reasonable bounds
    const clampOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CanvasIsometricGrid.useCallback[clampOffset]": (newOffset, currentZoom_6)=>{
            const bounds = getMapBounds(currentZoom_6, canvasSize.width, canvasSize.height);
            return {
                x: Math.max(bounds.minOffsetX, Math.min(bounds.maxOffsetX, newOffset.x)),
                y: Math.max(bounds.minOffsetY, Math.min(bounds.maxOffsetY, newOffset.y))
            };
        }
    }["CanvasIsometricGrid.useCallback[clampOffset]"], [
        getMapBounds,
        canvasSize.width,
        canvasSize.height
    ]);
    // Handle minimap navigation - center the view on the target tile
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasIsometricGrid.useEffect": ()=>{
            if (!navigationTarget) return;
            // Convert grid coordinates to screen coordinates
            const { screenX: screenX_23, screenY: screenY_23 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(navigationTarget.x, navigationTarget.y, 0, 0);
            // Calculate offset to center this position on the canvas
            const centerX_1 = canvasSize.width / 2;
            const centerY_0 = canvasSize.height / 2;
            const newOffset_0 = {
                x: centerX_1 - screenX_23 * zoom,
                y: centerY_0 - screenY_23 * zoom
            };
            // Clamp and set the new offset - this is a legitimate use case for responding to navigation requests
            const bounds_0 = getMapBounds(zoom, canvasSize.width, canvasSize.height);
            setOffset({
                x: Math.max(bounds_0.minOffsetX, Math.min(bounds_0.maxOffsetX, newOffset_0.x)),
                y: Math.max(bounds_0.minOffsetY, Math.min(bounds_0.maxOffsetY, newOffset_0.y))
            });
            // Signal that navigation is complete
            onNavigationComplete?.();
        }
    }["CanvasIsometricGrid.useEffect"], [
        navigationTarget,
        zoom,
        canvasSize.width,
        canvasSize.height,
        getMapBounds,
        onNavigationComplete
    ]);
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CanvasIsometricGrid.useCallback[handleMouseMove]": (e_2)=>{
            if (!isPanning && panCandidateRef.current) {
                const { startX, startY } = panCandidateRef.current;
                const dx_6 = e_2.clientX - startX;
                const dy_6 = e_2.clientY - startY;
                if (Math.abs(dx_6) >= PAN_DRAG_THRESHOLD || Math.abs(dy_6) >= PAN_DRAG_THRESHOLD) {
                    setIsPanning(true);
                    setDragStart({
                        x: startX - offset.x,
                        y: startY - offset.y
                    });
                    panCandidateRef.current = null;
                    const newOffset_1 = {
                        x: e_2.clientX - (startX - offset.x),
                        y: e_2.clientY - (startY - offset.y)
                    };
                    setOffset(clampOffset(newOffset_1, zoom));
                    return;
                }
            }
            if (isPanning) {
                const newOffset_2 = {
                    x: e_2.clientX - dragStart.x,
                    y: e_2.clientY - dragStart.y
                };
                setOffset(clampOffset(newOffset_2, zoom));
                return;
            }
            const rect_1 = containerRef.current?.getBoundingClientRect();
            if (rect_1) {
                const mouseX_0 = (e_2.clientX - rect_1.left) / zoom;
                const mouseY_0 = (e_2.clientY - rect_1.top) / zoom;
                const { gridX: gridX_6, gridY: gridY_6 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["screenToGrid"])(mouseX_0, mouseY_0, offset.x / zoom, offset.y / zoom);
                if (gridX_6 >= 0 && gridX_6 < gridSize && gridY_6 >= 0 && gridY_6 < gridSize) {
                    // Only update hovered tile if it actually changed to avoid unnecessary re-renders
                    setHoveredTile({
                        "CanvasIsometricGrid.useCallback[handleMouseMove]": (prev_0)=>prev_0?.x === gridX_6 && prev_0?.y === gridY_6 ? prev_0 : {
                                x: gridX_6,
                                y: gridY_6
                            }
                    }["CanvasIsometricGrid.useCallback[handleMouseMove]"]);
                    // Check for fire or crime incidents at this tile for tooltip display
                    const tile_21 = grid[gridY_6]?.[gridX_6];
                    const crimeKey = `${gridX_6},${gridY_6}`;
                    const crimeIncident = activeCrimeIncidentsRef.current.get(crimeKey);
                    if (tile_21?.building.onFire) {
                        // Fire incident
                        setHoveredIncident({
                            x: gridX_6,
                            y: gridY_6,
                            type: 'fire',
                            screenX: e_2.clientX,
                            screenY: e_2.clientY
                        });
                    } else if (crimeIncident) {
                        // Crime incident
                        setHoveredIncident({
                            x: gridX_6,
                            y: gridY_6,
                            type: 'crime',
                            crimeType: crimeIncident.type,
                            screenX: e_2.clientX,
                            screenY: e_2.clientY
                        });
                    } else {
                        // No incident at this tile
                        setHoveredIncident(null);
                    }
                    // Update drag rectangle end point for zoning tools
                    if (isDragging && showsDragGrid && dragStartTile) {
                        setDragEndTile({
                            x: gridX_6,
                            y: gridY_6
                        });
                    } else if (isDragging && (selectedTool === 'road' || selectedTool === 'rail' || selectedTool === 'subway') && dragStartTile) {
                        const dx_7 = Math.abs(gridX_6 - dragStartTile.x);
                        const dy_7 = Math.abs(gridY_6 - dragStartTile.y);
                        // Lock direction after moving at least 1 tile
                        let direction = roadDrawDirection;
                        if (!direction && (dx_7 > 0 || dy_7 > 0)) {
                            // Lock to the axis with more movement, or horizontal if equal
                            direction = dx_7 >= dy_7 ? 'h' : 'v';
                            setRoadDrawDirection(direction);
                        }
                        // Calculate target position along the locked axis
                        let targetX_0 = gridX_6;
                        let targetY_0 = gridY_6;
                        if (direction === 'h') {
                            targetY_0 = dragStartTile.y; // Lock to horizontal
                        } else if (direction === 'v') {
                            targetX_0 = dragStartTile.x; // Lock to vertical
                        }
                        setDragEndTile({
                            x: targetX_0,
                            y: targetY_0
                        });
                        // Place all tiles from start to target in a straight line
                        // Skip water tiles - they'll be handled on mouse up for bridge creation
                        const minX_0 = Math.min(dragStartTile.x, targetX_0);
                        const maxX_0 = Math.max(dragStartTile.x, targetX_0);
                        const minY_0 = Math.min(dragStartTile.y, targetY_0);
                        const maxY_0 = Math.max(dragStartTile.y, targetY_0);
                        for(let x_6 = minX_0; x_6 <= maxX_0; x_6++){
                            for(let y_6 = minY_0; y_6 <= maxY_0; y_6++){
                                const key_5 = `${x_6},${y_6}`;
                                if (!placedRoadTilesRef.current.has(key_5)) {
                                    // Skip water tiles during drag - they'll show preview and be handled on mouse up
                                    const tile_22 = grid[y_6]?.[x_6];
                                    if (tile_22 && tile_22.building.type === 'water') {
                                        // Don't place on water during drag, just mark as "seen"
                                        placedRoadTilesRef.current.add(key_5);
                                        continue;
                                    }
                                    placeAtTile(x_6, y_6);
                                    placedRoadTilesRef.current.add(key_5);
                                }
                            }
                        }
                    } else if (isDragging && supportsDragPlace && dragStartTile) {
                        placeAtTile(gridX_6, gridY_6);
                    }
                }
            }
        }
    }["CanvasIsometricGrid.useCallback[handleMouseMove]"], [
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
    const handleMouseUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CanvasIsometricGrid.useCallback[handleMouseUp]": ()=>{
            if (panCandidateRef.current && !isPanning && selectedTool === 'select') {
                const { gridX: gridX_7, gridY: gridY_7 } = panCandidateRef.current;
                panCandidateRef.current = null;
                const origin_0 = findBuildingOrigin(gridX_7, gridY_7);
                if (origin_0 && isInspectableTile(origin_0.originX, origin_0.originY)) {
                    setSelectedTile({
                        x: origin_0.originX,
                        y: origin_0.originY
                    });
                } else if (!origin_0 && isInspectableTile(gridX_7, gridY_7)) {
                    setSelectedTile({
                        x: gridX_7,
                        y: gridY_7
                    });
                } else {
                    setSelectedTile(null);
                }
            } else {
                panCandidateRef.current = null;
            }
            // Fill the drag rectangle when mouse is released (only for zoning tools)
            if (isDragging && dragStartTile && dragEndTile && showsDragGrid) {
                const minX_1 = Math.min(dragStartTile.x, dragEndTile.x);
                const maxX_1 = Math.max(dragStartTile.x, dragEndTile.x);
                const minY_1 = Math.min(dragStartTile.y, dragEndTile.y);
                const maxY_1 = Math.max(dragStartTile.y, dragEndTile.y);
                for(let x_7 = minX_1; x_7 <= maxX_1; x_7++){
                    for(let y_7 = minY_1; y_7 <= maxY_1; y_7++){
                        placeAtTile(x_7, y_7);
                    }
                }
            }
            // After placing roads or rail, create bridges for valid water crossings and check for city discovery
            if (isDragging && (selectedTool === 'road' || selectedTool === 'rail') && dragStartTile && dragEndTile) {
                // Collect all tiles in the drag path
                const minX_2 = Math.min(dragStartTile.x, dragEndTile.x);
                const maxX_2 = Math.max(dragStartTile.x, dragEndTile.x);
                const minY_2 = Math.min(dragStartTile.y, dragEndTile.y);
                const maxY_2 = Math.max(dragStartTile.y, dragEndTile.y);
                const pathTiles_0 = [];
                for(let x_8 = minX_2; x_8 <= maxX_2; x_8++){
                    for(let y_8 = minY_2; y_8 <= maxY_2; y_8++){
                        pathTiles_0.push({
                            x: x_8,
                            y: y_8
                        });
                    }
                }
                // Create bridges for valid water crossings in the drag path
                finishTrackDrag(pathTiles_0, selectedTool);
                // Use setTimeout to allow state to update first, then check for discoverable cities
                setTimeout({
                    "CanvasIsometricGrid.useCallback[handleMouseUp]": ()=>{
                        checkAndDiscoverCities({
                            "CanvasIsometricGrid.useCallback[handleMouseUp]": (discoveredCity)=>{
                                // Show dialog for the newly discovered city
                                setCityConnectionDialog({
                                    direction: discoveredCity.direction
                                });
                            }
                        }["CanvasIsometricGrid.useCallback[handleMouseUp]"]);
                    }
                }["CanvasIsometricGrid.useCallback[handleMouseUp]"], 50);
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
        }
    }["CanvasIsometricGrid.useCallback[handleMouseUp]"], [
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
    const handleWheel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CanvasIsometricGrid.useCallback[handleWheel]": (e_3)=>{
            e_3.preventDefault();
            const rect_2 = containerRef.current?.getBoundingClientRect();
            if (!rect_2) return;
            // Mouse position relative to canvas (in screen pixels)
            const mouseX_1 = e_3.clientX - rect_2.left;
            const mouseY_1 = e_3.clientY - rect_2.top;
            // Calculate new zoom with proportional scaling for smoother feel
            // Use smaller base delta (0.05) and scale by current zoom for consistent feel at all levels
            const baseZoomDelta = 0.05;
            const scaledDelta = baseZoomDelta * Math.max(0.5, zoom); // Scale with zoom, min 0.5x
            const zoomDelta = e_3.deltaY > 0 ? -scaledDelta : scaledDelta;
            const newZoom = Math.max(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZOOM_MIN"], Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZOOM_MAX"], zoom + zoomDelta));
            if (newZoom === zoom) return;
            // PERF: Track wheel zooming state to disable lights during zoom (like mobile pinch zoom)
            if (!isWheelZoomingRef.current) {
                isWheelZoomingRef.current = true;
                setIsWheelZooming(true);
            }
            if (wheelZoomTimeoutRef.current) {
                clearTimeout(wheelZoomTimeoutRef.current);
            }
            wheelZoomTimeoutRef.current = setTimeout({
                "CanvasIsometricGrid.useCallback[handleWheel]": ()=>{
                    isWheelZoomingRef.current = false;
                    setIsWheelZooming(false); // Trigger re-render to restore lights
                }
            }["CanvasIsometricGrid.useCallback[handleWheel]"], 150); // Wait 150ms after last wheel event to consider zooming complete
            // World position under the mouse before zoom
            // screen = world * zoom + offset → world = (screen - offset) / zoom
            const worldX = (mouseX_1 - offset.x) / zoom;
            const worldY = (mouseY_1 - offset.y) / zoom;
            // After zoom, keep the same world position under the mouse
            // mouseX = worldX * newZoom + newOffset.x → newOffset.x = mouseX - worldX * newZoom
            const newOffsetX = mouseX_1 - worldX * newZoom;
            const newOffsetY = mouseY_1 - worldY * newZoom;
            // Clamp to map bounds
            const clampedOffset = clampOffset({
                x: newOffsetX,
                y: newOffsetY
            }, newZoom);
            setOffset(clampedOffset);
            setZoom(newZoom);
        }
    }["CanvasIsometricGrid.useCallback[handleWheel]"], [
        zoom,
        offset,
        clampOffset
    ]);
    // Touch handlers for mobile
    const getTouchDistance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CanvasIsometricGrid.useCallback[getTouchDistance]": (touch1, touch2)=>{
            const dx_8 = touch1.clientX - touch2.clientX;
            const dy_8 = touch1.clientY - touch2.clientY;
            return Math.sqrt(dx_8 * dx_8 + dy_8 * dy_8);
        }
    }["CanvasIsometricGrid.useCallback[getTouchDistance]"], []);
    const getTouchCenter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CanvasIsometricGrid.useCallback[getTouchCenter]": (touch1_0, touch2_0)=>{
            return {
                x: (touch1_0.clientX + touch2_0.clientX) / 2,
                y: (touch1_0.clientY + touch2_0.clientY) / 2
            };
        }
    }["CanvasIsometricGrid.useCallback[getTouchCenter]"], []);
    // Visual alignment tweak requested for map framing.
    const canvasPositionStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CanvasIsometricGrid.useMemo[canvasPositionStyle]": ()=>({
                left: '-71px',
                top: '5px'
            })
    }["CanvasIsometricGrid.useMemo[canvasPositionStyle]"], []);
    const handleTouchStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CanvasIsometricGrid.useCallback[handleTouchStart]": (e_4)=>{
            if (e_4.touches.length === 1) {
                // Single touch - could be pan or tap
                const touch = e_4.touches[0];
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
            } else if (e_4.touches.length === 2) {
                // Two finger touch - pinch to zoom
                const distance_0 = getTouchDistance(e_4.touches[0], e_4.touches[1]);
                initialPinchDistanceRef.current = distance_0;
                initialZoomRef.current = zoom;
                lastTouchCenterRef.current = getTouchCenter(e_4.touches[0], e_4.touches[1]);
                setIsPanning(false);
                isPinchZoomingRef.current = true;
            }
        }
    }["CanvasIsometricGrid.useCallback[handleTouchStart]"], [
        offset,
        zoom,
        getTouchDistance,
        getTouchCenter
    ]);
    const handleTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CanvasIsometricGrid.useCallback[handleTouchMove]": (e_5)=>{
            e_5.preventDefault();
            if (e_5.touches.length === 1 && isPanning && !initialPinchDistanceRef.current) {
                // Single touch pan
                const touch_0 = e_5.touches[0];
                const newOffset_3 = {
                    x: touch_0.clientX - dragStart.x,
                    y: touch_0.clientY - dragStart.y
                };
                setOffset(clampOffset(newOffset_3, zoom));
            } else if (e_5.touches.length === 2 && initialPinchDistanceRef.current !== null) {
                // Pinch to zoom
                const currentDistance = getTouchDistance(e_5.touches[0], e_5.touches[1]);
                const scale = currentDistance / initialPinchDistanceRef.current;
                const newZoom_0 = Math.max(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZOOM_MIN"], Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZOOM_MAX"], initialZoomRef.current * scale));
                const currentCenter = getTouchCenter(e_5.touches[0], e_5.touches[1]);
                const rect_3 = containerRef.current?.getBoundingClientRect();
                if (rect_3 && lastTouchCenterRef.current) {
                    // Calculate center position relative to canvas
                    const centerX_2 = currentCenter.x - rect_3.left;
                    const centerY_1 = currentCenter.y - rect_3.top;
                    // World position at pinch center
                    const worldX_0 = (centerX_2 - offset.x) / zoom;
                    const worldY_0 = (centerY_1 - offset.y) / zoom;
                    // Keep the same world position under the pinch center after zoom
                    const newOffsetX_0 = centerX_2 - worldX_0 * newZoom_0;
                    const newOffsetY_0 = centerY_1 - worldY_0 * newZoom_0;
                    // Also account for pan movement during pinch
                    const panDeltaX = currentCenter.x - lastTouchCenterRef.current.x;
                    const panDeltaY = currentCenter.y - lastTouchCenterRef.current.y;
                    const clampedOffset_0 = clampOffset({
                        x: newOffsetX_0 + panDeltaX,
                        y: newOffsetY_0 + panDeltaY
                    }, newZoom_0);
                    setOffset(clampedOffset_0);
                    setZoom(newZoom_0);
                    lastTouchCenterRef.current = currentCenter;
                }
            }
        }
    }["CanvasIsometricGrid.useCallback[handleTouchMove]"], [
        isPanning,
        dragStart,
        zoom,
        offset,
        clampOffset,
        getTouchDistance,
        getTouchCenter
    ]);
    const handleTouchEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CanvasIsometricGrid.useCallback[handleTouchEnd]": (e_6)=>{
            const touchStart = touchStartRef.current;
            if (e_6.touches.length === 0) {
                // All fingers lifted
                if (touchStart && e_6.changedTouches.length === 1) {
                    const touch_1 = e_6.changedTouches[0];
                    const deltaX = Math.abs(touch_1.clientX - touchStart.x);
                    const deltaY = Math.abs(touch_1.clientY - touchStart.y);
                    const deltaTime = Date.now() - touchStart.time;
                    // Detect tap (short duration, minimal movement)
                    if (deltaTime < 300 && deltaX < 10 && deltaY < 10) {
                        const rect_4 = containerRef.current?.getBoundingClientRect();
                        if (rect_4) {
                            const mouseX_2 = (touch_1.clientX - rect_4.left) / zoom;
                            const mouseY_2 = (touch_1.clientY - rect_4.top) / zoom;
                            const { gridX: gridX_8, gridY: gridY_8 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["screenToGrid"])(mouseX_2, mouseY_2, offset.x / zoom, offset.y / zoom);
                            if (gridX_8 >= 0 && gridX_8 < gridSize && gridY_8 >= 0 && gridY_8 < gridSize) {
                                if (selectedTool === 'select') {
                                    const origin_1 = findBuildingOrigin(gridX_8, gridY_8);
                                    if (origin_1 && isInspectableTile(origin_1.originX, origin_1.originY)) {
                                        setSelectedTile({
                                            x: origin_1.originX,
                                            y: origin_1.originY
                                        });
                                    } else if (!origin_1 && isInspectableTile(gridX_8, gridY_8)) {
                                        setSelectedTile({
                                            x: gridX_8,
                                            y: gridY_8
                                        });
                                    } else {
                                        setSelectedTile(null);
                                    }
                                } else {
                                    placeAtTile(gridX_8, gridY_8);
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
            } else if (e_6.touches.length === 1) {
                // Went from 2 touches to 1 - reset to pan mode
                const touch_2 = e_6.touches[0];
                setDragStart({
                    x: touch_2.clientX - offset.x,
                    y: touch_2.clientY - offset.y
                });
                setIsPanning(true);
                isPinchZoomingRef.current = false;
                initialPinchDistanceRef.current = null;
                lastTouchCenterRef.current = null;
            }
        }
    }["CanvasIsometricGrid.useCallback[handleTouchEnd]"], [
        zoom,
        offset,
        gridSize,
        selectedTool,
        placeAtTile,
        setSelectedTile,
        findBuildingOrigin,
        isInspectableTile
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                width: canvasSize.width,
                height: canvasSize.height,
                className: "absolute top-0 left-0",
                style: canvasPositionStyle
            }, void 0, false, {
                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                lineNumber: 3349,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: hoverCanvasRef,
                width: canvasSize.width,
                height: canvasSize.height,
                className: "absolute top-0 left-0 pointer-events-none",
                style: canvasPositionStyle
            }, void 0, false, {
                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                lineNumber: 3351,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: carsCanvasRef,
                width: canvasSize.width,
                height: canvasSize.height,
                className: "absolute top-0 left-0 pointer-events-none",
                style: canvasPositionStyle
            }, void 0, false, {
                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                lineNumber: 3352,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: buildingsCanvasRef,
                width: canvasSize.width,
                height: canvasSize.height,
                className: "absolute top-0 left-0 pointer-events-none",
                style: canvasPositionStyle
            }, void 0, false, {
                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                lineNumber: 3353,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: airCanvasRef,
                width: canvasSize.width,
                height: canvasSize.height,
                className: "absolute top-0 left-0 pointer-events-none",
                style: canvasPositionStyle
            }, void 0, false, {
                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                lineNumber: 3354,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
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
                lineNumber: 3355,
                columnNumber: 7
            }, this),
            selectedTile && selectedTool === 'select' && !isMobile && isInspectableTile(selectedTile.x, selectedTile.y) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$TileInfoPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileInfoPanel"], {
                tile: grid[selectedTile.y][selectedTile.x],
                services: state.services,
                onClose: ()=>setSelectedTile(null)
            }, void 0, false, {
                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                lineNumber: 3360,
                columnNumber: 119
            }, this),
            portfolioCompanyTiles.length > 0 && !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 z-40 rounded-md border border-border/70 bg-card/85 px-2 py-1 text-[10px] tracking-wide text-muted-foreground",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mr-3 text-sky-300",
                        children: "[P] Portfolio"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                        lineNumber: 3363,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mr-3 text-pink-300",
                        children: "[C] Competitor"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                        lineNumber: 3364,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-amber-300",
                        children: "[O] Open Round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                        lineNumber: 3365,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                lineNumber: 3362,
                columnNumber: 57
            }, this),
            cityConnectionDialog && (()=>{
                // Find a discovered but not connected city in this direction
                const city = adjacentCities.find((c)=>c.direction === cityConnectionDialog.direction && c.discovered && !c.connected);
                if (!city) return null;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                    open: true,
                    onOpenChange: ()=>{
                        setCityConnectionDialog(null);
                        setDragStartTile(null);
                        setDragEndTile(null);
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                        className: "max-w-[400px]",
                        onPointerDown: (e_7)=>e_7.stopPropagation(),
                        onMouseDown: (e_8)=>e_8.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                            children: "City Discovered!"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                            lineNumber: 3381,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                        lineNumber: 3380,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                            children: [
                                                "Your road has reached the ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Var"], {
                                                    children: cityConnectionDialog.direction
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                                    lineNumber: 3385,
                                                    columnNumber: 47
                                                }, this),
                                                " border! You've discovered ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Var"], {
                                                    children: city.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                                    lineNumber: 3385,
                                                    columnNumber: 122
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                            lineNumber: 3384,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                        lineNumber: 3383,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                lineNumber: 3379,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-muted-foreground",
                                            children: [
                                                "Connecting to ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Var"], {
                                                    children: city.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                                    lineNumber: 3392,
                                                    columnNumber: 35
                                                }, this),
                                                " will establish a trade route, providing:",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "mt-2 space-y-1 list-disc list-inside",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "$5,000 one-time bonus"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                                            lineNumber: 3394,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "$200/month additional income"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                                            lineNumber: 3395,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                                    lineNumber: 3393,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                            lineNumber: 3391,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                        lineNumber: 3390,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 justify-end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    onClick: (e_9)=>{
                                                        e_9.stopPropagation();
                                                        setCityConnectionDialog(null);
                                                        setDragStartTile(null);
                                                        setDragEndTile(null);
                                                    },
                                                    children: "Maybe Later"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                                    lineNumber: 3401,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                                lineNumber: 3400,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: (e_10)=>{
                                                        e_10.stopPropagation();
                                                        connectToCity(city.id);
                                                        setCityConnectionDialog(null);
                                                        setDragStartTile(null);
                                                        setDragEndTile(null);
                                                    },
                                                    children: [
                                                        "Connect to ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Var"], {
                                                            children: city.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                                            lineNumber: 3418,
                                                            columnNumber: 34
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                                    lineNumber: 3411,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                                lineNumber: 3410,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                        lineNumber: 3399,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                lineNumber: 3389,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                        lineNumber: 3378,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                    lineNumber: 3373,
                    columnNumber: 14
                }, this);
            })(),
            hoveredTile && selectedTool !== 'select' && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOL_INFO"][selectedTool] && (()=>{
                // Check if this is a waterfront building tool and if placement is valid
                const buildingType_3 = selectedTool;
                const isWaterfrontTool = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requiresWaterAdjacency"])(buildingType_3);
                let isWaterfrontPlacementInvalid = false;
                if (isWaterfrontTool && hoveredTile) {
                    const size_2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBuildingSize"])(buildingType_3);
                    const waterCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWaterAdjacency"])(grid, hoveredTile.x, hoveredTile.y, size_2.width, size_2.height, gridSize);
                    isWaterfrontPlacementInvalid = !waterCheck.hasWater;
                }
                const toolName = m(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOL_INFO"][selectedTool].name);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-md text-sm ${isWaterfrontPlacementInvalid ? 'border bg-destructive/90 border-destructive-foreground/30 text-destructive-foreground' : 'border bg-card/90 border-border'}`,
                    children: isDragging && dragStartTile && dragEndTile && showsDragGrid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: (()=>{
                            const areaWidth = Math.abs(dragEndTile.x - dragStartTile.x) + 1;
                            const areaHeight = Math.abs(dragEndTile.y - dragStartTile.y) + 1;
                            const totalCost = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOL_INFO"][selectedTool].cost * areaWidth * areaHeight;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    gt('{toolName} - {width}x{height} area', {
                                        toolName,
                                        width: areaWidth,
                                        height: areaHeight
                                    }),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOL_INFO"][selectedTool].cost > 0 && ` - $${totalCost}`
                                ]
                            }, void 0, true);
                        })()
                    }, void 0, false) : isWaterfrontPlacementInvalid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: gt('{toolName} must be placed next to water', {
                            toolName
                        })
                    }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            gt('{toolName} at ({x}, {y})', {
                                toolName,
                                x: hoveredTile.x,
                                y: hoveredTile.y
                            }),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOL_INFO"][selectedTool].cost > 0 && ` - $${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOL_INFO"][selectedTool].cost}`,
                            showsDragGrid && gt(' - Drag to zone area'),
                            supportsDragPlace && !showsDragGrid && gt(' - Drag to place')
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                    lineNumber: 3438,
                    columnNumber: 14
                }, this);
            })(),
            hoveredIncident && (()=>{
                // Calculate position to avoid overflow
                const tooltipWidth = 200;
                const padding_1 = 16;
                const viewportWidth = ("TURBOPACK compile-time truthy", 1) ? window.innerWidth : "TURBOPACK unreachable";
                // Check if tooltip would overflow right edge
                const wouldOverflowRight = hoveredIncident.screenX + padding_1 + tooltipWidth > viewportWidth - padding_1;
                const left = wouldOverflowRight ? hoveredIncident.screenX - tooltipWidth - padding_1 : hoveredIncident.screenX + padding_1;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed pointer-events-none z-[100]",
                    style: {
                        left,
                        top: hoveredIncident.screenY - 8
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-sidebar border border-sidebar-border rounded-md shadow-lg px-3 py-2 w-[220px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 items-center mb-1",
                                children: [
                                    hoveredIncident.type === 'fire' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FireIcon"], {
                                        size: 14,
                                        className: "text-red-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                        lineNumber: 3487,
                                        columnNumber: 52
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafetyIcon"], {
                                        size: 14,
                                        className: "text-blue-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                        lineNumber: 3487,
                                        columnNumber: 102
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold text-sidebar-foreground",
                                        children: hoveredIncident.type === 'fire' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$incidentData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFireNameForTile"])(hoveredIncident.x, hoveredIncident.y) : hoveredIncident.crimeType ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$incidentData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCrimeName"])(hoveredIncident.crimeType) : gt('Incident')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                        lineNumber: 3488,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                lineNumber: 3486,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-muted-foreground leading-tight",
                                children: hoveredIncident.type === 'fire' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$incidentData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFireDescriptionForTile"])(hoveredIncident.x, hoveredIncident.y) : hoveredIncident.crimeType ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$incidentData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCrimeDescription"])(hoveredIncident.crimeType) : gt('Incident reported.')
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                                lineNumber: 3494,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                lineNumber: 3499,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                        lineNumber: 3484,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
                    lineNumber: 3480,
                    columnNumber: 14
                }, this);
            })()
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/CanvasIsometricGrid.tsx",
        lineNumber: 3346,
        columnNumber: 10
    }, this);
}
_s(CanvasIsometricGrid, "qnN49bxqY8ZMIEXFUNJMQqkiSik=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$buildingHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuildingHelpers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$vehicleSystems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVehicleSystems"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$aircraftSystems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAircraftSystems"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$seaplaneSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSeaplaneSystem"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$bargeSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBargeSystem"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$boatSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBoatSystem"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$effectsSystems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectsSystems"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$lightingSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLightingSystem"]
    ];
});
_c = CanvasIsometricGrid;
var _c;
__turbopack_context__.k.register(_c, "CanvasIsometricGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_game_CanvasIsometricGrid_tsx_4f65fba0._.js.map