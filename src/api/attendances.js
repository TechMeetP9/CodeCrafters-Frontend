import { fetchWithAuth } from "./config";

export const joinEvent = (data) =>
  fetchWithAuth("/attendances", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const leaveEvent = (data) =>
  fetchWithAuth("/attendances", {
    method: "DELETE",
    body: JSON.stringify(data),
  });

export const getEventAttendees = (eventId) =>
  fetchWithAuth(`/attendances/event/${eventId}`);
