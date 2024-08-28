
import React from 'react'

import './Industries.Style/Slider1.Style.css'
import img1 from "../../Assets/IndustriesImages/Slider1IMG/img1.png"
import img2 from "../../Assets/IndustriesImages/Slider1IMG/img2.png"
import img3 from "../../Assets/IndustriesImages/Slider1IMG/img3.png"
import box2 from "../../Assets/IndustriesImages/Slider1IMG/box2.png"

import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';



import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";



function Slider1() {
 
   

  return (
    <>
      <div>
        <Box className='box'>
          <Grid className='text3'>Industries</Grid>
          <Grid className='text4'>Toffee jelly caramels macaroon bonbon dragée muffin halvah.
            Pudding icing gingerbread sugar plum powder marzipan. Cotton candy
            carrot cake pastry carrot cake jelly danish. Ice cream muffin
          </Grid>
        </Box>


        <Grid>
          <Swiper slidesPerView={3} slidesPerColumn={2} spaceBetween={25} className="mySwiper" 
          
          pagination={{
            clickable: true,
            color: 'red',
          }}
          modules={[Pagination]}
          >
            
            <SwiperSlide for="p1"><img src={img1} alt=''/></SwiperSlide>
            <SwiperSlide for="p2"><img className='img2' src={img2} alt=''/></SwiperSlide>
            <SwiperSlide for="p3"><img src={img3} alt=''/></SwiperSlide>
            <SwiperSlide for="p4"><img src={img1} alt=''/></SwiperSlide>
            <SwiperSlide for="p5"><img className='img2' src={img2} alt=''/></SwiperSlide>
            <SwiperSlide for="p6"><img src={img3} alt=''/></SwiperSlide>
            <SwiperSlide for="p7"><img src={img1} alt=''/></SwiperSlide>
 
            <div className='checkbox1'> </div>
            
          </Swiper>
        </Grid>
      </div>

      <Grid>
        <img className='box2' src={box2} alt='' />
        <Grid className='text1'>  Aerospace and Defense  </Grid>
      </Grid>

      <Grid className='text2'>Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.</Grid>

      <Grid >
        <Button className='button' variant="contained" disableElevation >
          Read More <span className='btnText' > &#62; </span>
        </Button>

      </Grid>





    </>

    // <>
    //  <Swiper
    //     slidesPerView={3}
    //     spaceBetween={30}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     modules={[Pagination ]}
    //     className="mySwiper"
    //   >
    //      <SwiperSlide><img src={img1} alt=''/> </SwiperSlide>
    //          <SwiperSlide><img className='img2' src={img2} alt=''/></SwiperSlide>
    //         <SwiperSlide><img src={img3} alt=''/>  </SwiperSlide>
    //        <SwiperSlide> <img src={img1} alt=''/></SwiperSlide>
    //          <SwiperSlide><img className='img2' src={img2} alt=''/></SwiperSlide>
    //          <SwiperSlide><img src={img3} alt=''/></SwiperSlide>
    //          <SwiperSlide><img src={img1} alt='' /></SwiperSlide>
    //   </Swiper>
    // </>

  )
}

export default Slider1

