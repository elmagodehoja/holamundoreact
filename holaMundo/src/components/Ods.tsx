function Ods(){

    enum listaODS {
    ODS1 = "FIN_DE_LA_POBREZA",
    ODS2 = "HAMBRE_CERO",
    ODS3 = "SALUD_Y_BIENESTAR",
    ODS4 = "EDUCACION_DE_CALIDAD",
    ODS5 = "IGUALDAD_DE_GENERO",
    ODS6 = "AGUA_LIMPIA_Y_SANEAMIENTO",
    ODS7 = "ENERGIA_ASEQUIBLE_Y_NO_CONTAMINANTE",
    ODS13 = "ACCION_POR_EL_CLIMA"
}

type EstadoOds = 'Aprobado' | 'Ejecucion' | 'Completado' | 'Rechazado';

    interface interfazSostenible{
        id: number;
        ods_fav: listaODS;
        estado: EstadoOds;
    }

    const odsAlumnos: interfazSostenible[] = [{
        id:1,
        ods_fav: listaODS.ODS4,
        estado: 'Rechazado'
        }
    ];

    let ods_fav = listaODS.ODS4;

    function filtrarProyectosClimaticos(
        ods: interfazSostenible[],
    ): interfazSostenible[] {
        return ods.filter((o) => o.estado === 'Ejecucion');
    }

    const resultadoJson = filtrarProyectosClimaticos(odsAlumnos);
    console.log(resultadoJson);
    return <h1>{JSON.stringify(resultadoJson, null, 2)}</h1>
}

export default Ods;