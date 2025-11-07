    import React from "react";
    import { useNavigate } from "react-router-dom";
    // import { deleteUser } from "../../api/users";

    const UserCard = ({ user, onEdit }) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        const confirm = window.confirm('Are you sure you want to delete your profile?');
        if (!confirm) return;

        try {
        await deleteUser(user.id);
        alert('Profile deleted');
        navigate('/');
        } catch (error) {
        console.error('Error deleting user:', error);
        alert('Error deleting profile');
        }
    };

    return (
        <article className="user-card">
        <header>
            <img src={user.profileImage || '/default-profile.png'} alt={`${user.name}'s profile`} />
            <h2>{user.name}</h2>
            <p>@{user.username}</p> 
            <p>{user.email}</p>
        </header>

        <footer className="user-actions">
            <button onClick={onEdit}>Edit Profile</button>
            <button onClick={handleDelete}>Delete Profile</button>
        </footer>
        </article>
    );
    };

    export default UserCard;
