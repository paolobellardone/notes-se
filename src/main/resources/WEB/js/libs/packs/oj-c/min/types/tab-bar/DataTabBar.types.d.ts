import type { ComponentProps } from 'preact';
import { TabBar } from '@oracle/oraclejet-preact/UNSAFE_TabBar';
import { ReorderableTabBar } from '@oracle/oraclejet-preact/UNSAFE_ReorderableTabBar';
import type { TabIconData } from './DataTabBarIcon';
type TabBarProps = ComponentProps<typeof TabBar>;
type ReorderableTabBarProps = ComponentProps<typeof ReorderableTabBar>;
type Severity = 'warning' | 'info' | 'none' | 'error' | 'confirmation';
export type TabData<K extends string | number> = {
    itemKey: K;
    label: string;
    icon?: TabIconData;
    badge?: number;
    metadata?: string;
    severity?: Severity;
    tabPanelId?: string;
    isRemovable?: boolean;
};
export type DataTabBarProps<K extends string | number> = {
    data: TabData<K>[];
    onRemove: TabBarProps['onRemove'];
    onSelect: TabBarProps['onSelect'];
    selection: TabBarProps['selection'];
    display: TabBarProps['display'];
    layout: TabBarProps['layout'];
    edge: TabBarProps['edge'];
    overflow?: 'conveyor' | 'popup' | 'hidden';
    onReorder?: ReorderableTabBarProps['onReorder'];
    reorderable?: 'enabled' | 'disabled';
    'aria-label'?: TabBarProps['aria-label'];
    'aria-labelledby'?: TabBarProps['aria-labelledby'];
};
export {};
