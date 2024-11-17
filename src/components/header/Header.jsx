import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ onHomeClick, onAbiturientiClick }) => {
  return (
    <div className="nav">
      <div className="nav-main">
        <ul className="menu">
          <li>
            <Link to="/" onClick={onHomeClick}>
              მთავარი
            </Link>
          </li>
          <li>
            <Link to="/world-history">მსოფლიო ისტორია</Link>
          </li>
          <li>
            <Link to="/historiography">ისტორიოგრაფია</Link>
          </li>
          <li>
            <Link to="/kings">მეფეები</Link>
          </li>
          <li>
            <Link to="/abiturienti" onClick={onAbiturientiClick}>
              აბიტურიენტებისთვის
            </Link>
          </li>
        </ul>
        <button>შესვლა</button>
      </div>
    </div>
  );
};

export default Header;
