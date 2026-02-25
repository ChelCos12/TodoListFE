import { useState, useEffect } from 'react';
import categoriaService from '../services/categoria.service';
import CategoriasView from './CategoriasSrc/CategoriasView';

const EMPTY_FORM = { nombre: '', color: '#3498db' };

function Categorias() {
  const [categorias, setCategorias] = useState([]);
  const [activeView, setActiveView] = useState(null);
  const [selectedCategoria, setSelectedCategoria] = useState(null);
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

  
  const handleCloseView = () => {
    setActiveView(null);
    setSelectedCategoria(null);
    setFormData(EMPTY_FORM);
  };

  const handleToggleCreate = () => {
    activeView === 'create' ? handleCloseView() : setActiveView('create');
  };

  const handleSelectEdit = (categoria) => {
    setSelectedCategoria(categoria);
    setFormData({ nombre: categoria.nombre, color: categoria.color });
    setActiveView('edit');
  };

  const handleSelectDelete = (categoria) => {
    setSelectedCategoria(categoria);
    setActiveView('delete');
  };

  const handleSelectDetail = (categoria) => {
    setSelectedCategoria(categoria);
    setActiveView('detail');
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    await categoriaService.create(formData);
    handleCloseView();
    fetchCategorias();
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    await categoriaService.update(selectedCategoria.id, formData);
    handleCloseView();
    fetchCategorias();
  };

  const handleDelete = async () => {
    await categoriaService.delete(selectedCategoria.id);
    handleCloseView();
    fetchCategorias();
  };

  return (
    <CategoriasView
      categorias={categorias}
      activeView={activeView}
      formData={formData}
      selectedCategoria={selectedCategoria}
      onToggleCreate={handleToggleCreate}
      onInputChange={handleInputChange}
      onCreate={handleCreate}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onSelectEdit={handleSelectEdit}
      onSelectDelete={handleSelectDelete}
      onSelectDetail={handleSelectDetail}
      onCloseView={handleCloseView}
    />
  );
}

export default Categorias;