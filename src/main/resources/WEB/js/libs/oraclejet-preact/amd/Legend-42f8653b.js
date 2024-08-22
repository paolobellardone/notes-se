define(['exports', 'preact/jsx-runtime', 'preact/hooks', './useLegendContextMenu-5b1ca75b', './useVisEvents-ac97d087', './mergeProps-bcfa6a92', './useItemFocus-75d6510d', './UNSAFE_Legend/themes/LegendStyles.css', './useCssVars-7efb591d', './classNames-08d99695', './useTestId-f3b8b319', './useVisTouchResponse-36416652', './stringUtils-0ae982c2'], (function(e,t,n,o,s,i,d,r,a,I,m,u,l){"use strict";function c(e,t){const{itemIdx:n}=e;return-1==n?t[t.length-1]:t[n]}function f(e,t){let n=e.itemIdx;return-1==n&&(n=t.length-1),n=Math.min(t.length-1,n+1),"off"!==t[n].actionable?{sectionIdx:0,itemIdx:n}:n===t.length-1?(n-=1,{sectionIdx:0,itemIdx:n}):f({sectionIdx:0,itemIdx:n},t)}function g(e,t){let n=e.itemIdx;return-1==n&&(n=t.length-1),n=Math.max(0,n-1),"off"!==t[n].actionable?{sectionIdx:0,itemIdx:n}:g({sectionIdx:0,itemIdx:n},t)}function x(e){return{getItem:t=>c(t,e),getDetailFromInfo:t=>{if(!t)return{itemId:void 0,data:void 0};const n=c(t,e);return{itemId:n.id,data:n}},getPrevItemInfo:t=>g(t,e),getNextItemInfo:t=>f(t,e)}}e.Legend=function({orientation:e="horizontal",items:c,isReadOnly:f=!0,onItemAction:g,onItemHover:h,onItemFocus:p,testId:v,contextMenuConfig:y,hideAndShowBehavior:b="off",hoverBehavior:R="none",...S}){const C=m.useTestId(v),F=n.useRef(null),L=n.useRef(),{getItem:P,getDetailFromInfo:M,getPrevItemInfo:V,getNextItemInfo:D}=x(c),{resolvedVars:W,cssContent:A}=a.useCssVars(o.legendVars),N=o.getLegendTextStyle({fontStyle:S.textFontStyle,fontSize:S.textFontSize?.toString(),fontWeight:S.textFontWeight?.toString(),fontFamily:S.textFontFamily},W),T=o.getIsLegendItemActionable(c,f),{textMeasureContent:B,layoutInfo:j}=o.useLegendLayout({resolvedVars:W,items:c,rootRef:F,rootDimsRef:L,orientation:e,legendFontStylesObj:N,symbolWidth:S.symbolWidth}),{touchResponse:w,touchResponseStyle:E}=u.useVisTouchResponse({type:"touchStart"}),{focusedItemInfo:O,hoveredItemInfo:z,onContextMenuDismissed:U,activeId:H,eventsProps:k}=s.useVisEvent(w,!f,T,((e,t,n)=>o.getKeyUpHandler(e,t,n,null!=S.hiddenIds)),M,V,D,g,h,p,o.isEqualItem,o.getItemInfo,{itemIdx:0,sectionIdx:0},null!=S.hiddenIds),{focusedItemRef:q}=d.useItemFocus(O),G=o.getDatatipText(c,P,O,z),{datatipContent:K,datatipProps:{"aria-describedby":_,...J}}=o.useLegendDatatip({text:G,rootDimsRef:L,focusedItemInfo:O,focusedItemRef:q,touchResponse:w}),Q=o.getAriaProps(f,S["aria-label"],S.hiddenIds,l.merge([S["aria-describedby"],_]),S["aria-labelledby"]),{contextMenuContent:X,contextMenuProps:Y}=o.useLegendContextMenu({rootRef:F,contextMenuConfig:y,focusedItemInfo:O,items:c,isReadOnly:f,onContextMenuDismissed:U}),Z=i.mergeProps(k,J,Y),{itemsPerCol:$,itemsPerRow:ee}=o.getGridNums(c.length,j),{legendStyle:te,renderedLegendStyle:ne,preRenderedLegendStyle:oe}=r.styles,se="vertical"===e||!!j;return t.jsxs("div",{ref:F,tabIndex:f?void 0:0,role:"application",class:I.classNames([te,se?ne:oe]),style:E,...C,...Q,...Z,"aria-activedescendant":H,children:[se?t.jsx(o.BaseLegend,{...S,focusedItemRef:q,items:c,isReadOnly:f,orientation:e,sectionIdx:0,itemsPerRow:ee,itemsPerCol:$,itemWidth:j?.isWrapped?j?.maxItemWidth:void 0,focusedItemInfo:O,hoveredItemInfo:z,activeId:H,hideAndShowBehavior:b,hoverBehavior:R}):null,K,B,A,X]})}}));
//# sourceMappingURL=Legend-42f8653b.js.map
