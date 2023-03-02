import React from 'react'
import SubHeading from "/src/components/SubHeading/SubHeading";
import FullMenuItem from "/src/components/FullMenuItem/FullMenuItem";
import data from "/src/constants/data";
import './FullMenu.css'
import { Helmet } from 'react-helmet';
import { ImHome3 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function FullMenu() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

    return (
        
        <div className="app__specialMenu flex__center section__padding" id="full-menu">
          <img src="/src/assets/menu-decor.svg" alt="menu logo" className='full-menu-img' />
          <Link to="/">
          <ImHome3 style={{color: 'var(--color-golden)', width: '2rem', height: '2rem', marginBottom: '1rem'}}/>
          </Link>
          <div className="app__specialMenu-title">
            <SubHeading title="menu entier" />
            <h1 className="headtext__cormorant">Full Menu</h1>
          </div>
            <Helmet>
              <title>Tournesol | Full menu | French cuisine | LIC, New York</title>
              <meta name='description' content='Explore our full menu of perfectly crafted, delicious french dishes.'/>
            </Helmet>
          <div className="app__fullMenu-menu">
            <div className="app__specialMenu-menu_weekday flex__center">
              <p className="app__specialMenu-menu_heading">Brunch</p>
              <div className="app__specialMenu_menu_items full-menu-section">
                {data.brunch.map((brunch, index) => (
                  <FullMenuItem
                    key={brunch.dish + index}
                    dish={brunch.dish}
                    price={brunch.price}
                    add={brunch.add}
                    header={brunch.header}
                  />
                ))}
              </div>
            </div>
            {/* <div className="app__specialMenu-menu_img">
              <img src={images.menu} alt="menu image" />
            </div> */}
            <div className="app__specialMenu-menu_weekend flex__center">
              <p className="app__specialMenu-menu_heading">Lunch</p>
              <div className="app__specialMenu_menu_items full-menu-section">
                {data.lunch.map((lunch, index) => (
                  <FullMenuItem key={lunch.dish + index} dish={lunch.dish} price={lunch.price} add={lunch.add} header={lunch.header}  />
                ))}
              </div>
            </div>
            <div className="app__specialMenu-menu_weekend flex__center">
              <p className="app__specialMenu-menu_heading">Dinner</p>
              <div className="app__specialMenu_menu_items full-menu-section">
                {data.dinner.map((dinner, index) => (
                  <FullMenuItem key={dinner.dish + index} dish={dinner.dish} price={dinner.price} add={dinner.add} header={dinner.header}  />
                ))}
              </div>
            </div>
            <div className="app__specialMenu-menu_weekend flex__center">
              <div className="app__specialMenu_menu_items full-menu-section">
                {data.extras.map((extras, index) => (
                  <FullMenuItem key={extras.dish + index} dish={extras.dish} price={extras.price} add={extras.add} header={extras.header}  />
                ))}
              </div>
            </div>
            <Link to="/">
            <button className='custom__button flex__center full-menu-home-btn'>Back to Home</button>
            </Link>
          </div>
        </div>
      );
}

export default FullMenu