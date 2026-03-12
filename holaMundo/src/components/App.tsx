import { Card } from './Card';
import { odsAlumnos } from '../data/Ods';
import '../App.css';

function App() {
  return (
    <div className="container">
      <h1>ODS Favoritos de los Alumnos</h1>

      <div className="grid">
        {odsAlumnos.map((itemOds) => (
          <Card key={itemOds.id} itemOds={itemOds} />
        ))}
      </div>

    </div>
  );
}

export default App;