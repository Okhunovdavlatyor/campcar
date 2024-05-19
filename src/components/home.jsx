import React from 'react'

import Homebg from './homebg';
import { Flex, Flexcol, Grid, Grid3 } from '../styles/home';

import boximg from '../assets/11 1.png'
import grid1 from '../assets/Group 2197.png'
import grid2 from '../assets/Group 2198.png'
import grid3 from '../assets/Group 2199.png'
import grid4 from '../assets/Group 2200.png'
import FooterComponent from './footer';
const HomeComponent = () => {
  
  return (
    <>
    <Flexcol >
    <Homebg />
    
      <h1 style={{marginTop:'50px'}}>Recommend</h1>
      <Flex style={{padding:'0 10%'}}>
      <Flexcol style={{marginTop:'50px', marginRight:'50px'}}>        
    <img src={boximg} alt="car" style={{width:'290px'}} />
    <h>Knaus</h>
            <button>Discover the range</button>
            <select>
                <option>Choose a model</option>
            </select>
  

      </Flexcol>
      <Flexcol style={{marginTop:'50px', marginRight:'50px'}}>        
    <img src={boximg} alt="car" style={{width:'290px'}} />
    <h>Knaus</h>
            <button>Discover the range</button>
            <select>
                <option>Choose a model</option>
            </select>
  

      </Flexcol>
      <Flexcol style={{marginTop:'50px', marginRight:'50px'}}>        
    <img src={boximg} alt="car" style={{width:'290px'}} />
    <h>Knaus</h>
            <button>Discover the range</button>
            <select>
                <option>Choose a model</option>
            </select>
  

      </Flexcol>
      <Flexcol style={{marginTop:'50px', marginRight:'50px'}}>        
    <img src={boximg} alt="car" style={{width:'290px'}} />
    <h>Knaus</h>
            <button>Discover the range</button>
            <select>
                <option>Choose a model</option>
            </select>
  

      </Flexcol>
      </Flex>

      <h1 style={{marginTop:'50px'}}>Videos</h1>
      <Grid>
        <img src={grid1} alt="" />
        <img src={grid2} alt="" />
        <img src={grid3} alt="" />
        <img src={grid4} alt="" />
        <img src={grid1} alt="" />
        <img src={grid2} alt="" />
        <img src={grid3} alt="" />
        <img src={grid4} alt="" />
      </Grid>

      <h1 style={{marginTop:'50px'}}>Blogs</h1>
      <Flex>
      <Flexcol style={{flex:'1'}}>
<h1>Lorem ipsum</h1>
<p>@Lorem ipsum</p>
<p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Placerat platea mauris at turpis. <br /> Volutpat, morbi sit vitae id. Aliquam eleifend <br /> aenean neque in in a quam vivamus</p>
      </Flexcol>
     
      <Grid3 style={{flex:'1'}}>
<img src={grid1} alt="" />
<img src={grid3} alt="" />
<img src={grid4} alt="" />
<img src={grid1} alt="" />
<img src={grid3} alt="" />
<img src={grid4} alt="" />
      </Grid3>
      </Flex>

      
      
    
      
    </Flexcol>
    <FooterComponent />
    </>
  )
}

export default HomeComponent;

