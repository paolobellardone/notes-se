define(['exports', 'preact/jsx-runtime', './classNames-08d99695', './useUser-9b166ca3', './useTranslationBundle-20bfc0f3', './useComponentTheme-5aa41a8f', './UNSAFE_ProgressBar/themes/redwood/ProgressBarTheme', './LinearMeter-82411a78'], (function(e,a,r,s,o,n,t,l){"use strict";const i=({id:e,width:i,edge:d="none",...c})=>{const{classes:u,styles:{valueStyle:m,indeterminate:g,animationStyleLTR:h,animationStyleRTL:v,highContrastValueStyle:x,trackBorderEdgeNone:B,trackBorderEdgeTop:T}}=n.useComponentTheme(t.ProgressBarRedwoodTheme,{edge:"none"===d?d:void 0}),{direction:p,forcedColors:f}=s.useUser(),j=r.classNames([m,g,"rtl"===p?v:h,"active"===f?x:""]),y=o.useTranslationBundle("@oracle/oraclejet-preact"),N={"aria-valuetext":c["aria-valuetext"]||y.progressIndeterminate(),role:"progressbar"},C="active"===f?void 0:"none"===d?B:T;return a.jsx(l.BarTrack,{id:e,ariaProps:N,class:r.classNames([u,C]),length:i,children:a.jsx(l.BarValue,{class:j})})},d=({value:e=0,max:o=100,id:i,width:d,edge:c="none"})=>{const{forcedColors:u}=s.useUser(),{classes:m,styles:{valueStyle:g,highContrastValueStyle:h,trackBorderEdgeNone:v,trackBorderEdgeTop:x}}=n.useComponentTheme(t.ProgressBarRedwoodTheme,{edge:"none"===c?c:void 0}),B=r.classNames([g,"active"===u?h:""]),T=100*Math.min(Math.max(0,e/o),1)+"%",p={};return p["aria-valuemin"]=null!=e?0:void 0,p["aria-valuemax"]=null!=e?o:void 0,p["aria-valuenow"]=null!=e?e:void 0,p.role="progressbar",a.jsx(l.BarTrack,{ariaProps:p,id:i,length:d,class:r.classNames([m,"none"===c?v:x]),children:a.jsx(l.BarValue,{class:B,length:T})})};e.ProgressBar=function({value:e,max:r,...s}){return"indeterminate"===e?a.jsx(i,{...s}):a.jsx(d,{value:e,max:r,...s})}}));
//# sourceMappingURL=ProgressBar-e9b37565.js.map