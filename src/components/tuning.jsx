import React, { useState } from 'react'
import { tuningcar } from '../mockdate/tuningmock';
import { Btn, Btnwrap, Catalogwraper, Container, ItemLeft, ItemRight, ItemWraper, ListEnd, ListWrapper, Listcontainer, Listholder, Listwrap, Wrapper } from '../styles/motorStyle';
import { Bgwrap } from '../styles/navbarStyle';
import TuningVcomp from './tuningVcomp';
import TuningHcomp from './tuningHcomp';
import Kvadrat from '../assets/kvadrat.png'
import car30 from "../assets/car30.jpg";
import car31 from '../assets/car31.jpg';
import car32 from '../assets/car32.jpg';
import Quadro from '../assets/quadro.png';
import Oltiadro from '../assets/oltiadro.png';
import FooterComponent from './footer';
const TuningComponent = () => {
    const tuningdate = tuningcar.maindata;
    console.log('date', tuningdate);
    const tuningLength = tuningdate.length;
    console.log('date', tuningLength.length);
    const [active, setActive] = useState(false);
    function handleTuningVcomponent () {

        setActive(true)
    }
    function handleTuningHcomponent () {
        setActive(false)
    }
  return (
    <Container>
        <Bgwrap>
            <p>Home/Tuning</p>
            <h2>Our ranges</h2>
            <h1>Tuning</h1>
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
                        <img src={car30} alt='img1' />
                        <img src={car31} alt="img2" />
                        <img src={car32} alt="img3" />
                        </div>
                    </ListEnd>
                </Listwrap>
                <Catalogwraper>
            <ItemWraper>
                <ItemLeft>
                <p>Item </p>
                <p style={{color: '#006DAB'}}>{tuningLength}</p>
                </ItemLeft>
                <ItemRight>
                        <p>Sort by</p>
                        <input type="text" placeholder='Select'/>
                        <input type="text" placeholder='60' style={{width: 60}}/>
                        <Btnwrap>
                        <Btn $iconBtn onClick={handleTuningHcomponent}><img src={Quadro} alt="group-img" /></Btn>
                        <Btn $iconBtn onClick={handleTuningVcomponent}><img src={Oltiadro} alt="group-img" /></Btn>
                        </Btnwrap>
                        
                    </ItemRight>
            </ItemWraper>
            <>
                {
                    active ? <TuningHcomp /> : <TuningVcomp />
                }
                </>

        </Catalogwraper>
        </Wrapper>
        <FooterComponent />
    </Container>
  )
}

export default TuningComponent;