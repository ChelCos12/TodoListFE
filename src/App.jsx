import { useEffect, useState } from 'react';
import tareaService from './services/tarea.service';

function App() {
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTareas = async () => {
      try {
        setLoading(true);
        const response = await tareaService.getAll();
        
        console.log('Respuesta de la API:', response);
        console.log('Tareas:', response.data);
        
        setTareas(response.data);
        setError(null);
      } catch (err) {
        console.error('Error al cargar tareas:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTareas();
  }, []);

  return (
      <h1>Testing Tareas</h1>
  );
}

export default App;