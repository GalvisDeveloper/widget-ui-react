import {
  faChevronRight,
  faExpandAlt,
  faQuestionCircle,
  faThLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { zoomOptions } from "../../constants/globals/zoomOptions";
import "./Menu.css";

const Menu = () => {
  return (
    <header className="container">
      {/*  ------------- Left side ----------- */}
      <div className="left__side">
        <div className="widget__icon">
          {/* Widget Icon */}
          <FontAwesomeIcon icon={faThLarge} />
        </div>
        <div className="title__ui">
          <h5>Widgets UI</h5>
        </div>
        <div className="arrow__icon">
          {/* Icon right arrow (Navigation) --- Handle a state to show it */}
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div className="widget__selected">
          <h5>Widget Name Selected</h5>
        </div>
      </div>

      {/*  ------------- Right side ----------- */}
      <div className="right__side">
        <div className="select__zoom">
          {/* Select for percent Zoom of the page --- each one have a handleChange */}
          <select className="select__menu" name="percents" id="percents">
            {zoomOptions.map((opt) => {
              return (
                <option key={opt.id} value={opt.name}>
                  {opt.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="expand__icon">
          {/* Screenfull icon */}
          <FontAwesomeIcon icon={faExpandAlt} />
        </div>

        <div className="question__icon">
          {/* Question Icon (Help) */}
          <FontAwesomeIcon icon={faQuestionCircle} />
        </div>
        <div className="login__menu">
          <h5>Iniciar sesion</h5>
        </div>
      </div>
    </header>
  );
};

export default Menu;
