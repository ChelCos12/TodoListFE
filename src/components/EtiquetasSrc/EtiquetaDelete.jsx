import styles from './Etiquetas.module.css';

function EtiquetaDelete({ etiqueta, onDelete, onCancel }) {
  return (
    <div className={styles.form}>
      <h3>Eliminar Etiqueta</h3>
      <p>¿Estás seguro que deseas eliminar <strong>{etiqueta?.nombre}</strong>?</p>
      <button onClick={onDelete}>Sí, eliminar</button>
      <button onClick={onCancel}>Cancelar</button>
    </div>
  );
}

export default EtiquetaDelete;