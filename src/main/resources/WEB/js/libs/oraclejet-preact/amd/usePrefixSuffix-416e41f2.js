define(['exports', './stringUtils-c9076bae', './useUser-6c8723b4'], (function(e,i,s){"use strict";e.usePrefixSuffix=({baseId:e,hasEndContent:t,hasInsideLabel:r,hasStartContent:a,hasValue:d,isDisabled:n,isFocused:f,labelId:o,prefix:u,suffix:l,value:x})=>{const{direction:$}=s.useUser(),b=`${e}-prefix`,c=`${e}-suffix`,v=void 0!==u&&""!==u,h=void 0!==l&&""!==l,p=v&&!n&&(d||f),I=h&&!n&&(d||f),P=v||h?function(e,i,s,t,r){if(!i)return r;const a="ltr"===e,d=void 0===s?"":a?`${s} `:` ${s}`,n=void 0===t?"":a?` ${t}`:`${t} `,f=`${d}${r}${n}`,o=`${n}${r}${d}`;return a?f:o}($,d,u,l,x):x;return{shouldRenderPrefix:p,shouldRenderSuffix:I,prefixProps:{id:b,hasEndContent:t,hasInsideLabel:r,hasStartContent:a,isDisabled:n,isFocused:f,text:u??"",variant:"prefix"},suffixProps:{id:c,hasInsideLabel:r,isDisabled:n,isFocused:f,text:l??"",variant:"suffix"},valuePrefixSuffix:P,ariaLabelledBy:v||h?i.merge([o,v?b:void 0,h?c:void 0]):void 0}}}));
//# sourceMappingURL=usePrefixSuffix-416e41f2.js.map
