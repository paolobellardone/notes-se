define(['exports', 'preact/jsx-runtime', './useChartDnd-947ed9e4', './Common/themes/themeContract.css'], (function(e,t,r,n){"use strict";e.AreaSeries=function({yScale:e,lineType:i="straight",color:o,isHorizontal:s,isLog:a,areaColorOpacity:m,lineSegments:c,bottomCoords:d,isHighlighted:l,isBottomSegmentCurved:h,seriesIndex:g}){const f={fill:o,opacity:l?m:`calc(${n.dvtVars.dimmedOpacity} * ${m})`};return t.jsx(t.Fragment,{children:c.map((n=>{if(n.length<2)return;let o;if(d)o=d;else{const t=e.transform(a?e.domain()[0]:0);o=s?[[t,n[0][1]],[t,n[n.length-1][1]]]:[[n[0][0],t],[n[n.length-1][0],t]]}const m=r.getCmdsForArea(n,o,i,s,h);return t.jsx("path",{d:m,style:f,"data-oj-series-index":g,"data-oj-object":"area"})}))})},e.getLineAreaChartItemPosition=(e,t,r,n,i,o,s,a,m)=>{const c=r[e][t];if(null==c)return;let d=t;if(m){const r="mixedFrequency"===m?n(e,t)?.x:i[t].id;d=new Date(r).getTime()}return{x:o?a.transform(c):s.transform(d),y:o?s.transform(d):a.transform(c),height:0,width:0}}}));
//# sourceMappingURL=chartUtils-ed1b8cf4.js.map
