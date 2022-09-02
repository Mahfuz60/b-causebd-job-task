import React from 'react';
import './HeaderNav.css';
import home from '../../../images/home.png';
import hand from '../../../images/handIcon.png';
import film from '../../../images/filmIcon.png';
import line from '../../../images/lineIcon.png';
import yIcon from '../../../images/yIcon.png';
import youtube from '../../../images/youtube.png';

const HeaderNav = () => {
  return (
    <div className='headerNavBar'>
      <nav className='headerNav'>
        <ul className='headerList'>
          <li className='list'>
            <img src={home} alt="" />
            <h5>Home</h5>
          </li>
          <li className='list'>
            <img src={hand} alt='' style={{ color: '#FF8382' }} />
            <h5>サービス紹介 </h5>
          </li>
          <li className='list'>
            <img src={film} alt='' />
            <h5> 動画多言語化 </h5>
          </li>
          <li className='list'>
            <img src={line} alt='' />
            <h5>実績確認</h5>
          </li>
          <li className='list'>
            <img src={yIcon} alt='' />
            <h5> 料金表 </h5>
          </li>
          <li className='list'>
            <h5>よくある質問</h5>
          </li>
          <li className='list'>
            <h5>無料見積・問合せ</h5>
          </li>
         <li className='list'>
         <img src={youtube} alt='' />
          <h5>
            YouTuber <br /> に なるためには
          </h5>
         </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderNav;
