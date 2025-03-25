import React from "react";
import "./SideBar.scss";
import { NavLink } from "react-router-dom";
import { CiCalendarDate } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { CiCircleCheck } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/loginSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);

  const handleLogout = () => {
    dispatch(logout());
  };

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
      <div className="user-info">
        <h3>Welcome, {user?.name || "User"}!</h3>
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
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default SideBar;
