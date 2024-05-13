import React from 'react'
import { useParams } from 'react-router-dom'


import { Display, Flex, Flexcol} from '../styles/itemreview';
import { Caravancar } from '../mockdate/caravanmockdate';



const CaravanItem = () => {
    const less = Caravancar.maindata;
    const lessLength = less.length;
    
    const {id} = useParams();
    
    const car = Caravancar.maindata.find(
        (value)=> value.id === parseInt(id)
    );
    console.log(car);
   
  return (
    <>
    <Display>
    <Flex style={{justifyContent:'start'}}>
        <h>Premium Review</h>
        <p style={{color: '#006DAB', marginLeft:'10px'}}>{lessLength}</p>
        </Flex>
        <div style={{justifyContent:'end'}}>
            <select style={{color:'#006DAB'}}>
            <option >Best</option>
            </select>  
              
               </div>  
               
          </Display>
          
            <Display >
                
                <Flex>
                <div>
<img src={car.car.photo} alt="car" style={{width:'100px', height:'100px'}} />
                </div>
                <Flexcol style={{marginLeft:'20px'}}>
                    <h2>{car.car.name}</h2>
                    <p>{car.car.company}</p>
                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                    
                </Flexcol>
               
                </Flex>
                <div>
                <Flexcol $main style={{justifyContent:'end'}}> 
                    <h>ID: {car.id}</h>
                    <p>Date: {car.car.date}</p>
                    <p>Viewed: 135</p>
                </Flexcol>
                </div>
                
                
            </Display>

            <Display >
                
                <Flex>
                <div>
<img src={car.car.photo} alt="car" style={{width:'100px', height:'100px'}} />
                </div>
                <Flexcol style={{marginLeft:'20px'}}>
                    <h2>{car.car.name}</h2>
                    <p>{car.car.company}</p>
                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                    
                </Flexcol>
               
                </Flex>
                <div>
                <Flexcol $main style={{justifyContent:'end'}}> 
                    <h>ID: {car.id}</h>
                    <p>Date: {car.car.date}</p>
                    <p>Viewed: 135</p>
                </Flexcol>
                </div>
                
                
            </Display>

            <Display >
                
                <Flex>
                <div>
<img src={car.car.photo} alt="car" style={{width:'100px', height:'100px'}} />
                </div>
                <Flexcol style={{marginLeft:'20px'}}>
                    <h2>{car.car.name}</h2>
                    <p>{car.car.company}</p>
                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                    
                </Flexcol>
               
                </Flex>
                <div>
                <Flexcol $main style={{justifyContent:'end'}}> 
                    <h>ID: {car.id}</h>
                    <p>Date: {car.car.date}</p>
                    <p>Viewed: 135</p>
                </Flexcol>
                </div>
                
                
            </Display>

            <Display >
                
                <Flex>
                <div>
<img src={car.car.photo} alt="car" style={{width:'100px', height:'100px'}} />
                </div>
                <Flexcol style={{marginLeft:'20px'}}>
                    <h2>{car.car.name}</h2>
                    <p>{car.car.company}</p>
                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                    
                </Flexcol>
               
                </Flex>
                <div>
                <Flexcol $main style={{justifyContent:'end'}}> 
                    <h>ID: {car.id}</h>
                    <p>Date: {car.car.date}</p>
                    <p>Viewed: 135</p>
                </Flexcol>
                </div>
                
                
            </Display>

            <Display >
                
                <Flex>
                <div>
<img src={car.car.photo} alt="car" style={{width:'100px', height:'100px'}} />
                </div>
                <Flexcol style={{marginLeft:'20px'}}>
                    <h2>{car.car.name}</h2>
                    <p>{car.car.company}</p>
                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                    
                </Flexcol>
               
                </Flex>
                <div>
                <Flexcol $main style={{justifyContent:'end'}}> 
                    <h>ID: {car.id}</h>
                    <p>Date: {car.car.date}</p>
                    <p>Viewed: 135</p>
                </Flexcol>
                </div>
                
                
            </Display>

            <Display >
                
                <Flex>
                <div>
<img src={car.car.photo} alt="car" style={{width:'100px', height:'100px'}} />
                </div>
                <Flexcol style={{marginLeft:'20px'}}>
                    <h2>{car.car.name}</h2>
                    <p>{car.car.company}</p>
                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                    
                </Flexcol>
               
                </Flex>
                <div>
                <Flexcol $main style={{justifyContent:'end'}}> 
                    <h>ID: {car.id}</h>
                    <p>Date: {car.car.date}</p>
                    <p>Viewed: 135</p>
                </Flexcol>
                </div>
                
                
            </Display>

            
            
    
    
    </>
  )
}

export default CaravanItem