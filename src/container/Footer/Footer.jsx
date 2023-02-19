import React from 'react'
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'
import FooterOverlay from '/src/components/Footer/FooterOverlay'
import Newsletter from '/src/components/Footer/Newsletter'
import {images} from '../../constants'
import './Footer.css'


function Footer() {
  return (
    <div className='app__footer section__padding'>
        <FooterOverlay/>
        <Newsletter/>

        <div className="app__footer-links">
           <div className="app__footer-links_contact">
            <h1 className="app__footer-headtext">Contact Us</h1>
            <p className="p__opensans">50-12 Vernon Blvd, LIC NY, 11101</p>
            <p className="p__opensans">(718) 472 4355</p>
            </div> 
           <div className="app__footer-links_logo">
            <img src={images.tournesol} alt="footer logo" />
            <p className="p__opensans">Tournesol is proud to call Long Island City home for over 19yrs. We ❤️ our community!</p>
            <img src={images.spoon} alt="spoon" className='spoon__image' style={{marginTop: 15}} />
            <div className="app__footer-links_icons">
                <FiFacebook/>
                <FiTwitter/>
                <FiInstagram/>
            </div>
           </div>
           <div className="app__footer-links_work">
           <h1 className="app__footer-headtext">Working Hours</h1>
           <p className="p__opensans">Monday: 5:30pm - 10:30 pm</p>   
             <p className="p__opensans">Tue - Thur: 11:30 am - 3:00 pm</p>   
             <p className="p__opensans">5:30 pm - 10:30 pm</p>   
             <p className="p__opensans">Friday: 11:30 am - 3:00 pm</p>   
             <p className="p__opensans">5:30 pm - 11:00 pm</p>   
             <p className="p__opensans">Saturday: 11:00 am - 3:30 pm</p>   
             <p className="p__opensans">5:30 pm - 11:00 pm</p>   
             <p className="p__opensans">Sunday: 11:00 am - 3:30 pm</p>   
             <p className="p__opensans">5:00 pm - 10:00 pm</p>
           </div>
        </div>
        <div className="footer__copyright">
           <p className="p__opensans">2023 Tournesol. All rights reserved. Website development by <a href="www.unique-you.us" style={{color: 'red'}}>Unique-You</a>.</p> 
        </div>
    </div>
  )
}

export default Footer