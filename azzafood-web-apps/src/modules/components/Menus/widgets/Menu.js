import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  const menuList = [
    { id: 1, name: "Breakfast", path: "/Menu-Breakfast" },
    { id: 2, name: "Lunch", path: "/Menu-Lunch" },
    { id: 3, name: "Dinner", path: "/Menu-Dinner" },
    { id: 4, name: "Drink", path: "/Menu-Drink" },
  ];

  return (
    <div className="d-flex justify-content-center">
      <div id="menu">
        <ul>
          {menuList.map((m, index) => (
            <button className="me-1" type="button" key={index}>
              <NavLink
                to={"/appmenu" + m.path}
                className="nav-link text-hover-success px-3"
              >
                <i className={"bi me-2 fs-5 text-dark "}></i>
                {m.name}
              </NavLink>
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
}
