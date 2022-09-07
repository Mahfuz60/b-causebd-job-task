import React from 'react';
import './Service3.css';
import three from '../../../../images/service/03.png';
import cemera1 from '../../../../images/service/cemera1.png';

const Service3 = () => {
  return (
    <div className='service3'>
      <div className='row g-0 '>
        <div className='serviceItem3'>
          <div className='services3'>
            <div className='col-md-6 col-7 mx-auto'>
            <div className='serviceLeft3'>
            <img src={three} alt=''  />
            </div>
              <div className='textLeft'>
                <h4 className='fw-bold'>動画企画及び撮影</h4>
                <p>
                  お客様の能力を最大に{' '}
                  <span style={{ backgroundColor: '#f8b3b3' }}>発揮できる分野</span> を探し、
                  どのような動画を作るかをご提案いたします。
                  お客様が仮に作った動画企画をクロースチェックし、 より面白い動画として{' '}
                  <span style={{ backgroundColor: '#f8b3b3' }}>企画の補充などを</span> 行います。
                </p>
              </div>
            </div>
            <div className='col-md-6 col-5 mx-auto'>
              <div className='serviceRight3'>
                <img src={cemera1} alt='' className=' img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service3;
