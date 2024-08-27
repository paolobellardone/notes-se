/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["require","exports"],function(e,t){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};return e&&Object.keys(e).forEach(function(o){var n=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,n.get?n:{enumerable:!0,get:function(){return e[o]}})}),t.default=e,t}const n={BusyContext:()=>new Promise(function(t,n){e(["ojs/ojcontext"],function(e){t(o(e))},n)}).then(({default:e})=>e.getPageContext().getBusyContext()),Chai:()=>new Promise(function(t,n){e(["chai"],function(e){t(o(e))},n)}).then(({default:e})=>e),CspExpressionEvaluator:()=>new Promise(function(t,n){e(["ojs/ojcspexpressionevaluator"],function(e){t(o(e))},n)}).then(({default:e})=>e),CustomElementUtils:()=>new Promise(function(t,n){e(["ojs/ojcustomelement-utils"],function(e){t(o(e))},n)}).then(({CustomElementUtils:e})=>e),KeySet:()=>new Promise(function(t,n){e(["ojs/ojkeyset"],function(e){t(o(e))},n)}),KeyUtils:()=>new Promise(function(t,n){e(["ojs/ojcore-base"],function(e){t(o(e))},n)}).then(({default:{KeyUtils:e}})=>e),Knockout:()=>new Promise(function(t,n){e(["knockout"],function(e){t(o(e))},n)})},r={};function i(...e){return Promise.all(e.map(e=>{if(!n[e])throw Error(`module "${e}" does not exist in test proxy`);console.log(`getProxy importing ${e}`);const t=r[e];return t?Promise.resolve(t):n[e]().then(t=>(r[e]=t,t))}))}function u(...e){return e.map(e=>r[e])}"undefined"!=typeof window&&(window.__ojwebdrivertest_proxy={getProxy:i,getCachedModules:u}),t.getCachedModules=u,t.getProxy=i,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=ojwebdrivertest-proxy.js.map