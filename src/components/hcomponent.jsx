
import React from 'react'
import { Btn, Btnwrap, CardCont, Carwap, Catalogwraper, Container, Filterwrap, Imgwraper, InfoWrapper, Infowraper, ItemLeft, ItemRight, ItemWraper, LeftInfo, ListWrapper, Listwrap, RightInfo, Wrapper } from '../styles/motorStyle';
import { Bgwrap } from '../styles/navbarStyle';
import { campcar } from '../mockdate/mockdata';
import Quadro from '../assets/quadro.png';
import Oltiadro from '../assets/oltiadro.png';
import Star from '../assets/star.png';
import { Link } from 'react-router-dom';


const Hcomponent = () => {
    const date = campcar.maindata;
    console.log('date', date); 
    const dateLength = date.length;
    console.log('data:', date.length);
    
  return (
    <>
    
    <Carwap>
    {
        date.map ((value, key)=>{
            return (
<Link to={`${value.id}`} style={{textDecoration: 'none', color:'black'}}>
            <CardCont key={key}>
                
                
               
                 
                <Imgwraper>

                <img src={value.car.photo}  alt="" width={200} />
                </Imgwraper>
                
                <Infowraper>
                <LeftInfo>
                
                <h1>{value.car.name || 'nodate'}</h1>

                
                <RightInfo>
                <div>
                <p>{value.car.company || 'nodate'}</p>
                    </div>
                    <img src={Star} alt="star-img" />
                    <p>{value.car.rate || '4.5'}</p>
                    </RightInfo>
                
                <h2>{value.car.cost}</h2>
                </LeftInfo>
                
                </Infowraper>
               
                
                    
                    
                    
                    
               
                
                
                <Btnwrap>
                <Btn>Order</Btn>
                <Btn>Compare</Btn>
                </Btnwrap>
                
                
               
            </CardCont>
            </Link>
            
            )
        })
    }
    </Carwap>
    
    </>
  )
}

export default Hcomponent;