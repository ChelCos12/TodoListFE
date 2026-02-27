import styles from './Etiquetas.module.css';

function EtiquetaDetail({ etiqueta, onClose }) {
  return (
    <div className={styles.form}>
      <h3>Detalle de Categoría</h3>
      <p><strong>ID:</strong> {etiqueta?.id}</p>
      <p><strong>Nombre:</strong> {etiqueta?.nombre}</p>
      <p>
        <strong>Color:</strong>{' '}
        <span style={{ backgroundColor: etiqueta?.color, padding: '3px 10px', borderRadius: '5px', color: 'white' }}>
          {etiqueta?.color}
        </span>
      </p>
      <br />
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
}

export default EtiquetaDetail;