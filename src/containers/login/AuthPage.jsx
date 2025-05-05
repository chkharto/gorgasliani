import React, { useState } from "react";
import Auth from "../../components/auth/Auth";
import "./login.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth">
      <Auth
        isLogin={isLogin}
        toggleAuth={toggleAuth}
        title={isLogin ? "ავტორიზაცია" : "შექმენით ანგარიში"}
        title2={isLogin ? "შესვლა" : "რეგისტრაცია"}
        auth={isLogin ? "რეგისტრაცია" : "შესვლა"}
      />
    </div>
  );
};

export default AuthPage;
