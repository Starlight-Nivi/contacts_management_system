import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import AddContact from "./AddContact";

const ContactList = (props) => {
  console.log(props);
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
        clickHandler={deleteContactHandler}
      ></ContactCard>
    );
  });
  return (
    <div style={{ marginTop: "20px", padding: "0 20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="eight wide column">
          <h2>Contact List</h2>
        </div>
        <div className="eight wide right aligned column">
          <Link to="/add">
            <button
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "8px 16px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "16px",
              }}
              className="ui button blue"
              onClick={AddContact}
            >
              Add Contact
            </button>
          </Link>
        </div>
      </div>

      {renderContactList}
    </div>
  );
};

export default ContactList;
