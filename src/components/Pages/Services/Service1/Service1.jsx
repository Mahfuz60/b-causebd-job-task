import React from 'react';
import './Service1.css';
import headerShadow from '../../../../images/service/headerShadow.png';
import youtube from '../../../../images/service/youtube.png';
import hand from '../../../../images/service/hand.png';
import one from '../../../../images/service/01.png';

const Service1 = () => {
  return (
    <div className='service1'>
      <div className='service1Title'>
        <img src={headerShadow} alt='' style={{ width: '280px', height: '25px' }} />
        <h1 className='text-center '>サービス紹介</h1>
      </div>

      <div className='row g-0'>
        <div className='serviceItem1'>
          <div className='service1Content '>
            <div className='col-7 col-md-6 '>
              <div className='serviceLeft1'>
                <img src={one} alt='' className='img-fluid' />
                <div className='textLeft'>
                  <h4 className='fw-bold'>
                    YouTubeチャンネルの <br /> 立ち上げ支援
                  </h4>
                  <p>
                    最近のトレンドを分析+お客様とのヒアリングで <br />
                    <span style={{ backgroundColor: '#f8b3b3' }}>最も最適な分野をご提案</span>致
                    します。
                    <br />
                    チャンネルのテーマに沿 <br /> った{' '}
                    <span style={{ backgroundColor: '#f8b3b3' }}>
                      わかりやすくて面白いチャンネル名
                    </span>{' '}
                    をご提案致します
                  </p>
                </div>
              </div>
            </div>
            <div className='col-5 col-md-6 '>
              <div className='serviceRight1'>
                <img src={youtube} alt='' className='img1 img-fluid' />
                <img src={hand} alt='' className='img2 img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service1;
