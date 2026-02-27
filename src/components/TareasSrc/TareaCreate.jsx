function TareaCreate({ 
  formData, 
  categorias, 
  etiquetas, 
  onInputChange, 
  onEtiquetasChange, 
  onCreate, 
  onCancel 
}) {
  return (
    <form 
      onSubmit={onCreate} 
      style={{
        border: '1px solid #ccc',
        padding: '20px',
        marginBottom: '20px',
        borderRadius: '5px',
        backgroundColor: '#090606'
      }}
    >
      <h3>Crear Nueva Tarea</h3>

      <div style={{ marginBottom: '15px' }}>
        <label>
          Título: <span style={{ color: 'red' }}>*</span>
          <br />
          <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={onInputChange}
            required
            placeholder="Escribe el título de la tarea"
            style={{ width: '100%', padding: '8px', fontSize: '14px' }}
          />
        </label>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>
          Descripción:
          <br />
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={onInputChange}
            rows="4"
            placeholder="Escribe una descripción (opcional)"
            style={{ width: '100%', padding: '8px', fontSize: '14px' }}
          />
        </label>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>
          Categoría: <span style={{ color: 'red' }}>*</span>
          <br />
          <select
            name="categoria_id"
            value={formData.categoria_id}
            onChange={onInputChange}
            required
            style={{ width: '100%', padding: '8px', fontSize: '14px' }}
          >
            <option value="">-- Seleccionar categoría --</option>
            {categorias.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.nombre}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>
          <br />
          <select
            multiple
            value={formData.etiquetas}
            onChange={onEtiquetasChange}
            style={{ 
              width: '100%', 
              padding: '8px', 
              fontSize: '14px',
              height: '120px' 
            }}
          >
            {etiquetas.map((etiqueta) => (
              <option key={etiqueta.id} value={etiqueta.id}>
                {etiqueta.nombre}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <button 
          type="submit" 
          style={{ 
            marginRight: '10px',
            padding: '10px 20px',
            backgroundColor: '#2ecc71',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Guardar Tarea
        </button>
        <button 
          type="button" 
          onClick={onCancel}
          style={{
            padding: '10px 20px',
            backgroundColor: '#95a5a6',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default TareaCreate;