import React from "react";
import AuthForm from "../components/authForm";
import { CookiesProvider, useCookies } from "react-cookie";

const Login = () => {
  const [cookies, setCookie] = useCookies(["user"]);

  const handleLogin = (user) => {
    // setCookie("user", user, { path: "/" });
    console.log("login", user);
  };

  return <AuthForm isLogin handleLogin={handleLogin} />;
};

export default Login;
