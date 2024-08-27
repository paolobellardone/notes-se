define(['exports', 'preact/hooks', './mergeProps-bcfa6a92', './collectionUtils-6740111c', './useCollectionFocusRing-64636529', './useCurrentKey-26170e5e', './useId-c9578d26'], (function(e,t,r,n,o,s,c){"use strict";const u='[role="tab"]',i="data-oj-removable";const l=(e,t,r)=>{const o=e.closest(t);if(o){if(o.hasAttribute(i)){const t=e.closest(r);if(t&&o?.contains(t))return null}return n.getKey(o)}return null},a=(e,t,r)=>{const n=r.indexOf(e);if(-1===n)return t[0];let o=0,s=!1;for(n===r.length-1?(o=n-1,s=!0):o=n+1;o!==n&&o>-1&&o<r.length;){const e=r[o];if(-1!==t.indexOf(e))return e;s?o--:o++}return t[0]};e.useTabBar=function(e){const{children:f,class:y,display:d,edge:g="top",selection:m,onSelect:b,onRemove:v,ref:p,size:K}=e,h=t.useRef(null),R=p||h,k=c.useId(),[x,A]=t.useState(m),[E,P]=t.useState(!1),S=k+"_",C=t.useRef();t.useEffect((()=>{if(R.current){const e=Array.from(R.current.querySelectorAll(u)).map((e=>n.getKey(e)));x&&!e.includes(x)&&(C.current?A(a(x,e,C.current)):A(e[0])),C.current=e}}),[f,x,R]);const[F,w]=o.useCollectionFocusRing(R,["ArrowRight","ArrowLeft","Home","End"]),{currentKeyProps:B}=s.useCurrentKey((e=>v?l(e,u,'[data-oj-tabbar-item-remove-icon="true"]'):n.keyExtractor(e,u)),!1,void 0,void 0,n.getPrevNextKeyUsingRef(R,x,!0,u),n.getPrevNextKeyUsingRef(R,x,!1,u),x,(e=>{A(e.value),P(!1)})),D={onKeyDown:e=>{if(R.current&&x){if("Home"===e.key||"End"===e.key){const t=Array.from(R.current.querySelectorAll(u),(e=>n.getKey(e)));e.preventDefault(),A?.(t["Home"===e.key?0:t.length-1])}if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),b?.({value:x})),"Delete"===e.key){n.findElementByKey(R.current,x,u).hasAttribute(i)&&v?.({value:x})}"Escape"===e.key&&P(!0)}},onFocus:()=>{if(R.current&&void 0===x){const e=n.getFirstVisibleKey(R.current,u);e&&A(e)}}};return{rootProps:r.mergeProps({"aria-activedescendant":x?S+x:"","aria-multiselectable":!1,class:y,ref:R,role:"tablist",tabIndex:0},B,w,D),tabBarContext:{currentKey:x,display:d,isEdgeBottom:"bottom"===g,layout:"condense",onRemove:v,onSelect:b,showFocusRing:F,hideTooltip:E,selection:m,size:K,tabItemPrefix:S}}}}));
//# sourceMappingURL=useTabBar-254fbf75.js.map
