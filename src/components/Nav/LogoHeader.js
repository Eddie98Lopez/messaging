import React from "react";
import { LogoWrapper, Icon } from "../styled-components";
import { Logo, hamburger } from "../../design-assets";


const LogoHeader = (props) => {
    const {display,setDisplay} = props.display
  return (
    <LogoWrapper>
      <Logo fill="white" className="logoSvg" />

      <div className="hamburger" onClick={() => setDisplay(!display)}>
        <Icon img={hamburger} alt="hamburger" />
      </div>
    </LogoWrapper>
  );
};

export default LogoHeader
