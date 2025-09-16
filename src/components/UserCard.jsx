import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import EditModal from "./EditModal";
import ConfirmDialog from "./ConfirmDialog";
import '../App.css'

function UserCard({ user }) {
  const { deleteUser } = useContext(UserContext);
  const [liked, setLiked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);

  const avatarUrl = `https://api.dicebear.com/9.x/lorelei/svg?seed=${user.username}`;

  return (
    <div className="user-card">
      <img src={avatarUrl} alt={user.username} className="avatar" />
      <h3>{user.name}</h3>
      <p>
        <b>Email:</b> {user.email}
      </p>
      <p>
        <b>Phone:</b> {user.phone}
      </p>
      <p>
        <b>Address:</b> {user.address.street}, {user.address.city}
      </p>
      <p>
        <b>Website:</b> {user.website}
      </p>
      <p>
        <b>Company:</b> {user.company.name}
      </p>

      <div className="actions">
        <button onClick={() => setLiked(!liked)}style={{ backgroundColor: liked ? "magenta" : "transparent" }}>{liked ? "Unlike" : "Like"} </button>
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={() => setIsConfirming(true)}>Delete</button>
      </div>

      {isEditing && (
        <EditModal user={user} onClose={() => setIsEditing(false)} />
      )}
      {isConfirming && (
        <ConfirmDialog
          onConfirm={() => deleteUser(user.id)}
          onCancel={() => setIsConfirming(false)}
        />
      )}
    </div>
  );
}

export default UserCard;
