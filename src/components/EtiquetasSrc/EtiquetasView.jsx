import styles from './Etiquetas.module.css';
import EtiquetaCreate from './EtiquetaCreate';
import EtiquetaEdit from './EtiquetaEdit';
import EtiquetaDelete from './EtiquetaDelete';
import EtiquetaDetail from './EtiquetaDetail';

function EtiquetasView({
  etiquetas,
  activeView,
  formData,
  selectedEtiqueta,
  onToggleCreate,
  onInputChange,
  onCreate,
  onEdit,
  onDelete,
  onSelectEdit,
  onSelectDelete,
  onSelectDetail,
  onCloseView,
}) {
  switch (activeView) {
    case 'create':
      return <EtiquetaCreate formData={formData} onInputChange={onInputChange} onCreate={onCreate} onCancel={onCloseView} />;
    case 'edit':
      return <EtiquetaEdit formData={formData} onInputChange={onInputChange} onEdit={onEdit} onCancel={onCloseView} />;
    case 'delete':
      return <EtiquetaDelete onDelete={onDelete} onCancel={onCloseView} />;
    case 'detail':
      return <EtiquetaDetail etiqueta={selectedEtiqueta} onClose={onCloseView} />;
      default:
      return (
    <div>
      <h1>Etiquetas</h1>

      <button onClick={onToggleCreate}>+ Nueva Etiqueta</button>

      <table border="1" cellPadding="10" className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Color</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {etiquetas.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>No hay etiquetas registradas</td>
            </tr>
          ) : (
            etiquetas.map((etiqueta) => (
              <tr key={etiqueta.id}>
                <td>{etiqueta.id}</td>
                <td>{etiqueta.nombre}</td>
                <td>
                  <span style={{ backgroundColor: etiqueta.color, padding: '5px 10px', borderRadius: '5px', color: 'white' }}>
                    {etiqueta.color}
                  </span>
                </td>
                <td>
                  <button onClick={() => onSelectDetail(etiqueta)}>Ver</button>
                  <button onClick={() => onSelectEdit(etiqueta)}>Editar</button>
                  <button onClick={() => onSelectDelete(etiqueta)}>Eliminar</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
  }
}

export default EtiquetasView;