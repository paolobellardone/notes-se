import { ValidationResult } from 'oj-c/editable-value/UNSAFE_useValidators/useValidators';
import { ItemContext } from 'ojs/ojcommontypes';
import { DataProvider } from 'ojs/ojdataprovider';
import { Dispatch, StateUpdater } from 'preact/hooks';
type Optional<T> = T | null | undefined;
type Value<K> = Optional<Set<K>>;
type ValueItems<K, D> = Optional<Map<K, ItemContext<K, D>>>;
export type UseSyncValueAndValueItemsProps<K, D> = {
    addBusyState: (desc?: string) => () => void;
    dataProvider?: Optional<DataProvider<K, D>>;
    setDisplayValue: Dispatch<StateUpdater<Value<K>>>;
    setIsLoading: Dispatch<StateUpdater<boolean>>;
    setValue: Dispatch<StateUpdater<Value<K>>>;
    setValueItems: (value: ValueItems<K, D>) => void;
    value?: Value<K>;
    valueItems?: ValueItems<K, D>;
    validateValueOnExternalChange: (value: Value<K>) => ValidationResult;
};
export declare function useSyncValueAndValueItems<K extends string | number, D extends Record<string, any>>({ addBusyState, dataProvider, setDisplayValue, setIsLoading, setValue, setValueItems, value, valueItems, validateValueOnExternalChange }: UseSyncValueAndValueItemsProps<K, D>): void;
export {};