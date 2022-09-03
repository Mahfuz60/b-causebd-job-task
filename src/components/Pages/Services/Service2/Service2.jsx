import React from 'react';
import './Service2.css';
import media from '../../../../images/service/media.png';
import two from '../../../../images/service/02.png';
import media2 from '../../../../images/service/media2.png';

const Service2 = () => {
  return (
    <div className='service2'>
      <div className='services2'>
        <div className='row'>
          <div className='col-md-7 col-10 mx-auto'>
            <div className='serviceLeft2'>
              <img src={media} alt='' className='img1' />
              <img src={media2} alt='' className='img2' />
            </div>
          </div>
          <div className='col-md-5 col-10 mx-auto'>
            <img src={two} alt='' className='serviceRight2' />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service2;
