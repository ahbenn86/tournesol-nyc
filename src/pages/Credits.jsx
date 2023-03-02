import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import './Credits.css';

function Credits() {
  return (
    <>
    <Navbar/>
    <div className='credits-container'>
        <p className='p__cormorant credits' style={{textDecoration: 'underline'}}>Image Credits</p>
        <p className='p__opensans credits'>Tournesol Instagram</p>
        <p className='p__opensans credits'>Kathleen Collins</p>
        <p className='p__opensans credits'>Francois Dang Ngoc - Google</p>
        <p className='p__opensans credits'>Noah Devereaux</p>
    </div>
    </>
  )
}

export default Credits