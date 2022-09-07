import React from 'react';
import './Service2.css';
import media from '../../../../images/service/media.png';
import two from '../../../../images/service/02.png';
import media2 from '../../../../images/service/media2.png';

const Service2 = () => {
  return (
    <div className='service2 '>
      <div className='row g-0'>
        <div className='serviceItem2'>
          <div className='serviceContent2'>
            <div className='col-md-6 col-5  mx-auto'>
              <div className='serviceLeft2'>
                <img src={media} alt='' className='img1 img-fluid' />
                <img src={media2} alt='' className='img2 img-fluid' />
              </div>
            </div>
            <div className='col-md-6 col-7 mx-auto'>
              <div className='serviceRight2'>
                <img src={two} alt='' />
              </div>

              <div className='textRight'>
                <h4 className='fw-bold '>動画編集</h4>

                <p className='mt-3  '>
                  同じ動画を、日本語だけでなく、 <br />
                  英語・中国語・韓国語・フラ{' '}
                  <span style={{ backgroundColor: '#f8b3b3' }}>ンス語など</span> 、多言語字幕で{' '}
                  <br />
                  翻訳して 発信する。また、各言語の専門スタッフによる <br />
                  吹き込みで、
                  <span style={{ backgroundColor: '#f8b3b3' }}>多言語の動画を作成す</span>{' '}
                  る戦略にも対応。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service2;
