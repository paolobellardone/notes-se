define(['exports', 'preact/jsx-runtime', './Marker-4fd75a2e', './classNames-49c3ba27', './UNSAFE_SvgShapes/themes/SvgShapesStyles.css'], (function(e,t,s,o,l){"use strict";const r=({lineWidth:e=3,lineStyle:s="solid",color:r,lineLength:n})=>{const i="solid"!=s,a=null!=n?n:0,{lineBaseStyle:c,lineDottedStyle:h,lineDashedStyle:d}=l.styles;return t.jsx("line",{x1:0-a,y1:50,x2:100+a,y2:50,stroke:r,strokeWidth:e,class:o.classNames([c,i?"dotted"===s?h:d:""])})};e.SvgSymbol=({markerShape:e,lineStyle:n="none",lineLength:i,lineWidth:a,lineColor:c,borderColor:h,markerColor:d,setAspectRatioNone:S,setAbsolutePos:y=!1,outerBorderColor:g,markerScale:k,tx:p=50,ty:u=50})=>{const x=k??("none"!=n?.6:1);return t.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",class:o.classNames([l.styles.svgSymbolBase,y?l.styles.svgAbsolutePos:""]),preserveAspectRatio:S?"none":void 0,children:["none"!=n&&t.jsx(r,{lineStyle:n,lineWidth:a,color:c,lineLength:i}),"none"!=e&&t.jsx(s.Marker,{type:e,scale:x,height:100,width:100,tx:p,ty:u,preserveRectAspectRatio:!S,fill:d,stroke:h,outerStroke:g,outerStrokeWidth:4.5,innerStrokeWidth:1.5})]})}}));
//# sourceMappingURL=SvgSymbol-f4f5f094.js.map
