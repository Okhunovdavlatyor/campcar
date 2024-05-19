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
        <SwiperSlide><img src="https://th.bing.com/th/id/OIP.X8yG1_x9FKNkqlNd1GhoogHaE7?w=280&h=187&c=7&r=0&o=5&pid=1.7" alt="" /></SwiperSlide>
<SwiperSlide><img src="https://th.bing.com/th/id/OIP.GSNzZNHoV1exaaR7XtlDjQHaFj?w=249&h=187&c=7&r=0&o=5&pid=1.7" alt="" /></SwiperSlide>
<SwiperSlide><img src="https://th.bing.com/th/id/OIP.497MCoLk9a2smNNdAgBQTAHaEK?w=332&h=187&c=7&r=0&o=5&pid=1.7" alt="" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
export default HomeBg;
