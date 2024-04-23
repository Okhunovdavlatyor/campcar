import React from 'react'
import { FooterWraper, FooterWrapper } from '../styles/footer'
import Tube from '../assets/Vector (3).png'
import Insta from '../assets/Vector (4).png'
import Naver from '../assets/Vector (5).png'
const FooterComponent = () => {
  return (
    <FooterWraper>
        
        <FooterWrapper>
        <h1>Camper</h1>
            
        </FooterWrapper>
        <FooterWrapper>
        <h>Services</h>
           <p>Camping</p>
           <p>Lodging</p>
           <p>Harbor</p>
           <p>Day Use</p> 
        </FooterWrapper>
        <FooterWrapper>
        <h>Menu</h>
           <p>About</p>
           <p>Services</p>
           <p>Booking</p>
           <p>Blog</p> 
        </FooterWrapper>
        <FooterWrapper>
        <h>Contact</h>
        <div>
            <img src={Tube} alt="tube-img" />
            <img src={Insta} alt="in-img" />
            <img src={Naver} alt="nav-img" />
        </div>
           <p>021 Korea Seul, LA</p>
           <p>camper@example.com</p>
           <p>(021) 345-6789-99</p>
           
        </FooterWrapper>
    </FooterWraper>
  )
}

export default FooterComponent