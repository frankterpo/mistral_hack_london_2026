(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/game/panels/BudgetPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BudgetPanel",
    ()=>BudgetPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gt-next/dist/index.client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/GameContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/slider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// Translatable UI labels
const UI_LABELS = {
    budget: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Budget'),
    income: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Income'),
    expenses: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Expenses'),
    net: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Net')
};
function BudgetPanel() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(82);
    if ($[0] !== "a8e6e8065a0ab93a33879f116848560971bb22ee6c21b89e0b595d44a8de5a5d") {
        for(let $i = 0; $i < 82; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a8e6e8065a0ab93a33879f116848560971bb22ee6c21b89e0b595d44a8de5a5d";
    }
    const { state, setActivePanel, setBudgetFunding } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"])();
    const { budget, stats } = state;
    const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"])();
    let t0;
    if ($[1] !== budget.police) {
        t0 = {
            key: "police",
            ...budget.police
        };
        $[1] = budget.police;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== budget.fire) {
        t1 = {
            key: "fire",
            ...budget.fire
        };
        $[3] = budget.fire;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== budget.health) {
        t2 = {
            key: "health",
            ...budget.health
        };
        $[5] = budget.health;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== budget.education) {
        t3 = {
            key: "education",
            ...budget.education
        };
        $[7] = budget.education;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== budget.transportation) {
        t4 = {
            key: "transportation",
            ...budget.transportation
        };
        $[9] = budget.transportation;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== budget.parks) {
        t5 = {
            key: "parks",
            ...budget.parks
        };
        $[11] = budget.parks;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== budget.power) {
        t6 = {
            key: "power",
            ...budget.power
        };
        $[13] = budget.power;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== budget.water) {
        t7 = {
            key: "water",
            ...budget.water
        };
        $[15] = budget.water;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== t0 || $[18] !== t1 || $[19] !== t2 || $[20] !== t3 || $[21] !== t4 || $[22] !== t5 || $[23] !== t6 || $[24] !== t7) {
        t8 = [
            t0,
            t1,
            t2,
            t3,
            t4,
            t5,
            t6,
            t7
        ];
        $[17] = t0;
        $[18] = t1;
        $[19] = t2;
        $[20] = t3;
        $[21] = t4;
        $[22] = t5;
        $[23] = t6;
        $[24] = t7;
        $[25] = t8;
    } else {
        t8 = $[25];
    }
    const categories = t8;
    let t9;
    if ($[26] !== setActivePanel) {
        t9 = ({
            "BudgetPanel[<Dialog>.onOpenChange]": ()=>setActivePanel("none")
        })["BudgetPanel[<Dialog>.onOpenChange]"];
        $[26] = setActivePanel;
        $[27] = t9;
    } else {
        t9 = $[27];
    }
    let t10;
    if ($[28] !== m) {
        t10 = m(UI_LABELS.budget);
        $[28] = m;
        $[29] = t10;
    } else {
        t10 = $[29];
    }
    let t11;
    if ($[30] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                children: t10
            }, void 0, false, {
                fileName: "[project]/src/components/game/panels/BudgetPanel.tsx",
                lineNumber: 160,
                columnNumber: 25
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/BudgetPanel.tsx",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        $[30] = t10;
        $[31] = t11;
    } else {
        t11 = $[31];
    }
    let t12;
    if ($[32] !== m) {
        t12 = m(UI_LABELS.income);
        $[32] = m;
        $[33] = t12;
    } else {
        t12 = $[33];
    }
    let t13;
    if ($[34] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-muted-foreground text-xs mb-1",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/BudgetPanel.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[34] = t12;
        $[35] = t13;
    } else {
        t13 = $[35];
    }
    let t14;
    if ($[36] !== stats.income) {
        t14 = stats.income.toLocaleString();
        $[36] = stats.income;
        $[37] = t14;
    } else {
        t14 = $[37];
    }
    let t15;
    if ($[38] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-green-400 font-mono",
            children: [
                "$",
                t14,
                "/mo"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/BudgetPanel.tsx",
            lineNumber: 192,
            columnNumber: 11
        }, this);
        $[38] = t14;
        $[39] = t15;
    } else {
        t15 = $[39];
    }
    let t16;
    if ($[40] !== t13 || $[41] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/BudgetPanel.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[40] = t13;
        $[41] = t15;
        $[42] = t16;
    } else {
        t16 = $[42];
    }
    let t17;
    if ($[43] !== m) {
        t17 = m(UI_LABELS.expenses);
        $[43] = m;
        $[44] = t17;
    } else {
        t17 = $[44];
    }
    let t18;
    if ($[45] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-muted-foreground text-xs mb-1",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/BudgetPanel.tsx",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[45] = t17;
        $[46] = t18;
    } else {
        t18 = $[46];
    }
    let t19;
    if ($[47] !== stats.expenses) {
        t19 = stats.expenses.toLocaleString();
        $[47] = stats.expenses;
        $[48] = t19;
    } else {
        t19 = $[48];
    }
    let t20;
    if ($[49] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-red-400 font-mono",
            children: [
                "$",
                t19,
                "/mo"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/BudgetPanel.tsx",
            lineNumber: 233,
            columnNumber: 11
        }, this);
        $[49] = t19;
        $[50] = t20;
    } else {
        t20 = $[50];
    }
    let t21;
    if ($[51] !== t18 || $[52] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t18,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/BudgetPanel.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[51] = t18;
        $[52] = t20;
        $[53] = t21;
    } else {
        t21 = $[53];
    }
    let t22;
    if ($[54] !== m) {
        t22 = m(UI_LABELS.net);
        $[54] = m;
        $[55] = t22;
    } else {
        t22 = $[55];
    }
    let t23;
    if ($[56] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-muted-foreground text-xs mb-1",
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/BudgetPanel.tsx",
            lineNumber: 258,
            columnNumber: 11
        }, this);
        $[56] = t22;
        $[57] = t23;
    } else {
        t23 = $[57];
    }
    const t24 = `font-mono ${stats.income - stats.expenses >= 0 ? "text-green-400" : "text-red-400"}`;
    const t25 = stats.income - stats.expenses;
    let t26;
    if ($[58] !== t25) {
        t26 = t25.toLocaleString();
        $[58] = t25;
        $[59] = t26;
    } else {
        t26 = $[59];
    }
    let t27;
    if ($[60] !== t24 || $[61] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t24,
            children: [
                "$",
                t26,
                "/mo"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/BudgetPanel.tsx",
            lineNumber: 276,
            columnNumber: 11
        }, this);
        $[60] = t24;
        $[61] = t26;
        $[62] = t27;
    } else {
        t27 = $[62];
    }
    let t28;
    if ($[63] !== t23 || $[64] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t23,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/BudgetPanel.tsx",
            lineNumber: 285,
            columnNumber: 11
        }, this);
        $[63] = t23;
        $[64] = t27;
        $[65] = t28;
    } else {
        t28 = $[65];
    }
    let t29;
    if ($[66] !== t16 || $[67] !== t21 || $[68] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-3 gap-4 pb-4 border-b border-border",
            children: [
                t16,
                t21,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/BudgetPanel.tsx",
            lineNumber: 294,
            columnNumber: 11
        }, this);
        $[66] = t16;
        $[67] = t21;
        $[68] = t28;
        $[69] = t29;
    } else {
        t29 = $[69];
    }
    let t30;
    if ($[70] !== categories || $[71] !== setBudgetFunding) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: categories.map({
                "BudgetPanel[categories.map()]": (cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                className: "w-28 text-sm",
                                children: cat.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/panels/BudgetPanel.tsx",
                                lineNumber: 305,
                                columnNumber: 104
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                value: [
                                    cat.funding
                                ],
                                onValueChange: {
                                    "BudgetPanel[categories.map() > <Slider>.onValueChange]": (value)=>setBudgetFunding(cat.key, value[0])
                                }["BudgetPanel[categories.map() > <Slider>.onValueChange]"],
                                min: 0,
                                max: 100,
                                step: 5,
                                className: "flex-1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/panels/BudgetPanel.tsx",
                                lineNumber: 305,
                                columnNumber: 154
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-12 text-right font-mono text-sm",
                                children: [
                                    cat.funding,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/panels/BudgetPanel.tsx",
                                lineNumber: 307,
                                columnNumber: 120
                            }, this)
                        ]
                    }, cat.key, true, {
                        fileName: "[project]/src/components/game/panels/BudgetPanel.tsx",
                        lineNumber: 305,
                        columnNumber: 49
                    }, this)
            }["BudgetPanel[categories.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/BudgetPanel.tsx",
            lineNumber: 304,
            columnNumber: 11
        }, this);
        $[70] = categories;
        $[71] = setBudgetFunding;
        $[72] = t30;
    } else {
        t30 = $[72];
    }
    let t31;
    if ($[73] !== t29 || $[74] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t29,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/BudgetPanel.tsx",
            lineNumber: 317,
            columnNumber: 11
        }, this);
        $[73] = t29;
        $[74] = t30;
        $[75] = t31;
    } else {
        t31 = $[75];
    }
    let t32;
    if ($[76] !== t11 || $[77] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-[500px]",
            children: [
                t11,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/BudgetPanel.tsx",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[76] = t11;
        $[77] = t31;
        $[78] = t32;
    } else {
        t32 = $[78];
    }
    let t33;
    if ($[79] !== t32 || $[80] !== t9) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: true,
            onOpenChange: t9,
            children: t32
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/BudgetPanel.tsx",
            lineNumber: 335,
            columnNumber: 11
        }, this);
        $[79] = t32;
        $[80] = t9;
        $[81] = t33;
    } else {
        t33 = $[81];
    }
    return t33;
}
_s(BudgetPanel, "B/I8P7h+ybDPZk1+uyxXY4G/MYc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"]
    ];
});
_c = BudgetPanel;
var _c;
__turbopack_context__.k.register(_c, "BudgetPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/game/panels/StatisticsPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatisticsPanel",
    ()=>StatisticsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gt-next/dist/index.client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/GameContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tabs.tsx [app-client] (ecmascript)");
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
// Translatable UI labels
const UI_LABELS = {
    cityStatistics: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('City Statistics'),
    population: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Population'),
    jobs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Jobs'),
    treasury: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Treasury'),
    weekly: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Weekly'),
    money: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Money'),
    happiness: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Happiness'),
    notEnoughData: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Not enough data yet. Keep playing to see historical trends.')
};
function StatisticsPanel() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(94);
    if ($[0] !== "d8dff3c18890cff11b9b7179cee0ae7a19e8e5e20e7a6d487578080ad5484fab") {
        for(let $i = 0; $i < 94; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d8dff3c18890cff11b9b7179cee0ae7a19e8e5e20e7a6d487578080ad5484fab";
    }
    const { state, setActivePanel } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"])();
    const { history, stats } = state;
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("population");
    const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"])();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] !== activeTab || $[2] !== history) {
        t0 = ({
            "StatisticsPanel[useEffect()]": ()=>{
                const canvas = canvasRef.current;
                if (!canvas || history.length < 2) {
                    return;
                }
                const ctx = canvas.getContext("2d");
                if (!ctx) {
                    return;
                }
                const width = canvas.width;
                const height = canvas.height;
                ctx.fillStyle = "#1a1f2e";
                ctx.fillRect(0, 0, width, height);
                let data = [];
                let color = "#10b981";
                bb14: switch(activeTab){
                    case "population":
                        {
                            data = history.map(_StatisticsPanelUseEffectHistoryMap);
                            color = "#10b981";
                            break bb14;
                        }
                    case "money":
                        {
                            data = history.map(_StatisticsPanelUseEffectHistoryMap2);
                            color = "#f59e0b";
                            break bb14;
                        }
                    case "happiness":
                        {
                            data = history.map(_StatisticsPanelUseEffectHistoryMap3);
                            color = "#ec4899";
                        }
                }
                if (data.length < 2) {
                    return;
                }
                const minVal = Math.min(...data);
                const maxVal = Math.max(...data);
                const range = maxVal - minVal || 1;
                ctx.strokeStyle = "#2d3748";
                ctx.lineWidth = 0.5;
                for(let i = 0; i <= 4; i++){
                    const y = 40 + (height - 80) * (i / 4);
                    ctx.beginPath();
                    ctx.moveTo(40, y);
                    ctx.lineTo(width - 40, y);
                    ctx.stroke();
                }
                ctx.strokeStyle = color;
                ctx.lineWidth = 2;
                ctx.beginPath();
                const stepX = (width - 80) / (data.length - 1);
                data.forEach({
                    "StatisticsPanel[useEffect() > data.forEach()]": (val, i_0)=>{
                        const x = 40 + i_0 * stepX;
                        const y_0 = 40 + (height - 80) * (1 - (val - minVal) / range);
                        if (i_0 === 0) {
                            ctx.moveTo(x, y_0);
                        } else {
                            ctx.lineTo(x, y_0);
                        }
                    }
                }["StatisticsPanel[useEffect() > data.forEach()]"]);
                ctx.stroke();
            }
        })["StatisticsPanel[useEffect()]"];
        t1 = [
            history,
            activeTab
        ];
        $[1] = activeTab;
        $[2] = history;
        $[3] = t0;
        $[4] = t1;
    } else {
        t0 = $[3];
        t1 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[5] !== setActivePanel) {
        t2 = ({
            "StatisticsPanel[<Dialog>.onOpenChange]": ()=>setActivePanel("none")
        })["StatisticsPanel[<Dialog>.onOpenChange]"];
        $[5] = setActivePanel;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== m) {
        t3 = m(UI_LABELS.cityStatistics);
        $[7] = m;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                children: t3
            }, void 0, false, {
                fileName: "[project]/src/components/game/panels/StatisticsPanel.tsx",
                lineNumber: 142,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/StatisticsPanel.tsx",
            lineNumber: 142,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== m) {
        t5 = m(UI_LABELS.population);
        $[11] = m;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-muted-foreground text-[10px] sm:text-xs mb-1",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/StatisticsPanel.tsx",
            lineNumber: 158,
            columnNumber: 10
        }, this);
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== stats.population) {
        t7 = stats.population.toLocaleString();
        $[15] = stats.population;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-mono tabular-nums font-semibold text-green-400 text-sm sm:text-base truncate",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/StatisticsPanel.tsx",
            lineNumber: 174,
            columnNumber: 10
        }, this);
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== t6 || $[20] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "p-2 sm:p-3",
            children: [
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/StatisticsPanel.tsx",
            lineNumber: 182,
            columnNumber: 10
        }, this);
        $[19] = t6;
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== m) {
        t10 = m(UI_LABELS.jobs);
        $[22] = m;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-muted-foreground text-[10px] sm:text-xs mb-1",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/StatisticsPanel.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[24] = t10;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== stats.jobs) {
        t12 = stats.jobs.toLocaleString();
        $[26] = stats.jobs;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-mono tabular-nums font-semibold text-blue-400 text-sm sm:text-base truncate",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/StatisticsPanel.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[28] = t12;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== t11 || $[31] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "p-2 sm:p-3",
            children: [
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/StatisticsPanel.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[30] = t11;
        $[31] = t13;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    let t15;
    if ($[33] !== m) {
        t15 = m(UI_LABELS.treasury);
        $[33] = m;
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-muted-foreground text-[10px] sm:text-xs mb-1",
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/StatisticsPanel.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[35] = t15;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== stats.money) {
        t17 = stats.money.toLocaleString();
        $[37] = stats.money;
        $[38] = t17;
    } else {
        t17 = $[38];
    }
    let t18;
    if ($[39] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-mono tabular-nums font-semibold text-amber-400 text-sm sm:text-base truncate",
            children: [
                "$",
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/StatisticsPanel.tsx",
            lineNumber: 256,
            columnNumber: 11
        }, this);
        $[39] = t17;
        $[40] = t18;
    } else {
        t18 = $[40];
    }
    let t19;
    if ($[41] !== t16 || $[42] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "p-2 sm:p-3",
            children: [
                t16,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/StatisticsPanel.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[41] = t16;
        $[42] = t18;
        $[43] = t19;
    } else {
        t19 = $[43];
    }
    let t20;
    if ($[44] !== m) {
        t20 = m(UI_LABELS.weekly);
        $[44] = m;
        $[45] = t20;
    } else {
        t20 = $[45];
    }
    let t21;
    if ($[46] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-muted-foreground text-[10px] sm:text-xs mb-1",
            children: t20
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/StatisticsPanel.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, this);
        $[46] = t20;
        $[47] = t21;
    } else {
        t21 = $[47];
    }
    const t22 = `font-mono tabular-nums font-semibold text-sm sm:text-base truncate ${stats.income - stats.expenses >= 0 ? "text-green-400" : "text-red-400"}`;
    const t23 = Math.floor((stats.income - stats.expenses) / 4);
    let t24;
    if ($[48] !== t23) {
        t24 = t23.toLocaleString();
        $[48] = t23;
        $[49] = t24;
    } else {
        t24 = $[49];
    }
    let t25;
    if ($[50] !== t22 || $[51] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t22,
            children: [
                "$",
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/StatisticsPanel.tsx",
            lineNumber: 299,
            columnNumber: 11
        }, this);
        $[50] = t22;
        $[51] = t24;
        $[52] = t25;
    } else {
        t25 = $[52];
    }
    let t26;
    if ($[53] !== t21 || $[54] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "p-2 sm:p-3",
            children: [
                t21,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/StatisticsPanel.tsx",
            lineNumber: 308,
            columnNumber: 11
        }, this);
        $[53] = t21;
        $[54] = t25;
        $[55] = t26;
    } else {
        t26 = $[55];
    }
    let t27;
    if ($[56] !== t14 || $[57] !== t19 || $[58] !== t26 || $[59] !== t9) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3",
            children: [
                t9,
                t14,
                t19,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/StatisticsPanel.tsx",
            lineNumber: 317,
            columnNumber: 11
        }, this);
        $[56] = t14;
        $[57] = t19;
        $[58] = t26;
        $[59] = t9;
        $[60] = t27;
    } else {
        t27 = $[60];
    }
    let t28;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = ({
            "StatisticsPanel[<Tabs>.onValueChange]": (v_0)=>setActiveTab(v_0)
        })["StatisticsPanel[<Tabs>.onValueChange]"];
        $[61] = t28;
    } else {
        t28 = $[61];
    }
    let t29;
    if ($[62] !== m) {
        t29 = m(UI_LABELS.population);
        $[62] = m;
        $[63] = t29;
    } else {
        t29 = $[63];
    }
    let t30;
    if ($[64] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
            value: "population",
            className: "text-xs sm:text-sm py-2 px-2 sm:px-3",
            children: t29
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/StatisticsPanel.tsx",
            lineNumber: 345,
            columnNumber: 11
        }, this);
        $[64] = t29;
        $[65] = t30;
    } else {
        t30 = $[65];
    }
    let t31;
    if ($[66] !== m) {
        t31 = m(UI_LABELS.money);
        $[66] = m;
        $[67] = t31;
    } else {
        t31 = $[67];
    }
    let t32;
    if ($[68] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
            value: "money",
            className: "text-xs sm:text-sm py-2 px-2 sm:px-3",
            children: t31
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/StatisticsPanel.tsx",
            lineNumber: 361,
            columnNumber: 11
        }, this);
        $[68] = t31;
        $[69] = t32;
    } else {
        t32 = $[69];
    }
    let t33;
    if ($[70] !== m) {
        t33 = m(UI_LABELS.happiness);
        $[70] = m;
        $[71] = t33;
    } else {
        t33 = $[71];
    }
    let t34;
    if ($[72] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
            value: "happiness",
            className: "text-xs sm:text-sm py-2 px-2 sm:px-3",
            children: t33
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/StatisticsPanel.tsx",
            lineNumber: 377,
            columnNumber: 11
        }, this);
        $[72] = t33;
        $[73] = t34;
    } else {
        t34 = $[73];
    }
    let t35;
    if ($[74] !== t30 || $[75] !== t32 || $[76] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
            className: "grid w-full grid-cols-3 h-auto",
            children: [
                t30,
                t32,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/StatisticsPanel.tsx",
            lineNumber: 385,
            columnNumber: 11
        }, this);
        $[74] = t30;
        $[75] = t32;
        $[76] = t34;
        $[77] = t35;
    } else {
        t35 = $[77];
    }
    let t36;
    if ($[78] !== activeTab || $[79] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
            value: activeTab,
            onValueChange: t28,
            children: t35
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/StatisticsPanel.tsx",
            lineNumber: 395,
            columnNumber: 11
        }, this);
        $[78] = activeTab;
        $[79] = t35;
        $[80] = t36;
    } else {
        t36 = $[80];
    }
    let t37;
    if ($[81] !== history.length || $[82] !== m) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "p-4",
            children: history.length < 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[200px] flex items-center justify-center text-muted-foreground text-sm",
                children: m(UI_LABELS.notEnoughData)
            }, void 0, false, {
                fileName: "[project]/src/components/game/panels/StatisticsPanel.tsx",
                lineNumber: 404,
                columnNumber: 55
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                width: 536,
                height: 200,
                className: "w-full rounded-md"
            }, void 0, false, {
                fileName: "[project]/src/components/game/panels/StatisticsPanel.tsx",
                lineNumber: 404,
                columnNumber: 182
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/StatisticsPanel.tsx",
            lineNumber: 404,
            columnNumber: 11
        }, this);
        $[81] = history.length;
        $[82] = m;
        $[83] = t37;
    } else {
        t37 = $[83];
    }
    let t38;
    if ($[84] !== t27 || $[85] !== t36 || $[86] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t27,
                t36,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/StatisticsPanel.tsx",
            lineNumber: 413,
            columnNumber: 11
        }, this);
        $[84] = t27;
        $[85] = t36;
        $[86] = t37;
        $[87] = t38;
    } else {
        t38 = $[87];
    }
    let t39;
    if ($[88] !== t38 || $[89] !== t4) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-[600px]",
            children: [
                t4,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/StatisticsPanel.tsx",
            lineNumber: 423,
            columnNumber: 11
        }, this);
        $[88] = t38;
        $[89] = t4;
        $[90] = t39;
    } else {
        t39 = $[90];
    }
    let t40;
    if ($[91] !== t2 || $[92] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: true,
            onOpenChange: t2,
            children: t39
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/StatisticsPanel.tsx",
            lineNumber: 432,
            columnNumber: 11
        }, this);
        $[91] = t2;
        $[92] = t39;
        $[93] = t40;
    } else {
        t40 = $[93];
    }
    return t40;
}
_s(StatisticsPanel, "IRuvHBsIOLZ3uAkfstERoSEkXZ0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"]
    ];
});
_c = StatisticsPanel;
function _StatisticsPanelUseEffectHistoryMap3(h) {
    return h.happiness;
}
function _StatisticsPanelUseEffectHistoryMap2(h_0) {
    return h_0.money;
}
function _StatisticsPanelUseEffectHistoryMap(h_1) {
    return h_1.population;
}
var _c;
__turbopack_context__.k.register(_c, "StatisticsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/game/panels/SpriteTestPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpriteTestPanel",
    ()=>SpriteTestPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/GameContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/renderConfig.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function SpriteTestPanel(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(69);
    if ($[0] !== "15dccc4da1baccf26aa69683cac84e26552f98118370dd68d75e6853fd4c2b02") {
        for(let $i = 0; $i < 69; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "15dccc4da1baccf26aa69683cac84e26552f98118370dd68d75e6853fd4c2b02";
    }
    const { onClose } = t0;
    const { currentSpritePack } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"])();
    const [selectedTab, setSelectedTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("main");
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            main: null,
            construction: null,
            abandoned: null,
            dense: null,
            modern: null,
            parks: null,
            parksConstruction: null,
            services: null,
            infrastructure: null
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [spriteSheets, setSpriteSheets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] !== currentSpritePack.abandonedSrc || $[3] !== currentSpritePack.constructionSrc || $[4] !== currentSpritePack.denseSrc || $[5] !== currentSpritePack.infrastructureSrc || $[6] !== currentSpritePack.modernSrc || $[7] !== currentSpritePack.parksConstructionSrc || $[8] !== currentSpritePack.parksSrc || $[9] !== currentSpritePack.servicesSrc || $[10] !== currentSpritePack.src) {
        t2 = ({
            "SpriteTestPanel[useEffect()]": ()=>{
                const loadSheet = {
                    "SpriteTestPanel[useEffect() > loadSheet]": (src, key)=>{
                        if (!src) {
                            setSpriteSheets({
                                "SpriteTestPanel[useEffect() > loadSheet > setSpriteSheets()]": (prev)=>({
                                        ...prev,
                                        [key]: null
                                    })
                            }["SpriteTestPanel[useEffect() > loadSheet > setSpriteSheets()]"]);
                            return Promise.resolve();
                        }
                        return new Promise((resolve)=>{
                            const img = new Image();
                            img.onload = ()=>{
                                setSpriteSheets({
                                    "SpriteTestPanel[useEffect() > loadSheet > <anonymous> > <anonymous> > setSpriteSheets()]": (prev_0)=>({
                                            ...prev_0,
                                            [key]: img
                                        })
                                }["SpriteTestPanel[useEffect() > loadSheet > <anonymous> > <anonymous> > setSpriteSheets()]"]);
                                resolve();
                            };
                            img.onerror = ()=>{
                                setSpriteSheets({
                                    "SpriteTestPanel[useEffect() > loadSheet > <anonymous> > <anonymous> > setSpriteSheets()]": (prev_1)=>({
                                            ...prev_1,
                                            [key]: null
                                        })
                                }["SpriteTestPanel[useEffect() > loadSheet > <anonymous> > <anonymous> > setSpriteSheets()]"]);
                                resolve();
                            };
                            img.src = src;
                        });
                    }
                }["SpriteTestPanel[useEffect() > loadSheet]"];
                Promise.all([
                    loadSheet(currentSpritePack.src, "main"),
                    loadSheet(currentSpritePack.constructionSrc, "construction"),
                    loadSheet(currentSpritePack.abandonedSrc, "abandoned"),
                    loadSheet(currentSpritePack.denseSrc, "dense"),
                    loadSheet(currentSpritePack.modernSrc, "modern"),
                    loadSheet(currentSpritePack.parksSrc, "parks"),
                    loadSheet(currentSpritePack.parksConstructionSrc, "parksConstruction"),
                    loadSheet(currentSpritePack.servicesSrc, "services"),
                    loadSheet(currentSpritePack.infrastructureSrc, "infrastructure")
                ]);
            }
        })["SpriteTestPanel[useEffect()]"];
        $[2] = currentSpritePack.abandonedSrc;
        $[3] = currentSpritePack.constructionSrc;
        $[4] = currentSpritePack.denseSrc;
        $[5] = currentSpritePack.infrastructureSrc;
        $[6] = currentSpritePack.modernSrc;
        $[7] = currentSpritePack.parksConstructionSrc;
        $[8] = currentSpritePack.parksSrc;
        $[9] = currentSpritePack.servicesSrc;
        $[10] = currentSpritePack.src;
        $[11] = t2;
    } else {
        t2 = $[11];
    }
    let t3;
    if ($[12] !== currentSpritePack) {
        t3 = [
            currentSpritePack
        ];
        $[12] = currentSpritePack;
        $[13] = t3;
    } else {
        t3 = $[13];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    const t4 = !!spriteSheets.main;
    let t5;
    if ($[14] !== t4) {
        t5 = {
            id: "main",
            label: "Main",
            available: t4
        };
        $[14] = t4;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    const t6 = !!spriteSheets.construction;
    let t7;
    if ($[16] !== t6) {
        t7 = {
            id: "construction",
            label: "Construction",
            available: t6
        };
        $[16] = t6;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    const t8 = !!spriteSheets.abandoned;
    let t9;
    if ($[18] !== t8) {
        t9 = {
            id: "abandoned",
            label: "Abandoned",
            available: t8
        };
        $[18] = t8;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    const t10 = !!spriteSheets.dense;
    let t11;
    if ($[20] !== t10) {
        t11 = {
            id: "dense",
            label: "High Density",
            available: t10
        };
        $[20] = t10;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    const t12 = !!spriteSheets.modern;
    let t13;
    if ($[22] !== t12) {
        t13 = {
            id: "modern",
            label: "Modern",
            available: t12
        };
        $[22] = t12;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    const t14 = !!spriteSheets.parks;
    let t15;
    if ($[24] !== t14) {
        t15 = {
            id: "parks",
            label: "Parks",
            available: t14
        };
        $[24] = t14;
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    const t16 = !!spriteSheets.parksConstruction;
    let t17;
    if ($[26] !== t16) {
        t17 = {
            id: "parksConstruction",
            label: "Parks Construction",
            available: t16
        };
        $[26] = t16;
        $[27] = t17;
    } else {
        t17 = $[27];
    }
    const t18 = !!spriteSheets.services;
    let t19;
    if ($[28] !== t18) {
        t19 = {
            id: "services",
            label: "Services",
            available: t18
        };
        $[28] = t18;
        $[29] = t19;
    } else {
        t19 = $[29];
    }
    const t20 = !!spriteSheets.infrastructure;
    let t21;
    if ($[30] !== t20) {
        t21 = {
            id: "infrastructure",
            label: "Infrastructure",
            available: t20
        };
        $[30] = t20;
        $[31] = t21;
    } else {
        t21 = $[31];
    }
    let t22;
    if ($[32] !== t11 || $[33] !== t13 || $[34] !== t15 || $[35] !== t17 || $[36] !== t19 || $[37] !== t21 || $[38] !== t5 || $[39] !== t7 || $[40] !== t9) {
        t22 = [
            t5,
            t7,
            t9,
            t11,
            t13,
            t15,
            t17,
            t19,
            t21
        ].filter(_SpriteTestPanelAnonymous);
        $[32] = t11;
        $[33] = t13;
        $[34] = t15;
        $[35] = t17;
        $[36] = t19;
        $[37] = t21;
        $[38] = t5;
        $[39] = t7;
        $[40] = t9;
        $[41] = t22;
    } else {
        t22 = $[41];
    }
    const availableTabs = t22;
    let t23;
    bb0: {
        if (availableTabs.length > 0 && !availableTabs.find({
            "SpriteTestPanel[availableTabs.find()]": (t)=>t.id === selectedTab
        }["SpriteTestPanel[availableTabs.find()]"])) {
            t23 = availableTabs[0].id;
            break bb0;
        }
        t23 = selectedTab;
    }
    const activeTab = t23;
    let t24;
    let t25;
    if ($[42] !== activeTab || $[43] !== currentSpritePack || $[44] !== spriteSheets) {
        t24 = ({
            "SpriteTestPanel[useEffect()]": ()=>{
                const canvas = canvasRef.current;
                const spriteSheet = spriteSheets[activeTab];
                if (!canvas || !spriteSheet) {
                    return;
                }
                const ctx = canvas.getContext("2d", {
                    willReadFrequently: false,
                    alpha: true
                });
                if (!ctx) {
                    return;
                }
                const dpr = window.devicePixelRatio || 1;
                ctx.imageSmoothingEnabled = false;
                ctx.imageSmoothingQuality = "high";
                const itemsToRender = [];
                const sheetWidth = spriteSheet.naturalWidth || spriteSheet.width;
                const sheetHeight = spriteSheet.naturalHeight || spriteSheet.height;
                let sheetCols;
                let sheetRows;
                if (activeTab === "main") {
                    currentSpritePack.spriteOrder.forEach({
                        "SpriteTestPanel[useEffect() > currentSpritePack.spriteOrder.forEach()]": (spriteKey, index)=>{
                            const buildingType = Object.entries(currentSpritePack.buildingToSprite).find({
                                "SpriteTestPanel[useEffect() > currentSpritePack.spriteOrder.forEach() > (anonymous)()]": (t26)=>{
                                    const [, value] = t26;
                                    return value === spriteKey;
                                }
                            }["SpriteTestPanel[useEffect() > currentSpritePack.spriteOrder.forEach() > (anonymous)()]"])?.[0] || spriteKey;
                            const coords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpriteCoords"])(buildingType, sheetWidth, sheetHeight, currentSpritePack);
                            if (coords) {
                                itemsToRender.push({
                                    label: spriteKey,
                                    coords,
                                    index
                                });
                            }
                        }
                    }["SpriteTestPanel[useEffect() > currentSpritePack.spriteOrder.forEach()]"]);
                } else {
                    if (activeTab === "construction" && currentSpritePack.constructionSrc) {
                        currentSpritePack.spriteOrder.forEach({
                            "SpriteTestPanel[useEffect() > currentSpritePack.spriteOrder.forEach()]": (spriteKey_0, index_0)=>{
                                const buildingType_0 = Object.entries(currentSpritePack.buildingToSprite).find({
                                    "SpriteTestPanel[useEffect() > currentSpritePack.spriteOrder.forEach() > (anonymous)()]": (t27)=>{
                                        const [, value_0] = t27;
                                        return value_0 === spriteKey_0;
                                    }
                                }["SpriteTestPanel[useEffect() > currentSpritePack.spriteOrder.forEach() > (anonymous)()]"])?.[0] || spriteKey_0;
                                const coords_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpriteCoords"])(buildingType_0, sheetWidth, sheetHeight, currentSpritePack);
                                if (coords_0) {
                                    itemsToRender.push({
                                        label: `${spriteKey_0} (construction)`,
                                        coords: coords_0,
                                        index: index_0
                                    });
                                }
                            }
                        }["SpriteTestPanel[useEffect() > currentSpritePack.spriteOrder.forEach()]"]);
                    } else {
                        if (activeTab === "abandoned" && currentSpritePack.abandonedSrc) {
                            currentSpritePack.spriteOrder.forEach({
                                "SpriteTestPanel[useEffect() > currentSpritePack.spriteOrder.forEach()]": (spriteKey_1, index_1)=>{
                                    const buildingType_1 = Object.entries(currentSpritePack.buildingToSprite).find({
                                        "SpriteTestPanel[useEffect() > currentSpritePack.spriteOrder.forEach() > (anonymous)()]": (t28)=>{
                                            const [, value_1] = t28;
                                            return value_1 === spriteKey_1;
                                        }
                                    }["SpriteTestPanel[useEffect() > currentSpritePack.spriteOrder.forEach() > (anonymous)()]"])?.[0] || spriteKey_1;
                                    const coords_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$renderConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpriteCoords"])(buildingType_1, sheetWidth, sheetHeight, currentSpritePack);
                                    if (coords_1) {
                                        itemsToRender.push({
                                            label: `${spriteKey_1} (abandoned)`,
                                            coords: coords_1,
                                            index: index_1
                                        });
                                    }
                                }
                            }["SpriteTestPanel[useEffect() > currentSpritePack.spriteOrder.forEach()]"]);
                        } else {
                            if (activeTab === "dense" && currentSpritePack.denseSrc && currentSpritePack.denseVariants) {
                                sheetCols = currentSpritePack.cols;
                                sheetRows = currentSpritePack.rows;
                                const tileWidth = Math.floor(sheetWidth / sheetCols);
                                const tileHeight = Math.floor(sheetHeight / sheetRows);
                                Object.entries(currentSpritePack.denseVariants).forEach({
                                    "SpriteTestPanel[useEffect() > (anonymous)()]": (t29)=>{
                                        const [buildingType_2, variants] = t29;
                                        variants.forEach({
                                            "SpriteTestPanel[useEffect() > (anonymous)() > variants.forEach()]": (variant, variantIndex)=>{
                                                const sx = variant.col * tileWidth;
                                                const sy = variant.row * tileHeight;
                                                itemsToRender.push({
                                                    label: `${buildingType_2} (dense ${variantIndex + 1})`,
                                                    coords: {
                                                        sx,
                                                        sy,
                                                        sw: tileWidth,
                                                        sh: tileHeight
                                                    }
                                                });
                                            }
                                        }["SpriteTestPanel[useEffect() > (anonymous)() > variants.forEach()]"]);
                                    }
                                }["SpriteTestPanel[useEffect() > (anonymous)()]"]);
                            } else {
                                if (activeTab === "modern" && currentSpritePack.modernSrc && currentSpritePack.modernVariants) {
                                    sheetCols = currentSpritePack.cols;
                                    sheetRows = currentSpritePack.rows;
                                    const tileWidth_0 = Math.floor(sheetWidth / sheetCols);
                                    const tileHeight_0 = Math.floor(sheetHeight / sheetRows);
                                    Object.entries(currentSpritePack.modernVariants).forEach({
                                        "SpriteTestPanel[useEffect() > (anonymous)()]": (t30)=>{
                                            const [buildingType_3, variants_0] = t30;
                                            variants_0.forEach({
                                                "SpriteTestPanel[useEffect() > (anonymous)() > variants_0.forEach()]": (variant_0, variantIndex_0)=>{
                                                    const sx_0 = variant_0.col * tileWidth_0;
                                                    const sy_0 = variant_0.row * tileHeight_0;
                                                    itemsToRender.push({
                                                        label: `${buildingType_3} (modern ${variantIndex_0 + 1})`,
                                                        coords: {
                                                            sx: sx_0,
                                                            sy: sy_0,
                                                            sw: tileWidth_0,
                                                            sh: tileHeight_0
                                                        }
                                                    });
                                                }
                                            }["SpriteTestPanel[useEffect() > (anonymous)() > variants_0.forEach()]"]);
                                        }
                                    }["SpriteTestPanel[useEffect() > (anonymous)()]"]);
                                } else {
                                    if (activeTab === "parks" && currentSpritePack.parksSrc && currentSpritePack.parksBuildings) {
                                        sheetCols = currentSpritePack.parksCols || currentSpritePack.cols;
                                        sheetRows = currentSpritePack.parksRows || currentSpritePack.rows;
                                        const tileWidth_1 = Math.floor(sheetWidth / sheetCols);
                                        const tileHeight_1 = Math.floor(sheetHeight / sheetRows);
                                        Object.entries(currentSpritePack.parksBuildings).forEach({
                                            "SpriteTestPanel[useEffect() > (anonymous)()]": (t31)=>{
                                                const [buildingType_4, pos] = t31;
                                                const sx_1 = pos.col * tileWidth_1;
                                                const sy_1 = pos.row * tileHeight_1;
                                                itemsToRender.push({
                                                    label: buildingType_4,
                                                    coords: {
                                                        sx: sx_1,
                                                        sy: sy_1,
                                                        sw: tileWidth_1,
                                                        sh: tileHeight_1
                                                    }
                                                });
                                            }
                                        }["SpriteTestPanel[useEffect() > (anonymous)()]"]);
                                    } else {
                                        if (activeTab === "parksConstruction" && currentSpritePack.parksConstructionSrc && currentSpritePack.parksBuildings) {
                                            sheetCols = currentSpritePack.parksCols || currentSpritePack.cols;
                                            sheetRows = currentSpritePack.parksRows || currentSpritePack.rows;
                                            const tileWidth_2 = Math.floor(sheetWidth / sheetCols);
                                            const tileHeight_2 = Math.floor(sheetHeight / sheetRows);
                                            Object.entries(currentSpritePack.parksBuildings).forEach({
                                                "SpriteTestPanel[useEffect() > (anonymous)()]": (t32)=>{
                                                    const [buildingType_5, pos_0] = t32;
                                                    const sx_2 = pos_0.col * tileWidth_2;
                                                    const sy_2 = pos_0.row * tileHeight_2;
                                                    itemsToRender.push({
                                                        label: `${buildingType_5} (construction)`,
                                                        coords: {
                                                            sx: sx_2,
                                                            sy: sy_2,
                                                            sw: tileWidth_2,
                                                            sh: tileHeight_2
                                                        }
                                                    });
                                                }
                                            }["SpriteTestPanel[useEffect() > (anonymous)()]"]);
                                        } else {
                                            if (activeTab === "services" && currentSpritePack.servicesSrc && currentSpritePack.servicesVariants) {
                                                sheetCols = currentSpritePack.servicesCols || currentSpritePack.cols;
                                                sheetRows = currentSpritePack.servicesRows || currentSpritePack.rows;
                                                const tileWidth_3 = Math.floor(sheetWidth / sheetCols);
                                                const tileHeight_3 = Math.floor(sheetHeight / sheetRows);
                                                Object.entries(currentSpritePack.servicesVariants).forEach({
                                                    "SpriteTestPanel[useEffect() > (anonymous)()]": (t33)=>{
                                                        const [buildingType_6, variants_1] = t33;
                                                        variants_1.forEach({
                                                            "SpriteTestPanel[useEffect() > (anonymous)() > variants_1.forEach()]": (variant_1, variantIndex_1)=>{
                                                                const sx_3 = variant_1.col * tileWidth_3;
                                                                const sy_3 = variant_1.row * tileHeight_3;
                                                                itemsToRender.push({
                                                                    label: `${buildingType_6} (level ${variantIndex_1 + 1})`,
                                                                    coords: {
                                                                        sx: sx_3,
                                                                        sy: sy_3,
                                                                        sw: tileWidth_3,
                                                                        sh: tileHeight_3
                                                                    }
                                                                });
                                                            }
                                                        }["SpriteTestPanel[useEffect() > (anonymous)() > variants_1.forEach()]"]);
                                                    }
                                                }["SpriteTestPanel[useEffect() > (anonymous)()]"]);
                                            } else {
                                                if (activeTab === "infrastructure" && currentSpritePack.infrastructureSrc && currentSpritePack.infrastructureVariants) {
                                                    sheetCols = currentSpritePack.infrastructureCols || 5;
                                                    sheetRows = currentSpritePack.infrastructureRows || 6;
                                                    const tileWidth_4 = Math.floor(sheetWidth / sheetCols);
                                                    const tileHeight_4 = Math.floor(sheetHeight / sheetRows);
                                                    Object.entries(currentSpritePack.infrastructureVariants).forEach({
                                                        "SpriteTestPanel[useEffect() > (anonymous)()]": (t34)=>{
                                                            const [buildingType_7, variants_2] = t34;
                                                            variants_2.forEach({
                                                                "SpriteTestPanel[useEffect() > (anonymous)() > variants_2.forEach()]": (variant_2, variantIndex_2)=>{
                                                                    const sx_4 = variant_2.col * tileWidth_4;
                                                                    const sy_4 = variant_2.row * tileHeight_4;
                                                                    itemsToRender.push({
                                                                        label: `${buildingType_7} (level ${variantIndex_2 + 1})`,
                                                                        coords: {
                                                                            sx: sx_4,
                                                                            sy: sy_4,
                                                                            sw: tileWidth_4,
                                                                            sh: tileHeight_4
                                                                        }
                                                                    });
                                                                }
                                                            }["SpriteTestPanel[useEffect() > (anonymous)() > variants_2.forEach()]"]);
                                                        }
                                                    }["SpriteTestPanel[useEffect() > (anonymous)()]"]);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                const rows = Math.ceil(itemsToRender.length / 5);
                const canvasHeight = rows * 135.2 + 60;
                canvas.width = 700 * dpr;
                canvas.height = canvasHeight * dpr;
                canvas.style.width = "700px";
                canvas.style.height = `${canvasHeight}px`;
                ctx.scale(dpr, dpr);
                ctx.fillStyle = "#1a1a2e";
                ctx.fillRect(0, 0, 700, canvasHeight);
                itemsToRender.forEach({
                    "SpriteTestPanel[useEffect() > itemsToRender.forEach()]": (item, index_2)=>{
                        const col = index_2 % 5;
                        const row = Math.floor(index_2 / 5);
                        const baseX = 94 + col * 64 * 1.5;
                        const baseY = 68.4 + row * 135.2;
                        ctx.strokeStyle = "#3d3d5c";
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(baseX, baseY - 19.2);
                        ctx.lineTo(baseX + 32, baseY);
                        ctx.lineTo(baseX, baseY + 19.2);
                        ctx.lineTo(baseX - 32, baseY);
                        ctx.closePath();
                        ctx.stroke();
                        ctx.fillStyle = "#2a2a4a";
                        ctx.fill();
                        const aspectRatio = item.coords.sh / item.coords.sw;
                        const destHeight = 76.8 * aspectRatio;
                        const drawX = baseX - 38.4;
                        const drawY = baseY + 19.2 - destHeight + destHeight * 0.15;
                        ctx.drawImage(spriteSheet, item.coords.sx, item.coords.sy, item.coords.sw, item.coords.sh, Math.round(drawX), Math.round(drawY), Math.round(76.8), Math.round(destHeight));
                        ctx.fillStyle = "#888";
                        ctx.font = "10px monospace";
                        ctx.textAlign = "center";
                        const labelLines = item.label.split(" ");
                        labelLines.forEach({
                            "SpriteTestPanel[useEffect() > itemsToRender.forEach() > labelLines.forEach()]": (line, i)=>{
                                ctx.fillText(line, baseX, baseY + 38.4 + 16 + i * 10);
                            }
                        }["SpriteTestPanel[useEffect() > itemsToRender.forEach() > labelLines.forEach()]"]);
                        if (item.index !== undefined) {
                            ctx.fillStyle = "#666";
                            ctx.font = "8px monospace";
                            ctx.fillText(`[${item.index}]`, baseX, baseY + 38.4 + 26 + labelLines.length * 10);
                        }
                    }
                }["SpriteTestPanel[useEffect() > itemsToRender.forEach()]"]);
            }
        })["SpriteTestPanel[useEffect()]"];
        t25 = [
            spriteSheets,
            activeTab,
            currentSpritePack
        ];
        $[42] = activeTab;
        $[43] = currentSpritePack;
        $[44] = spriteSheets;
        $[45] = t24;
        $[46] = t25;
    } else {
        t24 = $[45];
        t25 = $[46];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t24, t25);
    const currentSheetInfo = activeTab === "main" ? currentSpritePack.src : activeTab === "construction" ? currentSpritePack.constructionSrc : activeTab === "abandoned" ? currentSpritePack.abandonedSrc : activeTab === "dense" ? currentSpritePack.denseSrc : activeTab === "modern" ? currentSpritePack.modernSrc : activeTab === "parksConstruction" ? currentSpritePack.parksConstructionSrc : activeTab === "services" ? currentSpritePack.servicesSrc : activeTab === "infrastructure" ? currentSpritePack.infrastructureSrc : currentSpritePack.parksSrc;
    const gridInfo = (activeTab === "parks" || activeTab === "parksConstruction") && currentSpritePack.parksCols && currentSpritePack.parksRows ? `${currentSpritePack.parksCols}x${currentSpritePack.parksRows}` : activeTab === "services" && currentSpritePack.servicesCols && currentSpritePack.servicesRows ? `${currentSpritePack.servicesCols}x${currentSpritePack.servicesRows}` : activeTab === "infrastructure" && currentSpritePack.infrastructureCols && currentSpritePack.infrastructureRows ? `${currentSpritePack.infrastructureCols}x${currentSpritePack.infrastructureRows}` : `${currentSpritePack.cols}x${currentSpritePack.rows}`;
    let t26;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
            children: "Sprite Test View"
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SpriteTestPanel.tsx",
            lineNumber: 557,
            columnNumber: 11
        }, this);
        $[47] = t26;
    } else {
        t26 = $[47];
    }
    let t27;
    if ($[48] !== currentSpritePack.name) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                    children: [
                        'View all sprite variants from "',
                        currentSpritePack.name,
                        '"'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/panels/SpriteTestPanel.tsx",
                    lineNumber: 564,
                    columnNumber: 30
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SpriteTestPanel.tsx",
            lineNumber: 564,
            columnNumber: 11
        }, this);
        $[48] = currentSpritePack.name;
        $[49] = t27;
    } else {
        t27 = $[49];
    }
    let t28;
    if ($[50] !== availableTabs) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
            className: "flex flex-wrap gap-1 w-full",
            children: availableTabs.map(_SpriteTestPanelAvailableTabsMap)
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SpriteTestPanel.tsx",
            lineNumber: 572,
            columnNumber: 11
        }, this);
        $[50] = availableTabs;
        $[51] = t28;
    } else {
        t28 = $[51];
    }
    let t29;
    if ($[52] !== activeTab || $[53] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
            value: activeTab,
            onValueChange: setSelectedTab,
            className: "w-full",
            children: t28
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SpriteTestPanel.tsx",
            lineNumber: 580,
            columnNumber: 11
        }, this);
        $[52] = activeTab;
        $[53] = t28;
        $[54] = t29;
    } else {
        t29 = $[54];
    }
    let t30;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-auto max-h-[70vh] bg-[#1a1a2e] rounded-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "mx-auto",
                style: {
                    imageRendering: "pixelated"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/game/panels/SpriteTestPanel.tsx",
                lineNumber: 589,
                columnNumber: 79
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SpriteTestPanel.tsx",
            lineNumber: 589,
            columnNumber: 11
        }, this);
        $[55] = t30;
    } else {
        t30 = $[55];
    }
    let t31;
    if ($[56] !== currentSheetInfo || $[57] !== gridInfo) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                "Sprite sheet: ",
                currentSheetInfo,
                " (",
                gridInfo,
                " grid)"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SpriteTestPanel.tsx",
            lineNumber: 598,
            columnNumber: 11
        }, this);
        $[56] = currentSheetInfo;
        $[57] = gridInfo;
        $[58] = t31;
    } else {
        t31 = $[58];
    }
    let t32;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                "Edit offsets in ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    className: "px-1 rounded bg-muted",
                    children: "src/lib/renderConfig.ts"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/panels/SpriteTestPanel.tsx",
                    lineNumber: 607,
                    columnNumber: 30
                }, this),
                " → each sprite pack's verticalOffsets"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SpriteTestPanel.tsx",
            lineNumber: 607,
            columnNumber: 11
        }, this);
        $[59] = t32;
    } else {
        t32 = $[59];
    }
    let t33;
    if ($[60] !== t31) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1 text-xs text-muted-foreground",
            children: [
                t31,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SpriteTestPanel.tsx",
            lineNumber: 614,
            columnNumber: 11
        }, this);
        $[60] = t31;
        $[61] = t33;
    } else {
        t33 = $[61];
    }
    let t34;
    if ($[62] !== t27 || $[63] !== t29 || $[64] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-[900px] max-h-[90vh]",
            children: [
                t27,
                t29,
                t30,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SpriteTestPanel.tsx",
            lineNumber: 622,
            columnNumber: 11
        }, this);
        $[62] = t27;
        $[63] = t29;
        $[64] = t33;
        $[65] = t34;
    } else {
        t34 = $[65];
    }
    let t35;
    if ($[66] !== onClose || $[67] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: true,
            onOpenChange: onClose,
            children: t34
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SpriteTestPanel.tsx",
            lineNumber: 632,
            columnNumber: 11
        }, this);
        $[66] = onClose;
        $[67] = t34;
        $[68] = t35;
    } else {
        t35 = $[68];
    }
    return t35;
}
_s(SpriteTestPanel, "k49fwter1/ubgrBCai7/US8HeAU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"]
    ];
});
_c = SpriteTestPanel;
function _SpriteTestPanelAvailableTabsMap(tab_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
        value: tab_0.id,
        className: "flex-shrink-0 text-xs",
        children: tab_0.label
    }, tab_0.id, false, {
        fileName: "[project]/src/components/game/panels/SpriteTestPanel.tsx",
        lineNumber: 642,
        columnNumber: 10
    }, this);
}
function _SpriteTestPanelAnonymous(tab) {
    return tab.available;
}
var _c;
__turbopack_context__.k.register(_c, "SpriteTestPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/game/panels/SettingsPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsPanel",
    ()=>SettingsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gt-next/dist/index.client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/GameContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$SpriteTestPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/panels/SpriteTestPanel.tsx [app-client] (ecmascript)");
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
// Translatable UI labels
const UI_LABELS = {
    settings: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Settings'),
    gameSettings: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Game Settings'),
    disasters: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Disasters'),
    disastersDesc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Enable random fires and disasters'),
    spritePack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Sprite Pack'),
    spritePackDesc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Choose building artwork style'),
    language: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Language'),
    languageDesc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Choose your preferred language'),
    cityInformation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('City Information'),
    cityName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('City Name'),
    gridSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Grid Size'),
    autoSave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Auto-Save'),
    enabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Enabled'),
    expandCity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Expand City (+30x30)'),
    expandCityDesc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Add 15 tiles on each side. Land edges extend as land, water edges extend as water.'),
    shrinkCity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Shrink City (-30x30)'),
    shrinkCityDesc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Remove 15 tiles from each edge. Buildings on edges will be deleted.'),
    savedCities: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Saved Cities'),
    savedCitiesDesc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Save multiple cities and switch between them'),
    citySaved: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('City Saved!'),
    save: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Save'),
    newCityName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('New city name...'),
    cancel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Cancel'),
    deleteThisCity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Delete this city?'),
    delete: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Delete'),
    current: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('(current)'),
    pop: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Pop'),
    saved: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Saved'),
    load: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Load'),
    rename: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Rename'),
    noSavedCities: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('No saved cities yet.'),
    restore: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Restore'),
    citySavedBeforeViewing: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Your city was saved before viewing a shared city'),
    startNewGame: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Start New Game'),
    confirmReset: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Are you sure? This will reset all progress.'),
    reset: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Reset'),
    exportGame: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Export Game'),
    exportGameDesc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Copy your game state to share or backup'),
    copied: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Copied!'),
    copyGameState: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Copy Game State'),
    importGame: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Import Game'),
    importGameDesc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Paste a game state to load it'),
    pasteGameState: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Paste game state here...'),
    invalidGameState: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Invalid game state. Please check and try again.'),
    gameLoadedSuccess: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Game loaded successfully!'),
    loadGameState: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Load Game State'),
    developerTools: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Developer Tools'),
    openSpriteTestView: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Open Sprite Test View'),
    loadExampleState: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Load Example State'),
    dayNightMode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Day/Night Mode'),
    dayNightModeDesc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Override the time-of-day appearance without affecting time progression'),
    auto: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Auto'),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Day'),
    night: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Night'),
    cannotShrink: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Cannot shrink city further - minimum size reached.')
};
// Format a date for display
function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}
// Format population for display
function formatPopulation(pop) {
    if (pop >= 1000000) return `${(pop / 1000000).toFixed(1)}M`;
    if (pop >= 1000) return `${(pop / 1000).toFixed(1)}K`;
    return pop.toString();
}
// Helper function to load example state with proper error handling
async function loadExampleState(filename, loadState, setActivePanel) {
    try {
        const response = await fetch(`/example-states/${filename}`);
        if (!response.ok) {
            console.error(`Failed to fetch ${filename}:`, response.status);
            alert(`Failed to load example state: ${response.status}`);
            return;
        }
        const exampleState = await response.json();
        const success = loadState(JSON.stringify(exampleState));
        if (success) {
            setActivePanel('none');
        } else {
            console.error('loadState returned false - invalid state format for', filename);
            alert('Failed to load example state: invalid format');
        }
    } catch (e) {
        console.error('Error loading example state:', e);
        alert(`Error loading example state: ${e}`);
    }
}
// Format money for display
function formatMoney(money) {
    if (money >= 1000000) return `$${(money / 1000000).toFixed(1)}M`;
    if (money >= 1000) return `$${(money / 1000).toFixed(1)}K`;
    return `$${money}`;
}
function SettingsPanel() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(352);
    if ($[0] !== "f1a1cbc166bdebd03b58460f394ca3f01800aec5d08fd826cc245500de0dd755") {
        for(let $i = 0; $i < 352; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f1a1cbc166bdebd03b58460f394ca3f01800aec5d08fd826cc245500de0dd755";
    }
    const { state, setActivePanel, setDisastersEnabled, newGame, loadState, exportState, expandCity, shrinkCity, currentSpritePack, availableSpritePacks, setSpritePack, dayNightMode, setDayNightMode, getSavedCityInfo, restoreSavedCity, savedCities, saveCity, loadSavedCity, deleteSavedCity, renameSavedCity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"])();
    const { disastersEnabled, cityName, gridSize, id: currentCityId } = state;
    const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [newCityName, setNewCityName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(cityName);
    const [showNewGameConfirm, setShowNewGameConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saveCitySuccess, setSaveCitySuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cityToDelete, setCityToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cityToRename, setCityToRename] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [renameValue, setRenameValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [importValue, setImportValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [exportCopied, setExportCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [importError, setImportError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [importSuccess, setImportSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] !== getSavedCityInfo) {
        t0 = getSavedCityInfo();
        $[1] = getSavedCityInfo;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const [savedCityInfo, setSavedCityInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[3] !== getSavedCityInfo) {
        t1 = ({
            "SettingsPanel[useEffect()]": ()=>{
                setSavedCityInfo(getSavedCityInfo());
            }
        })["SettingsPanel[useEffect()]"];
        t2 = [
            getSavedCityInfo
        ];
        $[3] = getSavedCityInfo;
        $[4] = t1;
        $[5] = t2;
    } else {
        t1 = $[4];
        t2 = $[5];
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect(t1, t2);
    let t3;
    if ($[6] !== searchParams) {
        t3 = searchParams?.get("spriteTest");
        $[6] = searchParams;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const spriteTestFromUrl = t3 === "true";
    const [showSpriteTest, setShowSpriteTest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(spriteTestFromUrl);
    const lastUrlValueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(spriteTestFromUrl);
    const isUpdatingFromStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    let t4;
    let t5;
    if ($[8] !== searchParams) {
        t4 = ({
            "SettingsPanel[useEffect()]": ()=>{
                const spriteTestParam = searchParams?.get("spriteTest") === "true";
                if (spriteTestParam !== lastUrlValueRef.current && !isUpdatingFromStateRef.current) {
                    lastUrlValueRef.current = spriteTestParam;
                    setTimeout({
                        "SettingsPanel[useEffect() > setTimeout()]": ()=>setShowSpriteTest(spriteTestParam)
                    }["SettingsPanel[useEffect() > setTimeout()]"], 0);
                }
            }
        })["SettingsPanel[useEffect()]"];
        t5 = [
            searchParams
        ];
        $[8] = searchParams;
        $[9] = t4;
        $[10] = t5;
    } else {
        t4 = $[9];
        t5 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    let t7;
    if ($[11] !== router || $[12] !== searchParams || $[13] !== showSpriteTest) {
        t6 = ({
            "SettingsPanel[useEffect()]": ()=>{
                const currentParam = searchParams?.get("spriteTest") === "true";
                if (currentParam === showSpriteTest) {
                    return;
                }
                isUpdatingFromStateRef.current = true;
                lastUrlValueRef.current = showSpriteTest;
                const params = new URLSearchParams(searchParams?.toString() || "");
                if (showSpriteTest) {
                    params.set("spriteTest", "true");
                } else {
                    params.delete("spriteTest");
                }
                const newUrl = params.toString() ? `?${params.toString()}` : window.location.pathname;
                router.replace(newUrl, {
                    scroll: false
                });
                setTimeout({
                    "SettingsPanel[useEffect() > setTimeout()]": ()=>{
                        isUpdatingFromStateRef.current = false;
                    }
                }["SettingsPanel[useEffect() > setTimeout()]"], 0);
            }
        })["SettingsPanel[useEffect()]"];
        t7 = [
            showSpriteTest,
            searchParams,
            router
        ];
        $[11] = router;
        $[12] = searchParams;
        $[13] = showSpriteTest;
        $[14] = t6;
        $[15] = t7;
    } else {
        t6 = $[14];
        t7 = $[15];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    if ($[16] !== exportState) {
        t8 = ({
            "SettingsPanel[handleCopyExport]": async ()=>{
                const exported = exportState();
                await navigator.clipboard.writeText(exported);
                setExportCopied(true);
                setTimeout({
                    "SettingsPanel[handleCopyExport > setTimeout()]": ()=>setExportCopied(false)
                }["SettingsPanel[handleCopyExport > setTimeout()]"], 2000);
            }
        })["SettingsPanel[handleCopyExport]"];
        $[16] = exportState;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    const handleCopyExport = t8;
    let t9;
    if ($[18] !== importValue || $[19] !== loadState) {
        t9 = ({
            "SettingsPanel[handleImport]": ()=>{
                setImportError(false);
                setImportSuccess(false);
                if (importValue.trim()) {
                    const success = loadState(importValue.trim());
                    if (success) {
                        setImportSuccess(true);
                        setImportValue("");
                        setTimeout({
                            "SettingsPanel[handleImport > setTimeout()]": ()=>setImportSuccess(false)
                        }["SettingsPanel[handleImport > setTimeout()]"], 2000);
                    } else {
                        setImportError(true);
                    }
                }
            }
        })["SettingsPanel[handleImport]"];
        $[18] = importValue;
        $[19] = loadState;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    const handleImport = t9;
    let t10;
    if ($[21] !== setActivePanel) {
        t10 = ({
            "SettingsPanel[<Dialog>.onOpenChange]": ()=>setActivePanel("none")
        })["SettingsPanel[<Dialog>.onOpenChange]"];
        $[21] = setActivePanel;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== m) {
        t11 = m(UI_LABELS.settings);
        $[23] = m;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                children: t11
            }, void 0, false, {
                fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                lineNumber: 340,
                columnNumber: 25
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 340,
            columnNumber: 11
        }, this);
        $[25] = t11;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== m) {
        t13 = m(UI_LABELS.gameSettings);
        $[27] = m;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-[10px] text-muted-foreground uppercase tracking-wider mb-3",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 356,
            columnNumber: 11
        }, this);
        $[29] = t13;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] !== m) {
        t15 = m(UI_LABELS.disasters);
        $[31] = m;
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    let t16;
    if ($[33] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 372,
            columnNumber: 11
        }, this);
        $[33] = t15;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    let t17;
    if ($[35] !== m) {
        t17 = m(UI_LABELS.disastersDesc);
        $[35] = m;
        $[36] = t17;
    } else {
        t17 = $[36];
    }
    let t18;
    if ($[37] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted-foreground text-xs",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 388,
            columnNumber: 11
        }, this);
        $[37] = t17;
        $[38] = t18;
    } else {
        t18 = $[38];
    }
    let t19;
    if ($[39] !== t16 || $[40] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 min-w-0",
            children: [
                t16,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 396,
            columnNumber: 11
        }, this);
        $[39] = t16;
        $[40] = t18;
        $[41] = t19;
    } else {
        t19 = $[41];
    }
    let t20;
    if ($[42] !== disastersEnabled || $[43] !== setDisastersEnabled) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
            checked: disastersEnabled,
            onCheckedChange: setDisastersEnabled
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 405,
            columnNumber: 11
        }, this);
        $[42] = disastersEnabled;
        $[43] = setDisastersEnabled;
        $[44] = t20;
    } else {
        t20 = $[44];
    }
    let t21;
    if ($[45] !== t19 || $[46] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between py-2 gap-4",
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 414,
            columnNumber: 11
        }, this);
        $[45] = t19;
        $[46] = t20;
        $[47] = t21;
    } else {
        t21 = $[47];
    }
    let t22;
    if ($[48] !== m) {
        t22 = m(UI_LABELS.spritePack);
        $[48] = m;
        $[49] = t22;
    } else {
        t22 = $[49];
    }
    let t23;
    if ($[50] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 431,
            columnNumber: 11
        }, this);
        $[50] = t22;
        $[51] = t23;
    } else {
        t23 = $[51];
    }
    let t24;
    if ($[52] !== m) {
        t24 = m(UI_LABELS.spritePackDesc);
        $[52] = m;
        $[53] = t24;
    } else {
        t24 = $[53];
    }
    let t25;
    if ($[54] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted-foreground text-xs mb-2",
            children: t24
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 447,
            columnNumber: 11
        }, this);
        $[54] = t24;
        $[55] = t25;
    } else {
        t25 = $[55];
    }
    let t26;
    if ($[56] !== availableSpritePacks || $[57] !== currentSpritePack || $[58] !== setSpritePack) {
        let t27;
        if ($[60] !== currentSpritePack || $[61] !== setSpritePack) {
            t27 = ({
                "SettingsPanel[availableSpritePacks.map()]": (pack)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "SettingsPanel[availableSpritePacks.map() > <button>.onClick]": ()=>setSpritePack(pack.id)
                        }["SettingsPanel[availableSpritePacks.map() > <button>.onClick]"],
                        className: `flex items-center gap-3 p-2 rounded-md border transition-colors text-left ${currentSpritePack.id === pack.id ? "border-primary bg-primary/10 text-foreground" : "border-border hover:border-muted-foreground/50 text-muted-foreground hover:text-foreground"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded overflow-hidden bg-muted flex-shrink-0 relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: pack.src,
                                    alt: pack.name,
                                    fill: true,
                                    className: "object-cover object-top",
                                    style: {
                                        imageRendering: "pixelated"
                                    },
                                    unoptimized: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                                    lineNumber: 460,
                                    columnNumber: 427
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                                lineNumber: 460,
                                columnNumber: 344
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-medium text-sm truncate",
                                        children: pack.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                                        lineNumber: 462,
                                        columnNumber: 75
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-muted-foreground truncate",
                                        children: pack.src
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                                        lineNumber: 462,
                                        columnNumber: 138
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                                lineNumber: 462,
                                columnNumber: 43
                            }, this),
                            currentSpritePack.id === pack.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 rounded-full bg-primary flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                                lineNumber: 462,
                                columnNumber: 253
                            }, this)
                        ]
                    }, pack.id, true, {
                        fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                        lineNumber: 458,
                        columnNumber: 62
                    }, this)
            })["SettingsPanel[availableSpritePacks.map()]"];
            $[60] = currentSpritePack;
            $[61] = setSpritePack;
            $[62] = t27;
        } else {
            t27 = $[62];
        }
        t26 = availableSpritePacks.map(t27);
        $[56] = availableSpritePacks;
        $[57] = currentSpritePack;
        $[58] = setSpritePack;
        $[59] = t26;
    } else {
        t26 = $[59];
    }
    let t27;
    if ($[63] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 gap-2",
            children: t26
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 480,
            columnNumber: 11
        }, this);
        $[63] = t26;
        $[64] = t27;
    } else {
        t27 = $[64];
    }
    let t28;
    if ($[65] !== t23 || $[66] !== t25 || $[67] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-2",
            children: [
                t23,
                t25,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 488,
            columnNumber: 11
        }, this);
        $[65] = t23;
        $[66] = t25;
        $[67] = t27;
        $[68] = t28;
    } else {
        t28 = $[68];
    }
    let t29;
    if ($[69] !== m) {
        t29 = m(UI_LABELS.language);
        $[69] = m;
        $[70] = t29;
    } else {
        t29 = $[70];
    }
    let t30;
    if ($[71] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            children: t29
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 506,
            columnNumber: 11
        }, this);
        $[71] = t29;
        $[72] = t30;
    } else {
        t30 = $[72];
    }
    let t31;
    if ($[73] !== m) {
        t31 = m(UI_LABELS.languageDesc);
        $[73] = m;
        $[74] = t31;
    } else {
        t31 = $[74];
    }
    let t32;
    if ($[75] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted-foreground text-xs mb-2",
            children: t31
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 522,
            columnNumber: 11
        }, this);
        $[75] = t31;
        $[76] = t32;
    } else {
        t32 = $[76];
    }
    let t33;
    if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocaleSelector"], {}, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 530,
            columnNumber: 11
        }, this);
        $[77] = t33;
    } else {
        t33 = $[77];
    }
    let t34;
    if ($[78] !== t30 || $[79] !== t32) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-2",
            children: [
                t30,
                t32,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 537,
            columnNumber: 11
        }, this);
        $[78] = t30;
        $[79] = t32;
        $[80] = t34;
    } else {
        t34 = $[80];
    }
    let t35;
    if ($[81] !== t14 || $[82] !== t21 || $[83] !== t28 || $[84] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t14,
                t21,
                t28,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 546,
            columnNumber: 11
        }, this);
        $[81] = t14;
        $[82] = t21;
        $[83] = t28;
        $[84] = t34;
        $[85] = t35;
    } else {
        t35 = $[85];
    }
    let t36;
    if ($[86] !== m) {
        t36 = m(UI_LABELS.cityInformation);
        $[86] = m;
        $[87] = t36;
    } else {
        t36 = $[87];
    }
    let t37;
    if ($[88] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-[10px] text-muted-foreground uppercase tracking-wider mb-3",
            children: t36
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 565,
            columnNumber: 11
        }, this);
        $[88] = t36;
        $[89] = t37;
    } else {
        t37 = $[89];
    }
    let t38;
    if ($[90] !== m) {
        t38 = m(UI_LABELS.cityName);
        $[90] = m;
        $[91] = t38;
    } else {
        t38 = $[91];
    }
    let t39;
    if ($[92] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t38
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 581,
            columnNumber: 11
        }, this);
        $[92] = t38;
        $[93] = t39;
    } else {
        t39 = $[93];
    }
    let t40;
    if ($[94] !== cityName) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-foreground",
            children: cityName
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 589,
            columnNumber: 11
        }, this);
        $[94] = cityName;
        $[95] = t40;
    } else {
        t40 = $[95];
    }
    let t41;
    if ($[96] !== t39 || $[97] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-muted-foreground",
            children: [
                t39,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 597,
            columnNumber: 11
        }, this);
        $[96] = t39;
        $[97] = t40;
        $[98] = t41;
    } else {
        t41 = $[98];
    }
    let t42;
    if ($[99] !== m) {
        t42 = m(UI_LABELS.gridSize);
        $[99] = m;
        $[100] = t42;
    } else {
        t42 = $[100];
    }
    let t43;
    if ($[101] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t42
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 614,
            columnNumber: 11
        }, this);
        $[101] = t42;
        $[102] = t43;
    } else {
        t43 = $[102];
    }
    let t44;
    if ($[103] !== gridSize) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-foreground",
            children: [
                gridSize,
                " x ",
                gridSize
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 622,
            columnNumber: 11
        }, this);
        $[103] = gridSize;
        $[104] = t44;
    } else {
        t44 = $[104];
    }
    let t45;
    if ($[105] !== t43 || $[106] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-muted-foreground",
            children: [
                t43,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 630,
            columnNumber: 11
        }, this);
        $[105] = t43;
        $[106] = t44;
        $[107] = t45;
    } else {
        t45 = $[107];
    }
    let t46;
    if ($[108] !== m) {
        t46 = m(UI_LABELS.autoSave);
        $[108] = m;
        $[109] = t46;
    } else {
        t46 = $[109];
    }
    let t47;
    if ($[110] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t46
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 647,
            columnNumber: 11
        }, this);
        $[110] = t46;
        $[111] = t47;
    } else {
        t47 = $[111];
    }
    let t48;
    if ($[112] !== m) {
        t48 = m(UI_LABELS.enabled);
        $[112] = m;
        $[113] = t48;
    } else {
        t48 = $[113];
    }
    let t49;
    if ($[114] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-green-400",
            children: t48
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 663,
            columnNumber: 11
        }, this);
        $[114] = t48;
        $[115] = t49;
    } else {
        t49 = $[115];
    }
    let t50;
    if ($[116] !== t47 || $[117] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-muted-foreground",
            children: [
                t47,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 671,
            columnNumber: 11
        }, this);
        $[116] = t47;
        $[117] = t49;
        $[118] = t50;
    } else {
        t50 = $[118];
    }
    let t51;
    if ($[119] !== t41 || $[120] !== t45 || $[121] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2 text-sm",
            children: [
                t41,
                t45,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 680,
            columnNumber: 11
        }, this);
        $[119] = t41;
        $[120] = t45;
        $[121] = t50;
        $[122] = t51;
    } else {
        t51 = $[122];
    }
    let t52;
    if ($[123] !== expandCity) {
        t52 = ({
            "SettingsPanel[<Button>.onClick]": ()=>{
                expandCity();
            }
        })["SettingsPanel[<Button>.onClick]"];
        $[123] = expandCity;
        $[124] = t52;
    } else {
        t52 = $[124];
    }
    let t53;
    if ($[125] !== m) {
        t53 = m(UI_LABELS.expandCity);
        $[125] = m;
        $[126] = t53;
    } else {
        t53 = $[126];
    }
    let t54;
    if ($[127] !== t52 || $[128] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            className: "w-full",
            onClick: t52,
            children: t53
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 710,
            columnNumber: 11
        }, this);
        $[127] = t52;
        $[128] = t53;
        $[129] = t54;
    } else {
        t54 = $[129];
    }
    let t55;
    if ($[130] !== m) {
        t55 = m(UI_LABELS.expandCityDesc);
        $[130] = m;
        $[131] = t55;
    } else {
        t55 = $[131];
    }
    let t56;
    if ($[132] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted-foreground text-xs mt-1 text-center",
            children: t55
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 727,
            columnNumber: 11
        }, this);
        $[132] = t55;
        $[133] = t56;
    } else {
        t56 = $[133];
    }
    let t57;
    if ($[134] !== t54 || $[135] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t54,
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 735,
            columnNumber: 11
        }, this);
        $[134] = t54;
        $[135] = t56;
        $[136] = t57;
    } else {
        t57 = $[136];
    }
    let t58;
    if ($[137] !== m || $[138] !== shrinkCity) {
        t58 = ({
            "SettingsPanel[<Button>.onClick]": ()=>{
                const success_0 = shrinkCity();
                if (!success_0) {
                    alert(String(m(UI_LABELS.cannotShrink)));
                }
            }
        })["SettingsPanel[<Button>.onClick]"];
        $[137] = m;
        $[138] = shrinkCity;
        $[139] = t58;
    } else {
        t58 = $[139];
    }
    const t59 = gridSize <= 50;
    let t60;
    if ($[140] !== m) {
        t60 = m(UI_LABELS.shrinkCity);
        $[140] = m;
        $[141] = t60;
    } else {
        t60 = $[141];
    }
    let t61;
    if ($[142] !== t58 || $[143] !== t59 || $[144] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            className: "w-full",
            onClick: t58,
            disabled: t59,
            children: t60
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 769,
            columnNumber: 11
        }, this);
        $[142] = t58;
        $[143] = t59;
        $[144] = t60;
        $[145] = t61;
    } else {
        t61 = $[145];
    }
    let t62;
    if ($[146] !== m) {
        t62 = m(UI_LABELS.shrinkCityDesc);
        $[146] = m;
        $[147] = t62;
    } else {
        t62 = $[147];
    }
    let t63;
    if ($[148] !== t62) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted-foreground text-xs mt-1 text-center",
            children: t62
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 787,
            columnNumber: 11
        }, this);
        $[148] = t62;
        $[149] = t63;
    } else {
        t63 = $[149];
    }
    let t64;
    if ($[150] !== t61 || $[151] !== t63) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t61,
                t63
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 795,
            columnNumber: 11
        }, this);
        $[150] = t61;
        $[151] = t63;
        $[152] = t64;
    } else {
        t64 = $[152];
    }
    let t65;
    if ($[153] !== t57 || $[154] !== t64) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 space-y-3",
            children: [
                t57,
                t64
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 804,
            columnNumber: 11
        }, this);
        $[153] = t57;
        $[154] = t64;
        $[155] = t65;
    } else {
        t65 = $[155];
    }
    let t66;
    if ($[156] !== t37 || $[157] !== t51 || $[158] !== t65) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t37,
                t51,
                t65
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 813,
            columnNumber: 11
        }, this);
        $[156] = t37;
        $[157] = t51;
        $[158] = t65;
        $[159] = t66;
    } else {
        t66 = $[159];
    }
    let t67;
    if ($[160] === Symbol.for("react.memo_cache_sentinel")) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 823,
            columnNumber: 11
        }, this);
        $[160] = t67;
    } else {
        t67 = $[160];
    }
    let t68;
    if ($[161] !== m) {
        t68 = m(UI_LABELS.savedCities);
        $[161] = m;
        $[162] = t68;
    } else {
        t68 = $[162];
    }
    let t69;
    if ($[163] !== t68) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-[10px] text-muted-foreground uppercase tracking-wider mb-3",
            children: t68
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 838,
            columnNumber: 11
        }, this);
        $[163] = t68;
        $[164] = t69;
    } else {
        t69 = $[164];
    }
    let t70;
    if ($[165] !== m) {
        t70 = m(UI_LABELS.savedCitiesDesc);
        $[165] = m;
        $[166] = t70;
    } else {
        t70 = $[166];
    }
    let t71;
    if ($[167] !== t70) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted-foreground text-xs mb-3",
            children: t70
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 854,
            columnNumber: 11
        }, this);
        $[167] = t70;
        $[168] = t71;
    } else {
        t71 = $[168];
    }
    let t72;
    if ($[169] !== saveCity) {
        t72 = ({
            "SettingsPanel[<Button>.onClick]": ()=>{
                saveCity();
                setSaveCitySuccess(true);
                setTimeout({
                    "SettingsPanel[<Button>.onClick > setTimeout()]": ()=>setSaveCitySuccess(false)
                }["SettingsPanel[<Button>.onClick > setTimeout()]"], 2000);
            }
        })["SettingsPanel[<Button>.onClick]"];
        $[169] = saveCity;
        $[170] = t72;
    } else {
        t72 = $[170];
    }
    let t73;
    if ($[171] !== cityName || $[172] !== m || $[173] !== saveCitySuccess) {
        t73 = saveCitySuccess ? `✓ ${m(UI_LABELS.citySaved)}` : `${m(UI_LABELS.save)} "${cityName}"`;
        $[171] = cityName;
        $[172] = m;
        $[173] = saveCitySuccess;
        $[174] = t73;
    } else {
        t73 = $[174];
    }
    let t74;
    if ($[175] !== t72 || $[176] !== t73) {
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "default",
            className: "w-full mb-3",
            onClick: t72,
            children: t73
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 888,
            columnNumber: 11
        }, this);
        $[175] = t72;
        $[176] = t73;
        $[177] = t74;
    } else {
        t74 = $[177];
    }
    let t75;
    if ($[178] !== cityToDelete?.id || $[179] !== cityToRename?.id || $[180] !== currentCityId || $[181] !== deleteSavedCity || $[182] !== loadSavedCity || $[183] !== m || $[184] !== renameSavedCity || $[185] !== renameValue || $[186] !== savedCities || $[187] !== setActivePanel) {
        t75 = savedCities.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2 max-h-[200px] overflow-y-auto overscroll-y-contain",
            style: {
                WebkitOverflowScrolling: "touch",
                touchAction: "pan-y"
            },
            children: savedCities.map({
                "SettingsPanel[savedCities.map()]": (city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-3 rounded-md border transition-colors ${city.id === currentCityId ? "border-primary bg-primary/10" : "border-border hover:border-muted-foreground/50"}`,
                        children: cityToRename?.id === city.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    value: renameValue,
                                    onChange: {
                                        "SettingsPanel[savedCities.map() > <Input>.onChange]": (e)=>setRenameValue(e.target.value)
                                    }["SettingsPanel[savedCities.map() > <Input>.onChange]"],
                                    placeholder: String(m(UI_LABELS.newCityName)),
                                    className: "h-8 text-sm",
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                                    lineNumber: 901,
                                    columnNumber: 298
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            className: "flex-1 h-7 text-xs",
                                            onClick: {
                                                "SettingsPanel[savedCities.map() > <Button>.onClick]": ()=>{
                                                    setCityToRename(null);
                                                    setRenameValue("");
                                                }
                                            }["SettingsPanel[savedCities.map() > <Button>.onClick]"],
                                            children: m(UI_LABELS.cancel)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                                            lineNumber: 903,
                                            columnNumber: 189
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "default",
                                            size: "sm",
                                            className: "flex-1 h-7 text-xs",
                                            onClick: {
                                                "SettingsPanel[savedCities.map() > <Button>.onClick]": ()=>{
                                                    if (renameValue.trim()) {
                                                        renameSavedCity(city.id, renameValue.trim());
                                                    }
                                                    setCityToRename(null);
                                                    setRenameValue("");
                                                }
                                            }["SettingsPanel[savedCities.map() > <Button>.onClick]"],
                                            children: m(UI_LABELS.save)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                                            lineNumber: 908,
                                            columnNumber: 103
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                                    lineNumber: 903,
                                    columnNumber: 161
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                            lineNumber: 901,
                            columnNumber: 271
                        }, this) : cityToDelete?.id === city.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground text-center",
                                    children: m(UI_LABELS.deleteThisCity)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                                    lineNumber: 916,
                                    columnNumber: 174
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            className: "flex-1 h-7 text-xs",
                                            onClick: {
                                                "SettingsPanel[savedCities.map() > <Button>.onClick]": ()=>setCityToDelete(null)
                                            }["SettingsPanel[savedCities.map() > <Button>.onClick]"],
                                            children: m(UI_LABELS.cancel)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                                            lineNumber: 916,
                                            columnNumber: 292
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "destructive",
                                            size: "sm",
                                            className: "flex-1 h-7 text-xs",
                                            onClick: {
                                                "SettingsPanel[savedCities.map() > <Button>.onClick]": ()=>{
                                                    deleteSavedCity(city.id);
                                                    setCityToDelete(null);
                                                }
                                            }["SettingsPanel[savedCities.map() > <Button>.onClick]"],
                                            children: m(UI_LABELS.delete)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                                            lineNumber: 918,
                                            columnNumber: 103
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                                    lineNumber: 916,
                                    columnNumber: 264
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                            lineNumber: 916,
                            columnNumber: 147
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between mb-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-medium text-sm truncate flex-1",
                                        children: [
                                            city.cityName,
                                            city.id === currentCityId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-[10px] text-primary",
                                                children: m(UI_LABELS.current)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                                                lineNumber: 923,
                                                columnNumber: 273
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                                        lineNumber: 923,
                                        columnNumber: 175
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                                    lineNumber: 923,
                                    columnNumber: 120
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 text-xs text-muted-foreground mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                m(UI_LABELS.pop),
                                                ": ",
                                                formatPopulation(city.population)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                                            lineNumber: 923,
                                            columnNumber: 439
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: formatMoney(city.money)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                                            lineNumber: 923,
                                            columnNumber: 507
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                city.gridSize,
                                                "×",
                                                city.gridSize
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                                            lineNumber: 923,
                                            columnNumber: 545
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                                    lineNumber: 923,
                                    columnNumber: 363
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[10px] text-muted-foreground mb-2",
                                    children: [
                                        m(UI_LABELS.saved),
                                        " ",
                                        formatDate(city.savedAt)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                                    lineNumber: 923,
                                    columnNumber: 595
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        city.id !== currentCityId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "default",
                                            size: "sm",
                                            className: "flex-1 h-7 text-xs",
                                            onClick: {
                                                "SettingsPanel[savedCities.map() > <Button>.onClick]": ()=>{
                                                    loadSavedCity(city.id);
                                                    setActivePanel("none");
                                                }
                                            }["SettingsPanel[savedCities.map() > <Button>.onClick]"],
                                            children: m(UI_LABELS.load)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                                            lineNumber: 923,
                                            columnNumber: 762
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            className: "flex-1 h-7 text-xs",
                                            onClick: {
                                                "SettingsPanel[savedCities.map() > <Button>.onClick]": ()=>{
                                                    setCityToRename(city);
                                                    setRenameValue(city.cityName);
                                                }
                                            }["SettingsPanel[savedCities.map() > <Button>.onClick]"],
                                            children: m(UI_LABELS.rename)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                                            lineNumber: 928,
                                            columnNumber: 102
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            className: "flex-1 h-7 text-xs hover:bg-destructive hover:text-destructive-foreground",
                                            onClick: {
                                                "SettingsPanel[savedCities.map() > <Button>.onClick]": ()=>setCityToDelete(city)
                                            }["SettingsPanel[savedCities.map() > <Button>.onClick]"],
                                            children: m(UI_LABELS.delete)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                                            lineNumber: 933,
                                            columnNumber: 103
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                                    lineNumber: 923,
                                    columnNumber: 704
                                }, this)
                            ]
                        }, void 0, true)
                    }, city.id, false, {
                        fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                        lineNumber: 901,
                        columnNumber: 53
                    }, this)
            }["SettingsPanel[savedCities.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 897,
            columnNumber: 36
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted-foreground text-xs text-center py-3 border border-dashed rounded-md",
            children: m(UI_LABELS.noSavedCities)
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 936,
            columnNumber: 55
        }, this);
        $[178] = cityToDelete?.id;
        $[179] = cityToRename?.id;
        $[180] = currentCityId;
        $[181] = deleteSavedCity;
        $[182] = loadSavedCity;
        $[183] = m;
        $[184] = renameSavedCity;
        $[185] = renameValue;
        $[186] = savedCities;
        $[187] = setActivePanel;
        $[188] = t75;
    } else {
        t75 = $[188];
    }
    let t76;
    if ($[189] !== t69 || $[190] !== t71 || $[191] !== t74 || $[192] !== t75) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t69,
                t71,
                t74,
                t75
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 953,
            columnNumber: 11
        }, this);
        $[189] = t69;
        $[190] = t71;
        $[191] = t74;
        $[192] = t75;
        $[193] = t76;
    } else {
        t76 = $[193];
    }
    let t77;
    if ($[194] !== m || $[195] !== restoreSavedCity || $[196] !== savedCityInfo || $[197] !== setActivePanel) {
        t77 = savedCityInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "default",
                    className: "w-full",
                    onClick: {
                        "SettingsPanel[<Button>.onClick]": ()=>{
                            restoreSavedCity();
                            setSavedCityInfo(null);
                            setActivePanel("none");
                        }
                    }["SettingsPanel[<Button>.onClick]"],
                    children: [
                        m(UI_LABELS.restore),
                        " ",
                        savedCityInfo.cityName
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                    lineNumber: 964,
                    columnNumber: 55
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground text-xs text-center",
                    children: m(UI_LABELS.citySavedBeforeViewing)
                }, void 0, false, {
                    fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                    lineNumber: 970,
                    columnNumber: 101
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                    fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                    lineNumber: 970,
                    columnNumber: 199
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 964,
            columnNumber: 28
        }, this);
        $[194] = m;
        $[195] = restoreSavedCity;
        $[196] = savedCityInfo;
        $[197] = setActivePanel;
        $[198] = t77;
    } else {
        t77 = $[198];
    }
    let t78;
    if ($[199] !== gridSize || $[200] !== m || $[201] !== newCityName || $[202] !== newGame || $[203] !== setActivePanel || $[204] !== showNewGameConfirm) {
        t78 = !showNewGameConfirm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "destructive",
            className: "w-full",
            onClick: {
                "SettingsPanel[<Button>.onClick]": ()=>setShowNewGameConfirm(true)
            }["SettingsPanel[<Button>.onClick]"],
            children: m(UI_LABELS.startNewGame)
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 981,
            columnNumber: 33
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground text-sm text-center",
                    children: m(UI_LABELS.confirmReset)
                }, void 0, false, {
                    fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                    lineNumber: 983,
                    columnNumber: 109
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    value: newCityName,
                    onChange: {
                        "SettingsPanel[<Input>.onChange]": (e_0)=>setNewCityName(e_0.target.value)
                    }["SettingsPanel[<Input>.onChange]"],
                    placeholder: String(m(UI_LABELS.newCityName))
                }, void 0, false, {
                    fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                    lineNumber: 983,
                    columnNumber: 197
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            className: "flex-1",
                            onClick: {
                                "SettingsPanel[<Button>.onClick]": ()=>setShowNewGameConfirm(false)
                            }["SettingsPanel[<Button>.onClick]"],
                            children: m(UI_LABELS.cancel)
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                            lineNumber: 985,
                            columnNumber: 122
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "destructive",
                            className: "flex-1",
                            onClick: {
                                "SettingsPanel[<Button>.onClick]": ()=>{
                                    newGame(newCityName || "New City", gridSize);
                                    setActivePanel("none");
                                }
                            }["SettingsPanel[<Button>.onClick]"],
                            children: m(UI_LABELS.reset)
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                            lineNumber: 987,
                            columnNumber: 77
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                    lineNumber: 985,
                    columnNumber: 94
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 983,
            columnNumber: 82
        }, this);
        $[199] = gridSize;
        $[200] = m;
        $[201] = newCityName;
        $[202] = newGame;
        $[203] = setActivePanel;
        $[204] = showNewGameConfirm;
        $[205] = t78;
    } else {
        t78 = $[205];
    }
    let t79;
    if ($[206] === Symbol.for("react.memo_cache_sentinel")) {
        t79 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1005,
            columnNumber: 11
        }, this);
        $[206] = t79;
    } else {
        t79 = $[206];
    }
    let t80;
    if ($[207] !== m) {
        t80 = m(UI_LABELS.exportGame);
        $[207] = m;
        $[208] = t80;
    } else {
        t80 = $[208];
    }
    let t81;
    if ($[209] !== t80) {
        t81 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-[10px] text-muted-foreground uppercase tracking-wider mb-3",
            children: t80
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1020,
            columnNumber: 11
        }, this);
        $[209] = t80;
        $[210] = t81;
    } else {
        t81 = $[210];
    }
    let t82;
    if ($[211] !== m) {
        t82 = m(UI_LABELS.exportGameDesc);
        $[211] = m;
        $[212] = t82;
    } else {
        t82 = $[212];
    }
    let t83;
    if ($[213] !== t82) {
        t83 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted-foreground text-xs mb-2",
            children: t82
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1036,
            columnNumber: 11
        }, this);
        $[213] = t82;
        $[214] = t83;
    } else {
        t83 = $[214];
    }
    let t84;
    if ($[215] !== exportCopied || $[216] !== m) {
        t84 = exportCopied ? `✓ ${m(UI_LABELS.copied)}` : m(UI_LABELS.copyGameState);
        $[215] = exportCopied;
        $[216] = m;
        $[217] = t84;
    } else {
        t84 = $[217];
    }
    let t85;
    if ($[218] !== handleCopyExport || $[219] !== t84) {
        t85 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            className: "w-full",
            onClick: handleCopyExport,
            children: t84
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1053,
            columnNumber: 11
        }, this);
        $[218] = handleCopyExport;
        $[219] = t84;
        $[220] = t85;
    } else {
        t85 = $[220];
    }
    let t86;
    if ($[221] !== t81 || $[222] !== t83 || $[223] !== t85) {
        t86 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t81,
                t83,
                t85
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1062,
            columnNumber: 11
        }, this);
        $[221] = t81;
        $[222] = t83;
        $[223] = t85;
        $[224] = t86;
    } else {
        t86 = $[224];
    }
    let t87;
    if ($[225] !== m) {
        t87 = m(UI_LABELS.importGame);
        $[225] = m;
        $[226] = t87;
    } else {
        t87 = $[226];
    }
    let t88;
    if ($[227] !== t87) {
        t88 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-[10px] text-muted-foreground uppercase tracking-wider mb-3",
            children: t87
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1080,
            columnNumber: 11
        }, this);
        $[227] = t87;
        $[228] = t88;
    } else {
        t88 = $[228];
    }
    let t89;
    if ($[229] !== m) {
        t89 = m(UI_LABELS.importGameDesc);
        $[229] = m;
        $[230] = t89;
    } else {
        t89 = $[230];
    }
    let t90;
    if ($[231] !== t89) {
        t90 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted-foreground text-xs mb-2",
            children: t89
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1096,
            columnNumber: 11
        }, this);
        $[231] = t89;
        $[232] = t90;
    } else {
        t90 = $[232];
    }
    let t91;
    if ($[233] !== m) {
        t91 = m(UI_LABELS.pasteGameState);
        $[233] = m;
        $[234] = t91;
    } else {
        t91 = $[234];
    }
    const t92 = String(t91);
    let t93;
    if ($[235] === Symbol.for("react.memo_cache_sentinel")) {
        t93 = ({
            "SettingsPanel[<textarea>.onChange]": (e_1)=>{
                setImportValue(e_1.target.value);
                setImportError(false);
                setImportSuccess(false);
            }
        })["SettingsPanel[<textarea>.onChange]"];
        $[235] = t93;
    } else {
        t93 = $[235];
    }
    let t94;
    if ($[236] !== importValue || $[237] !== t92) {
        t94 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            className: "w-full h-20 bg-background border border-border rounded-md p-2 text-xs font-mono resize-none focus:outline-none focus:ring-1 focus:ring-ring",
            placeholder: t92,
            value: importValue,
            onChange: t93
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1126,
            columnNumber: 11
        }, this);
        $[236] = importValue;
        $[237] = t92;
        $[238] = t94;
    } else {
        t94 = $[238];
    }
    let t95;
    if ($[239] !== importError || $[240] !== m) {
        t95 = importError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-400 text-xs mt-1",
            children: m(UI_LABELS.invalidGameState)
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1135,
            columnNumber: 26
        }, this);
        $[239] = importError;
        $[240] = m;
        $[241] = t95;
    } else {
        t95 = $[241];
    }
    let t96;
    if ($[242] !== importSuccess || $[243] !== m) {
        t96 = importSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-green-400 text-xs mt-1",
            children: m(UI_LABELS.gameLoadedSuccess)
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1144,
            columnNumber: 28
        }, this);
        $[242] = importSuccess;
        $[243] = m;
        $[244] = t96;
    } else {
        t96 = $[244];
    }
    let t97;
    if ($[245] !== importValue) {
        t97 = importValue.trim();
        $[245] = importValue;
        $[246] = t97;
    } else {
        t97 = $[246];
    }
    const t98 = !t97;
    let t99;
    if ($[247] !== m) {
        t99 = m(UI_LABELS.loadGameState);
        $[247] = m;
        $[248] = t99;
    } else {
        t99 = $[248];
    }
    let t100;
    if ($[249] !== handleImport || $[250] !== t98 || $[251] !== t99) {
        t100 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            className: "w-full mt-2",
            onClick: handleImport,
            disabled: t98,
            children: t99
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1170,
            columnNumber: 12
        }, this);
        $[249] = handleImport;
        $[250] = t98;
        $[251] = t99;
        $[252] = t100;
    } else {
        t100 = $[252];
    }
    let t101;
    if ($[253] !== t100 || $[254] !== t88 || $[255] !== t90 || $[256] !== t94 || $[257] !== t95 || $[258] !== t96) {
        t101 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t88,
                t90,
                t94,
                t95,
                t96,
                t100
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1180,
            columnNumber: 12
        }, this);
        $[253] = t100;
        $[254] = t88;
        $[255] = t90;
        $[256] = t94;
        $[257] = t95;
        $[258] = t96;
        $[259] = t101;
    } else {
        t101 = $[259];
    }
    let t102;
    if ($[260] !== m) {
        t102 = m(UI_LABELS.developerTools);
        $[260] = m;
        $[261] = t102;
    } else {
        t102 = $[261];
    }
    let t103;
    if ($[262] !== t102) {
        t103 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-[10px] text-muted-foreground uppercase tracking-wider mb-3",
            children: t102
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1201,
            columnNumber: 12
        }, this);
        $[262] = t102;
        $[263] = t103;
    } else {
        t103 = $[263];
    }
    let t104;
    if ($[264] === Symbol.for("react.memo_cache_sentinel")) {
        t104 = ({
            "SettingsPanel[<Button>.onClick]": ()=>setShowSpriteTest(true)
        })["SettingsPanel[<Button>.onClick]"];
        $[264] = t104;
    } else {
        t104 = $[264];
    }
    let t105;
    if ($[265] !== m) {
        t105 = m(UI_LABELS.openSpriteTestView);
        $[265] = m;
        $[266] = t105;
    } else {
        t105 = $[266];
    }
    let t106;
    if ($[267] !== t105) {
        t106 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            className: "w-full",
            onClick: t104,
            children: t105
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1226,
            columnNumber: 12
        }, this);
        $[267] = t105;
        $[268] = t106;
    } else {
        t106 = $[268];
    }
    let t107;
    if ($[269] !== loadState || $[270] !== setActivePanel) {
        t107 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            className: "w-full mt-2",
            onClick: {
                "SettingsPanel[<Button>.onClick]": ()=>loadExampleState("example_state.json", loadState, setActivePanel)
            }["SettingsPanel[<Button>.onClick]"],
            children: "Load Example State"
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1234,
            columnNumber: 12
        }, this);
        $[269] = loadState;
        $[270] = setActivePanel;
        $[271] = t107;
    } else {
        t107 = $[271];
    }
    let t108;
    if ($[272] !== loadState || $[273] !== setActivePanel) {
        t108 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            className: "w-full mt-2",
            onClick: {
                "SettingsPanel[<Button>.onClick]": ()=>loadExampleState("example_state_2.json", loadState, setActivePanel)
            }["SettingsPanel[<Button>.onClick]"],
            children: "Load Example State 2"
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1245,
            columnNumber: 12
        }, this);
        $[272] = loadState;
        $[273] = setActivePanel;
        $[274] = t108;
    } else {
        t108 = $[274];
    }
    let t109;
    if ($[275] !== loadState || $[276] !== setActivePanel) {
        t109 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            className: "w-full mt-2",
            onClick: {
                "SettingsPanel[<Button>.onClick]": ()=>loadExampleState("example_state_3.json", loadState, setActivePanel)
            }["SettingsPanel[<Button>.onClick]"],
            children: "Load Example State 3"
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1256,
            columnNumber: 12
        }, this);
        $[275] = loadState;
        $[276] = setActivePanel;
        $[277] = t109;
    } else {
        t109 = $[277];
    }
    let t110;
    if ($[278] !== loadState || $[279] !== setActivePanel) {
        t110 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            className: "w-full mt-2",
            onClick: {
                "SettingsPanel[<Button>.onClick]": ()=>loadExampleState("example_state_4.json", loadState, setActivePanel)
            }["SettingsPanel[<Button>.onClick]"],
            children: "Load Example State 4"
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1267,
            columnNumber: 12
        }, this);
        $[278] = loadState;
        $[279] = setActivePanel;
        $[280] = t110;
    } else {
        t110 = $[280];
    }
    let t111;
    if ($[281] !== loadState || $[282] !== setActivePanel) {
        t111 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            className: "w-full mt-2",
            onClick: {
                "SettingsPanel[<Button>.onClick]": ()=>loadExampleState("example_state_5.json", loadState, setActivePanel)
            }["SettingsPanel[<Button>.onClick]"],
            children: "Load Example State 5"
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1278,
            columnNumber: 12
        }, this);
        $[281] = loadState;
        $[282] = setActivePanel;
        $[283] = t111;
    } else {
        t111 = $[283];
    }
    let t112;
    if ($[284] !== loadState || $[285] !== setActivePanel) {
        t112 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            className: "w-full mt-2",
            onClick: {
                "SettingsPanel[<Button>.onClick]": ()=>loadExampleState("example_state_6.json", loadState, setActivePanel)
            }["SettingsPanel[<Button>.onClick]"],
            children: "Load Example State 6"
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1289,
            columnNumber: 12
        }, this);
        $[284] = loadState;
        $[285] = setActivePanel;
        $[286] = t112;
    } else {
        t112 = $[286];
    }
    let t113;
    if ($[287] !== loadState || $[288] !== setActivePanel) {
        t113 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            className: "w-full mt-2",
            onClick: {
                "SettingsPanel[<Button>.onClick]": ()=>loadExampleState("example_state_7.json", loadState, setActivePanel)
            }["SettingsPanel[<Button>.onClick]"],
            children: "Load Example State 7"
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1300,
            columnNumber: 12
        }, this);
        $[287] = loadState;
        $[288] = setActivePanel;
        $[289] = t113;
    } else {
        t113 = $[289];
    }
    let t114;
    if ($[290] !== loadState || $[291] !== setActivePanel) {
        t114 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            className: "w-full mt-2",
            onClick: {
                "SettingsPanel[<Button>.onClick]": ()=>loadExampleState("example_state_8.json", loadState, setActivePanel)
            }["SettingsPanel[<Button>.onClick]"],
            children: "Load Example State 8"
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1311,
            columnNumber: 12
        }, this);
        $[290] = loadState;
        $[291] = setActivePanel;
        $[292] = t114;
    } else {
        t114 = $[292];
    }
    let t115;
    if ($[293] !== loadState || $[294] !== setActivePanel) {
        t115 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            className: "w-full mt-2",
            onClick: {
                "SettingsPanel[<Button>.onClick]": ()=>loadExampleState("example_state_9.json", loadState, setActivePanel)
            }["SettingsPanel[<Button>.onClick]"],
            children: "Load Example State 9"
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1322,
            columnNumber: 12
        }, this);
        $[293] = loadState;
        $[294] = setActivePanel;
        $[295] = t115;
    } else {
        t115 = $[295];
    }
    let t116;
    if ($[296] !== loadState || $[297] !== setActivePanel) {
        t116 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            className: "w-full mt-2",
            onClick: {
                "SettingsPanel[<Button>.onClick]": ()=>loadExampleState("example_state_10.json", loadState, setActivePanel)
            }["SettingsPanel[<Button>.onClick]"],
            children: "Load Example State 10"
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1333,
            columnNumber: 12
        }, this);
        $[296] = loadState;
        $[297] = setActivePanel;
        $[298] = t116;
    } else {
        t116 = $[298];
    }
    let t117;
    if ($[299] !== loadState || $[300] !== setActivePanel) {
        t117 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            className: "w-full mt-2",
            onClick: {
                "SettingsPanel[<Button>.onClick]": ()=>loadExampleState("example_state_11.json", loadState, setActivePanel)
            }["SettingsPanel[<Button>.onClick]"],
            children: "Load Example State 11"
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1344,
            columnNumber: 12
        }, this);
        $[299] = loadState;
        $[300] = setActivePanel;
        $[301] = t117;
    } else {
        t117 = $[301];
    }
    let t118;
    if ($[302] !== m) {
        t118 = m(UI_LABELS.dayNightMode);
        $[302] = m;
        $[303] = t118;
    } else {
        t118 = $[303];
    }
    let t119;
    if ($[304] !== t118) {
        t119 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            children: t118
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1363,
            columnNumber: 12
        }, this);
        $[304] = t118;
        $[305] = t119;
    } else {
        t119 = $[305];
    }
    let t120;
    if ($[306] !== m) {
        t120 = m(UI_LABELS.dayNightModeDesc);
        $[306] = m;
        $[307] = t120;
    } else {
        t120 = $[307];
    }
    let t121;
    if ($[308] !== t120) {
        t121 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted-foreground text-xs mb-2",
            children: t120
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1379,
            columnNumber: 12
        }, this);
        $[308] = t120;
        $[309] = t121;
    } else {
        t121 = $[309];
    }
    let t122;
    if ($[310] === Symbol.for("react.memo_cache_sentinel")) {
        t122 = [
            "auto",
            "day",
            "night"
        ];
        $[310] = t122;
    } else {
        t122 = $[310];
    }
    let t123;
    if ($[311] !== dayNightMode || $[312] !== m || $[313] !== setDayNightMode) {
        t123 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex rounded-md border border-border overflow-hidden",
            children: t122.map({
                "SettingsPanel[(anonymous)()]": (mode)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "SettingsPanel[(anonymous)() > <button>.onClick]": ()=>setDayNightMode(mode)
                        }["SettingsPanel[(anonymous)() > <button>.onClick]"],
                        className: `flex-1 px-3 py-2 text-sm font-medium transition-colors ${dayNightMode === mode ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted text-muted-foreground hover:text-foreground"}`,
                        children: [
                            mode === "auto" && m(UI_LABELS.auto),
                            mode === "day" && m(UI_LABELS.day),
                            mode === "night" && m(UI_LABELS.night)
                        ]
                    }, mode, true, {
                        fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
                        lineNumber: 1395,
                        columnNumber: 49
                    }, this)
            }["SettingsPanel[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1394,
            columnNumber: 12
        }, this);
        $[311] = dayNightMode;
        $[312] = m;
        $[313] = setDayNightMode;
        $[314] = t123;
    } else {
        t123 = $[314];
    }
    let t124;
    if ($[315] !== t119 || $[316] !== t121 || $[317] !== t123) {
        t124 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 pt-4 border-t border-border",
            children: [
                t119,
                t121,
                t123
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1408,
            columnNumber: 12
        }, this);
        $[315] = t119;
        $[316] = t121;
        $[317] = t123;
        $[318] = t124;
    } else {
        t124 = $[318];
    }
    let t125;
    if ($[319] !== t103 || $[320] !== t106 || $[321] !== t107 || $[322] !== t108 || $[323] !== t109 || $[324] !== t110 || $[325] !== t111 || $[326] !== t112 || $[327] !== t113 || $[328] !== t114 || $[329] !== t115 || $[330] !== t116 || $[331] !== t117 || $[332] !== t124) {
        t125 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t103,
                t106,
                t107,
                t108,
                t109,
                t110,
                t111,
                t112,
                t113,
                t114,
                t115,
                t116,
                t117,
                t124
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1418,
            columnNumber: 12
        }, this);
        $[319] = t103;
        $[320] = t106;
        $[321] = t107;
        $[322] = t108;
        $[323] = t109;
        $[324] = t110;
        $[325] = t111;
        $[326] = t112;
        $[327] = t113;
        $[328] = t114;
        $[329] = t115;
        $[330] = t116;
        $[331] = t117;
        $[332] = t124;
        $[333] = t125;
    } else {
        t125 = $[333];
    }
    let t126;
    if ($[334] !== t101 || $[335] !== t125 || $[336] !== t35 || $[337] !== t66 || $[338] !== t76 || $[339] !== t77 || $[340] !== t78 || $[341] !== t86) {
        t126 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t35,
                t66,
                t67,
                t76,
                t77,
                t78,
                t79,
                t86,
                t101,
                t125
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1439,
            columnNumber: 12
        }, this);
        $[334] = t101;
        $[335] = t125;
        $[336] = t35;
        $[337] = t66;
        $[338] = t76;
        $[339] = t77;
        $[340] = t78;
        $[341] = t86;
        $[342] = t126;
    } else {
        t126 = $[342];
    }
    let t127;
    if ($[343] !== t12 || $[344] !== t126) {
        t127 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-[400px] max-h-[85vh] overflow-y-auto",
            children: [
                t12,
                t126
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1454,
            columnNumber: 12
        }, this);
        $[343] = t12;
        $[344] = t126;
        $[345] = t127;
    } else {
        t127 = $[345];
    }
    let t128;
    if ($[346] !== showSpriteTest) {
        t128 = showSpriteTest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$SpriteTestPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpriteTestPanel"], {
            onClose: {
                "SettingsPanel[<SpriteTestPanel>.onClose]": ()=>{
                    setShowSpriteTest(false);
                }
            }["SettingsPanel[<SpriteTestPanel>.onClose]"]
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1463,
            columnNumber: 30
        }, this);
        $[346] = showSpriteTest;
        $[347] = t128;
    } else {
        t128 = $[347];
    }
    let t129;
    if ($[348] !== t10 || $[349] !== t127 || $[350] !== t128) {
        t129 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: true,
            onOpenChange: t10,
            children: [
                t127,
                t128
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/SettingsPanel.tsx",
            lineNumber: 1475,
            columnNumber: 12
        }, this);
        $[348] = t10;
        $[349] = t127;
        $[350] = t128;
        $[351] = t129;
    } else {
        t129 = $[351];
    }
    return t129;
}
_s(SettingsPanel, "qPcNE2xsX2njZ7qkIhnFddhT1e4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SettingsPanel;
var _c;
__turbopack_context__.k.register(_c, "SettingsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/game/panels/AdvisorsPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdvisorsPanel",
    ()=>AdvisorsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gt-next/dist/index.client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/GameContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
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
// Translatable UI labels
const UI_LABELS = {
    cityAdvisors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Investment Committee Briefing'),
    overallCityRating: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Fund Operating Score'),
    ratingDescription: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Based on PMF, growth momentum, burn discipline, confidence, hiring velocity'),
    noUrgentIssues: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('No urgent portfolio risks right now.'),
    cityRunningSmoothly: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('Fund operations are stable this month.')
};
const ADVISOR_ICON_MAP = {
    power: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PowerIcon"], {
        size: 18
    }, void 0, false, {
        fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    water: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WaterIcon"], {
        size: 18
    }, void 0, false, {
        fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    cash: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoneyIcon"], {
        size: 18
    }, void 0, false, {
        fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    shield: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafetyIcon"], {
        size: 18
    }, void 0, false, {
        fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
        lineNumber: 25,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    hospital: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HealthIcon"], {
        size: 18
    }, void 0, false, {
        fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
        lineNumber: 26,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    education: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EducationIcon"], {
        size: 18
    }, void 0, false, {
        fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
        lineNumber: 27,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    environment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnvironmentIcon"], {
        size: 18
    }, void 0, false, {
        fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
        lineNumber: 28,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0)),
    planning: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdvisorIcon"], {
        size: 18
    }, void 0, false, {
        fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
        lineNumber: 29,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    jobs: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JobsIcon"], {
        size: 18
    }, void 0, false, {
        fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0))
};
function AdvisorsPanel() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(87);
    if ($[0] !== "aa50af87717f8b08eae6b56db3c645da4bdf8f6352b0bcce0f5d5550fee5fb4b") {
        for(let $i = 0; $i < 87; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "aa50af87717f8b08eae6b56db3c645da4bdf8f6352b0bcce0f5d5550fee5fb4b";
    }
    const { state, investorSession, setActivePanel } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"])();
    const { stats, competitionDegree } = state;
    const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"])();
    const clampPercent = _AdvisorsPanelClampPercent;
    const t0 = stats.demand?.residential ?? 0;
    const t1 = stats.demand?.commercial ?? 0;
    const t2 = stats.demand?.industrial ?? 0;
    let t3;
    if ($[1] !== t0 || $[2] !== t1 || $[3] !== t2) {
        t3 = {
            residential: t0,
            commercial: t1,
            industrial: t2
        };
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const demand = t3;
    let t4;
    if ($[5] !== stats.income) {
        t4 = Number.isFinite(stats.income) ? stats.income : 0;
        $[5] = stats.income;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const income = t4;
    let t5;
    if ($[7] !== stats.expenses) {
        t5 = Number.isFinite(stats.expenses) ? stats.expenses : 0;
        $[7] = stats.expenses;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const expenses = t5;
    const dryPowder = investorSession ? investorSession.stats.dryPowder : stats.money;
    const netBurn = investorSession ? investorSession.stats.netBurn : income - expenses;
    const runwayMonths = investorSession ? investorSession.stats.runwayMonths : expenses > 0 ? Math.max(0, dryPowder / expenses) : 99;
    let t6;
    if ($[9] !== demand || $[10] !== investorSession) {
        t6 = investorSession ? investorSession.stats.dealFlow : Math.max(0, Math.round((demand.commercial + demand.industrial + 220) / 28));
        $[9] = demand;
        $[10] = investorSession;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    const dealFlow = t6;
    const pmfSignal = investorSession ? clampPercent(investorSession.stats.pmfSignalPercentile) : clampPercent(stats.happiness * 0.45 + stats.education * 0.25 + (demand.commercial + 100) / 2 * 0.2 + 8);
    let t7;
    if ($[12] !== demand || $[13] !== expenses || $[14] !== income || $[15] !== investorSession) {
        t7 = investorSession ? clampPercent(investorSession.stats.growthMomentumPercentile) : clampPercent((income - expenses) / Math.max(Math.abs(income), 1) * 35 + 50 + demand.commercial * 0.15 + 10);
        $[12] = demand;
        $[13] = expenses;
        $[14] = income;
        $[15] = investorSession;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    const growthMomentum = t7;
    const burnDiscipline = investorSession ? clampPercent(investorSession.stats.burnDisciplinePercentile) : clampPercent(100 - (income > 0 ? expenses / income : expenses > 0 ? 3 : 1) * 30 + 9);
    const investorConfidence = investorSession ? clampPercent(investorSession.stats.investorConfidencePercentile) : clampPercent((dryPowder > 0 ? 46 : 30) + demand.commercial * 0.2 + demand.industrial * 0.12 + (income > expenses ? 10 : -6) + 8);
    const hiringVelocity = investorSession ? clampPercent(investorSession.stats.hiringVelocityPercentile) : clampPercent(stats.jobs / Math.max(stats.population, 1) * 70 + demand.residential * 0.25 + demand.commercial * 0.12 + 7);
    const avgRating = (pmfSignal + growthMomentum + burnDiscipline + investorConfidence + hiringVelocity) / 5;
    const grade = avgRating >= 90 ? "A+" : avgRating >= 80 ? "A" : avgRating >= 70 ? "B" : avgRating >= 60 ? "C" : avgRating >= 50 ? "D" : "F";
    const gradeColor = avgRating >= 70 ? "text-green-400" : avgRating >= 50 ? "text-amber-400" : "text-red-400";
    let T0;
    let T1;
    let T2;
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t15;
    let t16;
    let t8;
    let t9;
    if ($[17] !== burnDiscipline || $[18] !== competitionDegree || $[19] !== dealFlow || $[20] !== dryPowder || $[21] !== grade || $[22] !== gradeColor || $[23] !== growthMomentum || $[24] !== hiringVelocity || $[25] !== investorConfidence || $[26] !== m || $[27] !== netBurn || $[28] !== pmfSignal || $[29] !== runwayMonths || $[30] !== setActivePanel) {
        const cards = [];
        if (runwayMonths < 8 || dryPowder < 0 || netBurn < 0) {
            cards.push({
                name: "Capital Strategy",
                icon: "cash",
                priority: runwayMonths < 4 || dryPowder < 0 ? "critical" : "high",
                messages: [
                    `Runway is ${runwayMonths.toFixed(1)} months with dry powder at $${Math.round(dryPowder).toLocaleString()}.`,
                    netBurn < 0 ? `Portfolio burn is $${Math.abs(Math.round(netBurn)).toLocaleString()}/month. Slow burn or close quality follow-ons.` : "Net burn is positive. Keep reserve discipline and defend core winners."
                ]
            });
        }
        if (pmfSignal < 45 || growthMomentum < 45) {
            cards.push({
                name: "Portfolio PMF & Growth",
                icon: "planning",
                priority: pmfSignal < 30 || growthMomentum < 30 ? "critical" : "high",
                messages: [
                    `PMF signal ${pmfSignal}% and growth momentum ${growthMomentum}% are below target.`,
                    "Push offering partnerships and commercial partnerships across portfolio companies to recover momentum."
                ]
            });
        }
        if (hiringVelocity < 45 || burnDiscipline < 45) {
            cards.push({
                name: "Talent & Burn Quality",
                icon: "jobs",
                priority: hiringVelocity < 30 || burnDiscipline < 30 ? "critical" : "high",
                messages: [
                    `Hiring velocity ${hiringVelocity}% and burn discipline ${burnDiscipline}% need correction.`,
                    "Prioritize recruiting support on top performers and freeze non-critical spend in weak clusters."
                ]
            });
        }
        if (competitionDegree >= 65 || dealFlow < 4 || investorConfidence < 45) {
            cards.push({
                name: "Competitive Deal Pressure",
                icon: "shield",
                priority: competitionDegree >= 80 || investorConfidence < 30 ? "critical" : "medium",
                messages: [
                    `Competition degree is ${Math.round(competitionDegree)}% with deal flow at ${dealFlow}.`,
                    investorConfidence < 45 ? `Investor confidence is ${investorConfidence}%. Rival funds can win rounds unless conviction quality improves.` : "Maintain founder support and move faster on conviction to avoid losing allocations."
                ]
            });
        }
        if (cards.length === 0) {
            cards.push({
                name: "Operating Rhythm",
                icon: "planning",
                priority: "low",
                messages: [
                    "Signals are stable across PMF, growth, burn, confidence, and hiring."
                ]
            });
        }
        T2 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"];
        t15 = true;
        if ($[43] !== setActivePanel) {
            t16 = ({
                "AdvisorsPanel[<Dialog>.onOpenChange]": ()=>setActivePanel("none")
            })["AdvisorsPanel[<Dialog>.onOpenChange]"];
            $[43] = setActivePanel;
            $[44] = t16;
        } else {
            t16 = $[44];
        }
        T1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"];
        t13 = "max-w-[500px] max-h-[600px]";
        let t17;
        if ($[45] !== m) {
            t17 = m(UI_LABELS.cityAdvisors);
            $[45] = m;
            $[46] = t17;
        } else {
            t17 = $[46];
        }
        if ($[47] !== t17) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                    children: t17
                }, void 0, false, {
                    fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
                    lineNumber: 195,
                    columnNumber: 27
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
                lineNumber: 195,
                columnNumber: 13
            }, this);
            $[47] = t17;
            $[48] = t14;
        } else {
            t14 = $[48];
        }
        t11 = "space-y-4";
        const t18 = `w-16 h-16 flex items-center justify-center text-3xl font-black rounded-md ${gradeColor} bg-primary/20`;
        let t19;
        if ($[49] !== grade || $[50] !== t18) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t18,
                children: grade
            }, void 0, false, {
                fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
                lineNumber: 205,
                columnNumber: 13
            }, this);
            $[49] = grade;
            $[50] = t18;
            $[51] = t19;
        } else {
            t19 = $[51];
        }
        let t20;
        if ($[52] !== m) {
            t20 = m(UI_LABELS.overallCityRating);
            $[52] = m;
            $[53] = t20;
        } else {
            t20 = $[53];
        }
        let t21;
        if ($[54] !== t20) {
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-foreground font-semibold",
                children: t20
            }, void 0, false, {
                fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
                lineNumber: 222,
                columnNumber: 13
            }, this);
            $[54] = t20;
            $[55] = t21;
        } else {
            t21 = $[55];
        }
        let t22;
        if ($[56] !== m) {
            t22 = m(UI_LABELS.ratingDescription);
            $[56] = m;
            $[57] = t22;
        } else {
            t22 = $[57];
        }
        let t23;
        if ($[58] !== t22) {
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-muted-foreground text-sm",
                children: t22
            }, void 0, false, {
                fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
                lineNumber: 238,
                columnNumber: 13
            }, this);
            $[58] = t22;
            $[59] = t23;
        } else {
            t23 = $[59];
        }
        let t24;
        if ($[60] !== t21 || $[61] !== t23) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t21,
                    t23
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
                lineNumber: 246,
                columnNumber: 13
            }, this);
            $[60] = t21;
            $[61] = t23;
            $[62] = t24;
        } else {
            t24 = $[62];
        }
        if ($[63] !== t19 || $[64] !== t24) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "flex items-center gap-4 p-4 bg-primary/10 border-primary/30",
                children: [
                    t19,
                    t24
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
                lineNumber: 254,
                columnNumber: 13
            }, this);
            $[63] = t19;
            $[64] = t24;
            $[65] = t12;
        } else {
            t12 = $[65];
        }
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"];
        t10 = "max-h-[350px]";
        t8 = "space-y-3";
        t9 = cards.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "text-center py-8 text-muted-foreground bg-primary/10 border-primary/30",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdvisorIcon"], {
                    size: 32,
                    className: "mx-auto mb-3 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
                    lineNumber: 264,
                    columnNumber: 120
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm",
                    children: m(UI_LABELS.noUrgentIssues)
                }, void 0, false, {
                    fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
                    lineNumber: 264,
                    columnNumber: 181
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs mt-1",
                    children: m(UI_LABELS.cityRunningSmoothly)
                }, void 0, false, {
                    fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
                    lineNumber: 264,
                    columnNumber: 241
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
            lineNumber: 264,
            columnNumber: 31
        }, this) : cards.map(_AdvisorsPanelCardsMap);
        $[17] = burnDiscipline;
        $[18] = competitionDegree;
        $[19] = dealFlow;
        $[20] = dryPowder;
        $[21] = grade;
        $[22] = gradeColor;
        $[23] = growthMomentum;
        $[24] = hiringVelocity;
        $[25] = investorConfidence;
        $[26] = m;
        $[27] = netBurn;
        $[28] = pmfSignal;
        $[29] = runwayMonths;
        $[30] = setActivePanel;
        $[31] = T0;
        $[32] = T1;
        $[33] = T2;
        $[34] = t10;
        $[35] = t11;
        $[36] = t12;
        $[37] = t13;
        $[38] = t14;
        $[39] = t15;
        $[40] = t16;
        $[41] = t8;
        $[42] = t9;
    } else {
        T0 = $[31];
        T1 = $[32];
        T2 = $[33];
        t10 = $[34];
        t11 = $[35];
        t12 = $[36];
        t13 = $[37];
        t14 = $[38];
        t15 = $[39];
        t16 = $[40];
        t8 = $[41];
        t9 = $[42];
    }
    let t17;
    if ($[66] !== t8 || $[67] !== t9) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
            lineNumber: 307,
            columnNumber: 11
        }, this);
        $[66] = t8;
        $[67] = t9;
        $[68] = t17;
    } else {
        t17 = $[68];
    }
    let t18;
    if ($[69] !== T0 || $[70] !== t10 || $[71] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            className: t10,
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
            lineNumber: 316,
            columnNumber: 11
        }, this);
        $[69] = T0;
        $[70] = t10;
        $[71] = t17;
        $[72] = t18;
    } else {
        t18 = $[72];
    }
    let t19;
    if ($[73] !== t11 || $[74] !== t12 || $[75] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t11,
            children: [
                t12,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[73] = t11;
        $[74] = t12;
        $[75] = t18;
        $[76] = t19;
    } else {
        t19 = $[76];
    }
    let t20;
    if ($[77] !== T1 || $[78] !== t13 || $[79] !== t14 || $[80] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            className: t13,
            children: [
                t14,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
            lineNumber: 336,
            columnNumber: 11
        }, this);
        $[77] = T1;
        $[78] = t13;
        $[79] = t14;
        $[80] = t19;
        $[81] = t20;
    } else {
        t20 = $[81];
    }
    let t21;
    if ($[82] !== T2 || $[83] !== t15 || $[84] !== t16 || $[85] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T2, {
            open: t15,
            onOpenChange: t16,
            children: t20
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
            lineNumber: 347,
            columnNumber: 11
        }, this);
        $[82] = T2;
        $[83] = t15;
        $[84] = t16;
        $[85] = t20;
        $[86] = t21;
    } else {
        t21 = $[86];
    }
    return t21;
}
_s(AdvisorsPanel, "rR7LZXs6rWrqJcyHzDIIimQhmpo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"]
    ];
});
_c = AdvisorsPanel;
function _AdvisorsPanelCardsMap(advisor, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: `p-3 bg-primary/10 border-primary/30 ${advisor.priority === "critical" ? "border-l-2 border-l-red-500" : advisor.priority === "high" ? "border-l-2 border-l-amber-500" : advisor.priority === "medium" ? "border-l-2 border-l-yellow-500" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-lg text-muted-foreground",
                        children: ADVISOR_ICON_MAP[advisor.icon] || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfoIcon"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
                            lineNumber: 359,
                            columnNumber: 406
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
                        lineNumber: 359,
                        columnNumber: 323
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-foreground font-medium text-sm",
                        children: advisor.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
                        lineNumber: 359,
                        columnNumber: 436
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: advisor.priority === "critical" ? "destructive" : advisor.priority === "high" ? "destructive" : "secondary",
                        className: "ml-auto text-[10px]",
                        children: advisor.priority
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
                        lineNumber: 359,
                        columnNumber: 511
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
                lineNumber: 359,
                columnNumber: 277
            }, this),
            advisor.messages.map(_AdvisorsPanelCardsMapAdvisorMessagesMap)
        ]
    }, i, true, {
        fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
        lineNumber: 359,
        columnNumber: 10
    }, this);
}
function _AdvisorsPanelCardsMapAdvisorMessagesMap(msg, j) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-muted-foreground text-sm leading-relaxed",
        children: msg
    }, j, false, {
        fileName: "[project]/src/components/game/panels/AdvisorsPanel.tsx",
        lineNumber: 362,
        columnNumber: 10
    }, this);
}
function _AdvisorsPanelClampPercent(value) {
    return Math.max(0, Math.min(100, Math.round(value)));
}
var _c;
__turbopack_context__.k.register(_c, "AdvisorsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/game/panels/TileInfoPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TileInfoPanel",
    ()=>TileInfoPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/types/game.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/games/isocity/types/game.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/GameContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/simulation.ts [app-client] (ecmascript)");
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
function TileInfoPanel(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(151);
    if ($[0] !== "05a0503460aa81eea1d181c6a011085fffe3a078cdf7ac996301f813ec9130eb") {
        for(let $i = 0; $i < 151; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "05a0503460aa81eea1d181c6a011085fffe3a078cdf7ac996301f813ec9130eb";
    }
    const { tile, services, onClose, isMobile: t1 } = t0;
    const isMobile = t1 === undefined ? false : t1;
    const { x, y } = tile;
    const { state, upgradeServiceBuilding } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"])();
    const isServiceBuilding = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICE_BUILDING_TYPES"].has(tile.building.type);
    let t2;
    if ($[1] !== state.investorProfile || $[2] !== state.pendingOpportunities || $[3] !== state.portfolioCompanies || $[4] !== state.portfolioCompanyTiles || $[5] !== x || $[6] !== y) {
        bb0: {
            const portfolioMarkers = state.portfolioCompanyTiles || [];
            const portfolioCompanies = state.portfolioCompanies || [];
            let t3;
            if ($[8] !== state.pendingOpportunities) {
                t3 = state.pendingOpportunities || [];
                $[8] = state.pendingOpportunities;
                $[9] = t3;
            } else {
                t3 = $[9];
            }
            const pendingOpportunities = t3;
            let t4;
            if ($[10] !== x || $[11] !== y) {
                t4 = ({
                    "TileInfoPanel[portfolioMarkers.find()]": (item)=>item.x === x && item.y === y
                })["TileInfoPanel[portfolioMarkers.find()]"];
                $[10] = x;
                $[11] = y;
                $[12] = t4;
            } else {
                t4 = $[12];
            }
            const marker = portfolioMarkers.find(t4);
            if (!marker) {
                t2 = null;
                break bb0;
            }
            const company = portfolioCompanies.find({
                "TileInfoPanel[portfolioCompanies.find()]": (row)=>row.id === marker.companyId || row.name.toLowerCase() === marker.name.toLowerCase()
            }["TileInfoPanel[portfolioCompanies.find()]"]);
            const pending = pendingOpportunities.find({
                "TileInfoPanel[pendingOpportunities.find()]": (entry)=>entry.companyId === marker.companyId
            }["TileInfoPanel[pendingOpportunities.find()]"]);
            const investor = state.investorProfile;
            const kindLabel = marker.kind === "competitor" ? "Competitor Company" : marker.kind === "opportunity" ? "Open Opportunity" : "Portfolio Company";
            const t5 = company?.stage || pending?.stage;
            const t6 = company?.sector || pending?.industry;
            const t7 = company?.domain;
            const t8 = pending?.openRound ?? false;
            const t9 = pending?.rivalInvestor;
            const t10 = investor?.name;
            const t11 = investor?.domain;
            const t12 = investor?.monthRank ?? investor?.month_rank;
            const t13 = investor?.investorType ?? investor?.investor_type;
            let t14;
            if ($[13] !== kindLabel || $[14] !== marker || $[15] !== t10 || $[16] !== t11 || $[17] !== t12 || $[18] !== t13 || $[19] !== t5 || $[20] !== t6 || $[21] !== t7 || $[22] !== t8 || $[23] !== t9) {
                t14 = {
                    kindLabel,
                    companyName: marker.name,
                    stage: t5,
                    sector: t6,
                    domain: t7,
                    headcount: marker.headcount,
                    roundOpen: t8,
                    rivalInvestor: t9,
                    investorName: t10,
                    investorDomain: t11,
                    investorRank: t12,
                    investorType: t13
                };
                $[13] = kindLabel;
                $[14] = marker;
                $[15] = t10;
                $[16] = t11;
                $[17] = t12;
                $[18] = t13;
                $[19] = t5;
                $[20] = t6;
                $[21] = t7;
                $[22] = t8;
                $[23] = t9;
                $[24] = t14;
            } else {
                t14 = $[24];
            }
            t2 = t14;
        }
        $[1] = state.investorProfile;
        $[2] = state.pendingOpportunities;
        $[3] = state.portfolioCompanies;
        $[4] = state.portfolioCompanyTiles;
        $[5] = x;
        $[6] = y;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    const entityContext = t2;
    let t3;
    bb1: {
        if (!isServiceBuilding) {
            t3 = null;
            break bb1;
        }
        const buildingType = tile.building.type;
        const baseCost = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$games$2f$isocity$2f$types$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOL_INFO"][buildingType]?.cost ?? 0;
        const currentLevel = tile.building.level;
        if (currentLevel >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICE_MAX_LEVEL"]) {
            t3 = null;
            break bb1;
        }
        const upgradeCost = baseCost * Math.pow(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICE_UPGRADE_COST_BASE"], currentLevel);
        const canAfford = state.stats.money >= upgradeCost;
        const isUnderConstruction = tile.building.constructionProgress !== undefined && tile.building.constructionProgress < 100;
        const isAbandoned = tile.building.abandoned;
        const config = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICE_CONFIG"][buildingType];
        const baseRange = config?.range ?? 0;
        const currentEffectiveRange = Math.floor(baseRange * (1 + (currentLevel - 1) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICE_RANGE_INCREASE_PER_LEVEL"]));
        const nextEffectiveRange = Math.floor(baseRange * (1 + currentLevel * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICE_RANGE_INCREASE_PER_LEVEL"]));
        let t4;
        if ($[25] !== baseRange || $[26] !== canAfford || $[27] !== currentEffectiveRange || $[28] !== currentLevel || $[29] !== isAbandoned || $[30] !== isUnderConstruction || $[31] !== nextEffectiveRange || $[32] !== upgradeCost) {
            t4 = {
                cost: upgradeCost,
                canAfford,
                isUnderConstruction,
                isAbandoned,
                currentLevel,
                maxLevel: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICE_MAX_LEVEL"],
                baseRange,
                currentEffectiveRange,
                nextEffectiveRange
            };
            $[25] = baseRange;
            $[26] = canAfford;
            $[27] = currentEffectiveRange;
            $[28] = currentLevel;
            $[29] = isAbandoned;
            $[30] = isUnderConstruction;
            $[31] = nextEffectiveRange;
            $[32] = upgradeCost;
            $[33] = t4;
        } else {
            t4 = $[33];
        }
        t3 = t4;
    }
    const upgradeInfo = t3;
    let t4;
    if ($[34] !== upgradeInfo || $[35] !== upgradeServiceBuilding || $[36] !== x || $[37] !== y) {
        t4 = ({
            "TileInfoPanel[handleUpgrade]": (e)=>{
                e.stopPropagation();
                e.preventDefault();
                if (!upgradeInfo || !upgradeInfo.canAfford) {
                    return;
                }
                const success = upgradeServiceBuilding(x, y);
                if (success) {}
            }
        })["TileInfoPanel[handleUpgrade]"];
        $[34] = upgradeInfo;
        $[35] = upgradeServiceBuilding;
        $[36] = x;
        $[37] = y;
        $[38] = t4;
    } else {
        t4 = $[38];
    }
    const handleUpgrade = t4;
    const handleCardClick = _TileInfoPanelHandleCardClick;
    const t5 = `${isMobile ? "fixed left-0 right-0 w-full rounded-none border-x-0 border-t border-b z-30" : "fixed top-[96px] right-4 w-80 max-h-[72vh] overflow-y-auto z-50"}`;
    let t6;
    if ($[39] !== isMobile) {
        t6 = isMobile ? {
            top: "calc(72px + env(safe-area-inset-top, 0px))"
        } : undefined;
        $[39] = isMobile;
        $[40] = t6;
    } else {
        t6 = $[40];
    }
    let t7;
    if ($[41] !== x || $[42] !== y) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            className: "text-sm font-sans",
            children: [
                "Tile (",
                x,
                ", ",
                y,
                ")"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 235,
            columnNumber: 10
        }, this);
        $[41] = x;
        $[42] = y;
        $[43] = t7;
    } else {
        t7 = $[43];
    }
    let t8;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseIcon"], {
            size: 14
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 244,
            columnNumber: 10
        }, this);
        $[44] = t8;
    } else {
        t8 = $[44];
    }
    let t9;
    if ($[45] !== onClose) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "ghost",
            size: "icon-sm",
            onClick: onClose,
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 251,
            columnNumber: 10
        }, this);
        $[45] = onClose;
        $[46] = t9;
    } else {
        t9 = $[46];
    }
    let t10;
    if ($[47] !== t7 || $[48] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-2 flex flex-row items-center justify-between",
            children: [
                t7,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[47] = t7;
        $[48] = t9;
        $[49] = t10;
    } else {
        t10 = $[49];
    }
    let t11;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted-foreground",
            children: "Building"
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[50] = t11;
    } else {
        t11 = $[50];
    }
    let t12;
    if ($[51] !== tile.building.type) {
        let t13;
        if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = /_/g;
            $[53] = t13;
        } else {
            t13 = $[53];
        }
        t12 = tile.building.type.replace(t13, " ");
        $[51] = tile.building.type;
        $[52] = t12;
    } else {
        t12 = $[52];
    }
    let t13;
    if ($[54] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "capitalize",
                    children: t12
                }, void 0, false, {
                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                    lineNumber: 290,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 290,
            columnNumber: 11
        }, this);
        $[54] = t12;
        $[55] = t13;
    } else {
        t13 = $[55];
    }
    let t14;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted-foreground",
            children: "Zone"
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 298,
            columnNumber: 11
        }, this);
        $[56] = t14;
    } else {
        t14 = $[56];
    }
    const t15 = tile.zone === "residential" ? "default" : tile.zone === "commercial" ? "secondary" : tile.zone === "industrial" ? "outline" : "secondary";
    const t16 = tile.zone === "residential" ? "bg-green-500/20 text-green-400" : tile.zone === "commercial" ? "bg-blue-500/20 text-blue-400" : tile.zone === "industrial" ? "bg-amber-500/20 text-amber-400" : "";
    const t17 = tile.zone === "none" ? "Unzoned" : tile.zone;
    let t18;
    if ($[57] !== t15 || $[58] !== t16 || $[59] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: t15,
                    className: t16,
                    children: t17
                }, void 0, false, {
                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                    lineNumber: 308,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 308,
            columnNumber: 11
        }, this);
        $[57] = t15;
        $[58] = t16;
        $[59] = t17;
        $[60] = t18;
    } else {
        t18 = $[60];
    }
    let t19;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted-foreground",
            children: "Level"
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 318,
            columnNumber: 11
        }, this);
        $[61] = t19;
    } else {
        t19 = $[61];
    }
    let t20;
    if ($[62] !== tile.building.level) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        tile.building.level,
                        "/5"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                    lineNumber: 325,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 325,
            columnNumber: 11
        }, this);
        $[62] = tile.building.level;
        $[63] = t20;
    } else {
        t20 = $[63];
    }
    let t21;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted-foreground",
            children: "Population"
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        $[64] = t21;
    } else {
        t21 = $[64];
    }
    let t22;
    if ($[65] !== tile.building.population) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: tile.building.population
                }, void 0, false, {
                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                    lineNumber: 340,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 340,
            columnNumber: 11
        }, this);
        $[65] = tile.building.population;
        $[66] = t22;
    } else {
        t22 = $[66];
    }
    let t23;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted-foreground",
            children: "Jobs"
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 348,
            columnNumber: 11
        }, this);
        $[67] = t23;
    } else {
        t23 = $[67];
    }
    let t24;
    if ($[68] !== tile.building.jobs) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: tile.building.jobs
                }, void 0, false, {
                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                    lineNumber: 355,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 355,
            columnNumber: 11
        }, this);
        $[68] = tile.building.jobs;
        $[69] = t24;
    } else {
        t24 = $[69];
    }
    let t25;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 363,
            columnNumber: 11
        }, this);
        $[70] = t25;
    } else {
        t25 = $[70];
    }
    let t26;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted-foreground",
            children: "Power"
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 370,
            columnNumber: 11
        }, this);
        $[71] = t26;
    } else {
        t26 = $[71];
    }
    const t27 = tile.building.powered ? "default" : "destructive";
    const t28 = tile.building.powered ? "Connected" : "No Power";
    let t29;
    if ($[72] !== t27 || $[73] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: t27,
                    children: t28
                }, void 0, false, {
                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                    lineNumber: 379,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 379,
            columnNumber: 11
        }, this);
        $[72] = t27;
        $[73] = t28;
        $[74] = t29;
    } else {
        t29 = $[74];
    }
    let t30;
    if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted-foreground",
            children: "Water"
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 388,
            columnNumber: 11
        }, this);
        $[75] = t30;
    } else {
        t30 = $[75];
    }
    const t31 = tile.building.watered ? "default" : "destructive";
    const t32 = tile.building.watered ? "bg-cyan-500/20 text-cyan-400" : "";
    const t33 = tile.building.watered ? "Connected" : "No Water";
    let t34;
    if ($[76] !== t31 || $[77] !== t32 || $[78] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t30,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: t31,
                    className: t32,
                    children: t33
                }, void 0, false, {
                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                    lineNumber: 398,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 398,
            columnNumber: 11
        }, this);
        $[76] = t31;
        $[77] = t32;
        $[78] = t33;
        $[79] = t34;
    } else {
        t34 = $[79];
    }
    let t35;
    if ($[80] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted-foreground",
            children: "Land Value"
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 408,
            columnNumber: 11
        }, this);
        $[80] = t35;
    } else {
        t35 = $[80];
    }
    let t36;
    if ($[81] !== tile.landValue) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t35,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        "$",
                        tile.landValue
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                    lineNumber: 415,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 415,
            columnNumber: 11
        }, this);
        $[81] = tile.landValue;
        $[82] = t36;
    } else {
        t36 = $[82];
    }
    let t37;
    if ($[83] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted-foreground",
            children: "Pollution"
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 423,
            columnNumber: 11
        }, this);
        $[83] = t37;
    } else {
        t37 = $[83];
    }
    const t38 = tile.pollution > 50 ? "text-red-400" : tile.pollution > 25 ? "text-amber-400" : "text-green-400";
    let t39;
    if ($[84] !== tile.pollution) {
        t39 = Math.round(tile.pollution);
        $[84] = tile.pollution;
        $[85] = t39;
    } else {
        t39 = $[85];
    }
    let t40;
    if ($[86] !== t38 || $[87] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t37,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: t38,
                    children: [
                        t39,
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                    lineNumber: 439,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 439,
            columnNumber: 11
        }, this);
        $[86] = t38;
        $[87] = t39;
        $[88] = t40;
    } else {
        t40 = $[88];
    }
    let t41;
    if ($[89] !== entityContext) {
        t41 = entityContext && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                    lineNumber: 448,
                    columnNumber: 30
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-[10px] text-muted-foreground uppercase tracking-wider mb-2",
                    children: "Entity Context"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                    lineNumber: 448,
                    columnNumber: 43
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: "Type"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                                    lineNumber: 448,
                                    columnNumber: 225
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-right",
                                    children: entityContext.kindLabel
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                                    lineNumber: 448,
                                    columnNumber: 276
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                            lineNumber: 448,
                            columnNumber: 181
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: "Company"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                                    lineNumber: 448,
                                    columnNumber: 387
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-right",
                                    children: entityContext.companyName
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                                    lineNumber: 448,
                                    columnNumber: 441
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                            lineNumber: 448,
                            columnNumber: 343
                        }, this),
                        entityContext.sector && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: "Sector"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                                    lineNumber: 448,
                                    columnNumber: 579
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-right",
                                    children: entityContext.sector
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                                    lineNumber: 448,
                                    columnNumber: 632
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                            lineNumber: 448,
                            columnNumber: 535
                        }, this),
                        entityContext.stage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: "Stage"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                                    lineNumber: 448,
                                    columnNumber: 765
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-right",
                                    children: entityContext.stage
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                                    lineNumber: 448,
                                    columnNumber: 817
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                            lineNumber: 448,
                            columnNumber: 721
                        }, this),
                        entityContext.domain && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: "Domain"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                                    lineNumber: 448,
                                    columnNumber: 950
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-right",
                                    children: entityContext.domain
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                                    lineNumber: 448,
                                    columnNumber: 1003
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                            lineNumber: 448,
                            columnNumber: 906
                        }, this),
                        typeof entityContext.headcount === "number" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: "Headcount"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                                    lineNumber: 448,
                                    columnNumber: 1160
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-right",
                                    children: entityContext.headcount
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                                    lineNumber: 448,
                                    columnNumber: 1216
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                            lineNumber: 448,
                            columnNumber: 1116
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: "Round"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                                    lineNumber: 448,
                                    columnNumber: 1328
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: entityContext.roundOpen ? "text-amber-300 text-right" : "text-muted-foreground text-right",
                                    children: entityContext.roundOpen ? "Open" : "Closed"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                                    lineNumber: 448,
                                    columnNumber: 1380
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                            lineNumber: 448,
                            columnNumber: 1284
                        }, this),
                        entityContext.rivalInvestor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: "Rival"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                                    lineNumber: 448,
                                    columnNumber: 1623
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-right",
                                    children: entityContext.rivalInvestor
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                                    lineNumber: 448,
                                    columnNumber: 1675
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                            lineNumber: 448,
                            columnNumber: 1579
                        }, this),
                        entityContext.investorName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: "Investor"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                                    lineNumber: 448,
                                    columnNumber: 1822
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-right",
                                    children: entityContext.investorName
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                                    lineNumber: 448,
                                    columnNumber: 1877
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                            lineNumber: 448,
                            columnNumber: 1778
                        }, this),
                        entityContext.investorDomain && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: "Investor Domain"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                                    lineNumber: 448,
                                    columnNumber: 2025
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-right",
                                    children: entityContext.investorDomain
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                                    lineNumber: 448,
                                    columnNumber: 2087
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                            lineNumber: 448,
                            columnNumber: 1981
                        }, this),
                        (entityContext.investorRank || entityContext.investorType) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: "Investor Profile"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                                    lineNumber: 448,
                                    columnNumber: 2267
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-right",
                                    children: [
                                        entityContext.investorType || "Investor",
                                        entityContext.investorRank ? ` · #${entityContext.investorRank}` : ""
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                                    lineNumber: 448,
                                    columnNumber: 2330
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                            lineNumber: 448,
                            columnNumber: 2223
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                    lineNumber: 448,
                    columnNumber: 144
                }, this)
            ]
        }, void 0, true);
        $[89] = entityContext;
        $[90] = t41;
    } else {
        t41 = $[90];
    }
    let t42;
    if ($[91] !== tile.building.fireProgress || $[92] !== tile.building.onFire) {
        t42 = tile.building.onFire && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                    lineNumber: 456,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between text-red-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "ON FIRE!"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                            lineNumber: 456,
                            columnNumber: 101
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                Math.round(tile.building.fireProgress),
                                "% damage"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                            lineNumber: 456,
                            columnNumber: 122
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                    lineNumber: 456,
                    columnNumber: 50
                }, this)
            ]
        }, void 0, true);
        $[91] = tile.building.fireProgress;
        $[92] = tile.building.onFire;
        $[93] = t42;
    } else {
        t42 = $[93];
    }
    let t43;
    let t44;
    if ($[94] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 466,
            columnNumber: 11
        }, this);
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-[10px] text-muted-foreground uppercase tracking-wider mb-2",
            children: "Service Coverage"
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 467,
            columnNumber: 11
        }, this);
        $[94] = t43;
        $[95] = t44;
    } else {
        t43 = $[94];
        t44 = $[95];
    }
    let t45;
    if ($[96] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted-foreground",
            children: "Police"
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 476,
            columnNumber: 11
        }, this);
        $[96] = t45;
    } else {
        t45 = $[96];
    }
    let t46;
    if ($[97] !== services.police || $[98] !== x || $[99] !== y) {
        t46 = Math.round(services.police[y][x]);
        $[97] = services.police;
        $[98] = x;
        $[99] = y;
        $[100] = t46;
    } else {
        t46 = $[100];
    }
    let t47;
    if ($[101] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t45,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        t46,
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                    lineNumber: 493,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 493,
            columnNumber: 11
        }, this);
        $[101] = t46;
        $[102] = t47;
    } else {
        t47 = $[102];
    }
    let t48;
    if ($[103] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted-foreground",
            children: "Fire"
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 501,
            columnNumber: 11
        }, this);
        $[103] = t48;
    } else {
        t48 = $[103];
    }
    let t49;
    if ($[104] !== services.fire || $[105] !== x || $[106] !== y) {
        t49 = Math.round(services.fire[y][x]);
        $[104] = services.fire;
        $[105] = x;
        $[106] = y;
        $[107] = t49;
    } else {
        t49 = $[107];
    }
    let t50;
    if ($[108] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t48,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        t49,
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                    lineNumber: 518,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 518,
            columnNumber: 11
        }, this);
        $[108] = t49;
        $[109] = t50;
    } else {
        t50 = $[109];
    }
    let t51;
    if ($[110] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted-foreground",
            children: "Health"
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 526,
            columnNumber: 11
        }, this);
        $[110] = t51;
    } else {
        t51 = $[110];
    }
    let t52;
    if ($[111] !== services.health || $[112] !== x || $[113] !== y) {
        t52 = Math.round(services.health[y][x]);
        $[111] = services.health;
        $[112] = x;
        $[113] = y;
        $[114] = t52;
    } else {
        t52 = $[114];
    }
    let t53;
    if ($[115] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t51,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        t52,
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                    lineNumber: 543,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 543,
            columnNumber: 11
        }, this);
        $[115] = t52;
        $[116] = t53;
    } else {
        t53 = $[116];
    }
    let t54;
    if ($[117] === Symbol.for("react.memo_cache_sentinel")) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted-foreground",
            children: "Education"
        }, void 0, false, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 551,
            columnNumber: 11
        }, this);
        $[117] = t54;
    } else {
        t54 = $[117];
    }
    let t55;
    if ($[118] !== services.education || $[119] !== x || $[120] !== y) {
        t55 = Math.round(services.education[y][x]);
        $[118] = services.education;
        $[119] = x;
        $[120] = y;
        $[121] = t55;
    } else {
        t55 = $[121];
    }
    let t56;
    if ($[122] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t54,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        t55,
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                    lineNumber: 568,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 568,
            columnNumber: 11
        }, this);
        $[122] = t55;
        $[123] = t56;
    } else {
        t56 = $[123];
    }
    let t57;
    if ($[124] !== t47 || $[125] !== t50 || $[126] !== t53 || $[127] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-2 text-xs",
            children: [
                t47,
                t50,
                t53,
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 576,
            columnNumber: 11
        }, this);
        $[124] = t47;
        $[125] = t50;
        $[126] = t53;
        $[127] = t56;
        $[128] = t57;
    } else {
        t57 = $[128];
    }
    let t58;
    if ($[129] !== handleUpgrade || $[130] !== upgradeInfo) {
        t58 = upgradeInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                    lineNumber: 587,
                    columnNumber: 28
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-[10px] text-muted-foreground uppercase tracking-wider mb-2",
                    children: "Upgrade"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                    lineNumber: 587,
                    columnNumber: 41
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: "Coverage Range"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                                    lineNumber: 587,
                                    columnNumber: 208
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono",
                                    children: [
                                        upgradeInfo.currentEffectiveRange,
                                        " → ",
                                        upgradeInfo.nextEffectiveRange,
                                        " tiles"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                                    lineNumber: 587,
                                    columnNumber: 269
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                            lineNumber: 587,
                            columnNumber: 162
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: "Upgrade Cost"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                                    lineNumber: 587,
                                    columnNumber: 432
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `font-mono ${upgradeInfo.canAfford ? "text-foreground" : "text-red-400"}`,
                                    children: [
                                        "$",
                                        upgradeInfo.cost.toLocaleString()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                                    lineNumber: 587,
                                    columnNumber: 491
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                            lineNumber: 587,
                            columnNumber: 386
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleUpgrade,
                            onMouseDown: _TileInfoPanelButtonOnMouseDown,
                            disabled: !upgradeInfo.canAfford || upgradeInfo.isUnderConstruction || upgradeInfo.isAbandoned,
                            className: "w-full",
                            size: "sm",
                            children: [
                                "Upgrade to Level ",
                                upgradeInfo.currentLevel + 1
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                            lineNumber: 587,
                            columnNumber: 632
                        }, this),
                        !upgradeInfo.canAfford && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground text-center",
                            children: "Insufficient funds"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                            lineNumber: 587,
                            columnNumber: 918
                        }, this),
                        upgradeInfo.isUnderConstruction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground text-center",
                            children: "Building under construction"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                            lineNumber: 587,
                            columnNumber: 1034
                        }, this),
                        upgradeInfo.isAbandoned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground text-center",
                            children: "Building is abandoned"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                            lineNumber: 587,
                            columnNumber: 1151
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
                    lineNumber: 587,
                    columnNumber: 135
                }, this)
            ]
        }, void 0, true);
        $[129] = handleUpgrade;
        $[130] = upgradeInfo;
        $[131] = t58;
    } else {
        t58 = $[131];
    }
    let t59;
    if ($[132] !== t13 || $[133] !== t18 || $[134] !== t20 || $[135] !== t22 || $[136] !== t24 || $[137] !== t29 || $[138] !== t34 || $[139] !== t36 || $[140] !== t40 || $[141] !== t41 || $[142] !== t42 || $[143] !== t57 || $[144] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "space-y-3 text-sm",
            children: [
                t13,
                t18,
                t20,
                t22,
                t24,
                t25,
                t29,
                t34,
                t36,
                t40,
                t41,
                t42,
                t43,
                t44,
                t57,
                t58
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 596,
            columnNumber: 11
        }, this);
        $[132] = t13;
        $[133] = t18;
        $[134] = t20;
        $[135] = t22;
        $[136] = t24;
        $[137] = t29;
        $[138] = t34;
        $[139] = t36;
        $[140] = t40;
        $[141] = t41;
        $[142] = t42;
        $[143] = t57;
        $[144] = t58;
        $[145] = t59;
    } else {
        t59 = $[145];
    }
    let t60;
    if ($[146] !== t10 || $[147] !== t5 || $[148] !== t59 || $[149] !== t6) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: t5,
            style: t6,
            onClick: handleCardClick,
            children: [
                t10,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/panels/TileInfoPanel.tsx",
            lineNumber: 616,
            columnNumber: 11
        }, this);
        $[146] = t10;
        $[147] = t5;
        $[148] = t59;
        $[149] = t6;
        $[150] = t60;
    } else {
        t60 = $[150];
    }
    return t60;
}
_s(TileInfoPanel, "YXk2ejToYiCrzvs0M012AOXzTG0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"]
    ];
});
_c = TileInfoPanel;
function _TileInfoPanelButtonOnMouseDown(e_1) {
    return e_1.stopPropagation();
}
function _TileInfoPanelHandleCardClick(e_0) {
    e_0.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "TileInfoPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/game/panels/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$BudgetPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/panels/BudgetPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$StatisticsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/panels/StatisticsPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$SettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/panels/SettingsPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$AdvisorsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/panels/AdvisorsPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$SpriteTestPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/panels/SpriteTestPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$TileInfoPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/panels/TileInfoPanel.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_game_panels_e8bdf042._.js.map