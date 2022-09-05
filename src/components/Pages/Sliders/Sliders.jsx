import React from 'react';
import './Slider.css';
import handShadow from '../../../images/service/headerShadow.png';
import pic1 from '../../../images/slider/pic1.png';
import pic2 from '../../../images/slider/pic2.png';
import pic3 from '../../../images/slider/pic3.png';
import pic4 from '../../../images/slider/pic4.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faSquareCheck } from '@fortawesome/free-solid-svg-icons';


const Sliders = () => {
  return (
    <div className='sliders'>
      <div className='sliderTitle'>
        <img src={handShadow} alt='' style={{ width: '150px', height: '20px' }} />
        <h3 className='text-center'>運営実績</h3>
        <div className='mt-5 slider'>
          <Swiper
            slidesPerView={4.3}
            spaceBetween={25}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              '@1.50': {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className='mySwiper'
          >
            <SwiperSlide>
              <img src={pic1} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic2} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic3} alt='' />
            </SwiperSlide>

            <SwiperSlide>
              <img src={pic4} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic3} alt='' />
            </SwiperSlide>

            <SwiperSlide>
              <img src={pic4} alt='' />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className='row g-0'>
        <div className='sliderBtnBottom'>
          <button className='sliderButtons me-5'>
            <span className='text-center'>実績リスト</span>
            <FontAwesomeIcon className='checkIcons' icon={faSquareCheck} />
          </button>
          <button className='sliderButtons ms-2'>
            <span>お問合せ</span>
            <FontAwesomeIcon className='checkIcons' icon={faEnvelope} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
