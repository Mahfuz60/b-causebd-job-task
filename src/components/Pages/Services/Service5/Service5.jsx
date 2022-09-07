import React from 'react';
import './Service5.css';
import mediaGirl from '../../../../images/service/mediaGirl.png';
import five from '../../../../images/service/05.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Service5 = () => {
  return (
    <div className='service5'>
      <div className='row g-0 '>
        <div className='serviceItem5'>
          <div className='services5'>
            <div className='col-md-6 col-7 mx-auto'>
              <div className='serviceLeft5'>
                <img src={five} alt='' />
              </div>

              <div className='textLeft5'>
                <h4 className='fw-bold'>チャンネル戦略</h4>
                <p>
                  チャンネル動画のタイトル、キーワード、再生時間などを分析 <br />
                  し、再生数や購読者を増やすための
                  <span style={{ backgroundColor: '#f8b3b3' }}>戦略を立て</span> ます。 <br />
                  チャンネルアイコン、チャンネルアート、チャンネル紹介文など <br />
                  様々の <span style={{ backgroundColor: '#f8b3b3' }}>
                    セッティングをお手伝い
                  </span>{' '}
                  いたします
                </p>
              </div>
            </div>
            <div className='col-md-6 col-5 mx-auto'>
              <div className='serviceRight5'>
                <img src={mediaGirl} alt='' className=' img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row g-0 mt-4'>
        <div className='text-center'>
          <div className='service-button'>
            <button className='service-Btn5'>
              <span className='text-center'>お問合せ</span>
              <FontAwesomeIcon className='emailIcons5' icon={faEnvelope} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service5;
