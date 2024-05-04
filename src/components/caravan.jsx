import { useState } from "react";
import { Caravancar } from "../mockdate/caravanmockdate";
import { Btn, Btnwrap, Catalogwraper, Container, ItemLeft, ItemRight, ItemWraper, ListEnd, ListWrapper, Listcontainer, Listholder, Listwrap, Wrapper, } from "../styles/motorStyle";
import { Bgwrap } from "../styles/navbarStyle";
import Kvadrat from '../assets/kvadrat.png'
import car11 from "../assets/car11.jpg";
import car12 from '../assets/car12.jpg';
import car13 from '../assets/car13.jpg';
import Quadro from '../assets/quadro.png';
import Oltiadro from '../assets/oltiadro.png';

import CaravanHcomp from "./caravanHcomp";
import CaravanVcomp from "./caravanVcomp";
import FooterComponent from "./footer";
const CaravanComponent = () => {
  const caravandate = Caravancar.maindata;
    console.log('date', caravandate); 
    const caravanLength = caravandate.length;
    console.log('data:', caravanLength.length);
    const [active, setActive] = useState(false);
    function handleCaravanVcomponent () {

        setActive(true)
    }
    function handleCaravanHcomponent () {
        setActive(false)
    }
  return (
    <Container>
      <Bgwrap>
            <p>Home/Caravan</p>
            <h2>Our ranges</h2>
            <h1>Caravan</h1>
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
                        <img src={car11} alt='img1' />
                        <img src={car12} alt="img2" />
                        <img src={car13} alt="img3" />
                        </div>
                    </ListEnd>
        </Listwrap>
        <Catalogwraper>
            <ItemWraper>
                <ItemLeft>
                <p>Item </p>
                <p style={{color: '#006DAB'}}>{caravanLength}</p>
                </ItemLeft>
                <ItemRight>
                        <p>Sort by</p>
                        <input type="text" placeholder='Select'/>
                        <input type="text" placeholder='60' style={{width: 60}}/>
                        <Btnwrap>
                        <Btn $iconBtn onClick={handleCaravanHcomponent}><img src={Quadro} alt="group-img" /></Btn>
                        <Btn $iconBtn onClick={handleCaravanVcomponent}><img src={Oltiadro} alt="group-img" /></Btn>
                        </Btnwrap>
                        
                    </ItemRight>
            </ItemWraper>
            <>
                {
                    active ? <CaravanHcomp /> : <CaravanVcomp />
                }
                </>

        </Catalogwraper>
        </Wrapper>
                
                <FooterComponent />
                
            
            
        
    </Container>
  )
  
  
}

export default CaravanComponent;