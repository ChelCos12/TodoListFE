const API_BASE_URL = 'http://localhost:8000/api';

const tareaService = {
  getAll: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/tareas`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();
      return data; 
    } catch (error) {
      console.error('Error al obtener tareas:', error);
      throw error;
    }
  },

  create: async (tarea) => {
  },

  update: async (id, tarea) => {
  },

  delete: async (id) => {
  },

  getOne: async (id) => {
  },

  toggle: async (id) => {
  }
};

export default tareaService;