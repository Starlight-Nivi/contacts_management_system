import React from "react";

const Header = () => {
  return (
    <div
      className="header-container"
      style={{
        backgroundColor: "#f4f4f4",
        borderBottom: "2px solid #ccc",
      }}
    >
      <div className="ui container" style={{ textAlign: "center" }}>
        <h2>Contact Manager</h2>
      </div>
    </div>
  );
};

export default Header;
