import { useState, useEffect } from 'react';
import { getAll } from '../services/categoria.service';

function Categorias() {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCategorias = async () => {
      setLoading(true);
      const response = await getAll();
      setCategorias(response.data);
      setError(null);
  };

  useEffect(() => {
    fetchCategorias();
  }, []);

  return (
    <div className="categorias-container">
      <h1>Categorías</h1>
      
      <table border="1" cellPadding="10" style={{ width: '100%', marginTop: '20px' }}>
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
              <td colSpan="4" style={{ textAlign: 'center' }}>
                No hay categorías
              </td>
            </tr>
          ) : (
            categorias.map((categoria) => (
              <tr key={categoria.id}>
                <td>{categoria.id}</td>
                <td>{categoria.nombre}</td>
                <td>
                  <span
                    style={{
                      backgroundColor: categoria.color,
                      padding: '5px 10px',
                      borderRadius: '5px',
                      color: 'white'
                    }}
                  >
                    {categoria.color}
                  </span>
                </td>
                <td>
                  <button>Ver</button>
                  <button>Editar</button>
                  <button>Eliminar</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Categorias;