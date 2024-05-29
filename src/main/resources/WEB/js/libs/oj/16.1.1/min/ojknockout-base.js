/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojkoshared","ojs/ojcore","ojs/ojcustomelement-registry","knockout","ojs/ojdomutils","ojs/ojlogger","ojs/ojcustomelement-utils","ojs/ojmonitoring","ojs/ojbindpropagation","ojs/ojkeysetimpl","ojs/ojcontext","ojs/ojtemplateengine-ko","ojs/ojcore-base","ojs/ojknockouttemplateutils","ojs/ojresponsiveknockoututils"],function(e,t,n,r,i,s,o,a,l,d,u,h,c,p,f,g){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,u=u&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u,h=h&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h,c=c&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c,p=p&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p,t.addPostprocessor({nodeHasBindings:function(e,t){return n.BaseCustomElementBridge?t||1===e.nodeType&&r.isElementRegistered(e.nodeName):t},getBindingAccessors:function(e,t,n){if(1===e.nodeType){var i=e.nodeName;r.isElementRegistered(i)&&((n=n||{})._ojCustomElement=function(){const e=r.isComposite(i),t=r.isVComponent(i);return{skipThrottling:e||t}})}return n}});const v=function(e,t){this.Init&&this.Init(e,t)};var m,y,_;n.Object.createSubclass(v,n.Object,"oj.ComponentBinding"),n._registerLegacyNamespaceProp("ComponentBinding",v),v.deliverChanges=function(){t.getGlobalChangeQueue().deliverChanges()},v.__cloneIfArray=function(e){return Array.isArray(e)&&(e=e.slice()),e},v.__getKnockoutVersion=function(){return i.version},m="cleanExternalData",y=i.utils.domNodeDisposal,_=y[m],y[m]=function(e){var t=s?s.setInKoCleanExternal:null;t&&t(e);try{_(e)}finally{t&&t(null)}};const b=function(e,t){this.Init(e,t)};n.Object.createSubclass(b,n.Object,"ComponentBinding.ComponentChangeTracker"),b.prototype.Init=function(e,t){b.superclass.Init.call(this),this._updateCallback=e,this._queue=t,this._changes={},this._suspendCountMap={}},b.prototype.addChange=function(e,t){this._isSuspended(e)||this._disposed||(this._changes[e]=t,this._queue.registerComponentChanges(this))},b.prototype.dispose=function(){this._disposed=!0},b.prototype.resume=function(e){var t=this._suspendCountMap[e]||0;(t-=1)<0?o.error("ComponentChangeTracker suspendCount underflow"):0===t?delete this._suspendCountMap[e]:this._suspendCountMap[e]=t},b.prototype.suspend=function(e){var t=this._suspendCountMap[e]||0;this._suspendCountMap[e]=t+1},b.prototype.applyChanges=function(e){this._disposed||this._updateCallback(e)},b.prototype.flushChanges=function(){var e=this._changes;return this._changes={},e},b.prototype._isSuspended=function(e){return(this._suspendCountMap[e]||0)>=1};const C={};var E,D;n._registerLegacyNamespaceProp("__ExpressionUtils",C),E=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,D="_ko_property_writers",C.getPropertyWriterExpression=function(e){if(null==e||["true","false","null","undefined"].indexOf(e)>=0)return null;var t=(e=e.trim()).match(E);if(null===t)return null;var n=t[1]?"Object("+t[1]+")"+t[2]:e;return"{"+D+": function(v){"+n+"=v;}}"},C.getWriter=function(e){return e[D]};const N=function(e,n,s){var d=function(){if(s)return null;return new b(function(t){for(var n=Object.keys(t),r=0;r<n.length;r++){y(n[r])}try{e.setProperties(t)}finally{for(var i=0;i<n.length;i++){_(n[i])}}},t.getGlobalChangeQueue())}(),u={},h={},c={},p={},f="Changed";function g(e){return e.$current||e.$data}function m(t,n,i){var s=u[n];if(s||(s=function(e){var t,n=g(e),r=function(r){t&&t(r,n,e)};return r.setListener=function(e){t=e},r}(t),u[n]=s,e.addEventListener(n,s)),!(null==i||i instanceof Function)){var o=a.AttributeUtils.eventTypeToEventListenerProperty(n),l=`Invalid type '${typeof i}' found for attribute '${a.AttributeUtils.propertyNameToAttribute(o)}'. Expected value of type 'function'."`;if(r.isElementRegistered(e.tagName)){a.CustomElementUtils.getElementState(e).rejectBindingProvider(l)}throw new a.JetElementError(e,l)}s.setListener(i)}function y(e){var t=p[e]||0;t+=1,p[e]=t}function _(e){var t=p[e];t?(t-=1,p[e]=0===t?null:t):o.error("Property count undefrlow")}this.setupPropertyBinding=function(r,s,u,b,E){if(!u)return;var D=function(e,t){var n=e.split("."),r=t;n.shift();for(var i=0;i<n.length&&(r=r.properties);i++)r=r[n[i]];return r}(s,u);if(!D)return;var N=h[s];N&&(N.dispose(),h[s]=null);var A=c[s];if(A&&(e.removeEventListener(s+f,A),c[s]=null),u._domListener){var P=a.AttributeUtils.eventListenerPropertyToEventType(s);m(n,P,null)}let x,B,j;if(void 0===r){let e;E?n.$provided&&(e=n.$provided.get(E)):e=null,e&&(x=()=>i.unwrap(e))}else{const e=a.AttributeUtils.getExpressionInfo(r);B=e.expr,B&&(x=t.createEvaluator(B,n),j=e.downstreamOnly)}if(x){if(!u.readOnly){var w=!0;i.ignoreDependencies(function(){h[s]=i.computed(function(){var t,r,o,l=x(n),h=i.utils.unwrapObservable(l);if(u._domListener){var c=a.AttributeUtils.eventListenerPropertyToEventType(s);m(n,c,h)}else Array.isArray(h)&&(h=h.slice()),u._eventListener&&h&&h instanceof Function&&(r=h,o=g(t=n),h=function(e){r(e,o,t)}),!w&&d?d.addChange(s,h):function(t,n){y(t);try{e.setProperty(t,n)}catch(t){throw a.CustomElementUtils.getElementState(e).rejectBindingProvider(t),t}finally{_(t)}}(s,h),w&&b&&b(h)})}),w=!1}void 0!==B&&u.writeback&&!j&&(c[s]=function(r,s,a){var d=r.split("."),u=d[0],h=function(e){if(!function(e){return p[e]}(u)){let u,h;i.ignoreDependencies(function(){for(var c=e.detail.value,p=1;p<d.length;p++){c=c[d[p]]}var f=a(n);if(i.isObservable(f))i.isWriteableObservable(f)?h=f:u="the observable is not writeable";else{var g=C.getPropertyWriterExpression(s);if(null!=g){const e=t.createEvaluator(g,n);h=C.getWriter(e(n))}else u="the expression is not a valid update target"}h?l.performMonitoredWriteback(r,h,e,v.__cloneIfArray(c)):u&&o.info("The expression '%s' for property '%s' was not updated because %s.",s,r,u)})}};return e.addEventListener(u+f,h),h}(s,B,x))}},this.teardown=function(){var t,n=Object.keys(h);for(t=0;t<n.length;t++){var r=h[n[t]];r&&r.dispose()}for(h={},n=Object.keys(c),t=0;t<n.length;t++){var i=n[t].split(".")[0];e.removeEventListener(i+f,c[i])}for(c={},n=Object.keys(u),t=0;t<n.length;t++){var s=n[t];e.removeEventListener(s,u[s])}u={},d&&d.dispose()}},A=function(){this._resolveWhenChildrenBindingsApplied=function(e,t){var n=this._getChildrenBindingsAppliedPromises(e);if("none"===t||0===n.length)a.CustomElementUtils.getElementState(e).resolveBindingProvider(this);else{for(var r=[];n.length>0;){var i=n.shift();("nearestCustomElement"===t||"immediate"===t&&!0===i.immediate)&&r.push(i.promiseCallback)}Promise.all(r).then(function(){this._resolveWhenChildrenBindingsApplied(e,t)}.bind(this))}},this._getChildrenBindingsAppliedPromises=function(e,t){return!e._whenChildrenBindingsApplied&&t&&Object.defineProperty(e,"_whenChildrenBindingsApplied",{value:[],enumerable:!1}),e._whenChildrenBindingsApplied||[]},this.__RegisterBindingAppliedPromiseForChildren=function(e,t){var n=null;if(e){var r=new Promise(function(e){n=e});this._getChildrenBindingsAppliedPromises(e,!0),e._whenChildrenBindingsApplied.push({immediate:t,promiseCallback:r})}return n},this.__NotifyBindingsApplied=function(e){var t=a.CustomElementUtils.getElementState(e).getTrackChildrenOption();this._resolveWhenChildrenBindingsApplied(e,t)},this.__NotifyBindingsDisposed=function(e){a.CustomElementUtils.getElementState(e).disposeBindingProvider(e)},this.__GetThrottlePromise=function(){return t.getGlobalChangeQueue().getThrottlePromise()},this.__ExtendBindingContext=function(e,n,r,i,s){return t.extendBindingContext(e,n,r,i,s)},this.__ContextFor=function(e){return e.__ojBindingContext?e.__ojBindingContext:i.contextFor(e)},this.__UnwrapObservable=function(e){return i.utils.unwrapObservable(e)},this.__IsObservable=function(e){return i.isObservable(e)},this.__KoComputed=function(e,t,n){return i.computed(e,t,n)},this.__KoIsInitial=function(){return i.computedContext.isInitial()},this.__CleanNode=function(e){i.cleanNode(e)}};A.getInstance=function(){return A._instance},A._instance=new A,oj._registerLegacyNamespaceProp("_KnockoutBindingProvider",A),function(){i.bindingHandlers._ojCustomElement={after:["attr"],init:function(l,u,h,c,p){var f,g;!p||!p.$provided||p.$provided instanceof Map||(p.$provided=new Map(Object.entries(p.$provided)));const v=r.getMetadata(l.tagName),m=v.properties||{},{provide:y,consume:_,cleanup:b}=function(e,r){const i=new Map,l=new Map,u=Object.create(null),h=d.getPropagationMetadataViaCache(e.localName,r);if(null!==h){const c=r.properties||{};for(const[r,[p,f]]of h){if(void 0!==p){const l=[],h=[];if(r===d.STATIC_PROPAGATION?p.forEach(e=>{i.set(e.name,e)}):p.forEach(e=>{const t=e.name;if(void 0===t)throw new Error("name attribute for the binding/provide metadata is required!");const n=e.default,r=s(e.transform,n);l.push(r),h.push({name:t,obs:r})}),h.length>0){const s=o(l);i.set(r,{set:s,vars:h});const d=n(s),p=r+t;e.addEventListener(p,d),u[p]=d;const f=a.AttributeUtils.propertyNameToAttribute(r);if(e.hasAttribute(f)){const t=e.getAttribute(f);a.AttributeUtils.getExpressionInfo(t).expr||s(a.AttributeUtils.attributeToPropertyValue(e,f,t,c[r]))}}}if(void 0!==f)if(r===d.CONSUMED_CONTEXT)l.set(r,f);else{const e=f.name;if(void 0===e)throw new Error("'name' property on the binding/consume metadata is required!");l.set(r,e)}}}function c(){Object.keys(u).forEach(t=>e.removeEventListener(t,u[t]))}return{provide:i,consume:l,cleanup:c}}(l,v);function C(){f&&(f.teardown(),f=null),g&&(l.removeEventListener(e,g),g=null),A.getInstance().__NotifyBindingsDisposed(l)}i.computed(function(){var t=u().skipThrottling;const n=i.computedContext.isInitial();n||C(),function(t,n){f=new N(l,p,t);var r={_domListener:!0};a.CustomElementUtils.getElementState(l).beginApplyingBindings();for(var s=l.attributes,o=0;o<s.length;o++){var u=s[o],h=a.AttributeUtils.attributeToPropertyName(u.nodeName);let e,t;const i=a.AttributeUtils.isEventListenerProperty(h)&&!m[h];if(!i){t=h.split(".")[0];const r=y.get(t);e=n&&r?r.set:void 0}f.setupPropertyBinding(u.value,h,i?r:m[t],e)}_.forEach((e,t)=>{if("string"!=typeof t||l.hasAttribute(a.AttributeUtils.propertyNameToAttribute(t))){if(t===d.CONSUMED_CONTEXT){const t=p.$provided,n=new Map;e.forEach(e=>{t&&t.has(e)&&n.set(e,i.unwrap(t.get(e)))}),l.setProperty("__oj_private_contexts",n)}}else{const r=y.get(t),i=n&&r?r.set:void 0;f.setupPropertyBinding(void 0,t,m[t],i,e)}}),g=function(e){var t=e.detail,n=t.attribute,i=a.AttributeUtils.attributeToPropertyName(n),s=a.AttributeUtils.isEventListenerProperty(i)&&!m[i]?r:m[i.split(".")[0]];f.setupPropertyBinding(t.value,i,s,void 0,_.get(i))},l.addEventListener(e,g)}(t,n)},null,{disposeWhenNodeIsRemoved:l}),i.utils.domNodeDisposal.addDisposeCallback(l,function(){C(),b()});const E=function(e,t){if(0===t.size)return e;const n=e.$provided,r=new Map(n);return t.forEach(e=>{if(e.vars){e.vars.forEach(e=>{const t=e.obs;r.set(e.name,t)})}else r.set(e.name,e.default)}),e.extend({$provided:r})}(p,y);return i.applyBindingsToDescendants(E,l),A.getInstance().__NotifyBindingsApplied(l),{controlsDescendantBindings:!0}}};const e="attribute-changed",t="Changed";function n(e){return t=>e(t.detail.value)}function s(e,t){const n=i.observable(t);return e?i.pureComputed({write:t=>n(e.hasOwnProperty(t)?e[t]:t),read:()=>n()}):n}function o(e){return t=>e.forEach(e=>e(t))}}(),function(){var e="_ojbindingsobj";function n(e,t,n,r){var i=o(e.getAttribute(n),r);if(i)return s(e,t,"ko "+t+":"+i)}function s(e,t,n){for(var r=e.tagName.toLowerCase(),i=r,s=e.attributes,o=0;o<s.length;o++){var l=s[o];i+=" ",i+=l.name,i+="='",i+=l.value,i+="'"}var d=e.parentNode,u=document.createComment(i),h=document.createComment("/"+r);d.insertBefore(u,e),e[a.OJ_BIND_CONVERTED_NODE]=u;var c=document.createComment(n),p=document.createComment("/ko");d.insertBefore(c,e);var f,g=[u,c];if("if"===t)for(;e.childNodes.length>0;)f=e.childNodes[0],d.insertBefore(f,e),g.push(f);else if("_ojBindForEach_"===t)for(;e.childNodes.length>0;)f=e.childNodes[0],d.insertBefore(f,e),g.push(f);return d.insertBefore(p,e),g.push(p),d.replaceChild(h,e),g.push(h),g}function o(e,t){if(null!=e){var n=a.AttributeUtils.getExpressionInfo(e).expr;return null==n&&(n=t?"'"+e+"'":e),n}return null}function l(e,n,r,s){var o,l=a.AttributeUtils.getExpressionInfo(r).expr;if(null==l){var d=a.AttributeUtils.coerceValue(n,"class",r,"any");o=function(){return Array.isArray(d)?d.join(" "):d}}else{var u=t.createEvaluator(l,s).bind(null,s);o=i.pureComputed(function(){var e=i.unwrap(u());return Array.isArray(e)?e.join(" "):e})}e.css=o}function d(e,n,r,i,s){var o=a.AttributeUtils.getExpressionInfo(r).expr;return null==o?function(){return"object"===s?a.AttributeUtils.coerceValue(e,n,r,s):r}:t.createEvaluator(o,i).bind(null,i)}function u(e){return function(){for(var t={},n=Object.keys(e),r=0;r<n.length;r++){var i=n[r];t[i]=e[i]()}return t}}function h(t){if(1!==t.nodeType)return{};if(!t[e]){for(var n={},i=[],s=[],o=[],a=t.attributes,l=0;l<a.length;l++){var d=a[l],u=c(d.name);u&&("style"===u?n._STYLE_BIND=u:"style."===u.substring(0,6)?s.push(u):i.push(u)),r.isElementRegistered(t.nodeName)||"on-"!==d.name.substring(0,3)||o.push(d)}if(s.length){if(n._STYLE_BIND)throw new Error("Cannot have both style and style.* data bound attributes on "+t.tagName+" with id "+t.id);n._STYLE_BIND=s}i.length&&(n._ATTR_BIND=i),o.length&&(n._EVENT_BIND=o),Object.defineProperty(t,e,{value:n})}return t[e]}function c(e){return e&&":"===e.charAt(0)?e.slice(1):null}function p(e){return":"+e}t.registerPreprocessor("oj-bind-text",function(e){return n(e,"text","value",!0)}),t.registerPreprocessor("oj-bind-if",function(e){return n(e,"if","test",!1)}),t.registerPreprocessor("oj-bind-for-each",function(e){var t=e.getAttribute("data"),n=a.AttributeUtils.getExpressionInfo(t).expr;if(!n)try{var r=JSON.parse(t);if(!Array.isArray(r))throw new Error("got value "+t);n=t}catch(e){throw new Error("The value on the oj-bind-for-each data attribute should be either a JSON array or an expression : "+e)}var i=o(e.getAttribute("as"),!0);if(!n)return;var l="ko _ojBindForEach_:{data:"+n;return s(e,"_ojBindForEach_",l+=i?",as:"+i+"}":"}")}),t.addPostprocessor({nodeHasBindings:function(e,t){var n=h(e);return t||null!=n._ATTR_BIND||null!=n._STYLE_BIND||null!=n._EVENT_BIND},getBindingAccessors:function(e,t,n){if(1===e.nodeType){n=n||{};var r,s,o=h(e),c=o._STYLE_BIND;if(c){if(n.style)throw new Error("Cannot have both style data-bind and JET style binding on "+e.tagName+" with id "+e.id);if("style"===c)n[c]=d(e,c,e.getAttribute(p(c)),t,"object");else{var f={};for(r=0;r<c.length;r++){s=c[r],f[a.AttributeUtils.attributeToPropertyName(s.substring(6))]=d(e,s,e.getAttribute(p(s)),t,"string")}n.style=u(f)}}var g=o._ATTR_BIND;if(g){if(n.attr)throw new Error("Cannot have both attr data-bind and JET attribute binding on "+e.tagName+" with id "+e.id);var v={};for(r=0;r<g.length;r++)"class"===(s=g[r])?l(n,e,e.getAttribute(p(s)),t):v[s]=d(e,s,e.getAttribute(p(s)),t,"string");n.attr=u(v)}var m=o._EVENT_BIND;if(m){var y=new N(e,t,!0);for(r=0;r<m.length;r++){var _=m[r],b=a.AttributeUtils.attributeToPropertyName(_.nodeName);y.setupPropertyBinding(_.value,b,{_domListener:!0})}i.utils.domNodeDisposal.addDisposeCallback(e,function(){y&&(y.teardown(),y=null)})}}return n}})}(),
/**
   * @license
   * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
   * Licensed under The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   *
   * @license
   * Knockout Fast Foreach v0.6.0 (2016-07-28T11:02:54.197Z)
   * By: Brian M Hunt (C) 2015 | License: MIT
   *
   * Adds `fastForEach` to `ko.bindingHandlers`.
   *
   * Modification notice: The code is obtained from https://github.com/brianmhunt/knockout-fast-foreach
   * and modified by Oracle JET team to be included into Oracle JET project.
   * @ignore
   */
function(){var e=document&&"function"==typeof document.createDocumentFragment;function t(e,t,n){return{status:"added",value:e,index:t,key:n}}function n(e){return{status:"deleted",value:{},index:e}}function r(e,t){var n;if(e){var r=e.length;n=new Array(r);for(var i=0;i<r;i++)n[i]=t(e[i],i,e)}return n}var s=function(e,t,n){if(Array.isArray(t)){var r=document.createDocumentFragment();for(let e=0,n=t.length;e!==n;++e)r.appendChild(t[e]);if(i.virtualElements.insertAfter(e,r,n),p.Components)for(let e=0,n=t.length;e!==n;++e)p.Components.subtreeAttached(t[e])}else i.virtualElements.insertAfter(e,t,n),p.Components&&p.Components.subtreeAttached(t)},l="_ko_ffe_pending_delete_index",d="oj-bind-for-each: abandoned promise";function f(e,n,s){this.element=n.element||e,i.applyBindingsToDescendants(s,this.element),function(e){for(var t,n,r=i.virtualElements.childNodes(e),s=0;s<r.length;s++){var o=r[s];if(1===o.nodeType&&"template"===o.nodeName.toLowerCase()){var l=a.CustomElementUtils.getSlotAssignment(o);if(t||l&&""!==l){if(n||"noData"!==l){var d;switch(l){case"":d="Multiple default templates found: oj-bind-for-each requires a single default template element as its direct child";break;case"noData":d="Multiple noData templates found: oj-bind-for-each requires a single noData template element as its direct child";break;default:d="Unknown template slot detected - "+l+": oj-bind-for-each supports a single default template and a single noData template"}throw new Error(d)}n=o}else t=o}}if(!t)throw new Error("Default template not found: oj-bind-for-each requires a single default template element as its direct child");e._templateNode=t,e._noDataTemplateNode=n}(this.element),this.element._templateNode.__ojBindingContext=i.contextFor(this.element._templateNode),this.data=n.data,this.as=n.as,this.changeQueue=[],this.firstLastNodesList=[],this.indexesToDelete=[],this.rendering_queued=!1,this.pendingDeletes=[],this.headDataPromise=null,this.tailDataPromise=null,i.virtualElements.emptyNode(this.element),this._initChildrenBindingsAppliedPromise();var o=i.unwrap(this.data);o.fetchFirst?(this.currentDataProvider=o,this.fetchData()):this.onArrayChange(r(o,t)),this.addSubscriptions()}f.PENDING_DELETE_INDEX_KEY=l,f.prototype.addSubscriptions=function(){var e=i.isObservable(this.data);this.currentDataProvider?(this.dataMutateHandler=this.handleDataMutateEvent.bind(this),this.dataRefreshHandler=this.handleDataRefreshEvent.bind(this),this.currentDataProvider.addEventListener("mutate",this.dataMutateHandler),this.currentDataProvider.addEventListener("refresh",this.dataRefreshHandler),e&&(this.changeSubs=this.data.subscribe(this.onDataChange,this,"change"))):e&&(this.data.indexOf||(this.data=this.data.extend({trackArrayChanges:!0})),this.changeArraySubs=this.data.subscribe(this.onArrayDataChange,this,"arrayChange"),this.changeSubs=this.data.subscribe(this.onDataChange,this,"change"))},f.prototype.removeSubscriptions=function(){this.changeSubs&&this.changeSubs.dispose(),this.changeArraySubs&&this.changeArraySubs.dispose(),this.currentDataProvider&&(this.currentDataProvider.removeEventListener("mutate",this.dataMutateHandler),this.currentDataProvider.removeEventListener("refresh",this.dataRefreshHandler))},f.prototype.onArrayDataChange=function(e){this.arrayChangeSet=e},f.prototype.onDataChange=function(e){this.arrayChangeSet?(this.onArrayChange(this.arrayChangeSet),this.arrayChangeSet=null):(this.setData({data:this.data,dataProvider:e.fetchFirst?e:null}),this.recreateContent(e))},f.prototype.recreateContent=function(e){this.changeQueue=[],this.firstLastNodesList=[],this.indexesToDelete=[],this.rendering_queued=!1,this.pendingDeletes=[],this._noDataNodes=null,i.virtualElements.emptyNode(this.element),e.fetchFirst?this.fetchData():this.onArrayChange(r(e,t))},f.prototype.registerBusyState=function(){var e=this.element.parentNode;return h.getContext(e).getBusyContext().addBusyState({description:"oj-bind-for-each binding on a node with the Id "+e.id+"is loading data."})},f.prototype._initChildrenBindingsAppliedPromise=function(){var e=this.element._templateNode.__ojBindingContext.$current,t=e?{_nearestCustomParent:e._nearestCustomParent,_immediate:e._immediate}:null,n=function(e,t){for(var n=e.parentNode;n&&!a.ElementUtils.isValidCustomElementName(n.localName);)n=n.parentNode;return n||(n=t?t._nearestCustomParent:null),n}(this.element,t),r=function(e,t,n){var r=!1,i=!!n;return e.parentNode===t?r=!0:i&&!e.parentNode.parentNode&&(r=n._immediate),r}(this.element,n,t);this.trackingContext={_nearestCustomParent:n,_immediate:r},this._childrenBindingsPromiseResolver=A.getInstance().__RegisterBindingAppliedPromiseForChildren(n,r)},f.prototype._resolveChildrenBindingsAppliedPromise=function(){this._childrenBindingsPromiseResolver&&(this._childrenBindingsPromiseResolver(),this._childrenBindingsPromiseResolver=null)},f.prototype.resetChainIfCompleted=function(e){e===this.tailDataPromise&&(this.headDataPromise=null,this.tailDataPromise=null)},f.prototype.promiseRejectHelper=function(e,t,n){if(t(),this.resetChainIfCompleted(n),!e._CAUGHT_PROMISE_REJECTION&&e.message!==d){if(e instanceof Error)throw e._CAUGHT_PROMISE_REJECTION=!0,e;throw new Error(e)}o.info(e)},f.prototype.fetchData=function(){var e,n,r,i=this.registerBusyState(),s=this.currentDataProvider.fetchFirst({size:-1})[Symbol.asyncIterator](),o=function(a,l,u){return function(h){if(u.headDataPromise===r){for(var c=h.value,p=a.length,f=0;f<c.metadata.length&&f<c.data.length;f++)a.push(t(c.data[f],p,c.metadata[f].key)),p+=1;h.done?(l.call(u,a),i(),e(),u.resetChainIfCompleted(r)):s.next().then(o(a,l,u),function(e){i(),n(e),u.resetChainIfCompleted(r)})}else i(),n(new Error(d))}};(r=new Promise(function(t,a){e=t,n=a,s.next().then(o([],this.onArrayChange,this),function(e){i(),n(e),this.resetChainIfCompleted(r)}.bind(this))}.bind(this))).catch(function(e){if(e.message!==d){if(e instanceof Error)throw e._CAUGHT_PROMISE_REJECTION=!0,e;throw new Error(e)}}),this.headDataPromise=r,this.tailDataPromise=r},f.prototype.getIndexesForEvent=function(e,t){var n,r=[];if(Array.isArray(e))for(n=0;n<e.length;n++)r.push(e[n]);else if(t){var i=Array.isArray(t)?t.length:t.size,s=new u(t),o=new Map,a=0;for(n=0;n<this.firstLastNodesList.length&&a<i;n++){var l=this.firstLastNodesList[n].key,d=s.get(l);d!==s.NOT_A_KEY&&(o.set(d,n),a+=1)}t.forEach(function(e){r.push(o.get(e))})}return r},f.prototype.handleDataMutateEvent=function(e){var t,n,r={},i=this;this.tailDataPromise?(t=this.registerBusyState(),(n=this.tailDataPromise.then(function(){return t(),i.getDataMutationHelper(e,r)})).catch(function(e){i.promiseRejectHelper(e,t,n)})):(n=this.getDataMutationHelper(e,r),this.headDataPromise=n),this.tailDataPromise=n,r.head=this.headDataPromise,r.current=n},f.prototype.getDataMutationHelper=function(e,r){var i,s,o=e.detail.add,a=e.detail.remove,l=e.detail.update,u=o&&o.data,h=l&&l.data,c=()=>{if(h){var e=0,r=[],i=this.getIndexesForEvent(l.indexes,l.keys);l.keys.forEach(function(s){if(void 0!==i[e]){var o=h[e];r.push(n(i[e])),r.push(t(o,i[e],s))}e+=1}),this.onArrayChange(r)}},p=()=>{if(a){var e=this.getIndexesForEvent(a.indexes,a.keys);e=e.filter(function(e){return void 0!==e}),this.onArrayChange(e.map(n))}},f=()=>{if(u){var e=this.getIndexesForEvent(o.indexes,o.addBeforeKeys?o.addBeforeKeys:o.afterKeys),n=[],r=0;o.keys.forEach(function(i){var s=u[r];n.push(t(s,function(t){var n=e.length>t?e[t]:this.firstLastNodesList.length+t;return void 0===n?this.firstLastNodesList.length:n}(r),i)),r+=1},this),this.onArrayChange(n)}};if(l&&!Array.isArray(h)||o&&!Array.isArray(u)){var g=l&&!Array.isArray(h)?this.currentDataProvider.fetchByKeys({keys:l.keys}):Promise.resolve(),v=o&&!Array.isArray(u)?this.currentDataProvider.fetchByKeys({keys:o.keys}):Promise.resolve();i=this.registerBusyState(),(s=Promise.all([g,v]).then(e=>{if(r.head!==this.headDataPromise)throw i(),new Error(d);var t=e[0];t&&t.results.size>0&&(h=[...l.keys].map(e=>t.results.get(e).data)),c(),p();var n=e[1];n&&n.results.size>0&&(u=[...o.keys].map(e=>n.results.get(e).data)),f(),i(),this.resetChainIfCompleted(r.current)})).catch(e=>{this.promiseRejectHelper(e,i,r.current)})}else c(),p(),f();return s},f.prototype.handleDataRefreshEvent=function(){this.recreateContent(this.currentDataProvider)},f.prototype._addNoData=function(){0===this.firstLastNodesList.length&&this.element._noDataTemplateNode&&(this._noDataNodes=c.execute(this.element,this.element._noDataTemplateNode,{},null),this.insertAllAfter(this._noDataNodes))},f.prototype._removeNoData=function(){this._noDataNodes&&(this._noDataNodes.forEach(e=>{c.clean(e,this.element),e.parentNode.removeChild(e)}),this._noDataNodes=null)},f.prototype.onArrayChange=function(e){this._removeNoData();for(var t={added:[],deleted:[]},n="added",r="deleted",i=0,s=e.length;i<s;i++)if(t[n].length&&e[i].status===n){var o=t[n][t[n].length-1];(o.isBatch?o.index+o.values.length-1:o.index)+1===e[i].index?(o.isBatch||(o={isBatch:!0,status:n,index:o.index,values:[o.value],keys:[o.key]},t[n].splice(t[n].length-1,1,o)),o.values.push(e[i].value),o.keys.push(e[i].key)):t[e[i].status].push(e[i])}else t[e[i].status].push(e[i]);t[r].length>0&&(this.changeQueue.push.apply(this.changeQueue,t[r]),this.changeQueue.push({status:"clearDeletedIndexes"})),this.changeQueue.push.apply(this.changeQueue,t[n]),this.changeQueue.length>0&&!this.rendering_queued&&(this.rendering_queued=!0,this.processQueue()),this._addNoData(),this._resolveChildrenBindingsAppliedPromise()},f.prototype.processQueue=function(){var e=this,t=9007199254740991;i.utils.arrayForEach(this.changeQueue,function(n){"number"==typeof n.index&&(t=Math.min(t,n.index)),e[n.status](n)}),this.flushPendingDeletes(),this.rendering_queued=!1,this.updateIndexes(t),this.changeQueue=[]},f.prototype.added=function(e){for(var t=e.index,n=e.isBatch?e.values:[e.value],r=e.isBatch?e.keys:[e.key],s=this.getLastNodeBeforeIndex(t),o=[],a=0,l=n.length;a<l;++a){var d,u,h=this.getPendingDeleteFor(n[a]);h&&h.nodesets.length?(d=h.nodesets.pop(),u=h.currentChildContext):(u={data:n[a],index:t+a,observableIndex:i.observable()},Object.defineProperties(u,{_nearestCustomParent:{value:this.trackingContext._nearestCustomParent,enumerable:!1},_immediate:{value:this.trackingContext._immediate,enumerable:!1}}),d=c.execute(this.element,this.element._templateNode,u,this.as)),o.push.apply(o,Array.prototype.slice.call(d)),this.firstLastNodesList.splice(t+a,0,{first:d[0],last:d[d.length-1],key:r?r[a]:null,currentChildContext:u})}this.insertAllAfter(o,s)},f.prototype.getNodesForIndex=function(e){var t=[],n=this.firstLastNodesList[e].first,r=this.firstLastNodesList[e].last;for(t.push(n);n&&n!==r;)n=n.nextSibling,t.push(n);return t},f.prototype.getLastNodeBeforeIndex=function(e){return e<1||e-1>=this.firstLastNodesList.length?null:this.firstLastNodesList[e-1].last},f.prototype.insertAllAfter=function(t,n){var r,i=this.element;if(1===t.length)s(i,t[0],n);else if(e)s(i,t,n);else for(r=t.length-1;r>=0;--r){var o=t[r];if(!o)break;s(i,o,n)}return t},f.prototype.shouldDelayDeletion=function(e){return e&&("object"==typeof e||"function"==typeof e)},f.prototype.getPendingDeleteFor=function(e){var t=e&&e[l];return void 0===t?null:this.pendingDeletes[t]},f.prototype.getOrCreatePendingDeleteFor=function(e){var t=this.getPendingDeleteFor(e);return t||(t={data:e,nodesets:[]},e[l]=this.pendingDeletes.length,this.pendingDeletes.push(t),t)},f.prototype.deleted=function(e){if(this.shouldDelayDeletion(e.value)){var t=this.getOrCreatePendingDeleteFor(e.value);t.nodesets.push(this.getNodesForIndex(e.index)),t.currentChildContext=this.firstLastNodesList[e.index].currentChildContext}else this.removeNodes(this.getNodesForIndex(e.index));this.indexesToDelete.push(e.index)},f.prototype.removeNodes=function(e){if(e.length){(()=>{for(var t=e[0].parentNode,n=e.length-1;n>=0;--n)c.clean(e[n],this.element),t.removeChild(e[n])})()}},f.prototype.flushPendingDeletes=function(){for(var e=0,t=this.pendingDeletes.length;e!==t;++e){for(var n=this.pendingDeletes[e];n.nodesets.length;)this.removeNodes(n.nodesets.pop());n.data&&void 0!==n.data[l]&&delete n.data[l]}this.pendingDeletes=[]},f.prototype.clearDeletedIndexes=function(){for(var e=this.indexesToDelete.length-1;e>=0;--e)this.firstLastNodesList.splice(this.indexesToDelete[e],1);this.indexesToDelete=[]},f.prototype.updateIndexes=function(e){for(var t=e,n=this.firstLastNodesList.length;t<n;++t){var r=this.firstLastNodesList[t].currentChildContext;r&&r.observableIndex&&r.observableIndex(t)}},f.prototype.getData=function(){return{data:this.data,dataProvider:this.currentDataProvider}},f.prototype.setData=function(e){this.removeSubscriptions(),this.data=e.data,this.currentDataProvider=e.dataProvider,this.addSubscriptions()},i.bindingHandlers._ojBindForEach_={init:function(e,t,n,r,s){var o,a;return i.computed(function(){if(a=t(),o){var e,n,r=a.data,s=o.getData().data;if(i.ignoreDependencies(function(){e=i.unwrap(s),n=i.unwrap(r)}),o.setData({data:r,dataProvider:n.fetchFirst?n:null}),Array.isArray(e)&&Array.isArray(n)){var l=i.utils.compareArrays(e,n,{sparse:!0,dontLimitMoves:!0});o.onArrayChange(l)}else o.recreateContent(n)}},null,{disposeWhenNodeIsRemoved:e}),o=new f(e,a,s),i.utils.domNodeDisposal.addDisposeCallback(e,function(){o.removeSubscriptions()}),{controlsDescendantBindings:!0}}},i.virtualElements.allowedBindings._ojBindForEach_=!0}(),n._registerLegacyNamespaceProp("ResponsiveKnockoutUtils",g),n._registerLegacyNamespaceProp("KnockoutTemplateUtils",f),e.ComponentBinding=v,e.ComponentChangeTracker=b,e.__ExpressionUtils=C,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojknockout-base.js.map