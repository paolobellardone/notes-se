import { OjWebElement } from '@oracle/oraclejet-webdriver/elements';
/**
 * This is the base class for oj-c-selector WebElement, and is generated from the
 * component's metadata. Do not modify these contents since they'll be replaced
 * during the next generation.
 * Put overrides into the WebElements's subclass, SelectorWebElement.ts.
 */
export declare class SelectorWebElementBase extends OjWebElement {
    /**
     * Gets the value of <code>rowKey</code> property.
     * Specifies the row key of each selector.
     * @return The value of <code>rowKey</code> property.
     *
     */
    getRowKey(): Promise<any>;
    /**
     * Sets the value of <code>selectedKeys</code> property.
     * Specifies the selectedKeys, should be hooked into the collection component.
     * @param selectedKeys The value to set for <code>selectedKeys</code>
     *
     */
    changeSelectedKeys(selectedKeys: object): Promise<void>;
    /**
     * Gets the value of <code>selectedKeys</code> property.
     * Specifies the selectedKeys, should be hooked into the collection component.
     * @return The value of <code>selectedKeys</code> property.
     *
     */
    getSelectedKeys(): Promise<object>;
    /**
     * Gets the value of <code>indeterminate</code> property.
     * Visual only state to indicate partial selection
     * @return The value of <code>indeterminate</code> property.
     *
     */
    getIndeterminate(): Promise<boolean>;
    /**
     * Gets the value of <code>selectionMode</code> property.
     * Specifies the selection mode.
     * @return The value of <code>selectionMode</code> property.
     *
     */
    getSelectionMode(): Promise<string>;
}
