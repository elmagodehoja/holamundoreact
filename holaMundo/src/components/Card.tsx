import type { InterfazSostenible } from '../data/Ods';

export const Card = ({ itemOds }: { itemOds: InterfazSostenible }) => {

    const coloresODS: Record<string,string> = {
        'Fin de la pobreza': '#E5243B',
        'Hambre cero': '#DDA63A',
        'Salud y bienestar': '#4C9F38',
        'Educación de calidad': '#C5192D',
        'Igualdad de género': '#FF3A21',
        'Agua limpia y saneamiento': '#26BDE2',
        'Energía asequible y no contaminante': '#FCC30B',
        'Trabajo decente y crecimiento económico': '#A21942',
        'Industria, innovación e infraestructura': '#FD6925',
        'Reducción de las desigualdades': '#DD1367',
        'Ciudades y comunidades sostenibles': '#FD9D24',
        'Producción y consumo responsables': '#BF8B2E'
    };

    const colorODS = coloresODS[itemOds.odsFav] || '#6366f1';

    const cardStyle: React.CSSProperties = {
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        padding: '22px',
        width: '260px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
        borderTop: `6px solid ${colorODS}`,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        transition: 'all 0.2s ease',
        cursor: 'pointer'
    };

    const idStyle: React.CSSProperties = {
        fontSize: '12px',
        color: '#94a3b8',
        margin: 0
    };

    const odsStyle: React.CSSProperties = {
        fontSize: '18px',
        fontWeight: '700',
        margin: 0,
        color: colorODS
    };

    const estadoStyle: React.CSSProperties = {
        fontSize: '13px',
        fontWeight: '600',
        padding: '6px 12px',
        borderRadius: '20px',
        width: 'fit-content',
        backgroundColor: '#f1f5f9'
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <h3 style={idStyle}>Alumno #{itemOds.id}</h3>
            <p style={odsStyle}>{itemOds.odsFav}</p>
            <div style={estadoStyle}>{itemOds.estado}</div>
        </div>
    );
};