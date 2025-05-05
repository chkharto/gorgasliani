import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = ({ onHomeClick, onAbiturientiClick }) => {
  return (
    <div className="nav footer">
      <div className="nav-main footer-nav">
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
      </div>
    </div>
  );
};

export default Footer;
