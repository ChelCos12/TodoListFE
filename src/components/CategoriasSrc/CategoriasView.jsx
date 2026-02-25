import styles from './Categorias.module.css';
import CategoriaCreate from './CategoriaCreate';

function CategoriasView({
  categorias,
  showCreate,
  formData,
  onToggleCreate,
  onInputChange,
  onCreate,
}) {
  if (showCreate) {
    return <CategoriaCreate formData={formData} onInputChange={onInputChange} onCreate={onCreate} onCancel={onToggleCreate} />;
  }

  return (
    <div>
      <h1>Categorías</h1>

      <button onClick={onToggleCreate}>+ Nueva Categoría</button>

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
          {categorias.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>No hay categorías registradas</td>
            </tr>
          ) : (
            categorias.map((categoria) => (
              <tr key={categoria.id}>
                <td>{categoria.id}</td>
                <td>{categoria.nombre}</td>
                <td>
                  <span style={{ backgroundColor: categoria.color, padding: '5px 10px', borderRadius: '5px', color: 'white' }}>
                    {categoria.color}
                  </span>
                </td>
                <td>
                  <button onClick={() => onSelectCategoria(categoria, 'detail')}>Ver</button>
                  <button onClick={() => onSelectCategoria(categoria, 'edit')}>Editar</button>
                  <button onClick={() => onSelectCategoria(categoria, 'delete')}>Eliminar</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CategoriasView;