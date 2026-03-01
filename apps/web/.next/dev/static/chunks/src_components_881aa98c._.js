(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/mobile/MobileToolbar.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/components/mobile/MobileToolbar.tsx'\n\nExpression expected");
e.code = 'MODULE_UNPARSABLE';
throw e;
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
"[project]/src/components/VinnieDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VinnieDialog",
    ()=>VinnieDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/GameContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function VinnieDialog(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "d7d75a6437ea7457322316fa19467911101414efe8c688d8ede93ee7574fbf78") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d7d75a6437ea7457322316fa19467911101414efe8c688d8ede93ee7574fbf78";
    }
    const { open, onOpenChange } = t0;
    const { addMoney, addNotification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"])();
    let t1;
    if ($[1] !== addMoney || $[2] !== addNotification || $[3] !== onOpenChange) {
        t1 = ({
            "VinnieDialog[handleAccept]": ()=>{
                addMoney(500000);
                addNotification("Questionable Finances", "You received $500,000 from Cousin Vinnie. Your accountants are... concerned.", "disaster");
                onOpenChange(false);
            }
        })["VinnieDialog[handleAccept]"];
        $[1] = addMoney;
        $[2] = addNotification;
        $[3] = onOpenChange;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const handleAccept = t1;
    let t2;
    if ($[5] !== addMoney || $[6] !== addNotification || $[7] !== onOpenChange) {
        t2 = ({
            "VinnieDialog[handleDecline]": ()=>{
                addMoney(10000);
                addNotification("Integrity Bonus", "You declined Vinnie's offer. A mysterious benefactor rewards your honesty with $10,000.", "trophy");
                onOpenChange(false);
            }
        })["VinnieDialog[handleDecline]"];
        $[5] = addMoney;
        $[6] = addNotification;
        $[7] = onOpenChange;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    const handleDecline = t2;
    let t3;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
            className: "text-sky-400",
            children: "A Shady Offer"
        }, void 0, false, {
            fileName: "[project]/src/components/VinnieDialog.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-2",
            children: "Hey there, Mayor... My associate Vinnie heard you could use some help with the city budget."
        }, void 0, false, {
            fileName: "[project]/src/components/VinnieDialog.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                    asChild: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-slate-300 pt-2",
                        children: [
                            t4,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2",
                                children: [
                                    "He's offering ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-400 font-semibold",
                                        children: "$500,000"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/VinnieDialog.tsx",
                                        lineNumber: 78,
                                        columnNumber: 137
                                    }, this),
                                    "... no strings attached."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/VinnieDialog.tsx",
                                lineNumber: 78,
                                columnNumber: 103
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-400 italic",
                                children: "Well, maybe a few strings."
                            }, void 0, false, {
                                fileName: "[project]/src/components/VinnieDialog.tsx",
                                lineNumber: 78,
                                columnNumber: 227
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/VinnieDialog.tsx",
                        lineNumber: 78,
                        columnNumber: 62
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/VinnieDialog.tsx",
                    lineNumber: 78,
                    columnNumber: 28
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/VinnieDialog.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== handleDecline) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            onClick: handleDecline,
            className: "border-slate-600 text-slate-200 hover:bg-slate-800",
            children: "Decline"
        }, void 0, false, {
            fileName: "[project]/src/components/VinnieDialog.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[12] = handleDecline;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== handleAccept) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: handleAccept,
            className: "bg-blue-600 hover:bg-blue-700 text-white",
            children: "Accept Offer"
        }, void 0, false, {
            fileName: "[project]/src/components/VinnieDialog.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[14] = handleAccept;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t6 || $[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "bg-slate-900 border-slate-700 text-slate-100",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    className: "gap-2",
                    children: [
                        t6,
                        t7
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/VinnieDialog.tsx",
                    lineNumber: 101,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/VinnieDialog.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[16] = t6;
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== onOpenChange || $[20] !== open || $[21] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: open,
            onOpenChange: onOpenChange,
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/VinnieDialog.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        $[19] = onOpenChange;
        $[20] = open;
        $[21] = t8;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    return t9;
}
_s(VinnieDialog, "R2heCfoak2G0sBb1Jvt5o75Glvk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"]
    ];
});
_c = VinnieDialog;
var _c;
__turbopack_context__.k.register(_c, "VinnieDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Game.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Game
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/GameContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMobile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mobile$2f$MobileToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/mobile/MobileToolbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mobile$2f$MobileTopBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/mobile/MobileTopBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gt-next/dist/index.client.js [app-client] (ecmascript)");
// Import shadcn components
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCheatCodes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCheatCodes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VinnieDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/VinnieDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CommandMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/CommandMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TipToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/TipToast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTipSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTipSystem.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMultiplayerSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMultiplayerSync.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCopyRoomLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCopyRoomLink.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MultiplayerContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/MultiplayerContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$multiplayer$2f$ShareModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/multiplayer/ShareModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$OverlayModeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/OverlayModeToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/game/panels/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$BudgetPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/panels/BudgetPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$StatisticsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/panels/StatisticsPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$SettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/panels/SettingsPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$AdvisorsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/panels/AdvisorsPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$MiniMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/MiniMap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$TopBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/TopBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$CanvasIsometricGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/CanvasIsometricGrid.tsx [app-client] (ecmascript)");
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
// Cargo type names for notifications
const CARGO_TYPE_NAMES = [
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('containers'),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('bulk materials'),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('oil')
];
function Game(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(134);
    if ($[0] !== "43732dc3952e846804142b410a3d3012e92257bfb7f22a4d7213606a3c37894d") {
        for(let $i = 0; $i < 134; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "43732dc3952e846804142b410a3d3012e92257bfb7f22a4d7213606a3c37894d";
    }
    const { onExit } = t0;
    const gt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGT"])();
    const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"])();
    const { state, setTool, setActivePanel, addMoney, addNotification, setSpeed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"])();
    const [overlayMode, setOverlayMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("none");
    const [selectedTile, setSelectedTile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [navigationTarget, setNavigationTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [viewport, setViewport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { isMobileDevice, isSmallScreen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobile"])();
    const isMobile = isMobileDevice || isSmallScreen;
    const [showShareModal, setShowShareModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const multiplayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MultiplayerContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMultiplayerOptional"])();
    const { triggeredCheat, showVinnieDialog, setShowVinnieDialog, clearTriggeredCheat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCheatCodes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCheatCodes"])();
    const { currentTip, isVisible: isTipVisible, onContinue: onTipContinue, onSkipAll: onTipSkipAll } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTipSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTipSystem"])(state);
    const { isMultiplayer, roomCode, players } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMultiplayerSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMultiplayerSync"])();
    const { copied: copiedRoomLink, handleCopyRoomLink } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCopyRoomLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCopyRoomLink"])(roomCode, "coop");
    let t1;
    let t2;
    if ($[1] !== overlayMode || $[2] !== selectedTile || $[3] !== setActivePanel || $[4] !== setSpeed || $[5] !== setTool || $[6] !== state.activePanel || $[7] !== state.selectedTool || $[8] !== state.speed) {
        t1 = ({
            "Game[useEffect()]": ()=>{
                const handleKeyDown = {
                    "Game[useEffect() > handleKeyDown]": (e)=>{
                        const target = e.target;
                        if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
                            return;
                        }
                        if (e.key === "Escape") {
                            if (overlayMode !== "none") {
                                setOverlayMode("none");
                            } else {
                                if (state.activePanel !== "none") {
                                    setActivePanel("none");
                                } else {
                                    if (selectedTile) {
                                        setSelectedTile(null);
                                    } else {
                                        if (state.selectedTool !== "select") {
                                            setTool("select");
                                        }
                                    }
                                }
                            }
                        } else {
                            if (e.key === "b" || e.key === "B") {
                                e.preventDefault();
                                setTool("bulldoze");
                            } else {
                                if (e.key === "p" || e.key === "P") {
                                    e.preventDefault();
                                    setSpeed(state.speed === 0 ? 1 : 0);
                                }
                            }
                        }
                    }
                }["Game[useEffect() > handleKeyDown]"];
                window.addEventListener("keydown", handleKeyDown);
                return ()=>window.removeEventListener("keydown", handleKeyDown);
            }
        })["Game[useEffect()]"];
        t2 = [
            state.activePanel,
            state.selectedTool,
            state.speed,
            selectedTile,
            setActivePanel,
            setTool,
            setSpeed,
            overlayMode
        ];
        $[1] = overlayMode;
        $[2] = selectedTile;
        $[3] = setActivePanel;
        $[4] = setSpeed;
        $[5] = setTool;
        $[6] = state.activePanel;
        $[7] = state.selectedTool;
        $[8] = state.speed;
        $[9] = t1;
        $[10] = t2;
    } else {
        t1 = $[9];
        t2 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[11] !== addMoney || $[12] !== addNotification || $[13] !== clearTriggeredCheat || $[14] !== gt || $[15] !== triggeredCheat) {
        t3 = ({
            "Game[useEffect()]": ()=>{
                if (!triggeredCheat) {
                    return;
                }
                bb56: switch(triggeredCheat.type){
                    case "konami":
                        {
                            addMoney(triggeredCheat.amount);
                            addNotification(gt("Retro Cheat Activated!"), gt("Your accountants are confused but not complaining. You received $50,000!"), "trophy");
                            clearTriggeredCheat();
                            break bb56;
                        }
                    case "motherlode":
                        {
                            addMoney(triggeredCheat.amount);
                            addNotification(gt("Motherlode!"), gt("Your treasury just got a lot heavier. You received $1,000,000!"), "trophy");
                            clearTriggeredCheat();
                            break bb56;
                        }
                    case "vinnie":
                        {
                            clearTriggeredCheat();
                        }
                }
            }
        })["Game[useEffect()]"];
        $[11] = addMoney;
        $[12] = addNotification;
        $[13] = clearTriggeredCheat;
        $[14] = gt;
        $[15] = triggeredCheat;
        $[16] = t3;
    } else {
        t3 = $[16];
    }
    let t4;
    if ($[17] !== addMoney || $[18] !== addNotification || $[19] !== clearTriggeredCheat || $[20] !== triggeredCheat) {
        t4 = [
            triggeredCheat,
            addMoney,
            addNotification,
            clearTriggeredCheat
        ];
        $[17] = addMoney;
        $[18] = addNotification;
        $[19] = clearTriggeredCheat;
        $[20] = triggeredCheat;
        $[21] = t4;
    } else {
        t4 = $[21];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    const bargeDeliveryCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    let t5;
    if ($[22] !== addMoney || $[23] !== addNotification || $[24] !== gt || $[25] !== m) {
        t5 = ({
            "Game[handleBargeDelivery]": (cargoValue, cargoType)=>{
                addMoney(cargoValue);
                bargeDeliveryCountRef.current = bargeDeliveryCountRef.current + 1;
                if (bargeDeliveryCountRef.current % 5 === 1) {
                    const cargoName = CARGO_TYPE_NAMES[cargoType] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])("cargo");
                    addNotification(gt("Cargo Delivered"), gt("A shipment of {cargoName} has arrived at the marina. +${cargoValue} trade revenue.", {
                        cargoName: m(cargoName),
                        cargoValue
                    }), "ship");
                }
            }
        })["Game[handleBargeDelivery]"];
        $[22] = addMoney;
        $[23] = addNotification;
        $[24] = gt;
        $[25] = m;
        $[26] = t5;
    } else {
        t5 = $[26];
    }
    const handleBargeDelivery = t5;
    if (isMobile) {
        const t6 = selectedTile && state.selectedTool === "select" ? state.grid[selectedTile.y][selectedTile.x] : null;
        let t7;
        let t8;
        if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = ({
                "Game[<MobileTopBar>.onCloseTile]": ()=>setSelectedTile(null)
            })["Game[<MobileTopBar>.onCloseTile]"];
            t8 = ({
                "Game[<MobileTopBar>.onShare]": ()=>setShowShareModal(true)
            })["Game[<MobileTopBar>.onShare]"];
            $[27] = t7;
            $[28] = t8;
        } else {
            t7 = $[27];
            t8 = $[28];
        }
        let t9;
        if ($[29] !== onExit || $[30] !== state.services || $[31] !== t6) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mobile$2f$MobileTopBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileTopBar"], {
                selectedTile: t6,
                services: state.services,
                onCloseTile: t7,
                onShare: t8,
                onExit: onExit
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 243,
                columnNumber: 12
            }, this);
            $[29] = onExit;
            $[30] = state.services;
            $[31] = t6;
            $[32] = t9;
        } else {
            t9 = $[32];
        }
        let t10;
        if ($[33] !== multiplayer || $[34] !== showShareModal) {
            t10 = multiplayer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$multiplayer$2f$ShareModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShareModal"], {
                open: showShareModal,
                onOpenChange: setShowShareModal
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 253,
                columnNumber: 28
            }, this);
            $[33] = multiplayer;
            $[34] = showShareModal;
            $[35] = t10;
        } else {
            t10 = $[35];
        }
        let t11;
        if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
            t11 = {
                paddingTop: "72px",
                paddingBottom: "76px"
            };
            $[36] = t11;
        } else {
            t11 = $[36];
        }
        let t12;
        if ($[37] !== handleBargeDelivery || $[38] !== overlayMode || $[39] !== selectedTile) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$CanvasIsometricGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasIsometricGrid"], {
                overlayMode: overlayMode,
                selectedTile: selectedTile,
                setSelectedTile: setSelectedTile,
                isMobile: true,
                onBargeDelivery: handleBargeDelivery
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 272,
                columnNumber: 13
            }, this);
            $[37] = handleBargeDelivery;
            $[38] = overlayMode;
            $[39] = selectedTile;
            $[40] = t12;
        } else {
            t12 = $[40];
        }
        let t13;
        if ($[41] !== copiedRoomLink || $[42] !== handleCopyRoomLink || $[43] !== isMultiplayer || $[44] !== players || $[45] !== roomCode) {
            t13 = isMultiplayer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-2 right-2 z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-900/90 border border-slate-700 rounded-lg px-2 py-1.5 shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5 text-xs text-white",
                            children: roomCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono tracking-wider",
                                        children: roomCode
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Game.tsx",
                                        lineNumber: 282,
                                        columnNumber: 242
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleCopyRoomLink,
                                        className: "p-0.5 hover:bg-white/10 rounded transition-colors",
                                        title: "Copy invite link",
                                        children: copiedRoomLink ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "w-3 h-3 text-green-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Game.tsx",
                                            lineNumber: 282,
                                            columnNumber: 444
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            className: "w-3 h-3 text-slate-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Game.tsx",
                                            lineNumber: 282,
                                            columnNumber: 491
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Game.tsx",
                                        lineNumber: 282,
                                        columnNumber: 302
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 282,
                            columnNumber: 165
                        }, this),
                        players.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-1 space-y-0.5",
                            children: players.map(_GamePlayersMap)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 282,
                            columnNumber: 577
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 282,
                    columnNumber: 75
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 282,
                columnNumber: 30
            }, this);
            $[41] = copiedRoomLink;
            $[42] = handleCopyRoomLink;
            $[43] = isMultiplayer;
            $[44] = players;
            $[45] = roomCode;
            $[46] = t13;
        } else {
            t13 = $[46];
        }
        let t14;
        if ($[47] !== t12 || $[48] !== t13) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 relative overflow-hidden",
                style: t11,
                children: [
                    t12,
                    t13
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 294,
                columnNumber: 13
            }, this);
            $[47] = t12;
            $[48] = t13;
            $[49] = t14;
        } else {
            t14 = $[49];
        }
        let t15;
        if ($[50] !== setActivePanel) {
            t15 = ({
                "Game[<MobileToolbar>.onOpenPanel]": (panel)=>setActivePanel(panel)
            })["Game[<MobileToolbar>.onOpenPanel]"];
            $[50] = setActivePanel;
            $[51] = t15;
        } else {
            t15 = $[51];
        }
        let t16;
        if ($[52] !== overlayMode || $[53] !== t15) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mobile$2f$MobileToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileToolbar"], {
                onOpenPanel: t15,
                overlayMode: overlayMode,
                setOverlayMode: setOverlayMode
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 313,
                columnNumber: 13
            }, this);
            $[52] = overlayMode;
            $[53] = t15;
            $[54] = t16;
        } else {
            t16 = $[54];
        }
        let t17;
        if ($[55] !== state.activePanel) {
            t17 = state.activePanel === "budget" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$BudgetPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BudgetPanel"], {}, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 322,
                columnNumber: 47
            }, this);
            $[55] = state.activePanel;
            $[56] = t17;
        } else {
            t17 = $[56];
        }
        let t18;
        if ($[57] !== state.activePanel) {
            t18 = state.activePanel === "statistics" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$StatisticsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatisticsPanel"], {}, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 330,
                columnNumber: 51
            }, this);
            $[57] = state.activePanel;
            $[58] = t18;
        } else {
            t18 = $[58];
        }
        let t19;
        if ($[59] !== state.activePanel) {
            t19 = state.activePanel === "advisors" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$AdvisorsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdvisorsPanel"], {}, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 338,
                columnNumber: 49
            }, this);
            $[59] = state.activePanel;
            $[60] = t19;
        } else {
            t19 = $[60];
        }
        let t20;
        if ($[61] !== state.activePanel) {
            t20 = state.activePanel === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$SettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SettingsPanel"], {}, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 346,
                columnNumber: 49
            }, this);
            $[61] = state.activePanel;
            $[62] = t20;
        } else {
            t20 = $[62];
        }
        let t21;
        if ($[63] !== setShowVinnieDialog || $[64] !== showVinnieDialog) {
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VinnieDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VinnieDialog"], {
                open: showVinnieDialog,
                onOpenChange: setShowVinnieDialog
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 354,
                columnNumber: 13
            }, this);
            $[63] = setShowVinnieDialog;
            $[64] = showVinnieDialog;
            $[65] = t21;
        } else {
            t21 = $[65];
        }
        const t22 = currentTip || "";
        let t23;
        if ($[66] !== isTipVisible || $[67] !== onTipContinue || $[68] !== onTipSkipAll || $[69] !== t22) {
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TipToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TipToast"], {
                message: t22,
                isVisible: isTipVisible,
                onContinue: onTipContinue,
                onSkipAll: onTipSkipAll
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 364,
                columnNumber: 13
            }, this);
            $[66] = isTipVisible;
            $[67] = onTipContinue;
            $[68] = onTipSkipAll;
            $[69] = t22;
            $[70] = t23;
        } else {
            t23 = $[70];
        }
        let t24;
        if ($[71] !== t10 || $[72] !== t14 || $[73] !== t16 || $[74] !== t17 || $[75] !== t18 || $[76] !== t19 || $[77] !== t20 || $[78] !== t21 || $[79] !== t23 || $[80] !== t9) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full overflow-hidden bg-background flex flex-col",
                    children: [
                        t9,
                        t10,
                        t14,
                        t16,
                        t17,
                        t18,
                        t19,
                        t20,
                        t21,
                        t23
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 375,
                    columnNumber: 30
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 375,
                columnNumber: 13
            }, this);
            $[71] = t10;
            $[72] = t14;
            $[73] = t16;
            $[74] = t17;
            $[75] = t18;
            $[76] = t19;
            $[77] = t20;
            $[78] = t21;
            $[79] = t23;
            $[80] = t9;
            $[81] = t24;
        } else {
            t24 = $[81];
        }
        return t24;
    }
    let t6;
    if ($[82] !== onExit) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
            onExit: onExit
        }, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 394,
            columnNumber: 10
        }, this);
        $[82] = onExit;
        $[83] = t6;
    } else {
        t6 = $[83];
    }
    let t7;
    let t8;
    if ($[84] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$TopBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TopBar"], {}, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 403,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$TopBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsPanel"], {}, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 404,
            columnNumber: 10
        }, this);
        $[84] = t7;
        $[85] = t8;
    } else {
        t7 = $[84];
        t8 = $[85];
    }
    let t9;
    if ($[86] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "Game[<CanvasIsometricGrid>.onNavigationComplete]": ()=>setNavigationTarget(null)
        })["Game[<CanvasIsometricGrid>.onNavigationComplete]"];
        $[86] = t9;
    } else {
        t9 = $[86];
    }
    let t10;
    if ($[87] !== handleBargeDelivery || $[88] !== navigationTarget || $[89] !== overlayMode || $[90] !== selectedTile) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$CanvasIsometricGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasIsometricGrid"], {
            overlayMode: overlayMode,
            selectedTile: selectedTile,
            setSelectedTile: setSelectedTile,
            navigationTarget: navigationTarget,
            onNavigationComplete: t9,
            onViewportChange: setViewport,
            onBargeDelivery: handleBargeDelivery
        }, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 422,
            columnNumber: 11
        }, this);
        $[87] = handleBargeDelivery;
        $[88] = navigationTarget;
        $[89] = overlayMode;
        $[90] = selectedTile;
        $[91] = t10;
    } else {
        t10 = $[91];
    }
    let t11;
    if ($[92] !== overlayMode) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$OverlayModeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OverlayModeToggle"], {
            overlayMode: overlayMode,
            setOverlayMode: setOverlayMode
        }, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 433,
            columnNumber: 11
        }, this);
        $[92] = overlayMode;
        $[93] = t11;
    } else {
        t11 = $[93];
    }
    let t12;
    if ($[94] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "Game[<MiniMap>.onNavigate]": (x, y)=>setNavigationTarget({
                    x,
                    y
                })
        })["Game[<MiniMap>.onNavigate]"];
        $[94] = t12;
    } else {
        t12 = $[94];
    }
    let t13;
    if ($[95] !== viewport) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$MiniMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MiniMap"], {
            onNavigate: t12,
            viewport: viewport
        }, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 453,
            columnNumber: 11
        }, this);
        $[95] = viewport;
        $[96] = t13;
    } else {
        t13 = $[96];
    }
    let t14;
    if ($[97] !== copiedRoomLink || $[98] !== handleCopyRoomLink || $[99] !== isMultiplayer || $[100] !== players || $[101] !== roomCode) {
        t14 = isMultiplayer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-4 right-4 z-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-900/90 border border-slate-700 rounded-lg px-3 py-2 shadow-lg min-w-[120px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-sm text-white",
                        children: roomCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono font-medium tracking-wider",
                                    children: roomCode
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 461,
                                    columnNumber: 250
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCopyRoomLink,
                                    className: "p-1 hover:bg-white/10 rounded transition-colors",
                                    title: "Copy invite link",
                                    children: copiedRoomLink ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "w-3.5 h-3.5 text-green-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Game.tsx",
                                        lineNumber: 461,
                                        columnNumber: 462
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                        className: "w-3.5 h-3.5 text-slate-400 hover:text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Game.tsx",
                                        lineNumber: 461,
                                        columnNumber: 513
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 461,
                                    columnNumber: 322
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 461,
                        columnNumber: 175
                    }, this),
                    players.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1.5 space-y-0.5",
                        children: players.map(_GamePlayersMap2)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 461,
                        columnNumber: 620
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 461,
                columnNumber: 73
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 461,
            columnNumber: 28
        }, this);
        $[97] = copiedRoomLink;
        $[98] = handleCopyRoomLink;
        $[99] = isMultiplayer;
        $[100] = players;
        $[101] = roomCode;
        $[102] = t14;
    } else {
        t14 = $[102];
    }
    let t15;
    if ($[103] !== t10 || $[104] !== t11 || $[105] !== t13 || $[106] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col ml-56",
            children: [
                t7,
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 relative overflow-visible",
                    children: [
                        t10,
                        t11,
                        t13,
                        t14
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 473,
                    columnNumber: 63
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 473,
            columnNumber: 11
        }, this);
        $[103] = t10;
        $[104] = t11;
        $[105] = t13;
        $[106] = t14;
        $[107] = t15;
    } else {
        t15 = $[107];
    }
    let t16;
    if ($[108] !== state.activePanel) {
        t16 = state.activePanel === "budget" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$BudgetPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BudgetPanel"], {}, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 484,
            columnNumber: 45
        }, this);
        $[108] = state.activePanel;
        $[109] = t16;
    } else {
        t16 = $[109];
    }
    let t17;
    if ($[110] !== state.activePanel) {
        t17 = state.activePanel === "statistics" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$StatisticsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatisticsPanel"], {}, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 492,
            columnNumber: 49
        }, this);
        $[110] = state.activePanel;
        $[111] = t17;
    } else {
        t17 = $[111];
    }
    let t18;
    if ($[112] !== state.activePanel) {
        t18 = state.activePanel === "advisors" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$AdvisorsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdvisorsPanel"], {}, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 500,
            columnNumber: 47
        }, this);
        $[112] = state.activePanel;
        $[113] = t18;
    } else {
        t18 = $[113];
    }
    let t19;
    if ($[114] !== state.activePanel) {
        t19 = state.activePanel === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$SettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SettingsPanel"], {}, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 508,
            columnNumber: 47
        }, this);
        $[114] = state.activePanel;
        $[115] = t19;
    } else {
        t19 = $[115];
    }
    let t20;
    if ($[116] !== setShowVinnieDialog || $[117] !== showVinnieDialog) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VinnieDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VinnieDialog"], {
            open: showVinnieDialog,
            onOpenChange: setShowVinnieDialog
        }, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 516,
            columnNumber: 11
        }, this);
        $[116] = setShowVinnieDialog;
        $[117] = showVinnieDialog;
        $[118] = t20;
    } else {
        t20 = $[118];
    }
    let t21;
    if ($[119] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CommandMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandMenu"], {}, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 525,
            columnNumber: 11
        }, this);
        $[119] = t21;
    } else {
        t21 = $[119];
    }
    const t22 = currentTip || "";
    let t23;
    if ($[120] !== isTipVisible || $[121] !== onTipContinue || $[122] !== onTipSkipAll || $[123] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TipToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TipToast"], {
            message: t22,
            isVisible: isTipVisible,
            onContinue: onTipContinue,
            onSkipAll: onTipSkipAll
        }, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 533,
            columnNumber: 11
        }, this);
        $[120] = isTipVisible;
        $[121] = onTipContinue;
        $[122] = onTipSkipAll;
        $[123] = t22;
        $[124] = t23;
    } else {
        t23 = $[124];
    }
    let t24;
    if ($[125] !== t15 || $[126] !== t16 || $[127] !== t17 || $[128] !== t18 || $[129] !== t19 || $[130] !== t20 || $[131] !== t23 || $[132] !== t6) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full min-h-[720px] overflow-hidden bg-background flex",
                children: [
                    t6,
                    t15,
                    t16,
                    t17,
                    t18,
                    t19,
                    t20,
                    t21,
                    t23
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 544,
                columnNumber: 28
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 544,
            columnNumber: 11
        }, this);
        $[125] = t15;
        $[126] = t16;
        $[127] = t17;
        $[128] = t18;
        $[129] = t19;
        $[130] = t20;
        $[131] = t23;
        $[132] = t6;
        $[133] = t24;
    } else {
        t24 = $[133];
    }
    return t24;
}
_s(Game, "x5h75ZFem/UJMTfcQs/q3lZzDJ8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MultiplayerContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMultiplayerOptional"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCheatCodes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCheatCodes"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTipSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTipSystem"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMultiplayerSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMultiplayerSync"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCopyRoomLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCopyRoomLink"]
    ];
});
_c = Game;
function _GamePlayersMap2(player_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1.5 text-xs text-slate-400",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-2 h-2 rounded-full bg-green-500"
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 560,
                columnNumber: 94
            }, this),
            player_0.name
        ]
    }, player_0.id, true, {
        fileName: "[project]/src/components/Game.tsx",
        lineNumber: 560,
        columnNumber: 10
    }, this);
}
function _GamePlayersMap(player) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1 text-[10px] text-slate-400",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-1.5 h-1.5 rounded-full bg-green-500"
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 563,
                columnNumber: 94
            }, this),
            player.name
        ]
    }, player.id, true, {
        fileName: "[project]/src/components/Game.tsx",
        lineNumber: 563,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Game");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/VCSimDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VCSimDashboard",
    ()=>VCSimDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$vcSimulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/vcSimulation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const POLL_INTERVAL_MS = 6000;
function formatCompactCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
        maximumFractionDigits: 1
    }).format(value);
}
function formatDate(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return value;
    }
    return date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });
}
function StatusPill(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "8bc0de407dea3edea4e1dd34f88636f3d91924f17404fc858e21572ba78f9467") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8bc0de407dea3edea4e1dd34f88636f3d91924f17404fc858e21572ba78f9467";
    }
    const { label, muted: t1 } = t0;
    const muted = t1 === undefined ? false : t1;
    const t2 = muted ? "border-white/10 bg-white/5 text-white/55" : "border-cyan-300/30 bg-cyan-300/10 text-cyan-100";
    let t3;
    if ($[1] !== t2) {
        t3 = [
            "inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.24em]",
            t2
        ];
        $[1] = t2;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const t4 = t3.join(" ");
    let t5;
    if ($[3] !== label || $[4] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t4,
            children: label
        }, void 0, false, {
            fileName: "[project]/src/components/VCSimDashboard.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[3] = label;
        $[4] = t4;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    return t5;
}
_c = StatusPill;
function InteractionCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "8bc0de407dea3edea4e1dd34f88636f3d91924f17404fc858e21572ba78f9467") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8bc0de407dea3edea4e1dd34f88636f3d91924f17404fc858e21572ba78f9467";
    }
    const { interaction } = t0;
    const isInvestor = interaction.event_type === "investor_negotiation";
    let t1;
    if ($[1] !== interaction.payload) {
        t1 = interaction.payload || {};
        $[1] = interaction.payload;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const payload = t1;
    const amount = typeof payload.amount_usd === "number" ? payload.amount_usd : null;
    const equity = typeof payload.equity_pct === "number" ? payload.equity_pct : null;
    const status = typeof payload.status === "string" ? payload.status : interaction.event_type;
    const safeCompanyName = interaction.company_name || "Unknown Company";
    const safeSummary = interaction.summary || "No summary available";
    const safeActorName = interaction.actor_name || "Unknown Actor";
    const safeCounterpartName = interaction.counterpart_name || "Unknown Counterpart";
    let t2;
    if ($[3] !== safeCompanyName) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-[11px] uppercase tracking-[0.28em] text-white/45",
            children: safeCompanyName
        }, void 0, false, {
            fileName: "[project]/src/components/VCSimDashboard.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[3] = safeCompanyName;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== safeSummary) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-1 text-sm text-white",
            children: safeSummary
        }, void 0, false, {
            fileName: "[project]/src/components/VCSimDashboard.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[5] = safeSummary;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t2 || $[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/VCSimDashboard.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const t5 = !isInvestor;
    let t6;
    if ($[10] !== status || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusPill, {
            label: status,
            muted: t5
        }, void 0, false, {
            fileName: "[project]/src/components/VCSimDashboard.tsx",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[10] = status;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t4 || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-3",
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/VCSimDashboard.tsx",
            lineNumber: 125,
            columnNumber: 10
        }, this);
        $[13] = t4;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== safeActorName || $[17] !== safeCounterpartName) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                safeActorName,
                " ",
                "->",
                " ",
                safeCounterpartName
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/VCSimDashboard.tsx",
            lineNumber: 134,
            columnNumber: 10
        }, this);
        $[16] = safeActorName;
        $[17] = safeCounterpartName;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== amount) {
        t9 = amount ? `${formatCompactCurrency(amount)} ` : "";
        $[19] = amount;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    const t10 = equity ? `${equity}%` : "";
    let t11;
    if ($[21] !== t10 || $[22] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/VCSimDashboard.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t9;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== t11 || $[25] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-3 flex items-center justify-between text-[11px] text-white/55",
            children: [
                t8,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/VCSimDashboard.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[24] = t11;
        $[25] = t8;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== t12 || $[28] !== t7) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-white/10 bg-[#09111f] p-3 shadow-[0_18px_40px_rgba(0,0,0,0.24)]",
            children: [
                t7,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/VCSimDashboard.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[27] = t12;
        $[28] = t7;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    return t13;
}
_c1 = InteractionCard;
function ReplayCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(45);
    if ($[0] !== "8bc0de407dea3edea4e1dd34f88636f3d91924f17404fc858e21572ba78f9467") {
        for(let $i = 0; $i < 45; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8bc0de407dea3edea4e1dd34f88636f3d91924f17404fc858e21572ba78f9467";
    }
    const { tick } = t0;
    const safeTickIndex = typeof tick.tick_index === "number" ? tick.tick_index : 0;
    let t1;
    if ($[1] !== tick.created_at) {
        t1 = typeof tick.created_at === "string" ? tick.created_at : new Date(0).toISOString();
        $[1] = tick.created_at;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const safeCreatedAt = t1;
    let t2;
    if ($[3] !== tick.metrics) {
        t2 = tick.metrics || {
            interaction_count: 0,
            average_runway_months: 0,
            total_cash: 0
        };
        $[3] = tick.metrics;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const safeMetrics = t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[5] !== safeCreatedAt || $[6] !== safeMetrics.average_runway_months || $[7] !== safeMetrics.interaction_count || $[8] !== safeMetrics.total_cash || $[9] !== safeTickIndex || $[10] !== tick.interactions) {
        const safeInteractions = Array.isArray(tick.interactions) ? tick.interactions.slice(0, 2) : [];
        t5 = "rounded-2xl border border-white/10 bg-black/20 p-3";
        let t8;
        if ($[16] !== safeTickIndex) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-white",
                children: [
                    "Tick ",
                    safeTickIndex
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/VCSimDashboard.tsx",
                lineNumber: 223,
                columnNumber: 12
            }, this);
            $[16] = safeTickIndex;
            $[17] = t8;
        } else {
            t8 = $[17];
        }
        let t9;
        if ($[18] !== safeCreatedAt) {
            t9 = formatDate(safeCreatedAt);
            $[18] = safeCreatedAt;
            $[19] = t9;
        } else {
            t9 = $[19];
        }
        let t10;
        if ($[20] !== t9) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[11px] uppercase tracking-[0.24em] text-white/45",
                children: t9
            }, void 0, false, {
                fileName: "[project]/src/components/VCSimDashboard.tsx",
                lineNumber: 239,
                columnNumber: 13
            }, this);
            $[20] = t9;
            $[21] = t10;
        } else {
            t10 = $[21];
        }
        if ($[22] !== t10 || $[23] !== t8) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-3",
                children: [
                    t8,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/VCSimDashboard.tsx",
                lineNumber: 246,
                columnNumber: 12
            }, this);
            $[22] = t10;
            $[23] = t8;
            $[24] = t6;
        } else {
            t6 = $[24];
        }
        let t11;
        if ($[25] !== safeMetrics.interaction_count) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    "Interactions ",
                    safeMetrics.interaction_count
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/VCSimDashboard.tsx",
                lineNumber: 255,
                columnNumber: 13
            }, this);
            $[25] = safeMetrics.interaction_count;
            $[26] = t11;
        } else {
            t11 = $[26];
        }
        let t12;
        if ($[27] !== safeMetrics.average_runway_months) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    "Runway ",
                    safeMetrics.average_runway_months,
                    "m"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/VCSimDashboard.tsx",
                lineNumber: 263,
                columnNumber: 13
            }, this);
            $[27] = safeMetrics.average_runway_months;
            $[28] = t12;
        } else {
            t12 = $[28];
        }
        let t13;
        if ($[29] !== safeMetrics.total_cash) {
            t13 = formatCompactCurrency(safeMetrics.total_cash);
            $[29] = safeMetrics.total_cash;
            $[30] = t13;
        } else {
            t13 = $[30];
        }
        let t14;
        if ($[31] !== t13) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    "Cash ",
                    t13
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/VCSimDashboard.tsx",
                lineNumber: 279,
                columnNumber: 13
            }, this);
            $[31] = t13;
            $[32] = t14;
        } else {
            t14 = $[32];
        }
        if ($[33] !== t11 || $[34] !== t12 || $[35] !== t14) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 grid grid-cols-3 gap-2 text-[11px] text-white/60",
                children: [
                    t11,
                    t12,
                    t14
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/VCSimDashboard.tsx",
                lineNumber: 286,
                columnNumber: 12
            }, this);
            $[33] = t11;
            $[34] = t12;
            $[35] = t14;
            $[36] = t7;
        } else {
            t7 = $[36];
        }
        t3 = "mt-3 space-y-2";
        t4 = safeInteractions.map(_ReplayCardSafeInteractionsMap);
        $[5] = safeCreatedAt;
        $[6] = safeMetrics.average_runway_months;
        $[7] = safeMetrics.interaction_count;
        $[8] = safeMetrics.total_cash;
        $[9] = safeTickIndex;
        $[10] = tick.interactions;
        $[11] = t3;
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
        $[15] = t7;
    } else {
        t3 = $[11];
        t4 = $[12];
        t5 = $[13];
        t6 = $[14];
        t7 = $[15];
    }
    let t8;
    if ($[37] !== t3 || $[38] !== t4) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/VCSimDashboard.tsx",
            lineNumber: 316,
            columnNumber: 10
        }, this);
        $[37] = t3;
        $[38] = t4;
        $[39] = t8;
    } else {
        t8 = $[39];
    }
    let t9;
    if ($[40] !== t5 || $[41] !== t6 || $[42] !== t7 || $[43] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/VCSimDashboard.tsx",
            lineNumber: 325,
            columnNumber: 10
        }, this);
        $[40] = t5;
        $[41] = t6;
        $[42] = t7;
        $[43] = t8;
        $[44] = t9;
    } else {
        t9 = $[44];
    }
    return t9;
}
_c2 = ReplayCard;
function _ReplayCardSafeInteractionsMap(interaction) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-white/6 bg-white/5 px-3 py-2 text-xs text-white/72",
        children: interaction.summary
    }, interaction.event_id, false, {
        fileName: "[project]/src/components/VCSimDashboard.tsx",
        lineNumber: 337,
        columnNumber: 10
    }, this);
}
function VCSimDashboard() {
    _s();
    const [simulation, setSimulation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$vcSimulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FALLBACK_SIMULATION_STATE"]);
    const [fetchState, setFetchState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('connecting');
    const [errorCount, setErrorCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const deferredSimulation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(simulation);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VCSimDashboard.useEffect": ()=>{
            let mounted = true;
            let inFlight = null;
            const refresh = {
                "VCSimDashboard.useEffect.refresh": async ()=>{
                    inFlight?.abort();
                    const controller = new AbortController();
                    inFlight = controller;
                    try {
                        const nextState = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$vcSimulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchSimulationState"])(controller.signal);
                        if (!mounted) {
                            return;
                        }
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])({
                            "VCSimDashboard.useEffect.refresh": ()=>{
                                setSimulation(nextState);
                                setFetchState('live');
                                // Reset error count on successful fetch
                                if (errorCount > 0) {
                                    setErrorCount(0);
                                }
                            }
                        }["VCSimDashboard.useEffect.refresh"]);
                    } catch (error) {
                        if (!mounted || controller.signal.aborted) {
                            return;
                        }
                        console.error('Simulation API error:', error);
                        // Implement exponential backoff for errors
                        const newErrorCount = errorCount + 1;
                        setErrorCount(newErrorCount);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])({
                            "VCSimDashboard.useEffect.refresh": ()=>{
                                setSimulation(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$vcSimulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FALLBACK_SIMULATION_STATE"]);
                            }
                        }["VCSimDashboard.useEffect.refresh"]);
                        // If too many consecutive errors, stop polling
                        if (newErrorCount >= 5) {
                            setFetchState('offline');
                            console.warn('Too many consecutive errors, stopping polling');
                            return;
                        }
                        setFetchState('offline');
                    }
                }
            }["VCSimDashboard.useEffect.refresh"];
            // Add hydration safety check
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            refresh();
            const interval = window.setInterval(refresh, POLL_INTERVAL_MS);
            return ({
                "VCSimDashboard.useEffect": ()=>{
                    mounted = false;
                    inFlight?.abort();
                    window.clearInterval(interval);
                }
            })["VCSimDashboard.useEffect"];
        }
    }["VCSimDashboard.useEffect"], [
        errorCount
    ]);
    const snapshot = deferredSimulation.current_snapshot;
    // Defensive data access with fallbacks
    const featuredCompanies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VCSimDashboard.useMemo[featuredCompanies]": ()=>{
            try {
                return Array.isArray(snapshot.companies) ? snapshot.companies.slice(0, 4) : [];
            } catch  {
                return [];
            }
        }
    }["VCSimDashboard.useMemo[featuredCompanies]"], [
        snapshot.companies
    ]);
    const currentInteractions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VCSimDashboard.useMemo[currentInteractions]": ()=>{
            try {
                return Array.isArray(snapshot.interactions) ? snapshot.interactions.slice(0, 6) : [];
            } catch  {
                return [];
            }
        }
    }["VCSimDashboard.useMemo[currentInteractions]"], [
        snapshot.interactions
    ]);
    // Safe access to recent replay
    const safeRecentReplay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VCSimDashboard.useMemo[safeRecentReplay]": ()=>{
            try {
                return Array.isArray(deferredSimulation.recent_replay) ? deferredSimulation.recent_replay : [];
            } catch  {
                return [];
            }
        }
    }["VCSimDashboard.useMemo[safeRecentReplay]"], [
        deferredSimulation.recent_replay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "h-full w-[640px] overflow-y-auto border-l border-white/8 bg-[linear-gradient(180deg,rgba(8,18,35,0.96),rgba(4,8,18,0.96))] px-4 py-4 backdrop-blur-xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4 shadow-[0_28px_80px_rgba(0,0,0,0.34)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[11px] uppercase tracking-[0.35em] text-cyan-100/70",
                                    children: "Live Session"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                                    lineNumber: 429,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mt-1 text-xl font-light tracking-[0.08em] text-white",
                                    children: "VC Agent Feed"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                                    lineNumber: 430,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm text-white/60",
                                    children: snapshot.market_signal
                                }, void 0, false, {
                                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                                    lineNumber: 431,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/VCSimDashboard.tsx",
                            lineNumber: 428,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusPill, {
                                    label: fetchState === 'live' ? 'live' : fetchState === 'offline' ? 'offline' : 'connecting',
                                    muted: fetchState !== 'live'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                                    lineNumber: 434,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusPill, {
                                    label: deferredSimulation.persistence_mode,
                                    muted: deferredSimulation.persistence_mode !== 'supabase'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                                    lineNumber: 435,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/VCSimDashboard.tsx",
                            lineNumber: 433,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                    lineNumber: 427,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 grid grid-cols-2 gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-white/8 bg-black/20 p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[11px] uppercase tracking-[0.24em] text-white/45",
                                    children: "Current Tick"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                                    lineNumber: 441,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-3xl font-light text-white",
                                    children: deferredSimulation.current_tick
                                }, void 0, false, {
                                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                                    lineNumber: 442,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/VCSimDashboard.tsx",
                            lineNumber: 440,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-white/8 bg-black/20 p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[11px] uppercase tracking-[0.24em] text-white/45",
                                    children: "Average Runway"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                                    lineNumber: 445,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-3xl font-light text-white",
                                    children: [
                                        snapshot.metrics.average_runway_months,
                                        "m"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                                    lineNumber: 446,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/VCSimDashboard.tsx",
                            lineNumber: 444,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-white/8 bg-black/20 p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[11px] uppercase tracking-[0.24em] text-white/45",
                                    children: "Cash"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                                    lineNumber: 449,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-2xl font-light text-white",
                                    children: formatCompactCurrency(snapshot.metrics.total_cash)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                                    lineNumber: 450,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/VCSimDashboard.tsx",
                            lineNumber: 448,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-white/8 bg-black/20 p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[11px] uppercase tracking-[0.24em] text-white/45",
                                    children: "Valuation"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                                    lineNumber: 453,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-2xl font-light text-white",
                                    children: formatCompactCurrency(snapshot.metrics.total_valuation)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                                    lineNumber: 454,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/VCSimDashboard.tsx",
                            lineNumber: 452,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                    lineNumber: 439,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-5 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[11px] uppercase tracking-[0.32em] text-white/45",
                            children: "Current Company Actions"
                        }, void 0, false, {
                            fileName: "[project]/src/components/VCSimDashboard.tsx",
                            lineNumber: 459,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-white/45",
                            children: [
                                "Session ",
                                deferredSimulation.session_id.slice(0, 8),
                                deferredSimulation.restored_from_db ? ' restored' : ' fresh'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/VCSimDashboard.tsx",
                            lineNumber: 460,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                    lineNumber: 458,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 grid grid-cols-2 gap-3",
                    children: featuredCompanies.map((company)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "rounded-[24px] border border-white/10 bg-[#081221] p-3 shadow-[0_18px_48px_rgba(0,0,0,0.28)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-white/90",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: company.logo_url || 'data:image/gif;base64,R0lGODlhAQABAAAAACw=',
                                                alt: `${company.name || 'Company'} logo`,
                                                width: 48,
                                                height: 48,
                                                unoptimized: true,
                                                className: "h-full w-full object-cover",
                                                onError: (e)=>{
                                                    // Fallback for broken image URLs
                                                    const target = e.currentTarget;
                                                    target.onerror = null;
                                                    target.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
                          <rect width="96" height="96" rx="24" fill="#164e63"/>
                          <text x="48" y="58" text-anchor="middle" font-family="Georgia, serif" font-size="34" fill="white">${(company.name || 'VC')[0].toUpperCase()}</text>
                        </svg>`)}`;
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/VCSimDashboard.tsx",
                                                lineNumber: 470,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/VCSimDashboard.tsx",
                                            lineNumber: 469,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "truncate text-sm text-white",
                                                    children: company.name || 'Unknown Company'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                                                    lineNumber: 481,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "truncate text-[11px] uppercase tracking-[0.22em] text-white/45",
                                                    children: company.sector || 'Unknown Sector'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                                                    lineNumber: 482,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/VCSimDashboard.tsx",
                                            lineNumber: 480,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                                    lineNumber: 468,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 text-sm text-cyan-50",
                                    children: company.current_action || 'No current action'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                                    lineNumber: 486,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-xs leading-5 text-white/62",
                                    children: company.headline || 'No headline available'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                                    lineNumber: 487,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 grid grid-cols-2 gap-2 text-xs text-white/60",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "Cash ",
                                                formatCompactCurrency(company.cash_on_hand || 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/VCSimDashboard.tsx",
                                            lineNumber: 490,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "Value ",
                                                formatCompactCurrency(company.valuation || 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/VCSimDashboard.tsx",
                                            lineNumber: 491,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "Team ",
                                                company.headcount || 0
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/VCSimDashboard.tsx",
                                            lineNumber: 492,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "Status ",
                                                company.investor_status || 'unknown'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/VCSimDashboard.tsx",
                                            lineNumber: 493,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                                    lineNumber: 489,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 rounded-xl border border-white/8 bg-white/5 px-3 py-2 text-xs text-white/72",
                                    children: company.staffing_update || 'No staffing updates'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                                    lineNumber: 496,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, company.id, true, {
                            fileName: "[project]/src/components/VCSimDashboard.tsx",
                            lineNumber: 467,
                            columnNumber: 45
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                    lineNumber: 466,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[11px] uppercase tracking-[0.32em] text-white/45",
                            children: "Investor Interactions"
                        }, void 0, false, {
                            fileName: "[project]/src/components/VCSimDashboard.tsx",
                            lineNumber: 503,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 space-y-3",
                            children: currentInteractions.length > 0 ? currentInteractions.map((interaction)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InteractionCard, {
                                    interaction: interaction
                                }, interaction.event_id, false, {
                                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                                    lineNumber: 505,
                                    columnNumber: 86
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-dashed border-white/10 px-4 py-6 text-sm text-white/40",
                                children: "Waiting for the next persisted interaction tick."
                            }, void 0, false, {
                                fileName: "[project]/src/components/VCSimDashboard.tsx",
                                lineNumber: 505,
                                columnNumber: 162
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/VCSimDashboard.tsx",
                            lineNumber: 504,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                    lineNumber: 502,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[11px] uppercase tracking-[0.32em] text-white/45",
                                    children: "Replay Last 5 Ticks"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                                    lineNumber: 513,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-white/40",
                                    children: "Supabase restore and recent replay"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                                    lineNumber: 514,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/VCSimDashboard.tsx",
                            lineNumber: 512,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 space-y-3",
                            children: safeRecentReplay.length > 0 ? safeRecentReplay.map((tick)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReplayCard, {
                                    tick: tick
                                }, `${tick.tick_index}-${tick.created_at}`, false, {
                                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                                    lineNumber: 517,
                                    columnNumber: 73
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-dashed border-white/10 px-4 py-6 text-sm text-white/40",
                                children: "No replay data available"
                            }, void 0, false, {
                                fileName: "[project]/src/components/VCSimDashboard.tsx",
                                lineNumber: 517,
                                columnNumber: 149
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/VCSimDashboard.tsx",
                            lineNumber: 516,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/VCSimDashboard.tsx",
                    lineNumber: 511,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/VCSimDashboard.tsx",
            lineNumber: 426,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/VCSimDashboard.tsx",
        lineNumber: 425,
        columnNumber: 10
    }, this);
}
_s(VCSimDashboard, "5rj5UAdncHT/bfCADWcEw17ruuQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"]
    ];
});
_c3 = VCSimDashboard;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "StatusPill");
__turbopack_context__.k.register(_c1, "InteractionCard");
__turbopack_context__.k.register(_c2, "ReplayCard");
__turbopack_context__.k.register(_c3, "VCSimDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_881aa98c._.js.map