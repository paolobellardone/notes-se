define(['exports', 'preact/hooks', './arrayUtils-bef2e8fb'], (function(e,n,t){"use strict";const r=e=>e?.ownerDocument??document;e.useOutsideClick=({isDisabled:e=!1,ref:o,handler:s})=>{const i=n.useRef({isMouseDown:!1}).current;n.useEffect((()=>{const n=t.coerceArray(o);if(!s||e||n.length>0&&n.findIndex((e=>null===e.current))>-1)return;const u=()=>{i.isMouseDown=!0},c=e=>{i.isMouseDown&&((e,n)=>{const t=e.target;if(!t)return!1;const o=r(t);if(!o.contains(t))return!1;if(n.some((e=>e.current?.contains(t))))return!1;const s=o.querySelector("#__root_layer_host");let i=null;if(s&&s.contains(t))for(let e=0;e<s.children.length;e++){const n=s.children[e];if(n.contains(t)){i=n.__oj_logical_parent;break}}return n.every((e=>!e.current?.contains(i)))})(e,n)&&(i.isMouseDown=!1,s?.(e))},a=n[0],l=r(a.current);return l?(l.addEventListener("mousedown",u,!0),l.addEventListener("mouseup",c,!0),()=>{l.removeEventListener("mousedown",u,!0),l.removeEventListener("mouseup",c,!0)}):void 0}),[e,s,o,i])}}));
//# sourceMappingURL=useOutsideClick-d7ba24e7.js.map
