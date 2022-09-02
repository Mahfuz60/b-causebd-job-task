import React from 'react';
import './Header.css';
import headerTxt from '../../../images/headerText.png';
import alarm from '../../../images/alarm.png';
import icon1 from '../../../images/icon1.png';
import startIcon1 from '../../../images/starIcon.png';
import starIcon2 from '../../../images/starIcon2.png';

const Header = () => {
  return (
    <div className='headerBg'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img className='imgTxt' src={headerTxt} alt='' />
            <ul className='headerList'>
              <li>YouTube</li>
              <li>
                <i className='fa-solid fa-circle-small' />
                Facebook
              </li>
              <li>
                <i className='fa-solid fa-circle-small' />
                TikTok
              </li>
            </ul>
            <div className='headerAlarm'>
              <img src={alarm} alt='' />
              <h4>無料見積・問合せ</h4>
            </div>
          </div>
          <div className='col-md-6 col-10 '>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
