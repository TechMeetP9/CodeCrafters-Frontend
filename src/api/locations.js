import { fetchWithAuth } from "./config";

export const getAllLocations = () =>
  fetchWithAuth("/api/locations");

export const createLocation = (data) =>
  fetchWithAuth("/api/locations", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const deleteLocation = (id) =>
  fetchWithAuth(`/api/locations/${id}`, {
    method: "DELETE",
  });
