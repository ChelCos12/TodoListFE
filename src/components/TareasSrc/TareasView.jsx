import TareaCreate from './TareaCreate';

function TareasView({
  tareas,
  categorias,
  etiquetas,
  showCreateForm,
  formData,
  onToggleCreate,
  onInputChange,
  onEtiquetasChange,
  onCreate,
  onToggle,
}) {
  return (
    <div>
      <h1>Tareas</h1>

      <button onClick={onToggleCreate} style={{ marginBottom: '20px' }}>
        {showCreateForm ? 'Cancelar' : '+ Nueva Tarea'}
      </button>

      {showCreateForm && (
        <TareaCreate
          formData={formData}
          categorias={categorias}
          etiquetas={etiquetas}
          onInputChange={onInputChange}
          onEtiquetasChange={onEtiquetasChange}
          onCreate={onCreate}
          onCancel={onToggleCreate}
        />
      )}

      <table border="1" cellPadding="10" style={{ width: '100%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Etiquetas</th>
            <th>Completada</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tareas.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ textAlign: 'center' }}>
                No hay tareas registradas
              </td>
            </tr>
          ) : (
            tareas.map((tarea) => (
              <tr key={tarea.id}>
                <td>{tarea.id}</td>
                <td>{tarea.titulo}</td>
                <td>{tarea.descripcion}</td>
                <td>
                  {tarea.categoria ? (
                    <span
                      style={{
                        backgroundColor: tarea.categoria.color,
                        padding: '3px 8px',
                        borderRadius: '3px',
                        color: 'white',
                        fontSize: '12px'
                      }}
                    >
                      {tarea.categoria.nombre}
                    </span>
                  ) : (
                    'Sin categoría'
                  )}
                </td>
                <td>
                  {tarea.etiquetas && tarea.etiquetas.length > 0 ? (
                    tarea.etiquetas.map((etiqueta) => (
                      <span
                        key={etiqueta.id}
                        style={{
                          backgroundColor: etiqueta.color,
                          padding: '2px 6px',
                          borderRadius: '3px',
                          color: 'white',
                          fontSize: '11px',
                          marginRight: '3px'
                        }}
                      >
                        {etiqueta.nombre}
                      </span>
                    ))
                  ) : (
                    'Sin etiquetas'
                  )}
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={tarea.completada}
                    onChange={() => onToggle(tarea.id)}  // ← Quitar disabled y agregar onChange
                    style={{ cursor: 'pointer' }}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TareasView;