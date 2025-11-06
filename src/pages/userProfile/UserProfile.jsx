import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../../components/Background/background";
import Navbar from "../../components/navbar/navbar";
import UserCard from "../../components/userCard/userCard";
import UserEditForm from "../../components/userEditForm/userEditForm";
import { updateUser } from "../../api/users";
import { useUser } from "../../context/userContext";
import "./userProfile.scss";

function UserProfile() {
  const { currentUser, loginUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [notification, setNotification] = useState({ type: "", message: "" });
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) navigate("/");
  }, [currentUser, navigate]);

  const handleSave = async (updatedData) => {
    try {
      const updatedUser = await updateUser(currentUser.id, updatedData);
      loginUser(updatedUser); // reemplaza setCurrentUser
      setIsEditing(false);
      setNotification({ type: "success", message: "Perfil actualizado correctamente" });
    } catch {
      setNotification({ type: "error", message: "Error al actualizar el perfil." });
    } finally {
      setTimeout(() => setNotification({ type: "", message: "" }), 3000);
    }
  };

  if (!currentUser) return <p className="loading">Cargando perfil...</p>;

  return (
    <section className="userProfile" aria-label="Perfil de usuario">
      <Background />
      <Navbar />
      <main>
        {notification.message && (
          <p role="alert" className={`notification ${notification.type}`}>
            {notification.message}
          </p>
        )}
        {isEditing ? (
          <UserEditForm
            user={currentUser}
            onSave={handleSave}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <UserCard user={currentUser} onEdit={() => setIsEditing(true)} />
        )}
      </main>
    </section>
  );
}

export default UserProfile;
