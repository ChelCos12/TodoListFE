const API_BASE_URL = 'http://localhost:8000/api';

const tareaService = {
  getAll: async () => {
      const response = await fetch(`${API_BASE_URL}/tareas`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      const data = await response.json();
      return data; 
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