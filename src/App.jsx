import { useEffect, useState } from 'react';
import tareaService from './services/tarea.service';
import Categorias from './components/Categorias';
import Etiquetas from './components/Etiquetas';
import  './App.css';

function App() {
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTareas = async () => {
        setLoading(true);
        const response = await tareaService.getAll();
        
        setTareas(response.data);
        setError(null);
    };

    fetchTareas();
  }, []);

  return (
    <>
      <div className="App"><Categorias/></div>
      <div className="App"><Etiquetas/></div>
      </>
  );
}

export default App;