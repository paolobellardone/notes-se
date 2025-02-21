/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","preact/jsx-runtime","preact","ojs/ojvcomponent","ojs/ojtranslation","ojs/ojdatacollection-common","ojs/ojcontext","ojs/ojvcollection","ojs/ojcore-base","ojs/ojkeyset","ojs/ojtreedataprovider","ojs/ojanimation","ojs/ojthemeutils","ojs/ojdomutils"],function(e,t,s,n,o,i,r,l,a,c,h,d,u,p){"use strict";r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a;class m extends l.IteratingDataProviderContentHandler{constructor(e,t,s,n,o){super(e,t,s,n,o),this.root=e,this.dataProvider=t,this.callback=s,this.scrollPolicy=n,this.scrollPolicyOptions=o,this.postRender=()=>{if(this.viewportResolveFunc)return;this.vnodesCache=this.newVnodesCache,this.newVnodesCache=new Map;const e=this.root.lastElementChild;if(e){this.viewportResolveFunc=this.addBusyState("checking viewport");r.getContext(e).getBusyContext().whenReady().then(()=>{if(this.viewportResolveFunc&&this.viewportResolveFunc(),this.viewportResolveFunc=null,this.callback&&this.domScroller){const e=this.root.lastElementChild.querySelectorAll(".oj-stream-list-item");if(e.length>0){const t=this.root.offsetTop,s=e[0].offsetTop-t,n=e[e.length-1].offsetTop+e[e.length-1].offsetHeight-t;this.domScroller.setViewportRange(s,n)}this.checkViewport()}},()=>{this.viewportResolveFunc&&this.viewportResolveFunc(),this.viewportResolveFunc=null})}},this.newItemsTracker=new Set,this.vnodesCache=new Map,this.newVnodesCache=new Map}fetchSuccess(e){null!=e&&this.newItemsTracker.clear(),super.fetchSuccess(e)}handleItemsUpdated(e){e.keys.forEach(function(e){this.vnodesCache.delete(e)}.bind(this)),super.handleItemsUpdated(e)}handleItemsRemoved(e){e.keys.forEach(function(e){this.vnodesCache.delete(e)}.bind(this)),super.handleItemsRemoved(e)}handleModelRefresh(){this.vnodesCache.clear(),super.handleModelRefresh()}addItem(e,t,s,n){const o=this.isInitialFetch();null==this.callback.getCurrentItem()&&o&&0==t&&this.callback.setCurrentItem(e);const i=this.renderItem(e,t,s);return this.decorateItem(i,e,t,o,n),i[0]}renderItem(e,t,s){const n=this.callback.getItemRenderer()({data:s,key:e});const o=[this.findItemVNode(n)];return this.newVnodesCache.set(e,{vnodes:o}),o}decorateItem(e,t,s,n,o){const i=e[0];if(null!=i){i.key=t,i.props.role="listitem",i.props.tabIndex=-1,i.props["data-oj-key"]=t,"number"==typeof t&&(i.props["data-oj-key-type"]="number");const e=this.getItemStyleClass(o,this.newItemsTracker.has(t),n);this.setStyleClass(i,e)}}getItemStyleClass(e,t,s){const n=[];return n.push("oj-stream-list-item"),n}renderSkeletonsForLoadMore(){return this.callback.renderSkeletons(3)}}class y extends l.IteratingTreeDataProviderContentHandler{constructor(e,t,s,n,o){super(e,t,s,n,o),this.root=e,this.dataProvider=t,this.callback=s,this.scrollPolicy=n,this.scrollPolicyOptions=o,this.postRender=()=>{this.vnodesCache=this.newVnodesCache,this.newVnodesCache=new Map;this.root.lastElementChild&&this.checkViewport()},this.getLoadMoreCount=()=>3,this.newItemsTracker=new Set,this.vnodesCache=new Map,this.newVnodesCache=new Map}handleFetchSuccess(e){null!=e&&this.newItemsTracker.clear(),super.handleFetchSuccess(e)}handleItemsUpdated(e){e.keys.forEach(function(e){this.vnodesCache.delete(e)}.bind(this)),super.handleItemsUpdated(e)}handleItemsRemoved(e){e.keys.forEach(function(e){this.vnodesCache.delete(e)}.bind(this)),super.handleItemsRemoved(e)}handleModelRefresh(e){this.vnodesCache.clear(),super.handleModelRefresh(e)}destroy(){super.destroy(),this._resolveCheckViewportBusyState()}_resolveCheckViewportBusyState(){this.viewportResolveFunc&&this.viewportResolveFunc(),this.viewportResolveFunc=null}checkViewport(){if(this.viewportResolveFunc)return;this.viewportResolveFunc=this.addBusyState("checking viewport");const e=this.root.lastElementChild;if(e){r.getContext(e).getBusyContext().whenReady().then(()=>{null!=this.callback&&(super.checkViewport(),this._resolveCheckViewportBusyState())},()=>{this._resolveCheckViewportBusyState()})}}addItem(e,t,s,n){const o=this.isInitialFetch();null==this.callback.getCurrentItem()&&o&&0==t&&this.callback.setCurrentItem(e.key);const i=this.renderItem(e,t,s);return this.decorateItem(i,e,t,o,n),i[0]}renderItem(e,t,s){const n=e.key;let o,i;!1===e.isLeaf&&(o=this.callback.getGroupRenderer()),null==o&&(o=this.callback.getItemRenderer()),i=o({data:s,key:e.key,leaf:e.isLeaf,parentKey:e.parentKey,depth:e.treeDepth});const r=[this.findItemVNode(i)];return this.newVnodesCache.set(n,{vnodes:r}),r}decorateItem(e,t,s,n,o){const i=e[0];if(null!=i){i.key=t.key,i.props.role="treeitem",i.props.tabIndex=-1,i.props["data-oj-key"]=t.key,"number"==typeof t.key&&(i.props["data-oj-key-type"]="number");const e=this.getItemStyleClass(t,o,this.newItemsTracker.has(t.key),n);if(this.setStyleClass(i,e),!t.isLeaf){const e=this.callback.getExpanded(),s=e&&e.has(t.key);i.props["aria-expanded"]=!!s}}}getItemStyleClass(e,t,s,n){const o=[];return e.isLeaf?o.push("oj-stream-list-item"):o.push("oj-stream-list-group"),o}renderSkeletonsForLoadMore(){return this.callback.renderSkeletons(3)}renderSkeletonsForExpand(e){return this.callback.renderSkeletons(this.getLoadMoreCount(),!0,e)}}var g,f=function(e,t,s,n){var o,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(i<3?o(r):i>3?o(t,s,r):o(t,s))||r);return i>3&&r&&Object.defineProperty(t,s,r),r};e.StreamList=g=class extends s.Component{constructor(e){super(e),this.restoreFocus=!1,this.actionableMode=!1,this.skeletonHeight=0,this.height=0,this._handleFocusIn=e=>{this._clearFocusoutTimeout();const t=e.target,s=t.closest(".oj-stream-list-item, .oj-stream-list-group");s&&this._isFocusable(t,s)?this._enterActionableMode(t):this.currentItem&&!this.actionableMode&&this.focusInHandler(this.currentItem)},this._handleFocusOut=()=>{this._clearFocusoutTimeout(),this.actionableMode?this._focusoutTimeout=setTimeout(function(){this._doBlur()}.bind(this),100):this._isFocusBlurTriggeredByDescendent(event)||this._doBlur()},this._handleClick=e=>{const t=e.target.closest("."+this.getGroupStyleClass());if(t){const e=this.contentHandler.getKey(t),s=this.props.expanded.has(e);this._handleToggleExpanded(e,s)}this._handleTouchOrClickEvent(e)},this._handleKeyDown=e=>{if(this.currentItem){let t;switch(e.key){case i.KEYBOARD_KEYS._LEFT:case i.KEYBOARD_KEYS._LEFT_IE:case i.KEYBOARD_KEYS._RIGHT:case i.KEYBOARD_KEYS._RIGHT_IE:if(this.currentItem.classList.contains(this.getGroupStyleClass())){const t=this.currentItem,s=this.contentHandler.getKey(t),n=this.props.expanded.has(s);(e.key!==i.KEYBOARD_KEYS._RIGHT&&e.key!==i.KEYBOARD_KEYS._RIGHT_IE||n)&&(e.key!==i.KEYBOARD_KEYS._LEFT&&e.key!==i.KEYBOARD_KEYS._LEFT_IE||!n)||this._handleToggleExpanded(s,n)}break;case i.KEYBOARD_KEYS._UP:case i.KEYBOARD_KEYS._UP_IE:if(!1===this.actionableMode)for(t=this.currentItem.previousElementSibling;t&&t.previousElementSibling&&t.classList.contains("oj-stream-list-skeleton");)t=t.previousElementSibling;break;case i.KEYBOARD_KEYS._DOWN:case i.KEYBOARD_KEYS._DOWN_IE:if(!1===this.actionableMode)for(t=this.currentItem.nextElementSibling;t&&t.nextElementSibling&&t.classList.contains("oj-stream-list-skeleton");)t=t.nextElementSibling;break;case i.KEYBOARD_KEYS._F2:e.stopPropagation(),!1===this.actionableMode?this._enterActionableMode():this._exitActionableMode(!0);break;case i.KEYBOARD_KEYS._ESCAPE:case i.KEYBOARD_KEYS._ESCAPE_IE:!0===this.actionableMode&&this._exitActionableMode(!0);break;case i.KEYBOARD_KEYS._TAB:!0===this.actionableMode&&this.currentItem&&(e.shiftKey?i.handleActionablePrevTab(e,this.currentItem)&&e.preventDefault():i.handleActionableTab(e,this.currentItem)&&e.preventDefault())}null!=t&&(t.classList.contains(this.getItemStyleClass())||t.classList.contains(this.getGroupStyleClass()))&&(this._updateCurrentItemAndFocus(t,!0),e.preventDefault())}},this.setRootElement=e=>{this.root=e},this.scrollListener=()=>{const e=this;null==this.getData()||this._ticking||(window.requestAnimationFrame(function(){e._updateScrollPosition(),e._ticking=!1}),this._ticking=!0)},this.state={renderedData:null,outOfRangeData:null,initialSkeleton:!1,initialSkeletonCount:1,expandedToggleKeys:new c.KeySetImpl,expandedSkeletonKeys:new c.KeySetImpl,expandingKeys:new c.KeySetImpl,toCollapse:[],lastExpanded:e.expanded}}_clearFocusoutTimeout(){this._focusoutTimeout&&(clearTimeout(this._focusoutTimeout),this._focusoutTimeout=null)}_handleToggleExpanded(e,t){this.setState(function(s,n){let o=s.expandedToggleKeys;if(!o.has(e)){o=o.add([e]);let s=n.expanded;return o.values().forEach(e=>{s=t?s.delete([e]):s.add([e])}),this.props.onExpandedChanged?.(s),{expandedToggleKeys:o}}return{}}.bind(this))}_touchStartHandler(e){this._handleTouchOrClickEvent(e)}render(){const e=this.state.initialSkeleton,s=this.state.initialSkeletonCount;let i,r;return null==this.contentHandler&&e?i=this._renderInitialSkeletons(s):(r=this.getData(),null!=r&&e||null==r?i=this._renderInitialSkeletons(s,null==r):null!=r&&(i=this.contentHandler.render(r),this.currentItem&&this.currentItem.contains(document.activeElement)&&!this.actionableMode?this.restoreFocus=!0:this.restoreFocus=!1)),null==r?t.jsx(n.Root,{ref:this.setRootElement,children:t.jsx("div",{role:"list","data-oj-context":!0,tabIndex:0,"aria-label":o.getTranslatedString("oj-ojStreamList.msgFetchingData"),children:i})}):t.jsx(n.Root,{ref:this.setRootElement,children:t.jsx("div",{role:this._isTreeData()?"tree":"list","data-oj-context":!0,"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],onClick:this._handleClick,onKeyDown:this._handleKeyDown,onfocusin:this._handleFocusIn,onfocusout:this._handleFocusOut,children:i})})}_doBlur(){this.actionableMode&&this._exitActionableMode(!1),this.currentItem&&this.focusOutHandler(this.currentItem)}_isFocusBlurTriggeredByDescendent(e){return void 0===e.relatedTarget||!(null==e.relatedTarget||!this.root.contains(e.relatedTarget))}_renderInitialSkeletons(e,t){if(t){const e=this._getScroller();null!=e&&e===this.root&&(e.scrollTop=0)}return this.renderSkeletons(e)}renderSkeletons(e,t,s){const n=[],o=this._isTreeData();let i;for(let r=0;r<e;r++){let e=t;!t&&o&&r%4&&(e=!0),s&&(i=s+"_"+r),n.push(this._renderSkeleton(e,i))}return n}_renderSkeleton(e,s){let n="oj-stream-list-skeleton";return e&&(n+=" oj-stream-list-child-skeleton"),t.jsx("div",{class:n,children:t.jsx("div",{class:"oj-stream-list-skeleton-content oj-animation-skeleton"})},s)}_applySkeletonExitAnimation(e){const t=this.addBusyState("apply skeleton exit animations");return new Promise((s,n)=>{const o=[];e.forEach(e=>{o.push(d.fadeOut(e,{duration:"100ms"}))}),Promise.all(o).then(function(){t(),s(!0)})})}_isTreeData(){const e=this.props.data;return null!=e&&this.instanceOfTreeDataProvider(e)}instanceOfTreeDataProvider(e){return"getChildDataProvider"in e}_postRender(){this._registerScrollHandler();const e=this.getData(),t=this.state.initialSkeleton;if(null!=e&&t){const e=this.getRootElement().querySelectorAll(".oj-stream-list-skeleton");this._applySkeletonExitAnimation(e).then(function(){this.setState({initialSkeleton:!1})}.bind(this))}else null!=e&&this.contentHandler.postRender();const s=this.root.querySelectorAll(".oj-stream-list-item, .oj-stream-list-group");this.actionableMode||(this._disableAllTabbableElements(s),this._restoreCurrentItem(s))}_getScrollPolicyOptions(){return{fetchSize:this.props.scrollPolicyOptions.fetchSize,maxCount:this.props.scrollPolicyOptions.maxCount,scroller:this._getScroller()}}_debounce(e,t){let s=null;return(...n)=>{clearTimeout(s),s=setTimeout(()=>e(...n),t)}}componentDidMount(){const e=this.props.data;this._isTreeData()?this.contentHandler=new y(this.root,e,this,this.props.scrollPolicy,this._getScrollPolicyOptions()):null!=e&&(this.contentHandler=new m(this.root,e,this,this.props.scrollPolicy,this._getScrollPolicyOptions())),this.height=this.root.clientHeight;const t=this.root.querySelector(".oj-stream-list-skeleton");if(t&&(this.skeletonHeight=this.outerHeight(t),this._delayShowSkeletons()),window.ResizeObserver){const e=this.root,t=new window.ResizeObserver(this._debounce(t=>{t.forEach(t=>{if(t.target===e&&t.contentRect){const e=this.height,s=Math.round(t.contentRect.height);Math.abs(s-e)>1&&(this.height=s,this.contentHandler&&this.contentHandler.checkViewport())}})},g.debounceThreshold));t.observe(e),this.resizeObserver=t}p.makeFocusable({applyHighlight:!0,setupHandlers:(e,t)=>{const s=i.getNoJQFocusHandlers(e,t);this.focusInHandler=s.focusIn,this.focusOutHandler=s.focusOut}});const s=this.getRootElement();s&&s.addEventListener("touchstart",e=>this._touchStartHandler(e),{passive:!0}),this._postRender()}getSkeletonHeight(){return this.skeletonHeight}outerHeight(e){let t=e.offsetHeight;const s=getComputedStyle(e);return t+=parseInt(s.marginTop)+parseInt(s.marginBottom),t}componentWillUnmount(){this.contentHandler&&this.contentHandler.destroy(),this.contentHandler=null,this.resizeObserver&&this.resizeObserver.disconnect(),this.resizeObserver=null,this._unregisterScrollHandler()}_delayShowSkeletons(){window.setTimeout(()=>{null==this.getData()&&this.setState({initialSkeleton:!0,initialSkeletonCount:Math.max(1,Math.floor(this.height/this.skeletonHeight))})},this._getShowSkeletonsDelay())}_getOptionDefaults(){return null==this.defaultOptions&&(this.defaultOptions=u.parseJSONFromFontFamily("oj-streamlist-option-defaults")),this.defaultOptions}_getShowSkeletonsDelay(){const e=this._getOptionDefaults();if(null==e)return 0;const t=parseInt(e.showIndicatorDelay,10);return isNaN(t)?0:t}getRootElement(){return this.root}componentDidUpdate(e,t){this._isTreeData()&&this.contentHandler?.collapse&&this.contentHandler?.collapse(this.state.toCollapse);const s=t.expandingKeys;this.state.expandingKeys.values().forEach(function(e){s.has(e)||this.contentHandler?.expand(e)}.bind(this)),this.props.data!=e.data&&(this.contentHandler&&this.contentHandler.destroy(),this.setCurrentItem(null),this.setState({renderedData:null,outOfRangeData:null,initialSkeleton:!1,initialSkeletonCount:this.state.initialSkeletonCount,expandedToggleKeys:new c.KeySetImpl,expandedSkeletonKeys:new c.KeySetImpl,expandingKeys:new c.KeySetImpl}),this._isTreeData()?(this.contentHandler=new y(this.root,this.props.data,this,this.props.scrollPolicy,this._getScrollPolicyOptions()),this._delayShowSkeletons()):null!=this.props.data&&(this.contentHandler=new m(this.root,this.props.data,this,this.props.scrollPolicy,this._getScrollPolicyOptions()),this._delayShowSkeletons())),this._postRender(),(!a.Object.compareValues(this.props.scrollPosition,e.scrollPosition)&&!a.Object.compareValues(this.props.scrollPosition,this.lastInternalScrollPositionUpdate)||void 0===this.lastInternalScrollPositionUpdate&&!a.Object.compareValues(this.props.scrollPosition,g.defaultProps.scrollPosition))&&this._syncScrollTopWithProps()}static getDerivedStateFromProps(e,t){let{expandedToggleKeys:s,expandingKeys:n,renderedData:o,expandedSkeletonKeys:i,lastExpanded:r}=t;if(!o)return{};const l=[],a=e.expanded;return a!==r?(s.values().forEach(e=>{r.has(e)!==a.has(e)&&(s=s.delete([e]))}),o.value.metadata.forEach(e=>{const t=e.key,s=e.expanded,o=a.has(t);s&&!o?(l.push(t),e.expanded=!1):!s&&o&&(n=n.add([t]),e.expanded=!0)}),l.forEach(e=>{o=g.collapse(e,o),n=n.delete([e]),i=i.delete([e])}),{renderedData:o,expandingKeys:n,expandedToggleKeys:s,expandedSkeletonKeys:i,toCollapse:l,lastExpanded:a}):{toCollapse:l}}static _findIndex(e,t){for(let s=0;s<e.length;s++)if(a.KeyUtils.equals(t,e[s].key))return s;return-1}_unregisterScrollHandler(){this._getScrollEventElement().removeEventListener("scroll",this.scrollListener)}_registerScrollHandler(){const e=this._getScrollEventElement();this._unregisterScrollHandler(),e.addEventListener("scroll",this.scrollListener)}_updateScrollPosition(){const e={},t=this._getScroller().scrollTop,s=this._findClosestElementToTop(t);if(e.y=t,null!=s){const t=s.elem,n=this.contentHandler.getKey(t);e.offsetY=s.offsetY,e.key=n,this._isTreeData()&&t.classList.contains("oj-stream-list-item")?e.parentKey=this._getParentKey(t):e.parentKey=null}this.lastInternalScrollPositionUpdate=e,this.props.onScrollPositionChanged?.(e)}_syncScrollTopWithProps(){const e=this.props.scrollPosition;let t;const s=e.key;if(s){const n=e.parentKey,o=this._getItemByKey(s,n);if(null==o)return;{const e=this.root;t=o.offsetTop-e.offsetTop}const i=e.offsetY;isNaN(i)||(t+=i)}else{const s=e.y;if(isNaN(s))return;t=s}t>this._getScroller().scrollHeight||(this._getScroller().scrollTop=t)}_getParentKey(e){for(;e;){if(e.classList.contains("oj-stream-list-group"))return this.contentHandler.getKey(e);e=e.previousElementSibling}return null}_getItemByKey(e,t){const s=this.root.querySelectorAll(".oj-stream-list-item, .oj-stream-list-group");for(let n=0;n<s.length;n++){const o=s[n];if(this.contentHandler.getKey(o)===e&&(null==t||this._getParentKey(o)===t))return o}}_getScrollEventElement(){let e=this.props.scrollPolicyOptions.scroller;return null!=e?("string"==typeof e&&(e=document.querySelector(e)),e===document.body||e===document.documentElement?window:e):this.getRootElement()}_getScroller(){let e=this.props.scrollPolicyOptions.scroller;return null!=e?("string"==typeof e&&(e=document.querySelector(e)),e===document.documentElement&&e!==document.scrollingElement?document.body:e):this.getRootElement()}_findClosestElementToTop(e){const t=this.root.querySelectorAll(".oj-stream-list-item, .oj-stream-list-group");if(null==t||0===t.length)return null;const s=this.root.offsetTop,n=Math.max(e,0);let o=0-s,i=n,r=0,l=t[r],a=!1,c={elem:l,offsetY:i};for(;!a&&r>=0&&r<t.length&&(l=t[r],o=l.offsetTop-s,i=Math.abs(n-o),a=i<1||n<=o,!a);)c={elem:l,offsetY:i},r+=1;return c}isAvailable(){return null!=this.contentHandler}getCurrentItem(){return this.currentKey}setCurrentItem(e){this.currentKey=e}getData(){return this.state.renderedData}setData(e){this.setState({renderedData:e})}updateData(e){this.setState(function(t){return e(t.renderedData,t.expandingKeys)}.bind(this))}getExpanded(){return this.props.expanded}setExpanded(e){this.props.onExpandedChanged?.(e)}updateExpand(e){this.setState(function(t,s){return e(t.renderedData,t.expandedSkeletonKeys,t.expandingKeys,s.expanded)}.bind(this))}getExpandingKeys(){return this.state.expandingKeys}setExpandingKeys(e){this.setState({expandingKeys:e})}updateExpandingKeys(e){this.setState(function(t){return{expandingKeys:t.expandingKeys.add([e])}})}getSkeletonKeys(){return this.state.expandedSkeletonKeys}setSkeletonKeys(e){this.setState({expandedSkeletonKeys:e})}updateSkeletonKeys(e){this.setState(function(t){return{expandedSkeletonKeys:t.expandedSkeletonKeys.add([e])}})}getOutOfRangeData(){return this.state.outOfRangeData}setOutOfRangeData(e){this.setState({outOfRangeData:e})}getItemRenderer(){return this.props.itemTemplate}getItemStyleClass(){return"oj-stream-list-item"}getGroupRenderer(){return this.props.groupTemplate}getGroupStyleClass(){return"oj-stream-list-group"}addBusyState(e){const t=this.getRootElement();return r.getContext(t).getBusyContext().addBusyState({description:e})}handleItemRemoved(e){if(e==this.getCurrentItem()){let e=this.currentItem.nextElementSibling;e||(e=this.currentItem.previousElementSibling),e&&this._updateCurrentItemAndFocus(e,this.root.contains(document.activeElement))}}_handleTouchOrClickEvent(e){const t=e.target,s=t.closest(".oj-stream-list-item, .oj-stream-list-group");s&&(this._isFocusable(t,s)?(this._updateCurrentItemAndFocus(s,!1),this._enterActionableMode(t)):this._updateCurrentItemAndFocus(s,!0))}_isFocusable(e,t){return this._isInputElement(e)||this._isInsideFocusableElement(e,t)}_isInputElement(e){return null!=e.nodeName.match(/^INPUT|SELECT|OPTION|TEXTAREA/)&&!e.readOnly}_isInsideFocusableElement(e,t){let s=!1;for(;e!==t&&null!=e;){if(e.classList.contains("oj-form-control")||this._isInFocusableElementsList(e,t)){e.readonly||e.disabled||(s=!0);break}e=e.parentNode}return s}_isInFocusableElementsList(e,t){let s=!1;return i.getActionableElementsInNode(t).forEach(function(t){t===e&&(s=!0)}),s}_resetFocus(e,t){this.actionableMode&&t&&this._exitActionableMode(!1),this.focusOutHandler(e),e.tabIndex=-1}_setFocus(e,t){e.tabIndex=0,t&&(this.focusInHandler(e),e.focus())}_updateCurrentItemAndFocus(e,t){const s=this.currentItem,n=e;this._resetFocus(s,!0),this.currentItem=n;const o=this.contentHandler.getKey(n);this.setCurrentItem(o),this._setFocus(n,t)}_isInViewport(e){const t=e.offsetTop,s=this._getScroller().scrollTop;return t>=s&&t<=s+this.height}_restoreCurrentItem(e){if(null!=this.currentKey)for(const t of e){if(this.contentHandler.getKey(t)==this.currentKey){const e=t;if(this.restoreFocus&&this._isInViewport(e))return void this._updateCurrentItemAndFocus(e,!0);this.currentItem=e,this._setFocus(e,!1);break}}this.restoreFocus=!1}_disableAllTabbableElements(e){e.forEach(e=>{r.getContext(e).getBusyContext().whenReady().then(function(){i.disableAllFocusableElements(e)})})}_enterActionableMode(e){if(this.actionableMode=!0,this.currentItem){const t=i.enableAllFocusableElements(this.currentItem,!0);null==e&&t&&t.length>0&&(t[0].focus(),this._resetFocus(this.currentItem,!1))}}_exitActionableMode(e){this.actionableMode=!1,this.currentItem&&(i.disableAllFocusableElements(this.currentItem),this._setFocus(this.currentItem,e))}},e.StreamList.defaultProps={data:null,expanded:new c.KeySetImpl,scrollPolicy:"loadMoreOnScroll",scrollPolicyOptions:{fetchSize:25,maxCount:500,scroller:null},scrollPosition:{y:0}},e.StreamList.debounceThreshold=100,e.StreamList.collapse=(e,t)=>{const s=t.value.data,n=t.value.metadata,o=g._findIndex(n,e);if(o>-1){const e=l.IteratingTreeDataProviderContentHandler.getLocalDescendentCount(n,o);s.splice(o+1,e),n.splice(o+1,e)}return{value:{data:s,metadata:n},done:t.done}},e.StreamList._metadata={properties:{data:{type:"object"},expanded:{type:"object",writeback:!0},scrollPolicy:{type:"string",enumValues:["loadAll","loadMoreOnScroll"]},scrollPolicyOptions:{type:"object",properties:{fetchSize:{type:"number"},maxCount:{type:"number"},scroller:{type:"string|Element"}}},scrollPosition:{type:"object",properties:{y:{type:"number"},key:{type:"any"},offsetY:{type:"number"},parentKey:{type:"any"}},writeback:!0}},slots:{groupTemplate:{data:{}},itemTemplate:{data:{}}},extension:{_WRITEBACK_PROPS:["expanded","scrollPosition"],_READ_ONLY_PROPS:[],_OBSERVED_GLOBAL_PROPS:["aria-label","aria-labelledby"]}},e.StreamList=g=f([n.customElement("oj-stream-list")],e.StreamList),Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojstreamlist.js.map