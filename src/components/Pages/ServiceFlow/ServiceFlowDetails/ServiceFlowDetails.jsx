import React from 'react';
import './ServiceFlowDetails.css';

const ServiceFlowDetails = ({ service }) => {
  const { id, title, description } = service;
  return (
    <div className='col-md-10 col-12 mx-auto d-flex'>
      <div className='cardsHead mt-4'>
        <div className='cards d-flex p-1'>
          <h6 className='numbers'>{id}</h6>
          <div className='cardData'>
            <h5>{title}</h5>
            <p>{description}</p>
           
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default ServiceFlowDetails;
