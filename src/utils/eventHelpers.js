/**
 * Formatea fecha para mostrar mes y día
 * @param {string} dateTime - ISO date string
 * @returns {string} - "Nov, 11"
 */
export const formatEventDate = (dateTime) => {
  if (!dateTime) return '';
  const date = new Date(dateTime);
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  const day = date.getDate();
  return `${month}, ${day}`;
};

/**
 * Formatea hora en formato 24h
 * @param {string} dateTime - ISO date string
 * @returns {string} - "00h00 CET"
 */
export const formatEventTime = (dateTime) => {
  if (!dateTime) return '';
  const date = new Date(dateTime);
  return date.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  }) + ' CET';
};

/**
 * Verifica si un usuario está asistiendo a un evento
 * @param {Array} attendances - Array de AttendanceResponse
 * @param {string} userId - ID del usuario a verificar
 * @returns {boolean}
 */
export const isUserAttending = (attendances, userId) => {
  if (!attendances || !userId) return false;
  return attendances.some(
    attendance => attendance.userId === userId
  );
};

/**
 * Obtiene las iniciales de un nombre para el avatar
 * @param {string} name - Nombre completo
 * @returns {string} - Iniciales (máximo 2 letras)
 */
export const getInitials = (name) => {
  if (!name) return '?';
  const parts = name.trim().split(' ');
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};