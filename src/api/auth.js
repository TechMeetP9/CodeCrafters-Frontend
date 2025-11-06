import { API_BASE_URL } from "./config";

export async function register(userData) {
  const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
    method: "POST",
    body: userData,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || "Error registering user");
  }

  const data = await response.json();

  return {
    token: data.token,
    user: data.user,
  };
}

export async function login(credentials) {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || "Error logging in");
  }

  const data = await response.json();
  return {
    token: data.token,
    user: data.user,
  };
}

export async function getUserByToken(token) {
  const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  return response.json();
}

export function logout() {
  localStorage.removeItem("token");
}

export function getCurrentUser() {
  const token = localStorage.getItem("token");
  return token || null;
}
