define(['exports', 'preact/jsx-runtime', 'css!./HighlightTextStyles.styles.css', './useTestId-f3b8b319'], (function(e,t,s,n){"use strict";const i="__@@__",l=`${i}$&${i}`;e.HighlightText=function({children:e="",matchText:s="",testId:c}){const h=n.useTestId(c);if(s.length>0&&e.length>0){const n=s.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),c=e.replace(new RegExp(n,"gi"),l).split(i).map(((e,s)=>s%2==0?e:t.jsx("span",{class:"HighlightTextStyles_highlightStyles__6s5c4p0",children:e})));return t.jsx("span",{...h,children:c})}return t.jsx("span",{...h,children:e})}}));
//# sourceMappingURL=HighlightText-415dc14f.js.map
