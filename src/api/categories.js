import { fetchWithAuth } from "./config";

export const getAllCategories = () =>
  fetchWithAuth("/api/categories");

export const getCategoryById = (id) =>
  fetchWithAuth(`/api/categories/${id}`);

export const createCategory = (data) =>
  fetchWithAuth("/api/categories", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const updateCategory = (id, data) =>
  fetchWithAuth(`/api/categories/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

export const deleteCategory = (id) =>
  fetchWithAuth(`/api/categories/${id}`, {
    method: "DELETE",
  });
