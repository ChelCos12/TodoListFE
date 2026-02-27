const API_BASE_URL = 'http://localhost:8000/api';
const TOKEN = '5|7KnvfaVgerJP3ctjciSsD1NGKPCywQl6pnxMroPE0af9d9ea';
const getHeaders = () => ({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': `Bearer ${TOKEN}`
});

export const getAll = async () => {
  const response = await fetch(`${API_BASE_URL}/categorias`, {
    method: "GET",
    headers: getHeaders(),
  });

  const data = await response.json();
  return data;
};

export const getOne = async () => {
  const response = await fetch(`${API_BASE_URL}/categorias/${id}`, {
    method: "GET",
    headers: getHeaders(),
  });

  const data = await response.json();
  return data;
};

export const create = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/categorias`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(formData),
  });

  const data = await response.json();
  return data;
};

export const update = async (id, formData) => {
const response = await fetch(`${API_BASE_URL}/categorias/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    return data;
};

export const remove = async (id, formData) => {
const response = await fetch(`${API_BASE_URL}/categorias/${id}`, {
      method: 'DELETE',
      headers: getHeaders(),
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    return data;
};

