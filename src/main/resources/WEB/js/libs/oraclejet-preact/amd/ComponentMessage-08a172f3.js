define(['exports', 'preact/jsx-runtime', './useComponentTheme-9a36e65b', 'preact/hooks', './Flex-0052275f', 'css!./MessageBannerStyles.styles.css', 'module', './UNSAFE_MessageBanner/themes/redwood/MessageBannerVariants.css', 'preact', './Floating-aaafdcf7', 'preact/compat', './TopLayerHost-d9bd8ecf', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./IconStyle.styles.css', './IconButton-edf452c8', 'css!./MessageStyles.styles.css', './MessageFormattingUtils-6913a734', './MessageStartIcon-94a5f4d2', './MessageSummary-161b06f8', './MessageUtils-652ca803', './TransitionGroup-f4f056d2', './MessagesContext-ec60ba60', './HiddenAccessible-00402562', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageTheme'], (function(e,s,t,o,a,n,r,i,c,l,d,m,g,p,y,M,h,u,S,f,T,C,x,B,F,b){"use strict";e.ComponentMessage=function({detail:e,fieldLabel:o,severity:a="error"}){const{classes:n}=t.useComponentTheme(b.ComponentMessageRedwoodTheme,{severity:a??"none"});return s.jsxs("div",{class:n,role:"alert","aria-atomic":"true",children:[o&&s.jsx(F.HiddenAccessible,{children:o}),C.isSeverityIconNeeded(a)&&s.jsx(f.MessageStartIcon,{variant:"inline",severity:a}),s.jsx(T.MessageSummary,{variant:"inline",text:e})]})}}));
//# sourceMappingURL=ComponentMessage-08a172f3.js.map
