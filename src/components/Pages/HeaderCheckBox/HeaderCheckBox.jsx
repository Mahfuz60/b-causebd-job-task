import React from 'react';
import './HeaderCheckBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

const HeaderCheckBox = () => {
  return (
    <div className='headerCheckBox mt-5'>
      <div className='headerTop d-flex'>
        <hr />
        <h4 className='text-center'>
          このようなこと<span>で悩まされたり</span> しませんか？
        </h4>
      </div>
      <div className='row g-0'>
        <div className='col-md-8 col-8 mx-auto'>
          <div className='headerText text-left mt-3 '>
            <h5>
              <FontAwesomeIcon icon={faSquareCheck} className='checkBoxIcon' />
              <span className='text-bold'> YouTubeを始めたいけど、</span>{' '}
              何をどうすればいいのかが分からない
            </h5>
            <h5 className='ms-3'>
              <FontAwesomeIcon icon={faSquareCheck} className='checkBoxIcon' />
              すでにYouTubeチャンネルを作って発信しているが、
              <span className='text-bold'>あまり再生数や購読者が増えない</span>
            </h5>
            <h5 className='ms-4'>
              <FontAwesomeIcon icon={faSquareCheck} className='checkBoxIcon' />
              いいアイデアを持っているが、<span className='text-bold'>動画撮影や編集</span>{' '}
              のスキルがまだ足りなくて困っている
            </h5>
            <h5 className='ms-5'>
              <FontAwesomeIcon icon={faSquareCheck} className='checkBoxIcon' />
              自分の動画をいろんな言語で作って、<span className='text-bold'>全世界へ発信</span>{' '}
              することで、より <span className='text-bold'>再生数や購読者を稼ぎたい</span>
            </h5>
          </div>
        </div>
      </div>
      <div className='headerBottom d-flex-reverse mt-3'>
        <hr />
        <h4 className='text-center'>
          このような<span>悩 み</span>を、<span>弊社が解決いたします.</span>
        </h4>
      </div>
    </div>
  );
};

export default HeaderCheckBox;
