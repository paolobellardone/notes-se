define(['exports', 'preact/jsx-runtime', 'preact/hooks', './BaseButton-83ce1d00', './ButtonLabelLayout-204d32ae', './ChevronRight-85ab9b1f', './ChevronUp-dd92fc9c', './ChevronDown-575edbfc', './classNames-08d99695', './UNSAFE_ConveyorBelt/themes/ConveyorBeltStyles.css', './useUser-9b166ca3', './clientHints-030d25aa', './ConveyorBeltContext-d8653090', './useTestId-f3b8b319', 'preact/compat', './useComponentTheme-5aa41a8f', './UNSAFE_ConveyorBelt/themes/redwood/ConveyorBeltTheme', './useConveyorBeltItem-ce9e4c40'], (function(e,t,r,o,n,s,i,l,c,f,u,h,a,d,m,v,g,b){"use strict";function C(){return"phone"===h.getClientHints().deviceType}const p=m.forwardRef((({children:e,scrollPosition:h,onScrollPositionChanged:b,arrowVisibility:p="auto",orientation:x="horizontal",testId:y},W=null)=>{const[T,B]=r.useState(!1),[R,H]=r.useState(!1),L=r.useRef(null),j=r.useRef(null),E=r.useRef(null),I=r.useRef(null),w=r.useRef(null),S=r.useRef(null),N=r.useRef(null),z=r.useRef(null),k=r.useRef(null),[A,V]=r.useState(null),[U,$]=r.useState(C()&&"auto"===p||"hidden"===p),{direction:F}=u.useUser(),{itemElementsRef:D,addItem:P}=((e,t,o,n,s)=>{const i=r.useRef(),l=r.useRef([]),[c]=r.useState([]),f=r.useCallback((e=>{null!==l.current&&(l.current.push(e),c.push(e))}),[c]);r.useEffect((()=>{if(c&&c.length>0&&e){const r="horizontal"===t?"ltr"===s?`0px ${n?-n.offsetWidth:0}px 0px ${o?-o.offsetWidth:0}px`:`0px ${o?-o.offsetWidth:0}px 0px ${n?-n.offsetWidth:0}px`:`${n?-n.offsetHeight:0}px 0px ${o?-o.offsetHeight:0}px 0px`;i.current=new IntersectionObserver(u,{root:e,rootMargin:r,threshold:1});for(const e of c)null!=e&&i.current.observe(e.item)}return()=>{for(const e of c)i.current&&null!=e&&i.current.unobserve(e.item)}}),[c,c.length,e,n,o,s]);const u=e=>{const t=l.current.map(((t,r)=>{const o=e.find((e=>e.target===t.item));return o?{item:o.target,isVisible:o.isIntersecting,isCurrent:t.isCurrent,index:r}:t}));l.current=t};return r.useMemo((()=>({itemElementsRef:l,addItem:f})),[l,f])})(L.current,x,I.current,E.current,F);m.useImperativeHandle(W,(()=>({scrollElementIntoView:e=>{Y(e)},scrollPrevious:()=>{te()},scrollNext:()=>{re()}})));const q=d.useTestId(y),M="leftArrow"+y,O="rightArrow"+y,{variantClasses:_}=v.useComponentTheme(g.ConveyorBeltRedwoodTheme,{orientation:x}),{variantClasses:G}=v.useComponentTheme(g.ConveyorBeltRedwoodTheme,{content:x}),{variantClasses:J}=v.useComponentTheme(g.ConveyorBeltRedwoodTheme,{pagination:T&&R?"both":T?"next":R?"previous":"none",direction:F,orientation:x,overflow:x,arrowVisibility:!0===U?"hidden":"visible"}),{classes:K}=v.useComponentTheme(g.ConveyorBeltRedwoodTheme,{nextButton:x,direction:F}),{classes:Q}=v.useComponentTheme(g.ConveyorBeltRedwoodTheme,{previousButton:x,direction:F});r.useEffect((()=>{(()=>{const e=j.current?Array.from(j.current.querySelectorAll("[data-oj-conveyorbelt-item]")):[];if(e){let t=-1;for(const r of e){t++;const e=r;e&&null==D.current.find((t=>t.item===e))&&P({item:e,isVisible:!1,index:t,isCurrent:!1})}}})()}));const X=r.useCallback((()=>{b&&b(L.current?.scrollLeft)}),[b]);r.useEffect((()=>{$(C()&&"auto"===p||"hidden"===p)}),[p]),r.useEffect((()=>{L.current&&L.current.scrollTo({left:h})}),[h]),r.useEffect((()=>{const e=L.current,t=S.current,r=N.current;return e&&t&&r&&(U||(z.current=new IntersectionObserver((e=>{e.forEach((e=>{"left"===e.target.getAttribute("data-intersection-id")?H(!e.isIntersecting):B(!e.isIntersecting)}))}),{root:e}),z.current.observe(t),z.current.observe(r)),e.addEventListener("scrollend",X)),()=>{e&&(e.removeEventListener("scrollend",X),z.current?.unobserve(t),z.current?.unobserve(r))}}),[U,X]);const Y=r.useCallback((e=>{const t=((e,t,r)=>{if(!t||!r)return!1;let o,n,s,i;if(r===document.documentElement)o=0,n=document.documentElement.clientWidth,s=0,i=document.documentElement.clientHeight;else{const e=r.getBoundingClientRect();o=R?e.left+I.current?.offsetWidth:e.left,n=T?e.right-E.current?.offsetWidth:e.right,s=R?e.top+I.current?.offsetHeight:e.top,i=T?e.bottom-E.current?.offsetHeight:e.bottom}const l=t.getBoundingClientRect();return"horizontal"===e?l.left<=n&&l.right<=n&&l.left>=o&&l.right>=o:l.top<=i&&l.bottom<=i&&l.top>=s&&l.bottom>=s})(x,e,L.current);if(t)return;const r=((e,t,r)=>{if(!t||!r)return!1;const o=t.getBoundingClientRect(),n=r.getBoundingClientRect();return"horizontal"===e?o.width>n.width:o.height>n.height})(x,e,L.current);if(!L.current||!j.current)return;const o=((e,t,r,o)=>{if(!r||!o)return!1;let n,s,i;if(o===document.documentElement)s=0,n=document.documentElement.clientWidth,i=document.documentElement.clientHeight;else{const e=o.getBoundingClientRect();n=T?e.right-E.current?.offsetWidth:e.right,s=T?e.left-E.current?.offsetWidth:e.left,i=T?e.bottom-E.current?.offsetHeight:e.bottom}const l=r.getBoundingClientRect();return"horizontal"===t?e?l.right>n:l.left<s:l.bottom>i})("ltr"===F,x,e,L.current);"vertical"!==x?"ltr"===F?o&&!r?L.current.scrollTo({left:e.offsetLeft+e.offsetWidth-L.current.offsetWidth+(E.current?.offsetWidth?E.current?.offsetWidth+1:0),behavior:"smooth"}):L.current.scrollTo({left:e.offsetLeft-(I.current?.offsetWidth?I.current?.offsetWidth+1:0),behavior:"smooth"}):o&&!r?L.current.scrollTo({left:e.offsetLeft-j.current?.offsetWidth+L.current.offsetWidth-(E.current?.offsetWidth?E.current?.offsetWidth+1:0),behavior:"smooth"}):L.current.scrollTo({left:e.offsetLeft+e.offsetWidth-j.current?.offsetWidth+(I.current?.offsetWidth?I.current?.offsetWidth+1:0),behavior:"smooth"}):o&&!r?L.current.scrollTo({top:e.offsetTop+e.offsetHeight-L.current.offsetHeight+(E.current?.offsetHeight?E.current?.offsetHeight+1:0),behavior:"smooth"}):L.current.scrollTo({top:e.offsetTop-(I.current?.offsetHeight?I.current?.offsetHeight+1:0),behavior:"smooth"})}),[T,R,F]),Z=r.useCallback((()=>{const e=D.current.find((e=>0==e.isVisible&&e.index>=1&&1==D.current[e.index-1].isVisible));return e?.item}),[D]),ee=r.useCallback((()=>{const e=D.current.find((e=>0==e.isVisible&&e.index<D.current.length-1&&1==D.current[e.index+1].isVisible));return e?.item}),[D]),te=r.useCallback((()=>{const e=L.current,t="horizontal"===x?L.current?.clientWidth:L.current?.clientHeight;if(e&&t){const r=ee();if("vertical"===x)return void(r?e.scrollTo({top:r.offsetTop+r.offsetHeight-e.offsetHeight+(I.current?.offsetHeight?I.current?.offsetHeight+1:0),behavior:"smooth"}):e.scrollTo({top:e.scrollTop-t,behavior:"smooth"}));"ltr"===F?r?e.scrollTo({left:r.offsetLeft+r.offsetWidth-e.offsetWidth+(I.current?.offsetWidth?I.current?.offsetWidth+1:0),behavior:"smooth"}):e.scrollTo({left:e.scrollLeft-t,behavior:"smooth"}):r?e.scrollTo({left:r.offsetLeft-j.current?.offsetWidth+e.offsetWidth-(I.current?.offsetWidth?I.current?.offsetWidth+1:0),behavior:"smooth"}):e.scrollTo({left:e.scrollLeft+t,behavior:"smooth"})}}),[F,x,ee]),re=r.useCallback((()=>{const e=L.current,t="horizontal"===x?L.current?.clientWidth:L.current?.clientHeight;if(e&&t){const r=Z();if("vertical"===x)return void(r?e.scrollTo({top:(r?.offsetTop??0)-(E.current?.offsetHeight?E.current?.offsetHeight+1:0),behavior:"smooth"}):e.scrollTo({top:e.scrollTop+t,behavior:"smooth"}));"ltr"===F?r?e.scrollTo({left:(r?.offsetLeft??0)-(E.current?.offsetWidth?E.current?.offsetWidth+1:0),behavior:"smooth"}):e.scrollTo({left:e.scrollLeft+t,behavior:"smooth"}):r?e.scrollTo({left:-(j.current?.offsetWidth-(r?.offsetLeft??0))+(r?.offsetWidth??0)+(E.current?.offsetWidth?E.current?.offsetWidth+1:0),behavior:"smooth"}):e.scrollTo({left:e.scrollLeft-t,behavior:"smooth"})}}),[F,x,Z]),oe=r.useCallback((e=>{if(k.current!==e){const t=D.current.find((t=>t.item===e)),r=D.current.find((e=>!0===e.isCurrent));if(t===r||!t)return;r&&(r.isCurrent=!1),t.isCurrent=!0,k.current=e,V(e)}}),[D]);r.useEffect((()=>{A&&k.current&&Y(k.current)}),[A]);const ne=r.useCallback((e=>{w.current?.isEqualNode(e.target)||Y(e.target)}),[Y]),se=c.classNames([f.styles.buttonContainer,Q]),ie=c.classNames([f.styles.buttonContainer,K]);return t.jsx(a.ConveyorBeltContext.Provider,{value:{setCurrentItem:oe},children:t.jsxs("div",{onFocus:ne,ref:w,className:c.classNames([f.styles.conveyorStyle,_]),...q,children:[R&&!U&&t.jsx("div",{ref:I,class:se,children:t.jsx(o.BaseButton,{elementDetails:{type:"span",isFocusable:!1},styling:["min"],size:"sm",variant:"ghost",onAction:()=>te(),"aria-hidden":!0,testId:M,children:t.jsx(n.ButtonLabelLayout,{size:"sm",display:"icons",startIcon:"horizontal"===x?"ltr"===F?t.jsx(s.SvgChevronLeft,{}):t.jsx(s.SvgChevronRight,{}):t.jsx(i.SvgChevronUp,{})})})}),t.jsx("div",{className:c.classNames([f.styles.overflowContainer,J]),ref:L,children:t.jsxs("div",{className:c.classNames([f.styles.contentContainer,_,G]),ref:j,children:[t.jsx("div",{"data-intersection-id":"left",ref:S,style:{minWidth:1,minHeight:1}}),e,t.jsx("div",{"data-intersection-id":"right",ref:N,style:{minWidth:1,minHeight:1}})]})}),T&&!U&&t.jsx("div",{ref:E,class:ie,children:t.jsx(o.BaseButton,{elementDetails:{type:"span",isFocusable:!1},styling:["min"],size:"sm",variant:"ghost",onAction:()=>re(),"aria-hidden":!0,testId:O,children:t.jsx(n.ButtonLabelLayout,{size:"sm",display:"icons",startIcon:"horizontal"===x?"ltr"===F?t.jsx(s.SvgChevronRight,{}):t.jsx(s.SvgChevronLeft,{}):t.jsx(l.SvgChevronDown,{})})})})]})})}));e.ConveyorBelt=p,e.ConveyorBeltItem=({children:e,isCurrent:r})=>{const o=b.useConveyorBeltItem({isCurrent:r});return t.jsx("div",{className:c.classNames([f.styles.conveyorBeltItemStyle]),...o,children:e})}}));
//# sourceMappingURL=ConveyorBeltItem-d398eaa6.js.map