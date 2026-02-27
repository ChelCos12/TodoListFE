import styles from './Categorias.module.css';

function CategoriaCreate({ formData, onInputChange, onCreate, onCancel }) {
  return (
    <form className={styles.form} onSubmit={onCreate}>
      <h3>Crear Nueva Categoría</h3>

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
      <button type="submit">Guardar</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
}

export default CategoriaCreate;