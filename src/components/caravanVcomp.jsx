import React from 'react'
import { Caravancar } from '../mockdate/caravanmockdate';
import { Btn, Btnwrap, CardCont, Carwap, Imgwraper, Infowraper, LeftInfo, RightInfo } from '../styles/motorStyle';
import Star from '../assets/star.png';
import { Link } from 'react-router-dom';

const CaravanVcomp = () => {
    const caravandate = Caravancar.maindata;
    console.log('date', caravandate); 
    

  return (

    <Carwap>
    {
        caravandate.map ((value, key)=>{
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
    
  )
}

export default CaravanVcomp