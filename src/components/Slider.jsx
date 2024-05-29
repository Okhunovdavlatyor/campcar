import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import boximg from '../assets/11 1.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../index.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Flex, Flexcol } from '../styles/home';

export default function SliderComp() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        
        pagination={{
          clickable: true,
          
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
                    <Flexcol style={{padding: '30px 10%'}} >
                    <img src={boximg} alt="car" style={{width:'290px'}} />
    <h>Knaus</h>
            <button style={{backgroundColor:'#006DAB', color:'white', margin: '10px 0', width: '200px',height:'35px'
            }}>Discover the range</button>
            <select>
                <option>Choose a model</option>
            </select>
                    </Flexcol>
    
  

      
      </SwiperSlide>
        <SwiperSlide>
        <Flexcol style={{padding: '30px 10%'}}>
                    <img src={boximg} alt="car" style={{width:'290px'}} />
    <h>Knaus</h>
    <button style={{backgroundColor:'#006DAB', color:'white', margin: '10px 0', width: '200px',height:'35px'
            }}>Discover the range</button>
            <select>
                <option>Choose a model</option>
            </select>
                    </Flexcol>
        </SwiperSlide>
        <SwiperSlide>
          <Flexcol style={{marginTop:'50px', marginRight:'50px'}}>        
    <img src={boximg} alt="car" style={{width:'290px'}} />
    <h>Knaus</h>
    <button style={{backgroundColor:'#006DAB', color:'white', margin: '10px 0', width: '200px',height:'35px'
            }}>Discover the range</button>
            <select>
                <option>Choose a model</option>
            </select>
  

      </Flexcol>
      </SwiperSlide>
        <SwiperSlide>
          <Flexcol style={{marginTop:'50px', marginRight:'50px'}}>        
    <img src={boximg} alt="car" style={{width:'290px'}} />
    <h>Knaus</h>
    <button style={{backgroundColor:'#006DAB', color:'white', margin: '10px 0', width: '200px',height:'35px'
            }}>Discover the range</button>
            <select>
                <option>Choose a model</option>
            </select>
  

      </Flexcol>
      </SwiperSlide>
        <SwiperSlide>
          <Flexcol style={{marginTop:'50px', marginRight:'50px'}}>        
    <img src={boximg} alt="car" style={{width:'290px'}} />
    <h>Knaus</h>
    <button style={{backgroundColor:'#006DAB', color:'white', margin: '10px 0', width: '200px',height:'35px'
            }}>Discover the range</button>
            <select>
                <option>Choose a model</option>
            </select>
  

      </Flexcol>
      </SwiperSlide>
        <SwiperSlide>
          <Flexcol style={{marginTop:'50px', marginRight:'50px'}}>        
    <img src={boximg} alt="car" style={{width:'290px'}} />
    <h>Knaus</h>
    <button style={{backgroundColor:'#006DAB', color:'white', margin: '10px 0', width: '200px',height:'35px'
            }}>Discover the range</button>
            <select>
                <option>Choose a model</option>
            </select>
  

      </Flexcol>
      </SwiperSlide>
        <SwiperSlide>
          <Flexcol style={{marginTop:'50px', marginRight:'50px'}}>        
    <img src={boximg} alt="car" style={{width:'290px'}} />
    <h>Knaus</h>
    <button style={{backgroundColor:'#006DAB', color:'white', margin: '10px 0', width: '200px',height:'35px'
            }}>Discover the range</button>
            <select>
                <option>Choose a model</option>
            </select>
  

      </Flexcol>
      </SwiperSlide>
        <SwiperSlide>
          <Flexcol style={{marginTop:'50px', marginRight:'50px'}}>        
    <img src={boximg} alt="car" style={{width:'290px'}} />
    <h>Knaus</h>
    <button style={{backgroundColor:'#006DAB', color:'white', margin: '10px 0', width: '200px',height:'35px'
            }}>Discover the range</button>
            <select>
                <option>Choose a model</option>
            </select>
  

      </Flexcol>
        </SwiperSlide>
        <SwiperSlide>
          <Flexcol style={{marginTop:'50px', marginRight:'50px'}}>        
    <img src={boximg} alt="car" style={{width:'290px'}} />
    <h>Knaus</h>
    <button style={{backgroundColor:'#006DAB', color:'white', margin: '10px 0', width: '200px',height:'35px'
            }}>Discover the range</button>
            <select>
                <option>Choose a model</option>
            </select>
  

      </Flexcol>
      </SwiperSlide>
      </Swiper>
    </>
  );
}
