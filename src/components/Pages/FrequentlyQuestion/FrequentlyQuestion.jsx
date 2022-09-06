import React from 'react';
import './FrequentlyQuestion.css';
import handShadow from '../../../images/service/headerShadow.png';
import FrequentlyDetails from './FrequentlyDetails/FrequentlyDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSquareCheck } from '@fortawesome/free-solid-svg-icons';

const frequentlyData = [
  {
    id: 1,
    question: '動画の企画からお願いしたいのですが、どのようなプロセスになるのでしょうか？',
    ans: 'いただいた内容をもとに、担当者からヒアリングを行います。その後必要に応じて・・・',
  },
  {
    id: 2,
    question:
      'チャンネルのターゲットが海外なので、動画を英語で作りたいのですが、対応可能でしょうか？',
    ans: 'いただいた内容をもとに、担当者からヒアリングを行います。その後必要に応じて・・・',
  },
  {
    id: 3,
    question: '動画編集のみ、または撮影のみのお見積りも可能でしょうか？',
    ans: 'まずはヒアリングを行い・・・・・・・・・・・・・・・・',
  },
  {
    id: 4,
    question: '納期の目安はどのように考えればいいのでしょうか？',
    ans: 'まずはヒアリングを行い・・・・・・・・・・・・・・・・',
  },
  {
    id: 5,
    question: '4K動画の編集にも対応していますでしょうか？',
    ans: 'まずはヒアリングを行い・・・・・・・・・・・・・・・・',
  },
];

const FrequentlyQuestion = () => {
  return (
    <div className='frequentlyQues mt-5'>
      <div className='container'>
        <div className='frequentlyTitle'>
          <img src={handShadow} alt='' style={{ width: '240px', height: '30px' }} />
          <h2 className='text-center'>よくある質問</h2>
        </div>
        <div className='row d-flex'>
          {frequentlyData.map((frequently, id) => (
            <FrequentlyDetails key={id} frequently={frequently} />
          ))}

          <div className='frequentlyBtnBottom'>
            <button className='frequentlyButtons me-5 mt-2'>
              <span className='text-center'>よくある質問</span>
              <FontAwesomeIcon className='checkIcons' icon={faSquareCheck} />
            </button>
            <button className='frequentlyButtons ms-2 mt-2'>
              <span>お問合せ</span>
              <FontAwesomeIcon className='checkIcons' icon={faEnvelope} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyQuestion;
