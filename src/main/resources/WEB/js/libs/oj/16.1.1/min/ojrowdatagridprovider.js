/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojcore-base","ojs/ojdatagridprovider","ojs/ojeventtarget","ojs/ojdatacollection-common"],function(e,t,s,a,i){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;class r{constructor(e,t){if(this.dataProvider=e,this.options=t,this.version=0,this.keyCache=[],this.lastRowKeyCached=!1,this.GridItem=class{constructor(e,t){this.metadata=e,this.data=t}},this.GridBodyItem=class{constructor(e,t,s,a,i,r){this.rowExtent=e,this.columnExtent=t,this.rowIndex=s,this.columnIndex=a,this.metadata=i,this.data=r}},this.GridHeaderItem=class{constructor(e,t,s,a,i,r){this.index=e,this.extent=t,this.level=s,this.depth=a,this.metadata=i,this.data=r}},this.GridHeaderMetadata=class{constructor(e,t,s,a,i){this.sortDirection=e,this.filter=t,this.expanded=s,this.treeDepth=a,this.showRequired=i}},this.FetchByOffsetGridResults=class{constructor(e,t,s,a,i,r,o,n,l,d,h,u){this.fetchParameters=e,this.rowDone=t,this.columnDone=s,this.rowOffset=a,this.columnOffset=i,this.rowCount=r,this.columnCount=o,this.totalRowCount=n,this.totalColumnCount=l,this.results=d,this.version=h,this.next=u}},this.sortable=t?.sortable,this.sortCriteria=null,this.filterable=t?.filterable,this.filterCriteria=null,this.supportsFilteredRowCount="exact"===e.getCapability("fetchFirst")?.totalFilteredRowCount,t?.expandedObservable){t?.expandedObservable.subscribe(e=>{this.expandedState=e.value})}e.addEventListener("mutate",this._handleUnderlyingMutation.bind(this)),e.addEventListener("refresh",this._handleUnderlyingRefresh.bind(this)),t?.itemMetadata&&(this.itemMetadata=t?.itemMetadata)}async fetchByOffset(e){const t=e.rowOffset;let s=e.rowCount,a={results:[],done:!1,fetchParameters:null};0!=s&&(a=await this.dataProvider.fetchByOffset({offset:t,size:s}));let i=-1;if(!this.isSameFetchParameters(a.fetchParameters)||null==this.totalRowCount){if(this.supportsFilteredRowCount){let e=await this.dataProvider.fetchFirst({size:1,includeFilteredRowCount:"enabled"})[Symbol.asyncIterator]().next();null!=e.value.totalFilteredRowCount&&(i=e.value.totalFilteredRowCount)}else this.isUnfiltered(a.fetchParameters)&&(i=await this.dataProvider.getTotalSize());this.totalRowCount=i}this.updateKeyCache(a,t),this.setupLayout(a.results),this.sortCriteria=a.fetchParameters?.sortCriteria,this.filterCriteria=a.fetchParameters?.filterCriterion;const r=e.columnOffset,o=r+e.columnCount>=this.columns.databody.length,n=Math.max(Math.min(e.columnCount,this.columns.databody.length-r),0);s=Math.min(e.rowCount,a.results.length);const l=a.done;this.lastRowKeyCached=a.done;const d=this.version,h=e.fetchRegions,u=null==h||h.has("all"),c=u||h?.has("databody"),m=u||h?.has("rowHeader"),f=u||h?.has("columnHeader"),p=u||h?.has("rowEndHeader"),w=u||h?.has("columnEndHeader"),y=u||h?.has("rowHeaderLabel"),b=u||h?.has("columnHeaderLabel"),C=u||h?.has("rowEndHeaderLabel"),v=u||h?.has("columnEndHeaderLabel"),g=c?this.getDatabodyResults(a.results,t,s,r,n):void 0,H=m?this.getRowHeaderResults("rowHeader",a.results,t,s):void 0,E=p?this.getRowHeaderResults("rowEndHeader",a.results,t,s):void 0,R=f?this.getColumnHeaderResults("column",r,n):void 0,x=w?this.getColumnHeaderResults("columnEnd",r,n):void 0,L=y?this.getRowHeaderLabelResults():void 0,O=C?this.getRowEndHeaderLabelResults():void 0,F={databody:g,columnHeader:R,columnHeaderLabel:b?this.getColumnHeaderLabelResults("column"):void 0,columnEndHeader:x,columnEndHeaderLabel:v?this.getColumnHeaderLabelResults("columnEnd"):void 0,rowHeader:H,rowHeaderLabel:L,rowEndHeader:E,rowEndHeaderLabel:O};return new this.FetchByOffsetGridResults(e,l,o,t,r,s,n,this.totalRowCount,this.columns.databody.length,F,d,null)}updateKeyCache(e,t){let s=e.fetchParameters;this.isSameFetchParameters(s)||this._clearKeyCache(),this.currentFetchParameters=s,e.results.forEach((e,s)=>{this.keyCache[t+s]=e.metadata.key})}_clearKeyCache(){this.keyCache=[]}isKeyCacheSparse(){for(let e=0;e<this.keyCache.length;e++)if(void 0===this.keyCache[e])return!0;return!1}isSameFetchParameters(e){let s=e?.sortCriteria,a=e?.filterCriterion,i=this.currentFetchParameters?.sortCriteria,r=this.currentFetchParameters?.filterCriterion;return!!t.Object.compareValues(s,i)&&!!t.Object.compareValues(a,r)}isUnfiltered(e){return null==e||null==e.filterCriterion}setupLayout(e){this.setupColumns(e),this.setupColumnHeaders(),this.setupHeaderLabels()}setupColumns(e){if(null==this.columns){this.columns={};const t=e[0];if(this.columns.rowHeader=this.getFromOptions(this.options?.columns?.rowHeader,t),this.columns.rowEndHeader=this.getFromOptions(this.options?.columns?.rowEndHeader,t),this.options?.columns?.databody){let e=this.options.columns.databody;this.columns.databody="function"==typeof e?e(t):e}else if(null==t)this.columns.databody=[];else{const e=Object.keys(t.data);this.columns.databody=e.filter(e=>!this.columns.rowHeader?.includes(e)&&!this.columns.rowEndHeader?.includes(e))}}}setupColumnHeaders(){if(null==this.columnHeaders){this.columnHeaders={};const e=this.getFromOptions(this.options?.columnHeaders?.column,this.columns?.databody,this.columns?.databody,e=>({data:e}));this.columnHeaders.column=this.parseNestedHeaders(e);const t=this.getFromOptions(this.options?.columnHeaders?.columnEnd,this.columns?.databody,this.columns?.databody,e=>({data:e}));this.columnHeaders.columnEnd=this.parseNestedHeaders(t)}}setupHeaderLabels(){null==this.headerLabels&&(this.headerLabels={},this.headerLabels.row=this.getFromOptions(this.options?.headerLabels?.row,this.columns?.rowHeader,this.columns?.rowHeader,e=>e),this.headerLabels.rowEnd=this.getFromOptions(this.options?.headerLabels?.rowEnd,this.columns?.rowEndHeader,this.columns?.rowEndHeader,e=>e),this.headerLabels.column=this.getFromOptions(this.options?.headerLabels?.column,this.columnHeaders?.column?.headerArray),this.headerLabels.columnEnd=this.getFromOptions(this.options?.headerLabels?.columnEnd,this.columnHeaders?.columnEnd?.headerArray))}getFromOptions(e,t,s,a){if(null!=e)return"function"==typeof e?e(t):s&&"attributeName"===e?s.map(a):e}parseNestedHeaders(e){if(null==e)return;"string"==typeof e[0]&&(e=e.map(e=>({data:e})));let t=[],s=1;const a=(e,i,r)=>{let o=0;return e.forEach(e=>{let n=e.depth||1,l=1;e.children&&(l=a(e.children,i,r+n));let d={index:i,extent:l,level:r,depth:n,data:e.data};t.push(d),s=Math.max(s,r+1),o+=l,i+=l}),o};return a(e,0,0),{headerArray:t,levelCount:s}}getCapability(e){return"version"===e?"monotonicallyIncreasing":null}isEmpty(){return"unknown"}setDataProvider(e){this.dataProvider=e}updateItemMetadata(e){let t={ranges:e,version:this.version};this.dispatchEvent(new s.DataGridProviderUpdateEvent(t))}getDatabodyResults(e,t,s,a,i){if(e?.length>0){const r=[];for(let o=0;o<s;o++){const s=e[o];for(let e=0;e<i;e++){const i=this.columns.databody[a+e],n={data:s.data[i]};let l={rowItem:s};const d=new this.GridBodyItem(1,1,t+o,a+e,l,n);if(this.itemMetadata&&"function"==typeof this.itemMetadata.databody){let e=this.itemMetadata.databody(d);e&&Object.assign(d.metadata,e)}r.push(d)}}return r}}getRowHeaderResults(e,t,s,a){const i=this.columns[e];if(t?.length>0&&i?.length>0){const e=[];for(let r=i.length-1;r>=0;r--){const o=i[r];for(let i=0;i<a;i++){const a=s+i,n=t[i],l={data:n.data[o]};let d,h=n.metadata.treeDepth;this.expandedState&&!1===n.metadata.isLeaf&&(d=this.expandedState.has(n.metadata.key)?"expanded":"collapsed");const u={rowItem:n,expanded:d,treeDepth:h},c=new this.GridHeaderItem(a,1,r,1,u,l);e.push(c)}}return e}}getSortState(e){let t=this.columns.databody[e];if(this.sortCriteria&&this.sortCriteria.length>0&&t){let e=this.sortCriteria[0];if(e.attribute===t)return e.direction}return"unsorted"}getFilterState(e){let t=this.columns.databody[e];return this.filterCriteria&&t&&i.doesAttributeExistInFilterCriterion(t,this.filterCriteria)?"filtered":"filterable"}getColumnHeaderResults(e,t,s){if(this.columnHeaders?.[e]){const a=[],i=[],r=this.columnHeaders[e].levelCount;for(let o=0;o<s;o++){const s=t+o;for(let t=0;t<r;t++){if(i[s]?.[t])continue;const o=this.getColumnHeaderItem(s,t,this.columnHeaders[e].headerArray),n={data:o.data},l=o.index,d=o.extent,h=o.level,u=o.depth;let c,m,f;"column"===e&&t+u===r?(this.sortable&&(m=this.getSortState(l)),this.filterable&&(f=this.getFilterState(l)),c=new this.GridHeaderMetadata(m,f)):c={};const p=new this.GridHeaderItem(l,d,h,u,c,n);a.push(p);for(let e=l;e<l+d;e++){null==i[e]&&(i[e]=[]);for(let s=t;s<t+u;s++)i[e][s]=!0}}}return a}}getColumnHeaderItem(e,t,s){return s.find(s=>{let a=s.index,i=s.extent,r=s.level,o=s.depth;return e>=a&&e<a+i&&t>=r&&t<r+o})}getRowHeaderLabelResults(){let e;if("attributeName"===this.headerLabels?.row?e=this.columns.rowHeader:this.headerLabels?.row&&(e=this.headerLabels.row),e){let t=[];for(let s=e.length-1;s>=0;s--)t.push(new this.GridItem({},{data:e[s]}));return t}}getRowEndHeaderLabelResults(){let e;if("attributeName"===this.headerLabels?.rowEnd?e=this.columns.rowEndHeader:this.headerLabels?.rowEnd&&(e=this.headerLabels.rowEnd),e){let t=[];for(let s=e.length-1;s>=0;s--)t.push(new this.GridItem({},{data:e[s]}));return t}}getColumnHeaderLabelResults(e){if(this.headerLabels?.[e]){let t=[];for(let s=this.headerLabels[e].length-1;s>=0;s--)t.push(new this.GridItem({},{data:this.headerLabels[e][s]}));return t}}_handleUnderlyingMutation(e){this.version++;let t,a,r,o,n=e.detail,l=!1,d=this.isKeyCacheSparse(),h=this.lastRowKeyCached&&!d;if(n.remove&&n.remove.keys.size>0&&([l,t,o]=this._convertEventDetail(n.remove,"remove",d)),o?.sort((e,t)=>t.index-e.index).forEach(e=>{this.keyCache.splice(e.index,1),-1!==this.totalRowCount&&(this.totalRowCount-=1)}),!l&&n.add&&n.add.keys.size>0){let e=i.getAddEventKeysResult(this.keyCache,n.add,h);if(l=d&&e.length!==this.keyCache.length+n.add.keys.size,!l){let t=[];n.add.keys.forEach(s=>{let a=e.indexOf(s),i=t.find(e=>a===e.offset+e.count);i?i.count+=1:t.push({offset:a,count:1}),-1!==this.totalRowCount&&(this.totalRowCount+=1)}),r={axis:"row",ranges:t,version:this.version},this.keyCache=e}}!l&&n.update&&n.update.keys.size>0&&([l,a]=this._convertEventDetail(n.update,"update",d)),l?(this.resetInternal(),this.dispatchEvent(new s.DataGridProviderRefreshEvent)):(t&&this.dispatchEvent(new s.DataGridProviderRemoveEvent(t)),r&&this.dispatchEvent(new s.DataGridProviderAddEvent(r)),a&&this.dispatchEvent(new s.DataGridProviderUpdateEvent(a)))}_convertEventDetail(e,t,s){let a,i=[],r=!1,o=0;if(e.keys.forEach(t=>{let a=e.indexes?.[o],n=this.keyCache.indexOf(t);-1!=n?i.push({index:n,key:t}):null!=a?i.push({index:a,key:t}):s&&(r=!0),o++}),i.length>0)if("remove"===t||"add"===t){a={axis:"row",ranges:i.map(e=>({offset:e.index,count:1})),version:this.version}}else if("update"===t){a={ranges:i.map(e=>({rowOffset:e.index,rowCount:1,columnOffset:0,columnCount:-1})),version:this.version}}return[r,a,i]}_handleUnderlyingRefresh(e){this.version++;let t,a=this.isKeyCacheSparse(),i=!0;if(null!=e?.detail?.disregardAfterKey){const s=this.keyCache.indexOf(e.detail.disregardAfterKey);if(-1!==s)t={disregardAfterRowOffset:s},this.keyCache.length=s+1,this.totalRowCount=-1===this.totalRowCount?-1:s+1,this.lastRowKeyCached=!1,i=!1;else if(!a)return}i&&this.resetInternal();const r=new s.DataGridProviderRefreshEvent(t);this.dispatchEvent(r)}resetInternal(){this._clearKeyCache(),this.totalRowCount=null,this.currentFetchParameters=null,this.sortCriteria=null,this.lastRowKeyCached=!1}}a.EventTargetMixin.applyMixin(r),e.RowDataGridProvider=r,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojrowdatagridprovider.js.map