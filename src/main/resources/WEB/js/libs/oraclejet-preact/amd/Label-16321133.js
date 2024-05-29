define(['exports', 'preact/jsx-runtime', './FormFieldContext-57ac57ba', './useFormFieldContext-cbd8677f', './classNames-49c3ba27', './FormContext-598efe92', './useFormContext-9b29eeaf', './useComponentTheme-9a36e65b', './TabbableModeContext-c9143afd', 'preact/hooks', './TopLayerHost-d9bd8ecf', 'preact/compat', 'css!./UserAssistanceStyles.styles.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', './Flex-0052275f', 'css!./MessageBannerStyles.styles.css', 'module', './UNSAFE_MessageBanner/themes/redwood/MessageBannerVariants.css', 'preact', './Floating-aaafdcf7', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./IconStyle.styles.css', './IconButton-edf452c8', 'css!./MessageStyles.styles.css', './MessageFormattingUtils-6913a734', './logger-36c6eea0', './TransitionGroup-f4f056d2', './MessagesContext-ec60ba60', 'css!./HiddenAccessibleStyles.styles.css', 'css!./ComponentMessageStyles.styles.css', 'module', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageVariants.css', './InputGroupContext-6c5f432c', './Popup-c6026a77', './UNSAFE_Separator/themes/SeparatorStyles.css', './CompactLabelAssistance-c936e7a6', 'module', './UNSAFE_Popup/themes/redwood/PopupVariants.css', './UNSAFE_TextField/themes/redwood/TextFieldTheme', './UNSAFE_Label/themes/redwood/LabelTheme'], (function(e,s,o,t,a,n,l,i,d,r,c,m,p,u,F,h,y,b,S,T,x,C,A,g,f,U,w,E,N,L,I,M,V,_,B,R,D,j,k,P,v,O,W){"use strict";const q=({hasValue:e,readonly:o,disabled:t,isFocused:n,isRequiredShown:d,helpIconId:r,helpSourceLink:c,helpSourceText:m,userAssistanceDensity:p="reflow",variant:u="inside",parentComponentVariant:F="textField",...h})=>{const{isFormLayout:y,isReadonly:b,labelWrapping:S}=l.useFormContext(),T="inside"===u,x="textField"===F,{classes:C,styles:{uaDensityCompactLabel:A,uaDensityCompactLabelStart:g,uaDensityCompactLabelTopInside:f}}=i.useComponentTheme(W.LabelRedwoodTheme,{labelWrapping:S,position:u,inside:T?"isInside":"notInside",inEnabledForm:y&&!b?"isInEnabledForm":"notInEnabledForm",readonly:o?"isReadonly":"notReadonly",focused:n?"isFocused":"nonFocused",formLayout:y?"isFormLayout":"nonFormLayout",readonlyForm:b?"isReadonlyForm":"notReadonlyForm",textField:x?"isTextField":"notTextField",value:e?"hasValue":"noValue",valueOrFocus:e||n?"hasValueOrFocus":"noValueOrFocus",animatedWhenInside:x?"isAnimated":"notAnimated",disabled:x&&t?"isDisabled":"nonDisabled",userAssistanceDensity:p}),{baseTheme:U}=i.useComponentTheme(O.TextFieldRedwoodTheme),w=a.classNames([A,"start"===u?g:f]),E=s.jsx("label",{...h,class:w});return"compact"===p?s.jsxs("div",{class:a.classNames([C,U]),children:["start"!==u&&E,s.jsx(k.CompactLabelAssistance,{isRequiredShown:d,helpIconId:r,helpSourceLink:c,helpSourceText:m,labelEdge:"top"===u||"start"===u?u:"inside"}),"start"===u&&E]}):s.jsx("label",{...h,class:a.classNames([C,U])})};e.Label=({forId:e,...o})=>{const{hasValue:a,isDisabled:n,isFocused:l,isReadonly:i}=t.useFormFieldContext();return s.jsx(q,{for:e,hasValue:a,disabled:n,isFocused:l,readonly:i,...o})}}));
//# sourceMappingURL=Label-16321133.js.map