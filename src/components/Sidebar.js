import React from "react";
import "../styles/Sidebar.css";
import { navigationLinks } from "../data/navigationLinks";

const Sidebar = () => (
  <div className="sidebar p-3 bg-light min-vh-100">
    <h5 className="text-muted">General</h5>
    <ul className="nav flex-column">
      {navigationLinks.map((link) => (
        <li className="nav-item" key={link.label}>
          <a className="nav-link text-dark" href="#">
            <i className={`me-2 ${link.icon}`}></i> {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
export default Sidebar;
