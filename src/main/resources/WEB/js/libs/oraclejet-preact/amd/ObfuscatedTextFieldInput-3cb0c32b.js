define(['exports', 'preact/jsx-runtime', './useEffectEvent-8467275b', './keyboardUtils-fbb389f8', './refUtils-d354a169', 'preact/compat', './TextFieldInput-ba4e508c', './UNSAFE_TextField/themes/ObfuscatedTextFieldInputStyles.css'], (function(e,t,n,s,r,o,c,i){"use strict";class l{constructor({maxHistory:e=100}){this.currentIndex=0,this.maxHistory=e,this.states=[]}get currentState(){return this.states[this.currentIndex]}get isEmpty(){return 0===this.states.length}get hasUndo(){return!this.isEmpty&&this.currentIndex>0}get hasRedo(){return!this.isEmpty&&this.currentIndex<this.states.length-1}push(e){this.currentIndex<this.states.length-1&&(this.states.length=this.currentIndex+1),this.states.push(e),this.states.length>this.maxHistory&&this.states.shift(),this.currentIndex=this.states.length-1}go(e){return this.currentIndex=Math.min(Math.max(this.currentIndex+e,0),this.states.length-1),this.currentState}undo(){return this.go(-1)}redo(){return this.go(1)}clear(){this.states.length=0,this.currentIndex=0}}const a=(e,t,n)=>({content:e.slice(0,t)+e.slice(n),selectionStart:t,selectionEnd:t}),u=(e,t,n)=>n>t?a(e,t,n):0===t?{content:e,selectionStart:t,selectionEnd:n}:{content:e.slice(n),selectionStart:0,selectionEnd:0},d=(e,t,n)=>n>t?a(e,t,n):t===e.length?{content:e,selectionStart:t,selectionEnd:n}:{content:e.slice(0,t),selectionStart:t,selectionEnd:n},h={deleteContentBackward:(e,t,n)=>n>t?a(e,t,n):0===t?{content:e,selectionStart:t,selectionEnd:n}:{content:e.slice(0,t-1)+e.slice(n),selectionStart:t-1,selectionEnd:t-1},deleteContentForward:(e,t,n)=>n>t?a(e,t,n):t===e.length?{content:e,selectionStart:t,selectionEnd:n}:{content:e.slice(0,t)+e.slice(n+1),selectionStart:t,selectionEnd:n},deleteWordBackward:(e,t,n)=>u(e,t,n),deleteWordForward:(e,t,n)=>d(e,t,n),deleteSoftLineBackward:(e,t,n)=>u(e,t,n),deleteSoftLineForward:(e,t,n)=>d(e,t,n),deleteHardLineBackward:(e,t,n)=>u(e,t,n),deleteHardLineForward:(e,t,n)=>d(e,t,n),deleteContent:(e,t,n)=>n>t?a(e,t,n):{content:e,selectionStart:t,selectionEnd:n}},f=["insertText","insertFromPaste"],p=(e,t)=>e===t||!(!e||!t)&&(e.value===t.value&&e.selection.start===t.selection.start&&e.selection.end===t.selection.end);e.ObfuscatedTextFieldInput=({character:e="•",currentCommitValue:a,inputRef:u,isRevealed:d=!1,onCommit:g,onInput:v,type:E="text",value:m,...S})=>{const x=o.useRef({selectionStart:m?.length??0,selectionEnd:m?.length??0}),y=o.useRef(null),C=o.useMemo((()=>r.mergeRefs(u,y)),[u,y]),b=function({state:e,comparator:t,isDisabled:n,maxHistory:s}){const r=o.useRef(s),c=o.useMemo((()=>new l({maxHistory:r.current})),[]),i=o.useRef(!1),a=o.useRef();return t(a.current,e)||n||i.current||(a.current=e,c.push(e)),n&&c.clear(),o.useEffect((()=>()=>c.clear()),[c]),o.useMemo((()=>({get hasRedo(){return c.hasRedo},get hasUndo(){return c.hasUndo},redo:()=>c.redo(),undo:()=>c.undo(),ignore(e=!0){i.current=!!e}})),[c])}({comparator:p,isDisabled:d,state:o.useMemo((()=>({value:m??"",selection:{start:x.current.selectionStart,end:x.current.selectionEnd}})),[m])}),I=o.useRef(),R=n.useEffectEvent((e=>{if(y.current!==document.activeElement)return;const{selectionStart:t,selectionEnd:n}=x.current;y.current?.setSelectionRange(t,n)}));o.useLayoutEffect((()=>{R(m)}),[R,m]);const k=o.useCallback((e=>{if(d)return;const t=e.target,{selectionStart:n,selectionEnd:s}=t,r=m??"",o=e.inputType;if(b.ignore(!1),I.current=void 0,c=o,f.includes(c)&&e.data){const t=r.slice(0,n??r.length)+e.data+r.slice(s??r.length),o=(n??r.length)+e.data.length;return x.current={selectionStart:o,selectionEnd:o},void(I.current={previousValue:r,value:t})}var c;if((e=>Object.keys(h).includes(e))(o)){const e=h[o],{content:t,selectionStart:c,selectionEnd:i}=e(r,n??r.length,s??r.length);return x.current={selectionStart:c,selectionEnd:i},void(r!==t&&(I.current={previousValue:r,value:t}))}if(["historyUndo","historyRedo"].includes(e.inputType)){const t="historyUndo"===e.inputType;if(t&&!b.hasUndo||!t&&!b.hasRedo)return;b.ignore();const{value:n,selection:s}=t?b.undo():b.redo();return x.current={selectionStart:s.start,selectionEnd:s.end},void(I.current={previousValue:r,value:n})}e.preventDefault()}),[b,d,m]),F=o.useCallback((()=>{d||I.current&&v?.(I.current)}),[d,v]),U=o.useCallback((()=>{d||y.current?.select()}),[d]),w=o.useCallback((e=>{d||e.preventDefault()}),[d]),T=o.useCallback((e=>{d&&(x.current={selectionStart:y.current?.selectionStart??e.value?.length??0,selectionEnd:y.current?.selectionEnd??e.value?.length??0},v?.(e))}),[d,v]),D=o.useCallback((()=>{a!==m&&g?.({previousValue:a,value:m})}),[a,m,g]),H=o.useCallback((e=>{if(d)return;const t=s.isUndoEvent(e),n=s.isRedoEvent(e);if(t||n){if(t&&!b.hasUndo||n&&!b.hasRedo)return;e.preventDefault(),b.ignore();const{value:s,selection:r}=t?b.undo():b.redo();return x.current={selectionStart:r.start,selectionEnd:r.end},void v?.({previousValue:m,value:s})}}),[b,d,v,m]);return t.jsx("div",{class:i.containerStyles,onBeforeInput:k,onInput:F,onCut:w,onCopy:w,onDblClick:U,onContextMenu:U,children:t.jsx(c.TextFieldInput,{...S,as:"input",autoComplete:"off",currentCommitValue:a,type:E,spellcheck:!1,inputRef:C,onInput:T,onCommit:D,onKeyDown:H,value:d?m:e.repeat(m?.length??0)})})}}));
//# sourceMappingURL=ObfuscatedTextFieldInput-3cb0c32b.js.map
