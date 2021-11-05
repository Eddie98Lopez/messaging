import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "../styled-components";
import { useStore } from "../../utils";

const FolderLink = (props) => {
  const { folders } = useStore().store;
  const { icon, folder } = props;

  const unRead = (folder) => {
    const unread = folders[`${folder}`].filter((item) => item.read === false);
    const valueToUse = unread.length !== 0 ? unread.length : "";
    return valueToUse;
  };

  return (
    <NavLink  to={`/dash/folder/${folder}`}activeClassName='active' className='link'>
      <Icon img={icon} alt={`${folder}-icon`} />
      <span className="navWords">{folder}</span>
      <span className="navWords">{folder !== 'sent' && unRead(`${folder}`)}</span>
    </NavLink>
  );
};

export default FolderLink;
