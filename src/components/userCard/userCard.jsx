    import React from "react";
    import { useNavigate } from "react-router-dom";
    import { deleteUser } from "../../api/users";
    import "./userCard.scss";

    const UserCard = ({ user, onEdit }) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete your profile? This action cannot be undone.");
        if (!confirmDelete) return;

        try {
        await deleteUser(user.id);
        console.log("Profile deleted successfully");
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        navigate("/");
        } catch (error) {
        console.error("Error deleting user:", error);
        alert("Error deleting profile. Please try again.");
        }
    };

    return (
        <article className="user-card">
        <header className="user-card__header">
            <img
            src={user.profile_image_url || "/src/assets/default-profile.png"}
            alt={`${user.name}'s profile`}
            className="user-card__img"
            />
            <div className="user-card__info">
            <h2>{user.name}</h2>
            <p className="username">@{user.username}</p>
            <p className="email">{user.email}</p>
            </div>
        </header>

        <footer className="user-card__actions">
            <button className="btn edit" onClick={onEdit}>
            Edit Profile
            </button>
            <button className="btn delete" onClick={handleDelete}>
            Delete Profile
            </button>
        </footer>
        </article>
    );
    };

    export default UserCard;
