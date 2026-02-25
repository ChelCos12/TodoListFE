import { useState, useEffect } from 'react';
import categoriaService from '../services/categoria.service';
import CategoriasView from './CategoriasSrc/CategoriasView';

const EMPTY_FORM = { nombre: '', color: '#3498db' };

function Categorias() {
  const [categorias, setCategorias] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);

  useEffect(() => {
    fetchCategorias();
  }, []);

  const fetchCategorias = async () => {
    const response = await categoriaService.getAll();
    setCategorias(response.data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleToggleCreate = () => {
    setShowCreate(!showCreate);
    setFormData(EMPTY_FORM);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    await categoriaService.create(formData);
    setShowCreate(false);
    setFormData(EMPTY_FORM);
    fetchCategorias();
  };

  return (
    <CategoriasView
      categorias={categorias}
      showCreate={showCreate}
      formData={formData}
      onToggleCreate={handleToggleCreate}
      onInputChange={handleInputChange}
      onCreate={handleCreate}
    />
  );
}

export default Categorias;