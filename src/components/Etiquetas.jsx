import { useState, useEffect } from 'react';
import etiquetaService from '../services/etiqueta.service';
import EtiquetasView from './EtiquetasSrc/EtiquetasView';

const EMPTY_FORM = { nombre: '', color: '#3498db' };

function etiquetas() {
  const [etiquetas, setEtiquetas] = useState([]);
  const [activeView, setActiveView] = useState(null);
  const [selectedEtiqueta, setSelectedEtiqueta] = useState(null);
  const [formData, setFormData] = useState(EMPTY_FORM);

  useEffect(() => {
    fetchEtiquetas();
  }, []);

  const fetchEtiquetas = async () => {
    const response = await etiquetaService.getAll();
    setEtiquetas(response.data);
  };

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
    await etiquetaService.create(formData);
    handleCloseView();
    fetchEtiquetas();
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    await etiquetaService.update(selectedEtiqueta.id, formData);
    handleCloseView();
    fetchEtiquetas();
  };

  const handleDelete = async () => {
    await etiquetaService.delete(selectedEtiqueta.id);
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

export default etiquetas;