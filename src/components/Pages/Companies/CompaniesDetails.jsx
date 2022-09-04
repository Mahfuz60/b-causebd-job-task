import React from 'react';
import point from '../../../images/companies/point.png';

const CompaniesDetails = ({ company }) => {
  const { pic, title, points, description } = company;
  return (
    <div className='col-md-4 col-10 mx-auto d-flex mt-3'>
      <div
        className='card '
        style={{
          width: '600px',
          height: '400px',
          // backgroundColor: 'white',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent:'center',
         
        
        }}
      >
        <div className='card-img-top" '>
          <img src={pic} alt='' style={{ width: '250px', height: '250px' }} />
        </div>
        <div className='card-body'>
          <img src={point} alt='' style={{ width: '260px', height: '150px', marginTop: '-50px' }} />
          <div style={{ marginTop: '-120px' }}>
            <h6 className='text-danger'>{points}</h6>
            <h4 className='text-danger'>{title}</h4>
            <p style={{ fontSize: '15px', fontWeight: '500' }}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesDetails;
