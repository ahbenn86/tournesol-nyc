import React from 'react';

import './FullMenuItem.css';

const FullMenuItem = ({dish, price, add, header}) => (
 
  <div className='app__menuItem'>
    <div className='app__menuItem-head'>
      <div className="app__menuItem-name">
        <p className='p__cormorant' style={{color: '#DCCA87'}}>
          {dish}
        </p>
      </div>

      {/* <div className="app__menuItem-dash"></div> */}
    
      <div className="app__menuItem-price">
        <p className='p__cormorant'>
          {price}
        </p>
      </div>
    </div>
    <div className="app__menuitem-sub">
      <p className='p__opensans' style={{color: '#AAA'}}>{add}</p>
    </div>
    
      <h2 className='app__specialMenu-menu_heading full-menu-header' style={{color: '#AAA'}}>{header}</h2>

      
      

  </div>
);

export default FullMenuItem;