define(['exports', 'preact/hooks', './useBreakpoints-c5f8bd73'], (function(e,t,n){"use strict";e.useContainerBreakpoints=function(e=n.defaultBreakpoints){const[s,r]=t.useState(0),o=t.useRef(null),u=t.useMemo((()=>new ResizeObserver((e=>{for(const t of e)r(t.contentRect.width)}))),[]),c=t.useCallback((e=>{const t=o.current;e!=t&&(t&&u.unobserve(t),e&&u.observe(e),o.current=e)}),[u]);return{breakpointMatches:t.useMemo((()=>{const t={};for(const n in e)t[n]=s>=parseInt(e[n]);return t}),[s,e]),ref:c}}}));
//# sourceMappingURL=useContainerBreakpoints-945b1fea.js.map
