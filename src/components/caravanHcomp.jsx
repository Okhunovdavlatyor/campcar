import React from 'react'
import Star from '../assets/star.png';
import { Btn, Btnwrap, CardCont, Imgwraper, Infowraper } from '../styles/motorStyle';
import { Caravancar } from '../mockdate/caravanmockdate';
import { FreeWrap } from '../styles/freecont';
import { Link } from 'react-router-dom';


const CaravanHcomp = () => {
    const caravandate = Caravancar.maindata;
    console.log('date', caravandate); 

  return (
 <>
 {
    caravandate.map ((value, key)=>{
        return (
    <Link to={`${value.id}`} style={{textDecoration: 'none', color:'black'}}>
            <CardCont key={key} $Hcomponent>
                
                <Imgwraper $Hcomponent>
                <img src={value.car.photo}  alt="" width={200} />
                </Imgwraper>

                <Infowraper $Hcomponent>
                <div >
                
                <h1>{value.car.name || 'nodate'}</h1>

                <p>{value.car.company || 'nodate'}</p>
                
                </div>
                
                <FreeWrap>
                <h2>{value.car.cost}</h2>
                    <div style={{display:'flex'}}> 
                    <img src={Star} alt="star-img" />
                        <p>{value.car.rate || '4.5'}</p>
                    </div>
                    
                    
                    
                    
                
                
                    
                    <Btnwrap>
                    
                    <Btn $Hcomponent>Order</Btn>
                    <Btn $Hcomponent>Compare</Btn>
                    </Btnwrap>
                    
                    </FreeWrap>
                
                </Infowraper>  
                
                </CardCont>
                </Link>
        )
    })
 }
 </ >
  )
}

export default CaravanHcomp