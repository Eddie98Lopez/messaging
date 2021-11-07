import React from "react";
import { Icon } from "../styled-components";
import { logoutIcon } from "../../design-assets";
import { useHistory } from "react-router";

const LogoutButton = (props) => {
  const { push } = useHistory();
  const logout = (e) => {
    localStorage.removeItem("token");
    console.log(localStorage);
    push("/");
  };
  return (
    <div onClick={logout} className="link logout">
      <Icon img={logoutIcon} alt="logout" />
      <span className="navWords">Logout</span>
    </div>
  );
};

export default LogoutButton;
