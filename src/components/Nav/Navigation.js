import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLinks, Nav } from "../styled-components";
import { inbox, sent } from "../../design-assets";
import { LogoHeader, Compose, FolderLink, LogoutButton} from './'

const Navigation = (props) => {
  const location = useLocation();

  //the slice of state below is used for the mobile menu functionality
  const [display, setDisplay] = useState(false);

  //in mobile view the "useEffect" below closes the mobile menu when the route changes
  useEffect(() => {
    setDisplay(false);
  }, [location]);

  return (
    <Nav>
      <LogoHeader display={{ display, setDisplay }} />

      <NavLinks mobile={display}>
        <div className="top">
          <Compose />
          <div className="divider navWords disappear" />
          
          <FolderLink icon={inbox} folder="inbox" />
          <FolderLink icon={sent} folder="sent" />
        </div>

        <LogoutButton />
      </NavLinks>
    </Nav>
  );
};

export default Navigation;
