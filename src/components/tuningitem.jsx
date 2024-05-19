import React from 'react'
import { useParams } from 'react-router-dom'


import { Display, Flex, Flexcol} from '../styles/itemreview';

import {  tuningcar } from '../mockdate/tuningmock';



const TuningItemComp = () => {
    
    const lowLength = low.length;
    
    const {id} = useParams();
    
    const low = tuningcar.maindata.find(
        (value)=> value.id === parseInt(id)
    );
    console.log(low);
   
  return (
    <>
    <Display>
    <Flex style={{justifyContent:'start'}}>
        <h>Premium Review</h>
        <p style={{color: '#006DAB', marginLeft:'10px'}}>{lowLength}</p>
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
<img src={low.low.photo} alt="low" style={{width:'100px', height:'100px'}} />
                </div>
                <Flexcol style={{marginLeft:'20px'}}>
                    <h2>{low.low.name}</h2>
                    <p>{low.low.company}</p>
                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                    
                </Flexcol>
               
                </Flex>
                <div>
                <Flexcol $main style={{justifyContent:'end'}}> 
                    <h>ID: {low.id}</h>
                    <p>Date: {low.low.date}</p>
                    <p>Viewed: 135</p>
                </Flexcol>
                </div>
                
                
            </Display>

            <Display >
                
                <Flex>
                <div>
<img src={low.low.photo} alt="low" style={{width:'100px', height:'100px'}} />
                </div>
                <Flexcol style={{marginLeft:'20px'}}>
                    <h2>{low.low.name}</h2>
                    <p>{low.low.company}</p>
                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                    
                </Flexcol>
               
                </Flex>
                <div>
                <Flexcol $main style={{justifyContent:'end'}}> 
                    <h>ID: {low.id}</h>
                    <p>Date: {low.low.date}</p>
                    <p>Viewed: 135</p>
                </Flexcol>
                </div>
                
                
            </Display>

            <Display >
                
                <Flex>
                <div>
<img src={low.low.photo} alt="low" style={{width:'100px', height:'100px'}} />
                </div>
                <Flexcol style={{marginLeft:'20px'}}>
                    <h2>{low.low.name}</h2>
                    <p>{low.low.company}</p>
                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                    
                </Flexcol>
               
                </Flex>
                <div>
                <Flexcol $main style={{justifyContent:'end'}}> 
                    <h>ID: {low.id}</h>
                    <p>Date: {low.low.date}</p>
                    <p>Viewed: 135</p>
                </Flexcol>
                </div>
                
                
            </Display>

            <Display >
                
                <Flex>
                <div>
<img src={low.low.photo} alt="low" style={{width:'100px', height:'100px'}} />
                </div>
                <Flexcol style={{marginLeft:'20px'}}>
                    <h2>{low.low.name}</h2>
                    <p>{low.low.company}</p>
                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                    
                </Flexcol>
               
                </Flex>
                <div>
                <Flexcol $main style={{justifyContent:'end'}}> 
                    <h>ID: {low.id}</h>
                    <p>Date: {low.low.date}</p>
                    <p>Viewed: 135</p>
                </Flexcol>
                </div>
                
                
            </Display>

            <Display >
                
                <Flex>
                <div>
<img src={low.low.photo} alt="low" style={{width:'100px', height:'100px'}} />
                </div>
                <Flexcol style={{marginLeft:'20px'}}>
                    <h2>{low.low.name}</h2>
                    <p>{low.low.company}</p>
                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                    
                </Flexcol>
               
                </Flex>
                <div>
                <Flexcol $main style={{justifyContent:'end'}}> 
                    <h>ID: {low.id}</h>
                    <p>Date: {low.low.date}</p>
                    <p>Viewed: 135</p>
                </Flexcol>
                </div>
                
                
            </Display>

            <Display >
                
                <Flex>
                <div>
<img src={low.low.photo} alt="low" style={{width:'100px', height:'100px'}} />
                </div>
                <Flexcol style={{marginLeft:'20px'}}>
                    <h2>{low.low.name}</h2>
                    <p>{low.low.company}</p>
                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                    
                </Flexcol>
               
                </Flex>
                <div>
                <Flexcol $main style={{justifyContent:'end'}}> 
                    <h>ID: {low.id}</h>
                    <p>Date: {low.low.date}</p>
                    <p>Viewed: 135</p>
                </Flexcol>
                </div>
                
                
            </Display>

            
            
    
    
    </>
  )
}

export default TuningItemComp