export type EstadoOds = 'Aprobado' | 'Ejecucion' | 'Completado' | 'Rechazado';

export interface InterfazSostenible {
    id: number;
    odsFav: string;
    estado: EstadoOds;
}

export const odsAlumnos: InterfazSostenible[] = [
    { id: 1, odsFav: 'Fin de la pobreza', estado: 'Aprobado' },
    { id: 2, odsFav: 'Hambre cero', estado: 'Ejecucion' },
    { id: 3, odsFav: 'Salud y bienestar', estado: 'Completado' },
    { id: 4, odsFav: 'Educación de calidad', estado: 'Aprobado' },
    { id: 5, odsFav: 'Igualdad de género', estado: 'Ejecucion' },
    { id: 6, odsFav: 'Agua limpia y saneamiento', estado: 'Completado' },
    { id: 7, odsFav: 'Energía asequible y no contaminante', estado: 'Aprobado' },
    { id: 8, odsFav: 'Trabajo decente y crecimiento económico', estado: 'Ejecucion' },
    { id: 9, odsFav: 'Industria, innovación e infraestructura', estado: 'Aprobado' },
    { id: 10, odsFav: 'Reducción de las desigualdades', estado: 'Rechazado' },
    { id: 11, odsFav: 'Ciudades y comunidades sostenibles', estado: 'Completado' },
    { id: 12, odsFav: 'Producción y consumo responsables', estado: 'Ejecucion' }
];