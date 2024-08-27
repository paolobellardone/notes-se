/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojmap","ojs/ojset","ojs/ojdataprovider","ojs/ojeventtarget","ojs/ojlogger"],function(t,e,s,i,n){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e;
/**
     * @preserve Copyright 2013 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
class r{constructor(t,e){var i,n;this.baseDataProvider=t,this.options=e,this._mapJoinAttributes=new Map,this._fks=[],this._transform=[],this._joinDPs=[],this.JoiningAsyncIterable=(n=class{constructor(t,e,s){this._parent=t,this.params=e,this._asyncIterator=s,this[i]=()=>new this._parent.JoiningAsyncIterator(this._parent,this._asyncIterator,this.params)}},i=Symbol.asyncIterator,n),this.JoiningAsyncIterator=class{constructor(t,e,s){this._parent=t,this._baseIterator=e,this._params=s}_fetchNext(){const t=this._params?.signal;return s.wrapWithAbortHandling(t,t=>t(this._baseIterator.next().then(t=>t)),!1)}next(){return this._fetchNext().then(t=>null!=t&&null!=t.value&&null!=this._parent.options?this._parent._joiningData(t.value.data,this._parent.options).then(e=>(t.value.data=e,t)):t)}},this.FetchByKeysResults=class{constructor(t,e,s){this._parent=t,this.fetchParameters=e,this.results=s,this[r._FETCHPARAMETERS]=e,this[r._RESULTS]=s}},this.FetchByOffsetResults=class{constructor(t,e,s,i){this._parent=t,this.fetchParameters=e,this.results=s,this.done=i,this[r._FETCHPARAMETERS]=e,this[r._RESULTS]=s,this[r._DONE]=i}},this.Item=class{constructor(t,e,s){this._parent=t,this.metadata=e,this.data=s,this[r._METADATA]=e,this[r._DATA]=s}},this.ItemMetadata=class{constructor(t,e){this._parent=t,this.key=e,this[r._KEY]=e}},this._getJoinSpec(e)}fetchFirst(t){let e=t;s.FilterUtils.validateFilterCapabilities(this.getCapability("filter"),t?.filterCriterion),t&&t.attributes?e={...t,attributes:this._separateBaseJoinAttributes(t)}:this._mapJoinAttributes=null;const i=this.baseDataProvider.fetchFirst(e);return new this.JoiningAsyncIterable(this,t,i[Symbol.asyncIterator]())}fetchByKeys(e){let i=e;if(e&&e.attributes){const t=this._separateBaseJoinAttributes(e);i={keys:e.keys,attributes:t,scope:e.scope}}else this._mapJoinAttributes=null;const n=e?.signal;return s.wrapWithAbortHandling(n,s=>s(this.baseDataProvider.fetchByKeys(i).then(s=>{const i=new t;if(null!=s&&null!=s.results){const t=[],n=[],r=[];let a=0;return e.keys.forEach(t=>{r[a]=t,a++}),this._fetchByKeyResultsToArray(s,r,n,t),this._joiningData(t,this.options).then(t=>(a=0,e.keys.forEach(e=>{null!==t[a]&&i.set(e,new this.Item(this,n[a],t[a])),a++}),new this.FetchByKeysResults(this,e,i)))}})),!1)}fetchByOffset(t){let e=t;if(s.FilterUtils.validateFilterCapabilities(this.getCapability("filter"),t?.filterCriterion),t&&t.attributes){const s=this._separateBaseJoinAttributes(t);e={attributes:s,clientId:t.clientId,filterCriterion:t.filterCriterion,offset:t.offset,size:t.size,sortCriteria:t.sortCriteria}}else this._mapJoinAttributes=null;const i=t?.signal;return s.wrapWithAbortHandling(i,s=>s(this.baseDataProvider.fetchByOffset(e).then(e=>{if(null!=e.results){const s=[],i=[];for(let t=0;t<e.results.length;t++)s[t]=e.results[t].metadata,i[t]=e.results[t].data;const n=[];return this._joiningData(i,this.options).then(i=>{for(let t=0;t<e.results.length;t++)n[t]=new this.Item(this,s[t],i[t]);return new this.FetchByOffsetResults(this,t,n,e.done)})}})),!1)}containsKeys(t){return this.baseDataProvider.containsKeys(t).then(t=>t)}getTotalSize(){return this.baseDataProvider.getTotalSize().then(t=>t)}isEmpty(){return this.baseDataProvider.isEmpty()}getCapability(t){return"sort"===t||"filter"===t?null:this.baseDataProvider.getCapability(t)}createOptimizedKeySet(t){return new e(t)}createOptimizedKeyMap(e){if(e){const s=new t;return e.forEach(function(t,e){s.set(e,t)}),s}return new t}_getJoinSpec(t){const e=t.joins;this._joinAlias=Object.keys(e);for(let t=0;t<this._joinAlias.length;t++){const s=e[this._joinAlias[t]];null!=s?(null!=s.foreignKeyMapping.foreignKey?this._fks[t]=s.foreignKeyMapping.foreignKey:null!=s.foreignKeyMapping.foreignKeys?this._fks[t]=s.foreignKeyMapping.foreignKeys:this._fks[t]=null,null!=s.foreignKeyMapping.transform?this._transform[t]=s.foreignKeyMapping.transform:this._transform[t]=null,this._joinDPs[t]=s.joinedDataProvider):(this._fks[t]=null,this._joinDPs[t]=null)}}_separateBaseJoinAttributes(t){this._mapJoinAttributes=new Map;const e=t.attributes;let s=0,i=[];for(let t of e){let e,n;t instanceof String||"string"==typeof t?(e=t,n=t):(e=t.name,n=t.attributes);let r=!1;for(let t=0;null!=this._joinAlias&&t<this._joinAlias.length;t++)if(e===this._joinAlias[t]){r=!0;break}if(r)if(this._mapJoinAttributes.has(e)){let t=this._mapJoinAttributes.get(e);null!=n&&(null==t&&(t=[]),t=t.concat(n),this._mapJoinAttributes.set(e,t))}else this._mapJoinAttributes.set(e,n);else i[s]=n,s++}for(let t=0;null!=this._fks&&t<this._fks.length;t++){const e=this._fks[t];i.includes(e)||(e instanceof Array?i=i.concat(e):(i[s]=this._fks[t],s++))}return i}_joiningData(t,e){if(null==t||0==t.length||null==e.joins)return Promise.resolve(t);const s=[],i=[];this._getFKValues(t,this._fks,this._transform,s);for(let t=0;t<this._joinAlias.length;t++){const e=this._joinDPs[t],r=e.getCapability("fetchByKeys");if(null!=r&&"batchLookup"===r.implementation||n.warn(`Warning: The joined data provider named '${this._joinAlias[t]}' does not support 'batchLookup' implementation for FetchByKeysCapability.`),null==e)i[t]=null;else if(null==this._mapJoinAttributes)i[t]=e.fetchByKeys({keys:s[t]});else if(this._mapJoinAttributes.has(this._joinAlias[t])){const n=this._mapJoinAttributes.get(this._joinAlias[t]);i[t]=e.fetchByKeys({keys:s[t],attributes:n})}else i[t]=null}return Promise.all(i).then(e=>{const i=[],n=[];for(let r=0;null!=e&&r<e.length;r++)(null==this._mapJoinAttributes||this._mapJoinAttributes.has(this._joinAlias[r]))&&(this._fetchByKeyResultsToArray(e[r],s[r],i,n),this._assignAliasData(t,this._joinAlias[r],n));return t})}_getFKValues(t,e,s,i){for(let n=0;n<e.length;n++){const r=[];for(let i=0;i<t.length;i++)if(null!=t[i]&&null!=e[n])if(null!=s&&null!=s[n]&&null!=s[n]){const a=new Object;if(e[n]instanceof Array)for(let s of e[n])a[s]=t[i][s];else a[e[n]]=t[i][e[n]];r[i]=s[n](a)}else if(e[n]instanceof Array){r[i]=[];for(let s=0;s<e[n].length;s++)r[i][s]=t[i][e[n][s]]}else r[i]=t[i][e[n]];else r[i]=null;i[n]=r}}_fetchByKeyResultsToArray(t,e,s,i){if(null!=t&&null!=t.results&&0!==t.results.size)for(let n=0;n<e.length;n++){const r=t.results.get(e[n]);null!=r?(s[n]=r.metadata,i[n]=r.data):(s[n]=null,i[n]=null)}}_assignAliasData(t,e,s){for(let i=0;i<t.length;i++)null!=t[i]&&null!=s&&(t[i][e]=s[i])}}return r._REFRESH="refresh",r._MUTATE="mutate",r._ADDEVENTLISTENER="addEventListener",r._DATA="data",r._METADATA="metadata",r._FETCHPARAMETERS="fetchParameters",r._RESULTS="results",r._DONE="done",r._KEY="key",i.EventTargetMixin.applyMixin(r),r});
//# sourceMappingURL=ojjoiningdataprovider.js.map