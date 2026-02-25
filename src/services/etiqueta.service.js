const API_BASE_URL = 'http://localhost:8000/api';
const TOKEN = '5|7KnvfaVgerJP3ctjciSsD1NGKPCywQl6pnxMroPE0af9d9ea';
const getHeaders = () => ({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': `Bearer ${TOKEN}`
});

const etiquetaService = {
  getAll: async () => {
      const response = await fetch(`${API_BASE_URL}/etiquetas`, {
        method: 'GET',
        headers: getHeaders()
      });
      const data = await response.json();
      return data;
  },

  getOne: async (id) => {
      const response = await fetch(`${API_BASE_URL}/etiquetas/${id}`, {
        method: 'GET',
        headers: getHeaders()
      });
      const data = await response.json();
      return data;
  },

  create: async (etiqueta) => {
      const response = await fetch(`${API_BASE_URL}/etiquetas`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(etiqueta)
      });


      const data = await response.json();
      return data;
  },

  update: async (id, etiqueta) => {
      const response = await fetch(`${API_BASE_URL}/etiquetas/${id}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(etiqueta)
      });

      const data = await response.json();
      return data;
  },

  delete: async (id) => {
      const response = await fetch(`${API_BASE_URL}/etiquetas/${id}`, {
        method: 'DELETE',
        headers: getHeaders()
      });

      const data = await response.json();
      return data;
  }
};

export default etiquetaService;