import { fetchWithAuth, API_BASE_URL } from "./config";

export const getUserById = (id) => 
  fetchWithAuth(`/api/users/${id}`);

export const updateUser = async (id, data) => {
  const token = localStorage.getItem("token");

  try {
    const isFormData = data instanceof FormData;

    const res = await fetch(`${API_BASE_URL}/api/users/${id}`, {
      method: "PUT",
      headers: isFormData
        ? { Authorization: `Bearer ${token}` }
        : {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
      body: isFormData ? data : JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Error updating user");
    }

    return await res.json();

  } catch (error) {
    console.error("Error in updateUser:", error);
    throw error;
  }
};

export const deleteUser = (id) =>
  fetchWithAuth(`/api/users/${id}`, {
    method: "DELETE",
  });
