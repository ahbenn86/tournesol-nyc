import React from "react";
import SubHeading from "/src/components/SubHeading/SubHeading";
import MenuItem from "/src/components/MenuItem/MenuItem";
import { images, data } from "../../constants";
import { Link } from "react-router-dom";
import "./SpecialMenu.css";

function SpecialMenu() {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Plats Du Jour" />
        <h1 className="headtext__cormorant">Daily Special's</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_weekday flex__center">
          <p className="app__specialMenu-menu_heading">Weekday</p>
          <div className="app__specialMenu_menu_items">
            {data.weekday.map((weekday, index) => (
              <MenuItem
                key={weekday.dish + index}
                dish={weekday.dish}
                day={weekday.day}
                price={weekday.price}
              />
            ))}
          </div>
        </div>
        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu image" />
        </div>
        <div className="app__specialMenu-menu_weekend flex__center">
          <p className="app__specialMenu-menu_heading">Weekend</p>
          <div className="app__specialMenu_menu_items">
            {data.weekend.map((weekend, index) => (
              <MenuItem key={weekend.dish + index} dish={weekend.dish} day={weekend.day} price={weekend.price}/>
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <Link to="/full-menu">
        <button type="button" className="custom__button">
          View More
        </button>
        </Link>
      </div>
    </div>
  );
}

export default SpecialMenu;
