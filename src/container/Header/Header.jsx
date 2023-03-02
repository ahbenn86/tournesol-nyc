import React from "react";
import { images } from "/src/constants";
import SubHeading from "../../components/SubHeading/SubHeading";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper-info">
      <SubHeading title="Goûtez notre saveur" />
      <h1 className="app__header-h1">Delicious French Cuisine</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
      Come and experience the exquisite flavors of French cuisine in one of the most unique cities of New York.
      Our menu is sure to tantalize your taste buds and leave you wanting more.  
      </p>
      <Link to="/full-menu">
      <button type="button" className="custom__button">Explore Menu</button>
      </Link>
    </div>
    <div className="app__wrapper_img">
        <img src={images.welcome} alt="header image" />
    </div>
  </div>
);

export default Header;
