import React from 'react';
import './FrequentlyDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSquareCheck } from '@fortawesome/free-solid-svg-icons';

const FrequentlyDetails = ({ frequently }) => {
  const { question, ans } = frequently;
  return (
    <>
      <div className='col-md-10 col-10  mx-auto'>
        <div className='frequentlyHead mt-3'>
          <div className='frequentlycard  '>
            <h5>
              <span className='question'>Q</span> {question}
            </h5>
            <div className='frequentlyAns'>
              <p>
                <span className='ans'>A</span> {ans}
              </p>
              <span className='ansRight'>詳しくはこちら</span>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default FrequentlyDetails;
