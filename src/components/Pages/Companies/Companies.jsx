import React from 'react';
import './Companies.css';
import handShadow from '../../../images/service/headerShadow.png';
import pic1 from '../../../images/companies/pic1.png';
import pic2 from '../../../images/companies/pic2.png';
import pic3 from '../../../images/companies/pic3.png';
import CompaniesDetails from './CompaniesDetails';

const companiesData = [
  {
    id: 1,
    pic: `${pic1}`,
    points: 'Point 1',
    title: '多言語戦略で',
    description: '世界への動画発信',
  },
  {
    id: 2,
    pic: `${pic2}`,
    points: 'Point 2',
    title: '希望するサービスを',
    description: '選んで依頼可能',
  },
  {
    id: 3,
    pic: `${pic3}`,
    points: 'Point 3',
    title: '立ち上げから',
    description: '戦略までトータルコンサル',
  },
];

const Companies = () => {
  return (
    <div className='companies'>
      <div className='container'>
        <div className='companiesTitle'>
          <img src={handShadow} alt='' style={{ width: '220px', height: '25px' }} />
          <h2 className='text-center'>他社との違い</h2>
        </div>
        <div className='row d-flex'>
          {companiesData.map((company, id) => (
            <CompaniesDetails company={company} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
