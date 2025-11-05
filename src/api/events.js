import { fetchWithAuth, API_BASE_URL } from "./config";

export const getAllEvents = () => fetchWithAuth("/api/events");

export const getEventById = (id) => fetchWithAuth(`/api/events/${id}`);

export const createEvent = (formData) =>
  fetch(`${API_BASE_URL}/api/events`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: formData, 
  }).then(async (res) => {
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || "Error creating event");
    }
    return res.json();
  });

export const updateEvent = (id, formData) =>
  fetch(`${API_BASE_URL}/api/events/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: formData,
  }).then(async (res) => {
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || "Error updating event");
    }
    return res.json();
  });

export const deleteEvent = (id) =>
  fetchWithAuth(`/api/events/${id}`, { method: "DELETE" });
