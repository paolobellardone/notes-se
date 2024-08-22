define(['exports', 'preact/jsx-runtime', 'preact/hooks', './Flex-db3ddadb', './UNSAFE_MessageBanner/themes/redwood/MessageBannerTheme', './useComponentTheme-5aa41a8f', './timer-571d3748', './classNames-08d99695', './Close-479a300b', './IconButton-1b328b69', './useTranslationBundle-20bfc0f3', './PRIVATE_Message/themes/MessageStyles.css', 'preact', './MessageFormattingUtils-2e19d8de', './MessagesManager-78a10f78', './utils-61ef4ad6'], (function(e,s,a,t,n,r,o,l,i,c,u,m,d,g,f,y){"use strict";function v({onAction:e,variant:a="banner"}){const t=u.useTranslationBundle("@oracle/oraclejet-preact"),n=s.jsx(c.IconButton,{"aria-label":t.message_close(),size:"sm",variant:"borderless",onAction:e,children:s.jsx(i.SvgClose,{})}),r=l.classNames([m.messageCloseButtonStyles.base,m.messageCloseButtonStyles[a]]);return s.jsx("div",{class:r,"data-oj-message-close-button":"",children:n})}function b({item:e,renderer:a}){const t=l.classNames([m.messageStartIconStyles.base,m.messageStartIconStyles.toast,m.messageStartIconStyles.customToast]);return s.jsx("div",{class:t,role:"presentation","data-oj-message-custom-icon":"",children:a(e)})}function p(e){const{detail:a}=e.data;return g.isValidValueForProp(a)?s.jsx(d.Fragment,{children:a}):null}function x({item:e,renderer:a,variant:t="banner"}){const n=null!=a,r=(a??p)(e);if(null==r)return null;const o=l.classNames([m.messageDetailStyles.base,m.messageDetailStyles[t]]);return s.jsx("div",{class:o,...n?{"data-oj-message-custom-detail":""}:{},children:r})}function j({children:e,variant:a="banner"}){const t=l.classNames([m.messageHeaderStyles.base,m.messageHeaderStyles[a]]);return s.jsx("div",{role:"presentation",class:t,children:e})}function S({value:e,variant:a="banner"}){const t=l.classNames([m.messageTimestampStyles[a]]),n=g.formatTimestamp(e);return s.jsx("div",{class:t,children:n})}function h(e){return g.isValidValueForProp(e,"severity")&&"none"!==e}e.Message=function({detailRenderer:e,iconRenderer:i,item:c,onClose:u,messageRef:d=(()=>{}),variant:p="pageBanner"}){const{closeAffordance:C="on",severity:B="error",sound:M,summary:T,timestamp:k}=c.data,{autoTimeout:F="off"}=c.data,I=function(e){return"pageBanner"===e||"sectionBanner"===e?"banner":"toast"}(p),N=a.useCallback((()=>{u?.(c)}),[c,u]),V=a.useCallback((e=>{"Escape"===e.key&&"on"===C&&u?.(c)}),[C,c,u]),A="toast"===I&&"off"!==F,R=a.useRef(),P="on"===F?5e3:"number"==typeof F?F:5e3,E=a.useCallback((()=>{R.current||(R.current=new o.Timer(N,P))}),[N,P]),U=a.useCallback((()=>{R.current&&(R.current.clear(),R.current=void 0)}),[]),w=a.useCallback((()=>{R.current?.pause()}),[]),D=a.useCallback((()=>{R.current?.resume()}),[]);a.useEffect((()=>(g.isValidValueForProp(M)&&f.playSound(M),A&&E(),()=>{U()})),[]);const{variantClasses:_}=r.useComponentTheme(n.MessageBannerRedwoodTheme,{severity:B}),H=l.classNames(["banner"===I&&_,m.messageStyles.base[I],"toast"!==p&&f.severityBasedStyleClass(B,I),"sectionBanner"===p&&m.messageStyles.section]),$=l.classNames([m.messageStyles.content.base,m.messageStyles.content[I]]);return s.jsx("div",{ref:d,class:H,role:"alert","aria-atomic":"true","data-oj-key":`${typeof c.key}-${c.key}`,tabIndex:0,onKeyUp:V,onFocusIn:w,onFocusOut:D,children:s.jsxs("div",{class:$,children:[i?s.jsx(b,{item:c,renderer:i}):h(B)?s.jsx(f.MessageStartIcon,{severity:B,variant:I}):null,s.jsxs(t.Flex,{direction:"column",flex:"1",gap:y.xUnits(2),children:[s.jsxs(j,{variant:I,children:[s.jsx(f.MessageSummary,{variant:I,text:T,role:"heading","aria-level":2}),g.isValidValueForProp(k,"timestamp")&&"toast"!==p&&s.jsx(S,{variant:I,value:k})]}),s.jsx(x,{variant:I,item:c,renderer:e})]}),"on"===C&&s.jsx(v,{variant:I,onAction:N})]})})},e.MessageCloseButton=v,e.MessageDetail=x,e.MessageTimestamp=S}));
//# sourceMappingURL=Message-51d787d0.js.map
