import styles from './Categorias.module.css';

function CategoriaDetail({ categoria, onClose }) {
  return (
    <div className={styles.form}>
      <h3>Detalle de Categoría</h3>
      <p><strong>ID:</strong> {categoria?.id}</p>
      <p><strong>Nombre:</strong> {categoria?.nombre}</p>
      <p>
        <strong>Color:</strong>{' '}
        <span style={{ backgroundColor: categoria?.color, padding: '3px 10px', borderRadius: '5px', color: 'white' }}>
          {categoria?.color}
        </span>
      </p>
      <br />
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
}

export default CategoriaDetail;