import React from 'react'
import { Container, Endcont, Logocont, Middlecont, NavLink } from '../styles/navbarStyle'
import Camper from '../assets/Camper.png'
import Cart from '../assets/cart.png'
import Profile from '../assets/profil.png'

const Navbarcomponent = () => {
  return (
    <Container>
        <Logocont>
        <NavLink to='/home'>    
         <img src={Camper} alt="camper-img" />
         </NavLink>  
        </Logocont>
        <Middlecont>
                     
            <NavLink to='/motor'>
            <p>Motor</p>
            </NavLink>
            <NavLink to='/caravan'>
            <p>Caravan</p>
            </NavLink>
            <NavLink to='/tuning'>
            <p>Tuning</p>
            </NavLink>
            <NavLink to='/usedcar'>
            <p>Used Car</p>
            </NavLink>
            <NavLink to='/campingplace'>
            <p>Camping Place</p>
            </NavLink>
        </Middlecont>
        <Endcont>
          <NavLink to ='/cart'>
          <img src={Cart} alt="cart-img" />
          </NavLink>
            <NavLink to ='/sign'>
            <img src={Profile} alt="profil-img" />
            </NavLink>
            
            <p>En</p>
        </Endcont>
    </Container>
  )
}

export default Navbarcomponent;