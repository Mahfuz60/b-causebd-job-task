import React from 'react';
import Companies from '../Pages/Companies/Companies';
import Header from '../Pages/Header/Header';
import HeaderCheckBox from '../Pages/HeaderCheckBox/HeaderCheckBox';
import HeaderMain from '../Pages/HeaderMain/HeaderMain';
import HeaderNav from '../Pages/headerNav/HeaderNav';
import ServiceBenefit from '../Pages/ServiceBenefit/ServiceBenefit';
import Service from '../Pages/Services/Service/Service';
import Slider from '../Pages/Slider/Slider';

const Home = () => {
  return (
    <>
      <Header />
      <HeaderNav />
      <HeaderMain />
      <HeaderCheckBox />
      <Service />
      <ServiceBenefit />
      <Companies />
      <Slider />
    </>
  );
};

export default Home;
