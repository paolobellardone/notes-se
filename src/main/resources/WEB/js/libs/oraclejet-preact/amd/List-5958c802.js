define(['exports', 'preact/jsx-runtime', 'preact/hooks', './classNames-08d99695', './mergeProps-bcfa6a92', './keys-cc1cb01d', './LoadMoreCollection-83413a59', './VirtualizedCollection-897516a5', 'preact/compat', './TabbableModeContext-a9c97640', './useId-c9578d26', './FocusTrap-eb3989cb', './useInteractionStyle-360d25a5', './mergeInterpolations-9ede4cf7', './flexitem-5db48325', './PRIVATE_List/themes/ListStyles.css', './collectionUtils-6740111c', './Skeleton-325116ff', './Flex-db3ddadb', './Selector-ad2af152', './ImageVars.css-17386400', './useTheme-45e3b0b3', './useTestId-f3b8b319', 'preact', './useSelection-2c9ff75a', './useCurrentKey-26170e5e', './useCollectionFocusRing-64636529', './useCollectionGestureContext-b082d378', './useItemAction-66d976c4', './useTabbableModeSet-b4c18d1a', './Inset-d7d99801', 'module'], (function(e,t,i,s,n,r,l,o,a,c,d,u,g,b,f,m,y,p,v,h,x,S,k,C,I,T,w,V,j,A,P,R){"use strict";const E=e=>{switch(e){case"listbox":return{list:"listbox",item:"presentation",cell:"option"};case"treegrid":return{list:"treegrid",item:"row",cell:"gridcell"};default:return{list:"grid",item:"row",cell:"gridcell"}}},F="[data-oj-key]";function K({children:e,context:n,itemDepth:r,isFocused:l,isFocusRingVisible:o,isActive:a,isGridlineVisible:y,isSelected:p,isTopGridlineVisible:v=!1,isTabbable:h=!1,role:x,selectionMode:S,suggestion:k,currentItemVariant:C}){const I=i.useRef(null),T=i.useMemo((()=>E(x)),[x]),w=n.metadata.key,V=n.index,j="option"===T.cell?{role:T.cell,"aria-posinset":V+1,"aria-setsize":-1}:{role:T.cell},{interactionProps:A,applyActiveStyle:P,applyHoverStyle:R,applyPseudoHoverStyle:F}=g.useInteractionStyle(),K=m.listItemMultiVariantStyles({selectable:M(S,p)?"isSelectable":"notSelectable",selected:p?"isSelected":"notSelected",selectedSingle:p&&"single"===S?"isSelectedSingle":"notSelectedSingle",needsEventsHover:R?"isNeedsEventsHover":"notNeedsEventsHover",pseudoHover:F?"isPseudoHover":"notPseudoHover",active:P||a?"isActive":"notActive",focusHighlight:"highlight"===C&&l?"isFocusHighlight":"notFocusHighlight",focusRingVisible:o&&l?"isFocusRingVisible":"notFocusRingVisible",gridlineTop:v?"visible":"hidden",gridlineBottom:!y&&("end"!==k||y||p&&"single"===S)?"hidden":"visible"}),L=s.classNames([K]),H=b.mergeInterpolations([...Object.values(f.flexitemInterpolations)]),{class:z,...D}=H({flex:"1 1 auto",alignSelf:"center"}),N=s.classNames([z,"multiple"===S&&m.listItemStyles.checkboxContainer]);return t.jsx("div",{"aria-rowindex":"grid"===x?V+1:void 0,"aria-level":r,"data-oj-key":w,class:L,ref:I,role:T.item,...k&&{"data-oj-suggestion":!0},..."number"==typeof w&&{"data-oj-key-type":"number"},...A,children:t.jsx("div",{id:d.useId(),style:D,class:N,"aria-posinset":"grid"===x?void 0:V+1,"aria-setsize":"grid"===x?void 0:-1,onKeyDown:e=>{!h||"ArrowDown"!==e.key&&"ArrowUp"!==e.key||e.stopPropagation()},"aria-colindex":"grid"===x?1:void 0,"aria-selected":"none"!==S?p:void 0,...j,children:t.jsx(c.TabbableModeContext.Provider,{value:{isTabbable:h},children:t.jsx(u.FocusTrap,{isDisabled:!h,restoreFocusRef:!1,children:e(n)})})})})}const M=(e,t)=>"none"!==e&&("multiple"===e||!t),L=a.memo(K,((e,t)=>!(!e||!t)&&(e.children===t.children&&e.isFocused===t.isFocused&&e.isFocusRingVisible===t.isFocusRingVisible&&e.isSelected===t.isSelected&&e.isTabbable===t.isTabbable&&e.isActive===t.isActive&&e.suggestion===t.suggestion&&e.isGridlineVisible===t.isGridlineVisible&&e.isTopGridlineVisible===t.isTopGridlineVisible&&y.compareListItemContext(e.context,t.context))));function H({children:e,minimumCount:n=1}){const[r,l]=i.useState(!1);i.useEffect((()=>{setTimeout((()=>{l(!0)}),50)}),[]);const o=s.classNames([m.skeletonStyles.container]);return r&&e?t.jsx("div",{class:o,role:"presentation",children:[...Array(n)].map(((t,i)=>e(i)))}):null}const z="oj-collection-sparkle";function D({sparkleHeight:e}){const{name:i}=S.useTheme();if(e<=0)return null;const n=e+"px",r=s.classNames([m.sparkleStyles.base]),l=s.classNames([m.sparkleStyles.container,z,"redwood"===i&&x.globalImages]);return t.jsx("div",{class:l,children:t.jsx("div",{class:r,style:{height:n}})},"sparkle")}const N=(e,t)=>{if(0===t)return null;return e.slice(0,t).reduce(((e,i,s)=>{const n=i.metadata.key;return s===t-1?e.set(n,"end"):e.set(n,!0),e}),new Map)},G=(e,t,i)=>{if(e&&t&&(e.scrollIntoViewIfNeeded?e.scrollIntoViewIfNeeded():e.scrollIntoView({block:"nearest"}),i>0)){const s=t.getBoundingClientRect(),n=e.getBoundingClientRect(),r=s.top+i-n.top;r>0&&(t.scrollTop=t.scrollTop-r)}},B=(e,t)=>{const i=t.data.map((e=>e.metadata.key)),s=i.indexOf(e.value.start),n=i.indexOf(e.value.end),r=Math.min(s,n),l=Math.max(s,n);return-1===r?{offset:0,count:t.totalSize}:i.slice(r,l+1)},O=e=>!(!e.parentElement||!e.parentElement.classList.contains("oj-listview-expander"));const _=(e,t)=>t??{scroller:()=>e.current},U={all:!1,keys:new Set},q=t.jsx(H,{minimumCount:25,children:()=>t.jsx(P.Inset,{variant:"listview",children:t.jsx(v.Flex,{height:"6x",align:"center",children:t.jsx(p.Skeleton,{height:"4x"})})})}),Y=t.jsx("div",{class:l.LOADMORE_STYLE_CLASS,children:t.jsx(H,{minimumCount:3,children:()=>t.jsx(P.Inset,{variant:"listview",children:t.jsx(v.Flex,{height:"6x",align:"center",children:t.jsx(p.Skeleton,{height:"4x"})})})})}),$=(e,t)=>{if(t){const i=Math.min(t.offset,e.offset+e.totalSize),s=i-e.offset;s>0&&(e={offset:i,data:e.data.slice(s,s+t.count),totalSize:e.totalSize,sizePrecision:e.sizePrecision})}return e};e.List=function({"aria-label":e,"aria-labelledby":a,allowTabbableMode:c=!0,children:d,currentKey:u,data:g,gridlines:b,loadingIndicator:f=q,onCurrentKeyChange:p,onLoadRange:v,onSelectionChange:x,onItemAction:S,rangeExtractor:C,role:P="grid",selectedKeys:R=U,selectionMode:M="none",viewportConfig:H,currentItemVariant:z="none",promotedSection:J,isVirtualized:Q=!1,customItemRenderer:W,scrollToVisibleOffset:X,testId:Z,scrollerRef:ee,reorderProps:te,contextMenuTriggerProps:ie,...se}){const ne=i.useRef(null),re=i.useRef(),[le,oe]=i.useState(!1),ae="none"===M?void 0:"multiple"===M,ce=null===g?void 0:"exact"===g.sizePrecision?g.totalSize:-1,de=s.classNames([m.listStyles.base]),ue=i.useCallback(((e,t)=>{g&&(re.current={detail:e,range:{offset:g.offset,count:g.data.length}},v(t))}),[g,v]),{eventProps:ge,showFocusRing:be,handleSelectionChange:fe}=((e,t,s="none",r,l,o,a,c,d="grid",u,g,b)=>{const f=i.useMemo((()=>E(d)),[d]),m=i.useRef(),{currentKeyProps:p}=T.useCurrentKey((e=>y.keyExtractor(e,F)),"multiple"!==s,y.getPrevNextKey(g.current,e,!0,F),y.getPrevNextKey(g.current,e,!1,F),void 0,void 0,e,r),[v,h]=w.useCollectionFocusRing(g,["ArrowUp","ArrowDown"]);i.useEffect((()=>{if(null!=e&&g.current){const t=y.findElementByKey(g.current,e,F);if(t){const e=g.current.getAttribute("aria-activedescendant"),i=t.querySelector(`[role=${f.cell}]`);if(i&&e!==i.id){g.current.setAttribute("aria-activedescendant",i.id);const e=c?.scroller(),s=u?u(g.current):0;G(t,null!=e?e:g.current,s)}}}}),[e,a,f.cell,c,u,g]);const x=i.useCallback((e=>{l&&(!1===e.value.all&&e.value.keys.size>0&&(m.current=Array.from(e.value.keys.values()).pop()),l(e))}),[m,l]),S=i.useCallback((e=>{if(a&&l){const t=B(e,a);Array.isArray(t)?("shiftSpace"===e.eventType?m.current=e.value.start:m.current=e.value.end,l({value:{all:!1,keys:new Set(t)},target:null})):b(e,t)}}),[a,l,b]),k=V.useCollectionGestureContext(),{selectionProps:C}=I.useSelection((t=>t===g.current?void 0===e?null:e:y.keyExtractor(t,F)),t,s,!1,"replace","embedded"===k,x,m.current,e,((e,t)=>y.getPrevNextKey(g.current,e,t,F)),void 0,(e=>{if(g.current){const t=y.findElementByKey(g.current,e,F);if(t){const e=c?.scroller(),i=u?u(g.current):0;G(t,null!=e?e:g.current,i)}}}),S),A=j.useItemAction(e,a,o,F,"embedded"===k);return{eventProps:n.mergeProps(p,h,C,A),showFocusRing:v,handleSelectionChange:x}})(u,R,M,p,x,S,g,H,P,X,ne,ue),{eventProps:me,isCurrentTabbableKey:ye}=((e,t,s,l,o,a)=>{const c=i.useRef(),[d,u]=A.useTabbableModeSet(l,(e=>O(e)?null:y.keyExtractor(e,F)),e,t),g=i.useCallback((()=>{if(l.current&&t&&(!s||d(void 0))){const e=c.current||y.getFirstVisibleKey(l.current,F);r.isKeyDefined(e)&&t({value:e})}}),[l,t,s,d]),b=i.useCallback((i=>{if(O(i.target)){l.current?.focus();const e=y.keyExtractor(i.target,F);t&&r.isKeyDefined(e)&&t({value:e})}else if(r.isKeyDefined(e)){if(l.current){const t=y.findElementByKey(l.current,e,F);if(t){const e=o?.scroller(),i=a?a(l.current):0;G(t,null!=e?e:l.current,i)}}}else t&&g()}),[e,g,t,l]),f=i.useCallback((e=>{const t=y.keyExtractor(e.target,F);r.isKeyDefined(t)&&(c.current=t)}),[]);return{eventProps:n.mergeProps(s?u:{},{onFocus:b,onPointerDown:f}),isCurrentTabbableKey:d}})(u,p,c,ne,H,X);if(g&&void 0!==re.current&&x){const e=B(re.current.detail,g);Array.isArray(e)&&x({value:{all:!1,keys:new Set(e)},target:null});const t=re.current?re.current.range:{offset:g.offset,count:g.data.length};g=$(g,t),re.current=void 0,v(t)}const{sparkleHeight:pe,suggestions:ve}=((e,t,s)=>{const[n,r]=i.useState(0),l=i.useMemo((()=>e&&t&&N(e.data,t.count)),[e,t]);return i.useEffect((()=>{if(l){const e=s.current?.querySelector("."+o.PLACEHOLDER_STYLE_CLASS);let t=e?.offsetHeight||0;const i=s.current?.querySelectorAll("[data-oj-suggestion]");i?.forEach((e=>t+=e.offsetHeight)),r(t)}}),[s,l]),{sparkleHeight:n,suggestions:l}})(g,J,ne),he=t.jsx(D,{sparkleHeight:pe}),xe=i.useCallback((e=>{const i=e.data,s="multiple"===M?()=>t.jsx(h.Selector,{onChange:fe,rowKey:i.metadata.key,selectedKeys:R}):void 0;return{index:e.index,data:i.data,metadata:i.metadata,selector:s}}),[M,R,fe]),Se=Q?K:L,ke=e=>{const i=xe(e),s=ve?.get(i.metadata.key),n=c&&ye(i.metadata.key),l=u===i.metadata.key&&!n,o=l&&le,a=r.containsKey(R,i.metadata.key),f=l&&be,m=(e,n)=>{return t.jsx(Se,{context:e,isFocused:l,isFocusRingVisible:f,isActive:o,isGridlineVisible:(r=i.index,"visible"===b?.item&&(r+1!==g?.totalSize||"visible"===b?.bottom)),isSelected:a,isTabbable:c&&ye(i.metadata.key),role:P,selectionMode:M,currentItemVariant:z,...s&&{suggestion:s},...0===i.index&&{isTopGridlineVisible:"visible"===b?.item&&"visible"===b?.top},...n,children:d},i.metadata.key);var r};if(W){return W({listItemContext:i,isFocused:l,isFocusRingVisible:f,isSelected:a,isTabbable:n,isActive:o,defaultListItem:m})}return m(i)};H=_(ne,H);const Ce=i.useCallback((e=>{" "===e.key&&r.isKeyDefined(u)&&"none"!==M&&oe(!0)}),[u,M,oe]),Ie=i.useCallback((()=>{oe(!1)}),[oe]);i.useImperativeHandle(ee,(()=>ne.current));const Te=k.useTestId(Z);return t.jsx("div",{...n.mergeProps(ge,me,ie||{},te||{},{onKeyDown:Ce,onKeyUp:Ie},se),...Te,role:P,"aria-rowcount":"grid"===P?ce:void 0,"aria-colcount":"grid"===P?1:void 0,ref:ne,class:de,tabIndex:0,"aria-label":e,"aria-labelledby":a,"aria-multiselectable":ae,children:null==g?f:Q?t.jsx(o.VirtualizedCollection,{data:g,itemSelector:F,loadMoreIndicator:Y,onLoadRange:v,rangeExtractor:C,suggestions:he,viewportConfig:H,children:ke}):t.jsx(l.LoadMoreCollection,{data:g.data,loadMoreIndicator:Y,hasMore:"atLeast"===g.sizePrecision&&g.data.length<=g.totalSize,onLoadMore:()=>{g&&v({offset:0,count:g.data.length+25})},suggestions:he,viewportConfig:H,children:ke})})},e.SkeletonContainer=H,e.excludeGroup=(e,t)=>{if(!t.all){const i=e.data.filter((e=>!e.metadata.isLeaf)).map((e=>e.metadata.key)),s=Array.from(t.keys.values()).filter((e=>!i.includes(e)));return{...t,keys:new Set(s)}}return t},e.scrollToVisible=G}));
//# sourceMappingURL=List-5958c802.js.map
