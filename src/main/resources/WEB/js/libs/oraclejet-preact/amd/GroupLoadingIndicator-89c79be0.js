define(['exports', 'preact/jsx-runtime', 'preact/hooks', './classNames-49c3ba27', './keys-3892d3c6', './useId-e0c3517c', './useViewportIntersect-9bfb2df9', './TabbableModeContext-c9143afd', './useComponentTheme-9a36e65b', './useInteractionStyle-38f4bebf', './mergeInterpolations-497657fd', './flexitem-8052fa2b', './PRIVATE_List/themes/ListStyles.css', './UNSAFE_GroupedList/themes/redwood/GroupedListTheme', './Flex-0052275f', './Skeleton-064b51d7', './List-95327680'], (function(e,t,i,s,n,o,a,r,l,d,c,u,p,b,y,m,v){"use strict";e.GROUP_SELECTOR="[data-oj-listview-group]",e.GroupLoadingIndicator=()=>t.jsx(v.SkeletonContainer,{minimumCount:3,children:e=>{const i={paddingLeft:10*e+"px"};return t.jsxs(y.Flex,{height:"12x",align:"center",children:[t.jsx("span",{style:i}),t.jsx(m.Skeleton,{height:"4x"})]})}}),e.ListGroupHeader=function({ariaDescribedBy:e,children:y,itemKey:m,itemIndex:v,itemDepth:x,isFocused:f,isFocusRingVisible:h,isActive:g,isGridlineVisible:S,isExpandable:j,expandedKeys:I,viewportConfig:k}){const[E,L]=i.useState(!1),{classes:T,styles:C}=l.useComponentTheme(b.GroupedListRedwoodTheme),{interactionProps:H,applyHoverStyle:R,applyPseudoHoverStyle:w,applyActiveStyle:G}=d.useInteractionStyle(),V=[p.listGroupHeaderMultiVariantStyles({expandable:j?"isExpandable":"notExpandable",needsEventsHover:R?"isNeedsEventsHover":"notNeedsEventsHover",pseudoHover:w?"isPseudoHover":"notPseudoHover",active:G||g?"isActive":"notActive",focusRingVisible:h&&f?"isFocusRingVisible":"notFocusRingVisible",gridlineTop:v>0?"visible":"hidden",gridlineBottom:S?"visible":"hidden"})];E&&(V.push(T),V.push(C.stuckHeader));const A=s.classNames(V),F=c.mergeInterpolations([...Object.values(u.flexitemInterpolations)]),{class:N,...P}=F({alignSelf:"center",flex:"1 0 auto"});return a.useViewportIntersect({scroller:()=>j?null:null==k?document.body:k.scroller()},0,1,"[data-oj-key="+m+"]",(()=>{L(!1)}),(e=>{e.boundingClientRect.y!==e.intersectionRect.y&&L(!0)})),t.jsx("div",{id:o.useId(),role:"row","aria-rowindex":v+1,"aria-level":isNaN(x)?void 0:x+1,"data-oj-key":m,class:A,..."number"==typeof m&&{"data-oj-key-type":"number"},...H,children:t.jsx("div",{id:o.useId(),role:"gridcell","aria-describedby":e,"aria-colindex":1,"aria-expanded":n.containsKey(I,m),style:P,children:t.jsx(r.TabbableModeContext.Provider,{value:{isTabbable:!1},children:y})})})},e.STICKY_SELECTOR="[data-oj-listview-sticky]",e.excludeGroup=(e,t)=>{if(!t.all){const i=e.data.filter((e=>!e.metadata.isLeaf)).map((e=>e.metadata.key)),s=Array.from(t.keys.values()).filter((e=>!i.includes(e)));return{...t,keys:new Set(s)}}return t}}));
//# sourceMappingURL=GroupLoadingIndicator-89c79be0.js.map
