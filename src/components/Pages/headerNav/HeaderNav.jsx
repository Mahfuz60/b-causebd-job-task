import React from 'react';
import './HeaderNav.css';
import home from '../../../images/navImage/home2.png';
import hand from '../../../images/navImage/handIcon2.png';
import film from '../../../images/navImage/filmIcon2.png';
import line from '../../../images/navImage/lineIcon2.png';
import yIcon from '../../../images/navImage/yIcon2.png';
import youtube from '../../../images/navImage/youtube2.png';

const HeaderNav = () => {
  return (
    <div className='headerNavBar'>
      <nav className='headerNav'>
        <ul className='headerListNav d-flex'>
          <li className='list mx-3'>
            <img src={home} alt='' />
            <h6>Home</h6>
          </li>
          <li className='list me-4 '>
            <img src={hand} alt='' />
            <h6>サービス紹介 </h6>
          </li>
          <li className='list  me-4'>
            <img src={film} alt='' />
            <h6> 動画多言語化 </h6>
          </li>
          <li className='list me-4'>
            <img src={line} alt='' />
            <h6>実績確認</h6>
          </li>
          <li className='list me-4'>
            <img src={yIcon} alt='' />
            <h6> 料金表 </h6>
          </li>
          <li className='list me-5'>
            <h6 className='mt-5'>よくある質問</h6>
          </li>
          <li className='list me-5'>
            <h6 className='mt-5'>無料見積・問合せ</h6>
          </li>
          <li className='list me-4 '>
            <img src={youtube} alt='' />
            <h6>
              YouTuber
              <br /> <span style={{ fontSize: '15px' }}>に なるためには</span>
            </h6>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderNav;
