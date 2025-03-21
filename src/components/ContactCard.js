import React from "react";
import { FaTrash } from "react-icons/fa"; // Importing trash icon

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        marginBottom: "8px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        maxWidth: "400px",
      }}
    >
      <div>
        <p style={{ margin: 0, fontSize: "16px", fontWeight: "500" }}>{name}</p>
        <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>{email}</p>
      </div>
      {/* Trash Icon */}
      <FaTrash
        style={{
          color: "#dc3545",
          cursor: "pointer",
          fontSize: "18px",
        }}
        onClick={() => props.clickHandler(id)}
      />
    </div>
  );
};

export default ContactCard;
