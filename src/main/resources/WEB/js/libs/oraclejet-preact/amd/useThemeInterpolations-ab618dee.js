define(['exports', 'preact/hooks', './useColorScheme-443e7cc7', './useScale-e311d35f', './theme-a8f3d819', './mergeInterpolations-9ede4cf7', './LayerHost-639b3284', './Theme-d945adae', './useDensity-f0f7ae9a'], (function(e,t,o,n,s,c,r,a,u){"use strict";e.useThemeInterpolations=function(e){const[l,i]=t.useState(void 0),f=o.useColorScheme(),d=u.useDensity(),m=n.useScale(),S=d!==r.DefaultEnvironment.density?d:void 0,h=m!==r.DefaultEnvironment.scale?m:void 0;t.useLayoutEffect((()=>{const t=e&&e.current&&"function"==typeof e.current.closest?e.current.closest(`.${a.INVERT_CLASS}:not(.${a.DARK_CLASS})`):null;i(f!==r.DefaultEnvironment.colorScheme?f:t?"dark":void 0)}),[e,f]);const v=c.mergeInterpolations([...Object.values(s.themeInterpolations)]),{class:p}=v({colorScheme:l,scale:h,density:S});return p}}));
//# sourceMappingURL=useThemeInterpolations-ab618dee.js.map
