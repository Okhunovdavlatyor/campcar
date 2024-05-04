import React from 'react'
import { tuningcar } from '../mockdate/tuningmock';
import { Btn, Btnwrap, CardCont, Carwap, Imgwraper, Infowraper, LeftInfo, RightInfo } from '../styles/motorStyle';
import Star from '../assets/star.png';
const TuningVcomp = () => {
    const tuningdate = tuningcar.maindata;
    console.log('date', tuningdate); 
  return (
    <Carwap>
    {
        tuningdate.map ((value, key)=>{
            return ( <CardCont key={key}>
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

            )
        })
    }
    </Carwap>
  )
}

export default TuningVcomp