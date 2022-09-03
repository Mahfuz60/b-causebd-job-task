import React from 'react';
import './Services.css';
import headerShadow from '../../../images/service/headerShadow.png';
import youtube from '../../../images/service/youtube.png';
import hand from '../../../images/service/hand.png';
const Services = () => {
  return (
    <div className='service'>
        <div className='serviceTitle'>
        <img src={headerShadow} alt='' />
          <h1 className='text-center '>サービス紹介</h1>
         
        </div>
        <div className='service1'>
          <div className='row'>
            <div className='col-md-6 col-10 mx-auto'>
              

            </div>
            <div className='col-md-6 col-10 mx-auto'>
              <img src={youtube} alt="" />
              <img src={hand} alt="" />

              </div>

          </div>


           

          </div>
       
     
    </div>
  );
};

export default Services;
