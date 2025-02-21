define(['exports', 'preact/jsx-runtime', './Grid-8911aa0f', './classNames-08d99695', './UNSAFE_ListItemLayout/themes/ListItemLayoutStyles.css'], (function(s,e,l,t,a){"use strict";s.ListItemLayout=function({children:s,selector:n,leading:c,primary:i,secondary:d,tertiary:r,overline:y,metadata:o,trailing:m,action:h,quaternary:u,navigation:p,verticalAlignment:x="middle"}){const{columnsTemplate:S,firstCell:N,secondCell:j,lastCell:v,hasSecondRow:f}="top"===x?function(s,l,n,c,i,d,r){const y=[];let o=null;s&&(y.push("auto"),o=e.jsx("div",{className:a.styles.optInSelectorStyles,children:s}));let m=null;(s||l)&&(y.push("auto"),m=e.jsx("div",{className:t.classNames([s?a.styles.leftPaddingStyles:"",a.styles.topAlignStyles,l?a.styles.optInRightPaddingStyles:""]),children:l}));y.push("1fr");let h=null;(n||c||i||r)&&(y.push("auto"),h=e.jsx("div",{className:t.classNames([a.styles.topAlignStyles]),children:e.jsxs("div",{className:t.classNames([a.styles.optInExtraStyles,a.styles.flexRowStyles]),children:[e.jsx("div",{className:t.classNames([a.styles.centerVerticalStyles,n?a.styles.leftPaddingStyles:""]),children:n}),e.jsx("div",{className:t.classNames([a.styles.centerVerticalStyles,c?a.styles.leftPaddingStyles:""]),children:c}),e.jsx("div",{className:t.classNames([a.styles.centerVerticalStyles,i?a.styles.actionStyles:""]),children:i})]})}));const u=y.join(" "),p=!(!d&&!r);return{columnsTemplate:u,firstCell:o,secondCell:m,lastCell:h,hasSecondRow:p}}(n,c,o,m,h,u,p):function(s,l,n,c,i,d,r){const y=[];let o=null;s&&(y.push("auto"),o=e.jsx("div",{className:a.styles.selectorStyles,children:s}));let m=null;l&&(y.push("auto"),m=e.jsx("div",{className:t.classNames([a.styles.centerVerticalStyles,a.styles.displayFlexStyle]),children:l}));y.push("1fr");let h=null;(n||c||i||r)&&(y.push("auto"),h=e.jsxs("div",{className:a.styles.flexRowStyles,children:[e.jsx("div",{className:t.classNames([a.styles.centerVerticalStyles,n?a.styles.leftPaddingStyles:""]),children:n}),e.jsx("div",{className:t.classNames([a.styles.centerVerticalStyles,c?a.styles.leftPaddingStyles:""]),children:c}),e.jsx("div",{className:t.classNames([a.styles.centerVerticalStyles,i?a.styles.actionStyles:""]),children:i})]}));const u=y.join(" "),p=!(!d&&!r);return{columnsTemplate:u,firstCell:o,secondCell:m,lastCell:h,hasSecondRow:p}}(n,c,o,m,h,u,p),g=y&&"top"===x?[N&&e.jsx("span",{children:" "}),j&&e.jsx("span",{children:" "}),e.jsx("div",{className:a.styles.topRowStyles,children:y}),v&&e.jsx("span",{children:" "})]:null,C=s?e.jsx("div",{className:a.styles.childrenStyles,children:s}):e.jsxs("div",{className:a.styles.flexColumnStyles,children:["top"===x?null:e.jsx("div",{children:y}),e.jsx("div",{children:i}),e.jsx("div",{children:d}),e.jsx("div",{children:r})]}),I=f?[N&&e.jsx("span",{children:" "}),j&&e.jsx("span",{children:" "}),e.jsx("div",{className:t.classNames(["top"===x?a.styles.optInTopPaddingStyles:"",a.styles.rowAlignStyles]),children:u}),v&&e.jsx("div",{className:t.classNames(["top"===x?a.styles.optInTopPaddingStyles:"",a.styles.endJustifyStyles]),children:p})]:null;return e.jsxs(l.Grid,{gap:"top"===x?"0x":"4x",gridTemplateColumns:S,children:[g,N,j,e.jsx("div",{className:a.styles.centerVerticalStyles,children:C}),v,I]})}}));
//# sourceMappingURL=ListItemLayout-e0b2c71e.js.map
