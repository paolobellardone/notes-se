define(['exports', 'preact/jsx-runtime', 'preact/hooks', './Flex-0052275f', 'css!./MessageBannerStyles.styles.css', 'module', './UNSAFE_MessageBanner/themes/redwood/MessageBannerVariants.css', './logger-36c6eea0', 'preact', './Floating-aaafdcf7', 'preact/compat', './TopLayerHost-d9bd8ecf', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./IconStyle.styles.css', './IconButton-edf452c8', 'css!./MessageStyles.styles.css', './MessageFormattingUtils-6913a734', './MessagesManager-43d0389d', './ComponentMessage-08a172f3', './UNSAFE_ComponentMessage/themes/ComponentMessageStyles.css'], (function(e,s,t,a,o,n,r,i,l,c,d,g,m,p,y,M,f,h,u,C,S,B){"use strict";function F(e){return e.map(((e,s)=>({key:s,data:{closeAffordance:"off",severity:e.severity||"error",detail:e.detail}})))}e.ComponentMessageContainer=function({fieldLabel:e,messages:t=[]}){return s.jsx("div",{class:B.componentMessageContainerBase,children:s.jsx(C.MessagesManager,{data:F(t),children:({item:t})=>s.jsx(S.ComponentMessage,{detail:t.data.detail,fieldLabel:e,severity:t.data.severity},t.key)})})}}));
//# sourceMappingURL=ComponentMessageContainer-7a5e377a.js.map
