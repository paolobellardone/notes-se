define(['exports', '../../../colorUtils-7c069766', 'react', '../../../usePropertyValue-894e2112', '../../../head-9cb1a3da', '../../../curryN-bf872ffa', '../../../_curry1-df649359', '../../../_arity-5a5f5f71', '../../../_curry2-86c52b86', '../../../_arrayReduce-6c0913b8', 'preact/hooks', '../../../_curry3-83878f86', '../../../_isArray-32602db6', '../../../_isString-d0ada3cb'], (function(r,e,t,a,n,c,o,u,i,l,s,f,d,y){"use strict";function g(r,e,t){for(var a=t.next();!a.done;)e=r(e,a.value),a=t.next();return e}function _(r,e,t,a){return t[a](r,e)}var b=n._createReduce(l._arrayReduce,_,g);function p(r){return r}var h=o._curry1(p),R=i._curry2((function(r,e){if(e.length<=0)return h;var t=n.head(e),a=n.tail(e);return u._arity(t.length,(function(){return b((function(e,t){return r.call(this,t,e)}),t.apply(this,arguments),a)}))})),v=R,C=o._curry1((function(r){return!e.isNil(r)}));const x=r=>r.replace(/var\(|\)/g,""),k=r=>/rgb(a?)\(/.test(r)?r:4===r.split(",").length?`rgba(${r})`:`rgb(${r})`,N=a.curry(((r,t)=>n.pipe(x,r,e.getLuminance)(t))),B=c.curryN(2,((r,t)=>C(r)&&C(t)?e.getContrast(r,t).toFixed(2):"NaN")),G=v(((r,e)=>C(e)?r(e):e));r.colorEncodings=["RGB","Hex"],r.tokenFromVar=x,r.useColorUtils=({backgroundColor:r,colorEncoding:c})=>{const[o,u]=a.usePropertyValue(),i=t.useCallback((e=>B(N(u,r),N(u,e))),[r,u]);return{setRef:o,getColor:t.useCallback(n.pipe(x,u,"RGB"===c?k:G([e.parseToRGBA,e.rgbaToHex])),[c,u]),getContrastRatio:i}},Object.defineProperty(r,"__esModule",{value:!0})}));
//# sourceMappingURL=useColorSchemeUtils.js.map
