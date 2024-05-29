define("oj-c/utils/PRIVATE_ItemsMenu/menu-item-icon",["require","exports","preact/jsx-runtime"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MenuItemIcon=void 0,e.MenuItemIcon=function(e){return"img"===e.icon.type?(0,t.jsx)("img",{src:e.icon.src}):(0,t.jsx)("span",{class:e.icon.class})}})),define("oj-c/utils/PRIVATE_ItemsMenu/menu-select-items",["require","exports","preact/jsx-runtime","./menu-item-icon","@oracle/oraclejet-preact/UNSAFE_Menu"],(function(require,e,t,n,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MenuSelectItems=void 0,e.MenuSelectItems=function(e){return(0,t.jsx)(t.Fragment,{children:e.items.map((e=>e&&(0,t.jsx)(o.SelectMenuItem,{label:e.label,isDisabled:e.disabled,endIcon:e.endIcon?(0,t.jsx)(n.MenuItemIcon,{icon:e.endIcon}):void 0,value:e.value})))})}})),define("oj-c/utils/PRIVATE_ItemsMenu/items-menu",["require","exports","preact/jsx-runtime","./menu-item-icon","./menu-select-items","@oracle/oraclejet-preact/UNSAFE_Menu"],(function(require,e,t,n,o,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ItemsMenu=void 0;e.ItemsMenu=({items:i=[],selection:r={},onSelectionChanged:c,onOjMenuAction:u,isSplitMenu:l=!1})=>{const a=e=>{const t=r[e];return t&&"string"==typeof t?t:void 0},d=e=>{const t=r[e];return Array.isArray(t)?t:[]},m=(e,t)=>n=>{c?.(((e,t,n)=>{const o={...e};return Array.isArray(n)&&0===n.length?delete o[t]:o[t]=n,o})(t,e,n.value))};return(0,t.jsx)(t.Fragment,{children:i.map((i=>{switch(i.type){case"divider":case"separator":return(0,t.jsx)(s.MenuSeparator,{});case"submenu":return i.items&&i.label&&!l?(0,t.jsx)(s.Submenu,{label:i.label,children:(0,t.jsx)(e.ItemsMenu,{items:i.items,selection:r,onSelectionChanged:c,onOjMenuAction:u})}):void 0;case"selectsingle":return i.items&&i.key&&!l?(0,t.jsx)(s.SelectSingleMenuGroup,{value:a(i.key),onCommit:m(i.key,r),children:(0,t.jsx)(o.MenuSelectItems,{items:i.items})}):void 0;case"selectmultiple":return i.items&&i.key&&!l?(0,t.jsx)(s.SelectMultipleMenuGroup,{value:d(i.key),onCommit:m(i.key,r),children:(0,t.jsx)(o.MenuSelectItems,{items:i.items})}):void 0;case void 0:case"item":return i.label?(0,t.jsx)(s.MenuItem,{label:i.label,isDisabled:i.disabled,variant:l?void 0:i.variant,startIcon:!l&&i.startIcon&&(0,t.jsx)(n.MenuItemIcon,{icon:i.startIcon}),endIcon:!l&&i.endIcon&&(0,t.jsx)(n.MenuItemIcon,{icon:i.endIcon}),onAction:(p=i.key,b=i.onAction,()=>{b?.(),u?.({key:p})})}):void 0;default:return}var p,b}))})}}));var __decorate=this&&this.__decorate||function(e,t,n,o){var s,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};define("oj-c/split-menu-button/split-menu-button",["require","exports","preact/jsx-runtime","@oracle/oraclejet-preact/translationBundle","@oracle/oraclejet-preact/UNSAFE_SplitMenuButton","@oracle/oraclejet-preact/hooks/UNSAFE_useTooltip","@oracle/oraclejet-preact/hooks/UNSAFE_useTabbableMode","@oracle/oraclejet-preact/utils/UNSAFE_mergeProps","preact","preact/hooks","preact/compat","ojs/ojvcomponent","../utils/PRIVATE_ItemsMenu/items-menu","css!oj-c/split-menu-button/split-menu-button-styles.css"],(function(require,e,t,n,o,s,i,r,c,u,l,a,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SplitMenuButton=void 0;let m=class extends c.Component{constructor(){super(...arguments),this.buttonRef=(0,c.createRef)()}render(e){const{chroming:n,label:o,disabled:s,size:i,items:r,tooltip:c,onOjMenuAction:u,"aria-describedby":l,onOjAction:m}={...e},b=e.width?{width:e.width}:{};return(0,t.jsx)(a.Root,{style:b,children:(0,t.jsx)(p,{tooltip:c,label:o,ref:this.buttonRef,variant:n,size:i,width:"100%","aria-describedby":l,isDisabled:s,onAction:m,children:(0,t.jsx)(d.ItemsMenu,{isSplitMenu:!0,items:r,onOjMenuAction:u})})})}blur(){this.buttonRef.current?.blur()}focus(){this.buttonRef.current?.focus()}doAction(){this.buttonRef.current?.doAction()}};e.SplitMenuButton=m,m.defaultProps={label:"",chroming:"outlined",disabled:!1,size:"md",items:[]},m._metadata={properties:{label:{type:"string"},items:{type:"Array<object>"},tooltip:{type:"string"},disabled:{type:"boolean"},size:{type:"string",enumValues:["sm","md","lg"]},width:{type:"number|string"},chroming:{type:"string",enumValues:["solid","outlined","callToAction"]}},events:{ojMenuAction:{bubbles:!0},ojAction:{bubbles:!0}},extension:{_OBSERVED_GLOBAL_PROPS:["aria-describedby"]},methods:{blur:{},focus:{},doAction:{}}},m._translationBundleMap={"@oracle/oraclejet-preact":n.default},m._consumedContexts=[i.TabbableModeContext],e.SplitMenuButton=m=__decorate([(0,a.customElement)("oj-c-split-menu-button")],m);const p=(0,l.forwardRef)(((e,n)=>{const i=(0,u.useRef)(null);(0,u.useImperativeHandle)(n,(()=>({focus:()=>i.current?.focus(),blur:()=>i.current?.blur(),doAction:()=>i.current?.dispatchEvent(new Event("ojAction",{bubbles:!0}))})),[]);const{tooltipContent:c,tooltipProps:l}=(0,s.useTooltip)({text:e.tooltip,isDisabled:e.isDisabled});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.SplitMenuButton,{ref:i,...(0,r.mergeProps)(e,l)}),c]})}))}));
//# sourceMappingURL=split-menu-button.js.map