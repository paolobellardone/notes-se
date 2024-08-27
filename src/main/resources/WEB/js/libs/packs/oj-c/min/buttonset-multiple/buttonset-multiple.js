var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "preact/jsx-runtime", '@oracle/oraclejet-preact/translationBundle', "ojs/ojvcomponent-binding", "ojs/ojvcomponent", "@oracle/oraclejet-preact/UNSAFE_ButtonSetMultiple", "@oracle/oraclejet-preact/hooks/UNSAFE_useTabbableMode", "oj-c/utils/PRIVATE_toggleUtils/index", "@oracle/oraclejet-preact/UNSAFE_ButtonSetItem", "preact", "preact/hooks", "preact/compat", "css!oj-c/buttonset-multiple/buttonset-multiple-styles.css"], function (require, exports, jsx_runtime_1, translationBundle_1, ojvcomponent_binding_1, ojvcomponent_1, UNSAFE_ButtonSetMultiple_1, UNSAFE_useTabbableMode_1, index_1, UNSAFE_ButtonSetItem_1, preact_1, hooks_1, compat_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ButtonsetMultiple = void 0;
    let ButtonsetMultiple = class ButtonsetMultiple extends preact_1.Component {
        constructor() {
            super(...arguments);
            this.buttonRef = (0, preact_1.createRef)();
        }
        render({ chroming, disabled, value, onValueChanged, size, width, maxWidth, layoutWidth, items, display, 'aria-label': accessibleLabel, 'aria-describedby': ariaDescribedBy }) {
            const widthProps = (0, index_1.widthStyle)(layoutWidth, width, maxWidth);
            return ((0, jsx_runtime_1.jsx)(ojvcomponent_1.Root, { ...widthProps, children: (0, jsx_runtime_1.jsx)(FunctionalButtonSetMultiple, { value: value, onCommit: (detail) => {
                        onValueChanged?.(detail.value);
                    }, ref: this.buttonRef, display: display, layoutWidth: layoutWidth, variant: chroming, size: size, width: widthProps.style ? (widthProps.style.width ? '100%' : undefined) : undefined, "aria-label": accessibleLabel, "aria-describedby": ariaDescribedBy, isDisabled: disabled, children: items?.map((item) => {
                        return ((0, jsx_runtime_1.jsx)(UNSAFE_ButtonSetItem_1.ButtonSetItem, { label: item.label, value: item.value, isDisabled: item.disabled, startIcon: item.startIcon && (0, jsx_runtime_1.jsx)(index_1.ToggleItemIcon, { icon: item.startIcon }), endIcon: item.endIcon && (0, jsx_runtime_1.jsx)(index_1.ToggleItemIcon, { icon: item.endIcon }) }));
                    }) }) }));
        }
        blur() {
            this.buttonRef.current?.blur();
        }
        focus() {
            this.buttonRef.current?.focus();
        }
    };
    exports.ButtonsetMultiple = ButtonsetMultiple;
    ButtonsetMultiple.defaultProps = {
        chroming: 'outlined',
        disabled: false,
        size: 'md',
        display: 'all',
        items: []
    };
    ButtonsetMultiple._metadata = { "properties": { "value": { "type": "Array<string>", "writeback": true }, "items": { "type": "Array<object>" }, "display": { "type": "string", "enumValues": ["all", "label", "icons"] }, "disabled": { "type": "boolean" }, "size": { "type": "string", "enumValues": ["sm", "md", "lg"] }, "width": { "type": "number|string" }, "maxWidth": { "type": "number|string" }, "chroming": { "type": "string", "enumValues": ["borderless", "outlined"], "binding": { "consume": { "name": "containerChroming" } } }, "layoutWidth": { "type": "string", "enumValues": ["auto", "equal"] } }, "extension": { "_WRITEBACK_PROPS": ["value"], "_READ_ONLY_PROPS": [], "_OBSERVED_GLOBAL_PROPS": ["aria-describedby", "aria-label"] }, "methods": { "blur": {}, "focus": {} } };
    ButtonsetMultiple._translationBundleMap = {
        '@oracle/oraclejet-preact': translationBundle_1.default
    };
    ButtonsetMultiple._consumedContexts = [UNSAFE_useTabbableMode_1.TabbableModeContext];
    exports.ButtonsetMultiple = ButtonsetMultiple = __decorate([
        (0, ojvcomponent_1.customElement)('oj-c-buttonset-multiple')
    ], ButtonsetMultiple);
    const FunctionalButtonSetMultiple = (0, compat_1.forwardRef)((props, ref) => {
        const buttonRef = (0, hooks_1.useRef)();
        (0, hooks_1.useImperativeHandle)(ref, () => ({
            focus: () => buttonRef.current?.focus(),
            blur: () => buttonRef.current?.blur()
        }), []);
        return (0, jsx_runtime_1.jsx)(UNSAFE_ButtonSetMultiple_1.ButtonSetMultiple, { ref: buttonRef, ...props });
    });
});