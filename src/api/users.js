import { fetchWithAuth } from "./config";

export const getUserById = (id) =>
  fetchWithAuth(`/api/users/${id}`);

export const updateUser = (id, data) =>
  fetchWithAuth(`/api/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

export const deleteUser = (id) =>
  fetchWithAuth(`/api/users/${id}`, {
    method: "DELETE",
  });
