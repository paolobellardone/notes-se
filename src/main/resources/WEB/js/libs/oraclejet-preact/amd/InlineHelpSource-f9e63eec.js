define(['exports', 'preact/jsx-runtime', './classNames-49c3ba27', './useComponentTheme-9a36e65b', './TabbableModeContext-c9143afd', './useTabbableMode-c39b463d', './useTranslationBundle-20ce0acf', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceTheme'], (function(e,s,a,n,t,c,o,r){"use strict";e.InlineHelpSource=function({children:e,source:t}){const l=o.useTranslationBundle("@oracle/oraclejet-preact").userAssistance_learnMore();e=e??l;const{isTabbable:b,tabbableModeProps:u}=c.useTabbableMode(),{classes:d,styles:i}=n.useComponentTheme(r.UserAssistanceRedwoodTheme),{helpSourceStyles:m}=i;return s.jsx("a",{class:a.classNames([d,m]),target:"_blank",href:t,...!b&&u,children:e})}}));
//# sourceMappingURL=InlineHelpSource-f9e63eec.js.map