define(['exports', 'preact/hooks', './mergeProps-bcfa6a92', './collectionUtils-17f5cc64', './useCollectionFocusRing-66a6fc12', './useCurrentKey-a993db56', './useId-c9578d26', './useReorderableContext-a5453bd7', './useContextMenuGesture-d55fbea5'], (function(e,t,r,n,o,s,u,c,i){"use strict";const a='[role="tab"]',l="data-oj-removable",f={mouse:{initialFocus:"menu",placement:"bottom-start",offsetValue:0},keyboard:{initialFocus:"firstItem",placement:"bottom-start",offsetValue:0},touch:{initialFocus:"menu",placement:"end",offsetValue:40}},m={isOpen:!1,initialFocus:"menu",placement:"bottom-start",offsetValue:0,anchorRef:{current:null}};const y=(e,t,r)=>{const o=e.closest(t);if(o){if(o.hasAttribute(l)){const t=e.closest(r);if(t&&o?.contains(t))return null}return n.getKey(o)}return null},d=(e,t,r)=>{const n=r.indexOf(e);if(-1===n)return t[0];let o=0,s=!1;for(n===r.length-1?(o=n-1,s=!0):o=n+1;o!==n&&o>-1&&o<r.length;){const e=r[o];if(-1!==t.indexOf(e))return e;s?o--:o++}return t[0]};e.useTabBar=function(e){const{children:b,class:g,display:p,edge:K="top",selection:x,onSelect:v,onRemove:h,ref:R,size:k,contextMenuConfig:C}=e,E=t.useRef(null),P=R||E,A=u.useId(),[F,S]=t.useState(x),[I,B]=t.useState(!1),D=A+"_",V=t.useRef();t.useEffect((()=>{if(P.current){const e=Array.from(P.current.querySelectorAll(a)).map((e=>n.getKey(e)));F&&!e.includes(F)&&(V.current?S(d(F,e,V.current)):S(e[0])),V.current=e}}),[b,F,P]);const[w,M]=o.useCollectionFocusRing(P,["ArrowRight","ArrowLeft","Home","End"]),O=c.useReorderableContext(),{currentKeyProps:H}=s.useCurrentKey((e=>h?y(e,a,'[data-oj-tabbar-item-remove-icon="true"]'):n.keyExtractor(e,a)),!1,void 0,void 0,n.getPrevNextKeyUsingRef(P,F,!0,a),n.getPrevNextKeyUsingRef(P,F,!1,a),F,(e=>{const t=e.value;S(t),B(!1)}));t.useEffect((()=>{O&&(O.currentItemKey.current=F)}),[F,O]);const[U,j]=t.useState(),[q,z]=t.useState(m),{triggerProps:G}=i.useContextMenuGesture((({gesture:e,anchor:t,target:r})=>{let o=t;if("keyboard"===e){const e=n.findElementByKey(P.current,F,a);o=e||t;j({itemKey:F})}else{const e=n.keyExtractor(r,a);j({itemKey:e})}z({...f[e],anchorRef:{current:o},isOpen:!0})}),{isDisabled:!C}),N=t.useCallback((e=>{"dismissed"!==e.reason&&"itemAction"!==e.reason||(S(U?.itemKey),P.current?.focus()),z({...m})}),[P,U?.itemKey]),T=r.mergeProps({onKeyDown:e=>{if(P.current&&F){if("Home"===e.key||"End"===e.key){const t=Array.from(P.current.querySelectorAll(a),(e=>n.getKey(e)));e.preventDefault(),S?.(t["Home"===e.key?0:t.length-1])}if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),v?.({value:F})),"Delete"===e.key){n.findElementByKey(P.current,F,a).hasAttribute(l)&&h?.({value:F})}"Escape"===e.key&&B(!0)}},onFocus:()=>{if(P.current&&void 0===F){const e=n.getFirstVisibleKey(P.current,a);e&&S(e)}}},G);return{rootProps:r.mergeProps({"aria-activedescendant":F?D+F:"","aria-multiselectable":!1,class:g,ref:P,role:"tablist",tabIndex:0},H,M,T),tabBarContext:{currentKey:F,display:p,isEdgeBottom:"bottom"===K,layout:"condense",onRemove:h,onSelect:v,showFocusRing:w,hideTooltip:I,selection:x,size:k,tabItemPrefix:D},menuProps:{...q,onClose:N},contextMenuContext:U}}}));
//# sourceMappingURL=useTabBar-2c4573fe.js.map
