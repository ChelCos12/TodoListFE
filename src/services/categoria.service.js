const API_BASE_URL = 'http://localhost:8000/api';
const TOKEN = '5|7KnvfaVgerJP3ctjciSsD1NGKPCywQl6pnxMroPE0af9d9ea';
const getHeaders = () => ({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': `Bearer ${TOKEN}`
});

const categoriaService = {
  getAll: async () => {
      const response = await fetch(`${API_BASE_URL}/categorias`, {
        method: 'GET',
        headers: getHeaders()
      });
      const data = await response.json();
      return data;
  },

  getOne: async (id) => {
      const response = await fetch(`${API_BASE_URL}/categorias/${id}`, {
        method: 'GET',
        headers: getHeaders()
      });
      const data = await response.json();
      return data;
  },

  create: async (categoria) => {
      const response = await fetch(`${API_BASE_URL}/categorias`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(categoria)
      });


      const data = await response.json();
      return data;
  },

  update: async (id, categoria) => {
      const response = await fetch(`${API_BASE_URL}/categorias/${id}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(categoria)
      });

      const data = await response.json();
      return data;
  },

  delete: async (id) => {
      const response = await fetch(`${API_BASE_URL}/categorias/${id}`, {
        method: 'DELETE',
        headers: getHeaders()
      });

      const data = await response.json();
      return data;
  }
};

export default categoriaService;