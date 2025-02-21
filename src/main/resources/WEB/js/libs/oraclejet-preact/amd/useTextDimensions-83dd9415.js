define(['exports', 'preact/jsx-runtime', 'preact/hooks', './clientHints-4f5a07b0', './useVisAddBusyState-2d2ccb92'], (function(t,e,n,r,i){"use strict";const a={canvas:{},htmlSvg:{},htmlCanvas:{},svg:{}};let o={fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",fontStretch:"normal",fontSize:"medium",lineHeight:"normal",fontFamily:"",letterSpacing:"normal",wordSpacing:"normal",fontVariantNumeric:"normal"};const s=new Set(["normal","small-caps"]),c=new Set(["normal","ultra-condensed","extra-condensed","condensed","semi-condensed","semi-expanded","expanded","extra-expanded","ultra-expanded"]),f="MW",u=t=>t?{fontStyle:t.fontStyle??o.fontStyle,fontVariant:t.fontVariant??o.fontVariant,fontWeight:t.fontWeight??o.fontWeight,fontStretch:t.fontStretch??o.fontStretch,fontSize:t.fontSize??o.fontSize,lineHeight:t.lineHeight??o.lineHeight,fontFamily:t.fontFamily??o.fontFamily,letterSpacing:t.letterSpacing??o.letterSpacing,wordSpacing:t.wordSpacing??o.wordSpacing,fontVariantNumeric:t.fontVariantNumeric??o.fontVariantNumeric}:{...o},l=t=>{const{fontStyle:e,fontVariant:n,fontWeight:r,fontStretch:i,fontSize:a,lineHeight:o,fontFamily:s}=t;return`${e} ${n} ${r} ${i} ${Number.isNaN(Number(a))?a:`${a}px`}/${o} ${s}`},h=(t,e)=>t+l(e)+e.letterSpacing+e.wordSpacing+e.fontVariantNumeric,d=t=>"normal"===t||"0px"===t,g=(t,e,n)=>{const r=u(n),i=h(e,r),o=a.canvas[i];if(o)return o;const s=l(r);t.font=s,t.letterSpacing="0px",t.letterSpacing=r.letterSpacing,t.wordSpacing="0px",t.wordSpacing=r.wordSpacing;const c=t.measureText(e),f={x:0,y:-c.fontBoundingBoxAscent,width:c.width,height:c.fontBoundingBoxAscent+c.fontBoundingBoxDescent};return a.canvas[i]=f,f},m=(t,e,n)=>{const r=u(n),i=h(e,r),o=a.svg[i];if(o)return o;const s=document.createElementNS("http://www.w3.org/2000/svg","text");s.setAttribute("font-style",r.fontStyle),s.setAttribute("font-variant",r.fontVariant),s.setAttribute("font-weight",r.fontWeight),s.setAttribute("font-stretch",r.fontStretch),s.setAttribute("font-size",r.fontSize),s.setAttribute("font-family",r.fontFamily),s.setAttribute("letter-spacing",r.letterSpacing),s.setAttribute("word-spacing",r.wordSpacing),s.style.fontVariantNumeric=r.fontVariantNumeric,s.textContent=e,t.appendChild(s);const c=s.getBBox(),f={x:c.x,y:c.y,width:c.width,height:c.height};return t.innerHTML="",a.svg[i]=f,f},S=(t,e,n,r)=>{const i=u(r),o=h(n,i),s="svg"===e.backend?a.htmlSvg:a.htmlCanvas,c=s[o];if(c)return c;const{width:d,height:S}=((t,e,n)=>{const r=u(n),i=l(r),a=document.createElement("span");a.style.font=i,a.style.whiteSpace="nowrap",a.style.letterSpacing=r.letterSpacing,a.style.wordSpacing=r.wordSpacing,a.style.fontVariantNumeric=r.fontVariantNumeric,a.textContent=e,t.appendChild(a);const o={width:a.offsetWidth,height:a.offsetHeight};return t.innerHTML="",o})(t,n,r),{x:p,y:x}=((t,e)=>{let n;switch(t.backend){case"svg":n=m(t.container,f,e);break;case"canvas":n=g(t.ctx,f,e)}return{x:n.x,y:n.y,width:n.width/2,height:n.height}})(e,r),y={x:p,y:x,width:d,height:S};return s[o]=y,y},p=r.getClientHints().browser;t.useTextDimensions=({backend:t="auto"}={})=>{const r=n.useRef(null),a=n.useRef(null),f=n.useRef(null),[l,h]=n.useState(),x=n.useMemo((()=>{const n=e.jsx("canvas",{ref:r,style:{display:"none"}}),i=e.jsx("div",{ref:a}),s=e.jsx("svg",{ref:f,style:{display:"block",width:"0px",height:"0px"}}),c={canvas:{refs:[r],measureContent:n,measureFunction:(t,e)=>{const n=r.current,i=n?.getContext("2d");return n&&i?g(i,t,e):{x:-1,y:-1,width:-1,height:-1}}},htmlSvg:{refs:[a,f],measureContent:e.jsxs("div",{children:[i,s]}),measureFunction:(t,e)=>a.current&&f.current?S(a.current,{backend:"svg",container:f.current},t,e):{x:-1,y:-1,width:-1,height:-1}},htmlCanvas:{refs:[a,r],measureContent:e.jsxs("div",{children:[i,n]}),measureFunction:(t,e)=>{const n=r.current,i=n?.getContext("2d");return a.current&&n&&i?S(a.current,{backend:"canvas",ctx:i},t,e):{x:-1,y:-1,width:-1,height:-1}}},svg:{refs:[f],measureContent:s,measureFunction:(t,e)=>f.current?m(f.current,t,e):{x:-1,y:-1,width:-1,height:-1}}};return"auto"===t?{refs:[a,r],measureContent:e.jsxs("div",{children:[n,i,s]}),measureFunction:(t,e)=>{const n=((t,e)=>{if("unknown"===t)return"htmlSvg";const{letterSpacing:n,wordSpacing:r,fontVariantNumeric:i}=u(e),a=d(n),s=d(r),c="normal"===i,f=i===o.fontVariantNumeric;if(a&&s&&c&&f)return"canvas";switch(t){case"firefox":default:return"htmlSvg";case"safari":case"chrome":case"edge":return a&&s&&f?"canvas":"htmlCanvas"}})(p,e);return c[n].measureFunction(t,e)}}:c[t]}),[t]),{onBusyStart:y,onBusyEnd:w}=i.useVisAddBusyState("useTextDimensions: document fonts");return n.useLayoutEffect((()=>{x.refs[0].current&&((t=>{const e=getComputedStyle(t);o={fontStyle:e.fontStyle,fontVariant:e.fontVariantCaps,fontWeight:e.fontWeight,fontStretch:e.fontStretch,fontSize:e.fontSize,lineHeight:e.lineHeight,fontFamily:e.fontFamily,letterSpacing:e.letterSpacing,wordSpacing:e.wordSpacing,fontVariantNumeric:e.fontVariantNumeric},o.fontVariant&&s.has(o.fontVariant)||(o.fontVariant="normal"),o.fontStretch&&c.has(o.fontStretch)||(o.fontStretch="normal")})(x.refs[0].current),y(),document.fonts.ready.then((()=>{h((()=>x.measureFunction)),w()})))}),[x,y,w]),{textMeasureContent:x.measureContent,getTextDimensions:l}}}));
//# sourceMappingURL=useTextDimensions-83dd9415.js.map
