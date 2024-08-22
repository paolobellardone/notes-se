define("oj-c/utils/PRIVATE_toggleUtils/toggle-item-icon",["require","exports","preact/jsx-runtime"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ToggleItemIcon=void 0,e.ToggleItemIcon=function(e){return"img"===e.icon.type?(0,t.jsx)("img",{src:e.icon.src}):(0,t.jsx)("span",{class:e.icon.class})}})),define("oj-c/utils/PRIVATE_toggleUtils/widthStyle",["require","exports"],(function(require,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.widthStyle=void 0,e.widthStyle=function(e,t,o){return"equal"==e?o?{style:{width:"100%",maxWidth:o}}:{style:{width:"100%"}}:t?o?{style:{width:t,maxWidth:o}}:{style:{width:t}}:o?{style:{maxWidth:o}}:{}}})),define("oj-c/utils/PRIVATE_toggleUtils/index",["require","exports","./toggle-item-icon","./widthStyle"],(function(require,e,t,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.widthStyle=e.ToggleItemIcon=void 0,Object.defineProperty(e,"ToggleItemIcon",{enumerable:!0,get:function(){return t.ToggleItemIcon}}),Object.defineProperty(e,"widthStyle",{enumerable:!0,get:function(){return o.widthStyle}})}));var __decorate=this&&this.__decorate||function(e,t,o,i){var l,n=arguments.length,r=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(l=e[s])&&(r=(n<3?l(r):n>3?l(t,o,r):l(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};define("oj-c/buttonset-multiple/buttonset-multiple",["require","exports","preact/jsx-runtime","@oracle/oraclejet-preact/translationBundle","ojs/ojvcomponent-binding","ojs/ojvcomponent","@oracle/oraclejet-preact/UNSAFE_ButtonSetMultiple","@oracle/oraclejet-preact/hooks/UNSAFE_useTabbableMode","oj-c/utils/PRIVATE_toggleUtils/index","@oracle/oraclejet-preact/UNSAFE_ButtonSetItem","preact","preact/hooks","preact/compat","css!oj-c/buttonset-multiple/buttonset-multiple-styles.css"],(function(require,e,t,o,i,l,n,r,s,u,c,a,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ButtonsetMultiple=void 0;let p=class extends c.Component{constructor(){super(...arguments),this.buttonRef=(0,c.createRef)()}render({chroming:e,disabled:o,value:i,onValueChanged:n,size:r,width:c,maxWidth:a,layoutWidth:d,items:p,display:m,"aria-label":f,"aria-describedby":y}){const g=(0,s.widthStyle)(d,c,a);return(0,t.jsx)(l.Root,{...g,children:(0,t.jsx)(b,{value:i,onCommit:e=>{n?.(e.value)},ref:this.buttonRef,display:m,layoutWidth:d,variant:e,size:r,width:g.style&&g.style.width?"100%":void 0,"aria-label":f,"aria-describedby":y,isDisabled:o,children:p?.map((e=>(0,t.jsx)(u.ButtonSetItem,{label:e.label,value:e.value,isDisabled:e.disabled,startIcon:e.startIcon&&(0,t.jsx)(s.ToggleItemIcon,{icon:e.startIcon}),endIcon:e.endIcon&&(0,t.jsx)(s.ToggleItemIcon,{icon:e.endIcon})})))})})}blur(){this.buttonRef.current?.blur()}focus(){this.buttonRef.current?.focus()}};e.ButtonsetMultiple=p,p.defaultProps={chroming:"outlined",disabled:!1,size:"md",display:"all",items:[]},p._metadata={properties:{value:{type:"Array<string>",writeback:!0},items:{type:"Array<object>"},display:{type:"string",enumValues:["all","label","icons"]},disabled:{type:"boolean"},size:{type:"string",enumValues:["sm","md","lg"]},width:{type:"number|string"},maxWidth:{type:"number|string"},chroming:{type:"string",enumValues:["borderless","outlined"],binding:{consume:{name:"containerChroming"}}},layoutWidth:{type:"string",enumValues:["auto","equal"]}},extension:{_WRITEBACK_PROPS:["value"],_READ_ONLY_PROPS:[],_OBSERVED_GLOBAL_PROPS:["aria-describedby","aria-label"]},methods:{blur:{},focus:{}}},p._translationBundleMap={"@oracle/oraclejet-preact":o.default},p._consumedContexts=[r.TabbableModeContext],e.ButtonsetMultiple=p=__decorate([(0,l.customElement)("oj-c-buttonset-multiple")],p);const b=(0,d.forwardRef)(((e,o)=>{const i=(0,a.useRef)();return(0,a.useImperativeHandle)(o,(()=>({focus:()=>i.current?.focus(),blur:()=>i.current?.blur()})),[]),(0,t.jsx)(n.ButtonSetMultiple,{ref:i,...e})}))})),define("oj-c/buttonset-multiple",["require","exports","oj-c/buttonset-multiple/buttonset-multiple"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ButtonsetMultiple=void 0,Object.defineProperty(e,"ButtonsetMultiple",{enumerable:!0,get:function(){return t.ButtonsetMultiple}})}));
//# sourceMappingURL=buttonset-multiple.js.map