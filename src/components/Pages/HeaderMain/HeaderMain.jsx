import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './HeaderMain.css';
import headermain from '../../../images/headerMain/HeaderMain.png';
import headerMainIcon from '../../../images/headerMain/HeaderMainIcon.png';

const HeaderMain = () => {
  return (
    <div className='headerMain'>
      <div className='container'>
        <div className='row g-0'>
          <div className='col-md-4 col-12 mx-auto'>
            <div
              className='card mt-5'
              style={{
                width: '380px',
                height: '340px',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                backgroundColor: 'white',
              }}
            >
              <div className='cardHeaderTxts'>
                <div className='cardHeaderTxtLeft'>
                  <img src={headerMainIcon} alt='' className='img1' />
                  <h6>Specialist</h6>
                </div>
                <h3 className='card-title '>
                  SNSプロモーションの <br /> スペシャリスト
                </h3>
              </div>
              <div className='card-body '>
                <h6 className='card-text cardTxt' style={{ fontSize: '16px' }}>
                  チャンネル立ち上げ、企画、動画編集、
                  <br /> 各種デザインやマーケティングなど <br />
                  幅広い領域でお客様をサポートしております。
                </h6>
                <div className='cardBottom'>
                  <p>
                    現代はもはやテキストの時代ではない。
                    <br /> 動画の時代です!!
                  </p>
                  <div className='text-center'>
                    <div className='cardBtnBottom'>
                      <button className='cardButton'>
                        <span className=' text-center'> お問合せ</span>
                        <FontAwesomeIcon className='emailIcon' icon={faEnvelope} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-12 mx-auto'>
            <div className='headerMainRight mt-4'>
              <img src={headermain} alt='' className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
