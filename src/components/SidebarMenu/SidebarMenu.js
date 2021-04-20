import React from "react";
import { faCommentAlt, faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SidebarMenu.css";

const SidebarMenu = () => {
  return (
    <div className="container__sidebar">
      <div className="upside">
        {/* Icon message */}
        <FontAwesomeIcon icon={faCommentAlt} />
      </div>
      <div className="downside">
        {/* Report abuse icon */}
        <FontAwesomeIcon icon={faFlag} />
      </div>
    </div>
  );
};

export default SidebarMenu;
