import React from "react";
import { images } from "/src/constants";
import SubHeading from "../../components/SubHeading/SubHeading";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper-info">
      <SubHeading title="Goûtez notre saveur" />
      <h1 className="app__header-h1">Delicious French Cuisine</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eligendi
        id cum rem autem modi ipsum officia consequatur nihil numquam pariatur
        officiis deserunt ea amet dicta sequi architecto, fuga rerum.
      </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
        <img src={images.welcome} alt="header image" />
        {/* <small style={{ color: "grey" }} className="small-credit">Photo credit: Francois Dang Ngoc -Google</small> */}
    </div>
  </div>
);

export default Header;
