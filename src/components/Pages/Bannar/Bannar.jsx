import React from 'react';
import banner from '../../../images/service/bannar.png';
import './Bannar.css';

const Bannar = () => {
  return (
    <div className='bannar'>
      <div className='container'>
        <div className='row g-0'>
          <div className='col-md-10 col-10 mx-auto '>
            <div className='bannerImg'>
              <img src={banner} alt='' width='96%' className='image-fluid' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
