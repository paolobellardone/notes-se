define(['exports', 'preact/hooks'], (function(e,t){"use strict";const n={sm:"0px",md:"600px",lg:"1024px",xl:"1440px"};e.defaultBreakpoints=n,e.useBreakpoints=function(e=n){const s=t.useCallback((()=>{const t={};return Object.entries(e).forEach((([e,n])=>{t[e]=window.matchMedia(`(min-width: ${n})`).matches})),t}),[e]),[r,i]=t.useState((()=>s()));return t.useEffect((()=>{const e=()=>{i(s())};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[s]),r}}));
//# sourceMappingURL=useBreakpoints-c5f8bd73.js.map
