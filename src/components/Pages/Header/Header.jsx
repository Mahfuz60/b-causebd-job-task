import React from 'react';
import './Header.css';
import headerTxt from '../../../images/headerText.png';
import alarm from '../../../images/alarm.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className='headerBg'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img className='imgText' src={headerTxt} alt='' />
            <ul className='headerList'>
              <li><p>YouTube</p></li>
              <li>
                <FontAwesomeIcon icon={faCircle} className='icon' />
               <p className='headerTxt'> Facebook</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faCircle} className='icon ' />
               <p className='headerTxt'> TikTok</p>
              </li>
            </ul>
            <div className='headerAlarm'>
              <img src={alarm} alt='' />
              <h6>無料見積・問合せ</h6>
            </div>
          </div>
          <div className='col-md-6 col-10 '></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
