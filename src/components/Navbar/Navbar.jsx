import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { HiOutlineStatusOnline } from "react-icons/hi";
import images from "/src/constants/images";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#home">
        <img src={images.tournesol} alt="tournesol logo" />
        </a>
        <span className="navbar-span" style={{color: "white"}}>Bistro Francais</span>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#press">Press</a>
        </li>
        <li className="p__opensans">
          <a href="#photos">Photos</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="https://www.trycaviar.com/store/tournesol-queens-134094/" className="p__opensans">
          Order Online
        </a>
        <HiOutlineStatusOnline style={{color: 'white', width: '1.3rem', height: '1.3rem'}}/>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex_center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#press">Press</a>
              </li>
              <li className="p__opensans">
                <a href="#photos">Photos</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Contact</a>
              </li>
              <li className="p__opensans">
                <a href="https://www.trycaviar.com/store/tournesol-queens-134094/">Order Online</a>
              </li>
            </ul>
          </div>
        )}
        
      </div>
    </nav>
  );
};

export default Navbar;
