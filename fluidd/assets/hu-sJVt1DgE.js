var e={app:{bedmesh:{label:{active:"aktív",base:"alap",box_scale:"Doboz skála",flat_surface:"Lapos sík megjelenítése",mesh_matrix:"Hálós mátrix",probed_matrix:"Vizsgált mátrix",profile_name:"Profilnév",remove_profile:"Profil %{name} eltávolítása",scale:"Színskála",wireframe:"Drótváz"},msg:{hint:"Ha nem %{name} fájlként mented, választhatod a %{name} profil eltávolítását is",not_found:"Nem található meglévő ágyháló.",not_loaded:"Nincs háló betöltve"},tooltip:{calibrate:'Új kalibrálás kezdése, mentés "alapértelmezett" profilként',delete:"Profil törlése",load:"Profil betöltése",save:"A kalibrált profil a printer.cfg fájlba íródik"}},chart:{label:{current:"Aktuális",item:"Név",power:"Kapacitás",target:"Cél",rate_of_change:"Változás"},tooltip:{help:"Tartsd lenyomva a Shift-et a nagyításhoz.<br />Kattints egy elemre a grafikonon való váltáshoz.<br />Kattints egy teljesítményre a grafikonon való váltáshoz."}},console:{label:{auto_scroll:"Automatikus görgetés",flip_layout:"Fordított elrendezés",hide_temp_waits:"Hőmérsékletek elrejtése"},tooltip:{help:'Írd be a "help"-et a parancsokhoz<br />Használd <kbd>Tab</kbd> az automatikus kiegészítéshez<br />és <kbd>&uarr;</kbd> az <kbd>&darr;</kbd> előzményekhez'}},endpoint:{error:{cant_connect:"Valami elromlott, és a Fluidd nem éri el a célállomást. Biztos, hogy ez a helyes cím?",cors_error:"blokkolja a CORS szabályzata",cors_note:'Ez azt jelentheti, hogy módosítanod kell a moonraker konfigurációt. Kérjük, tekintsd meg a több nyomtató beállításával kapcsolatos dokumentációt <a href="%{url}" target="_blank">itt</a>'},hint:{add_printer:"Pl.: Http://fluiddpi.local"},msg:{trouble:'Problémád akadt? További információt <a href="%{url}" target="_blank">itt találsz</a> .'},tooltip:{endpoint_examples:"Add meg az API URL-címét.<br />Pár példa látható;<br /><blockquote>fluidd.local, http://192.168.1.150</blockquote>"}},endstop:{label:{open:"NYITVA",triggered:"AKTIVÁLVA"},msg:{subtitle:"A frissítés gombbal frissítheted a végállás állapotát."}},file_system:{filters:{label:{print_start_time:"Nyomtatottak szűrése",print_start_time_desc:"Kiszűri a már kinyomtatott elemeket.",hidden_files_folders:"Rejtett fájlok és mappák szűrése",klipper_backup_files:"Klipper biztonsági fájlok szűrése",rolled_log_files:"A gördített naplófájlok szűrése"}},label:{dir_name:"Könyvtár neve",disk_usage:"Lemezhasználat",diskinfo:"Lemezinformációk",downloaded:"Letöltve",file_name:"Fájlnév",transfer_rate:"Átviteli sebesség",uploaded:"Feltöltve",view_section_documentation:"Nézd '%{section}' dokumentáció"},msg:{not_found:"Nincsenek fájlok",processing:"Feldolgozás"},overlay:{drag_files_folders_upload:"Feltöltéshez <strong>húzd</strong> ide a fájlokat és mappákat",drag_files_enqueue:"<strong>Húzd</strong> sorba a fájlokat"},title:{add_dir:"Könyvtár hozzáadása",add_file:"Fájl hozzáadása",command_palette:"Parancs paletta",download_file:"Fájl lekérése",duplicate_dir:"Duplikált könyvtár",duplicate_file:"Duplikált fájl",go_to_file:"Menj a fájlhoz",rename_dir:"Könyvtár átnevezése",rename_file:"Fájl átnevezése",upload_file:"Fájl feltöltése"},tooltip:{low_on_space:"Kevés a lemezterület",items_count:"{count} tétel | {count} tételeket",root_disabled:"{root} nem elérhető. Kérjük, ellenőrizd a naplókat."},url:{klipper_config:"https://www.klipper3d.org/Config_Reference.html#%{hash}",moonraker_config:"https://moonraker.readthedocs.io/en/latest/configuration/#%{hash}",moonraker_telegram_bot_config:"https://github.com/nlef/moonraker-telegram-bot/wiki/Sample-config#%{hash}",crowsnest_config:"https://crowsnest.mainsail.xyz/configuration/%{hash}-section"}},gcode:{btn:{load_current_file:"Aktuális fájl betöltése"},label:{current_layer_height:"Aktuális rétegmagasság",exclude_object:"Objektum kizárása",follow_progress:"Folyamat követése",layer:"Réteg",layers:"Rétegek",parsed:"Elemezve",show_current_layer:"Aktuális réteg megjelenítése",show_extrusions:"Extrudálások megjelenítése",show_moves:"Mozgások megjelenítése",show_next_layer:"Következő réteg megjelenítése",show_parts:"Részek mutatása",show_previous_layer:"Előző réteg megjelenítése",show_retractions:"Visszahúzások megjelenítése",parsing_file:"Fájl elemzése"},msg:{confirm:'A fájl "%{filename}" mérete %{size}, megterhelheti a rendszert. Biztos, hogy folytatod?'},overlay:{drag_file_load:"<strong>Húzz</strong> ide egy G-Kód fájlt a betöltéshez"}},general:{btn:{abort:"Elvet",accept:"Elfogad",add:"Hozzáad",add_dir:"Könyvtár hozzáadása",add_file:"Fájl hozzáadása",add_printer:"Nyomtató hozzáadása",add_to_queue:"Hozzáadás sorhoz",adjust_layout:"Műszerfal elrendezésének beállítása",adjusted:"Beállított",all:"Összes",auth_unsure:"Nem tudod, miért látod ezt?",calibrate:"Kalibrálás",cancel:"Mégsem",clear_profile:"Profil tisztítása",close:"Bezárás",config_reference:"Konfigurációs hivatkozás",create_zip_archive:"ZIP archívum létrehozása",delete:"Töröl",download:"Letöltés",duplicate:"Duplikált",edit:"Szerkesztés",exit_layout:"Elrendezési mód bezárása",extrude:"Extrudálás",filter:"Szűrő",forgot_password:"Elfelejtetted a jelszavad?",go_to_file:"Menj a fájlhoz",heaters_off:"Fűtőtestek Ki",job_queue:"Feladatsor",load_all:"Minden betöltése",login:"Belépés",logout:"Kijelentkezés",more_information:"Bővebb információ",multiply:"Többszöröz",pause:"Szünet",preheat:"Előfűtés",presets:"Előbeállítások",preview_gcode:"G-Kód előnézet",print:"Nyomtatás",quad_gantry_level:"QGL",reboot:"Újraindítás",recover:"Visszaállítás",refresh:"Frissítés",refresh_metadata:"Metaadat frissítése",reload:"Újratöltés",remove:"Eltávolítás",remove_all:"Összes eltávolítása",rename:"Átnevezés",reprint:"Újranyomtatás",reset_file:"Fájl törlése",reset_layout:"Elrendezés visszaállítása",reset_default_layout:"Alapértelmezett elrendezés visszaállítása",restart_firmware:"Firmware újraindítása",restart_service:"Újraindítás %{service}",restart_service_klipper:"Klipper újraindítása",restart_service_moonraker:"Moonraker újraindítása",resume:"Folytatás",retract:"Visszahúzás",retry:"Próbáld újra",return_dashboard:"Vissza a műszerfalra",save:"Mentés",save_as:"Mentés másként",save_restart:"Mentés & Újraindítás",save_config_and_restart:"Konfiguráció mentése és újraindítás",select_columns:"Oszlopok kijelölése",send:"Küldés",set_color:"Szín beállítása",set_default_layout:"Beállítás alapértelmezett elrendezésként",shutdown:"Leállítás",snooze:"Szundi",socket_reconnect:"Újracsatlakozás",socket_refresh:"Frissítés kényszerítése",thumbnail_size:"Miniatűr méret",upload:"Feltöltés",upload_files:"Fájlok feltöltése",upload_folder:"Mappa feltöltése",upload_print:"Feltöltés & Nyomtatás",view:"Nézet",reset_stats:"Statisztikák törlése"},error:{app_setup_link:'A Fluidd telepítési követelményeit <a target="_blank" href="%{url}">itt találod.</a>',app_warnings_found:"%{appName} figyelmeztetés található.",components_config:'A Moonraker plugin konfigurációja <a target="_blank" href="%{url}">itt található.</a>',failed_components:"A Moonraker moduljai hibásak. Kérlek, ellenőrizd a naplókat, frissítsd a konfigurációt és indítsd újra a Moonrakert."},label:{accel_to_decel:"Gyorsítás-Lassítás",acceleration:"Gyorsulás",accepted_screws:"Elfogadott csavarok",actual_time:"Aktuális",add_camera:"Kamera hozzáadása",add_filter:"Szűrő hozzáadása",add_preset:"Előbeállítás hozzáadása",add_user:"Felhasználó hozzáadása",all:"Mind",api_key:"Api kulcs",api_url:"API URL",auth_source:"Hitelesítési forrás",bars:"Bárok",category:"Kategória",change_password:"Jelszóváltás",clear_all:"Mindent kitöröl",color:"Szín",command:"Parancs",confirm:"Megerősít",cross:"Kereszt",current_password:"Aktuális jelszó",current_user:"Jelenlegi felhasználó",default:"Alapértelmezett",disabled_while_printing:"Nyomtatáskor letiltva",edit_camera:"Kamera szerkesztése",edit_filter:"Szűrő szerkesztése",edit_preset:"Előbeállítás szerkesztése",edit_user:"Felhasználó szerkesztése",extrude_length:"Extrudálás hossza",extrude_speed:"Extrudálás sebessége",filament:"Szál",file:"Fájl",finish_time:"Befejezés",flow:"Átfolyás",free:"szabad",heaters_busy:"A nyomtató jelenleg foglalt. A fűtőtestek kikapcsolása sikertelen nyomtatást eredményezhet.",high:"Magas",host:"Gazdagép",layer:"Réteg",layout:"Elrendezés",ldap:"LDAP",longest_job:"Leghosszabb munka",low:"Alacsony",manage_accounts:"Fiókok kezelése",user_managed_source:"%{source} hitelesítéssel kezelt felhasználó",m117:"M117",moonraker:"Moonraker",name:"Név",new_password:"Új jelszó",no_notifications:"Nincs értesítés",on:"Be",off:"Ki",numeric_prefix_sort:"Numerikus előtag rendezése",password:"Jelszó",partial_of_total:"%{partial} - %{total}",pause_at_layer:"Szünet a rétegnél",pause_at_next_layer:"Szünet a következő rétegnél",pause_at_layer_number:"Szünet a rétegszámnál",power:"Áramellátás",pressure_advance:"Nyomás előtolás",printers:"Nyomtatók",progress:"Folyamat",range:"Hatótávolság",requested_speed:"Sebesség",retract_length:"Visszahúzási hossz",retract_speed:"Visszahúzási sebesség",save_as:"Mentés másként",screw_index:"Csavar index",screw_name:"Csavar neve",screw_number:"Csavar %{index}",services:"Szolgáltatások",slicer:"Szeletelő",smooth_time:"Simítási idő",speed:"Sebesség",sqv:"Négyzet saroksebesség",stepper_enabled:"Léptető engedélyezve",synced_extruder:"Szinkronizált extruder",thumbnail_size:"Miniatűr mérete",total:"Eltelt",total_filament:"Összes felhasznált szál",total_filament_avg:"Átl. nyomtatásonként",total_jobs:"Összes nyomtatási feladat",total_print_time:"Teljes nyomtatási idő",total_print_time_avg:"Átl. nyomtatásonként",total_time:"Teljes idő",total_time_avg:"Átl. nyomtatásonként",turn_device_on:"Kapcsolja be %{device}",turn_device_off:"Kapcsolja ki %{device}",uncategorized:"Nem kategorizált",unretract_extra_length:"Extra hossz visszahúzása",unretract_speed:"Visszahúzási sebesség",upload_and_print:"Feltöltés és nyomtatás",used:"használt",username:"Felhasználónév",velocity:"Sebesség",version_sort:"Verzió rendezés",visible:"Látható",z_offset:"Z Eltolás",unsaved_changes:"Nem mentett változások",alias:"Álnév",apply_z_offset:"Z-eltolás alkalmazása és mentése",edit_category:"Kategória szerkesztése",add_category:"Kategória hozzáadása",file_time:"Fájl"},msg:{password_changed:"A jelszó megváltozott",wrong_password:"Hoppá! Valami rosszul sült el. Ez a jelszavad?",bed_screws_adjust:"Kattints a <b>Adjusted</b> ha jelentős csavar módosításra van szükség ellenkező esetben kattints a <b>Accept</b> gombra a folytatáshoz.",welcome_back:"Üdv újra.<br>Jelentkezz be alább, hogy kapcsolatban maradj a nyomtatóddal.",offline_ready:"Fluidd készen áll az offline munkavégzésre.",needs_refresh:"Új tartalom érhető el, frissítéshez kattints az <b>Újratöltés</b> gombra.",pending_configuration_sections_deleted:"A következő szakaszok törlésre vannak jelölve",rolledover_logs:"A következő alkalmazási naplók átkerültek: %{applications}"},simple_form:{error:{arrayofnums:"Csak számok",credentials:"Érvénytelen hitelesítő adatok",exists:"Már létezik",invalid_number:"Érvénytelen szám",invalid_url:"Érvénytelen URL",invalid_expression:"Érvénytelen kifejezés",max:"Max %{max}",min:"Min %{min}",min_or_0:"Min %{min} vagy 0",password_username:"Nem egyezik a felhasználónév",required:"Ajánlott",invalid_aspect:"Érvénytelen képarány"},msg:{confirm:"Biztos vagy benne?",confirm_delete:"Biztos vagy benne? Törlöd a kiválasztott elemet. | Biztos vagy benne? Törölsz {count} elemet.",confirm_exclude_object:"Biztosan kizárod ezt az objektumot a nyomtatásból?",confirm_forcemove_toggle:"Biztos vagy benne? Ez károsíthatja a nyomtatót.",confirm_reboot_host:"Biztos, hogy újraindítod a gazdagépet?",confirm_shutdown_host:"Biztos, hogy leállítod a gazdagépet?",confirm_service_start:"Biztos elindítod a %{name} szolgáltatást?",confirm_service_restart:"Biztos, hogy újraindítod a %{name} szolgáltatást?",confirm_service_stop:"Biztos, hogy leállítod a %{name} szolgáltatást?",confirm_power_device_toggle:"Biztos, hogy átkapcsolod az eszköz teljesítményét?",unsaved_changes:"Nem mentett módosításaid vannak. Biztosan bezárod ezt a fájlt?",no_file_preview:"%{name} jelenleg nem tekinthető meg."}},table:{header:{actions:"Tevékenységek",chamber_temp:"Kamra hőmérséklet",end_time:"Befejezve",estimated_time:"Becsült idő",filament:"Nyomtatószál",filament_name:"Nyomtatószál neve",filament_type:"Nyomtatószál típusa",filament_used:"Használt nyomtatószál",filament_weight_total:"Nyomtatószál súlya",first_layer_bed_temp:"Első réteg ágy hőmérséklet",first_layer_extr_temp:"Első réteg extruder hőmérséklet",first_layer_height:"Első réteg magassága",height:"Magasság",last_printed:"Utoljára nyomtatott",layer_height:"Rétegmagasság",modified:"Módosított",name:"Név",nozzle_diameter:"Fúvóka átmérő",print_duration:"Nyomtatás időtartama",time_added:"Hozzáadott idő",time_in_queue:"Idő a sorban",size:"Méret",slicer:"Szeletelő",slicer_version:"Szeletelő verziója",start_time:"Elindult",status:"Állapot",total_duration:"Teljes időtartam"}},title:{add_chart:"Ábra hozzáadása",add_printer:"Nyomtató hozzáadása",bedmesh:"Ágyháló",bedmesh_controls:"Ágyhálós vezérlők",camera:"Kamera",config_files:"Konfigurációs fájlok",configure:"Konfiguráció",console:"Konzol",diagnostics:"Diagnosztika",edit_chart:"Ábra szerkesztése",endstops:"Végállások",fans_outputs:"Ventilátorok & Kimenetek",gcode_preview:"G-Kód előnézet",history:"Történet",home:"Otthon",jobs:"Feladatok",job_queue:"Feladatsor",limits:"Nyomtató határai",macros:"Makrók",metrics_explorer:"Felderítő mérés",not_found:"404 Nem található",other_files:"Egyéb fájlok",pending_configuration_changes:"Függőben lévő konfigurációs változások",retract:"Szoftveres visszahúzás",rollover_logs:"Forgó naplók",runout_sensors:"Kifutás érzékelők",settings:"Beállítások",stats:"Nyomtató statisztikák",system:"Rendszer",system_overview:"Rendszerinformáció",temperature:"Hőmérsékletek",timelapse:"Timelapse",tool:"Eszköz",tune:"Hangolás"},tooltip:{browse_metrics:"A böngészőben elérhető mutatók",estop:"VészSTOP",managed_by_moonraker:"A moonraker konfigurációja által kezelt",notifications:"Értesítések",reload_klipper:"Újratölti a klipper konfigurációját.",reload_restart_klipper:"Újratölti a klipper konfigurációját és újraindítja az MCU-kat.",restart_klipper:"Újraindítja a klipper rendszerszolgáltatást.",run_collector:"Gyűjtő futtatása",rollover_logs:"Forgó naplók"}},history:{msg:{confirm:"Biztos vagy benne? Törlöd az összes előzményt és a nyomtatóstatisztikát",confirm_jobs:"Biztos vagy benne? Ez az összes munkát törli.",confirm_stats:"Biztos vagy benne? Ez az összes statisztikát törli."}},job_queue:{msg:{confirm:"Biztos vagy benne? Törlöd a teljes nyomtatósort"},label:{number_of_copies:"Másolatok száma"},title:{multiply_job:"Munka szorzása | Munkák szorzása"}},printer:{state:{busy:"Elfoglalt",cancelled:"Törölt",complete:"Kész",idle:"Tétlen",loading:"Betöltés",paused:"Szüneteltetve",printing:"Nyomtatás",ready:"Kész",standby:"Készenlét"},title:{printer_status:"Nyomtató állapota"}},setting:{btn:{add_camera:"Kamera hozzáadása",add_category:"Kategória hozzáadása",add_filter:"Szűrő hozzáadása",add_metric:"Metrika hozzáadása",add_thermal_preset:"Előbeállítás hozzáadása",add_user:"Felhasználó hozzáadása",reset:"Frissítés",select_theme:"Válassz témát"},camera_type_options:{mjpegadaptive:"MJPEG Adaptív",mjpegstream:"MJPEG Sugárzás",hlsstream:"HLS Sugárzás",webrtc_camera_streamer:"WebRTC (kamera-sugárzása)",video:"IP Kamera",iframe:"HTTP oldal",webrtc_gortc:"WebRTC (go2rtc)"},camera_rotate_options:{90:"90°",180:"180°",270:"270°",none:"Nincs"},label:{all_off:"Minden kikapcsolva",all_on:"Minden bekapcsolva",aspect_ratio:"Képarány",aspect_ratio_format:"[szélesség : magasság]",auto_edit_extensions:"Szerkesztési módban automatikusan megnyíló bővítmények",auto_follow_on_file_load:"Automatikusan követi a fájlbetöltés folyamatát",auto_load_on_print_start:"Fájl automatikus betöltése a nyomtatás indításakor",auto_load_mobile_on_print_start:"Fájlok automatikus betöltése mobileszközökön",axes:"Tengelyek",camera_flip_x:"Vízszintes forgatás",camera_flip_y:"Függőleges forgatás",camera_fullscreen_action:{title:"Teljes képernyős művelet",embed:"Beágyaz",rawstream:"Nyers adás"},camera_rotate_by:"Forgatás szerint",camera_stream_type:"Sugárzás típusa",camera_url_snapshot:"Kamera pillanatkép URL",camera_url_stream:"Kamera közvetítés URL",card:"Kártya",collector:"Kollektor",confirm_on_estop:"Megerősítés kérése vészleállításkor",confirm_on_power_device_change:"Megerősítés kérése kikapcsoláskor",confirm_on_save_config_and_restart:"Mentés és újraindítás előtt tekintsd át a függőben lévő konfigurációs módosításokat",confirm_dirty_editor_close:"Megerősítés kérése, ha módosítások mentése nélkül zárod be a szerkesztőt",contains:"Tartalom",dark_mode:"Sötét mód",dashed:"Szaggatott",default_extrude_length:"Alapértelmezett extrudálási hossz",default_extrude_speed:"Alapértelmezett extrudálási sebesség",default_min_layer_height:"Alapértelmezett minimális rétegmagasság",default_toolhead_move_length:"Alapértelmezett nyomtatófej mozgási hossza",default_toolhead_xy_speed:"Alapértelmezett (XY) nyomtatófej sebesség",default_toolhead_z_speed:"Alapértelmezett (Z) nyomtatófej sebesség",dotted:"Pöttyös",draw_background:"Háttér rajzolása",draw_origin:"Rajzolj eredetet",enable:"Engedélyez",enable_diagnostics:"Diagnosztika engedélyezése",enable_notifications:"Értesítések engedélyezése",expression:"Kifejezés",extrusion_line_width:"Extrudálási vonal szélessége",flip_horizontal:"Vízszintes forgatás",flip_vertical:"Függőleges forgatás",fill_color:"Kitöltés színe",fill_opacity:"Kitöltés átlátszósága",filter:"Szűrő",fps_target:"FPS Cél",fps_idle_target:"FPS Cél, ha nincs fókuszban",height:"Magasság",gcode_coords:"G-Kód koordináták használata",icon:"Ikon",invert_x_control:"Fordított (X) vezérlés",invert_y_control:"Fordított (Y) vezérlés",invert_z_control:"Fordított (Z) vezérlés",language:"Megjelenítés nyelve",last_result:"Utolsó eredmény",left_y:"Bal Y-tengely",line_color:"Vonal színe",line_style:"Vonal stílusa",min:"Minimum",max:"Maximum",metrics:"Metrikus",move_line_width:"Vonalszélesség mozgatása",name:"Név",never:"Soha",none:"Egyik sem",optional:"Opcionális",power_toggle_in_top_nav:"Bekapcsológomb a felső navigációban",primary_color:"Elsődleges szín",printer_name:"Nyomtató neve",reset:"Beállítások visszaállítása",retraction_icon_size:"Visszahúzási ikon mérete",right_y:"Jobb Y-tengely",save_and_restore_view_state:"A nézet állapot mentése és visszaállítása",sections_to_ignore_pending_configuration_changes:"Szakasz a függőben lévő konfigurációs változások figyelmen kívül hagyásához",show_animations:"Animációk megjelenítése",show_barometric_pressure:"Barometrikus nyomás mutatása",show_chart:"Diagram megjelenítése",show_code_lens:"CodeLens megjelenítése",show_gas_resistance:"Gázellenállás mutatása",show_legend:"Legenda mutatása",show_rate_of_change:"A hőmérséklet változásának mértéke",show_relative_humidity:"Relatív páratartalom mutatása",show_save_config_and_restart:"Konfiguráció mentése, újraindítás gomb a felső navigációban",show_upload_and_print:"A Feltöltés és Nyomtatás gomb megjelenítése a felső navigációban",solid:"Szilárd",starts_with:"Ezzel kezdődik",theme_preset:"Előre beállított téma",thermal_preset_gcode:"G-Kód",thermal_preset_name:"Előre beállított név",title:"Cím",to_browser_local_storage:"A böngésző helyi tárolója",to_browser_session_storage:"A böngésző munkamenet tárolása",toolhead_control_style:"Nyomtatófej vezérlési stílus",toolhead_move_distances:"Nyomtatófej távolsági értékek",toolhead_xy_move_distances:"Nyomtatófej XY távolságértékei",toolhead_z_move_distances:"Nyomtatófej Z távolságértékei",type:"Típus",unit:"Egység",z_adjust_values:"A (Z) értékek beállítása",date_format:"Dátum formátum",time_format:"Idő formátum",text_sort_order:"Szövegrendezési sorrend",force_move_toggle_warning:"A FORCE_MOVE aktiválásakor megerősítés szükséges",show_manual_probe_dialog_automatically:"Kézi szonda párbeszédpanel automatikus megjelenítése",show_bed_screws_adjust_dialog_automatically:"Ágycsavarok beállítása párbeszédpanel automatikus megjelenítése",show_screws_tilt_adjust_dialog_automatically:"Ágycsavarok dőlésszögének beállítása párbeszédpanel automatikus megjelenítése"},timer_options:{duration:"Csak időtartam",filament:"Nyomtatószál becslés",file:"Fájlbecslés",slicer:"Szeletelő"},title:{authentication:"Hitelesítés",console:"Konzol",camera:"Kamera",file_editor:"Fájlszerkesztő",gcode_preview:"G-Kód előnézet",general:"Általános",macros:"Makrók",theme:"Téma",thermal_presets:"Hőmérsékleti előbeállítások",tool:"Eszköz"},tooltip:{diagnostics_performance:"A diagnosztikai információk naplózása hatással lehet a teljesítményre",gcode_coords:"G-Kód pozíció használata a nyomtatófej pozíciója helyett a műszerfalon",show_manual_probe_dialog_automatically:"Automatikusan megjeleníti a segítő párbeszédpanelt, ha kézi szintezőeszközt futtatsz",show_bed_screws_adjust_dialog_automatically:"Automatikusan megjeleníti a segítő párbeszédpanelt, ha a BED_SCREWS_ADJUST eszközt futtatod",show_screws_tilt_adjust_dialog_automatically:"Automatikusan megjeleníti a segítő párbeszédpanelt, ha a SCREWS_TILT_CALCULATE eszközt futtatod"}},socket:{msg:{connecting:"Csatlakozás a Moonraker-hez...",no_connection:"Nincs Moonraker kapcsolat. Kérjük, ellenőrizd a Moonraker állapotát és/vagy frissítsd."}},system_info:{label:{capacity:"Kapacitás",cpu_desc:"CPU leírása",distribution_codename:"Kódnév",distribution_like:"Alap disztribúció",distribution_name:"Disztribúció",frequency:"Frekvencia",hardware_desc:"Hardver leírás",hostname:"Gazdanév",klipper_load:"Klipper Terheltsége",manufactured:"Gyártva",manufacturer:"Gyártó",mcu_awake:"{mcu} Ébredés ideje",mcu_bandwidth:"{mcu} Sávszélesség",mcu_information:"{mcu} Információ",mcu_load:"{mcu} Terheltsége",micro_controller:"Mikrovezérlő",model:"CPU Modell",moonraker_load:"Moonraker Terheltsége",network:"Hálózat",processor_desc:"Processzor",product_name:"Termék név",serial_number:"Sorozatszám",system_load:"Rendszer Terheltsége",system_memory:"Rendszermemória",system_utilization:"Rendszerhasználat",total_memory:"Teljes memória",operating_system:"Operációs rendszer",version:"Változat",virtualization:"Virtualizáció"}},tool:{btn:{home_x:"X",home_y:"Y",home_all:"Mind"},title:{bed_screws_adjust:"Ágycsavarok beállítása",manual_probe:"Kézi szonda",screws_tilt_adjust:"Csavarok dőlésszög beállítása"},tooltip:{absolute_positioning:"Abszolút pozicionálás",extruder_disabled:"extruder letiltva, min_extrude_temp (%{min}<small>°C</small>) alatt van",home_xy:"XY kezdőpont",home_z:"Z kezdőpont",manual_probe:"Kézi szonda",motors_off:"Motorok Ki",relative_positioning:"Relatív pozicionálás",select_tool:"Eszköz kiválasztása %{tool}",tools:"Eszközök"},label:{stats_active_extruder:'<span class="secondary--text">Az aktív extruder konfigurációja be van állítva</span> %{filamentDiameter} mm átmérőjű filament <span class="secondary--text">és</span> %{nozzleDiameter} mm fúvóka',stats_volumetric_flow:'Extrudálás: %{extrudeSpeed} mm/s<span class="secondary--text">, az extrudernek biztosítania kell at</span> becsült térfogatáram %{estimatedVolumetricFlow} mm³/s',stats_extruded_length:'A filament extrudálása %{extrudeLength} mm-nél %{extrudeFactor} % folyamot<span class="secondary--text">, biztosít egy-t</span> becsült kimeneti hosszon %{estimatedExtrudedLength} mm',stats_max_speed:'<span class="secondary--text">Feltéve, hogy a</span> %{layerHeight} mm réteg magassága<span class="secondary--text">, a</span> becsült maximális nyomtatási sebesség %{estimatedMaxSpeed} mm/s'}},version:{btn:{check_for_updates:"Frissítések keresése",finish:"Befejezve",update:"Frissítés",update_all:"Összes frissítése",view_versions:"Verziók megtekintése"},label:{commit_history:"Történet rögzítése",commits_on:"vállalja",committed:"Elkötelezett",dirty:"PISZKOS",invalid:"ÉRVÉNYTELEN",os_packages:"OS csomagok",package_list:"Csomaglista",up_to_date:"NAPRAKÉSZ",updates_available:"Frissítések állnak rendelkezésre"},status:{finished:"A frissítések befejeződtek",updating:"Frissítés..."},title:"Szoftverfrissítések",tooltip:{commit_history:"Előzmények rögzítése",dirty:"leválasztott fejet jelez, nem elsődleges vagy érvénytelen eredetű",invalid:"a repo helyi változásait jelzi",packages:"Csomagok",release_notes:"Kiadási jegyzetek"}},timelapse:{btn:{render:"Renderelés",save_frames:"Képkockák mentése"},error:{newframe:"Hiba a timelapse képkocka felvételekor"},label:{frames:"%{frames} képkocka | %{frames} képkockák",length:"Becsült hossz: %{length}",frame:"Képkocka | Képkockák"},title:{timelapse_settings:"Timelapse beállítások",timelapse_status:"Timelapse állapot",render_settings:"Renderelési beállítások"},setting:{enable:"Engedélyezve",auto_render:"Automatikus renderelés",crf:"Állandó árfolyamtényező",duplicatelastframe:"Utolsó képkockák duplikálása",fw_retract:"Firmware visszahúzás használata",gcode_verbose:"Szöveges G-Kód",mode:"Mód",mode_layermacro:"Réteg makró",mode_hyperlapse:"Hyperlapse",hyperlapse_cycle:"Hyperlapse ciklus",output_framerate:"Kimeneti képkockaszám",park_retract_distance:"Parkolás visszahúzási távolság",park_retract_speed:"Parkolás visszahúzási sebesség",park_extrude_distance:"Parkolás extrudálási távolság",park_extrude_speed:"Parkolás extrudálás sebesség",parkhead:"Parkoló fej",park_time:"Parkolási idő",park_travel_speed:"Parkolás utazási sebesség",park_custom_pos_x:"Parkolási pozíció X",park_custom_pos_y:"Parkolási pozíció Y",park_custom_pos_dz:"Parkolási pozíció Z-ugrás",parkpos:{label:"Parkolási pozíció",custom:"Egyedi",front_left:"Elöl balra",front_right:"Elöl jobbra",center:"Központ",back_left:"Hátul balra",back_right:"Hátul jobbra",x_only:"X mozgatása",y_only:"Y mozgatása"},previewimage:"Miniatűr generálása",saveframes:"Képkockák mentése",stream_delay_compensation:"Késleltetés kompenzáció",targetlength:"Cél hossza",variable_fps:"Változó FPS",variable_fps_min:"Minimális képkockaszám",variable_fps_max:"Maximális képkockaszám"}},spoolman:{btn:{manage_spools:"Orsók kezelése",scan_code:"Kód beolvasása",select:"Kiválaszt"},title:{spoolman:"Orsómester",spool_selection:"Orsó kiválasztása",scan_spool:"Orsó beolvasása"},label:{change_spool:"Orsó cseréje",comment:"Megjegyzés",device_camera:"Eszköz",filament_name:"Nyomtatószál",first_used:"Először használt",id:"ID",last_used:"Utoljára használt",location:"Helyszín",lot_nr:"Lot Nr",material:"Anyag",remaining_weight:"Maradék",vendor:"Forgalmazó"},msg:{no_spool:"Nem választottál ki orsót. Biztos, hogy szálkövetés nélkül szeretnél nyomtatni?",no_filament:"Lehet, hogy a kiválasztott orsón nem maradt elég szál ahhoz, hogy a nyomtatási feladat sikeresen befejeződjön. Biztos, hogy folytatni akarod?",no_required_length:"A kiválasztott fájl nyomtatásához szükséges szálmennyiség ismeretlen. Szeretnéd folytatni?",mismatched_filament:"A kiválasztott szál anyaga nem egyezik a szeletelőben kiválasztott anyaggal. Biztos, hogy folytatni akarod?",tracking_inactive:"A szálkövetés inaktív. A kezdéshez kérjük, válassz egy orsót.",info:{howto:"Mutasd meg az orsó QR-kódját a kamerának. Ez az ablak bezáródik, amint egy orsót észlel."},warning:{code_not_recognized:"Ez a kód nem tűnik kompatibilis QR-kódnak.",invalid_spool_id:"A QR-kódban szereplő orsóazonosító ID érvénytelen."},error:{cors:"Hiba történt a kamerákhoz való hozzáférésnél. Kérjük, győződj meg, hogy a webkamszerver engedélyezi a CORS-hozzáférést.",spool_not_existant:"A beolvasott orsó nem létezik az adatbázisban.",no_image_data:"Hiba történt a kamerákhoz való hozzáférésnél. Kérjük, ellenőrizd a kamera konfigurációját, vagy próbálkozz másik kameraforrással."}},setting:{auto_open_qr_camera:"Automatikusan megnyitja a kamerát a QR-kód beolvasásához",auto_select_spool_on_match:"Automatikusan rögzíti az orsókiválasztást QR-kód egyezés esetén",prefer_device_camera:"A készülék kamerájának használata a QR-kódok felismeréséhez, ha van ilyen",show_spool_selection_dialog_on_print_start:"Orsókiválasztó párbeszédpanel megjelenítése nyomtatás indításakor",warn_on_not_enough_filament:"Figyelmeztetés megjelenítése, ha a kiválasztott orsón nem maradt elég szál a nyomtatás befejezéséhez.",warn_on_filament_type_mismatch:"Figyelmeztetés megjelenítése, ha az orsó szál típusa és a szeletelőben kiválasztott szál típusa nem egyezik meg."}},sensors:{title:{sensors:"Érzékelők"}}}};export{e as default};
