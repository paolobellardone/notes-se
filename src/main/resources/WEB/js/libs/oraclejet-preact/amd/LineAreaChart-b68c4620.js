define(['exports', 'preact/jsx-runtime', './layoutUtils-09c68ca9', './dataStyleUtils-8c4452c2', './Common/themes/themeContract.css', './Marker-8ff23a04', 'css!./SvgShapesStyles.styles.css', './useTranslationBundle-20bfc0f3', './accUtils-1557920a', './useUser-9b166ca3', './colorUtils-31010e27', './utils-61ef4ad6', './PRIVATE_Chart/themes/ChartStyles.css', './Chart-4796be31'], (function(e,t,i,r,s,n,o,a,l,d,c,g,h,m){"use strict";function I({yScale:e,lineType:i="straight",color:n,isHorizontal:o,isLog:a,areaColorOpacity:l,lineSegmentCoords:d,bottomCoords:c,isHighlighted:g,isBottomSegmentCurved:h,seriesIndex:m}){const I={fill:n,opacity:g?l:`calc(${s.dvtVars.dimmedOpacity} * ${l})`};return t.jsx(t.Fragment,{children:d.map((s=>{let n;if(c)n=c;else{const t=e.transform(a?e.domain()[0]:0);n=o?[[t,s[0][1]],[t,s[s.length-1][1]]]:[[s[0][0],t],[s[s.length-1][0],t]]}const l=r.getCmdsForArea(s,n,i,o,h);return t.jsx("path",{d:l,style:I,"data-oj-series-index":m,"data-oj-object":"area"})}))})}const u=10;function x({yScale:e,xScale:s,color:o,seriesIndex:d,startIndex:c,endIndex:g,hiddenIds:h,selectedIds:m,orientation:I,isLog:x,data:p,markerType:y,getDataItem:f,focusedItemIndex:S,hoveredItemIndex:C,isDrillEnabled:v,activeId:j,isSelectionEnabled:k,timeAxisType:b,isPointInsideMarquee:A,series:T,groups:D}){const M="horizontal"===I,L=[],F=a.useTranslationBundle("@oracle/oraclejet-preact");for(let a=c;a<g+1;a++){const c=f(d,a),g=p[a];if(!c||null==g||h?.has(c.id)||x&&g<=0)continue;const I=M?e.transform(g):i.getGroupCenterCoord(D[a],a,s,c,b),w=M?i.getGroupCenterCoord(D[a],a,s,c,b):e.transform(g),E=S===a,R=C===a,H=!(!m?.has(c.id)&&!A?.(c.id,{x:I,y:w})),P="on"===c.drilling||"off"!=c.drilling&&v,{fill:U,stroke:W,outerStroke:z}=r.getMarkerFillAndStroke(!!c.isMarkerDisplayed,k,R,E,H,o,c.markerColor),N=c.isMarkerDisplayed&&c.markerType||y,B=E||R,V=l.supportsMobileScreenReader||B?r.getItemAriaLabel(F,T.name||T.id.toString(),D[a].name||D[a].id,c.value,k,H,P,c.accessibleLabel):void 0,q={"data-oj-series-index":d,"data-oj-group-index":a,"data-oj-object":"item",id:B?j:void 0,role:V?"img":void 0,"aria-label":V},G=(c.markerSize||u)+2*n.MARKER_PADDING;L.push(t.jsx(n.Marker,{type:N,tx:I,ty:w,isInteractive:P||k,scale:1,fill:U,stroke:W,outerStroke:z,width:G,height:G,dataInfo:q,preserveRectAspectRatio:!0}))}return t.jsx(t.Fragment,{children:L})}function p({color:e,isHorizontal:i,lineType:n="straight",lineColor:o,lineStyle:a,lineWidth:l=3,isHighlighted:d,lineSegmentCoords:c,seriesIndex:m}){const I={stroke:o||e,strokeDasharray:"dotted"===a?3:"dashed"===a?6:void 0,strokeWidth:l,fill:g.rgba(s.colorSchemeVars.palette.neutral[0],0)};return t.jsx(t.Fragment,{children:c.map((e=>{const s=r.getCmdsForLine(e,n,i);return"straight"===n?t.jsx("polyline",{points:s,style:I,className:d?void 0:h.styles.dimmed,"data-oj-series-index":m,"data-oj-object":"line"}):t.jsx("path",{d:s,style:I,className:d?void 0:h.styles.dimmed,"data-oj-series-index":m,"data-oj-object":"line"})}))})}e.LineAreaChart=function({width:e,height:n,selectedIds:o=[],hiddenIds:a=[],highlightedIds:l,hideAndShowBehavior:g="none",orientation:h="vertical",yAxis:u,series:y,groups:f,isStacked:S=!1,getDataItem:C,selectionMode:v="none",drilling:j="off",type:k="line",...b}){const{direction:A}=d.useUser(),T="rtl"===A,D="log"===u?.scale,M=b.xAxis?.timeAxisType,L=new Set(a),F=new Set(o),w=new Set(l),E="horizontal"===h,R=c.getColorRamp(),H=S?r.getCumulativeSeries(y.length,f.length,C,L,D):r.getSeriesData(y?.length,f?.length,C,L,D),P=(e,t)=>S?{...C(e,t),value:H[e][t]}:C(e,t),U=r.getMarkers(),W="lineWithArea"===k?.5:1,z="area"===k||"lineWithArea"===k,N="area"===k,B=[];return t.jsx(m.Chart,{width:e,height:n,selectedIds:F,hiddenIds:a,hideAndShowBehavior:g,orientation:h,yAxis:u,series:y,groups:f,selectionMode:v,drilling:j,isStacked:S,getDataItem:C,findNearest:(e,t)=>i.findNearestDataPoint(y,f,e,t,P,S,(()=>({offset:0,dataWidth:0})),((e,t)=>t.transform(e)),D,0,L,M),getDataItemPos:(e,t)=>(i,r)=>{const s=H[i][r];let n=r;if(M){const e="mixedFrequency"===M?C(i,r)?.x:f[r].id;n=new Date(e).getTime()}return{x:E?t.transform(s):e.transform(n),y:E?e.transform(n):t.transform(s),height:0,width:0}},getMarkerInfo:(e,t)=>({color:r.getItemColor(e,t,y,C),type:r.getMarkerType(e,t,"lineWithArea",C)}),renderGridLinesInFront:z,getNavUtil:(e,t)=>r.getLineAreaChartNavUtil(C,y.length,e,t,S,T,E),getGapRatio:()=>1,offset:.2,isRtl:T,...b,children:({xStartIndex:e,xEndIndex:i,xScale:n,yScale:o,activeId:a,focusedItemInfo:d,hoveredItemInfo:c,isPointInsideMarquee:g})=>t.jsxs(t.Fragment,{children:[H.map(((m,u)=>{if(0===m.length)return;const k=y[u],A=r.getLineAreaSegments(o,n,m,e,i,E,D,f,u,P,M);B[u]=A[0];const T="curved"===k.lineType&&S&&H.length>1&&u>0,L=void 0===l||w.has(k.id);return t.jsxs(t.Fragment,{children:[z&&t.jsx(I,{yScale:o,lineType:k.lineType,color:k.areaColor||R[u%R.length],isHorizontal:E,areaColorOpacity:W,isBottomSegmentCurved:T,bottomCoords:S&&0!=u?B[u-1]:void 0,lineSegmentCoords:A,isLog:D,isHighlighted:L,seriesIndex:u}),t.jsx(p,{lineType:k.lineType,lineColor:N?s.colorSchemeVars.dvt.contrastLine:k.lineColor,lineWidth:N?S?2.5:1.25:k.lineWidth,lineStyle:k.lineStyle,color:k.lineColor||R[u%R.length],lineSegmentCoords:A,isHorizontal:E,isHighlighted:L,seriesIndex:u}),!S&&t.jsx(x,{yScale:o,xScale:n,groups:f,series:k,timeAxisType:M,data:m,color:k.lineColor||k.areaColor||R[u%R.length],seriesIndex:u,startIndex:e,endIndex:i,markerType:U[u%U.length],orientation:h,isLog:D,activeId:a,getDataItem:C,isPointInsideMarquee:g,selectedIds:F,focusedItemIndex:d.seriesIndex!==u||!d.isFocusVisible||b.isDataCursorEnabled&&b.dataCursorStyle?.isMarkerDisplayed?void 0:d.groupIndex,hoveredItemIndex:c?.isCurrent&&c.seriesIndex===u?c.groupIndex:void 0,isSelectionEnabled:"single"===v||"multiple"===v,isDrillEnabled:"on"===j})]})})),S&&H.map(((r,s)=>{if(0===r.length)return;const l=y[s];return t.jsx(x,{yScale:o,series:y[s],xScale:n,groups:f,timeAxisType:M,data:r,color:l.lineColor||l.areaColor||R[s%R.length],seriesIndex:s,isPointInsideMarquee:g,startIndex:e,endIndex:i,markerType:U[s%U.length],orientation:h,isLog:D,activeId:a,getDataItem:C,selectedIds:F,focusedItemIndex:d.seriesIndex===s&&d.isFocusVisible?d.groupIndex:void 0,hoveredItemIndex:c?.isCurrent&&c.seriesIndex===s?c.groupIndex:void 0,isSelectionEnabled:"single"===v||"multiple"===v,isDrillEnabled:"on"===j})}))]})})}}));
//# sourceMappingURL=LineAreaChart-b68c4620.js.map
