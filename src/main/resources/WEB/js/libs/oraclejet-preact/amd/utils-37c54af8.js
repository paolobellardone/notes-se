define(['exports', './datatipUtils-01750311', './dimensionUtils-61978138'], (function(t,i,e){"use strict";const n="…",h=3;function r(t){const i=t[t.length-1];return i?.endsWith(n)}function o(t,i,e,h,r,o){if(!o)return"";if(e<=0)return"";let u=o(t,i);if(u.width<=e)return t;if(u.height>h)return"";const s=t,l=t.length,c=u.width/function(t){return t=t.replace(/[\u200A\u200B\u200C\u200D\u200E\u200F\uFEFF]/g,""),t.length}(t);let f=Math.max(Math.floor(e/c)-2,r),g=s.substring(0,f)+n,d=g;u=o(g,i);let a=u;for(;u.width<e&&!(f>=s.length);){const t=e-u.width,h=Math.min(l-f,Math.max(Math.floor(t/c),1));if(f+=h,g=s.substring(0,f)+n,u=o(g,i),1==h&&u.width>e){g=d,u=a;break}d=g,a=u}for(;u.width>e;){if(f<=r){g="";break}f-=1,g=s.substring(0,f)+n,u=o(g,i)}return g}function u(t,i,e,n,r,s,l=1){const c=t.join(" "),{width:f,height:g}=s(c,i);if(g>n)return[];if(f<=e)return[t.join(" ")];let d=0,a="";for(;d<t.length;){const c=t.slice(0,d+1).join(" "),f=o(c,i,e,n,r,s),g=""===f;if(f!=c){const o=t.slice(d),c=l<h?u(o,i,e,n-12,r,s,l+1):[];return 0===c.length?[f]:[a,...c]}if(g)return[];d+=1,a=c}return[t.join(" ")]}function s(t,i,e,n,h,r){return u(t.split(/\s+/),i,e,n,h,r,1)}function l(t,i,e,n){let h,r;return"left"===t?(h=i.x+n.height/2-(e?n.height/2:0),r=i.y+i.height/2):"right"===t?(h=i.x+i.width-(e?n.height/2:0),r=i.y+i.height/2):"top"===t?(h=i.x+i.width/2,r=i.y+n.height/2):(h=i.x+i.width/2,r=i.y+i.height-n.height/2),{x:h,y:r}}t.centerTextInAvailSpace=l,t.getTextInfo=function(t,i,e,n,h,u){const l=h?s(t,i,e,n,1,u):[o(t,i,e,n,1,u)],c=u("MV",i).width,f=l.map((t=>u(t,i))),g=l.every((t=>""===t)),d=Math.max(...f.map((t=>t.width)));return{lines:l,dims:f,didNotFit:g,height:l.length*c,width:d,isMultiline:l.length>1,lineHeight:c,isTruncated:r(l)}},t.getTextProps=function(t,i,e,n,h,r){let{x:o,y:u}=e;const s=r("MV",i).width,l=[];return t.forEach(((t,i)=>{const e=n?`matrix(0, ${h?1:-1}, ${h?-1:1}, 0, ${o}, ${u})`:void 0;l.push({text:t,x:n?void 0:o,y:n?void 0:u+i*s,transform:n?e:void 0}),o+=n?s:0,u+=n?0:s})),l},t.positionMultilineText=(t,i,n,h,r,o)=>{const u=e.cloneDimension(r);return t.map(((t,e)=>{const r=l(h,u,o,i[e]);return"top"===h?(u.y+=n,u.height-=n):"left"===h?(u.x+=n,u.width-=n):"bottom"===h?u.height-=n:u.width-=n,r}))},t.truncateMultilineText=s,t.truncateSingleLineText=o}));
//# sourceMappingURL=utils-37c54af8.js.map
