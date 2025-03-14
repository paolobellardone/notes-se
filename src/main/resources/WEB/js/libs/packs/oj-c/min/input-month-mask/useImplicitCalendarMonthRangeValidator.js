define(["require", "exports", "preact/hooks", "./CalendarMonthRangeValidator", "@oracle/oraclejet-preact/hooks/UNSAFE_useTranslationBundle"], function (require, exports, hooks_1, CalendarMonthRangeValidator_1, UNSAFE_useTranslationBundle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useImplicitCalendarMonthRangeValidator = useImplicitCalendarMonthRangeValidator;
    function useImplicitCalendarMonthRangeValidator({ formatObj, dateRangeOverflowMessageDetail, dateRangeUnderflowMessageDetail, max, min }) {
        const translations = (0, UNSAFE_useTranslationBundle_1.useTranslationBundle)('@oracle/oraclejet-preact');
        const defaultRangeOverflowMessageDetailFn = translations.inputMonthMask_dateRangeOverflowMessageDetail;
        const defaultRangeUnderflowMessageDetailFn = translations.inputMonthMask_dateRangeUnderflowMessageDetail;
        const calendarMonthRangeValidator = (0, hooks_1.useMemo)(() => {
            if (min !== undefined || max !== undefined) {
                return new CalendarMonthRangeValidator_1.CalendarMonthRangeValidator({
                    defaultRangeOverflowMessageDetailFn,
                    defaultRangeUnderflowMessageDetailFn,
                    formatObj,
                    max,
                    min,
                    dateRangeOverflowMessageDetail,
                    dateRangeUnderflowMessageDetail
                });
            }
            return null;
        }, [
            formatObj,
            dateRangeOverflowMessageDetail,
            dateRangeUnderflowMessageDetail,
            defaultRangeOverflowMessageDetailFn,
            defaultRangeUnderflowMessageDetailFn,
            min,
            max
        ]);
        return calendarMonthRangeValidator;
    }
});
