import { fetchWithAuth, API_BASE_URL } from "./config";

export const getUserById = (id) =>
  fetchWithAuth(`/users/${id}`);

export const updateUser = (id, data) => {
  return fetch(`${API_BASE_URL}/api/users/${id}`, {
    method: 'PUT',
    body: data, 
    headers: data instanceof FormData ? { Authorization: `Bearer ${localStorage.getItem('token')}` } : { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` }
  }).then(res => res.json());
};

export const deleteUser = (id) =>
  fetchWithAuth(`/users/${id}`, {
    method: "DELETE",
  });
