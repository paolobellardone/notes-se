define(['exports', 'preact/hooks', './arrayUtils-6ee96a35', './Layer-6f29b67f', './useModal-536cb7ff'], (function(e,t,n,r,o){"use strict";const s=e=>e?.ownerDocument??document;e.useOutsideClick=({isDisabled:e=!1,ref:u,handler:c})=>{const a=t.useRef(null);t.useEffect((()=>{const t=n.coerceArray(u);if(!c||e||t.length>0&&t.findIndex((e=>null===e.current))>-1)return;const i=e=>{a.current=e.target},l=e=>{a.current===e.target&&((e,t)=>{const n=e.target;if(!n)return!1;if(!s(n).contains(n))return!1;if(t.some((e=>e.current?.contains(n))))return!1;const u=(e=>{let t=e.parentElement;for(;t;){if(t[r.LOGICAL_PARENT])return t[r.LOGICAL_PARENT];t=t.parentElement}return null})(n);if(u&&t.some((e=>e.current?.contains(u))))return!1;if(n[o.MODAL_OVERLAY]&&!t.some((e=>{const t=e.current?.closest('[data-oj-layer="modal"]');return t&&t.contains(n)})))return!1;const c=n.closest('[data-oj-layer="modal"]');return!(c&&!t.some((e=>c.contains(e.current))))})(e,t)&&c?.(e),a.current=null},d=t[0],f=s(d.current);return f?(f.addEventListener("mousedown",i,!0),f.addEventListener("mouseup",l,!0),()=>{f.removeEventListener("mousedown",i,!0),f.removeEventListener("mouseup",l,!0)}):void 0}),[e,c,u])}}));
//# sourceMappingURL=useOutsideClick-76c1ff6e.js.map
