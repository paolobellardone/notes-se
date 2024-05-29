/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojconfig","ojs/ojconverter-preferences"],function(t,e,n){"use strict";const i=".",r="-",o=/^([+|-])?(\d+\.\d+|\.?\d+)(?:[e|E])([+|-])?(\d+)$/,a=/^([+|-])?(\d+\.\d+|\.?\d+)$/,s=/0+$/,c=/^0+/;function l(t){let e=t.match(a);if(e){return{negative:e[1]===r,...m(e[2])}}if(e=t.match(o),e){const t=e[1]===r,n=m(e[2]);let i=parseInt(e[4]);return i=e[3]===r?-i:i,{negative:t,...u(n,i)}}throw new Error("Not a valid number")}function u(t,e){let{whole:n,decimal:i}=t;if(0===e||""===n&&""===i)return t;if(e>0){const t=Math.min(e,i.length),r=Math.max(e-t,0);n=n+i.substring(0,t)+"0".repeat(r),t>0&&(i=i.substring(t))}else{const t=Math.min(-e,n.length),r=Math.max(-e-t,0),o=n.length-t;i="0".repeat(r)+n.substring(o)+i,t>0&&(n=n.substring(0,o))}return n=d(n,!1),i=d(i,!0),{whole:n,decimal:i}}function m(t){let e="",n="";const r=t.split(i);if(1==r.length){const o=r[0];t.startsWith(i)?n=o:e=o}else e=r[0],n=r[1];return{whole:d(e,!1),decimal:d(n,!0)}}function d(t,e){return t.replace(e?s:c,"")}function g(t){let e=f.get(t);return e||(e=function(t){const e=function(t){const e=new Intl.NumberFormat(t,{useGrouping:!1,maximumFractionDigits:0}),n=new Map,i=e.format(9876543210);for(let t=0;t<10;t++){const e=i[t],r=(9-t).toString();n.set(e,r)}return n}(t),n=function(t){return p(t,{maximumFractionDigits:1,minimumFractionDigits:1},1.1,"decimal",".")}(t),i=h(t,!1),r=h(t,!0),o=function(t){return p(t,{style:"percent"},1,"percentSign","%")}(t),a=function(t){return p(t,{notation:"scientific"},100,"exponentSeparator","E")}(t);return{localToAsciiNumbers:e,decimalSeparator:n,negativeSign:i,positiveSign:r,percentSign:o,exponentSeparator:a}}(t),f.set(t,e)),e}function h(t,e){const n={signDisplay:"always"};return e?p(t,n,1,"plusSign","+"):p(t,n,-1,"minusSign","-")}function p(t,e,n,i,r){const o=new Intl.NumberFormat(t,e).formatToParts(n);return o.find(t=>t.type===i)?.value??r}const f=new Map,v=new Map([["HALF_UP","halfExpand"],["HALF_DOWN","halfTrunc"],["HALF_EVEN","halfEven"],["UP","expand"],["DOWN","trunc"],["CEILING","ceil"],["FLOOR","floor"]]),w=/0+$/;function y(t,e,n){let{whole:i,negative:r,decimal:o}=t;const a=o.length-e;if(a>0){const t=(i||"0")+o,s=[];let c=t.length-2,l=parseInt(t[c+1]);for(let e=0;c>=0;c--){let i=parseInt(t[c]);10===l&&(l=0,i++),e<a?(l=b(i,l,r,n),e++):(s.unshift(String(l)),l=i)}if(10===l?(s.unshift("0"),s.unshift("1")):s.unshift(String(l)),0===e)i=s.join(""),o="";else{i=s.slice(0,-e).join(""),o=s.slice(-e).join("").replace(w,"")}}return{whole:i,decimal:o}}function F(t){const e=t.roundingMode??"HALF_UP",n=v.get(e);if(!n)throw new Error("Invalid rounding mode");return n}function b(t,e,n,i){if(0===e||"DOWN"===i||"CEILING"===i&&n||"FLOOR"===i&&!n)return t;switch(i){case"HALF_UP":return t+(e>=5?1:0);case"HALF_DOWN":return t+(e>5?1:0);case"HALF_EVEN":return t+(5==e&&t%2==0||e<5?0:1);case"UP":case"CEILING":case"FLOOR":return t+1;default:throw new Error("Invalid rounding mode "+i)}}const I=new Set(["0","1","2","3","4","5","6","7","8","9"]);function D(t,e,n){const i=g(n),{decimal:r,group:o}=e.separators,{negativeSign:a,positiveSign:s,percentSign:c,localToAsciiNumbers:m,exponentSeparator:d}=i;let h,p=0,f="";for(let n of t)switch(n){case a:case"-":f+="-";break;case r:f+=".";break;case d:case"E":case"e":f+="E";break;case c:case"%":case s:case"+":case o:break;default:const t=m.get(n);t?f+=t:(N(e),I.has(n)&&(f+=n))}"percent"===e.style&&(p=-2);try{h=l(f)}catch(t){_()}0!==p&&(h={negative:h.negative,...u(h,p)}),e.roundDuringParse&&(h={negative:h.negative,...y(h,e.maximumFractionDigits,e.roundingMode)});const v=h.whole||"0",w=""!==h.decimal;return f=(h.negative?"-":"")+v+(w?"."+h.decimal:""),f}function N(t){"none"===t.lenientParse&&_()}function _(){throw new Error("Not a valid number",{cause:"userInput"})}function O(t,e){const n=function(t){let e;switch(t.style){case"decimal":case void 0:e=function(t){const e=t.decimalFormat??"standard",n={style:"decimal"};switch(e){case"short":n.notation="compact",n.compactDisplay="short";break;case"long":n.notation="compact",n.compactDisplay="long";break;case"standard":break;default:throw new Error("Invalid decimalFormat: "+e)}return n}(t);break;case"currency":e=function(t){const e=t.currencyFormat??"standard",n=t.currency;if(!n)throw new Error("Currency option is required for currency style");const i={style:"currency",currency:n,currencyDisplay:t.currencyDisplay??"symbol"};switch(e){case"short":i.notation="compact",i.compactDisplay="short";break;case"standard":break;default:throw new Error("Invalid currencyFormat: "+e)}return i}(t);break;case"percent":e={style:"percent"};break;case"unit":const n=t.unit;if("byte"!==n&&"bit"!==n)throw new Error("invalid unit name");e={style:"unit",unitDisplay:"short",unit:n};break;default:throw new Error("Invalid format style")}return e}(t),{defaultMinFractionDigits:i,defaultMaxFractionDigits:r}=function(t,e){const n=new Intl.NumberFormat(e,t).resolvedOptions().minimumFractionDigits??0,i=new Intl.NumberFormat(e,t).resolvedOptions().maximumFractionDigits??0;return{defaultMinFractionDigits:n,defaultMaxFractionDigits:i}}(n,e),o=t.minimumFractionDigits??Math.min(i,t.maximumFractionDigits??Number.MAX_SAFE_INTEGER),a=t.maximumFractionDigits??Math.max(o,r);if(o>a)throw new Error("maximumFractionDigits value is out of range");const s={locale:e,minimumIntegerDigits:t.minimumIntegerDigits??0,minimumFractionDigits:o,maximumFractionDigits:a,useGrouping:t.useGrouping??void 0!==x(n,e,!1),lenientParse:t.lenientParse??"full",roundDuringParse:t.roundDuringParse??!1,roundingMode:t.roundingMode??"HALF_UP",separators:{decimal:t.separators?.decimal??g(e).decimalSeparator,group:t.separators?.group??x(n,e)}};let c;switch(t.style){case"decimal":case void 0:c={style:"decimal",decimalFormat:t.decimalFormat??"standard",...s};break;case"currency":c={style:"currency",currency:t.currency,currencyFormat:t.currencyFormat??"standard",currencyDisplay:t.currencyDisplay??"symbol",...s};break;case"percent":c={style:"percent",...s};break;case"unit":c={style:"unit",unit:t.unit,...s}}return{resolved:c,native:n}}function x(t,e,n=!0){const i=n?{...t,useGrouping:!0}:t,r=new Intl.NumberFormat(e,i).formatToParts(1e6);return r.find(t=>"group"===t.type)?.value}const E=[1e3,10**6,10**9,10**12,10**15],M=[1e3,10**6,10**9,10**12],S=[1e3,10**6,10**9,10**12],P=["byte","kilobyte","megabyte","gigabyte","terabyte","petabyte"],A=["bit","kilobit","megabit","gigabit","terabit"];function R(t,e,n){const{scaled:i,scaleIndex:r}=W(t,e,E,n);return{scaled:i,unit:P[r]}}function k(t,e,n){const{scaled:i,scaleIndex:r}=W(t,e,M,n);return{scaled:i,unit:A[r]}}function G(t,e){const{scaled:n,scaleIndex:i}=T(t,E,e);return{scaled:n,unit:P[i]}}function L(t,e){const{scaled:n,scaleIndex:i}=T(t,M,e);return{scaled:n,unit:A[i]}}function W(t,e,n,i,r=!1){let{whole:o,negative:a,decimal:s}=t;const c=BigInt(o),l=n.length;let m=-1;for(let t=0;t<l&&c>=BigInt(n[t]);t++,m++);let d=3*(m+1),g=u({whole:o,decimal:s},-d),h=y({whole:g.whole,decimal:g.decimal,negative:a},e(g.decimal.length),i.roundingMode);return m<l-1&&BigInt(h.whole)===BigInt(n[m])&&(m++,d+=3,g=u({whole:o,decimal:s},-d),h=y({whole:g.whole,decimal:g.decimal,negative:a},e(g.decimal.length),i.roundingMode)),g={whole:r?(BigInt(h.whole)*BigInt(10**d)).toString():h.whole,decimal:h.decimal},{scaled:g,scaleIndex:m+1}}function T(t,e,n){const i=new Intl.NumberFormat("en-US",{minimumFractionDigits:n.minimumFractionDigits,maximumFractionDigits:n.maximumFractionDigits,useGrouping:!1});i.roundingMode=F(n);const r=e.length;let o=-1;for(let n=0;n<r&&t>=e[n];n++,o++);let a=-3*(o+1),s=t*10**a,c=parseFloat(i.format(s));return o<r-1&&c===e[o]&&(o++,a-=3,s=t*10**a),{scaled:s,scaleIndex:o+1}}t.BigDecimalStringConverter=class{constructor(t){const i=t??{style:"decimal"},r=n.getMergedNumberPreferencesWithOptions(i);this.options=r,this.locale=this.options.locale??e.getLocale()}format(t){if("string"!=typeof t)throw new Error("the value must be a string");const e=l(t),{native:n,resolved:i}=this._getResolvedAndNativeOptions();switch(i.style){case"decimal":case"currency":const t="compact"===n.notation?"compact":null;return this._format(e,n,t);case"percent":return this._format(e,n,"percent");case"unit":return this._format(e,n,i.unit)}}parse(t){return D(t,this.resolvedOptions(),this.locale)}resolvedOptions(){return this._getResolvedAndNativeOptions().resolved}getHint(){return null}_format(t,e={},n){let i=e;const r=this.resolvedOptions(),{minimumFractionDigits:o,maximumFractionDigits:a}=r;function s(t){return Math.min(Math.max(o,t),a)}let{decimal:c,whole:l,negative:m}=t;if("compact"===n){const{scaled:e}=function(t,e,n){return W(t,e,S,n,!0)}(t,s,r);l=e.whole,c=e.decimal}else if("percent"===n){const e=function(t,e,n){let{whole:i,negative:r,decimal:o}=t;const a=u({whole:i,decimal:o},2);return y({whole:a.whole,decimal:a.decimal,negative:r},n(a.decimal.length),e.roundingMode)}(t,r,s);l=e.whole,c=e.decimal}else if("byte"===n||"bit"===n){const e="byte"===n?R:k,{scaled:o,unit:a}=e(t,s,r);l=o.whole,c=o.decimal,i={...i,unit:a}}else{const t=s(c.length);if(t<c.length){const e=y({negative:m,decimal:c,whole:l},t,r.roundingMode);l=e.whole,c=e.decimal}}return l=l||"0","percent"!==n?this._stitchFractionOnly(l,c,m,o,i):this._stitchWholeAndFraction(l,c,m,o,i)}_stitchFractionOnly(t,e,n,i,r={}){const o=this.options,a={...r,minimumIntegerDigits:o.minimumIntegerDigits,minimumFractionDigits:i};a.useGrouping=o.useGrouping;let s="0"===t?0:BigInt(t);if(n&&(s=-s),e){a.minimumFractionDigits=1;const t=this._formatToPartsWithCustomSeparators(new Intl.NumberFormat(this.locale,a),s),n=this._getFractionPart(e,i),r={useGrouping:!1,minimumIntegerDigits:e.length},o=new Intl.NumberFormat(this.locale,r).format(BigInt(n));let c="";for(let e of t)"fraction"===e.type?c+=o:c+=e.value;return c}return this._formatWithCustomSeparators(new Intl.NumberFormat(this.locale,a),s)}_stitchWholeAndFraction(t,e,n,i,r={}){const o=this.options,a=e.length,s={...r,useGrouping:!1,minimumFractionDigits:a>0||i>0?Math.max(i,1):0},c=this._formatToPartsWithCustomSeparators(new Intl.NumberFormat(this.locale,s),n?-1:1),l={minimumIntegerDigits:o.minimumIntegerDigits};l.useGrouping=o.useGrouping;const u=this._formatWithCustomSeparators(new Intl.NumberFormat(this.locale,l),BigInt(t));let m;if(a>0){const t=this._getFractionPart(e,i),n={useGrouping:!1,minimumIntegerDigits:a>0?a:void 0};m=new Intl.NumberFormat(this.locale,n).format(BigInt(t))}let d="";for(let t of c){const e=t.type;d+="fraction"===e?m??t.value:"integer"===e?u:t.value}return d}_formatWithCustomSeparators(t,e){const n=this.options?.separators?.decimal,i=this.options?.separators?.group;if(void 0===n&&void 0===i)return t.format(e);const r=t.formatToParts(e);let o="";for(let t of r)"group"===t.type?o+=i??t.value:"decimal"===t.type?o+=n??t.value:o+=t.value;return o}_formatToPartsWithCustomSeparators(t,e){const n=this.options?.separators?.decimal,i=this.options?.separators?.group;if(void 0===n&&void 0===i)return t.formatToParts(e);return t.formatToParts(e).map(t=>"group"===t.type?{...t,value:i??t.value}:"decimal"===t.type?{...t,value:n??t.value}:t)}_getFractionPart(t,e){const n=e-t.length;return n>0&&t.length>0?t+"0".repeat(n):t}_getResolvedAndNativeOptions(){return this.cachedResolvedAndNativeOptions||(this.cachedResolvedAndNativeOptions=O(this.options,this.locale)),this.cachedResolvedAndNativeOptions}},t.NumberConverter=class{constructor(t){const i=t??{style:"decimal"},r=n.getMergedNumberPreferencesWithOptions(i);this.options=r,this.locale=this.options.locale??e.getLocale()}format(t){let e=t;if("number"!=typeof e)throw new Error("the value must be a number");const{resolved:n,native:i}=this._getResolvedAndNativeOptions(),r=this.options,o={...i,minimumIntegerDigits:r.minimumIntegerDigits,minimumFractionDigits:r.minimumFractionDigits,maximumFractionDigits:r.maximumFractionDigits,useGrouping:r.useGrouping,roundingMode:F(n)};if("unit"===n.style){const i="bit"===n.unit?L:G,{scaled:a,unit:s}=i(t,r);e=a,o.unit=s}const a=new Intl.NumberFormat(this.locale,o);if(r.separators){const t=r?.separators?.decimal,n=r?.separators?.group;if(void 0===t&&void 0===n)return a.format(e);return a.formatToParts(e).reduce((e,i)=>"group"===i.type?e+(n??i.value):"decimal"===i.type?e+(t??i.value):e+i.value,"")}return a.format(e)}parse(t){return new Number(D(t,this.resolvedOptions(),this.locale)).valueOf()}resolvedOptions(){return this._getResolvedAndNativeOptions().resolved}getHint(){return null}_getResolvedAndNativeOptions(){return this.cachedResolvedAndNativeOptions||(this.cachedResolvedAndNativeOptions=O(this.options,this.locale)),this.cachedResolvedAndNativeOptions}},t.USER_INPUT_ERROR="userInput",Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=ojconverter-nativenumber.js.map