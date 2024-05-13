import React from 'react'

import { NavLink, useParams } from 'react-router-dom';
import det1 from '../assets/image 6.png'
import det2 from '../assets/image 7.png'
import { Bgwrap } from '../styles/navbarStyle';
import { Boxwrapper, Button, Flex, Flexwrap, Flexwrapper, LeftWrapper, Rightwrapper, Space } from '../styles/detaid';
import det3 from '../assets/image 8.png'
import det4 from '../assets/image 9.png'
import det5 from '../assets/image 10.png'
import FooterComponent from './footer';

import { Caravancar } from '../mockdate/caravanmockdate';
import CaravanTab from './caravantab';


const CaravanClickComponent = () => {
    const {id} = useParams();
    
    const main = Caravancar.maindata.find(
        (value)=> value.id === parseInt(id)
    );
    console.log(main);
  return (
    <>
   <Bgwrap>
          <h1>{main.car.name}</h1>
          <Button>
            <button style={{backgroundColor:'#006DAB'}}>Add to cart</button>
            <button>Compare</button>
          </Button>
            
        </Bgwrap>
    <div style={{marginTop: '100px'}}>
        <Flexwrap>   
           
            <LeftWrapper> 
        <img src={main.car.photo} alt="car" />
        </LeftWrapper>   
        <Rightwrapper>
           <Space $main>
           <h1>{main.car.name}</h1>
        <h2 style={{color:'#006DAB'}}>{main.car.cost}</h2>
           </Space>
           <Space>
            <p>Company</p>
            <p>{main.car.company}</p>
           </Space>
           <Space>
            <p>People</p>
            <p>{main.car.people}</p>
           </Space>
           <Space>
            <p>License type</p>
            <p>{main.car.license}</p>
           </Space>           
        </Rightwrapper>
        
        </Flexwrap>
        <Flexwrapper>
            <Boxwrapper>
            <Flex $first >
            <h1>Comfort</h1>   
            <p>Sleeping Accommodations: Many camping cars come with beds, <br /> ranging from simple bunks to larger beds,  sometimes even <br /> with memory foam mattresses. Some RVs have slide-outs <br /> to expand sleeping areas when parked.</p>         
            </Flex>    
            <Flex>
                <img src={det1} alt="img" />
            </Flex>
            </Boxwrapper>
            <Boxwrapper>
                <Flex>
                    <img src={det2} alt="img" />
                </Flex>
                <Flex $first>
                    <h1>Tidying away is child’s play!</h1>
                    <p>Make it a Game: Turn tidying up into a game. <br /> Set a timer and challenge yourself or your family <br /> members to see how quickly you can tidy up a specific area. <br /> You can also turn it into a scavenger hunt by giving <br /> each person a list of items to find and put away.</p>
                </Flex>
            </Boxwrapper>
            <Boxwrapper>
            <Flex $first >
            <h1>Ventilated , Lit up</h1>   
            <p>In our vans and motorhomes, all our body lighting is 100% LED: a guarantee of energy efficiency and durability.
As for ventilation, we also often offer double ventilation in the bathroom (Skylight + window), which is very popular with our customers…
Camper relies on legendary Seitz windows. They offer the best insulation and are also the easiest to use and safest because they can’t be removed from the outside.												
					</p>         
            </Flex>    
            <Flex>
                <img src={det3} alt="img" />
            </Flex>
            </Boxwrapper>
            <Boxwrapper>
                <Flex>
                    <img src={det4} alt="img" />
                </Flex>
                <Flex $first>
                    <h1>Easy access</h1>
                    <p>We add little touches that your joints will thank you for…
All our motorhomes are equipped with a built-in step to facilitate entry to the vehicle
All our vans are equipped with an electric step.</p>
                </Flex>
            </Boxwrapper>
            <Boxwrapper>
            <Flex $first >
            <h1>Heating when driving</h1>   
            <p>Fuel heating is now very popular in the industry, but this was not always the case; Camper (once again) led the way in this area over 15 years ago.
One of the advantages it offers is that it can heat up your vehicle while you drive, for a more comfortable arrival.</p>         
            <Button style={{marginTop:'50px'}}>
            <button style={{backgroundColor:'#006DAB', color: 'white'}}>Add to cart</button>
            <button>Compare</button>
          </Button>
            </Flex>    
            <Flex>
                <img src={det5} alt="img" />
            </Flex>
            </Boxwrapper>
        </Flexwrapper>
        <CaravanTab />
        
       <FooterComponent />
    </div>
    </>
  )
}

export default CaravanClickComponent