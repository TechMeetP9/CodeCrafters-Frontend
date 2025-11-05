import { fetchWithAuth } from "./config";

/**
 * Registrar asistencia a un evento
 * @param {Object} data - { eventId: UUID, userId: UUID }
 * @returns {Promise<AttendanceResponse>}
 */
export const joinEvent = (data) =>
  fetchWithAuth("/attendances", {
    method: "POST",
    body: JSON.stringify(data),
  });

/**
 * Cancelar asistencia a un evento
 * @param {Object} data - { eventId: UUID, userId: UUID }
 * @returns {Promise<void>}
 */
export const leaveEvent = (data) =>
  fetchWithAuth("/attendances", {
    method: "DELETE",
    body: JSON.stringify(data),
  });

/**
 * Obtener lista de asistentes de un evento
 * @param {UUID} eventId - ID del evento
 * @returns {Promise<AttendanceResponse[]>}
 */
export const getEventAttendees = (eventId) =>
  fetchWithAuth(`/attendances/event/${eventId}`);