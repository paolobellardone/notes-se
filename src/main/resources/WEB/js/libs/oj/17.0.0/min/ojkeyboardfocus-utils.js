/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","jquery","ojs/ojcore-base","ojs/ojpopupcore","ojs/ojdomutils"],function(t,e,r,n,o){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r;const l="aria-readonly",u="data-oj-tabmod",i="data-oj-ariareadonlymod",a='input, select, button, a[href], textarea, object, [tabIndex]:not([tabIndex="-1"]), [tabindex]:not([tabindex="-1"])',s="["+u+"], "+a,p=function(t){return!(0===t.offsetHeight||0===t.offsetWidth||"hidden"===window.getComputedStyle(t).visibility)},d=function(t){var e=[];let r=t.querySelectorAll(s);for(var n=0;n<r.length;n++){var o=r[n];!o.disabled&&p(o)&&e.push(o)}return e},f=function(t,e){var n=[],o=r.AgentUtils.getAgentInfo(),l=!0;if(r.AgentUtils.BROWSER.IE===o.browser&&null==t.parentNode&&(l=!1),l)for(var u=t.querySelectorAll(a),i=u.length,s=0;s<i;s++){var d=u[s];if(!d.disabled&&(e||p(d)))d.tabIndex>=0&&n.push(d)}return n},c=function(t){var e=t.getAttribute(l);t.setAttribute(i,e),t.removeAttribute(l)},b=function(t){var e=t.tabIndex;t.setAttribute(u,e),t.tabIndex=-1};t.checkVisibility=p,t.disableAllFocusableElements=function(t,e,r){for(var n=[],o=f(t,!0),u=0;u<o.length;u++)e&&o[u]===document.activeElement||(b(o[u]),n.push(o[u])),r&&o[u].hasAttribute(l)&&c(o[u]);return n},t.disableElement=b,t.enableAllFocusableElements=function(t){for(var e=t.querySelectorAll("["+u+"]"),r=0;r<e.length;r++){var n=parseInt(e[r].getAttribute(u),10);if(e[r].removeAttribute(u),e[r].tabIndex=n,e[r].hasAttribute(i)){var o=e[r].getAttribute(i);e[r].removeAttribute(i),e[r].setAttribute(l,o)}}return e},t.getActionableElementsInNode=d,t.getAllLogicalChildPopups=function(t){for(var n,l={popups:r.ZOrderUtils.findOpenPopups()},u=function(t){var n,u=[];for(n=0;n<l.popups.length;n++){var i=l.popups[n].firstElementChild,a=o.getLogicalParent(e(i));null!=a&&e(t).has(a.get(0)).length>0&&r.ZOrderUtils.getStatus(i)===r.ZOrderUtils.STATUS.OPEN&&u.push(i)}return{popups:u}},i=u(t),a=function(t){var e=u(t);for(let t=0;t<e.popups.length;t++)-1===i.popups.indexOf(e.popups[t])&&i.popups.push(e.popups[t])},s=0;s<i.popups.length;){for(n=s;n<i.popups.length;n++)a(i.popups[n]);s=n}return i.popups},t.getFocusableElementsInNode=f,t.getLogicalChildPopup=function(t){for(var n=r.ZOrderUtils.findOpenPopups(),l=0;l<n.length;l++){var u=n[l].firstElementChild,i=o.getLogicalParent(e(u));if(null!=i&&e(t).has(i.get(0)).length>0&&r.ZOrderUtils.getStatus(u)===r.ZOrderUtils.STATUS.OPEN)return u}return null},t.isActionableElement=function(t){var e=t.parentNode;if(null!=e)for(var r=d(e),n=0;n<r.length;n++)if(r[0]===t)return!0;return!1},Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=ojkeyboardfocus-utils.js.map