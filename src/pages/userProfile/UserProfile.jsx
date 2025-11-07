import React, { useEffect, useState } from 'react';
import Background from '../../components/Background/background';
import Navbar from '../../components/navbar/navbar';
import UserCard from '../../components/userCard/userCard';
import UserEditForm from '../../components/userEditForm/userEditForm';
// import { getUserById, updateUser } from '../../api/users';
import './userProfile.scss';

function UserProfile({ userIdFromLogin }) {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [notification, setNotification] = useState({ type: "", message: "" });

  const userId = userIdFromLogin || localStorage.getItem('userId');

  useEffect(() => {
    if (!userId) return;

    const fetchUser = async () => {
      try {
        const data = await getUserById(userId);
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
        setNotification({ type: 'error', message: 'Error fetching user data.' });
        setTimeout(() => setNotification({ type: "", message: "" }), 3000);
      }
    };
    fetchUser();
  }, [userId]);

  const handleSave = async (updatedData) => {
    try {
      const formData = new FormData();
      for (const key in updatedData) {
        formData.append(key, updatedData[key]);
      }

      const updatedUser = await updateUser(userId, formData);
      setUser(updatedUser);
      setIsEditing(false);
      setNotification({ type: "success", message: "Profile updated successfully!" });
      setTimeout(() => setNotification({ type: "", message: "" }), 3000);
    } catch (error) {
      console.error('Error updating user:', error);
      setNotification({ type: "error", message: "Error updating profile." });
      setTimeout(() => setNotification({ type: "", message: "" }), 3000);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNotification({ type: "", message: "" });
  };

  if (!user) return <p>Loading...</p>;

  return (
    <section className="userProfile">
      <Background />
      <Navbar />

      <main>
        {notification.message && (
          <p className={`notification ${notification.type}`}>
            {notification.message}
          </p>
        )}

        {isEditing ? (
          <UserEditForm
            user={user}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        ) : (
          <UserCard user={user} onEdit={() => setIsEditing(true)} />
        )}
      </main>
    </section>
  );
}

export default UserProfile;
