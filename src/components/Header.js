import React from "react";
import blu from "../assets/Blue_Logo.png";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#1F2640",
        color: "white",
        paddingTop: "7px",
        paddingBottom: "7px",
      }}
    >
      <img
        src={blu}
        style={{ width: "10%" }}
        className="content"
        alt="header-logo"
      ></img>
    </div>
  );
};

export default Header;
