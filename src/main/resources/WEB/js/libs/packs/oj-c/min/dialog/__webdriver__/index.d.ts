import { By } from 'selenium-webdriver';
import { DriverLike } from '@oracle/oraclejet-webdriver';
import { DialogWebElement } from './DialogWebElement';
export { DialogWebElement };
/**
 * Retrieve an instance of [DialogWebElement](../classes/DialogWebElement.html).
 * @example
 * ```javascript
 * import { findDialog } from '@oracle/oraclejet-core-pack/webdriver';
 * const el = await findDialog(driver, By.id('my-oj-c-dialog'));
 * ```
 * @param driver A WebDriver/WebElement instance from where the element will be
 * searched. If WebDriver is passed, the element will be searched globally in the
 * document. If WebElement is passed, the search will be relative to this element.
 * @param by The locator with which to find the element
 */
export declare function findDialog(driver: DriverLike, by: By): Promise<DialogWebElement>;
