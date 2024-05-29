/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojcore","knockout","ojs/ojmodel"],function(e,n,t,r){"use strict";n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;const o=function(){};n._registerLegacyNamespaceProp("KnockoutUtils",o),o.internalObjectProperty="oj._internalObj",o.underUpdateProp="oj._underUpdate",o.collUpdatingProp="oj.collectionUpdating",o.subscriptionProp="oj.collectionSubscription",o.updatingCollectionFunc="oj.collectionUpdatingFunc",o.map=function(e,n,l){var a;function i(n){return function(t){a[o.underUpdateProp]||e.set(n,t)}}if(e instanceof r.Collection){var c,p,d=new Array(e._getLength());if(a=l?t.observableArray(d):d,o._storeOriginalObject(a,e),l)for(p=0;p<e._modelIndices.length;p++)c=e._modelIndices[p],a()[c]=o.map(e._atInternal(c,null,!0,!1),n);else for(p=0;p<e._modelIndices.length;p++)c=e._modelIndices[p],a[c]=o.map(e._atInternal(c,null,!0,!1),n);var u=function(n){try{if(!a[o.underUpdateProp]){a[o.collUpdatingProp]=!0;for(var t=0;t<n.length;t++){var r=n[t].index,l=o._getModel(n[t].value),i=n[t].status;"added"===i?r>=e.length-1?e.add(l):e.add(l,{at:r}):"deleted"===i&&e._removeInternal(l,r)}e.comparator&&(a[o.underUpdateProp]=!0,a.sort(function(n,t){return o._callSort(n,t,e.comparator,e,this)}),a[o.underUpdateProp]=!1)}}finally{a[o.collUpdatingProp]=!1}};l&&a.subscribe&&(a[o.updatingCollectionFunc]=u,a[o.subscriptionProp]=a.subscribe(u,null,"arrayChange"));e.OnInternal(r.Events.EventType.ADD,function(e,t,l){try{if(a[o.collUpdatingProp])return;if(t instanceof r.Collection){a[o.underUpdateProp]=!0;var i=t._localIndexOf(e);if(void 0!==i&&i>-1){var c=o.map(e,n);if(l.fillIn){for(var p=Array.isArray(a)?a.length:a().length;p<i;p++)a.splice(p,0,o.map(t._atInternal(p,null,!0,!1),n));a.splice(i,1,c)}else a.splice(i,0,c)}}}finally{a[o.underUpdateProp]=!1}},void 0,void 0,!0),e.OnInternal(r.Events.EventType.REMOVE,function(e,n,t){try{if(a[o.collUpdatingProp])return;a[o.underUpdateProp]=!0;var r=t.index;a.splice(r,1)}finally{a[o.underUpdateProp]=!1}},void 0,void 0,!0),e.OnInternal(r.Events.EventType.RESET,function(e){try{if(a[o.collUpdatingProp])return;e instanceof r.Collection&&(a[o.underUpdateProp]=!0,t.isObservable(a)?(a[o.subscriptionProp]&&a[o.subscriptionProp].dispose(),a.removeAll(),a[o.updatingCollectionFunc]&&a.subscribe(a[o.updatingCollectionFunc],null,"arrayChange")):a=[])}finally{a[o.underUpdateProp]=!1}},void 0,void 0,!0),e.OnInternal(r.Events.EventType.SORT,function(n){try{if(a[o.collUpdatingProp])return;n instanceof r.Collection&&(a[o.underUpdateProp]=!0,a.sort(function(t,r){return o._callSort(t,r,e.comparator,n,this)}))}finally{a[o.underUpdateProp]=!1}},void 0,void 0,!0)}else{if(void 0===e)return;a={};for(var s=e.attributes,f=Object.keys(s),v=0;v<f.length;v++){var b=f[v],g=t.observable(e.get(b));a[b]=g;var y=i(b);y._prop=b,g.subscribe&&g.subscribe(y)}e.OnInternal(r.Events.EventType.CHANGE,function(e){try{a[o.underUpdateProp]=!0;for(var n=e.changedAttributes(),r=Object.keys(n),l=0;l<r.length;l++){var i=r[l];a[i]?a[i](e.get(i)):a[i]=t.observable(e.get(i))}}finally{a[o.underUpdateProp]=!1}},void 0,void 0,!0),o._storeOriginalObject(a,e),n&&n(a)}return a},o._getModel=function(e){return e instanceof r.Model?e:Object.prototype.hasOwnProperty.call(e,o.internalObjectProperty)?e[o.internalObjectProperty]:e},o._callSort=function(e,n,t,l,a){return r.Collection.SortFunc(o._getModel(e),o._getModel(n),t,l,a)},o._storeOriginalObject=function(e,n){Object.defineProperty(e,o.internalObjectProperty,{value:n,enumerable:!1})};const l=o.map;e.map=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojknockout-model.js.map