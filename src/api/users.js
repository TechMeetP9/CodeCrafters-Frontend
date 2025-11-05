import { fetchWithAuth } from "./config";

export const getUserById = (id) =>
  fetchWithAuth(`/users/${id}`);

export const updateUser = (id, data) =>
  fetchWithAuth(`/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

export const deleteUser = (id) =>
  fetchWithAuth(`/users/${id}`, {
    method: "DELETE",
  });
