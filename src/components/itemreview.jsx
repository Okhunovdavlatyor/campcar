import React from 'react'
import { useParams } from 'react-router-dom'
import { campcar } from '../mockdate/mockdata';

import { Display, Flex, Flexcol} from '../styles/itemreview';



const Itemreviewscomponent = () => {
    const bd = campcar.maindata;
    const bdLength = bd.length;
    
    const {id} = useParams();
    
    const resultdata = campcar.maindata.find(
        (value)=> value.id === parseInt(id)
    );
    console.log(resultdata);
   
  return (
    <>
    <Display>
    <Flex style={{justifyContent:'start'}}>
        <h>Premium Review</h>
        <p style={{color: '#006DAB', marginLeft:'10px'}}>{bdLength}</p>
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
<img src={resultdata.car.photo} alt="car" style={{width:'100px', height:'100px'}} />
                </div>
                <Flexcol style={{marginLeft:'20px'}}>
                    <h2>{resultdata.car.name}</h2>
                    <p>{resultdata.car.company}</p>
                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                    
                </Flexcol>
               
                </Flex>
                <div>
                <Flexcol $main style={{justifyContent:'end'}}> 
                    <h>ID: {resultdata.id}</h>
                    <p>Date: {resultdata.car.date}</p>
                    <p>Viewed: 135</p>
                </Flexcol>
                </div>
                
                
            </Display>

            <Display >
                
                <Flex>
                <div>
<img src={resultdata.car.photo} alt="car" style={{width:'100px', height:'100px'}} />
                </div>
                <Flexcol style={{marginLeft:'20px'}}>
                    <h2>{resultdata.car.name}</h2>
                    <p>{resultdata.car.company}</p>
                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                    
                </Flexcol>
               
                </Flex>
                <div>
                <Flexcol $main style={{justifyContent:'end'}}> 
                    <h>ID: {resultdata.id}</h>
                    <p>Date: {resultdata.car.date}</p>
                    <p>Viewed: 135</p>
                </Flexcol>
                </div>
                
                
            </Display>

            <Display >
                
                <Flex>
                <div>
<img src={resultdata.car.photo} alt="car" style={{width:'100px', height:'100px'}} />
                </div>
                <Flexcol style={{marginLeft:'20px'}}>
                    <h2>{resultdata.car.name}</h2>
                    <p>{resultdata.car.company}</p>
                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                    
                </Flexcol>
               
                </Flex>
                <div>
                <Flexcol $main style={{justifyContent:'end'}}> 
                    <h>ID: {resultdata.id}</h>
                    <p>Date: {resultdata.car.date}</p>
                    <p>Viewed: 135</p>
                </Flexcol>
                </div>
                
                
            </Display>

            <Display >
                
                <Flex>
                <div>
<img src={resultdata.car.photo} alt="car" style={{width:'100px', height:'100px'}} />
                </div>
                <Flexcol style={{marginLeft:'20px'}}>
                    <h2>{resultdata.car.name}</h2>
                    <p>{resultdata.car.company}</p>
                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                    
                </Flexcol>
               
                </Flex>
                <div>
                <Flexcol $main style={{justifyContent:'end'}}> 
                    <h>ID: {resultdata.id}</h>
                    <p>Date: {resultdata.car.date}</p>
                    <p>Viewed: 135</p>
                </Flexcol>
                </div>
                
                
            </Display>

            <Display >
                
                <Flex>
                <div>
<img src={resultdata.car.photo} alt="car" style={{width:'100px', height:'100px'}} />
                </div>
                <Flexcol style={{marginLeft:'20px'}}>
                    <h2>{resultdata.car.name}</h2>
                    <p>{resultdata.car.company}</p>
                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                    
                </Flexcol>
               
                </Flex>
                <div>
                <Flexcol $main style={{justifyContent:'end'}}> 
                    <h>ID: {resultdata.id}</h>
                    <p>Date: {resultdata.car.date}</p>
                    <p>Viewed: 135</p>
                </Flexcol>
                </div>
                
                
            </Display>

            <Display >
                
                <Flex>
                <div>
<img src={resultdata.car.photo} alt="car" style={{width:'100px', height:'100px'}} />
                </div>
                <Flexcol style={{marginLeft:'20px'}}>
                    <h2>{resultdata.car.name}</h2>
                    <p>{resultdata.car.company}</p>
                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                    
                </Flexcol>
               
                </Flex>
                <div>
                <Flexcol $main style={{justifyContent:'end'}}> 
                    <h>ID: {resultdata.id}</h>
                    <p>Date: {resultdata.car.date}</p>
                    <p>Viewed: 135</p>
                </Flexcol>
                </div>
                
                
            </Display>

            
            
    
    
    </>
  )
}

export default Itemreviewscomponent