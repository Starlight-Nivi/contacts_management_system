import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactDetail = (props) => {
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user"></img>
        </div>
        <div className="content">
          <div className="header">Nivethini</div>
          <div className="description">Nivi4225@gmail.com</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "8px 16px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
              marginTop: "10px",
            }}
            className="ui button blue center"
          >
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ContactDetail;
