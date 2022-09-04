import React from 'react';
import './Service4.css';
import monitor from '../../../../images/service/monitor.png';
import four from '../../../../images/service/04.png';

const Service4 = () => {
  return (
    <div className='service4'>
      <div className='services4'>
        <div className='row'>
          <div className='col-md-7 col-10 mx-auto'>
            <div className='serviceLeft4'>
              <img src={monitor} alt='' className='img1' />
            </div>
          </div>
          <div className='col-md-5 col-10 mx-auto'>
            <img src={four} alt='' className='serviceRight4' />
            <div className='textRight'>
              <h4 className='fw-bold'>
                動画を世界に <br /> 発信するための多言語戦略
              </h4>

              <p className='mt-3 '>
                同じ動画を、日本語だけでなく、
                <br />
                英語・中国語・韓国語・フランス語な
                <span style={{ backgroundColor: '#f8b3b3' }}>ど、多言語字幕で翻</span>訳して
                <br />
                発信する。また、各言語の専門スタッフによる吹き込みで、
                <br />
                <span style={{ backgroundColor: '#f8b3b3' }}> 多言語の動画を作</span>{' '}
                成する戦略にも対応。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service4;
