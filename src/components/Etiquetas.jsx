import { useState, useEffect } from 'react';
import EtiquetasView from './EtiquetasSrc/EtiquetasView';
import { getAll , create, update, remove} from '../services/etiqueta.service';

const EMPTY_FORM = { nombre: '', color: '#3498db' };

function Etiquetas() {
  const [etiquetas, setEtiquetas] = useState([]);
  const [activeView, setActiveView] = useState(null);
  const [selectedEtiqueta, setSelectedEtiqueta] = useState(null);
  const [formData, setFormData] = useState(EMPTY_FORM);

  const fetchEtiquetas = async () => {
      const response = await getAll();
      setEtiquetas(response.data);
  };

  useEffect(() => {
    fetchEtiquetas();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleCloseView = () => {
    setActiveView(null);
    setSelectedEtiqueta(null);
    setFormData(EMPTY_FORM);
  };

  const handleToggleCreate = () => {
    activeView === 'create' ? handleCloseView() : setActiveView('create');
  };

  const handleSelectEdit = (etiqueta) => {
    setSelectedEtiqueta(etiqueta);
    setFormData({ nombre: etiqueta.nombre, color: etiqueta.color });
    setActiveView('edit');
  };

  const handleSelectDelete = (etiqueta) => {
    setSelectedEtiqueta(etiqueta);
    setActiveView('delete');
  };

  const handleSelectDetail = (etiqueta) => {
    setSelectedEtiqueta(etiqueta);
    setActiveView('detail');
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    await create(formData);
    handleCloseView();
    fetchEtiquetas();
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    await update(selectedEtiqueta.id, formData);
    handleCloseView();
    fetchEtiquetas();
  };

  const handleDelete = async () => {
    await remove(selectedEtiqueta.id);
    handleCloseView();
    fetchEtiquetas();
  };

  return (
    <EtiquetasView
      etiquetas={etiquetas}
      activeView={activeView}
      formData={formData}
      selectedEtiqueta={selectedEtiqueta}
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

export default Etiquetas;