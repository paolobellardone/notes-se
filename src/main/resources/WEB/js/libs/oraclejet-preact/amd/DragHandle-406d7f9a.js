define(['exports', 'preact/jsx-runtime', './classNames-08d99695', './mergeProps-bcfa6a92', './useActive-bb5dc069', './useTestId-b5cd4766', './DragV-a31b64bd', './UNSAFE_DragHandle/themes/DragHandleStyles.css'], (function(e,s,t,a,r,c,i,n){"use strict";e.DragHandle=function({testId:e}){const{isActive:d,activeProps:l}=r.useActive(),o=c.useTestId(e),g=t.classNames([n.iconStyle,d?n.activeStyle:n.hoverStyle]);return s.jsx("div",{...a.mergeProps(l,o),draggable:!0,class:g,role:"presentation",children:s.jsx(i.SvgDragV,{})})}}));
//# sourceMappingURL=DragHandle-406d7f9a.js.map
