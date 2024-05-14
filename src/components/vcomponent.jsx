import React from 'react'
import { Btn, Btnwrap, CardCont, Carwap, Imgwraper, Infowraper, LeftInfo, RightInfo } from '../styles/motorStyle';

import Star from '../assets/star.png';
import { campcar } from '../mockdate/mockdata';
import { Link } from 'react-router-dom';

const Vcomponent = () => {
    const date = campcar.maindata;
    console.log('date', date); 
    
  return (
    < >
    {
        date.map ((value, key)=>{
            return (
                
                
    
    
    
            <CardCont key={key} $Hcomponent>
                <Imgwraper $Hcomponent>
                <div style={{display:'flex', flex:'1'}}>
                <img src={value.car.photo}  alt="" width={200} />
                </div>
                
                </Imgwraper>
                
                <Infowraper $Hcomponent>
                <div >
                
                <h1>{value.car.name || 'nodate'}</h1>

                <p>{value.car.company || 'nodate'}</p>
                
                </div>
                
                <div>
                <h2>{value.car.cost}</h2>
                    
                    <img src={Star} alt="star-img" />
                        <p>{value.car.rate || '4.5'}</p>
                    
                    
                    
                    
                    </div>
                
                
                    
                    <Btnwrap>
                    
                    <Btn $Hcomponent>Order</Btn>
                    <Btn $Hcomponent>Compare</Btn>
                    </Btnwrap>
                
                </Infowraper>       
                
                    
                    
                    
                    
               
                
                
                
                
               
            </CardCont>
            
            )
        })
    }
    </  >
  )
}
export default Vcomponent;
