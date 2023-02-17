import React from 'react';

import './MenuItem.css';

const MenuItem = ({dish, price, day}) => (
  <div className='app__menuItem'>
    <div className='app__menuItem-head'>
      <div className="app__menuItem-name">
        <p className='p__cormorant' style={{color: '#DCCA87'}}>
          {dish}
        </p>
      </div>

      <div className="app__menuItem-dash"></div>

      <div className="app__menuItem-price">
        <p className='p__cormorant'>
          {price}
        </p>
      </div>
    </div>
    <div className="app__menuitem-sub">
      <p className='p__opensans' style={{color: '#AAA'}}>{day}</p>
    </div>
  </div>
);

export default MenuItem;
