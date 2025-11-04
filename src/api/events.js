import { fetchWithAuth } from "./config";

export const getAllEvents = () =>
  fetchWithAuth("/api/events");

export const getEventById = (id) =>
  fetchWithAuth(`/api/events/${id}`);

export const createEvent = (data) =>
  fetchWithAuth("/api/events", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const updateEvent = (id, data) =>
  fetchWithAuth(`/api/events/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

export const deleteEvent = (id) =>
  fetchWithAuth(`/api/events/${id}`, {
    method: "DELETE",
  });
