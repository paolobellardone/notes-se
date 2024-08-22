import { OjWebElement } from '@oracle/oraclejet-webdriver/elements';
/**
 * This is the base class for oj-c-tab-bar WebElement, and is generated from the
 * component's metadata. Do not modify these contents since they'll be replaced
 * during the next generation.
 * Put overrides into the WebElements's subclass, TabBarWebElement.ts.
 */
export declare class TabBarWebElementBase extends OjWebElement {
    /**
     * Gets the value of <code>data</code> property.
     * An array of tabs
     * @return The value of <code>data</code> property.
     *
     */
    getData(): Promise<Array<object>>;
    /**
     * Sets the value of <code>selection</code> property.
     * The key of the selected tab
     * @param selection The value to set for <code>selection</code>
     *
     */
    changeSelection(selection: any): Promise<void>;
    /**
     * Gets the value of <code>selection</code> property.
     * The key of the selected tab
     * @return The value of <code>selection</code> property.
     *
     */
    getSelection(): Promise<any>;
    /**
     * Gets the value of <code>reorderable</code> property.
     * The reorderable configuration for tabs.
     * @return The value of <code>reorderable</code> property.
     *
     */
    getReorderable(): Promise<string>;
    /**
     * Gets the value of <code>overflow</code> property.
     * Specifies the overflow behavior.
     * @return The value of <code>overflow</code> property.
     *
     */
    getOverflow(): Promise<string>;
    /**
     * Gets the value of <code>display</code> property.
     * The display configuration for tabs.
     * @return The value of <code>display</code> property.
     *
     */
    getDisplay(): Promise<string>;
    /**
     * Gets the value of <code>layout</code> property.
     * The layout configuration for tabs.
     * @return The value of <code>layout</code> property.
     *
     */
    getLayout(): Promise<string>;
    /**
     * Gets the value of <code>edge</code> property.
     * The edge configuration for tabs.
     * @return The value of <code>edge</code> property.
     *
     */
    getEdge(): Promise<string>;
}
