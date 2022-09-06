import React from 'react';
import point from '../../../images/companies/point.png';

const CompaniesDetails = ({ company }) => {
  const { pic, title, points, description } = company;
  return (
    <div className='col-md-4 col-12 mx-auto d-flex mt-3'>
      <div
        className='card '
        style={{
          width: '100%',
          height: 'auto',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'none',
        }}
      >
        <div className='card-img-top" '>
          <img
            src={pic}
            alt=''
            className='image-fluid'
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className='card-body'>
          <img
            src={point}
            alt=''
            className='image-fluid'
            style={{ width: '300px', height: '180px', marginTop: '-65px' }}
          />
          <div style={{ marginTop: '-140px' }}>
            <h6 className='text-danger'>{points}</h6>
            <h4 className='text-danger fw-bold'>{title}</h4>
            <p style={{ fontSize: '15px', fontWeight: '500' }}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesDetails;
