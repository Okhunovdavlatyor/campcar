import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../index.css';
import boximg from '../assets/11 1.png'
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Flex, Flexcol } from '../styles/home';

const  BoxComp = () => {
  return (
    <Flex >
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        
      >
        
        <SwiperSlide >
        <h1 style={{marginTop:'50px'}}>Recommend</h1>
     <Flex style={{marginTop:'50px', display:'flex'}}>
      
     <Flexcol >
            <img src={boximg} alt="car" style={{width:'290px'}} />
            <div></div>
            <h>Knaus</h>
            <button>Discover the range</button>
            <select>
                <option>Choose a model</option>
            </select>

        </Flexcol>
        <Flexcol>
            <img src={boximg} alt="car" style={{width:'290px'}} />
            <h>Knaus</h>
            <button>Discover the range</button>
            <select>
                <option>Choose a model</option>
            </select>

        </Flexcol>
        <Flexcol>
            <img src={boximg} alt="car" style={{width:'290px'}} />
            <h>Knaus</h>
            <button>Discover the range</button>
            <select>
                <option>Choose a model</option>
            </select>

        </Flexcol>
        <Flexcol>
            <img src={boximg} alt="car" style={{width:'290px'}} />
            <h>Knaus</h>
            <button>Discover the range</button>
            <select>
                <option>Choose a model</option>
            </select>

        </Flexcol>
     </Flex>
        
        </SwiperSlide>
<SwiperSlide>
<Flex style={{marginTop:'50px', display:'flex'}}>
      
     <Flexcol >
            <img src={boximg} alt="car" style={{width:'290px'}} />
            <div></div>
            <h>Knaus</h>
            <button>Discover the range</button>
            <select>
                <option>Choose a model</option>
            </select>

        </Flexcol>
        <Flexcol>
            <img src={boximg} alt="car" style={{width:'290px'}} />
            <h>Knaus</h>
            <button>Discover the range</button>
            <select>
                <option>Choose a model</option>
            </select>

        </Flexcol>
        <Flexcol>
            <img src={boximg} alt="car" style={{width:'290px'}} />
            <h>Knaus</h>
            <button>Discover the range</button>
            <select>
                <option>Choose a model</option>
            </select>

        </Flexcol>
        <Flexcol>
            <img src={boximg} alt="car" style={{width:'290px'}} />
            <h>Knaus</h>
            <button>Discover the range</button>
            <select>
                <option>Choose a model</option>
            </select>

        </Flexcol>
     </Flex>
</SwiperSlide>
<SwiperSlide>

</SwiperSlide>
        
      </Swiper>
    </Flex>
  );
}
export default BoxComp;