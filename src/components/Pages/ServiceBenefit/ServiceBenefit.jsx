import React from 'react';
import './ServiceBenefit.css';
import game from '../../../images/benefits/game.png';
import cap from '../../../images/benefits/cap.png';
import signal from '../../../images/benefits/singal.png';
import lines from '../../../images/benefits/lines.png';
import circleY from '../../../images/benefits/circleY.png';
import manVoice from '../../../images/benefits/manVoice.png';
import mobile from '../../../images/benefits/mobile.png';
import studio from '../../../images/benefits/studio.png';
import headerShadow from '../../../images/service/headerShadow.png';

const ServiceBenefit = () => {
  return (
    <div className='serviceBenefit'>
      <div className='container'>
        <div className='benefitTitle'>
          <img src={headerShadow} alt='' style={{ width: '450px', height: '25px' }} />
          <h1 className='text-center'>サービス利用のメリット</h1>
        </div>
        <div className='row g-0   '>
            <div className='col-md-2 col-12 p-5'>
              <div class='card card1'>
                <img src={signal} className='img1' alt='...' />
                <img src={cap} className='img2 ' alt='...' />
                <img src={game} className='img3' alt='...' />
                <div classNaame='card-body'>
                  <p className='card-text mt-4'>
                    自分の <span className='fw-600 text-center'>得意分野に集中</span>
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-2 col-12 p-5'>
              <div class='card card2 '>
                <img src={circleY} className='img3' alt='...' />
                <img src={lines} className='img4 ' alt='...' />

                <div classNaame='card-body'>
                  <p className='card-text'>
                    安定した収益化の <br /> ためのアドバイス
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-2 col-12 p-5'>
              <div class='card card3'>
                <img src={manVoice} className='img5' alt='...' />

                <div classNaame='card-body'>
                  <p className='card-text'>
                    多言語配信により <br /> より多くのターゲット獲得
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-2 col-12 p-5'>
              <div class='card card4'>
                <img src={mobile} className='img6' alt='...' />

                <div classNaame='card-body'>
                  <p className='card-text'>
                    視聴数を稼ぐための <br /> ノウハウが聞ける
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-2 col-12 p-5'>
              <div class='card card5'>
                <img src={studio} className='img7' alt='...' />

                <div classNaame='card-body'>
                  <p className='card-text'>
                    撮影機材など購入しなくても <br /> 依頼すれば作業が可能
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default ServiceBenefit;
