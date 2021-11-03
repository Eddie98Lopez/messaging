import React from "react";
import LoginForm from "./LoginForm";
import { Logo } from "../design-assets";
import { LoginWrapper } from "./styled-components";

const LoginRoute = (props) => {
  return (
    <LoginWrapper>
      <div className="left">
        <Logo fill={"rgba(229,126,49,.2)"} />
      </div>

      <div className="right">
        <LoginForm />

        <Logo className="logo" height="2.5rem" fill={"rgb(229,126,49)"} />
      </div>
    </LoginWrapper>
  );
};

export default LoginRoute;
