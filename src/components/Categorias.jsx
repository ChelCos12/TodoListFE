import { useState, useEffect } from 'react';

import CategoriasView from './CategoriasSrc/CategoriasView';
import { getAll , create} from '../services/categoria.service';

const EMPTY_FORM = { nombre: '', color: '#3498db' };

function Categorias() {
  const [categorias, setCategorias] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);

  const fetchCategorias = async () => {
      const response = await getAll();
      setCategorias(response.data);
  };

  useEffect(() => {
    fetchCategorias();
  }, []);

  
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
    await create(formData);
    setShowCreate(false);
    setFormData(EMPTY_FORM);
    fetchCategorias();
  };

  return (
    <div className="categorias-container">
      
      
    <CategoriasView
      categorias={categorias}
      showCreate={showCreate}
      formData={formData}
      onToggleCreate={handleToggleCreate}
      onInputChange={handleInputChange}
      onCreate={handleCreate}
    />
    </div>

  );
}

export default Categorias;