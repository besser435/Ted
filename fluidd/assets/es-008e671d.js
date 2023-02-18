var e={app:{bedmesh:{label:{box_scale:"Escala de la caja",flat_surface:"Mostrar plano",mesh_matrix:"Matriz de la malla",probed_matrix:"Matriz sondeada",profile_name:"Nombre del Perfil",remove_profile:"Borrar el perfil %{name}",scale:"Escala de color",wireframe:"Wireframe"},msg:{hint:"Si guarda el perfil con un nombre que no sea %{name}, también puede elegir eliminar el perfil %{name}.",not_found:"No se ha encontrado ninguna malla de la cama.",not_loaded:"No está cargada ninguna malla."},tooltip:{calibrate:"Comienza una nueva calibración, se guardará con el nombre 'default'",delete:"Elimina el perfil. Esto REINICIARÁ su impresora",load:"Cargar el perfil",save:"Guarda el perfil de calibracion en el archivo printer.cfg.  Esto REINICIARÁ su impresora"}},chart:{label:{current:"Tª",item:"Nombre",off:"Gráfico desactivado",on:"Gráfico activado",power:"Potencia",rate_of_change:"Cambio",target:"Objetivo"},tooltip:{help:"Mantenga presionada la tecla Mayús para hacer zoom. <br /> Haga clic en un elemento para mostrarlo. <br /> Haga clic en una potencia para mostrarla."}},console:{label:{auto_scroll:"Scroll automático",flip_layout:"Invertir diseño",hide_temp_waits:"Esconder los mensajes de temperatura"},placeholder:{command:"''tabulador'' para autocompletar, ''help'' para comandos, ''flechas'' para historia"}},endpoint:{error:{cant_connect:"Se ha producido un error y Fluidd no puede comunicarse con el destino. ¿Está seguro de que la dirección es correcta?",cors_error:"bloqueado por la configuración de CORS",cors_note:'Esto puede indicar que necesita modificar su configuración de Moonraker. Consulte la documentación sobre las configuraciones con varias impresoras <a href="%{url}" target="_blank">aquí</a>.'},hint:{add_printer:"Ex., http://fluiddpi.local"},msg:{trouble:'¿Tienes problemas? <a href="%{url}" target="_blank">Haga clic aquí</a> para más información.'},tooltip:{endpoint_examples:"Ingrese la URL de la API. <br />Por ejemplo:<br /><blockquote>fluidd.local, https://192.168.1.150</blockquote>"}},endstop:{label:{open:"ABIERTO",triggered:"ACTIVADO"},msg:{subtitle:"Presione el botón 'Actualizar' para actualizar el estado."}},file_system:{filters:{label:{hidden_files:"Filtrar archivos ocultos",print_start_time:"Filtrar ya impresos",print_start_time_desc:"Filtrar archivos que ya ha impreso anteriormente"}},label:{dir_name:"Nombre de la carpeta",disk_usage:"Uso del disco",diskinfo:"Información del disco",downloaded:"Descargado",file_name:"Nombre del archivo",transfer_rate:"Tasa de transferencia",uploaded:"Subido",view_section_documentation:"Ver documentación sobre '%{section}'"},msg:{confirm:"¿Está seguro? Esto borrará todos los subarchivos y subcarpetas.",not_found:"No se encontraron archivos",processing:"Procesando..."},overlay:{label:"<strong>Arrastrar</strong> un archivo aquí"},title:{add_dir:"Agregar una carpeta",add_file:"Agregar un archivo",download_file:"Recuperando el archivo",rename_dir:"Cambiar el nombre de la carpeta",rename_file:"Cambiar el nombre del archivo",upload_file:"Subiendo archivo | Subiendo archivos"},tooltip:{low_on_space:"Espacio en disco limitado"}},gcode:{btn:{load_current_file:"Cargar archivo actual"},label:{current_layer_height:"Altura de capa actual",exclude_object:"Excluir objeto",follow_progress:"Seguir el progreso",layer:"Capa",layers:"Capas",parsed:"Analizado",parsing_file:"Procesando archivo",show_current_layer:"Mostrar capa actual",show_extrusions:"Mostrar extrusiones",show_moves:"Mostrar movimientos",show_next_layer:"Mostrar capa siguiente",show_previous_layer:"Mostrar capa anterior",show_retractions:"Mostrar retracciones"},msg:{confirm:'El archivo "%{filename}" pesa %{size}. Esto podría usar muchos recursos de su sistema. ¿Está seguro?'}},general:{btn:{abort:"Abortar",accept:"Aceptar",add:"Añadir",add_dir:"Añadir una carpeta",add_file:"Añadir un archivo",add_printer:"Añadir una impresora",adjust_layout:"Ajustar la disposición del tablero",adjusted:"Ajustado",all:"Todo",auth_unsure:"No está seguro de porqué vé esto?",calibrate:"Calibrar",cancel:"Cancelar",clear_profile:"Limpar Perfil",close:"Cerrar",config_reference:"Referencia de configuración",download:"Descargar",edit:"Editar",extrude:"Extrudir",forgot_password:"Olvido su contraseña?",heaters_off:"Apagar calentadores",load_all:"Cargar todos",login:"Ingresar",more_information:"Más información",pause:"Pausa",preheat:"Precalentar",presets:"Preajustes",preview_gcode:"Previsualizar Gcode",quad_gantry_level:"QGL",reboot:"Reiniciar",refresh:"Actualizar",remove:"Borrar",remove_all:"Borrar todos",rename:"Renombrar",reprint:"Reimprimir",reset_file:"Despejar archivo",reset_layout:"Restablecer la disposición",reset_stats:"Restablecer Estadísticas",restart_firmware:"Reiniciar firmware",restart_service:"Reinciar %{service}",restart_service_klipper:"Reiniciar Klipper",restart_service_moonraker:"Reiniciar Moonraker",resume:"Retomar",retract:"Retraer",save:"Guardar",save_as:"Guardar como",save_config_and_restart:"Guardar configuración & reiniciar",save_restart:"Guardar y reiniciar",send:"Enviar",set_color:"Elegir color",shutdown:"Apagar",snooze:"Posponer",socket_reconnect:"Reconectar",socket_refresh:"Forzar actualización",upload:"Subir",upload_print:"Subir e imprimir",view:"Ver"},error:{app_setup_link:'Las instrucciones de instalación de Fluidd están disponibles <a target="_blank" href="%{url}">aquí.</a>',app_warnings_found:"%{appName} advertencias encontradas.",components_config:'La configuración de complementos de Moonraker está disponible <a target="_blank" href="%{url}">aquí.</a>',failed_components:"Moonraker ha fallado en los complementos. Verifique los registros, actualice su configuración y reinicie Moonraker."},label:{accel_to_decel:"Aceleración a deceleración",acceleration:"Aceleración",accepted_screws:"Tornillos aceptados",actual_time:"Real",add_camera:"Añadir cámara",add_category:"Agregar categoría",add_filter:"Agregar Filtro",add_preset:"Añadir preajuste",add_user:"Añadir usuario",alias:"Alias",api_key:"Clave de la API",api_url:"URL de la API",apply_z_offset:"Aplicar y guardar Z_Offset",category:"Categoría",change_password:"Cambiar contraseña",clear_all:"Despejar todos",color:"Color",confirm:"Confirmar",current_password:"Contraseña actual",current_user:"Usuario actual",disabled_while_printing:"Desactivado durante la impresión",edit_camera:"Editar cámara",edit_category:"Editar Cateogria",edit_filter:"Editar Filtro",edit_preset:"Editar preajustes",edit_user:"Editar usuario",extrude_length:"Longitud de extrusión",extrude_speed:"Velocidad de extrusión",filament:"Filamento",file:"Archivo",finish_time:"Final",flow:"Flujo",free:"libre",heaters_busy:"La impresora está ocupada. Apagar los calentadores puede resultar en una impresión fallida.",high:"Alto",host:"Anfitrión",layer:"Capa",layout:"Disposición",longest_job:"Tarea más larga",low:"Bajo",m117:"M117",name:"Nombre",new_password:"Nueva contraseña",no_notifications:"Ninguna notificación",off:"Apagado",on:"Encendido",partial_of_total:"%{partial} de %{total}",password:"Contraseña",power:"Energía",printers:"Impresoras",progress:"Progreso",requested_speed:"Velocidad",retract_length:"Longitud de retracción",retract_speed:"Velocidad de retracción",save_as:"Guardar como",screw_index:"Indice de tornillo",screw_name:"Nombre del Tornillo",screw_number:"Tornillo %{index}",services:"Servicios",slicer:"Slicer",speed:"Velocidad",sqv:"Square Corner Velocity",total:"Total",total_filament:"Filamento total usado",total_filament_avg:"Promedio por impresión",total_jobs:"Impresiones totales",total_print_time:"Tiempo total de impresión",total_print_time_avg:"Promedio por impresion",total_time:"Tiempo total",total_time_avg:"Promedio por impresión",turn_device_off:"Apagar %{device}",turn_device_on:"Encender %{device}",uncategorized:"Sin categorizar",unretract_extra_length:"Longitud extra al des-retraer",unretract_speed:"Velocidad de des-retracción",unsaved_changes:"Cambios sin guardar",used:"Usado",username:"Usuario",variance:"Variación",velocity:"Velocidad",visible:"Visible",z_offset:"Z Offset"},msg:{bed_screws_adjust:"Haga click en <b>Ajustado</b> si fue necesario un ajuste significativo en el tornillo actual, de lo contrario haga click en <b>Aceptar</b> para continuar.",password_changed:"Contraseña cambiada",wrong_password:"Se ha producido un error. ¿Es su contraseña correcta?"},simple_form:{error:{arrayofnums:"Solo números",credentials:"Credenciales inválidas",exists:"Ya existe",invalid_number:"Número inválido",invalid_url:"URL no válida",max:"Máx. %{max}",min:"Mín. %{min}",min_or_0:"Mín. %{min} o 0",password_username:"No se puede emparejar con el nombre de usuario",required:"Obligatorio"},msg:{confirm:"¿Está seguro?",confirm_power_device_toggle:"¿Está seguro? Esto alternará la alimentación del dispositivo.",confirm_reboot_host:"¿Está seguro? Esto reiniciará el sistema anfitrión.",confirm_shutdown_host:"¿Está seguro? Esto apagará el sistema anfitrión."}},table:{header:{actions:"Acciones",end_time:"Finalizado",estimated_time:"Tiempo estimado",filament:"Filamento",filament_used:"Filamento usado",filament_weight_total:"Peso del filamento",first_layer_bed_temp:"Temperatura de la cama de la primera capa",first_layer_extr_temp:"Temperatura de extrusión de la primera capa",first_layer_height:"Altura de capa de la primera capa",height:"Altura",last_printed:"Última impresión",layer_height:"Altura de capa",modified:"Modificado",name:"Nombre",print_duration:"Duración de la impresión",size:"Tamaño",slicer:"Slicer",slicer_version:"Versión del slicer",start_time:"Iniciado",status:"Estado",total_duration:"Duración total"}},title:{add_chart:"Agregar gráfico",add_printer:"Añadir impresora",bedmesh:"Malla de la cama",bedmesh_controls:"Controles de la malla de la cama",camera:"Cámara | Cámaras",config_files:"Archivos de configuración",configure:"Configuración",console:"Consola",endstops:"Endstops",fans_outputs:"Ventiladores y salidas",gcode_preview:"Previsualización de Gcode",history:"Historial",home:"Inicio",jobs:"Tareas",limits:"Límites de la impresora",macros:"Macros",other_files:"Otros Archivos",retract:"Retracción por firmware",runout_sensors:"Sensores de filamento",settings:"Opciones",stats:"Estatísticas de la impresora",system:"Sistema",system_overview:"Información del sistema",temperature:"Térmicas",tool:"Herramienta",tune:"Calibrar"},tooltip:{estop:"Parada de Emergencia",notifications:"Notificaciones",reload_klipper:"Recarga la configuración de Klipper.",reload_restart_klipper:"Recarga la configuración de Klipper y reinicia los MCUs.",restart_klipper:"Reinicia el servicio de sistema de Klipper."}},printer:{state:{busy:"Ocupada",cancelled:"Cancelado",complete:"Completado",idle:"Inactiva",loading:"Cargando",paused:"Pausada",printing:"Imprimiendo",ready:"Lista",standby:"Stand-by"}},setting:{btn:{add_camera:"Añadir cámara",add_thermal_preset:"Añadir preajuste",add_user:"Añadir usuario",reset:"Resetear",select_theme:"Seleccionar tema"},camera_type_options:{mjpegadaptive:"MJPEG Adaptative",mjpegstream:"MJPEG Stream",video:"Cámara IP"},label:{all_off:"Apagar todo",all_on:"Encender todo",axes:"Ejes",camera_flip_x:"Voltear horizontalmente",camera_flip_y:"Voltear verticalmente",camera_stream_type:"Tipo de stream",camera_url:"URL de la cámara",confirm_on_estop:"Requerir confirmación para la Parada de Emergencia",confirm_on_power_device_change:"Requiere confirmar cambios de alimentación",dark_mode:"Modo oscuro",default_extrude_length:"Longitud de extrusión por defecto",default_extrude_speed:"Velocidad de extrusión por defecto",default_toolhead_move_length:"Longitud de movimiento por defecto del cabezal",default_toolhead_xy_speed:"Velocidad XY por defecto del cabezal",default_toolhead_z_speed:"Velocidad Z por defecto del cabezal",draw_background:"Dibujar fondo",enable:"Activar",enable_notifications:"Activar notificaciones",extrusion_line_width:"Ancho de línea de la extrusión",flip_horizontal:"Volteo horizontal",flip_vertical:"Volteo vertical",fps_target:"Objetivo de FPS",gcode_coords:"Usar Coordenadas GCode",invert_x_control:"Invertir control X",invert_y_control:"Invertir control Y",invert_z_control:"Invertir control Z",language:"Idioma",max:"Máximo",metrics:"Métricas",min:"Mínimo",move_line_width:"Ancho de línea del movimiento",name:"Nombre",none:"Ninguno",optional:"Opcional",primary_color:"Color principal",printer_name:"Nombre de la impresora",reset:"Restablecer opciones",retraction_icon_size:"Tamaño del icono de retracción",show_animations:"Mostrar animaciones",show_bed_screws_adjust_dialog_automatically:"Mostrar diálogo de ajuste de tornillos de cama automáticamente",show_rate_of_change:"Mostrar tasa de cambio de temperatura",solid:"Sólido",starts_with:"Comienza con",theme_preset:"Preajustes de la comunidad",thermal_preset_gcode:"GCode",thermal_preset_name:"Nombre del preajuste",title:"Título",toolhead_move_distances:"Valores de distancia de la herramienta",type:"Tipo",unit:"Unidad",z_adjust_values:"Valores de ajuste de Z"},timer_options:{duration:"Solo duración",filament:"Estimación por filamento",file:"Estimación por archivo",slicer:"Slicer"},title:{authentication:"Autentificación",camera:"Cámara | Cámaras",console:"Consola",file_editor:"Editor de Archivos",gcode_preview:"Previsualización de Gcode",general:"General",macros:"Macros",theme:"Tema",thermal_presets:"Preajustes térmicos",tool:"Herramienta"},tooltip:{gcode_coords:"Usar la posición del GCode en lugar de la posición del cabezal en el tablero"}},socket:{msg:{connecting:"Conectando con Moonraker...",no_connection:"No hay conexión con Moonraker. Compruebe el estado de Moonraker y/o actualice la página."}},system_info:{label:{capacity:"Capacidad",cpu_desc:"Descripción de la CPU",distribution_codename:"Nombre clave",distribution_like:"Distribución basada en",distribution_name:"Distribución",frequency:"Frecuencia",hardware_desc:"Descripción de hardware",hostname:"Nombre del anfitrión",klipper_load:"Carga de Klipper",manufactured:"Fabricado",manufacturer:"Fabricante",mcu_awake:"Tiempo despierto del {mcu}",mcu_bandwidth:"Ancho de banda del {mcu}",mcu_load:"Carga del {mcu}",model:"Modelo de CPU",moonraker_load:"Carga de Moonraker",processor_desc:"Procesador",product_name:"Nombre de producto",serial_number:"Número de serie",system_load:"Carga del sistema",system_memory:"Memoria del sistema",system_utilization:"Utilización del sistema",total_memory:"Memoria total"}},tool:{btn:{home_all:"Todos",home_x:"X",home_y:"Y"},title:{bed_screws_adjust:"Ajustar tornillos de la cama"},tooltip:{absolute_positioning:"Posicionamiento Absoluto",bed_screws_adjust:"BED_SCREWS_ADJUST",extruder_disabled:"Extrusor deshabilidado, por debajo de min_extrude_temp (%{min}<small>°C</small>)",force_move:"FORCE_MOVE",home_xy:"Origen XY",home_z:"Origen Z",motors_off:"APAGAR MOTORES",relative_positioning:"Posicionamiento Relativo",screws_tilt_calculate:"Screws_Tilt_Calculate",z_tilt_adjust:"Z_Tilt_Adjust"}},version:{btn:{check_for_updates:"Buscar actualizaciones",finish:"Terminar",update:"Actualizar",update_all:"Actualizar todo",view_versions:"Ver versiones"},label:{commit_history:"Historial de commits",dirty:"SUCIO",invalid:"NO VÁLIDO",os_packages:"Paquetes del SO",package_list:"Lista de paquetes",up_to_date:"ACTUALIZADO",updates_available:"Hay actualizaciones disponibles"},status:{finished:"Atualizaciones terminadas",updating:"Actualizando..."},title:"Actualizaciones de software",tooltip:{commit_history:"Historial de commits",dirty:"avisa del estado 'detached head', no sobre 'master' o con origen no válido",invalid:"indica cambios locales a la repo",packages:"Paquetes",release_notes:"Notas de lanzamiento"}}}};export{e as default};
