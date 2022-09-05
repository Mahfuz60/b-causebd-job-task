import React from 'react';
import './FeeExample.css';
import handShadow from '../../../images/service/headerShadow.png';

const FeeExample = () => {
  return (
    <div className='feeExample'>
      <div className='container'>
        <div className='header'>
        <img src={handShadow} alt='' style={{ width: '100px', height: '25px' }} />
          <h3>料金例</h3>

        </div>

      </div>
      
    </div>
  );
};

export default FeeExample;