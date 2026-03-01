(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(151);
    if ($[0] !== "0dd8bfc80703dee2d5331272019cbe1d367b8ec26cea393bd4c21c302a68ae38") {
        for(let $i = 0; $i < 151; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0dd8bfc80703dee2d5331272019cbe1d367b8ec26cea393bd4c21c302a68ae38";
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
    let t4;
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
        t4 = [
            triggeredCheat,
            addMoney,
            addNotification,
            clearTriggeredCheat,
            gt
        ];
        $[11] = addMoney;
        $[12] = addNotification;
        $[13] = clearTriggeredCheat;
        $[14] = gt;
        $[15] = triggeredCheat;
        $[16] = t3;
        $[17] = t4;
    } else {
        t3 = $[16];
        t4 = $[17];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    const bargeDeliveryCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    let t5;
    if ($[18] !== addMoney || $[19] !== addNotification || $[20] !== gt || $[21] !== m) {
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
        $[18] = addMoney;
        $[19] = addNotification;
        $[20] = gt;
        $[21] = m;
        $[22] = t5;
    } else {
        t5 = $[22];
    }
    const handleBargeDelivery = t5;
    let t6;
    bb0: {
        if (!selectedTile) {
            t6 = null;
            break bb0;
        }
        let t7;
        if ($[23] !== state.portfolioCompanyTiles) {
            t7 = state.portfolioCompanyTiles || [];
            $[23] = state.portfolioCompanyTiles;
            $[24] = t7;
        } else {
            t7 = $[24];
        }
        let t8;
        if ($[25] !== selectedTile || $[26] !== t7) {
            let t9;
            if ($[28] !== selectedTile) {
                t9 = ({
                    "Game[(anonymous)()]": (item)=>item.x === selectedTile.x && item.y === selectedTile.y
                })["Game[(anonymous)()]"];
                $[28] = selectedTile;
                $[29] = t9;
            } else {
                t9 = $[29];
            }
            t8 = t7.find(t9);
            $[25] = selectedTile;
            $[26] = t7;
            $[27] = t8;
        } else {
            t8 = $[27];
        }
        const marker = t8;
        if (!marker) {
            t6 = null;
            break bb0;
        }
        let t9;
        if ($[30] !== state.pendingOpportunities) {
            t9 = state.pendingOpportunities || [];
            $[30] = state.pendingOpportunities;
            $[31] = t9;
        } else {
            t9 = $[31];
        }
        let t10;
        if ($[32] !== marker.companyId || $[33] !== t9) {
            let t11;
            if ($[35] !== marker.companyId) {
                t11 = ({
                    "Game[(anonymous)()]": (entry)=>entry.companyId === marker.companyId && entry.openRound
                })["Game[(anonymous)()]"];
                $[35] = marker.companyId;
                $[36] = t11;
            } else {
                t11 = $[36];
            }
            t10 = t9.find(t11);
            $[32] = marker.companyId;
            $[33] = t9;
            $[34] = t10;
        } else {
            t10 = $[34];
        }
        const pending = t10;
        const t11 = !!pending;
        const t12 = pending?.rivalInvestor;
        let t13;
        if ($[37] !== marker.companyId || $[38] !== marker.kind || $[39] !== marker.name || $[40] !== t11 || $[41] !== t12) {
            t13 = {
                companyId: marker.companyId,
                name: marker.name,
                kind: marker.kind,
                openRound: t11,
                rivalInvestor: t12
            };
            $[37] = marker.companyId;
            $[38] = marker.kind;
            $[39] = marker.name;
            $[40] = t11;
            $[41] = t12;
            $[42] = t13;
        } else {
            t13 = $[42];
        }
        t6 = t13;
    }
    const selectedActionTarget = t6;
    if (isMobile) {
        const t7 = selectedTile && state.selectedTool === "select" ? state.grid[selectedTile.y][selectedTile.x] : null;
        let t8;
        let t9;
        if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = ({
                "Game[<MobileTopBar>.onCloseTile]": ()=>setSelectedTile(null)
            })["Game[<MobileTopBar>.onCloseTile]"];
            t9 = ({
                "Game[<MobileTopBar>.onShare]": ()=>setShowShareModal(true)
            })["Game[<MobileTopBar>.onShare]"];
            $[43] = t8;
            $[44] = t9;
        } else {
            t8 = $[43];
            t9 = $[44];
        }
        let t10;
        if ($[45] !== onExit || $[46] !== state.services || $[47] !== t7) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mobile$2f$MobileTopBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileTopBar"], {
                selectedTile: t7,
                services: state.services,
                onCloseTile: t8,
                onShare: t9,
                onExit: onExit
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 325,
                columnNumber: 13
            }, this);
            $[45] = onExit;
            $[46] = state.services;
            $[47] = t7;
            $[48] = t10;
        } else {
            t10 = $[48];
        }
        let t11;
        if ($[49] !== multiplayer || $[50] !== showShareModal) {
            t11 = multiplayer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$multiplayer$2f$ShareModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShareModal"], {
                open: showShareModal,
                onOpenChange: setShowShareModal
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 335,
                columnNumber: 28
            }, this);
            $[49] = multiplayer;
            $[50] = showShareModal;
            $[51] = t11;
        } else {
            t11 = $[51];
        }
        let t12;
        if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = {
                paddingTop: "72px",
                paddingBottom: "76px"
            };
            $[52] = t12;
        } else {
            t12 = $[52];
        }
        let t13;
        if ($[53] !== handleBargeDelivery || $[54] !== overlayMode || $[55] !== selectedTile) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$CanvasIsometricGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasIsometricGrid"], {
                overlayMode: overlayMode,
                selectedTile: selectedTile,
                setSelectedTile: setSelectedTile,
                isMobile: true,
                onBargeDelivery: handleBargeDelivery
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 354,
                columnNumber: 13
            }, this);
            $[53] = handleBargeDelivery;
            $[54] = overlayMode;
            $[55] = selectedTile;
            $[56] = t13;
        } else {
            t13 = $[56];
        }
        let t14;
        if ($[57] !== copiedRoomLink || $[58] !== handleCopyRoomLink || $[59] !== isMultiplayer || $[60] !== players || $[61] !== roomCode) {
            t14 = isMultiplayer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        lineNumber: 364,
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
                                            lineNumber: 364,
                                            columnNumber: 444
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            className: "w-3 h-3 text-slate-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Game.tsx",
                                            lineNumber: 364,
                                            columnNumber: 491
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Game.tsx",
                                        lineNumber: 364,
                                        columnNumber: 302
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 364,
                            columnNumber: 165
                        }, this),
                        players.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-1 space-y-0.5",
                            children: players.map(_GamePlayersMap)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 364,
                            columnNumber: 577
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 364,
                    columnNumber: 75
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 364,
                columnNumber: 30
            }, this);
            $[57] = copiedRoomLink;
            $[58] = handleCopyRoomLink;
            $[59] = isMultiplayer;
            $[60] = players;
            $[61] = roomCode;
            $[62] = t14;
        } else {
            t14 = $[62];
        }
        let t15;
        if ($[63] !== t13 || $[64] !== t14) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 relative overflow-hidden",
                style: t12,
                children: [
                    t13,
                    t14
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 376,
                columnNumber: 13
            }, this);
            $[63] = t13;
            $[64] = t14;
            $[65] = t15;
        } else {
            t15 = $[65];
        }
        let t16;
        if ($[66] !== setActivePanel) {
            t16 = ({
                "Game[<MobileToolbar>.onOpenPanel]": (panel)=>setActivePanel(panel)
            })["Game[<MobileToolbar>.onOpenPanel]"];
            $[66] = setActivePanel;
            $[67] = t16;
        } else {
            t16 = $[67];
        }
        let t17;
        if ($[68] !== overlayMode || $[69] !== t16) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mobile$2f$MobileToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileToolbar"], {
                onOpenPanel: t16,
                overlayMode: overlayMode,
                setOverlayMode: setOverlayMode
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 395,
                columnNumber: 13
            }, this);
            $[68] = overlayMode;
            $[69] = t16;
            $[70] = t17;
        } else {
            t17 = $[70];
        }
        let t18;
        if ($[71] !== state.activePanel) {
            t18 = state.activePanel === "budget" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$BudgetPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BudgetPanel"], {}, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 404,
                columnNumber: 47
            }, this);
            $[71] = state.activePanel;
            $[72] = t18;
        } else {
            t18 = $[72];
        }
        let t19;
        if ($[73] !== state.activePanel) {
            t19 = state.activePanel === "statistics" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$StatisticsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatisticsPanel"], {}, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 412,
                columnNumber: 51
            }, this);
            $[73] = state.activePanel;
            $[74] = t19;
        } else {
            t19 = $[74];
        }
        let t20;
        if ($[75] !== state.activePanel) {
            t20 = state.activePanel === "advisors" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$AdvisorsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdvisorsPanel"], {}, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 420,
                columnNumber: 49
            }, this);
            $[75] = state.activePanel;
            $[76] = t20;
        } else {
            t20 = $[76];
        }
        let t21;
        if ($[77] !== state.activePanel) {
            t21 = state.activePanel === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$SettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SettingsPanel"], {}, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 428,
                columnNumber: 49
            }, this);
            $[77] = state.activePanel;
            $[78] = t21;
        } else {
            t21 = $[78];
        }
        let t22;
        if ($[79] !== setShowVinnieDialog || $[80] !== showVinnieDialog) {
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VinnieDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VinnieDialog"], {
                open: showVinnieDialog,
                onOpenChange: setShowVinnieDialog
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 436,
                columnNumber: 13
            }, this);
            $[79] = setShowVinnieDialog;
            $[80] = showVinnieDialog;
            $[81] = t22;
        } else {
            t22 = $[81];
        }
        const t23 = currentTip || "";
        let t24;
        if ($[82] !== isTipVisible || $[83] !== onTipContinue || $[84] !== onTipSkipAll || $[85] !== t23) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TipToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TipToast"], {
                message: t23,
                isVisible: isTipVisible,
                onContinue: onTipContinue,
                onSkipAll: onTipSkipAll
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 446,
                columnNumber: 13
            }, this);
            $[82] = isTipVisible;
            $[83] = onTipContinue;
            $[84] = onTipSkipAll;
            $[85] = t23;
            $[86] = t24;
        } else {
            t24 = $[86];
        }
        let t25;
        if ($[87] !== t10 || $[88] !== t11 || $[89] !== t15 || $[90] !== t17 || $[91] !== t18 || $[92] !== t19 || $[93] !== t20 || $[94] !== t21 || $[95] !== t22 || $[96] !== t24) {
            t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full overflow-hidden bg-background flex flex-col",
                    children: [
                        t10,
                        t11,
                        t15,
                        t17,
                        t18,
                        t19,
                        t20,
                        t21,
                        t22,
                        t24
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 457,
                    columnNumber: 30
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 457,
                columnNumber: 13
            }, this);
            $[87] = t10;
            $[88] = t11;
            $[89] = t15;
            $[90] = t17;
            $[91] = t18;
            $[92] = t19;
            $[93] = t20;
            $[94] = t21;
            $[95] = t22;
            $[96] = t24;
            $[97] = t25;
        } else {
            t25 = $[97];
        }
        return t25;
    }
    let t7;
    if ($[98] !== onExit || $[99] !== selectedActionTarget) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
            onExit: onExit,
            actionTarget: selectedActionTarget
        }, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 476,
            columnNumber: 10
        }, this);
        $[98] = onExit;
        $[99] = selectedActionTarget;
        $[100] = t7;
    } else {
        t7 = $[100];
    }
    let t8;
    let t9;
    if ($[101] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$TopBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TopBar"], {}, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 486,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$TopBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsPanel"], {}, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 487,
            columnNumber: 10
        }, this);
        $[101] = t8;
        $[102] = t9;
    } else {
        t8 = $[101];
        t9 = $[102];
    }
    let t10;
    if ($[103] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "Game[<CanvasIsometricGrid>.onNavigationComplete]": ()=>setNavigationTarget(null)
        })["Game[<CanvasIsometricGrid>.onNavigationComplete]"];
        $[103] = t10;
    } else {
        t10 = $[103];
    }
    let t11;
    if ($[104] !== handleBargeDelivery || $[105] !== navigationTarget || $[106] !== overlayMode || $[107] !== selectedTile) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$CanvasIsometricGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasIsometricGrid"], {
            overlayMode: overlayMode,
            selectedTile: selectedTile,
            setSelectedTile: setSelectedTile,
            navigationTarget: navigationTarget,
            onNavigationComplete: t10,
            onViewportChange: setViewport,
            onBargeDelivery: handleBargeDelivery
        }, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 505,
            columnNumber: 11
        }, this);
        $[104] = handleBargeDelivery;
        $[105] = navigationTarget;
        $[106] = overlayMode;
        $[107] = selectedTile;
        $[108] = t11;
    } else {
        t11 = $[108];
    }
    let t12;
    if ($[109] !== overlayMode) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$OverlayModeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OverlayModeToggle"], {
            overlayMode: overlayMode,
            setOverlayMode: setOverlayMode
        }, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 516,
            columnNumber: 11
        }, this);
        $[109] = overlayMode;
        $[110] = t12;
    } else {
        t12 = $[110];
    }
    let t13;
    if ($[111] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "Game[<MiniMap>.onNavigate]": (x, y)=>setNavigationTarget({
                    x,
                    y
                })
        })["Game[<MiniMap>.onNavigate]"];
        $[111] = t13;
    } else {
        t13 = $[111];
    }
    let t14;
    if ($[112] !== viewport) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$MiniMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MiniMap"], {
            onNavigate: t13,
            viewport: viewport
        }, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 536,
            columnNumber: 11
        }, this);
        $[112] = viewport;
        $[113] = t14;
    } else {
        t14 = $[113];
    }
    let t15;
    if ($[114] !== copiedRoomLink || $[115] !== handleCopyRoomLink || $[116] !== isMultiplayer || $[117] !== players || $[118] !== roomCode) {
        t15 = isMultiplayer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    lineNumber: 544,
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
                                        lineNumber: 544,
                                        columnNumber: 462
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                        className: "w-3.5 h-3.5 text-slate-400 hover:text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Game.tsx",
                                        lineNumber: 544,
                                        columnNumber: 513
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 544,
                                    columnNumber: 322
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 544,
                        columnNumber: 175
                    }, this),
                    players.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1.5 space-y-0.5",
                        children: players.map(_GamePlayersMap2)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 544,
                        columnNumber: 620
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 544,
                columnNumber: 73
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 544,
            columnNumber: 28
        }, this);
        $[114] = copiedRoomLink;
        $[115] = handleCopyRoomLink;
        $[116] = isMultiplayer;
        $[117] = players;
        $[118] = roomCode;
        $[119] = t15;
    } else {
        t15 = $[119];
    }
    let t16;
    if ($[120] !== t11 || $[121] !== t12 || $[122] !== t14 || $[123] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col ml-56",
            children: [
                t8,
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 relative overflow-visible",
                    children: [
                        t11,
                        t12,
                        t14,
                        t15
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 556,
                    columnNumber: 63
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 556,
            columnNumber: 11
        }, this);
        $[120] = t11;
        $[121] = t12;
        $[122] = t14;
        $[123] = t15;
        $[124] = t16;
    } else {
        t16 = $[124];
    }
    let t17;
    if ($[125] !== state.activePanel) {
        t17 = state.activePanel === "budget" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$BudgetPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BudgetPanel"], {}, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 567,
            columnNumber: 45
        }, this);
        $[125] = state.activePanel;
        $[126] = t17;
    } else {
        t17 = $[126];
    }
    let t18;
    if ($[127] !== state.activePanel) {
        t18 = state.activePanel === "statistics" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$StatisticsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatisticsPanel"], {}, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 575,
            columnNumber: 49
        }, this);
        $[127] = state.activePanel;
        $[128] = t18;
    } else {
        t18 = $[128];
    }
    let t19;
    if ($[129] !== state.activePanel) {
        t19 = state.activePanel === "advisors" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$AdvisorsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdvisorsPanel"], {}, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 583,
            columnNumber: 47
        }, this);
        $[129] = state.activePanel;
        $[130] = t19;
    } else {
        t19 = $[130];
    }
    let t20;
    if ($[131] !== state.activePanel) {
        t20 = state.activePanel === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$SettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SettingsPanel"], {}, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 591,
            columnNumber: 47
        }, this);
        $[131] = state.activePanel;
        $[132] = t20;
    } else {
        t20 = $[132];
    }
    let t21;
    if ($[133] !== setShowVinnieDialog || $[134] !== showVinnieDialog) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VinnieDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VinnieDialog"], {
            open: showVinnieDialog,
            onOpenChange: setShowVinnieDialog
        }, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 599,
            columnNumber: 11
        }, this);
        $[133] = setShowVinnieDialog;
        $[134] = showVinnieDialog;
        $[135] = t21;
    } else {
        t21 = $[135];
    }
    let t22;
    if ($[136] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CommandMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandMenu"], {}, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 608,
            columnNumber: 11
        }, this);
        $[136] = t22;
    } else {
        t22 = $[136];
    }
    const t23 = currentTip || "";
    let t24;
    if ($[137] !== isTipVisible || $[138] !== onTipContinue || $[139] !== onTipSkipAll || $[140] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TipToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TipToast"], {
            message: t23,
            isVisible: isTipVisible,
            onContinue: onTipContinue,
            onSkipAll: onTipSkipAll
        }, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 616,
            columnNumber: 11
        }, this);
        $[137] = isTipVisible;
        $[138] = onTipContinue;
        $[139] = onTipSkipAll;
        $[140] = t23;
        $[141] = t24;
    } else {
        t24 = $[141];
    }
    let t25;
    if ($[142] !== t16 || $[143] !== t17 || $[144] !== t18 || $[145] !== t19 || $[146] !== t20 || $[147] !== t21 || $[148] !== t24 || $[149] !== t7) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full min-h-[720px] overflow-hidden bg-background flex",
                children: [
                    t7,
                    t16,
                    t17,
                    t18,
                    t19,
                    t20,
                    t21,
                    t22,
                    t24
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 627,
                columnNumber: 28
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 627,
            columnNumber: 11
        }, this);
        $[142] = t16;
        $[143] = t17;
        $[144] = t18;
        $[145] = t19;
        $[146] = t20;
        $[147] = t21;
        $[148] = t24;
        $[149] = t7;
        $[150] = t25;
    } else {
        t25 = $[150];
    }
    return t25;
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
                lineNumber: 643,
                columnNumber: 94
            }, this),
            player_0.name
        ]
    }, player_0.id, true, {
        fileName: "[project]/src/components/Game.tsx",
        lineNumber: 643,
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
                lineNumber: 646,
                columnNumber: 94
            }, this),
            player.name
        ]
    }, player.id, true, {
        fileName: "[project]/src/components/Game.tsx",
        lineNumber: 646,
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

//# sourceMappingURL=src_components_5d692182._.js.map