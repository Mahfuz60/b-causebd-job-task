import React from 'react';
import './ServiceList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ServiceList = () => {
  return (
    <div className='serviceList mt-5'>
      <div className='container'>
        <div className='row g-0'>
          <div className='col-md-9 col-10 mx-auto'>
            <table className='mt-4 tables '>
              <thead
                style={{
                  color: '#ff7593',
                  fontSize: '16px',
                  textAlign: 'left',
                  fontWeight: '600',
                }}
              >
                <th>サービス紹介</th>
                <th>動画多言語化</th>
                <th>YouTuberになるためには</th>
              </thead>

              <tr >
                <td >動画企画編集サービス</td>
                <td>英語字幕・ナレーション</td>
                <td>-なぜみんなYouTuberになりたがっているのか</td>
              </tr>
              <tr>
                <td>チャンネルコンサルティング</td>
                <td>中国語字幕・ナレーション</td>
                <td>-YouTube初心者が知っておくべき知識</td>
              </tr>
              <tr>
                <td>多言語戦略サービス</td>
                <td>韓国語字幕・ナレーション</td>
                <td>-YouTubeでどのやったら稼げるの？</td>
              </tr>
              <tr>
                <td>サービスの流れ</td>
                <td>フランス語字幕・ナレーション</td>
                <td>-YouTuberの主な収入源とその金額の目安は？</td>
              </tr>
              <tr>
                <td>実績紹介</td>
                <td>ポルトガル語字幕・ナレーション</td>
                <td>-まずはYouTubeチャンネルを作ってみよう!</td>
              </tr>
              <tr>
                <td>料金表</td>
                <td>ロシア語字幕・ナレーション</td>
                <td>-チャンネルテーマの決め方とその重要性</td>
              </tr>
              <tr>
                <td style={{ color: '#ff7593', fontWeight: '600', paddingLeft: '40px' }}>
                  サポート
                </td>
                <td>ヒンディー語字幕・ナレーション</td>
                <td>-YouTuberになるために必要な道具とは？</td>
              </tr>
              <tr>
                <td>よくある質問</td>
                <td>ドイツ語字幕・ナレーション</td>
                <td>-この特徴を持っている人はYouTuberに向いています！</td>
              </tr>
              <tr>
                <td>企業情報</td>
                <td>トルコ語字幕・ナレーション</td>
                <td>-YouTubeで有名になった人がみんな実践しているのは？</td>
              </tr>
              <tr>
                <td>プライバシーポリシー</td>
                <td>スペイン語字幕・ナレーション</td>
                <td>-YouTube制作のパートナーを探しましょう</td>
              </tr>
              <tr>
                <td>サイトマップ</td>
                <td>その他言語字幕・ナレーション</td>
                <td>
                  -チャンネル登録者がなかなか増えず悩んでいる方へ <br />
                  -YouTube向けの動画編集ツールを比較
                </td>
              </tr>
            </table>

            <div className='pb-3'>
              <button className='tableButton'>
                <span className=' text-center'> お問合せ</span>
                <FontAwesomeIcon className='emailIconsTable' icon={faEnvelope} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
