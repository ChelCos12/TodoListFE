import { useState, useEffect } from 'react';
import TareasView from './TareasSrc/TareasView';
import { getAll, create, toggle} from '../services/tarea.service';
import { getAll as getAllCategorias } from '../services/categoria.service';
import { getAll as getAllEtiquetas } from '../services/etiqueta.service';

const EMPTY_FORM = { 
  titulo: '', 
  descripcion: '', 
  categoria_id: '', 
  etiquetas: [] 
};

function Tareas() {
  const [tareas, setTareas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [etiquetas, setEtiquetas] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);

  const fetchTareas = async () => {
    const response = await getAll();
    setTareas(response.data);
  };

  const fetchCategorias = async () => {
    const response = await getAllCategorias();
    setCategorias(response.data);
  };

  const fetchEtiquetas = async () => {
    const response = await getAllEtiquetas();
    setEtiquetas(response.data);
  };

  useEffect(() => {
    fetchTareas();
    fetchCategorias();
    fetchEtiquetas();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEtiquetasChange = (e) => {
    const options = e.target.options;
    const selectedIds = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedIds.push(parseInt(options[i].value));
      }
    }
    setFormData({ ...formData, etiquetas: selectedIds });
  };

  const handleToggleCreate = () => {
    setShowCreateForm(!showCreateForm);
    if (showCreateForm) {
      setFormData(EMPTY_FORM);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    await create(formData);
    setFormData(EMPTY_FORM);
    setShowCreateForm(false);
    fetchTareas();
  };

  const handleToggle = async (tareaId) => {
    await toggle(tareaId);
    fetchTareas(); // Recargar las tareas para ver el cambio
  };

  return (
    <TareasView
      tareas={tareas}
      categorias={categorias}
      etiquetas={etiquetas}
      showCreateForm={showCreateForm}
      formData={formData}
      onToggleCreate={handleToggleCreate}
      onInputChange={handleInputChange}
      onEtiquetasChange={handleEtiquetasChange}
      onCreate={handleCreate}
      onToggle={handleToggle} 
    />
  );
}

export default Tareas;