import React from 'react';
import './Multilization.css';
import handShadow from '../../../images/service/headerShadow.png';
import mobile from '../../../images/service/mobile.png';

const Multilization = () => {
  return (
    <div className='multilization'>
      <div className='container'>
        <div className='row g-0'>
          <div className='multilizationTitle'>
            <img src={handShadow} alt='' style={{ width: '220px', height: '30px' }} />
            <h2 className='text-center'>動画の多言語化</h2>
          </div>
        </div>

        <h5 className='text-center mt-4' style={{ color: '#707070' }}>
          <span className='fw-bold'>動画を多言語化す</span> ることで、世界の規模で{' '}
          <span className='fw-bold'>フォロワー</span> を見つけよう！
        </h5>

        <div className='row g-0 multilizationBottom'>
          <div className='col-md-6 col-12 p-3'>
            <img src={mobile} alt='' width='100%' className='image-fluid' />
          </div>
          <div className='col-12 col-md-6 p-3 p-md-0'>
            <div className='multilizationTable'>
              <h6 className='text-center mt-3 fw-bold' style={{ color: '#707070' }}>
                YouTubeの視聴者数の多い国上位11カ国
              </h6>
            </div>

            <table className='table ms-2'>
              <tr className='item1'>
                <td className='fw-bold pe-5 '>1位</td>
                <td className='fw-bold'>アメリカ</td>
                <td>英語字幕・ナレーション</td>
              </tr>
              <tr>
                <td className='fw-bold'>2位</td>
                <td className='fw-bold'>ブラジル</td>
                <td>ポルトガル語字幕・ナレーション</td>
              </tr>
              <tr>
                <td>3位</td>
                <td>ロシア</td>
                <td>ロシア語字幕・ナレーション</td>
              </tr>
              <tr>
                <td>4位</td>
                <td>日本</td>
                <td>動画企画編集サービス</td>
              </tr>
              <tr>
                <td>5位</td>
                <td>インド</td>
                <td>ヒンディー語字幕・ナレーション</td>
              </tr>
              <tr>
                <td>6位</td>
                <td>イギリス</td>
                <td>英語字幕・ナレーション</td>
              </tr>
              <tr>
                <td>7位</td>
                <td>ドイツ</td>
                <td>ドイツ語字幕・ナレーション</td>
              </tr>
              <tr>
                <td>8位</td>
                <td>フランス</td>
                <td>フランス語字幕・ナレーション</td>
              </tr>
              <tr>
                <td>9位</td>
                <td>メキシコ</td>
                <td>スペイン語字幕・ナレーション</td>
              </tr>
              <tr>
                <td>10位</td>
                <td>トルコ</td>
                <td>トルコ語字幕・ナレーション</td>
              </tr>
              <tr>
                <td>11位</td>
                <td>韓国</td>
                <td>韓国語字幕・ナレーション</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Multilization;
