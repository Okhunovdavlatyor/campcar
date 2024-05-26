import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../index.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const HomeBg = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-oboi-doma-na-kolesakh-32.jpg" alt="walp1" style={{height:'800px',backgroundPosition:'100%',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}   /></SwiperSlide>
<SwiperSlide><img src="https://www.pilote.fr/app/uploads/2023/07/camping-car-profile-Pilote-e1695632564820.jpg" alt="" style={{height:'800px',backgroundPosition:'100%',backgroundSize:'cover',backgroundRepeat:'no-repeat'} }/></SwiperSlide>
<SwiperSlide><img src="https://www.campingcarlesite.com/wp-content/uploads/2023/07/2024_RAPIDO_C03_00.jpg" alt="" style={{height:'800px',backgroundPosition:'100%',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
export default HomeBg;
