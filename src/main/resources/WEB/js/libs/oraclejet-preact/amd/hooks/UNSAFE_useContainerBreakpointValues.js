define(['exports', '../useBreakpoints-c5f8bd73', '../useContainerBreakpoints-945b1fea', 'preact/hooks'], (function(e,t,n,r){"use strict";e.useContainerBreakpointValues=function(e,r=t.defaultBreakpoints){const{breakpointMatches:o,ref:s}=n.useContainerBreakpoints(r);return{breakpoint:Object.entries(e).reduce(((e,t)=>{const n=t[0];return o[n]?t:e}))[1],ref:s}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_useContainerBreakpointValues.js.map
