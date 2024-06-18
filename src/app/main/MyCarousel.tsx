'use client';
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from '../assets/ps1.jpg';
import image2 from '../assets/ps2.jpeg';
import image3 from '../assets/ps3.jpeg';

const MyCarousel = () => {
  const settings = {
    infinite: true,
    fade: true,
    autoplay: true,
    waitForAnimate: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    speed: 1000,
  }
  
  return (
    <div id='default-carousel' className='my__carousel w-screen px-8 pt-8 m-auto opacity-0' data-carousel='slide'>
      <Slider {...settings}>
        <div className='mb-8'>
          <Image src={image1} alt='Pic1' className=''></Image>
        </div>
        <div className='mb-8'>
          <Image src={image2} alt='Pic2' className=''></Image>
        </div>
        <div className='mb-8'>
          <Image src={image3} alt='Pic3' className=''></Image>
        </div>
      </Slider>
    </div>
  )
}


export default MyCarousel