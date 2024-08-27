define("oj-c/hooks/UNSAFE_useMergedFormContext/useMergedFormContext",["require","exports","@oracle/oraclejet-preact/hooks/UNSAFE_useFormContext"],(function(require,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useMergedFormContext=void 0,e.useMergedFormContext=function({propContainerReadonly:e,propLabelWrapping:t,propReadonly:s,propUserAssistanceDensity:r}){const n=(0,a.useFormContext)(),o=r??n.userAssistanceDensity,i=s??n.isReadonly,{isFormLayout:l,isReadonly:u,labelWrapping:d,...c}=n;return{containerProps:{...c,isFormLayout:void 0!==e||l,isReadonly:e??u,labelWrapping:t??d},readonlyValue:i,uadValue:o}}})),define("oj-c/editable-value/UNSAFE_useAssistiveText/useAssistiveText",["require","exports","preact/hooks"],(function(require,e,a){"use strict";function t(e,a,t,s,r,n){const o="compact"!==n?t?.definition:void 0;return e?.instruction||("none"===r?.validatorHint?void 0:a)||o||("none"===r?.converterHint?void 0:s)}function s(e){if(!e.length)return;return e.map((e=>"function"==typeof e.getHint?e.getHint():void 0)).filter(Boolean).join("\n")}Object.defineProperty(e,"__esModule",{value:!0}),e.useAssistiveText=void 0,e.useAssistiveText=function({addBusyState:e,converter:r,displayOptions:n,help:o,helpHints:i,userAssistanceDensity:l,validators:u}){const[d,c]=(0,a.useState)(u&&u.length?s(u):void 0),p=(0,a.useRef)();(0,a.useEffect)((()=>{if(!u||!u.length)return void c(void 0);c(s(u));const a=u.map((e=>e.hint)).filter(Boolean),t=p.current=Symbol(),r=e?.("resolving the async validator hints");Promise.allSettled(a).then((e=>{c((a=>{const s=e.map((e=>"fulfilled"===e.status?e.value:void 0)).filter(Boolean);return t===p.current&&s.length?[a,...s].join("\n"):a})),r?.()}))}),[u]);const v="compact"!==l?i?.sourceText:i?.definition||i?.sourceText;return{assistiveText:t(o,d,i,r?.getHint?.()??void 0,n,l),helpSourceLink:i?.source,helpSourceText:v}}})),define("oj-c/input-month-mask/CalendarMonthConverter",["require","exports","@oracle/oraclejet-preact/utils/UNSAFE_calendarDateUtils","ojs/ojconfig"],(function(require,e,a,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CalendarMonthConverter=void 0;e.CalendarMonthConverter=class{constructor(e){this.locale=e?.locale??(0,t.getLocale)(),this.calendarMonthConverter_parseErrorFn=e?.calendarMonthConverter_parseErrorFn,this.customMask=e?.customMask}format(e){if(!(0,a.isCompleteCalendarMonth)(e))throw new Error("value must have year and month");return e}parse(e){if(void 0!==e&&!(0,a.isCompleteCalendarMonth)(e)){const e=(new Date).getFullYear(),t=(0,a.formatIsoDateStrAsExample)(this.locale,`${e}-11-29`,this.customMask,"month"),s=this.calendarMonthConverter_parseErrorFn&&this.calendarMonthConverter_parseErrorFn({dateExample:t});throw new Error(s??"parse failed")}return e}}})),define("oj-c/input-month-mask/CalendarMonthRangeValidator",["require","exports"],(function(require,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CalendarMonthRangeValidator=void 0;class a{constructor(e){if(e.min&&e.max&&a._compareCalendarMonths(e.min,e.max)>0)throw new Error("min must be less than max");this.defaultRangeOverflowMessageDetailFn=e.defaultRangeOverflowMessageDetailFn,this.defaultRangeUnderflowMessageDetailFn=e.defaultRangeUnderflowMessageDetailFn,this.min=e.min,this.max=e.max,this.dateRangeOverflowMessageDetail=e.dateRangeOverflowMessageDetail,this.dateRangeUnderflowMessageDetail=e.dateRangeUnderflowMessageDetail,this.formatObj=e.formatObj}validate(e){const t=this.dateRangeOverflowMessageDetail,s=this.dateRangeUnderflowMessageDetail,r=this.min,n=this.max;if(null===e)return;const o=e?this.formatObj.format(e):e;if(n&&a._compareCalendarMonths(e,n)>0){const e=this.formatObj.format(n),a=t?t({max:e,value:o}):this.defaultRangeOverflowMessageDetailFn({max:e});throw new Error(a)}if(r&&a._compareCalendarMonths(e,r)<0){const e=this.formatObj.format(r),a=s?s({min:e,value:o}):this.defaultRangeUnderflowMessageDetailFn({min:e});throw new Error(a)}return e}static _compareCalendarMonths(e,a){return e.year===a.year&&e.month===a.month?0:e.year===a.year?e.month>a.month?1:-1:e.year>a.year?1:-1}}e.CalendarMonthRangeValidator=a})),define("oj-c/input-month-mask/useImplicitCalendarMonthRangeValidator",["require","exports","preact/hooks","./CalendarMonthRangeValidator","@oracle/oraclejet-preact/hooks/UNSAFE_useTranslationBundle"],(function(require,e,a,t,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useImplicitCalendarMonthRangeValidator=void 0,e.useImplicitCalendarMonthRangeValidator=function({formatObj:e,dateRangeOverflowMessageDetail:r,dateRangeUnderflowMessageDetail:n,max:o,min:i}){const l=(0,s.useTranslationBundle)("@oracle/oraclejet-preact"),u=l.inputMonthMask_dateRangeOverflowMessageDetail,d=l.inputMonthMask_dateRangeUnderflowMessageDetail;return(0,a.useMemo)((()=>void 0!==i||void 0!==o?new t.CalendarMonthRangeValidator({defaultRangeOverflowMessageDetailFn:u,defaultRangeUnderflowMessageDetailFn:d,formatObj:e,max:o,min:i,dateRangeOverflowMessageDetail:r,dateRangeUnderflowMessageDetail:n}):null),[e,r,n,u,d,i,o])}})),define("oj-c/editable-value/utils/utils",["require","exports"],(function(require,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isShallowEqual=e.normalizeValue=e.treatNull=e.createMessageFromError=void 0,e.createMessageFromError=function(e){return"function"==typeof e.getMessage?{severity:"error",detail:e.getMessage().detail}:{severity:"error",detail:e.message}},e.treatNull=function(e,a){return null===e?a:e},e.normalizeValue=function(e){return"string"==typeof e&&""===e?null:e};e.isShallowEqual=(e,a)=>e===a||e.length===a.length&&e.every(((e,t)=>e===a[t]))})),define("oj-c/hooks/UNSAFE_useEditableValue/utils",["require","exports"],(function(require,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.treatNull=e.normalizeValue=e.isShallowEqual=e.hasErrorMessages=e.createMessageFromError=void 0;e.createMessageFromError=e=>"function"==typeof e.getMessage?{severity:"error",detail:e.getMessage().detail}:{severity:"error",detail:e.message};e.treatNull=(e,a)=>null===e?a:e;e.normalizeValue=e=>"string"==typeof e&&""===e?null:e;e.isShallowEqual=(e,a)=>e===a||e.length===a.length&&e.every(((e,t)=>e===a[t]));e.hasErrorMessages=e=>!!e&&e.some((e=>"error"===e.severity))})),define("oj-c/hooks/UNSAFE_useEditableValue/converterUtils",["require","exports","./utils"],(function(require,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.parse=e.format=void 0,e.parse=function(e,t){if(void 0===e)return{result:"success",value:null};if(""===(s=e)||null===s)return{result:"success",value:e};var s;try{return{result:"success",value:t.parse(e)}}catch(e){return{result:"failure",error:(0,a.createMessageFromError)(e)}}},e.format=function(e,t,s){if(function(e){return null===e}(e))return{result:"success",value:t};try{return{result:"success",value:s.format(e)}}catch(e){return{result:"failure",error:(0,a.createMessageFromError)(e)}}}})),define("oj-c/editable-value/UNSAFE_useStaleIdentity/useStaleIdentity",["require","exports","preact/hooks"],(function(require,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useStaleIdentity=void 0,e.useStaleIdentity=function(){const e=(0,a.useRef)(new Map);return{setStaleIdentity:(0,a.useCallback)((a=>{const t=Symbol();return e.current.set(a,t),{isStale:()=>t!==e.current.get(a)}}),[])}}})),define("oj-c/hooks/UNSAFE_useEditableValue/reducer",["require","exports"],(function(require,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.updateValue=e.updateValidStatus=e.updatePreviousValue=e.updatePreviousValidators=e.updatePreviousReadonly=e.updatePreviousDisabled=e.updatePreviousDeferredValidators=e.updatePreviousConverter=e.updateHiddenMessages=e.updateDisplayValue=e.updateCustomMessages=e.updateComponentMessages=e.showHiddenMessages=e.clearAllMessages=e.addComponentMessage=e.reducer=void 0,e.reducer=function(e,a){const t=e.customMessages??[],s=e.hiddenMessages,r=e.componentMessages,n=e.shownMessages;switch(a.type){case"UPDATE_DISPLAY_VALUE":return{...e,displayValue:a.payload};case"UPDATE_VALID":return{...e,valid:a.payload};case"UPDATE_VALUE":return{...e,value:a.payload};case"UPDATE_PREVIOUS_CONVERTER":return{...e,previousConverter:a.payload};case"UPDATE_PREVIOUS_DEFERRED_VALIDATORS":return{...e,previousDeferredValidators:a.payload};case"UPDATE_PREVIOUS_DISABLED":return{...e,previousDisabled:a.payload};case"UPDATE_PREVIOUS_READONLY":return{...e,previousReadonly:a.payload};case"UPDATE_PREVIOUS_VALIDATORS":return{...e,previousValidators:a.payload};case"UPDATE_PREVIOUS_VALUE":return{...e,previousValue:a.payload};case"UPDATE_COMPONENT_MESSAGES":return{...e,componentMessages:a.payload,shownMessages:[...t,...a.payload]};case"UPDATE_HIDDEN_MESSAGES":return{...e,hiddenMessages:a.payload};case"UPDATE_CUSTOM_MESSAGES":return{...e,customMessages:a.payload,shownMessages:[...a.payload,...r]};case"CLEAR_ALL_MESSAGES":return{...e,shownMessages:[],hiddenMessages:[],customMessages:[],componentMessages:[]};case"ADD_COMPONENT_MESSAGE":return{...e,componentMessages:[...r,a.payload],shownMessages:[...n,a.payload]};case"SHOW_HIDDEN_MESSAGES":return 0===s.length?e:{...e,hiddenMessages:[],shownMessages:[...t,...r,...s]};default:return e}},e.updateDisplayValue=function(e,a,{onRawValueChanged:t}){e({type:"UPDATE_DISPLAY_VALUE",payload:a}),t?.(a)},e.updateValidStatus=function(e,a,{onValidChanged:t}){e({type:"UPDATE_VALID",payload:a}),t?.(a)},e.updateValue=function(e,a,{onValueChanged:t}){e({type:"UPDATE_VALUE",payload:a}),t?.(a)},e.updateComponentMessages=function(e,a){e({type:"UPDATE_COMPONENT_MESSAGES",payload:a})},e.updateHiddenMessages=function(e,a){e({type:"UPDATE_HIDDEN_MESSAGES",payload:a})},e.updateCustomMessages=function(e,a){e({type:"UPDATE_CUSTOM_MESSAGES",payload:a})},e.updatePreviousValue=function(e,a){e({type:"UPDATE_PREVIOUS_VALUE",payload:a})},e.updatePreviousConverter=function(e,a){e({type:"UPDATE_PREVIOUS_CONVERTER",payload:a})},e.updatePreviousDeferredValidators=function(e,a){e({type:"UPDATE_PREVIOUS_DEFERRED_VALIDATORS",payload:a})},e.updatePreviousDisabled=function(e,a){e({type:"UPDATE_PREVIOUS_DISABLED",payload:a})},e.updatePreviousReadonly=function(e,a){e({type:"UPDATE_PREVIOUS_READONLY",payload:a})},e.updatePreviousValidators=function(e,a){e({type:"UPDATE_PREVIOUS_VALIDATORS",payload:a})},e.clearAllMessages=function(e,a,{onMessagesCustomChanged:t}){e({type:"CLEAR_ALL_MESSAGES"}),t?.([])},e.showHiddenMessages=function(e){e({type:"SHOW_HIDDEN_MESSAGES"})},e.addComponentMessage=function(e,a){e({type:"ADD_COMPONENT_MESSAGE",payload:a})}})),define("oj-c/hooks/UNSAFE_useEditableValue/validationUtils",["require","exports","./utils"],(function(require,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.validateSync=e.validateAsync=void 0,e.validateSync=function({validators:e,value:t}){const s=[];for(const r of e)try{r.validate(t)}catch(e){s.push((0,a.createMessageFromError)(e))}return s.length?{result:"failure",errors:s}:{result:"success"}},e.validateAsync=function({validators:e,value:t}){const s=(e,t)=>{try{const s=e.validate(t);if(s instanceof Promise)return s.then((()=>{}),(e=>(0,a.createMessageFromError)(e)))}catch(e){return(0,a.createMessageFromError)(e)}},r=[],n=[];for(const a of e){const e=s(a,t);void 0!==e&&(e instanceof Promise?n.push(e):r.push(e))}return{errors:r,maybeErrorPromises:n}}})),define("oj-c/hooks/UNSAFE_useEditableValue/useEditableValue",["require","exports","preact/hooks","./converterUtils","./utils","oj-c/editable-value/UNSAFE_useStaleIdentity/useStaleIdentity","./reducer","./validationUtils"],(function(require,e,a,t,s,r,n,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useEditableValue=void 0;const i=Symbol("ConverterError");e.useEditableValue=function({addBusyState:e,ariaDescribedBy:l,converter:u,defaultDisplayValue:d,deferredValidators:c,disabled:p,displayOptions:v,messagesCustom:g,onMessagesCustomChanged:m,onRawValueChanged:h,onValidChanged:f,onValueChanged:y,readonly:M,validators:E,value:S}){const V=(0,a.useRef)(!0),{setStaleIdentity:b}=(0,r.useStaleIdentity)(),[C,D]=(0,a.useReducer)(n.reducer,{shownMessages:[],hiddenMessages:[],customMessages:g,componentMessages:[],value:S,valid:"pending"},(e=>{const a=u?(0,t.format)(S,d,u):{result:"success",value:(0,s.treatNull)(S,d)};return{...e,displayValue:"success"===a.result?a.value:d}})),_=(0,a.useCallback)(((e,a)=>(e(D,a,{onMessagesCustomChanged:m,onRawValueChanged:h,onValidChanged:f,onValueChanged:y}),!0)),[D,m,h,f,y]),A=(0,a.useCallback)((e=>{let a;if(u){const r=(0,t.format)(e,d,u);"failure"===r.result?(_(n.updateComponentMessages,[r.error]),_(n.updateValidStatus,"invalidShown"),a=(0,s.treatNull)(e,d)):a=r.value}else a=(0,s.treatNull)(e,d);return _(n.updateDisplayValue,a),!0}),[u,_,d]),P=(0,a.useCallback)((()=>{if("invalidShown"!==C.valid)return C.value;if(!u)return(0,s.normalizeValue)(C.displayValue);const e=(0,t.parse)((0,s.normalizeValue)(C.displayValue),u);return"failure"===e.result?(_(n.updateComponentMessages,[e.error]),_(n.updateValidStatus,"invalidShown"),i):e.value}),[u,_,C.displayValue,C.valid,C.value]),R=(0,a.useCallback)((e=>{if(!u)return(0,s.normalizeValue)(e);const a=(0,t.parse)((0,s.normalizeValue)(e),u);return"failure"===a.result&&_(n.updateComponentMessages,[a.error])&&_(n.updateValidStatus,"invalidShown"),"success"===a.result?a.value:i}),[u,_]),w=(0,a.useCallback)((async(a,t={})=>{const{doNotClearMessagesCustom:r=!1}=t,i=r&&(0,s.hasErrorMessages)(g);if(_(n.updateValidStatus,"pending"),r?(_(n.updateComponentMessages,[]),_(n.updateHiddenMessages,[])):_(n.clearAllMessages),!(E&&0!==E.length||c&&0!==c.length))return _(n.updateValidStatus,i?"invalidShown":"valid"),!0;const l=[],u=(0,o.validateSync)({validators:c??[],value:a});let d;"failure"===u.result&&l.push(...u.errors),null!=a&&(d=(0,o.validateAsync)({validators:E??[],value:a})),l.push(...d?.errors??[]);const p=d?.maybeErrorPromises??[];if(!l.length&&!p.length)return _(n.updateValidStatus,i?"invalidShown":"valid"),!0;const v=0!==l.length;if(v&&_(n.updateComponentMessages,l)&&_(n.updateValidStatus,"invalidShown"),!p.length)return!v;const m=e?.("running asynchronous validation"),{isStale:h}=b("useEditableValue-full-validate");let f=!1;const y=[];for(const e of p){const a=e.then((e=>{e&&!h()&&(_(n.addComponentMessage,e),_(n.updateValidStatus,"invalidShown"),f=!0)}));y.push(a)}return await Promise.all(y),v||f||h()||_(n.updateValidStatus,i?"invalidShown":"valid"),m?.(),!v&&!f}),[e,_,c,g,b,E]),j=async()=>{if(p||M)return;const e=P();if(e===i)return;const a=e;await U(a,{doNotClearMessagesCustom:!0})&&_(n.updateValue,a)&&A(a)},U=(0,a.useCallback)((async(a,t={})=>{const{isStale:s}=b("useEditableValue-validateValueOnInternalChange"),r=e?.("Running validateValueOnInternalChange"),n=await w(a,t);return r?.(),!s()&&n}),[e,w,b]),O=(0,a.useCallback)((async({value:e})=>{const a=R(e);if(a===i)return;const t=a;await U(t)&&_(n.updateValue,t)&&A(t)}),[_,R,A,U]),k=(0,a.useCallback)((({value:e})=>{_(n.updateDisplayValue,e??d)}),[_,d]),x=(0,a.useCallback)((async()=>{if(M||p)return"valid";const a=R(C.displayValue);if(a===i)return"invalid";const t=a,s=e?.("Running component method validate"),r=await w(t);return s?.(),r?(t!==C.value&&(_(n.updateValue,t),A(t)),"valid"):"invalid"}),[e,p,_,w,R,M,A,C.displayValue,C.value]),F=(0,a.useCallback)((()=>{_(n.clearAllMessages);const e=C.value,a=(0,o.validateSync)({validators:c??[],value:e});"failure"===a.result&&_(n.updateHiddenMessages,a.errors),_(n.updateValidStatus,"failure"===a.result?"invalidHidden":"valid"),A(C.value)}),[c,_,A,C.value]),I=(0,a.useCallback)((()=>{C.hiddenMessages&&C.hiddenMessages.length>0&&(_(n.showHiddenMessages),_(n.updateValidStatus,"invalidShown"))}),[_,C.hiddenMessages]);if(!V.current&&C.previousValue!==S&&(_(n.updatePreviousValue,S),S!==C.value)){_(n.clearAllMessages);const e=(0,o.validateSync)({validators:c??[],value:S});"success"===e.result&&_(n.updateValidStatus,"valid"),"failure"===e.result&&_(n.updateValidStatus,"invalidHidden")&&_(n.updateHiddenMessages,e.errors),_(n.updateValue,S),A(S)}if(V.current||C.previousConverter===u||(_(n.updatePreviousConverter,u),"invalidShown"!==C.valid&&A(S),"invalidShown"===C.valid&&j()),V.current||C.previousValidators===E||(_(n.updatePreviousValidators,E),"invalidShown"===C.valid&&j()),!V.current&&(!C.customMessages&&g||C.customMessages&&!g||C.customMessages&&g&&!(0,s.isShallowEqual)(C.customMessages,g))){const e=C.componentMessages??[],a=C.hiddenMessages??[],t=g??[],r=(0,s.hasErrorMessages)(t),o=a.length>0,i=0===e.length&&0===a.length&&0===t.length;_(n.updateCustomMessages,t),r&&_(n.updateValidStatus,"invalidShown"),!r&&"pending"!==C.valid&&(i&&_(n.updateValidStatus,"valid")||o&&_(n.updateValidStatus,"invalidHidden"))}if(!V.current&&(C.previousDeferredValidators!==c||C.previousDisabled!==p||C.previousReadonly!==M)){const e=0===c?.length;if(C.previousDeferredValidators!==c&&_(n.updatePreviousDeferredValidators,c),C.previousDisabled!==p&&_(n.updatePreviousDisabled,p),C.previousReadonly!==M&&_(n.updatePreviousReadonly,M),e||!M&&!p)switch(C.valid){case"valid":const e=P();if(e!==i){const a=(0,o.validateSync)({validators:c??[],value:e});"failure"===a.result&&_(n.updateHiddenMessages,a.errors)&&_(n.updateValidStatus,"invalidHidden")}break;case"invalidHidden":0===c?.length&&(_(n.updateValidStatus,"valid"),_(n.updateHiddenMessages,[]));break;case"invalidShown":j()}}return V.current&&(V.current=!1),(0,a.useEffect)((()=>{if(_(n.updatePreviousValue,S),_(n.updatePreviousConverter,u),_(n.updatePreviousValidators,E),_(n.updatePreviousDeferredValidators,c),_(n.updatePreviousDisabled,p),_(n.updatePreviousReadonly,M),_(n.updateCustomMessages,g),p||M)_(n.updateValidStatus,"valid"),A(S);else{const e=(0,o.validateSync)({validators:c??[],value:S});"failure"===e.result&&_(n.updateHiddenMessages,e.errors)&&_(n.updateValidStatus,"invalidHidden"),"success"===e.result&&_(n.updateValidStatus,(0,s.hasErrorMessages)(g)?"invalidShown":"valid")&&A(S)}}),[]),{value:C.value,displayValue:C.displayValue,methods:{reset:F,showMessages:I,validate:x},textFieldProps:{"aria-describedby":l,messages:"none"!==v?.messages?C.shownMessages:void 0,onCommit:O,onInput:k,value:C.displayValue}}}})),define("oj-c/editable-value/UNSAFE_useDeferredValidators/useDeferredValidators",["require","exports","ojs/ojvalidator-required","preact/hooks","@oracle/oraclejet-preact/hooks/UNSAFE_useTranslationBundle"],(function(require,e,a,t,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useDeferredValidators=void 0,e.useDeferredValidators=function({labelHint:e,required:r,requiredMessageDetail:n}){const o=(0,s.useTranslationBundle)("@oracle/oraclejet-preact"),i=n||o.formControl_requiredMessageDetail(),l=(0,t.useMemo)((()=>r?new a({label:e,messageDetail:i}):null),[r]);return(0,t.useMemo)((()=>[l].filter(Boolean)),[l])}})),define("oj-c/input-month-mask/useInputMonthMaskPreact",["require","exports","./CalendarMonthConverter","preact/hooks","@oracle/oraclejet-preact/hooks/UNSAFE_useTranslationBundle","ojs/ojconverter-preferences","@oracle/oraclejet-preact/utils/UNSAFE_calendarDateUtils","./useImplicitCalendarMonthRangeValidator","oj-c/editable-value/utils/utils","ojs/ojconfig","oj-c/hooks/UNSAFE_useEditableValue/useEditableValue","oj-c/editable-value/UNSAFE_useDeferredValidators/useDeferredValidators"],(function(require,e,a,t,s,r,n,o,i,l,u,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useInputMonthMaskPreact=void 0,e.useInputMonthMaskPreact=function({dateRangeOverflowMessageDetail:e,dateRangeUnderflowMessageDetail:r,disabled:v,displayOptions:g,labelEdge:m,labelHint:h,labelStartWidth:f,max:y,messagesCustom:M,min:E,readonly:S,required:V,requiredMessageDetail:b,textAlign:C,userAssistanceDensity:D,validators:_,value:A,onMessagesCustomChanged:P,onRawValueChanged:R,onValidChanged:w,onValueChanged:j,...U},O){const k=(0,i.treatNull)(E),x=(0,i.treatNull)(y),F=(0,s.useTranslationBundle)("@oracle/oraclejet-preact").calendarMonthConverter_parseError,I=(0,t.useMemo)((()=>p()),[]),T=(0,t.useMemo)((()=>new a.CalendarMonthConverter({calendarMonthConverter_parseErrorFn:F,customMask:I})),[F,I]),N=(0,t.useMemo)((()=>({format:e=>(0,n.formatCalendarMonthRequiredAsExample)((0,l.getLocale)(),e,I)})),[I]),H=(0,o.useImplicitCalendarMonthRangeValidator)({formatObj:N,dateRangeOverflowMessageDetail:e,dateRangeUnderflowMessageDetail:r,max:x,min:k}),q=(0,t.useMemo)((()=>[...H?[H]:[],..._||[]]),[H,_]),L=(0,d.useDeferredValidators)({labelHint:h,required:V,requiredMessageDetail:b}),{methods:B,textFieldProps:W,value:G}=(0,u.useEditableValue)({addBusyState:O,ariaDescribedBy:U["aria-describedby"],converter:T,defaultDisplayValue:void 0,deferredValidators:L,disabled:v,displayOptions:g,messagesCustom:M,onMessagesCustomChanged:P,onRawValueChanged:R,onValidChanged:w,onValueChanged:j,readonly:S,validators:q,value:A}),z=void 0===G||!c(W.value);return{methods:B,inputMonthMaskProps:{isDisabled:v,isReadonly:S,isRequired:V,isRequiredShown:V&&("compact"===D||z),label:h,labelEdge:m,labelStartWidth:f,masks:I,textAlign:C,userAssistanceDensity:D,...W}}};const c=e=>void 0!==e&&(void 0!==e.year||void 0!==e.month),p=()=>{const e=(0,r.getDateTimePreferences)(),a=e.dateStyle?.short?.pattern;if(!a||a.toUpperCase().includes("MMM"))return;const t=(0,n.getDatePlaceholdersFromPattern)(a);return(0,n.getMonthYearPlaceholdersFromDatePlaceholders)(t)}})),define("oj-c/input-month-mask/input-month-mask",["require","exports","preact/jsx-runtime","@oracle/oraclejet-preact/translationBundle","@oracle/oraclejet-preact/hooks/UNSAFE_useFormContext","oj-c/hooks/UNSAFE_useMergedFormContext/useMergedFormContext","@oracle/oraclejet-preact/hooks/UNSAFE_useFormVariantContext","@oracle/oraclejet-preact/hooks/UNSAFE_useTabbableMode","@oracle/oraclejet-preact/UNSAFE_InputDateMask","oj-c/editable-value/UNSAFE_useAssistiveText/useAssistiveText","ojs/ojcontext","ojs/ojvcomponent","preact/compat","preact/hooks","./useInputMonthMaskPreact","@oracle/oraclejet-preact/utils/UNSAFE_styles/Layout","@oracle/oraclejet-preact/utils/UNSAFE_calendarDateUtils","css!oj-c/input-month-mask/input-month-mask-styles.css"],(function(require,e,a,t,s,r,n,o,i,l,u,d,c,p,v,g,m){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.InputMonthMask=void 0;const h={messages:"display",validatorHint:"display"},f={instruction:""},y={definition:"",source:""},M=[],E=[];e.InputMonthMask=(0,d.registerCustomElement)("oj-c-input-month-mask",(0,c.forwardRef)((({columnSpan:e=1,containerReadonly:t,disabled:o=!1,displayOptions:c=h,help:S=f,helpHints:V=y,labelWrapping:b,messagesCustom:C=M,readonly:D,required:_=!1,userAssistanceDensity:A,validators:P=E,value:R=null,...w},j)=>{const U=(0,p.useRef)(),O=(0,p.useRef)(),k=(0,p.useCallback)(((e="InputMonthMask: busyState")=>U.current?u.getContext(U.current).getBusyContext().addBusyState({description:e}):()=>{}),[]),{containerProps:x,uadValue:F,readonlyValue:I}=(0,r.useMergedFormContext)({propContainerReadonly:t,propLabelWrapping:b,propReadonly:D,propUserAssistanceDensity:A}),{inputMonthMaskProps:T,methods:N}=(0,v.useInputMonthMaskPreact)({disabled:o,displayOptions:c,messagesCustom:C,readonly:I,required:_,userAssistanceDensity:F,validators:P,value:R,...w},k);(0,p.useImperativeHandle)(j,(()=>({blur:()=>O.current?.blur(),focus:()=>O.current?.focus(),...N})),[N]);const H=(0,l.useAssistiveText)({displayOptions:c,help:S,helpHints:V,userAssistanceDensity:T.userAssistanceDensity,validators:P}),q=(0,n.useFormVariantContext)();if(!(0,m.isValidCalendarMonthRequired)(R))throw new Error("If the value property is defined, it must be an object with year and month defined.");if(!(0,m.isValidCalendarMonthRequired)(w.min))throw new Error("If the min property is defined, it must be an object with year and month defined.");if(!(0,m.isValidCalendarMonthRequired)(w.max))throw new Error("If the max property is defined, it must be an object with year and month defined.");return(0,a.jsx)(d.Root,{id:w.id,ref:U,class:g.layoutSpanStyles.layoutSpanColumn[e],children:(0,a.jsx)(s.FormContext.Provider,{value:x,children:(0,a.jsx)(i.InputDateMask,{ref:O,...H,...T,variant:q,granularity:"month"})})})})),"InputMonthMask",{properties:{columnSpan:{type:"number"},containerReadonly:{type:"boolean",binding:{consume:{name:"containerReadonly"}}},dateRangeOverflowMessageDetail:{type:"function"},dateRangeUnderflowMessageDetail:{type:"function"},disabled:{type:"boolean"},displayOptions:{type:"object",properties:{messages:{type:"string",enumValues:["none","display"]},validatorHint:{type:"string",enumValues:["none","display"]}}},help:{type:"object",properties:{instruction:{type:"string"}}},helpHints:{type:"object",properties:{definition:{type:"string"},source:{type:"string"},sourceText:{type:"string"}}},labelEdge:{type:"string",enumValues:["none","start","top","inside"],binding:{consume:{name:"containerLabelEdge"}}},labelHint:{type:"string"},labelStartWidth:{type:"number|string",binding:{consume:{name:"labelWidth"}}},labelWrapping:{type:"string",enumValues:["truncate","wrap"],binding:{consume:{name:"labelWrapping"}}},max:{type:"object|null",properties:{year:{type:"number"},month:{type:"number"}}},messagesCustom:{type:"Array<object>",writeback:!0},min:{type:"object|null",properties:{year:{type:"number"},month:{type:"number"}}},readonly:{type:"boolean",binding:{consume:{name:"containerReadonly"}}},required:{type:"boolean"},requiredMessageDetail:{type:"string"},textAlign:{type:"string",enumValues:["end","start","right"]},userAssistanceDensity:{type:"string",enumValues:["compact","reflow","efficient"],binding:{consume:{name:"containerUserAssistanceDensity"}}},validators:{type:"Array<object>|null"},value:{type:"object|null",properties:{year:{type:"number"},month:{type:"number"}},writeback:!0},rawValue:{type:"object",properties:{year:{type:"number"},month:{type:"number"}},readOnly:!0,writeback:!0},valid:{type:"string",enumValues:["pending","valid","invalidHidden","invalidShown"],readOnly:!0,writeback:!0}},extension:{_WRITEBACK_PROPS:["messagesCustom","rawValue","valid","value"],_READ_ONLY_PROPS:["rawValue","valid"],_OBSERVED_GLOBAL_PROPS:["aria-describedby","id"]},methods:{blur:{},focus:{},showMessages:{},reset:{},validate:{}}},{columnSpan:1,disabled:!1,displayOptions:{messages:"display",validatorHint:"display"},help:{instruction:""},helpHints:{definition:"",source:""},messagesCustom:[],required:!1,validators:[],value:null},{"@oracle/oraclejet-preact":t.default},{consume:[n.FormVariantContext,o.TabbableModeContext]})})),define("oj-c/input-month-mask",["require","exports","oj-c/input-month-mask/input-month-mask"],(function(require,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.InputMonthMask=void 0,Object.defineProperty(e,"InputMonthMask",{enumerable:!0,get:function(){return a.InputMonthMask}})}));
//# sourceMappingURL=input-month-mask.js.map