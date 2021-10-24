import React from "react";
import "./header.css";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Link } from "react-router-dom";

const Header = ({ menuOpen, setMenuOpen, mode, setMode }) => {
  return (
    <div className="header">
      <div className="header__textBx">
        <div
          className={"hamburger " + (menuOpen && "active")}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
        <Link to="/home" className="header__logo">
          Logo
        </Link>
        <h3 className="header__h3">Computer are in our Life</h3>
      </div>
      <div className="header__iconBx">
        <div className={"filter " + (mode && "active")}>
          <div className="circle" onClick={() => setMode(!mode)}></div>
        </div>
        <Link to="/views">
          {" "}
          <LocalFireDepartmentIcon
            titleAccess="Content with most views"
            className="icon"
          />
        </Link>
        <Link to="/liked">
          <ThumbUpIcon titleAccess="most liked Content" className="icon" />
        </Link>
        <Link to="/disliked">
          <ThumbDownIcon titleAccess="most disliked Content" className="icon" />
        </Link>
      </div>
    </div>
  );
};
export default Header;
