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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$overlays$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/overlays.ts [app-client] (ecmascript)");
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
;
// Cargo type names for notifications
const CARGO_TYPE_NAMES = [
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('containers'),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('bulk materials'),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"])('oil')
];
function Game(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(142);
    if ($[0] !== "1038ff3455e2b7d3acacfbc8165a8c35c346912e5913c98923c7c6cc68fa27f5") {
        for(let $i = 0; $i < 142; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1038ff3455e2b7d3acacfbc8165a8c35c346912e5913c98923c7c6cc68fa27f5";
    }
    const { onExit } = t0;
    const gt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGT"])();
    const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gt$2d$next$2f$dist$2f$index$2e$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"])();
    const { state, setTool, setActivePanel, addMoney, addNotification, setSpeed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"])();
    const [overlayMode, setOverlayMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("none");
    const [selectedTile, setSelectedTile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [navigationTarget, setNavigationTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [viewport, setViewport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const isInitialMount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const { isMobileDevice, isSmallScreen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobile"])();
    const isMobile = isMobileDevice || isSmallScreen;
    const [showShareModal, setShowShareModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const multiplayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$MultiplayerContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMultiplayerOptional"])();
    const { triggeredCheat, showVinnieDialog, setShowVinnieDialog, clearTriggeredCheat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCheatCodes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCheatCodes"])();
    const { currentTip, isVisible: isTipVisible, onContinue: onTipContinue, onSkipAll: onTipSkipAll } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTipSystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTipSystem"])(state);
    const { isMultiplayer, roomCode, players } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMultiplayerSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMultiplayerSync"])();
    const { copied: copiedRoomLink, handleCopyRoomLink } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCopyRoomLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCopyRoomLink"])(roomCode, "coop");
    const initialSelectedToolRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const previousSelectedToolRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasCapturedInitialTool = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const currentSelectedToolRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(state.selectedTool);
    let t1;
    let t2;
    if ($[1] !== state.selectedTool) {
        t1 = ({
            "Game[useEffect()]": ()=>{
                currentSelectedToolRef.current = state.selectedTool;
            }
        })["Game[useEffect()]"];
        t2 = [
            state.selectedTool
        ];
        $[1] = state.selectedTool;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "Game[useEffect()]": ()=>{
                if (!hasCapturedInitialTool.current) {
                    const timeoutId = setTimeout({
                        "Game[useEffect() > setTimeout()]": ()=>{
                            initialSelectedToolRef.current = currentSelectedToolRef.current;
                            previousSelectedToolRef.current = currentSelectedToolRef.current;
                            hasCapturedInitialTool.current = true;
                        }
                    }["Game[useEffect() > setTimeout()]"], 100);
                    return ()=>clearTimeout(timeoutId);
                }
            }
        })["Game[useEffect()]"];
        t4 = [];
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[6] !== state.selectedTool) {
        t5 = ({
            "Game[useEffect()]": ()=>{
                if (isInitialMount.current) {
                    isInitialMount.current = false;
                    return;
                }
                if (state.selectedTool === "select") {
                    setTimeout({
                        "Game[useEffect() > setTimeout()]": ()=>{
                            setOverlayMode("none");
                        }
                    }["Game[useEffect() > setTimeout()]"], 0);
                    previousSelectedToolRef.current = state.selectedTool;
                    return;
                }
                if (state.selectedTool === "subway" || state.selectedTool === "subway_station") {
                    setTimeout({
                        "Game[useEffect() > setTimeout()]": ()=>{
                            setOverlayMode("subway");
                        }
                    }["Game[useEffect() > setTimeout()]"], 0);
                    previousSelectedToolRef.current = state.selectedTool;
                    return;
                }
                if (!hasCapturedInitialTool.current) {
                    return;
                }
                if (initialSelectedToolRef.current !== null && initialSelectedToolRef.current === state.selectedTool) {
                    return;
                }
                if (previousSelectedToolRef.current === state.selectedTool) {
                    return;
                }
                previousSelectedToolRef.current = state.selectedTool;
                setTimeout({
                    "Game[useEffect() > setTimeout()]": ()=>{
                        setOverlayMode((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$overlays$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverlayForTool"])(state.selectedTool));
                    }
                }["Game[useEffect() > setTimeout()]"], 0);
            }
        })["Game[useEffect()]"];
        t6 = [
            state.selectedTool
        ];
        $[6] = state.selectedTool;
        $[7] = t5;
        $[8] = t6;
    } else {
        t5 = $[7];
        t6 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    let t8;
    if ($[9] !== overlayMode || $[10] !== selectedTile || $[11] !== setActivePanel || $[12] !== setSpeed || $[13] !== setTool || $[14] !== state.activePanel || $[15] !== state.selectedTool || $[16] !== state.speed) {
        t7 = ({
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
        t8 = [
            state.activePanel,
            state.selectedTool,
            state.speed,
            selectedTile,
            setActivePanel,
            setTool,
            setSpeed,
            overlayMode
        ];
        $[9] = overlayMode;
        $[10] = selectedTile;
        $[11] = setActivePanel;
        $[12] = setSpeed;
        $[13] = setTool;
        $[14] = state.activePanel;
        $[15] = state.selectedTool;
        $[16] = state.speed;
        $[17] = t7;
        $[18] = t8;
    } else {
        t7 = $[17];
        t8 = $[18];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t9;
    if ($[19] !== addMoney || $[20] !== addNotification || $[21] !== clearTriggeredCheat || $[22] !== gt || $[23] !== triggeredCheat) {
        t9 = ({
            "Game[useEffect()]": ()=>{
                if (!triggeredCheat) {
                    return;
                }
                bb94: switch(triggeredCheat.type){
                    case "konami":
                        {
                            addMoney(triggeredCheat.amount);
                            addNotification(gt("Retro Cheat Activated!"), gt("Your accountants are confused but not complaining. You received $50,000!"), "trophy");
                            clearTriggeredCheat();
                            break bb94;
                        }
                    case "motherlode":
                        {
                            addMoney(triggeredCheat.amount);
                            addNotification(gt("Motherlode!"), gt("Your treasury just got a lot heavier. You received $1,000,000!"), "trophy");
                            clearTriggeredCheat();
                            break bb94;
                        }
                    case "vinnie":
                        {
                            clearTriggeredCheat();
                        }
                }
            }
        })["Game[useEffect()]"];
        $[19] = addMoney;
        $[20] = addNotification;
        $[21] = clearTriggeredCheat;
        $[22] = gt;
        $[23] = triggeredCheat;
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    let t10;
    if ($[25] !== addMoney || $[26] !== addNotification || $[27] !== clearTriggeredCheat || $[28] !== triggeredCheat) {
        t10 = [
            triggeredCheat,
            addMoney,
            addNotification,
            clearTriggeredCheat
        ];
        $[25] = addMoney;
        $[26] = addNotification;
        $[27] = clearTriggeredCheat;
        $[28] = triggeredCheat;
        $[29] = t10;
    } else {
        t10 = $[29];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t9, t10);
    const bargeDeliveryCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    let t11;
    if ($[30] !== addMoney || $[31] !== addNotification || $[32] !== gt || $[33] !== m) {
        t11 = ({
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
        $[30] = addMoney;
        $[31] = addNotification;
        $[32] = gt;
        $[33] = m;
        $[34] = t11;
    } else {
        t11 = $[34];
    }
    const handleBargeDelivery = t11;
    if (isMobile) {
        const t12 = selectedTile && state.selectedTool === "select" ? state.grid[selectedTile.y][selectedTile.x] : null;
        let t13;
        let t14;
        if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = ({
                "Game[<MobileTopBar>.onCloseTile]": ()=>setSelectedTile(null)
            })["Game[<MobileTopBar>.onCloseTile]"];
            t14 = ({
                "Game[<MobileTopBar>.onShare]": ()=>setShowShareModal(true)
            })["Game[<MobileTopBar>.onShare]"];
            $[35] = t13;
            $[36] = t14;
        } else {
            t13 = $[35];
            t14 = $[36];
        }
        let t15;
        if ($[37] !== onExit || $[38] !== state.services || $[39] !== t12) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mobile$2f$MobileTopBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileTopBar"], {
                selectedTile: t12,
                services: state.services,
                onCloseTile: t13,
                onShare: t14,
                onExit: onExit
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 344,
                columnNumber: 13
            }, this);
            $[37] = onExit;
            $[38] = state.services;
            $[39] = t12;
            $[40] = t15;
        } else {
            t15 = $[40];
        }
        let t16;
        if ($[41] !== multiplayer || $[42] !== showShareModal) {
            t16 = multiplayer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$multiplayer$2f$ShareModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShareModal"], {
                open: showShareModal,
                onOpenChange: setShowShareModal
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 354,
                columnNumber: 28
            }, this);
            $[41] = multiplayer;
            $[42] = showShareModal;
            $[43] = t16;
        } else {
            t16 = $[43];
        }
        let t17;
        if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = {
                paddingTop: "72px",
                paddingBottom: "76px"
            };
            $[44] = t17;
        } else {
            t17 = $[44];
        }
        let t18;
        if ($[45] !== handleBargeDelivery || $[46] !== overlayMode || $[47] !== selectedTile) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$CanvasIsometricGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasIsometricGrid"], {
                overlayMode: overlayMode,
                selectedTile: selectedTile,
                setSelectedTile: setSelectedTile,
                isMobile: true,
                onBargeDelivery: handleBargeDelivery
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 373,
                columnNumber: 13
            }, this);
            $[45] = handleBargeDelivery;
            $[46] = overlayMode;
            $[47] = selectedTile;
            $[48] = t18;
        } else {
            t18 = $[48];
        }
        let t19;
        if ($[49] !== copiedRoomLink || $[50] !== handleCopyRoomLink || $[51] !== isMultiplayer || $[52] !== players || $[53] !== roomCode) {
            t19 = isMultiplayer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        lineNumber: 383,
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
                                            lineNumber: 383,
                                            columnNumber: 444
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            className: "w-3 h-3 text-slate-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Game.tsx",
                                            lineNumber: 383,
                                            columnNumber: 491
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Game.tsx",
                                        lineNumber: 383,
                                        columnNumber: 302
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 383,
                            columnNumber: 165
                        }, this),
                        players.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-1 space-y-0.5",
                            children: players.map(_GamePlayersMap)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 383,
                            columnNumber: 577
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 383,
                    columnNumber: 75
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 383,
                columnNumber: 30
            }, this);
            $[49] = copiedRoomLink;
            $[50] = handleCopyRoomLink;
            $[51] = isMultiplayer;
            $[52] = players;
            $[53] = roomCode;
            $[54] = t19;
        } else {
            t19 = $[54];
        }
        let t20;
        if ($[55] !== t18 || $[56] !== t19) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 relative overflow-hidden",
                style: t17,
                children: [
                    t18,
                    t19
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 395,
                columnNumber: 13
            }, this);
            $[55] = t18;
            $[56] = t19;
            $[57] = t20;
        } else {
            t20 = $[57];
        }
        let t21;
        if ($[58] !== setActivePanel) {
            t21 = ({
                "Game[<MobileToolbar>.onOpenPanel]": (panel)=>setActivePanel(panel)
            })["Game[<MobileToolbar>.onOpenPanel]"];
            $[58] = setActivePanel;
            $[59] = t21;
        } else {
            t21 = $[59];
        }
        let t22;
        if ($[60] !== overlayMode || $[61] !== t21) {
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mobile$2f$MobileToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileToolbar"], {
                onOpenPanel: t21,
                overlayMode: overlayMode,
                setOverlayMode: setOverlayMode
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 414,
                columnNumber: 13
            }, this);
            $[60] = overlayMode;
            $[61] = t21;
            $[62] = t22;
        } else {
            t22 = $[62];
        }
        let t23;
        if ($[63] !== state.activePanel) {
            t23 = state.activePanel === "budget" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$BudgetPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BudgetPanel"], {}, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 423,
                columnNumber: 47
            }, this);
            $[63] = state.activePanel;
            $[64] = t23;
        } else {
            t23 = $[64];
        }
        let t24;
        if ($[65] !== state.activePanel) {
            t24 = state.activePanel === "statistics" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$StatisticsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatisticsPanel"], {}, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 431,
                columnNumber: 51
            }, this);
            $[65] = state.activePanel;
            $[66] = t24;
        } else {
            t24 = $[66];
        }
        let t25;
        if ($[67] !== state.activePanel) {
            t25 = state.activePanel === "advisors" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$AdvisorsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdvisorsPanel"], {}, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 439,
                columnNumber: 49
            }, this);
            $[67] = state.activePanel;
            $[68] = t25;
        } else {
            t25 = $[68];
        }
        let t26;
        if ($[69] !== state.activePanel) {
            t26 = state.activePanel === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$SettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SettingsPanel"], {}, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 447,
                columnNumber: 49
            }, this);
            $[69] = state.activePanel;
            $[70] = t26;
        } else {
            t26 = $[70];
        }
        let t27;
        if ($[71] !== setShowVinnieDialog || $[72] !== showVinnieDialog) {
            t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VinnieDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VinnieDialog"], {
                open: showVinnieDialog,
                onOpenChange: setShowVinnieDialog
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 455,
                columnNumber: 13
            }, this);
            $[71] = setShowVinnieDialog;
            $[72] = showVinnieDialog;
            $[73] = t27;
        } else {
            t27 = $[73];
        }
        const t28 = currentTip || "";
        let t29;
        if ($[74] !== isTipVisible || $[75] !== onTipContinue || $[76] !== onTipSkipAll || $[77] !== t28) {
            t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TipToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TipToast"], {
                message: t28,
                isVisible: isTipVisible,
                onContinue: onTipContinue,
                onSkipAll: onTipSkipAll
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 465,
                columnNumber: 13
            }, this);
            $[74] = isTipVisible;
            $[75] = onTipContinue;
            $[76] = onTipSkipAll;
            $[77] = t28;
            $[78] = t29;
        } else {
            t29 = $[78];
        }
        let t30;
        if ($[79] !== t15 || $[80] !== t16 || $[81] !== t20 || $[82] !== t22 || $[83] !== t23 || $[84] !== t24 || $[85] !== t25 || $[86] !== t26 || $[87] !== t27 || $[88] !== t29) {
            t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full overflow-hidden bg-background flex flex-col",
                    children: [
                        t15,
                        t16,
                        t20,
                        t22,
                        t23,
                        t24,
                        t25,
                        t26,
                        t27,
                        t29
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 476,
                    columnNumber: 30
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 476,
                columnNumber: 13
            }, this);
            $[79] = t15;
            $[80] = t16;
            $[81] = t20;
            $[82] = t22;
            $[83] = t23;
            $[84] = t24;
            $[85] = t25;
            $[86] = t26;
            $[87] = t27;
            $[88] = t29;
            $[89] = t30;
        } else {
            t30 = $[89];
        }
        return t30;
    }
    let t12;
    if ($[90] !== onExit) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
            onExit: onExit
        }, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 495,
            columnNumber: 11
        }, this);
        $[90] = onExit;
        $[91] = t12;
    } else {
        t12 = $[91];
    }
    let t13;
    let t14;
    if ($[92] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$TopBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TopBar"], {}, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 504,
            columnNumber: 11
        }, this);
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$TopBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsPanel"], {}, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 505,
            columnNumber: 11
        }, this);
        $[92] = t13;
        $[93] = t14;
    } else {
        t13 = $[92];
        t14 = $[93];
    }
    let t15;
    if ($[94] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = ({
            "Game[<CanvasIsometricGrid>.onNavigationComplete]": ()=>setNavigationTarget(null)
        })["Game[<CanvasIsometricGrid>.onNavigationComplete]"];
        $[94] = t15;
    } else {
        t15 = $[94];
    }
    let t16;
    if ($[95] !== handleBargeDelivery || $[96] !== navigationTarget || $[97] !== overlayMode || $[98] !== selectedTile) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$CanvasIsometricGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasIsometricGrid"], {
            overlayMode: overlayMode,
            selectedTile: selectedTile,
            setSelectedTile: setSelectedTile,
            navigationTarget: navigationTarget,
            onNavigationComplete: t15,
            onViewportChange: setViewport,
            onBargeDelivery: handleBargeDelivery
        }, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 523,
            columnNumber: 11
        }, this);
        $[95] = handleBargeDelivery;
        $[96] = navigationTarget;
        $[97] = overlayMode;
        $[98] = selectedTile;
        $[99] = t16;
    } else {
        t16 = $[99];
    }
    let t17;
    if ($[100] !== overlayMode) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$OverlayModeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OverlayModeToggle"], {
            overlayMode: overlayMode,
            setOverlayMode: setOverlayMode
        }, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 534,
            columnNumber: 11
        }, this);
        $[100] = overlayMode;
        $[101] = t17;
    } else {
        t17 = $[101];
    }
    let t18;
    if ($[102] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = ({
            "Game[<MiniMap>.onNavigate]": (x, y)=>setNavigationTarget({
                    x,
                    y
                })
        })["Game[<MiniMap>.onNavigate]"];
        $[102] = t18;
    } else {
        t18 = $[102];
    }
    let t19;
    if ($[103] !== viewport) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$MiniMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MiniMap"], {
            onNavigate: t18,
            viewport: viewport
        }, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 554,
            columnNumber: 11
        }, this);
        $[103] = viewport;
        $[104] = t19;
    } else {
        t19 = $[104];
    }
    let t20;
    if ($[105] !== copiedRoomLink || $[106] !== handleCopyRoomLink || $[107] !== isMultiplayer || $[108] !== players || $[109] !== roomCode) {
        t20 = isMultiplayer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    lineNumber: 562,
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
                                        lineNumber: 562,
                                        columnNumber: 462
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                        className: "w-3.5 h-3.5 text-slate-400 hover:text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Game.tsx",
                                        lineNumber: 562,
                                        columnNumber: 513
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 562,
                                    columnNumber: 322
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 562,
                        columnNumber: 175
                    }, this),
                    players.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1.5 space-y-0.5",
                        children: players.map(_GamePlayersMap2)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 562,
                        columnNumber: 620
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 562,
                columnNumber: 73
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 562,
            columnNumber: 28
        }, this);
        $[105] = copiedRoomLink;
        $[106] = handleCopyRoomLink;
        $[107] = isMultiplayer;
        $[108] = players;
        $[109] = roomCode;
        $[110] = t20;
    } else {
        t20 = $[110];
    }
    let t21;
    if ($[111] !== t16 || $[112] !== t17 || $[113] !== t19 || $[114] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col ml-56",
            children: [
                t13,
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 relative overflow-visible",
                    children: [
                        t16,
                        t17,
                        t19,
                        t20
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 574,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 574,
            columnNumber: 11
        }, this);
        $[111] = t16;
        $[112] = t17;
        $[113] = t19;
        $[114] = t20;
        $[115] = t21;
    } else {
        t21 = $[115];
    }
    let t22;
    if ($[116] !== state.activePanel) {
        t22 = state.activePanel === "budget" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$BudgetPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BudgetPanel"], {}, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 585,
            columnNumber: 45
        }, this);
        $[116] = state.activePanel;
        $[117] = t22;
    } else {
        t22 = $[117];
    }
    let t23;
    if ($[118] !== state.activePanel) {
        t23 = state.activePanel === "statistics" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$StatisticsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatisticsPanel"], {}, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 593,
            columnNumber: 49
        }, this);
        $[118] = state.activePanel;
        $[119] = t23;
    } else {
        t23 = $[119];
    }
    let t24;
    if ($[120] !== state.activePanel) {
        t24 = state.activePanel === "advisors" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$AdvisorsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdvisorsPanel"], {}, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 601,
            columnNumber: 47
        }, this);
        $[120] = state.activePanel;
        $[121] = t24;
    } else {
        t24 = $[121];
    }
    let t25;
    if ($[122] !== state.activePanel) {
        t25 = state.activePanel === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$panels$2f$SettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SettingsPanel"], {}, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 609,
            columnNumber: 47
        }, this);
        $[122] = state.activePanel;
        $[123] = t25;
    } else {
        t25 = $[123];
    }
    let t26;
    if ($[124] !== setShowVinnieDialog || $[125] !== showVinnieDialog) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VinnieDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VinnieDialog"], {
            open: showVinnieDialog,
            onOpenChange: setShowVinnieDialog
        }, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 617,
            columnNumber: 11
        }, this);
        $[124] = setShowVinnieDialog;
        $[125] = showVinnieDialog;
        $[126] = t26;
    } else {
        t26 = $[126];
    }
    let t27;
    if ($[127] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CommandMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandMenu"], {}, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 626,
            columnNumber: 11
        }, this);
        $[127] = t27;
    } else {
        t27 = $[127];
    }
    const t28 = currentTip || "";
    let t29;
    if ($[128] !== isTipVisible || $[129] !== onTipContinue || $[130] !== onTipSkipAll || $[131] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TipToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TipToast"], {
            message: t28,
            isVisible: isTipVisible,
            onContinue: onTipContinue,
            onSkipAll: onTipSkipAll
        }, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 634,
            columnNumber: 11
        }, this);
        $[128] = isTipVisible;
        $[129] = onTipContinue;
        $[130] = onTipSkipAll;
        $[131] = t28;
        $[132] = t29;
    } else {
        t29 = $[132];
    }
    let t30;
    if ($[133] !== t12 || $[134] !== t21 || $[135] !== t22 || $[136] !== t23 || $[137] !== t24 || $[138] !== t25 || $[139] !== t26 || $[140] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full min-h-[720px] overflow-hidden bg-background flex",
                children: [
                    t12,
                    t21,
                    t22,
                    t23,
                    t24,
                    t25,
                    t26,
                    t27,
                    t29
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 645,
                columnNumber: 28
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 645,
            columnNumber: 11
        }, this);
        $[133] = t12;
        $[134] = t21;
        $[135] = t22;
        $[136] = t23;
        $[137] = t24;
        $[138] = t25;
        $[139] = t26;
        $[140] = t29;
        $[141] = t30;
    } else {
        t30 = $[141];
    }
    return t30;
}
_s(Game, "RsdseHEAFAE5AwfypxTD7oI1lWI=", false, function() {
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
                lineNumber: 661,
                columnNumber: 94
            }, this),
            player_0.name
        ]
    }, player_0.id, true, {
        fileName: "[project]/src/components/Game.tsx",
        lineNumber: 661,
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
                lineNumber: 664,
                columnNumber: 94
            }, this),
            player.name
        ]
    }, player.id, true, {
        fileName: "[project]/src/components/Game.tsx",
        lineNumber: 664,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Game");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_f89c2dec._.js.map