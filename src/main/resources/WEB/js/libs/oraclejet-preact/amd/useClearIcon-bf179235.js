define(['exports', 'preact/hooks', './useToggle-a59ec51a'], (function(e,s,l){"use strict";e.useClearIcon=function({clearIcon:e,display:o,hasValue:a,isEnabled:c=!0,isFocused:n=!1,isHover:u=!1}){const t=s.useCallback((()=>c&&("always"===o||"conditionally"===o&&a&&(n||u))),[o,a,c,n,u]),{bool:i,setFalse:r,setTrue:d}=l.useToggle(t());return s.useEffect((()=>{t()?d():r()}),[t,d,r]),i?e:null}}));
//# sourceMappingURL=useClearIcon-bf179235.js.map
