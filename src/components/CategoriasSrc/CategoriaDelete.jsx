import styles from './Categorias.module.css';

function CategoriaDelete({ categoria, onDelete, onCancel }) {
  return (
    <div className={styles.form}>
      <h3>Eliminar Categoría</h3>
      <p>¿Estás seguro que deseas eliminar <strong>{categoria?.nombre}</strong>?</p>
      <button onClick={onDelete}>Sí, eliminar</button>
      <button onClick={onCancel}>Cancelar</button>
    </div>
  );
}

export default CategoriaDelete;