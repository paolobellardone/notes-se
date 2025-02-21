define(['exports', 'preact/jsx-runtime', './logger-0f873e29', 'preact/hooks', './Flex-3421f0df', 'css!./MessageBannerStyles.styles.css', 'module', './UNSAFE_MessageBanner/themes/redwood/MessageBannerVariants.css', 'preact', './LayerHost-639b3284', 'preact/compat', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', './tooltipUtils-e5bdb734', 'css!./IconStyle.styles.css', './IconButton-ae9a01ce', 'css!./MessageStyles.styles.css', './MessageFormattingUtils-2e19d8de', './TransitionGroup-3b9d81b6', './MessagesContext-602a69a2', 'css!./HiddenAccessibleStyles.styles.css', 'css!./ComponentMessageStyles.styles.css', 'module', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageVariants.css', 'css!./UserAssistanceStyles.styles.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', './ComponentMessageContainer-8028ba70', './FormContext-5130e198', './useFormContext-30acdd33', './FormFieldContext-3c44aaaa', './useFormFieldContext-8196183c', './InlineHelp-a169f974', './useTranslationBundle-d07d4b20', './useComponentTheme-5aa41a8f', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceTheme', './classNames-08d99695', './InputGroupContext-372087af', './useInputGroupContext-e6e19f4f', './useTestId-b5cd4766'], (function(e,s,t,n,o,a,i,r,l,c,d,u,m,p,h,C,g,A,T,x,y,U,F,S,f,M,I,w,B,b,N,_,E,j,v,k,H,L,R,q,G){"use strict";function V({align:e="end",hasHelp:t=!1,hasMessages:n=!1}){const{classes:o}=k.useComponentTheme(H.UserAssistanceRedwoodTheme,{align:e,visible:t||n?"hide":"show"}),a=v.useTranslationBundle("@oracle/oraclejet-preact").userAssistance_required();return s.jsx("div",{class:o,children:a})}function D({variant:e="reflow",children:t,id:n,testId:o}){const{classes:a,styles:{inlineContainerBaseStyles:i}}=k.useComponentTheme(H.UserAssistanceRedwoodTheme,{container:e}),r=G.useTestId(o);if(null!==q.useInputGroupContext())return null;return s.jsx("div",{class:L.classNames([a,i]),id:n,...r,children:t})}e.InlineRequired=V,e.InlineUserAssistance=function({assistiveText:e,fieldLabel:t,helpSourceLink:n,helpSourceText:o,id:a,isRequiredShown:i,requiredAlignment:r,messages:l=[],userAssistanceDensity:c,testId:d}){const{isReadonly:u}=N.useFormContext(),m="efficient"===c&&!1===u,{isFocused:p}=E.useFormFieldContext(),h=l.length>0?s.jsx(B.ComponentMessageContainer,{fieldLabel:t,messages:l}):(e||n)&&p?s.jsx(j.InlineHelp,{assistiveText:e,sourceLink:n,sourceText:o}):i?s.jsx(V,{align:r}):null;return h||m?s.jsx(D,{id:a,variant:c,testId:d,children:h}):null},e.InlineUserAssistanceContainer=D}));
//# sourceMappingURL=InlineUserAssistance-4656c2a6.js.map
