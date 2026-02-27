import Tareas from './components/Tareas';
import Categorias from './components/Categorias';
import Etiquetas from './components/Etiquetas';
import './App.css';

function App() {
  return (
    <div className="App">
      <Tareas />
      <Categorias />
      <Etiquetas />
    </div>
  );
}

export default App;