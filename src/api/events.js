import { fetchWithAuth, API_BASE_URL } from "./config";

// --- Endpoints públicos (no requieren token) ---
export const getAllEvents = async () => {
  const res = await fetch(`${API_BASE_URL}/api/events`);
  if (!res.ok) throw new Error("Error fetching events");
  const data = await res.json();
  return data.events; // <-- extraemos el array de eventos
};

export const getEventById = async (id) => {
  const res = await fetch(`${API_BASE_URL}/api/events/${id}`);
  if (!res.ok) throw new Error("Error fetching event");
  return res.json();
};

// --- Endpoints privados (requieren token) ---
export const createEvent = async (formData) => {
  const res = await fetch(`${API_BASE_URL}/api/events`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: formData,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || "Error creating event");
  }

  return res.json();
};

export const updateEvent = async (id, formData) => {
  const res = await fetch(`${API_BASE_URL}/api/events/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: formData,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || "Error updating event");
  }

  return res.json();
};

export const deleteEvent = (id) =>
  fetchWithAuth(`/api/events/${id}`, { method: "DELETE" });
