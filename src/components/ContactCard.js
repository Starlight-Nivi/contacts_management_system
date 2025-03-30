import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import user from "../images/user.png"; // Make sure this path is correct

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
      {/* User Image */}
      <img
        src={user}
        alt="user"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          marginRight: "15px",
          objectFit: "cover",
        }}
      />

      {/* Contact Info (clickable) */}
      <Link
        to={`/contact/${id}`}
        style={{
          flex: 1,
          textDecoration: "none",
          color: "inherit",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p style={{ margin: 0, fontSize: "16px", fontWeight: "500" }}>{name}</p>
        <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>{email}</p>
      </Link>

      {/* Trash Icon */}
      <FaTrash
        style={{
          color: "#dc3545",
          cursor: "pointer",
          fontSize: "18px",
          marginLeft: "15px",
        }}
        onClick={() => props.clickHandler(id)}
      />
    </div>
  );
};

export default ContactCard;
