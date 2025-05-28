import React from "react";
import "../styles/Header.css";

const Header = () => (
  <div className="d-flex justify-content-between align-items-center p-3 bg-white shadow-sm">
    <h4 className="mb-0">Healthcare.</h4>
    <div className="d-flex align-items-center">
      <input
        type="text"
        className="form-control me-3"
        placeholder="Search..."
        style={{ width: "200px" }}
      />
      <i className="bi bi-bell fs-4 me-3"></i>
      <img
        src="https://cdn-icons-png.flaticon.com/512/4408/4408788.png"
        className="rounded-circle me-2"
        alt="User"
        style={{ width: "40px" }}
      />
      <span>Dr. Smith</span>
      <button className="btn btn-primary ms-3">+</button>
    </div>
  </div>
);
export default Header;
