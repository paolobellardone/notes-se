import { OjWebElement } from '@oracle/oraclejet-webdriver/elements';
/**
 * This is the base class for oj-c-buttonset-single WebElement, and is generated from the
 * component's metadata. Do not modify these contents since they'll be replaced
 * during the next generation.
 * Put overrides into the WebElements's subclass, ButtonsetSingleWebElement.ts.
 */
export declare class ButtonsetSingleWebElementBase extends OjWebElement {
    /**
     * Sets the value of <code>value</code> property.
     * Specifies which toggle button is selected
     * @param value The value to set for <code>value</code>
     *
     */
    changeValue(value: string): Promise<void>;
    /**
     * Gets the value of <code>value</code> property.
     * Specifies which toggle button is selected
     * @return The value of <code>value</code> property.
     *
     */
    getValue(): Promise<string>;
    /**
     * Gets the value of <code>items</code> property.
     * Specifies the toggle buttons rendered by the buttonset.
     * @return The value of <code>items</code> property.
     *
     */
    getItems(): Promise<Array<Items>>;
    /**
     * Gets the value of <code>display</code> property.
     * Display just the label, the icons, or all.
     * @return The value of <code>display</code> property.
     *
     */
    getDisplay(): Promise<string>;
    /**
     * Gets the value of <code>disabled</code> property.
     * Specifies that the buttonset should be disabled.
     * @return The value of <code>disabled</code> property.
     *
     */
    getDisabled(): Promise<boolean>;
    /**
     * Gets the value of <code>size</code> property.
     * Specifies the size of the toggle buttons
     * @return The value of <code>size</code> property.
     *
     */
    getSizeProperty(): Promise<string>;
    /**
     * Gets the value of <code>width</code> property.
     * Specifies the buttonset width
     * @return The value of <code>width</code> property.
     *
     */
    getWidth(): Promise<number | string>;
    /**
     * Gets the value of <code>maxWidth</code> property.
     * Specifies the buttonset max width
     * @return The value of <code>maxWidth</code> property.
     *
     */
    getMaxWidth(): Promise<number | string>;
    /**
     * Gets the value of <code>chroming</code> property.
     * Indicates in what states the button has chromings in background and border.
     * @return The value of <code>chroming</code> property.
     *
     */
    getChroming(): Promise<string>;
    /**
     * Gets the value of <code>layoutWidth</code> property.
     * Specifies if button width should be equal or based on contents.
     * @return The value of <code>layoutWidth</code> property.
     *
     */
    getLayoutWidth(): Promise<string>;
}
export interface Items {
    /**
     *
     */
    label: string;
    /**
     *
     */
    value: string;
    /**
     *
     */
    disabled: boolean;
    /**
     *
     */
    startIcon: object;
    /**
     *
     */
    endIcon: object;
}
