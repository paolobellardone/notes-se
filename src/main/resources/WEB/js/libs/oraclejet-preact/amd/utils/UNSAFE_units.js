define(['exports', '../stringUtils-0ae982c2'], (function(e,s){"use strict";const t=(i=Number,e=>null!=e&&e.constructor===i||e instanceof i);var i;const n=e=>0===e||"0"===e,r=new RegExp(`(${["px","%","em","rem","vh","vw"].join("|")})$`),o=e=>s.isString(e)&&r.test(e),a=(c="px",e=>n(e)||o(e)||!(e=>!isNaN(parseFloat(e))&&!isNaN(e-0))(e)?e:e+c);var c;e.hasUnit=o,e.isNumber=t,e.isZero=n,e.px=a,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_units.js.map