import React from "react";
import "./SideBar.scss";
import { NavLink } from "react-router-dom";
import { CiCalendarDate } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { CiCircleCheck } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-top">
        <button>
          <label htmlFor="toggle">
            <CiMenuBurger />
          </label>
        </button>
        <input type="checkbox" id="toggle" className="toggle" />
      </div>
      <div className="sidebar-bottom">
        <NavLink style={{ textDecoration: "none" }} to="/">
          <div className="all-tasks sidebar-con-list">
            <CiBoxList />
            <p>All Tasks</p>
          </div>
        </NavLink>

        <NavLink style={{ textDecoration: "none" }} to="completed">
          <div className="completed sidebar-con-list">
            <CiCircleCheck />
            <p>Completed</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
