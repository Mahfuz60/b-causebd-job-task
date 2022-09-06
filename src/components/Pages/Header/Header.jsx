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
        <div className='row g-0'>
          <div className='col-md-6'>
            <img className='imgText image-fluid ' src={headerTxt} alt='' />
            <ul className='headerList1 mx-auto'>
              <li className='ms-5'>
                <p>YouTube</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faCircle} className='icon' />
                <p className='headerTxt'> Facebook</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faCircle} className='icon ' />
                <p className='headerTxt'> TikTok</p>
              </li>
            </ul>
            <div className='headerAlarm mx-auto'>
              <img src={alarm} alt='' className='image-fluid' />
              <h6>無料見積・問合せ</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
