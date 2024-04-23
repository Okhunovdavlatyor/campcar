import React, { useState } from 'react'
import { Btn, Btnwrap, CardCont, Carwap, Catalogwraper, Container, Filterwrap, Imgwraper, InfoWrapper, Infowraper, ItemLeft, ItemRight, ItemWraper, LeftInfo, ListEnd, ListWrapper, Listcontainer, Listholder, Listwrap, RightInfo, Wrapper } from '../styles/motorStyle';
import { Bgwrap } from '../styles/navbarStyle';
import { campcar } from '../mockdate/mockdata';
import Quadro from '../assets/quadro.png';
import Oltiadro from '../assets/oltiadro.png';
import Star from '../assets/star.png';
import Hcomponent from './hcomponent';
import Vcomponent from './vcomponent';
import Kvadrat from '../assets/kvadrat.png'
import img from "../assets/car.jpeg";
import img1 from '../assets/car1.jpg';
import img2 from '../assets/car2.jpg';
import FooterComponent from './footer';
const MotorComponent = () => {
    const date = campcar.maindata;
    console.log('date', date); 
    const dateLength = date.length;
    console.log('data:', date.length);
    const [active, setActive] = useState(false);
    function handleVcomponent () {

        setActive(true)
    }
    function handleHcomponent () {
        setActive(false)
    }
  return (
    <Container>
        <Bgwrap>
            <p>Home/Motors</p>
            <h2>Our ranges</h2>
            <h1>Motors</h1>
        </Bgwrap>
        <Wrapper>
            <Listwrap>
                <ListWrapper>
                <p>Cost of car</p>                
                </ListWrapper>
                <Listcontainer>
                <Listholder>
               <p>from</p>
               <input type="text"/>
               
               </Listholder>
               <Listholder $Rightlist >
               <p>to</p>
               <input type="text"/>
               </Listholder>
                </Listcontainer>
                <ListWrapper >
                <p style={{marginTop:'20px'}}>Brand</p>                
                </ListWrapper>
                <Listcontainer $Listcolumn>
                <Listholder $Listflex>
               <img src={Kvadrat} alt="qvadrat" />
               <p>Aidal</p>
               </Listholder>
               <Listholder $Listflex>
               <img src={Kvadrat} alt="qvadrat" />
               <p>Knal</p>
               </Listholder>
               <Listholder $Listflex>
               <img src={Kvadrat} alt="qvadrat" />
               <p>escape</p>
               </Listholder>
               
               
                </Listcontainer>
                <ListWrapper >
                <p style={{marginTop:'20px'}}>Company</p>                
                </ListWrapper>
                <Listcontainer $Listcolumn>
                <Listholder $Listflex>
               <img src={Kvadrat} alt="qvadrat" />
               <p>escape</p>
               </Listholder>
                <Listholder $Listflex>
               <img src={Kvadrat} alt="qvadrat" />
               <p>Aidal</p>
               </Listholder>
               
               
               
               
                </Listcontainer>

                <ListWrapper >
                <p style={{marginTop:'20px'}}>License type</p>                
                </ListWrapper>
                <Listcontainer $Listcolumn>
                <Listholder $Listflex>
               <img src={Kvadrat} alt="qvadrat" />
               <p>1 year</p>
               </Listholder>
               <Listholder $Listflex>
               <img src={Kvadrat} alt="qvadrat" />
               <p>2 year</p>
               </Listholder>
               <Listholder $Listflex>
               <img src={Kvadrat} alt="qvadrat" />
               <p>1.5 year</p>
               </Listholder>
               
               
                </Listcontainer>
                <ListWrapper >
                <p style={{marginTop:'20px'}}>Number of travelers</p>                
                </ListWrapper>
                <Listcontainer $Listcolumn>
                <Listholder $Listflex>
               <img src={Kvadrat} alt="qvadrat" />
               <p>2</p>
               </Listholder>
               <Listholder $Listflex>
               <img src={Kvadrat} alt="qvadrat" />
               <p>3-4</p>
               </Listholder>
               <Listholder $Listflex>
               <img src={Kvadrat} alt="qvadrat" />
               <p>5+</p>
               </Listholder>
               
               
                </Listcontainer>
                <ListWrapper >
                <p style={{marginTop:'20px'}}>Location</p>                
                </ListWrapper>
                <Listcontainer $Listcolumn>
                <Listholder $Listflex>
               <img src={Kvadrat} alt="qvadrat" />
               <p>Seoul</p>
               </Listholder>
               <Listholder $Listflex>
               <img src={Kvadrat} alt="qvadrat" />
               <p>Korea</p>
               </Listholder>
               <Listholder $Listflex>
               <img src={Kvadrat} alt="qvadrat" />
               <p>Pusan</p>
               </Listholder>
               
               
                </Listcontainer>
                <Btnwrap >
                <Btn $ListBtn style={{border: '1px solid orange', color: 'white'}}>Cancel</Btn>
                <Btn $ListBtn style={{border: '1px solid blue', color: 'white', backgroundColor: '#006DAB'}}>Search</Btn>
                </Btnwrap >
                    <ListEnd>
                        <p>Compare</p>
                        <div>
                        <img src={img} alt='img1' />
                        <img src={img1} alt="img2" />
                        <img src={img2} alt="img3" />
                        </div>
                    </ListEnd>

            </Listwrap>
            <Catalogwraper>
                <ItemWraper>
                    <ItemLeft>
                        <p>Item </p>
                        <p style={{color: '#006DAB'}}>{dateLength}</p>
                    </ItemLeft>
                    <ItemRight>
                        <p>Sort by</p>
                        <input type="text" placeholder='Select'/>
                        <input type="text" placeholder='60' style={{width: 60}}/>
                        <Btnwrap>
                        <Btn $iconBtn onClick={handleHcomponent}><img src={Quadro} alt="group-img" /></Btn>
                        <Btn $iconBtn onClick={handleVcomponent}><img src={Oltiadro} alt="group-img" /></Btn>
                        </Btnwrap>
                        
                    </ItemRight>
                </ItemWraper>
                
                <>
                {
                    active ? <Hcomponent /> : <Vcomponent />
                }
                </>
                
            </Catalogwraper>
            
        </Wrapper>
        <FooterComponent />
    </Container>
    
  )
}

export default MotorComponent;