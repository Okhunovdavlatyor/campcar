import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../index.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { Flex, Flex1, Flex2 } from '../styles/cart';
import { campcar } from '../mockdate/mockdata';
import { useParams } from 'react-router-dom';

const CartComp = () => {
    const {id} = useParams();
    
    const datebase = campcar.maindata.find(
        (value)=> value.id === parseInt(id)
    );
    console.log(datebase);
  return (
    <Flex>
        <Flex2>
        <Swiper
      rewind={true}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      <SwiperSlide><img src={datebase.car.photo}/></SwiperSlide>
      <SwiperSlide><img src={datebase.car.photo}/></SwiperSlide>
      <SwiperSlide><img src={datebase.car.photo}/></SwiperSlide>
      <SwiperSlide><img src={datebase.car.photo}/></SwiperSlide>
      <SwiperSlide><img src={datebase.car.photo}/></SwiperSlide>
      
    </Swiper>
        </Flex2>
        <Flex1>
<h1>{datebase.car.name}</h1>
<h style={{color:'#006DAB'}}>{datebase.car.price}</h>
<h>Description</h>
<p>Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Feugiat viverra amet, tortor 
tristique odio scelerisque aenean sodales.
Nunc risus dolor amet porttitor tellus</p>
<button>Continue to Payment</button>
        </Flex1>
    
  </Flex>
  )
}

export default CartComp