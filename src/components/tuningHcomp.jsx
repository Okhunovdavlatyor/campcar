import React from 'react'
import { tuningcar } from '../mockdate/tuningmock';
import { Btn, Btnwrap, CardCont, Imgwraper, Infowraper } from '../styles/motorStyle';
import Star from '../assets/star.png';
const TuningHcomp = () => {
    const tuningdate = tuningcar.maindata;
    console.log('date', tuningdate); 
  return (
    <>
    {
        tuningdate.map ((value, key)=> {
            return (
                <CardCont key={key} $Hcomponent>
                <Imgwraper $Hcomponent>
                <img src={value.car.photo}  alt="" width={200} />
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
    </>
  )
}

export default TuningHcomp