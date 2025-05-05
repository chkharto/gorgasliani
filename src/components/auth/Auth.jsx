import React from "react";
import { IoPerson } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Auth = ({ title, title2, auth, isLogin, toggleAuth }) => {
  return (
    <div className="login">
      <div className="wrapper">
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <h1>{title}</h1>
          <div className="inputs">
            <div className="input-box">
              <IoPerson className="icon" />
              <input type="text" placeholder="სახელი" />
            </div>

            {!isLogin && (
              <div className="input-box">
                <MdEmail className="icon" />
                <input type="email" placeholder="ემაილი" />
              </div>
            )}

            <div className="input-box">
              <FaLock className="icon" />
              <input type="password" placeholder="პაროლი" />
            </div>

            <div className="checkbox">
              <p>დაგავიწყდა პაროლი?</p>
            </div>
          </div>

          <button className="btn" type="submit">
            {title2}
          </button>

          <div className="register-link">
            <p>
              {isLogin ? "არ გაქვს ექაუნთი?" : "უკვე გაქვს ექაუნთი?"}{" "}
              <span
                style={{ cursor: "pointer", color: "#4e8eff" }}
                onClick={toggleAuth}
              >
                {auth}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
