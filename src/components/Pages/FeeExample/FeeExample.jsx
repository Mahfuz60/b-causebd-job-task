import React from 'react';
import './FeeExample.css';
import handShadow from '../../../images/service/headerShadow.png';
import shape1 from '../../../images/headerMain/shape1.png';
import shape2 from '../../../images/headerMain/shape2.png';
import shape3 from '../../../images/headerMain/shape3.png';

const FeeExample = () => {
  return (
    <div className='container'>
      <div className='row g-0 mt-5'>
        <div className='threeCardHeader'>
          <img src={handShadow} alt='' style={{ width: '100px', height: '25px' }} />
          <h3>料金例</h3>
        </div>
      </div>

      <div className='row g-0 mt-5 '>
        <div className='col-12 col-md-4 p-4'>
          <div className='cardItem1'>
            <img
              src={shape1}
              alt=''
              width='85%'
              height='20%'
              className='image-fluid'
              style={{ marginTop: '-20px' }}
            />
            <div className='cardTextTop'>
              <h4>ベーシック</h4>
              <h6 className='head'>プランの例</h6>
              <h6 className='cardMid'>動画一本の編集作業だけ依頼</h6>
              <p className='cardText1'>
                > 動画素材を頂戴します
                <br />
                > 方向性について事前ヒアリング
                <br />
                > 編集作業及び仮編集を提出 <br />
                >ご希望のフォーマットで納品
              </p>
            </div>
            <div className='cardBtn1' style={{ marginBottom: '100px' }}>
              <button>合計　1万円~</button>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-4 p-4'>
          <div className='cardItem2'>
            <img
              src={shape3}
              alt=''
              width='85%'
              height='20%'
              className='image-fluid'
              style={{ marginTop: '-20px' }}
            />
            <div className='cardTextTop'>
              <h4>スタンダード</h4>
              <h6 className='head'>プランの例</h6>
              <h6 className='cardMid2'>動画の企画から編集まで一貫依頼</h6>
              <p className='cardText1'>
                > 方向性について事前ヒアリング <br /> > 動画の企画案を提案 <br /> > 動画撮影 <br />{' '}
                > 編集作業及び仮編集を提出 <br /> > ご希望のフォーマットで納品
              </p>
            </div>
            <div className='cardBtn2'>
              <button>合計　10万円~</button>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-4 p-4'>
          <div className='cardItem3'>
            <img
              src={shape2}
              alt=''
              width='85%'
              height='20%'
              className='image-fluid'
              style={{ marginTop: '-20px' }}
            />
            <div className='cardTextTop'>
              <h4> パートナーズ</h4>
              <h6 className='head'>プランの例</h6>
              <h6 className='cardMid3 ' style={{ textAlign: 'left' }}>
                チャンネル立ち上げから <br /> 動画の企画・撮影・編集 <br />{' '}
                そしてチャンネルマーケティングまで
              </h6>
              <p className='cardText1 '>
                > チャンネル診断 <br /> > チャンネル戦略について提案 <br /> > 動画の企画案を提案{' '}
                <br /> > 動画撮影 <br /> > 編集作業及び仮編集を提出 <br /> > 動画掲載 <br /> >
                傾向分析及び戦略調整
              </p>
            </div>
            <div className='cardBtn3'>
              <button>合計　25万円~</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeExample;
