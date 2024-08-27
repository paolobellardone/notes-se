/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base","jquery","ojs/ojlogger","ojs/ojcomponentcore","ojs/ojcollapsible"],function(e,t,i,o,n){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var a={properties:{expanded:{type:"Array<string>|Array<number>|Array<Object>",writeback:!0},multiple:{type:"boolean",value:!1},translations:{type:"object",value:{}}},methods:{getProperty:{},refresh:{},setProperties:{},setProperty:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojBeforeCollapse:{},ojBeforeExpand:{},ojCollapse:{},ojExpand:{}},extension:{}};a.extension._WIDGET_NAME="ojAccordion",a.extension._TRACK_CHILDREN="nearestCustomElement",e.CustomElementBridge.register("oj-accordion",{metadata:a}),
/**
   * @preserve Copyright 2013 jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */
function(){const o="oj-accordion-collapsible",n="oj-accordion-created",a="oj-collapsible",l="oj-collapsible-header",s=".oj-collapsible";e.__registerWidget("oj.ojAccordion",t.oj.baseComponent,{widgetEventPrefix:"oj",options:{multiple:!1,expanded:null,beforeExpand:null,expand:null,beforeCollapse:null,collapse:null},_ComponentCreate:function(){this._super(),this.element.addClass("oj-accordion oj-component").attr("role","group"),this.options.expanded=this._expandedIndexToId(this.options.expanded),this._refresh()},_NotifyContextMenuGesture:function(e,t,i){this._OpenContextMenu(t,i,{launcher:this.element.find(".oj-collapsible-header-icon").first()})},_destroy:function(){this.element.removeClass("oj-accordion oj-component").removeAttr("role"),this.element.children().removeClass(o),this.element.children(".oj-accordion-created").removeClass(n).ojCollapsible("destroy")},_setOption:function(e,t,i){if("multiple"===e)!t&&this.options.multiple&&this.element.children(".oj-expanded").first().siblings(s).ojCollapsible("collapse",!1);else if("expanded"===e)return void this._setExpandedOption(t);this._super(e,t,i)},refresh:function(){this._super(),this._refresh()},_refresh:function(){this._makeCollapsible(),this._internalSetExpanded=!0,this._setExpandedOption(this.options.expanded),this._internalSetExpanded=!1,this._setupEvents()},_makeCollapsible:function(){this.collapsibles=this.element.children().not("oj-menu"),this._IsCustomElement()?this.collapsibles.not(a).ojCollapsible({expandArea:"header"}).addClass(n).attr("data-oj-internal",""):(this.element.children(":oj-collapsible").each(function(){t(this).ojCollapsible("option","expandArea","header")}),this.collapsibles.not(":oj-ojCollapsible").ojCollapsible({expandArea:"header"}).addClass(n).attr("data-oj-internal","")),this.collapsibles.addClass(o)},_setupEvents:function(){var e;e=this._IsCustomElement()?{keydown:this._keydown,ojBeforeExpand:this._beforeExpandHandler,ojExpand:this._expandHandler,ojBeforeCollapse:this._beforeCollapseHandler,ojCollapse:this._collapseHandler}:{keydown:this._keydown,ojbeforeexpand:this._beforeExpandHandler,ojexpand:this._expandHandler,ojbeforecollapse:this._beforeCollapseHandler,ojcollapse:this._collapseHandler},this._off(this.collapsibles),this._on(this.collapsibles,e)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey&&(t(e.target).hasClass("oj-collapsible-header-wrapper")||t(e.target).hasClass("oj-collapsible-header-icon"))){var i=t.ui.keyCode,o=this.collapsibles.not(".oj-disabled"),n=o.length,a=t(e.target).closest(s),l=o.index(a),r=!1;if(l>=0)switch(e.keyCode){case i.RIGHT:case i.DOWN:r=o[(l+1)%n];break;case i.LEFT:case i.UP:r=o[(l-1+n)%n];break;case i.HOME:r=o[0];break;case i.END:r=o[n-1]}r&&(a&&t(a).trigger("ojfocusout"),t(r).trigger("ojfocus"),e.preventDefault())}},_findTargetSiblings:function(e){if(!this.options.multiple){var i=t(e.target).closest(s);if(i.parent().is(":oj-ojAccordion"))return i.siblings(".oj-collapsible.oj-expanded").map(function(){return t(this).data("oj-ojCollapsible")})}return t()},_beforeExpandHandler:function(e,i){if(!this._isTargetMyCollapsible(e))return!0;var o;this._expandTarget=t(e.target);var n=null;if(this._findTargetSiblings(e).each(function(){var t={header:(n=this.element).find(".oj-collapsible-header"),content:n.find(".oj-collapsible-content")};return(o=this._trigger("beforeCollapse",e,t))||(this._expandTarget=null),o}),!this.options.multiple){var a=this._initEventData(n,this._expandTarget);o=this._trigger("beforeExpand",e,a)}var l=this;return o&&this._findTargetSiblings(e).each(function(){this.collapse(!1,e,i),l._collapsedCollapsible=this.widget()}),o},_expandHandler:function(e,i){var o=null;if(this._collapsedCollapsible&&(o=this._collapsedCollapsible,this._collapsedCollapsible=null),this._isTargetMyCollapsible(e)&&!this._duringSetExpandedOption){var n,a=this;this._findTargetSiblings(e).each(function(){this.collapse(!1,e,i),n=a._initEventData(this.element,t(e.target))}),n||(n=a._initEventData(o,t(e.target))),this.options.multiple||this._trigger("expand",e,n),this._updateExpanded(),this._expandTarget=null}},_beforeCollapseHandler:function(e,t){var i=t;return!(this._isTargetMyCollapsible(e)&&!this.options.multiple)||(!i&&e.originalEvent instanceof CustomEvent&&(i=e.originalEvent.detail),this._trigger("beforeCollapse",e,this._initCollapseEventData(e,i)))},_collapseHandler:function(e,t){var i=t;if(!this._duringSetExpandedOption&&this._isTargetMyCollapsible(e)){!i&&e.originalEvent instanceof CustomEvent&&(i=e.originalEvent.detail);var o=this._initCollapseEventData(e,i);this.options.multiple||this._trigger("collapse",e,o),this._updateExpanded()}},_initEventData:function(e,t){return{fromCollapsible:e,toCollapsible:t}},_initCollapseEventData:function(e,i){var o;return i.toCollapsible?o=i:e.originalEvent&&e.originalEvent.target&&(o=this._initEventData(t(e.target),this._expandTarget)),!o&&this._expandTarget&&(o=this._initEventData(t(e.target),this._expandTarget)),o},_isTargetMyCollapsible:function(e){return t(e.target).is(this.collapsibles)},_updateExpanded:function(){var i,o,n=[];this.collapsibles.each(function(e){(this.tagName.toLowerCase()===a?this.expanded:t(this).ojCollapsible("option","expanded"))&&(o={},(i=t(this).attr("id"))&&(o.id=i),o.index=e,n.push(o))}),this.options.expanded&&e.Object._compareArrayIdIndexObject(n,this.options.expanded)||this.option("expanded",n,{_context:{internalSet:!0,writeback:!0}})},_expandedIndexToId:function(e){if(Array.isArray(e)){for(var i,o=[],n=[],a=0;a<e.length;a++){var l=e[a];"number"==typeof l||"string"==typeof l?n.push(l):"number"==typeof l.index?n.push(l.index):"string"==typeof l.id&&n.push(l.id)}return this.element.children().each(function(e){(i=t(this).attr("id"))?-1===n.indexOf(i)&&-1===n.indexOf(e)||o.push({id:i,index:e}):-1!==n.indexOf(e)&&o.push({index:e})}),!this.options.multiple&&o.length>1&&(o=[o[o.length-1]]),o}return null},_setExpandedOption:function(e){var o=e;if(this._internalSetExpanded||(o=this._expandedIndexToId(o)),o){var n,l,s,r,d=this,p=0;this.collapsibles.each(function(e){n=t(this),l=n.attr("id"),s=!1,(r=o[p])&&(l?l===r.id&&(s=!0):e===r.index&&(s=!0),s&&(p+=1));var c=this.tagName.toLowerCase()===a;(c?this.expanded:n.ojCollapsible("option","expanded"))!==s&&(i.warn("JET Accordion: override collapsible "+e+" expanded setting"),d._duringSetExpandedOption=!0,c?this.expanded=s:n.ojCollapsible("option","expanded",s),d._duringSetExpandedOption=!1)})}this._updateExpanded()},getNodeBySubId:function(e){if(null==e)return this.element?this.element[0]:null;var i=e.subId,n=e.index;if("number"!=typeof n||n<0||n>=this.collapsibles.length)return null;var a=this.collapsibles[n];switch(i){case"oj-accordion-content":i="oj-collapsible-content";break;case"oj-accordion-header":i=l;break;case"oj-accordion-disclosure":case"oj-accordion-header-icon":i="oj-collapsible-disclosure";break;case o:return a;default:return null}return t(a).ojCollapsible("getNodeBySubId",{subId:i})},getSubIdByNode:function(e){for(var i=-1,n=e;n&&-1===(i=Array.prototype.indexOf.call(this.collapsibles,n));)n=n.parentElement;var a=null;if(-1!==i){var s=t(this.collapsibles[i]).ojCollapsible("getSubIdByNode",e);switch((s=s||{}).subId){case"oj-collapsible-content":a="oj-accordion-content";break;case l:a="oj-accordion-header";break;case"oj-collapsible-disclosure":case"oj-collapsible-header-icon":a="oj-accordion-disclosure";break;default:a=o}}return a?{subId:a,index:i}:null},_CompareOptionValues:function(t,i,o){return"expanded"===t?e.Object.compareValues(i,o):this._super(t,i,o)}})}()});
//# sourceMappingURL=ojaccordion.js.map