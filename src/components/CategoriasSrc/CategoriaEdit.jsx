import styles from './Categorias.module.css';

function CategoriaEdit({ formData, onInputChange, onEdit, onCancel }) {
  return (
    <form className={styles.form} onSubmit={onEdit}>
      <h3>Editar Categoría</h3>

      <div>
        <label>Nombre: <span style={{ color: 'red' }}>*</span></label>
        <br />
        <input type="text" name="nombre" value={formData.nombre} onChange={onInputChange} required />
      </div>

      <div>
        <label>Color:</label>
        <br />
        <input type="color" name="color" value={formData.color} onChange={onInputChange} />
        <span> {formData.color}</span>
      </div>

      <br />
      <button type="submit">Actualizar</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
}

export default CategoriaEdit;