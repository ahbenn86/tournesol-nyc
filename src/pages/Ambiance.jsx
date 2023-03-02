import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import './Ambiance.css'

function Ambiance() {
  return (
    <>
    <Navbar/>
        <div className="app__specialMenu flex__center section__padding ambiance">
            <div className='ambiance_img'>
            <img src="/src/assets/ambiance.png" alt="" />
            </div>
            <p className='p__opensans ambiance-quote'> Tournesol is ideal for a casual date night, when you can share a bunch of small plates, like the duck liver terrine and grilled shrimp with chorizo. The affordable wine list and shareable entrees, like mussels with french fries, also work well for a small group dinner. This is one of our favorite spots in Long Island City. - Matt Tervooren ~ <a href='https://www.theinfatuation.com/new-york/reviews/tournesol' style={{color: 'gold'}}>The Infatuation</a></p>
        </div>
    </>
  )
}

export default Ambiance