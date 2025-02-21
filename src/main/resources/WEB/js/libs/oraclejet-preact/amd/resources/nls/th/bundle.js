define(['exports'], (function(e){"use strict";const t={accAnnounceMovedKey:e=>"ย้าย "+e.itemKey+" "+e.position+" "+e.referenceKey+" แล้ว",accButtonProgressComplete:e=>"การดำเนินการ "+e.label+" เสร็จสมบูรณ์แล้ว",accButtonProgressStatus:e=>"การดำเนินการ "+e.label+" อยู่ระหว่างดำเนินการ",accCommandKey:()=>"คำสั่ง",accControlKey:()=>"ปิด",accPositionAfter:()=>"หลัง",accPositionBefore:()=>"ก่อน",accReorderInstructions:e=>"กด "+e.keyPressed+" และปุ่ม Shift ค้างไว้ แล้วใช้ปุ่มลูกศรเพื่อจัดลำดับใหม่",calendarDateConverter_parseError:e=>"ป้อนวันที่ที่ครบถ้วนในรูปแบบดังนี้: "+e.dateExample,calendarMonthConverter_parseError:e=>"ป้อนเดือนและปีในรูปแบบดังนี้: "+e.dateExample,chart_labelGroup:()=>"กลุ่ม",chart_labelSeries:()=>"ชุด",chart_labelValue:()=>"ค่า",chart_labelX:()=>"X",chart_labelY:()=>"Y",checkboxSet_requiredMessageDetail:()=>"จำเป็น",checkbox_requiredMessageDetail:()=>"จำเป็น",close:()=>"ปิด",collection_loading:()=>"กำลังโหลด",collection_noData:()=>"ไม่มีข้อมูลที่จะแสดงผล",collection_selectAllRows:()=>"เลือกแถวทั้งหมด",collection_selectRow:e=>"เลือกแถว "+e.ROW_NAME,collection_sortDisabled:()=>"จัดเรียงไม่ได้",collection_sortEnabled:()=>"จัดเรียงได้",confirmation:()=>"การยืนยัน",datePicker_currentDate:()=>"วันที่ปัจจุบัน",datePicker_goToToday:()=>"ไปที่วันนี้",datePicker_label:()=>"ตัวเลือกวันที่",datePicker_month:()=>"เดือน",datePicker_months:()=>"เดือน",datePicker_next:()=>"ถัดไป",datePicker_nextDecade:()=>"ทศวรรษถัดไป",datePicker_nextMonth:()=>"เดือนถัดไป",datePicker_prev:()=>"ก่อนหน้า",datePicker_prevDecade:()=>"ทศวรรษก่อนหน้า",datePicker_prevMonth:()=>"เดือนก่อนหน้า",datePicker_restricted:()=>"จำกัด",datePicker_selected:()=>"เลือกไว้",datePicker_today:()=>"วันนี้",datePicker_weekNum:e=>"สัปดาห์ "+e.NUM,datePicker_weekNumColLabel:()=>"เลขที่สัปดาห์",datePicker_year:()=>"ปี",datePicker_years:()=>"ปี",error:()=>"ข้อผิดพลาด",expandableList_expandCollapseInstructionText:()=>"ใช้ปุ่มลูกศรเพื่อขยายและยุบ",expandableList_groupCollapse:()=>"ยุบแล้ว",expandableList_groupExpand:()=>"ขยายแล้ว",filePicker_addFiles:()=>"เพิ่มไฟล์",filePicker_dropzonePrimaryText:()=>"ลากและวาง",filePicker_dropzoneSecondaryText:()=>"เลือกไฟล์หรือวางไว้ที่นี่",filePicker_dropzoneSecondaryTextMultiple:()=>"เลือกหรือวางไฟล์ไว้ที่นี่",filePicker_multipleFileTypeUploadError:e=>"คุณไม่สามารถอัปโหลดไฟล์ประเภท: "+e.fileTypes+" ได้",filePicker_singleFileUploadError:()=>"อัปโหลดครั้งละไฟล์",filePicker_singleTypeUploadError:e=>"คุณไม่สามารถอัปโหลดไฟล์ประเภท "+e.fileType+" ได้",filePicker_unknownFileTypeUploadError:()=>"ไม่รู้จัก",formControl_clear:()=>"ล้างข้อมูล",formControl_day:()=>"วัน",formControl_empty_segment:()=>"ว่างเปล่า",formControl_helpAvailable:()=>"มีวิธีใช้",formControl_hide:()=>"ซ่อน",formControl_hour:()=>"ชั่วโมง",formControl_limitReached:e=>"คุณมีอักขระถึงขีดจำกัด "+({one:new Intl.NumberFormat("th").format(e.CHARACTER_LIMIT)+"-อักขระ"}[new Intl.PluralRules("th").select(e.CHARACTER_LIMIT)]||new Intl.NumberFormat("th").format(e.CHARACTER_LIMIT)+"-อักขระ"),formControl_loading:()=>"กำลังโหลด",formControl_maxLength:e=>"คุณสามารถป้อนอักขระได้สูงสุด "+e.MAX_LENGTH+" ตัว",formControl_maxLengthRemaining:e=>"เหลืออักขระ "+e.CHARACTER_COUNT+" ตัว",formControl_millisecond:()=>"มิลลิวินาที",formControl_minute:()=>"นาที",formControl_month:()=>"เดือน",formControl_readOnly:()=>"อ่านอย่างเดียว",formControl_requiredMessageDetail:()=>"ป้อนค่า",formControl_second:()=>"วินาที",formControl_show:()=>"แสดง",formControl_year:()=>"ปี",gantt_labelDate:()=>"วันที่",gantt_labelEnd:()=>"สิ้นสุด",gantt_labelLabel:()=>"ป้ายกำกับ",gantt_labelRow:()=>"แถว",gantt_labelStart:()=>"เริ่มต้น",indexer_disabledLabel:e=>e.SECTION+" ไม่พบส่วนที่ตรงกัน",indexer_keyboardInstructionText:()=>"กด Enter เพื่อเลือกค่า",indexer_othersLabel:()=>"#",indexer_separatorLabel:e=>"ระหว่าง "+e.FROM_SECTION+" ถึง "+e.TO_SECTION,indexer_touchInstructionText:()=>"แตะสองครั้งและกดค้างไว้เพื่อเข้าสู่โหมดการวาดนิ้ว จากนั้นลากขึ้นหรือลงเพื่อปรับค่า",info:()=>"ข้อมูล",inputDateMask_date_cleared:()=>"ล้างวันที่แล้ว",inputDateMask_dayPlaceholder:()=>"dd",inputDateMask_empty_segment:()=>"ว่างเปล่า",inputDateMask_monthPlaceholder:()=>"mm",inputDateMask_yearPlaceholder:()=>"yyyy",inputDatePicker_dateRangeOverflowMessageDetail:e=>"ป้อนวันที่ที่ตรงกับหรือก่อน "+e.max,inputDatePicker_dateRangeUnderflowMessageDetail:e=>"ป้อนวันที่ที่ตรงกับหรือหลัง "+e.min,inputDatePicker_dateRestrictionMessageDetail:()=>"ป้อนวันที่ที่ใช้ได้",inputDatePicker_instruction:()=>"กด Tab เพื่อเข้าใช้ปฏิทิน",inputDatePicker_selectDate:()=>"เลือกวันที่",inputMonthMask_dateRangeOverflowMessageDetail:e=>"ป้อนเดือนและปีที่อยู่ภายในหรือก่อน "+e.max,inputMonthMask_dateRangeUnderflowMessageDetail:e=>"ป้อนเดือนและปีที่อยู่ภายในหรือหลัง "+e.min,inputNumber_converterParseError:()=>"ป้อนตัวเลข",inputNumber_decrease:()=>"ลด",inputNumber_increase:()=>"เพิ่ม",inputPassword_hidden:()=>"ซ่อนรหัสผ่านแล้ว",inputPassword_hide:()=>"ซ่อนรหัสผ่าน",inputPassword_show:()=>"แสดงรหัสผ่าน",inputSensitiveText_hidden:()=>"ซ่อนข้อความสำคัญแล้ว",inputTimeMask_time_cleared:()=>"เวลาที่ล้างข้อมูล",list_msgFetchCompleted:()=>"โหลดแล้ว",list_msgFetchingData:()=>"กำลังโหลด",list_suggestion:()=>"ข้อแนะนำ",messageToast_allMessagesClosed:()=>"ข้อความป็อปอัพทั้งหมดจะถูกปิด",message_close:()=>"ปิด",message_confirmation:()=>"สำเร็จ",message_error:()=>"ข้อผิดพลาด",message_info:()=>"ข้อมูล",message_navigationFromMessagesRegion:()=>"กำลังเข้าสู่พื้นที่ข้อความ กด F6 เพื่อนาวิเกตกลับไปยังอีลิเมนต์ที่โฟกัสก่อนหน้า",message_navigationToMessagesRegion:()=>"พื้นที่ข้อความมีข้อความใหม่ กด F6 เพื่อนาวิเกตไปยังพื้นที่ข้อความล่าสุด",message_warning:()=>"คำเตือน",noData_message:()=>"ไม่มีรายการที่จะแสดงผล",overflowItemLabel:()=>"แท็บเพิ่มเติม",plural_separator:()=>", ",progressIndeterminate:()=>"กำลังดำเนินการ",radio_helpForRadio:()=>"วิธีใช้ปุ่มตัวเลือก",radio_requiredMessageDetail:()=>"เลือกค่า",selectMultiple_apply:()=>"ใช้",selectMultiple_back:()=>"ย้อนกลับ",selectMultiple_countPlus:e=>e.COUNT+"+",selectMultiple_highlightSelectedTagsInstructionText:()=>"ใช้ปุ่มลูกศรซ้ายและขวาเพื่อไฮไลต์ค่าที่เลือก",selectMultiple_removeSelectedTagInstructionText:()=>"กด Backspace หรือ Delete เพื่อย้ายค่าที่เลือกออก",selectMultiple_selectedValues:()=>"ค่าที่เลือกไว้",selectMultiple_showSelectedValues:()=>"แสดงเฉพาะค่าที่เลือกเท่านั้น",selectMultiple_valuesSelected:e=>"เลือกค่า "+e.VALUE_COUNT+" ค่าแล้ว",select_addToList:()=>"เพิ่มลงในลิสต์",select_addToListAvailable:()=>"เพิ่มลงในลิสต์ที่ใช้ได้",select_moreSearchOptions:()=>"ตัวเลือกการค้นหาเพิ่มเติม",select_moreSearchOptionsAvailable:()=>"ตัวเลือกการค้นหาเพิ่มเติมที่ใช้ได้",select_noMatchesFound:()=>"ไม่พบรายการที่ค้นหา",select_oneMatchFound:()=>"พบข้อมูลหนึ่งรายการ",select_requiredMessageDetail:()=>"เลือกค่า",select_sizeMatchesFound:e=>"พบรายการที่ค้นหา "+e.TOTAL_SIZE+" รายการ",select_sizeOrMoreMatchesFound:e=>"พบรายการที่ค้นหาตั้งแต่ "+e.TOTAL_SIZE+" รายการ",selectorAll_deselectAll:()=>"ไม่เลือกทั้งหมด",selectorAll_selectAll:()=>"เลือกทั้งหมด",selector_selected:()=>"เลือกช่องทำเครื่องหมายแล้ว",selector_unselected:()=>"ไม่ได้เลือกช่องทำเครื่องหมาย",tabBarNavigationList_removeCueText:()=>"ย้ายออกได้",timeComponent_tooltipZoomIn:()=>"ซูมเข้า",timeComponent_tooltipZoomOut:()=>"ซูมออก",train_current:()=>"ปัจจุบัน",train_message_type:()=>"ประเภทข้อความ",train_not_visited:()=>"ไม่ได้เข้าดู",train_status:e=>"ขั้นตอนที่ "+e.currentStep+" จาก "+e.numberOfSteps,train_visited:()=>"เข้าดูแล้ว",userAssistance_learnMore:()=>"ข้อมูลเพิ่มเติม",userAssistance_required:()=>"จำเป็น",vis_clearSelection:()=>"ล้างข้อมูลที่เลือกไว้",vis_drillable:()=>"ดริลล์ได้",vis_labelAndValue:e=>e.LABEL+": "+e.VALUE,vis_labelCountWithTotal:e=>e.itemCount+" จาก "+e.totalCount,vis_marqueeSelectTooltip:()=>"เลือกเฉพาะในกรอบ",vis_marqueeZoomTooltip:()=>"ซูมเฉพาะในกรอบ",vis_noData:()=>"ไม่มีข้อมูลที่จะแสดงผล",vis_panTooltip:()=>"แพน",vis_stateLoaded:()=>"โหลดแล้ว",vis_stateLoading:()=>"กำลังโหลด",vis_stateSelected:()=>"เลือกไว้",vis_stateUnselected:()=>"ไม่ได้เลือกไว้",warn:()=>"คำเตือน"};e.default=t,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=bundle.js.map
