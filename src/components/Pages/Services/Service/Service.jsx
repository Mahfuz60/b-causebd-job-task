import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Service.css';
import Service2 from '../Service2/Service2.jsx';
import Service3 from '../Service3/Service3.jsx';
import Service4 from '../Service4/Service4.jsx';
import Service5 from '../Service5/Service5.jsx';
import Service1 from './../Service1/Service1.jsx';

const Service = () => {
  return (
    <div>
      <Service1 />
      <Service2 />
      <Service3 />
      <Service4 />
      <Service5 />
      <div className='row g-0'>
        <div className='serviceBtnBottom'>
          <button className='serviceButtons'>
            <span className='text-center'>お問合せ</span>
            <FontAwesomeIcon className='emailIcons' icon={faEnvelope} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
