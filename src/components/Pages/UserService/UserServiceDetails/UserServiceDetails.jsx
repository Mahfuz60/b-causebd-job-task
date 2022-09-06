import React from 'react';
import './UserServiceDetails.css';
import Rectange from '../../../../images/service/Rectangle.png';
import contact from '../../../../images/service/contact.png';

const UserServiceDetails = ({ service }) => {
  const { title1, title2, description } = service;
  return (
    <div className='col-md-4 col-10  d-flex  mt-3'>
      <div
        className='card mt-5 ms-5'
        style={{
          width: 'auto',
          height: 'auto',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #FA8585',
          backgroundColor: 'white',
        }}
      >
        <img src={Rectange} alt='' className='rectangeImg imgage-fluid' />
        <div className='card-img-top '>
          <div className='cardTop'>
            <img src={contact} alt='' className='contactImg  mt-3' />
            <div className='cardTopText mt-4'>
              <h5>{title1}</h5>
              <p>{title2}</p>
            </div>
          </div>
        </div>
        <div className='card-body'>
          <p className='cardText'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default UserServiceDetails;
