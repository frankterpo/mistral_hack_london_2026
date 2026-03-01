(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/mobile/MobileToolbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileToolbar",
    ()=>MobileToolbar,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gt-next/dist/index.client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/GameContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/types/game.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/games/isocity/types/game.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Icons.tsx [app-client] (ecmascript)");
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
// Tool category icons
const CategoryIcons = {
    'TOOLS': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 14,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    'ZONES': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "3",
                width: "7",
                height: "7"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "14",
                y: "3",
                width: "7",
                height: "7"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "14",
                y: "14",
                width: "7",
                height: "7"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "14",
                width: "7",
                height: "7"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 17,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    'ZONING': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 4l16 16M20 4L4 20"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "8"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 23,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    'SERVICES': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 21h18"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 21V7l8-4v18"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19 21V11l-6-4"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 9v.01"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 12v.01"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 15v.01"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 18v.01"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 27,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    'PARKS': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TreeIcon"], {
        size: 20
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 36,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    'SPORTS': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 6v12M6 12h12"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 37,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    'WATERFRONT': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WaterIcon"], {
        size: 20
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 41,
        columnNumber: 17
    }, ("TURBOPACK compile-time value", void 0)),
    'COMMUNITY': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "7",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M23 21v-2a4 4 0 0 0-3-3.87"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 3.13a4 4 0 0 1 0 7.75"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 42,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0)),
    'UTILITIES': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PowerIcon"], {
        size: 20
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 48,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0)),
    'SPECIAL': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 49,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0))
};
// Tool icons for quick access (Partial because not all tools need custom icons)
const QuickToolIcons = {
    select: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 4l16 8-8 3-3 8z"
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 56,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    bulldoze: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 6h18M6 6v14a2 2 0 002 2h8a2 2 0 002-2V6M9 6V4a2 2 0 012-2h2a2 2 0 012 2v2"
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 59,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    road: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoadIcon"], {
        size: 20
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 62,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    rail: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RailIcon"], {
        size: 20
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 63,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    subway: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubwayIcon"], {
        size: 20
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 64,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    tree: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TreeIcon"], {
        size: 20
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 65,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    zone_residential: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-5 h-5 rounded-sm bg-green-500 flex items-center justify-center text-[10px] font-bold text-white",
        children: "R"
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 66,
        columnNumber: 21
    }, ("TURBOPACK compile-time value", void 0)),
    zone_commercial: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-5 h-5 rounded-sm bg-blue-500 flex items-center justify-center text-[10px] font-bold text-white",
        children: "C"
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 67,
        columnNumber: 20
    }, ("TURBOPACK compile-time value", void 0)),
    zone_industrial: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-5 h-5 rounded-sm bg-amber-500 flex items-center justify-center text-[10px] font-bold text-white",
        children: "I"
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 68,
        columnNumber: 20
    }, ("TURBOPACK compile-time value", void 0)),
    zone_dezone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-5 h-5 rounded-sm bg-gray-500 flex items-center justify-center text-[10px] font-bold text-white",
        children: "X"
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 69,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0)),
    zone_water: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-5 h-5 rounded-sm bg-cyan-500 flex items-center justify-center text-[10px] font-bold text-white",
        children: "~"
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 70,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    zone_land: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-5 h-5 rounded-sm bg-emerald-600 flex items-center justify-center text-[10px] font-bold text-white",
        children: "▲"
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 71,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    police_station: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 1l9 4v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V5l9-4z"
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 72,
        columnNumber: 19
    }, ("TURBOPACK compile-time value", void 0)),
    fire_station: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2c-1.5 4-1.5 6 0 8 1.5-2 1.5-4 0-8zM8 10c-2 4-2 6 0 10 2-4 2-6 0-10zM16 10c-2 4-2 6 0 10 2-4 2-6 0-10z"
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
            lineNumber: 76,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 75,
        columnNumber: 17
    }, ("TURBOPACK compile-time value", void 0)),
    hospital: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "3",
                width: "18",
                height: "18",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 8v8M8 12h8"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 78,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    school: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 10v6M2 10l10-5 10 5-10 5z"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 12v5c3 3 9 3 12 0v-5"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 82,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    university: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 20h20"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 20V8l7-4 7 4v12"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 20v-4h6v4"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 86,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    park: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TreeIcon"], {
        size: 20
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 91,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    park_large: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TreeIcon"], {
        size: 20
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 92,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    tennis: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.5 4.5c5 5 10 5 15 0"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.5 19.5c5-5 10-5 15 0"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 93,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    power_plant: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PowerIcon"], {
        size: 20
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 98,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0)),
    water_tower: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WaterIcon"], {
        size: 20
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 99,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0)),
    subway_station: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubwayIcon"], {
        size: 20
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 100,
        columnNumber: 19
    }, ("TURBOPACK compile-time value", void 0)),
    stadium: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrophyIcon"], {
        size: 20
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 101,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    museum: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 20h20"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 20v-6h4v6"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 20v-6h4v6"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 20v-6h4v6"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 14h20"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3l10 7H2l10-7z"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 102,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    airport: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
            lineNumber: 111,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 110,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    space_program: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2L4 5v6.5c0 6 5.5 10.5 8 11.5 2.5-1 8-5.5 8-11.5V5l-8-3z"
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
            lineNumber: 114,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 113,
        columnNumber: 18
    }, ("TURBOPACK compile-time value", void 0)),
    city_hall: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 20h20"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 20v-8l8-8 8 8v8"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "9",
                y: "14",
                width: "6",
                height: "6"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 116,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    amusement_park: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2v20"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 12h20"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
        lineNumber: 121,
        columnNumber: 19
    }, ("TURBOPACK compile-time value", void 0))
};
// Category labels for translation
const CATEGORY_LABELS = {
    'TOOLS': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Tools'),
    'ZONES': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Zones'),
    'EXPAND_CITY': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Expand City'),
    'ZONING': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Zoning'),
    'UTILITIES': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Utilities'),
    'SERVICES': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Services'),
    'PARKS': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Parks'),
    'SPORTS': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Sports'),
    'WATERFRONT': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Waterfront'),
    'COMMUNITY': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Community'),
    'SPECIAL': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Special')
};
// UI labels for translation
const UI_LABELS = {
    viewOverlays: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('LLM Call Lens'),
    none: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('None'),
    budget: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Budget'),
    statistics: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Statistics'),
    advisors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Advisors'),
    settings: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Settings')
};
const toolCategories = {
    'TOOLS': [
        'select',
        'bulldoze',
        'road',
        'rail',
        'subway'
    ],
    'ZONES': [
        'zone_residential',
        'zone_commercial',
        'zone_industrial'
    ],
    'ZONING': [
        'zone_dezone',
        'zone_water',
        'zone_land'
    ],
    'UTILITIES': [
        'power_plant',
        'water_tower',
        'subway_station',
        'rail_station'
    ],
    'SERVICES': [
        'police_station',
        'fire_station',
        'hospital',
        'school',
        'university'
    ],
    'PARKS': [
        'park',
        'park_large',
        'tennis',
        'playground_small',
        'playground_large',
        'community_garden',
        'pond_park',
        'park_gate',
        'greenhouse_garden',
        'mini_golf_course',
        'go_kart_track',
        'amphitheater',
        'roller_coaster_small',
        'campground',
        'cabin_house',
        'mountain_lodge',
        'mountain_trailhead'
    ],
    'SPORTS': [
        'tennis',
        'basketball_courts',
        'soccer_field_small',
        'baseball_field_small',
        'football_field',
        'baseball_stadium',
        'swimming_pool',
        'skate_park',
        'bleachers_field'
    ],
    'WATERFRONT': [
        'marina_docks_small',
        'pier_large'
    ],
    'COMMUNITY': [
        'community_center',
        'animal_pens_farm',
        'office_building_small'
    ],
    'SPECIAL': [
        'stadium',
        'museum',
        'airport',
        'space_program',
        'city_hall',
        'amusement_park'
    ]
};
function MobileToolbar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(81);
    if ($[0] !== "5b2617775c6f82266d120cd7b2e6788da5242d51873cc8570d783967d22cae77") {
        for(let $i = 0; $i < 81; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5b2617775c6f82266d120cd7b2e6788da5242d51873cc8570d783967d22cae77";
    }
    const { onOpenPanel, overlayMode: t1, setOverlayMode } = t0;
    const overlayMode = t1 === undefined ? "none" : t1;
    const { state, setTool, expandCity, shrinkCity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"])();
    const { selectedTool, stats } = state;
    const [expandedCategory, setExpandedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showMenu, setShowMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandCityExpanded, setExpandCityExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"])();
    let t2;
    if ($[1] !== expandedCategory) {
        t2 = ({
            "MobileToolbar[handleCategoryClick]": (category)=>{
                if (expandedCategory === category) {
                    setExpandedCategory(null);
                } else {
                    setExpandedCategory(category);
                }
            }
        })["MobileToolbar[handleCategoryClick]"];
        $[1] = expandedCategory;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const handleCategoryClick = t2;
    let t3;
    if ($[3] !== selectedTool || $[4] !== setTool) {
        t3 = ({
            "MobileToolbar[handleToolSelect]": (tool, t4)=>{
                const closeMenu = t4 === undefined ? false : t4;
                if (selectedTool === tool && tool !== "select") {
                    setTool("select");
                } else {
                    setTool(tool);
                }
                setExpandedCategory(null);
                if (closeMenu) {
                    setShowMenu(false);
                }
            }
        })["MobileToolbar[handleToolSelect]"];
        $[3] = selectedTool;
        $[4] = setTool;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const handleToolSelect = t3;
    let t4;
    if ($[6] !== m || $[7] !== selectedTool || $[8] !== stats) {
        t4 = selectedTool && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOL_INFO"][selectedTool] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between px-4 py-1.5 border-b border-sidebar-border/50 bg-secondary/30 text-xs",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-foreground font-medium",
                    children: m(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOL_INFO"][selectedTool].name)
                }, void 0, false, {
                    fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                    lineNumber: 241,
                    columnNumber: 174
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOL_INFO"][selectedTool].cost > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `font-mono ${stats.money >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOL_INFO"][selectedTool].cost ? "text-green-400" : "text-red-400"}`,
                    children: [
                        "$",
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOL_INFO"][selectedTool].cost
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                    lineNumber: 241,
                    columnNumber: 297
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
            lineNumber: 241,
            columnNumber: 53
        }, this);
        $[6] = m;
        $[7] = selectedTool;
        $[8] = stats;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const t5 = selectedTool === "select" ? "default" : "ghost";
    let t6;
    if ($[10] !== handleToolSelect) {
        t6 = ({
            "MobileToolbar[<Button>.onClick]": ()=>handleToolSelect("select")
        })["MobileToolbar[<Button>.onClick]"];
        $[10] = handleToolSelect;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== t5 || $[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: t5,
            size: "icon",
            className: "h-11 w-11",
            onClick: t6,
            children: QuickToolIcons.select
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
            lineNumber: 262,
            columnNumber: 10
        }, this);
        $[12] = t5;
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    const t8 = selectedTool === "bulldoze" ? "default" : "ghost";
    let t9;
    if ($[15] !== handleToolSelect) {
        t9 = ({
            "MobileToolbar[<Button>.onClick]": ()=>handleToolSelect("bulldoze")
        })["MobileToolbar[<Button>.onClick]"];
        $[15] = handleToolSelect;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== t8 || $[18] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: t8,
            size: "icon",
            className: "h-11 w-11 text-red-400",
            onClick: t9,
            children: QuickToolIcons.bulldoze
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        $[17] = t8;
        $[18] = t9;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    const t11 = selectedTool === "road" ? "default" : "ghost";
    let t12;
    if ($[20] !== handleToolSelect) {
        t12 = ({
            "MobileToolbar[<Button>.onClick]": ()=>handleToolSelect("road")
        })["MobileToolbar[<Button>.onClick]"];
        $[20] = handleToolSelect;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== t11 || $[23] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: t11,
            size: "icon",
            className: "h-11 w-11",
            onClick: t12,
            children: QuickToolIcons.road
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
            lineNumber: 302,
            columnNumber: 11
        }, this);
        $[22] = t11;
        $[23] = t12;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    const t14 = selectedTool === "rail" ? "default" : "ghost";
    let t15;
    if ($[25] !== handleToolSelect) {
        t15 = ({
            "MobileToolbar[<Button>.onClick]": ()=>handleToolSelect("rail")
        })["MobileToolbar[<Button>.onClick]"];
        $[25] = handleToolSelect;
        $[26] = t15;
    } else {
        t15 = $[26];
    }
    let t16;
    if ($[27] !== t14 || $[28] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: t14,
            size: "icon",
            className: "h-11 w-11",
            onClick: t15,
            children: QuickToolIcons.rail
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
            lineNumber: 322,
            columnNumber: 11
        }, this);
        $[27] = t14;
        $[28] = t15;
        $[29] = t16;
    } else {
        t16 = $[29];
    }
    const t17 = selectedTool === "zone_residential" ? "default" : "ghost";
    let t18;
    if ($[30] !== handleToolSelect) {
        t18 = ({
            "MobileToolbar[<Button>.onClick]": ()=>handleToolSelect("zone_residential")
        })["MobileToolbar[<Button>.onClick]"];
        $[30] = handleToolSelect;
        $[31] = t18;
    } else {
        t18 = $[31];
    }
    let t19;
    if ($[32] !== t17 || $[33] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: t17,
            size: "icon",
            className: "h-11 w-11",
            onClick: t18,
            children: QuickToolIcons.zone_residential
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
            lineNumber: 342,
            columnNumber: 11
        }, this);
        $[32] = t17;
        $[33] = t18;
        $[34] = t19;
    } else {
        t19 = $[34];
    }
    const t20 = selectedTool === "zone_commercial" ? "default" : "ghost";
    let t21;
    if ($[35] !== handleToolSelect) {
        t21 = ({
            "MobileToolbar[<Button>.onClick]": ()=>handleToolSelect("zone_commercial")
        })["MobileToolbar[<Button>.onClick]"];
        $[35] = handleToolSelect;
        $[36] = t21;
    } else {
        t21 = $[36];
    }
    let t22;
    if ($[37] !== t20 || $[38] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: t20,
            size: "icon",
            className: "h-11 w-11",
            onClick: t21,
            children: QuickToolIcons.zone_commercial
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
            lineNumber: 362,
            columnNumber: 11
        }, this);
        $[37] = t20;
        $[38] = t21;
        $[39] = t22;
    } else {
        t22 = $[39];
    }
    const t23 = selectedTool === "zone_industrial" ? "default" : "ghost";
    let t24;
    if ($[40] !== handleToolSelect) {
        t24 = ({
            "MobileToolbar[<Button>.onClick]": ()=>handleToolSelect("zone_industrial")
        })["MobileToolbar[<Button>.onClick]"];
        $[40] = handleToolSelect;
        $[41] = t24;
    } else {
        t24 = $[41];
    }
    let t25;
    if ($[42] !== t23 || $[43] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: t23,
            size: "icon",
            className: "h-11 w-11",
            onClick: t24,
            children: QuickToolIcons.zone_industrial
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
            lineNumber: 382,
            columnNumber: 11
        }, this);
        $[42] = t23;
        $[43] = t24;
        $[44] = t25;
    } else {
        t25 = $[44];
    }
    const t26 = showMenu ? "default" : "secondary";
    let t27;
    let t28;
    if ($[45] !== showMenu) {
        t27 = ({
            "MobileToolbar[<Button>.onClick]": ()=>setShowMenu(!showMenu)
        })["MobileToolbar[<Button>.onClick]"];
        t28 = showMenu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseIcon"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
            lineNumber: 396,
            columnNumber: 22
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                    lineNumber: 396,
                    columnNumber: 143
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "19",
                    cy: "12",
                    r: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                    lineNumber: 396,
                    columnNumber: 175
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "5",
                    cy: "12",
                    r: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                    lineNumber: 396,
                    columnNumber: 207
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
            lineNumber: 396,
            columnNumber: 48
        }, this);
        $[45] = showMenu;
        $[46] = t27;
        $[47] = t28;
    } else {
        t27 = $[46];
        t28 = $[47];
    }
    let t29;
    if ($[48] !== t26 || $[49] !== t27 || $[50] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: t26,
            size: "icon",
            className: "h-11 w-11",
            onClick: t27,
            children: t28
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
            lineNumber: 406,
            columnNumber: 11
        }, this);
        $[48] = t26;
        $[49] = t27;
        $[50] = t28;
        $[51] = t29;
    } else {
        t29 = $[51];
    }
    let t30;
    if ($[52] !== t10 || $[53] !== t13 || $[54] !== t16 || $[55] !== t19 || $[56] !== t22 || $[57] !== t25 || $[58] !== t29 || $[59] !== t7) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-around px-2 py-2 gap-1",
            children: [
                t7,
                t10,
                t13,
                t16,
                t19,
                t22,
                t25,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
            lineNumber: 416,
            columnNumber: 11
        }, this);
        $[52] = t10;
        $[53] = t13;
        $[54] = t16;
        $[55] = t19;
        $[56] = t22;
        $[57] = t25;
        $[58] = t29;
        $[59] = t7;
        $[60] = t30;
    } else {
        t30 = $[60];
    }
    let t31;
    if ($[61] !== t30 || $[62] !== t4) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-0 left-0 right-0 z-50 safe-area-bottom",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "rounded-none border-x-0 border-b-0 bg-card/95 backdrop-blur-sm",
                children: [
                    t4,
                    t30
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 431,
                columnNumber: 80
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
            lineNumber: 431,
            columnNumber: 11
        }, this);
        $[61] = t30;
        $[62] = t4;
        $[63] = t31;
    } else {
        t31 = $[63];
    }
    let t32;
    if ($[64] !== expandCity || $[65] !== expandCityExpanded || $[66] !== expandedCategory || $[67] !== handleCategoryClick || $[68] !== handleToolSelect || $[69] !== m || $[70] !== onOpenPanel || $[71] !== overlayMode || $[72] !== selectedTool || $[73] !== setOverlayMode || $[74] !== showMenu || $[75] !== shrinkCity || $[76] !== stats) {
        t32 = showMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm",
            onClick: {
                "MobileToolbar[<div>.onClick]": ()=>setShowMenu(false)
            }["MobileToolbar[<div>.onClick]"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "absolute bottom-20 left-2 right-2 max-h-[70vh] overflow-hidden rounded-xl flex flex-col",
                onClick: _MobileToolbarCardOnClick,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 border-b border-border flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-muted-foreground uppercase tracking-wider mb-2",
                                children: m((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])("City Management"))
                            }, void 0, false, {
                                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                lineNumber: 442,
                                columnNumber: 240
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        className: "h-10 w-full text-xs",
                                        onClick: {
                                            "MobileToolbar[<Button>.onClick]": ()=>{
                                                onOpenPanel("budget");
                                                setShowMenu(false);
                                            }
                                        }["MobileToolbar[<Button>.onClick]"],
                                        children: m(UI_LABELS.budget)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                        lineNumber: 442,
                                        columnNumber: 390
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        className: "h-10 w-full text-xs",
                                        onClick: {
                                            "MobileToolbar[<Button>.onClick]": ()=>{
                                                onOpenPanel("statistics");
                                                setShowMenu(false);
                                            }
                                        }["MobileToolbar[<Button>.onClick]"],
                                        children: m(UI_LABELS.statistics)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                        lineNumber: 447,
                                        columnNumber: 81
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        className: "h-10 w-full text-xs",
                                        onClick: {
                                            "MobileToolbar[<Button>.onClick]": ()=>{
                                                onOpenPanel("advisors");
                                                setShowMenu(false);
                                            }
                                        }["MobileToolbar[<Button>.onClick]"],
                                        children: m(UI_LABELS.advisors)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                        lineNumber: 452,
                                        columnNumber: 85
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        className: "h-10 w-full text-xs",
                                        onClick: {
                                            "MobileToolbar[<Button>.onClick]": ()=>{
                                                onOpenPanel("settings");
                                                setShowMenu(false);
                                            }
                                        }["MobileToolbar[<Button>.onClick]"],
                                        children: m(UI_LABELS.settings)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                        lineNumber: 457,
                                        columnNumber: 83
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                lineNumber: 442,
                                columnNumber: 350
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                        lineNumber: 442,
                        columnNumber: 182
                    }, this),
                    setOverlayMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 border-b border-border flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-muted-foreground uppercase tracking-wider mb-2",
                                children: m(UI_LABELS.viewOverlays)
                            }, void 0, false, {
                                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                lineNumber: 462,
                                columnNumber: 172
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: overlayMode === "none" ? "default" : "ghost",
                                        size: "sm",
                                        className: "h-10 w-full text-xs",
                                        onClick: {
                                            "MobileToolbar[<Button>.onClick]": ()=>setOverlayMode("none")
                                        }["MobileToolbar[<Button>.onClick]"],
                                        children: m(UI_LABELS.none)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                        lineNumber: 462,
                                        columnNumber: 322
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: overlayMode === "swarm_investor_company" ? "default" : "ghost",
                                        size: "sm",
                                        className: `h-10 w-full text-xs ${overlayMode === "swarm_investor_company" ? "bg-fuchsia-500 hover:bg-fuchsia-600" : ""}`,
                                        onClick: {
                                            "MobileToolbar[<Button>.onClick]": ()=>setOverlayMode("swarm_investor_company")
                                        }["MobileToolbar[<Button>.onClick]"],
                                        children: "IC<->CEO"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                        lineNumber: 464,
                                        columnNumber: 79
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: overlayMode === "swarm_investor_investor" ? "default" : "ghost",
                                        size: "sm",
                                        className: `h-10 w-full text-xs ${overlayMode === "swarm_investor_investor" ? "bg-indigo-500 hover:bg-indigo-600" : ""}`,
                                        onClick: {
                                            "MobileToolbar[<Button>.onClick]": ()=>setOverlayMode("swarm_investor_investor")
                                        }["MobileToolbar[<Button>.onClick]"],
                                        children: "IC<->IC"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                        lineNumber: 466,
                                        columnNumber: 72
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: overlayMode === "swarm_company_company" ? "default" : "ghost",
                                        size: "sm",
                                        className: `h-10 w-full text-xs ${overlayMode === "swarm_company_company" ? "bg-emerald-500 hover:bg-emerald-600" : ""}`,
                                        onClick: {
                                            "MobileToolbar[<Button>.onClick]": ()=>setOverlayMode("swarm_company_company")
                                        }["MobileToolbar[<Button>.onClick]"],
                                        children: "C<->C"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                        lineNumber: 468,
                                        columnNumber: 71
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: overlayMode === "swarm_employee_leadership" ? "default" : "ghost",
                                        size: "sm",
                                        className: `h-10 w-full text-xs ${overlayMode === "swarm_employee_leadership" ? "bg-cyan-500 hover:bg-cyan-600" : ""}`,
                                        onClick: {
                                            "MobileToolbar[<Button>.onClick]": ()=>setOverlayMode("swarm_employee_leadership")
                                        }["MobileToolbar[<Button>.onClick]"],
                                        children: "E<->L"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                        lineNumber: 470,
                                        columnNumber: 69
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                lineNumber: 462,
                                columnNumber: 282
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                        lineNumber: 462,
                        columnNumber: 114
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-h-0 overflow-y-auto overscroll-contain",
                        style: {
                            WebkitOverflowScrolling: "touch"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 space-y-1 pb-4",
                            children: Object.entries(toolCategories).map({
                                "MobileToolbar[(anonymous)()]": (t33)=>{
                                    const [category_0, tools] = t33;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            category_0 === "ZONING" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: expandCityExpanded ? "secondary" : "ghost",
                                                        className: "w-full justify-start gap-3 h-12",
                                                        onClick: {
                                                            "MobileToolbar[(anonymous)() > <Button>.onClick]": ()=>setExpandCityExpanded(!expandCityExpanded)
                                                        }["MobileToolbar[(anonymous)() > <Button>.onClick]"],
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex-1 text-left font-medium",
                                                                children: m(CATEGORY_LABELS.EXPAND_CITY)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                                                lineNumber: 479,
                                                                columnNumber: 75
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: `w-4 h-4 transition-transform ${expandCityExpanded ? "rotate-180" : ""}`,
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M6 9l6 6 6-6"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                                                    lineNumber: 479,
                                                                    columnNumber: 348
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                                                lineNumber: 479,
                                                                columnNumber: 188
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                                        lineNumber: 477,
                                                        columnNumber: 96
                                                    }, this),
                                                    expandCityExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pl-4 py-1 space-y-0.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: "ghost",
                                                                className: "w-full justify-start gap-3 h-11",
                                                                onClick: {
                                                                    "MobileToolbar[(anonymous)() > <Button>.onClick]": ()=>{
                                                                        expandCity();
                                                                        setShowMenu(false);
                                                                    }
                                                                }["MobileToolbar[(anonymous)() > <Button>.onClick]"],
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex-1 text-left",
                                                                    children: m(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOL_INFO"].expand_city.name)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                                                    lineNumber: 484,
                                                                    columnNumber: 77
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                                                lineNumber: 479,
                                                                columnNumber: 450
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: "ghost",
                                                                className: "w-full justify-start gap-3 h-11",
                                                                onClick: {
                                                                    "MobileToolbar[(anonymous)() > <Button>.onClick]": ()=>{
                                                                        shrinkCity();
                                                                        setShowMenu(false);
                                                                    }
                                                                }["MobileToolbar[(anonymous)() > <Button>.onClick]"],
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex-1 text-left",
                                                                    children: m(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOL_INFO"].shrink_city.name)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                                                    lineNumber: 489,
                                                                    columnNumber: 77
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                                                lineNumber: 484,
                                                                columnNumber: 159
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                                        lineNumber: 479,
                                                        columnNumber: 411
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                                lineNumber: 477,
                                                columnNumber: 74
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: expandedCategory === category_0 ? "secondary" : "ghost",
                                                className: "w-full justify-start gap-3 h-12",
                                                onClick: {
                                                    "MobileToolbar[(anonymous)() > <Button>.onClick]": ()=>handleCategoryClick(category_0)
                                                }["MobileToolbar[(anonymous)() > <Button>.onClick]"],
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex-1 text-left font-medium",
                                                        children: m(CATEGORY_LABELS[category_0] || category_0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                                        lineNumber: 491,
                                                        columnNumber: 73
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: `w-4 h-4 transition-transform ${expandedCategory === category_0 ? "rotate-180" : ""}`,
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M6 9l6 6 6-6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                                            lineNumber: 491,
                                                            columnNumber: 375
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                                        lineNumber: 491,
                                                        columnNumber: 202
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                                lineNumber: 489,
                                                columnNumber: 173
                                            }, this),
                                            expandedCategory === category_0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pl-4 py-1 space-y-0.5",
                                                children: tools.map({
                                                    "MobileToolbar[(anonymous)() > tools.map()]": (tool_0)=>{
                                                        const info = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOL_INFO"][tool_0];
                                                        if (!info) {
                                                            return null;
                                                        }
                                                        const canAfford = stats.money >= info.cost;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: selectedTool === tool_0 ? "default" : "ghost",
                                                            className: "w-full justify-start gap-3 h-11",
                                                            disabled: !canAfford && info.cost > 0,
                                                            onClick: {
                                                                "MobileToolbar[(anonymous)() > tools.map() > <Button>.onClick]": ()=>handleToolSelect(tool_0, true)
                                                            }["MobileToolbar[(anonymous)() > tools.map() > <Button>.onClick]"],
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex-1 text-left",
                                                                    children: m(info.name)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                                                    lineNumber: 500,
                                                                    columnNumber: 93
                                                                }, this),
                                                                info.cost > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-xs font-mono ${canAfford ? "text-green-400" : "text-red-400"}`,
                                                                    children: [
                                                                        "$",
                                                                        info.cost
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                                                    lineNumber: 500,
                                                                    columnNumber: 167
                                                                }, this)
                                                            ]
                                                        }, tool_0, true, {
                                                            fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                                            lineNumber: 498,
                                                            columnNumber: 32
                                                        }, this);
                                                    }
                                                }["MobileToolbar[(anonymous)() > tools.map()]"])
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                                lineNumber: 491,
                                                columnNumber: 451
                                            }, this)
                                        ]
                                    }, category_0, true, {
                                        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                                        lineNumber: 477,
                                        columnNumber: 24
                                    }, this);
                                }
                            }["MobileToolbar[(anonymous)()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                            lineNumber: 474,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                        lineNumber: 472,
                        columnNumber: 82
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
                lineNumber: 442,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileToolbar.tsx",
            lineNumber: 440,
            columnNumber: 23
        }, this);
        $[64] = expandCity;
        $[65] = expandCityExpanded;
        $[66] = expandedCategory;
        $[67] = handleCategoryClick;
        $[68] = handleToolSelect;
        $[69] = m;
        $[70] = onOpenPanel;
        $[71] = overlayMode;
        $[72] = selectedTool;
        $[73] = setOverlayMode;
        $[74] = showMenu;
        $[75] = shrinkCity;
        $[76] = stats;
        $[77] = t32;
    } else {
        t32 = $[77];
    }
    let t33;
    if ($[78] !== t31 || $[79] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t31,
                t32
            ]
        }, void 0, true);
        $[78] = t31;
        $[79] = t32;
        $[80] = t33;
    } else {
        t33 = $[80];
    }
    return t33;
}
_s(MobileToolbar, "slQAjrAvTWHlb7V8KDVAU4qN8F0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"]
    ];
});
_c = MobileToolbar;
function _MobileToolbarCardOnClick(e) {
    return e.stopPropagation();
}
const __TURBOPACK__default__export__ = MobileToolbar;
var _c;
__turbopack_context__.k.register(_c, "MobileToolbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/mobile/MobileTopBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileTopBar",
    ()=>MobileTopBar,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gt-next/dist/index.client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/GameContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/slider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LanguageSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/LanguageSelector.tsx [app-client] (ecmascript)");
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
// Translatable UI labels
const UI_LABELS = {
    pop: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Pop'),
    funds: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Funds'),
    tax: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Tax'),
    taxRate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Tax Rate'),
    emptyLot: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Empty Lot'),
    jobsLower: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('jobs'),
    jobs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Jobs'),
    hasPower: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Has power'),
    noPower: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('No power'),
    hasWater: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Has water'),
    noWater: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('No water'),
    happiness: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Happiness'),
    health: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Health'),
    education: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Education'),
    safety: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Safety'),
    environment: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Environ'),
    population: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Population'),
    monthlyIncome: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Monthly Income'),
    monthlyExpenses: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Monthly Expenses'),
    weeklyNet: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Weekly Net'),
    exitToMainMenu: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Exit to Main Menu'),
    exitDialogTitle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Exit to Main Menu'),
    exitDialogDescription: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Would you like to save your city before exiting?'),
    exitWithoutSaving: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Exit Without Saving'),
    saveAndExit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Save & Exit'),
    zone: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Zone')
};
// Sun/Moon icon for time of day
function TimeOfDayIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "37205a2ac29ba9d434f0885d27f0f257f4f4b86c1e8e8845bdc4006ffe2ec72c") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "37205a2ac29ba9d434f0885d27f0f257f4f4b86c1e8e8845bdc4006ffe2ec72c";
    }
    const { hour } = t0;
    const isNight = hour < 6 || hour >= 20;
    const isDawn = hour >= 6 && hour < 8;
    const isDusk = hour >= 18 && hour < 20;
    if (isNight) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-3 h-3 text-blue-300",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                }, void 0, false, {
                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                    lineNumber: 66,
                    columnNumber: 91
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                lineNumber: 66,
                columnNumber: 12
            }, this);
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    } else {
        if (isDawn || isDusk) {
            let t1;
            if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-3 h-3 text-orange-400",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                        lineNumber: 76,
                        columnNumber: 95
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                    lineNumber: 76,
                    columnNumber: 14
                }, this);
                $[2] = t1;
            } else {
                t1 = $[2];
            }
            return t1;
        } else {
            let t1;
            if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-3 h-3 text-yellow-400",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                        lineNumber: 85,
                        columnNumber: 95
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                    lineNumber: 85,
                    columnNumber: 14
                }, this);
                $[3] = t1;
            } else {
                t1 = $[3];
            }
            return t1;
        }
    }
}
_c = TimeOfDayIcon;
function DemandBar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "37205a2ac29ba9d434f0885d27f0f257f4f4b86c1e8e8845bdc4006ffe2ec72c") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "37205a2ac29ba9d434f0885d27f0f257f4f4b86c1e8e8845bdc4006ffe2ec72c";
    }
    const { label, demand, color } = t0;
    let t1;
    if ($[1] !== demand) {
        t1 = Math.abs(demand);
        $[1] = demand;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const percentage = Math.min(100, t1);
    const isPositive = demand >= 0;
    const t2 = `text-[9px] font-bold ${color} w-2`;
    let t3;
    if ($[3] !== label || $[4] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t2,
            children: label
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[3] = label;
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== color || $[7] !== isPositive) {
        t4 = isPositive ? color.replace("text-", "bg-") : "bg-red-500";
        $[6] = color;
        $[7] = isPositive;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const t5 = `h-full rounded-full ${t4}`;
    const t6 = `${percentage}%`;
    let t7;
    if ($[9] !== t6) {
        t7 = {
            width: t6
        };
        $[9] = t6;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t5 || $[12] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-1.5 bg-secondary rounded-full overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t5,
                style: t7
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                lineNumber: 150,
                columnNumber: 79
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 150,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t7;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== t3 || $[15] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1",
            children: [
                t3,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 159,
            columnNumber: 10
        }, this);
        $[14] = t3;
        $[15] = t8;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    return t9;
}
_c1 = DemandBar;
function MobileTopBar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(185);
    if ($[0] !== "37205a2ac29ba9d434f0885d27f0f257f4f4b86c1e8e8845bdc4006ffe2ec72c") {
        for(let $i = 0; $i < 185; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "37205a2ac29ba9d434f0885d27f0f257f4f4b86c1e8e8845bdc4006ffe2ec72c";
    }
    const { selectedTile, onCloseTile, onShare, onExit } = t0;
    const { state, setSpeed, setTaxRate, saveCity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"])();
    const { stats, year, month, speed, taxRate, cityName } = state;
    const [showDetails, setShowDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showExitDialog, setShowExitDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showTaxSlider, setShowTaxSlider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"])();
    let t1;
    if ($[1] !== onExit || $[2] !== saveCity) {
        t1 = ({
            "MobileTopBar[handleSaveAndExit]": ()=>{
                saveCity();
                setShowExitDialog(false);
                onExit?.();
            }
        })["MobileTopBar[handleSaveAndExit]"];
        $[1] = onExit;
        $[2] = saveCity;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleSaveAndExit = t1;
    let t2;
    if ($[4] !== onExit) {
        t2 = ({
            "MobileTopBar[handleExitWithoutSaving]": ()=>{
                setShowExitDialog(false);
                onExit?.();
            }
        })["MobileTopBar[handleExitWithoutSaving]"];
        $[4] = onExit;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const handleExitWithoutSaving = t2;
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const monthNames = t3;
    let t4;
    if ($[7] !== showDetails) {
        t4 = ({
            "MobileTopBar[<button>.onClick]": ()=>setShowDetails(!showDetails)
        })["MobileTopBar[<button>.onClick]"];
        $[7] = showDetails;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== cityName) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-foreground font-semibold text-xs truncate max-w-[80px]",
                children: cityName
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                lineNumber: 250,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 250,
            columnNumber: 10
        }, this);
        $[9] = cityName;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const t6 = monthNames[month - 1];
    let t7;
    if ($[11] !== t6 || $[12] !== year) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted-foreground text-[10px] font-mono",
            children: [
                t6,
                " ",
                year
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 259,
            columnNumber: 10
        }, this);
        $[11] = t6;
        $[12] = year;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== t5 || $[15] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-start",
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 268,
            columnNumber: 10
        }, this);
        $[14] = t5;
        $[15] = t7;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== stats.population) {
        t9 = stats.population >= 1000 ? `${(stats.population / 1000).toFixed(1)}k` : stats.population;
        $[17] = stats.population;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-mono font-semibold text-foreground",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 285,
            columnNumber: 11
        }, this);
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== m) {
        t11 = m(UI_LABELS.pop);
        $[21] = m;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[9px] text-muted-foreground",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 301,
            columnNumber: 11
        }, this);
        $[23] = t11;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== t10 || $[26] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-start",
            children: [
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 309,
            columnNumber: 11
        }, this);
        $[25] = t10;
        $[26] = t12;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    const t14 = `text-xs font-mono font-semibold ${stats.money < 0 ? "text-red-500" : stats.money < 1000 ? "text-amber-500" : "text-green-500"}`;
    let t15;
    if ($[28] !== stats.money) {
        t15 = stats.money >= 1000000 ? `${(stats.money / 1000000).toFixed(1)}M` : stats.money >= 1000 ? `${(stats.money / 1000).toFixed(0)}k` : stats.money;
        $[28] = stats.money;
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    let t16;
    if ($[30] !== t14 || $[31] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t14,
            children: [
                "$",
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 327,
            columnNumber: 11
        }, this);
        $[30] = t14;
        $[31] = t15;
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    let t17;
    if ($[33] !== m) {
        t17 = m(UI_LABELS.funds);
        $[33] = m;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[9px] text-muted-foreground",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 344,
            columnNumber: 11
        }, this);
        $[35] = t17;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[37] !== t16 || $[38] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-start",
            children: [
                t16,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 352,
            columnNumber: 11
        }, this);
        $[37] = t16;
        $[38] = t18;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    let t20;
    if ($[40] !== t13 || $[41] !== t19 || $[42] !== t4 || $[43] !== t8) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "flex items-center gap-3 min-w-0 active:opacity-70 p-0 m-0 mr-auto",
            onClick: t4,
            children: [
                t8,
                t13,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 361,
            columnNumber: 11
        }, this);
        $[40] = t13;
        $[41] = t19;
        $[42] = t4;
        $[43] = t8;
        $[44] = t20;
    } else {
        t20 = $[44];
    }
    let t21;
    if ($[45] !== setSpeed) {
        t21 = ({
            "MobileTopBar[<button>.onClick]": ()=>setSpeed(0)
        })["MobileTopBar[<button>.onClick]"];
        $[45] = setSpeed;
        $[46] = t21;
    } else {
        t21 = $[46];
    }
    const t22 = `h-6 w-6 min-w-6 p-0 m-0 flex items-center justify-center rounded-none ${speed === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent/20"}`;
    let t23;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PauseIcon"], {
            size: 12
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 383,
            columnNumber: 11
        }, this);
        $[47] = t23;
    } else {
        t23 = $[47];
    }
    let t24;
    if ($[48] !== t21 || $[49] !== t22) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t21,
            className: t22,
            title: "Pause",
            children: t23
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 390,
            columnNumber: 11
        }, this);
        $[48] = t21;
        $[49] = t22;
        $[50] = t24;
    } else {
        t24 = $[50];
    }
    let t25;
    if ($[51] !== setSpeed) {
        t25 = ({
            "MobileTopBar[<button>.onClick]": ()=>setSpeed(1)
        })["MobileTopBar[<button>.onClick]"];
        $[51] = setSpeed;
        $[52] = t25;
    } else {
        t25 = $[52];
    }
    const t26 = `h-6 w-6 min-w-6 p-0 m-0 flex items-center justify-center rounded-none ${speed === 1 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent/20"}`;
    let t27;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayIcon"], {
            size: 12
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 410,
            columnNumber: 11
        }, this);
        $[53] = t27;
    } else {
        t27 = $[53];
    }
    let t28;
    if ($[54] !== t25 || $[55] !== t26) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t25,
            className: t26,
            title: "Normal speed",
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 417,
            columnNumber: 11
        }, this);
        $[54] = t25;
        $[55] = t26;
        $[56] = t28;
    } else {
        t28 = $[56];
    }
    let t29;
    if ($[57] !== setSpeed) {
        t29 = ({
            "MobileTopBar[<button>.onClick]": ()=>setSpeed(2)
        })["MobileTopBar[<button>.onClick]"];
        $[57] = setSpeed;
        $[58] = t29;
    } else {
        t29 = $[58];
    }
    const t30 = `h-6 w-6 min-w-6 p-0 m-0 flex items-center justify-center rounded-none ${speed === 2 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent/20"}`;
    let t31;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center -space-x-[5px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayIcon"], {
                    size: 12
                }, void 0, false, {
                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                    lineNumber: 437,
                    columnNumber: 61
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayIcon"], {
                    size: 12
                }, void 0, false, {
                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                    lineNumber: 437,
                    columnNumber: 83
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 437,
            columnNumber: 11
        }, this);
        $[59] = t31;
    } else {
        t31 = $[59];
    }
    let t32;
    if ($[60] !== t29 || $[61] !== t30) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t29,
            className: t30,
            title: "2x speed",
            children: t31
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 444,
            columnNumber: 11
        }, this);
        $[60] = t29;
        $[61] = t30;
        $[62] = t32;
    } else {
        t32 = $[62];
    }
    let t33;
    if ($[63] !== setSpeed) {
        t33 = ({
            "MobileTopBar[<button>.onClick]": ()=>setSpeed(3)
        })["MobileTopBar[<button>.onClick]"];
        $[63] = setSpeed;
        $[64] = t33;
    } else {
        t33 = $[64];
    }
    const t34 = `h-6 w-6 min-w-6 p-0 m-0 flex items-center justify-center rounded-none ${speed === 3 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent/20"}`;
    let t35;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center -space-x-[7px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayIcon"], {
                    size: 12
                }, void 0, false, {
                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                    lineNumber: 464,
                    columnNumber: 61
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayIcon"], {
                    size: 12
                }, void 0, false, {
                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                    lineNumber: 464,
                    columnNumber: 83
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayIcon"], {
                    size: 12
                }, void 0, false, {
                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                    lineNumber: 464,
                    columnNumber: 105
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 464,
            columnNumber: 11
        }, this);
        $[65] = t35;
    } else {
        t35 = $[65];
    }
    let t36;
    if ($[66] !== t33 || $[67] !== t34) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t33,
            className: t34,
            title: "3x speed",
            children: t35
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 471,
            columnNumber: 11
        }, this);
        $[66] = t33;
        $[67] = t34;
        $[68] = t36;
    } else {
        t36 = $[68];
    }
    let t37;
    if ($[69] !== t24 || $[70] !== t28 || $[71] !== t32 || $[72] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-0 bg-secondary rounded-sm h-6 overflow-hidden p-0 m-0",
            children: [
                t24,
                t28,
                t32,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 480,
            columnNumber: 11
        }, this);
        $[69] = t24;
        $[70] = t28;
        $[71] = t32;
        $[72] = t36;
        $[73] = t37;
    } else {
        t37 = $[73];
    }
    let t38;
    if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LanguageSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSelector"], {
            useDrawer: true,
            iconSize: 12
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 491,
            columnNumber: 11
        }, this);
        $[74] = t38;
    } else {
        t38 = $[74];
    }
    let t39;
    if ($[75] !== onShare) {
        t39 = onShare && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onShare,
            className: "h-6 w-4 p-0 m-0 flex items-center justify-center text-muted-foreground hover:text-foreground",
            title: "Invite Players",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                className: "w-3 h-3"
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                lineNumber: 498,
                columnNumber: 176
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 498,
            columnNumber: 22
        }, this);
        $[75] = onShare;
        $[76] = t39;
    } else {
        t39 = $[76];
    }
    let t40;
    if ($[77] !== onExit) {
        t40 = onExit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "MobileTopBar[<button>.onClick]": ()=>setShowExitDialog(true)
            }["MobileTopBar[<button>.onClick]"],
            className: "h-6 w-4 p-0 m-0 flex items-center justify-center text-muted-foreground hover:text-foreground",
            title: "Exit to Main Menu",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-3 h-3 -scale-x-100",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                }, void 0, false, {
                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                    lineNumber: 508,
                    columnNumber: 265
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                lineNumber: 508,
                columnNumber: 173
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 506,
            columnNumber: 21
        }, this);
        $[77] = onExit;
        $[78] = t40;
    } else {
        t40 = $[78];
    }
    let t41;
    if ($[79] !== t39 || $[80] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center -space-x-0.5",
            children: [
                t38,
                t39,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 516,
            columnNumber: 11
        }, this);
        $[79] = t39;
        $[80] = t40;
        $[81] = t41;
    } else {
        t41 = $[81];
    }
    let t42;
    if ($[82] !== t37 || $[83] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1",
            children: [
                t37,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 525,
            columnNumber: 11
        }, this);
        $[82] = t37;
        $[83] = t41;
        $[84] = t42;
    } else {
        t42 = $[84];
    }
    let t43;
    if ($[85] !== t20 || $[86] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between px-3 py-1.5",
            children: [
                t20,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 534,
            columnNumber: 11
        }, this);
        $[85] = t20;
        $[86] = t42;
        $[87] = t43;
    } else {
        t43 = $[87];
    }
    let t44;
    if ($[88] !== stats.demand.residential) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DemandBar, {
            label: "R",
            demand: stats.demand.residential,
            color: "text-green-500"
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 543,
            columnNumber: 11
        }, this);
        $[88] = stats.demand.residential;
        $[89] = t44;
    } else {
        t44 = $[89];
    }
    let t45;
    if ($[90] !== stats.demand.commercial) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DemandBar, {
            label: "C",
            demand: stats.demand.commercial,
            color: "text-blue-500"
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 551,
            columnNumber: 11
        }, this);
        $[90] = stats.demand.commercial;
        $[91] = t45;
    } else {
        t45 = $[91];
    }
    let t46;
    if ($[92] !== stats.demand.industrial) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DemandBar, {
            label: "I",
            demand: stats.demand.industrial,
            color: "text-amber-500"
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 559,
            columnNumber: 11
        }, this);
        $[92] = stats.demand.industrial;
        $[93] = t46;
    } else {
        t46 = $[93];
    }
    let t47;
    if ($[94] !== t44 || $[95] !== t45 || $[96] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t44,
                t45,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 567,
            columnNumber: 11
        }, this);
        $[94] = t44;
        $[95] = t45;
        $[96] = t46;
        $[97] = t47;
    } else {
        t47 = $[97];
    }
    let t48;
    if ($[98] !== onCloseTile || $[99] !== selectedTile || $[100] !== showTaxSlider) {
        t48 = ({
            "MobileTopBar[<button>.onClick]": ()=>{
                const newShowTaxSlider = !showTaxSlider;
                setShowTaxSlider(newShowTaxSlider);
                if (newShowTaxSlider && selectedTile) {
                    onCloseTile();
                }
            }
        })["MobileTopBar[<button>.onClick]"];
        $[98] = onCloseTile;
        $[99] = selectedTile;
        $[100] = showTaxSlider;
        $[101] = t48;
    } else {
        t48 = $[101];
    }
    let t49;
    if ($[102] !== m) {
        t49 = m(UI_LABELS.tax);
        $[102] = m;
        $[103] = t49;
    } else {
        t49 = $[103];
    }
    let t50;
    if ($[104] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[9px] text-muted-foreground",
            children: t49
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 603,
            columnNumber: 11
        }, this);
        $[104] = t49;
        $[105] = t50;
    } else {
        t50 = $[105];
    }
    let t51;
    if ($[106] !== taxRate) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[10px] font-mono text-foreground",
            children: [
                taxRate,
                "%"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 611,
            columnNumber: 11
        }, this);
        $[106] = taxRate;
        $[107] = t51;
    } else {
        t51 = $[107];
    }
    let t52;
    if ($[108] !== t48 || $[109] !== t50 || $[110] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "flex items-center gap-1 active:opacity-70",
            onClick: t48,
            children: [
                t50,
                t51
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 619,
            columnNumber: 11
        }, this);
        $[108] = t48;
        $[109] = t50;
        $[110] = t51;
        $[111] = t52;
    } else {
        t52 = $[111];
    }
    const t53 = `text-[10px] font-mono ${stats.income - stats.expenses >= 0 ? "text-green-400" : "text-red-400"}`;
    const t54 = stats.income - stats.expenses >= 0 ? "+" : "";
    const t55 = stats.income - stats.expenses;
    let t56;
    if ($[112] !== t55) {
        t56 = t55.toLocaleString();
        $[112] = t55;
        $[113] = t56;
    } else {
        t56 = $[113];
    }
    let t57;
    if ($[114] !== t53 || $[115] !== t54 || $[116] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: t53,
                children: [
                    t54,
                    "$",
                    t56,
                    "/mo"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                lineNumber: 640,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 640,
            columnNumber: 11
        }, this);
        $[114] = t53;
        $[115] = t54;
        $[116] = t56;
        $[117] = t57;
    } else {
        t57 = $[117];
    }
    let t58;
    if ($[118] !== t47 || $[119] !== t52 || $[120] !== t57) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between px-3 py-1 border-t border-sidebar-border/50 bg-secondary/30",
            children: [
                t47,
                t52,
                t57
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 650,
            columnNumber: 11
        }, this);
        $[118] = t47;
        $[119] = t52;
        $[120] = t57;
        $[121] = t58;
    } else {
        t58 = $[121];
    }
    let t59;
    if ($[122] !== m || $[123] !== selectedTile || $[124] !== setTaxRate || $[125] !== showTaxSlider || $[126] !== taxRate) {
        t59 = showTaxSlider && !selectedTile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-sidebar-border/50 bg-secondary/30 px-3 py-0.5 flex items-center gap-2 text-[10px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-muted-foreground whitespace-nowrap",
                    children: m(UI_LABELS.taxRate)
                }, void 0, false, {
                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                    lineNumber: 660,
                    columnNumber: 160
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                    value: [
                        taxRate
                    ],
                    onValueChange: {
                        "MobileTopBar[<Slider>.onValueChange]": (value)=>setTaxRate(value[0])
                    }["MobileTopBar[<Slider>.onValueChange]"],
                    min: 0,
                    max: 100,
                    step: 1,
                    className: "flex-1"
                }, void 0, false, {
                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                    lineNumber: 660,
                    columnNumber: 247
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-foreground w-8 text-right shrink-0",
                    children: [
                        taxRate,
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                    lineNumber: 662,
                    columnNumber: 98
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "MobileTopBar[<button>.onClick]": ()=>setShowTaxSlider(false)
                    }["MobileTopBar[<button>.onClick]"],
                    className: "text-muted-foreground hover:text-foreground transition-colors shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseIcon"], {
                        size: 12
                    }, void 0, false, {
                        fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                        lineNumber: 664,
                        columnNumber: 127
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                    lineNumber: 662,
                    columnNumber: 183
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 660,
            columnNumber: 45
        }, this);
        $[122] = m;
        $[123] = selectedTile;
        $[124] = setTaxRate;
        $[125] = showTaxSlider;
        $[126] = taxRate;
        $[127] = t59;
    } else {
        t59 = $[127];
    }
    let t60;
    if ($[128] !== m || $[129] !== onCloseTile || $[130] !== selectedTile) {
        t60 = selectedTile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-sidebar-border/50 bg-gradient-to-b from-secondary/60 to-secondary/20 px-3 py-0.5 flex items-center gap-2 text-[10px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1.5 shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-2 h-2 rounded-full ${selectedTile.zone === "residential" ? "bg-green-500" : selectedTile.zone === "commercial" ? "bg-blue-500" : selectedTile.zone === "industrial" ? "bg-amber-500" : "bg-muted-foreground/40"}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                            lineNumber: 676,
                            columnNumber: 229
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-medium text-foreground capitalize",
                            children: selectedTile.building.type === "empty" ? selectedTile.zone === "none" ? m(UI_LABELS.emptyLot) : `${selectedTile.zone} ${m(UI_LABELS.zone)}` : selectedTile.building.type.replace(/_/g, " ")
                        }, void 0, false, {
                            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                            lineNumber: 676,
                            columnNumber: 461
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                    lineNumber: 676,
                    columnNumber: 177
                }, this),
                selectedTile.building.population > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1 shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopulationIcon"], {
                            size: 10,
                            className: "text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                            lineNumber: 676,
                            columnNumber: 819
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-foreground font-mono",
                            children: selectedTile.building.population
                        }, void 0, false, {
                            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                            lineNumber: 676,
                            columnNumber: 881
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                    lineNumber: 676,
                    columnNumber: 769
                }, this),
                selectedTile.building.jobs > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-foreground font-mono shrink-0",
                    children: [
                        selectedTile.building.jobs,
                        " ",
                        m(UI_LABELS.jobsLower)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                    lineNumber: 676,
                    columnNumber: 1008
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `shrink-0 ${selectedTile.building.powered ? "text-yellow-400" : "text-muted-foreground/60"}`,
                    children: selectedTile.building.powered ? m(UI_LABELS.hasPower) : m(UI_LABELS.noPower)
                }, void 0, false, {
                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                    lineNumber: 676,
                    columnNumber: 1122
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `shrink-0 ${selectedTile.building.watered ? "text-cyan-400" : "text-muted-foreground/60"}`,
                    children: selectedTile.building.watered ? m(UI_LABELS.hasWater) : m(UI_LABELS.noWater)
                }, void 0, false, {
                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                    lineNumber: 676,
                    columnNumber: 1318
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1 text-muted-foreground shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoneyIcon"], {
                            size: 10
                        }, void 0, false, {
                            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                            lineNumber: 676,
                            columnNumber: 1584
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono text-foreground",
                            children: selectedTile.landValue
                        }, void 0, false, {
                            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                            lineNumber: 676,
                            columnNumber: 1607
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                    lineNumber: 676,
                    columnNumber: 1512
                }, this),
                selectedTile.pollution > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1 shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-1.5 h-1.5 rounded-full ${selectedTile.pollution > 50 ? "bg-red-500" : selectedTile.pollution > 25 ? "bg-amber-500" : "bg-green-500"}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                            lineNumber: 676,
                            columnNumber: 1769
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `font-mono ${selectedTile.pollution > 50 ? "text-red-400" : selectedTile.pollution > 25 ? "text-amber-400" : "text-green-400"}`,
                            children: [
                                Math.round(selectedTile.pollution),
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                            lineNumber: 676,
                            columnNumber: 1925
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                    lineNumber: 676,
                    columnNumber: 1719
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1"
                }, void 0, false, {
                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                    lineNumber: 676,
                    columnNumber: 2122
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onCloseTile,
                    className: "text-muted-foreground hover:text-foreground transition-colors shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseIcon"], {
                        size: 12
                    }, void 0, false, {
                        fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                        lineNumber: 676,
                        columnNumber: 2261
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                    lineNumber: 676,
                    columnNumber: 2148
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 676,
            columnNumber: 27
        }, this);
        $[128] = m;
        $[129] = onCloseTile;
        $[130] = selectedTile;
        $[131] = t60;
    } else {
        t60 = $[131];
    }
    let t61;
    if ($[132] !== t43 || $[133] !== t58 || $[134] !== t59 || $[135] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "fixed top-0 left-0 right-0 z-40 rounded-none border-x-0 border-t-0 bg-card/95 backdrop-blur-sm safe-area-top",
            children: [
                t43,
                t58,
                t59,
                t60
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 686,
            columnNumber: 11
        }, this);
        $[132] = t43;
        $[133] = t58;
        $[134] = t59;
        $[135] = t60;
        $[136] = t61;
    } else {
        t61 = $[136];
    }
    let t62;
    if ($[137] !== m || $[138] !== setTaxRate || $[139] !== showDetails || $[140] !== stats.education || $[141] !== stats.environment || $[142] !== stats.expenses || $[143] !== stats.happiness || $[144] !== stats.health || $[145] !== stats.income || $[146] !== stats.jobs || $[147] !== stats.population || $[148] !== stats.safety || $[149] !== taxRate) {
        t62 = showDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-30 bg-black/50 backdrop-blur-sm pt-[72px]",
            onClick: {
                "MobileTopBar[<div>.onClick]": ()=>setShowDetails(false)
            }["MobileTopBar[<div>.onClick]"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "mx-2 mt-2 rounded-xl overflow-hidden",
                onClick: _MobileTopBarCardOnClick,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 grid grid-cols-5 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatItem, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HappyIcon"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                    lineNumber: 699,
                                    columnNumber: 189
                                }, void 0),
                                label: String(m(UI_LABELS.happiness)),
                                value: stats.happiness,
                                color: stats.happiness >= 70 ? "text-green-500" : stats.happiness >= 40 ? "text-amber-500" : "text-red-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                lineNumber: 699,
                                columnNumber: 173
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatItem, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HealthIcon"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                    lineNumber: 699,
                                    columnNumber: 404
                                }, void 0),
                                label: String(m(UI_LABELS.health)),
                                value: stats.health,
                                color: stats.health >= 70 ? "text-green-500" : stats.health >= 40 ? "text-amber-500" : "text-red-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                lineNumber: 699,
                                columnNumber: 388
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatItem, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EducationIcon"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                    lineNumber: 699,
                                    columnNumber: 608
                                }, void 0),
                                label: String(m(UI_LABELS.education)),
                                value: stats.education,
                                color: stats.education >= 70 ? "text-green-500" : stats.education >= 40 ? "text-amber-500" : "text-red-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                lineNumber: 699,
                                columnNumber: 592
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatItem, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafetyIcon"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                    lineNumber: 699,
                                    columnNumber: 827
                                }, void 0),
                                label: String(m(UI_LABELS.safety)),
                                value: stats.safety,
                                color: stats.safety >= 70 ? "text-green-500" : stats.safety >= 40 ? "text-amber-500" : "text-red-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                lineNumber: 699,
                                columnNumber: 811
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatItem, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnvironmentIcon"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                    lineNumber: 699,
                                    columnNumber: 1031
                                }, void 0),
                                label: String(m(UI_LABELS.environment)),
                                value: stats.environment,
                                color: stats.environment >= 70 ? "text-green-500" : stats.environment >= 40 ? "text-amber-500" : "text-red-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                lineNumber: 699,
                                columnNumber: 1015
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                        lineNumber: 699,
                        columnNumber: 129
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                        fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                        lineNumber: 699,
                        columnNumber: 1250
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: m(UI_LABELS.population)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                        lineNumber: 699,
                                        columnNumber: 1345
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-mono text-foreground",
                                        children: stats.population.toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                        lineNumber: 699,
                                        columnNumber: 1425
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                lineNumber: 699,
                                columnNumber: 1294
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: m(UI_LABELS.jobs)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                        lineNumber: 699,
                                        columnNumber: 1576
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-mono text-foreground",
                                        children: stats.jobs.toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                        lineNumber: 699,
                                        columnNumber: 1650
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                lineNumber: 699,
                                columnNumber: 1525
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: m(UI_LABELS.monthlyIncome)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                        lineNumber: 699,
                                        columnNumber: 1795
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-mono text-green-400",
                                        children: [
                                            "$",
                                            stats.income.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                        lineNumber: 699,
                                        columnNumber: 1878
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                lineNumber: 699,
                                columnNumber: 1744
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: m(UI_LABELS.monthlyExpenses)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                        lineNumber: 699,
                                        columnNumber: 2025
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-mono text-red-400",
                                        children: [
                                            "$",
                                            stats.expenses.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                        lineNumber: 699,
                                        columnNumber: 2110
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                lineNumber: 699,
                                columnNumber: 1974
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: m(UI_LABELS.weeklyNet)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                        lineNumber: 699,
                                        columnNumber: 2257
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-sm font-mono ${stats.income - stats.expenses >= 0 ? "text-green-400" : "text-red-400"}`,
                                        children: [
                                            "$",
                                            Math.floor((stats.income - stats.expenses) / 4).toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                        lineNumber: 699,
                                        columnNumber: 2336
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                lineNumber: 699,
                                columnNumber: 2206
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                        lineNumber: 699,
                        columnNumber: 1263
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                        fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                        lineNumber: 699,
                        columnNumber: 2534
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: m(UI_LABELS.taxRate)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                        lineNumber: 699,
                                        columnNumber: 2624
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-mono text-foreground",
                                        children: [
                                            taxRate,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                        lineNumber: 699,
                                        columnNumber: 2701
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                lineNumber: 699,
                                columnNumber: 2568
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                value: [
                                    taxRate
                                ],
                                onValueChange: {
                                    "MobileTopBar[<Slider>.onValueChange]": (value_0)=>setTaxRate(value_0[0])
                                }["MobileTopBar[<Slider>.onValueChange]"],
                                min: 0,
                                max: 100,
                                step: 1,
                                className: "w-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                lineNumber: 699,
                                columnNumber: 2776
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between mt-1 text-[10px] text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "0%"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                        lineNumber: 701,
                                        columnNumber: 179
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "100%"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                        lineNumber: 701,
                                        columnNumber: 194
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                                lineNumber: 701,
                                columnNumber: 102
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                        lineNumber: 699,
                        columnNumber: 2547
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
                lineNumber: 699,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 697,
            columnNumber: 26
        }, this);
        $[137] = m;
        $[138] = setTaxRate;
        $[139] = showDetails;
        $[140] = stats.education;
        $[141] = stats.environment;
        $[142] = stats.expenses;
        $[143] = stats.happiness;
        $[144] = stats.health;
        $[145] = stats.income;
        $[146] = stats.jobs;
        $[147] = stats.population;
        $[148] = stats.safety;
        $[149] = taxRate;
        $[150] = t62;
    } else {
        t62 = $[150];
    }
    let t63;
    if ($[151] !== m) {
        t63 = m(UI_LABELS.exitDialogTitle);
        $[151] = m;
        $[152] = t63;
    } else {
        t63 = $[152];
    }
    let t64;
    if ($[153] !== t63) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
            children: t63
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 729,
            columnNumber: 11
        }, this);
        $[153] = t63;
        $[154] = t64;
    } else {
        t64 = $[154];
    }
    let t65;
    if ($[155] !== m) {
        t65 = m(UI_LABELS.exitDialogDescription);
        $[155] = m;
        $[156] = t65;
    } else {
        t65 = $[156];
    }
    let t66;
    if ($[157] !== t65) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
            children: t65
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 745,
            columnNumber: 11
        }, this);
        $[157] = t65;
        $[158] = t66;
    } else {
        t66 = $[158];
    }
    let t67;
    if ($[159] !== t64 || $[160] !== t66) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            children: [
                t64,
                t66
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 753,
            columnNumber: 11
        }, this);
        $[159] = t64;
        $[160] = t66;
        $[161] = t67;
    } else {
        t67 = $[161];
    }
    let t68;
    if ($[162] !== m) {
        t68 = m(UI_LABELS.exitWithoutSaving);
        $[162] = m;
        $[163] = t68;
    } else {
        t68 = $[163];
    }
    let t69;
    if ($[164] !== handleExitWithoutSaving || $[165] !== t68) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            onClick: handleExitWithoutSaving,
            className: "w-full sm:w-auto",
            children: t68
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 770,
            columnNumber: 11
        }, this);
        $[164] = handleExitWithoutSaving;
        $[165] = t68;
        $[166] = t69;
    } else {
        t69 = $[166];
    }
    let t70;
    if ($[167] !== m) {
        t70 = m(UI_LABELS.saveAndExit);
        $[167] = m;
        $[168] = t70;
    } else {
        t70 = $[168];
    }
    let t71;
    if ($[169] !== handleSaveAndExit || $[170] !== t70) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: handleSaveAndExit,
            className: "w-full sm:w-auto",
            children: t70
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 787,
            columnNumber: 11
        }, this);
        $[169] = handleSaveAndExit;
        $[170] = t70;
        $[171] = t71;
    } else {
        t71 = $[171];
    }
    let t72;
    if ($[172] !== t69 || $[173] !== t71) {
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
            className: "flex-col sm:flex-row gap-2",
            children: [
                t69,
                t71
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 796,
            columnNumber: 11
        }, this);
        $[172] = t69;
        $[173] = t71;
        $[174] = t72;
    } else {
        t72 = $[174];
    }
    let t73;
    if ($[175] !== t67 || $[176] !== t72) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-md",
            children: [
                t67,
                t72
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 805,
            columnNumber: 11
        }, this);
        $[175] = t67;
        $[176] = t72;
        $[177] = t73;
    } else {
        t73 = $[177];
    }
    let t74;
    if ($[178] !== showExitDialog || $[179] !== t73) {
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: showExitDialog,
            onOpenChange: setShowExitDialog,
            children: t73
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 814,
            columnNumber: 11
        }, this);
        $[178] = showExitDialog;
        $[179] = t73;
        $[180] = t74;
    } else {
        t74 = $[180];
    }
    let t75;
    if ($[181] !== t61 || $[182] !== t62 || $[183] !== t74) {
        t75 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t61,
                t62,
                t74
            ]
        }, void 0, true);
        $[181] = t61;
        $[182] = t62;
        $[183] = t74;
        $[184] = t75;
    } else {
        t75 = $[184];
    }
    return t75;
}
_s(MobileTopBar, "NxRLtYp1w66O5nZXhb1KWkgBKF8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"]
    ];
});
_c2 = MobileTopBar;
function _MobileTopBarCardOnClick(e) {
    return e.stopPropagation();
}
function StatItem(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "37205a2ac29ba9d434f0885d27f0f257f4f4b86c1e8e8845bdc4006ffe2ec72c") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "37205a2ac29ba9d434f0885d27f0f257f4f4b86c1e8e8845bdc4006ffe2ec72c";
    }
    const { icon, label, value, color } = t0;
    let t1;
    if ($[1] !== icon) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted-foreground",
            children: icon
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 852,
            columnNumber: 10
        }, this);
        $[1] = icon;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const t2 = `text-sm font-mono font-semibold ${color}`;
    let t3;
    if ($[3] !== value) {
        t3 = Math.round(value);
        $[3] = value;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t2 || $[6] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t2,
            children: [
                t3,
                "%"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 869,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== label) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[9px] text-muted-foreground",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 878,
            columnNumber: 10
        }, this);
        $[8] = label;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t1 || $[11] !== t4 || $[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-1",
            children: [
                t1,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mobile/MobileTopBar.tsx",
            lineNumber: 886,
            columnNumber: 10
        }, this);
        $[10] = t1;
        $[11] = t4;
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    return t6;
}
_c3 = StatItem;
const __TURBOPACK__default__export__ = MobileTopBar;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "TimeOfDayIcon");
__turbopack_context__.k.register(_c1, "DemandBar");
__turbopack_context__.k.register(_c2, "MobileTopBar");
__turbopack_context__.k.register(_c3, "StatItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_mobile_25bcb2d4._.js.map