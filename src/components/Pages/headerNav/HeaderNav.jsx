import React from 'react';
import './HeaderNav.css';
import home from '../../../images/navImage/home2.png';
import hand from '../../../images/navImage/handIcon2.png';
import film from '../../../images/navImage/filmIcon2.png';
import line from '../../../images/navImage/lineIcon2.png';
import yIcon from '../../../images/navImage/yIcon2.png';
import youtube from '../../../images/navImage/youtube2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HeaderNav = () => {
  return (
    <div className='headerNavBar'>
      <nav className='headerNav navbar navbar-expand-lg'>
          <div className='container-fluid'>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'>
                <FontAwesomeIcon icon={faBars} />
              </span>
            </button>
            <div className='collapse navbar-collapse justify-content-end ' id='navbarNav'>
              <ul className='headerListNav navbar-nav mx-auto'>
                <li className='list mx-4'>
                  <img src={home} alt='' className='img-fluid' />
                  <h6>Home</h6>
                </li>
                <li className='list me-4 '>
                  <img src={hand} alt='' className='img-fluid' style={{ width: '70px' }} />
                  <h6 className='pt-1'>サービス紹介 </h6>
                </li>
                <li className='list  me-4'>
                  <img src={film} alt='' className='img-fluid' />
                  <h6> 動画多言語化 </h6>
                </li>
                <li className='list me-4'>
                  <img src={line} alt='' className='img-fluid' />
                  <h6>実績確認</h6>
                </li>
                <li className='list me-4'>
                  <img src={yIcon} alt='' className='img-fluid' />
                  <h6> 料金表 </h6>
                </li>
                <li className='list me-5'>
                  <h6 className='mt-5'>よくある質問</h6>
                </li>
                <li className='list me-5'>
                  <h6 className='mt-5'>無料見積・問合せ</h6>
                </li>
                <li className='list me-4 '>
                  <img src={youtube} alt='' className='img-fluid' />
                  <h6>
                    YouTuber
                    <br /> <span style={{ fontSize: '15px' }}>に なるためには</span>
                  </h6>
                </li>
              </ul>
            </div>
          </div>
       
      </nav>
    </div>
  );
};

export default HeaderNav;
