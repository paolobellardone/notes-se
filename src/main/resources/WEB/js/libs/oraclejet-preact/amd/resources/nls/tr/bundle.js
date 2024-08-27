define(['exports'], (function(e){"use strict";const a={accAnnounceMovedKey:e=>e.itemKey+" "+e.position+" "+e.referenceKey+" taşındı.",accCommandKey:()=>"Komut",accControlKey:()=>"Kapat",accPositionAfter:()=>"önce",accPositionBefore:()=>"sonra",accReorderInstructions:e=>e.keyPressed+" ve shift tuşlarına basılı tutun, ardından yeniden sıralamak için ok tuşlarını kullanın.",calendarDateConverter_parseError:e=>"Şunun gibi tam bir tarih girin: "+e.dateExample+".",calendarMonthConverter_parseError:e=>"Şunun gibi ay ve yıl girin: "+e.dateExample+".",chart_labelGroup:()=>"Grup",chart_labelSeries:()=>"Seri",chart_labelValue:()=>"Değer",checkboxSet_requiredMessageDetail:()=>"Gerekli",checkbox_requiredMessageDetail:()=>"Gerekli",close:()=>"Kapat",collection_noData:()=>"Görüntülenecek veri yok.",collection_selectAllRows:()=>"Tüm satırları seç",collection_selectRow:e=>e.ROW_NAME+" satırını seç",collection_sortDisabled:()=>"Sıralanabilir değil",collection_sortEnabled:()=>"Sıralanabilir",confirmation:()=>"Teyit",datePicker_currentDate:()=>"Geçerli tarih",datePicker_goToToday:()=>"Bugüne git",datePicker_label:()=>"Tarih Seçici",datePicker_month:()=>"Ay",datePicker_months:()=>"Ay",datePicker_next:()=>"Sonraki",datePicker_nextDecade:()=>"Sonraki on yıl",datePicker_nextMonth:()=>"Sonraki ay",datePicker_prev:()=>"Önceki",datePicker_prevDecade:()=>"Önceki on yıl",datePicker_prevMonth:()=>"Önceki ay",datePicker_restricted:()=>"Kısıtlı",datePicker_selected:()=>"Seçildi",datePicker_today:()=>"Bugün",datePicker_weekNum:e=>"Hafta "+e.NUM,datePicker_weekNumColLabel:()=>"Hafta Numarası",datePicker_year:()=>"Yıl",datePicker_years:()=>"Yıl",error:()=>"Hata",expandableList_expandCollapseInstructionText:()=>"Genişletmek ve daraltmak için ok tuşlarını kullanın",expandableList_groupCollapse:()=>"Daraltıldı",expandableList_groupExpand:()=>"Genişletildi",filePicker_addFiles:()=>"Dosya Ekle",filePicker_dropzonePrimaryText:()=>"Sürükle ve Bırak",filePicker_dropzoneSecondaryText:()=>"Bir dosya seçin veya buraya bir dosya bırakın",filePicker_dropzoneSecondaryTextMultiple:()=>"Dosya seçin veya buraya bırakın",filePicker_multipleFileTypeUploadError:e=>"Karşıya yükleyemeyeceğiniz dosya tipleri: "+e.fileTypes,filePicker_singleFileUploadError:()=>"Bir seferde karşıya bir tek dosya yükleyin",filePicker_singleTypeUploadError:e=>"Karşıya yükleyemeyeceğiniz dosya tipi: "+e.fileType,filePicker_unknownFileTypeUploadError:()=>"bilinmeyen",formControl_clear:()=>"Temizle",formControl_day:()=>"Gün",formControl_helpAvailable:()=>"Yardım mevcut",formControl_hide:()=>"Gizle",formControl_limitReached:e=>(({one:new Intl.NumberFormat("tr").format(e.CHARACTER_LIMIT)+" karakter"}[new Intl.PluralRules("tr").select(e.CHARACTER_LIMIT)]||new Intl.NumberFormat("tr").format(e.CHARACTER_LIMIT)+" karakter")+" sınırına ulaştınız."),formControl_loading:()=>"Yükleniyor ",formControl_maxLength:e=>"En fazla "+e.MAX_LENGTH+" karakter girebilirsiniz.",formControl_maxLengthRemaining:e=>e.CHARACTER_COUNT+" karakter kaldı.",formControl_month:()=>"Ay",formControl_readOnly:()=>"Salt okunur",formControl_requiredMessageDetail:()=>"Bir değer girin.",formControl_show:()=>"Göster",formControl_year:()=>"Yıl",gantt_labelDate:()=>"Tarih",gantt_labelEnd:()=>"Bitiş",gantt_labelLabel:()=>"Etiket",gantt_labelRow:()=>"Satır",gantt_labelStart:()=>"Başlangıç",indexer_disabledLabel:e=>e.SECTION+". Eşleşen bölüm bulunamadı.",indexer_keyboardInstructionText:()=>"Değer seçmek için Enter tuşuna basın.",indexer_othersLabel:()=>"#",indexer_separatorLabel:e=>e.FROM_SECTION+" ve "+e.TO_SECTION+" arasında.",indexer_touchInstructionText:()=>"İşaret moduna girmek için çıft tıklayıp basılı tutun, ardından aşağı veya yukarı sürükleyerek değeri ayarlayın.",info:()=>"Bilgi",inputDateMask_date_cleared:()=>"Tarih temizlendi",inputDateMask_dayPlaceholder:()=>"gg",inputDateMask_empty_segment:()=>"Boş",inputDateMask_monthPlaceholder:()=>"aa",inputDateMask_yearPlaceholder:()=>"yyyy",inputDatePicker_dateRangeOverflowMessageDetail:e=>e.max+" ile aynı veya daha önce olan bir tarih girin.",inputDatePicker_dateRangeUnderflowMessageDetail:e=>e.min+" ile aynı veya daha sonra olan bir tarih girin.",inputDatePicker_dateRestrictionMessageDetail:()=>"Bir kullanılabilirlik tarihi girin.",inputDatePicker_instruction:()=>"Takvime erişmek için Sekme tuşuna basın.",inputDatePicker_selectDate:()=>"Tarih seçin",inputMonthMask_dateRangeOverflowMessageDetail:e=>e.max+" ile eşit veya bundan daha önce olan bir ay ve yıl girin.",inputMonthMask_dateRangeUnderflowMessageDetail:e=>e.min+" ile eşit veya bundan daha sonra olan bir ay ve yıl girin.",inputNumber_converterParseError:()=>"Sayı girin.",inputNumber_decrease:()=>"Azalt",inputNumber_increase:()=>"Arttır",inputPassword_hidden:()=>"Parola Gizli",inputPassword_hide:()=>"Parolayı Gizle",inputPassword_show:()=>"Parolayı Göster",inputSensitiveText_hidden:()=>"Hassas metin gizli",list_msgFetchCompleted:()=>"Yüklendi",list_msgFetchingData:()=>"Yükleniyor ",list_suggestion:()=>"Öneri",messageToast_allMessagesClosed:()=>"Tüm durum mesajları kapatıldı.",message_close:()=>"Kapat",message_confirmation:()=>"Başarılı",message_error:()=>"Hata",message_info:()=>"Bilgi",message_navigationFromMessagesRegion:()=>"Mesajlar bölgesine giriliyor. Önceki odaklanılan öğeye gitmek için F6 tuşuna basın.",message_navigationToMessagesRegion:()=>"Mesajlar bölgesinde yeni mesajlar var. En yeni mesaj bölgesine F6 tuşuna basın.",message_warning:()=>"Uyarı",noData_message:()=>"Görüntülenecek öğe yok",overflowItemLabel:()=>"Diğer Sekmeler",plural_separator:()=>", ",progressIndeterminate:()=>"Devam Ediyor",radio_helpForRadio:()=>"Radyo düğmesi yardımı",radio_requiredMessageDetail:()=>"Bir değer seçin.",selectMultiple_apply:()=>"Uygula",selectMultiple_back:()=>"Geri",selectMultiple_countPlus:e=>e.COUNT+"+",selectMultiple_highlightSelectedTagsInstructionText:()=>"Seçili değerleri vurgulamak için sol ve sağ ok tuşlarını kullanın.",selectMultiple_removeSelectedTagInstructionText:()=>"Seçili değeri kaldırmak için Geri veya Sil tuşuna basın.",selectMultiple_selectedValues:()=>"Seçili değerler",selectMultiple_showSelectedValues:()=>"Sadece seçili değerleri göster.",selectMultiple_valuesSelected:e=>e.VALUE_COUNT+" değer seçili.",select_addToList:()=>"Listeye ekle",select_addToListAvailable:()=>"Kullanılabilir listeye ekle",select_moreSearchOptions:()=>"Diğer arama seçenekleri",select_moreSearchOptionsAvailable:()=>"Diğer kullanılabilir arama seçenekleri",select_noMatchesFound:()=>"Eşleşme bulunmadı.",select_oneMatchFound:()=>"Bir eşleşme bulundu",select_requiredMessageDetail:()=>"Bir değer seçin.",select_sizeMatchesFound:e=>e.TOTAL_SIZE+" eşleşme bulundu",select_sizeOrMoreMatchesFound:e=>e.TOTAL_SIZE+" veya daha fazla eşleşme bulundu",selectorAll_deselectAll:()=>"Tüm seçimleri kaldır",selectorAll_selectAll:()=>"Tümünü seç",selector_selected:()=>"Onay kutusu işaretli",selector_unselected:()=>"Onay kutusu işaretli değil",tabBarNavigationList_removeCueText:()=>"Kaldırılabilir",timeComponent_tooltipZoomIn:()=>"Yakınlaştır",timeComponent_tooltipZoomOut:()=>"Uzaklaştır",train_current:()=>"Geçerli",train_message_type:()=>"Mesaj Tipi",train_not_visited:()=>"Ziyaret edilmedi",train_status:e=>"Adım "+e.currentStep+" / "+e.numberOfSteps,train_visited:()=>"Ziyaret edildi",userAssistance_learnMore:()=>"Daha fazla bilgi edinin",userAssistance_required:()=>"Gerekli",vis_clearSelection:()=>"Seçimi Temizle",vis_drillable:()=>"Detaylandırılabilir",vis_labelAndValue:e=>e.LABEL+": "+e.VALUE,vis_labelCountWithTotal:e=>e.itemCount+"/"+e.totalCount,vis_marqueeSelectTooltip:()=>"Çerçeve seçimi",vis_marqueeZoomTooltip:()=>"Çerçeve yakınlaştırma",vis_noData:()=>"Görüntülenecek veri yok",vis_panTooltip:()=>"Kaydır",vis_stateLoaded:()=>"Yüklendi",vis_stateLoading:()=>"Yükleniyor ",vis_stateSelected:()=>"Seçildi",vis_stateUnselected:()=>"Seçim Kaldırıldı",warn:()=>"Uyarı"};e.default=a,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=bundle.js.map