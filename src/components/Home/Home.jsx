import React from 'react';
import Companies from '../Pages/Companies/Companies';
import FeeExample from '../Pages/FeeExample/FeeExample';
import FrequentlyQuestion from '../Pages/FrequentlyQuestion/FrequentlyQuestion';
import Header from '../Pages/Header/Header';
import HeaderCheckBox from '../Pages/HeaderCheckBox/HeaderCheckBox';
import HeaderMain from '../Pages/HeaderMain/HeaderMain';
import HeaderNav from '../Pages/headerNav/HeaderNav';
import ServiceBenefit from '../Pages/ServiceBenefit/ServiceBenefit';
import ServiceFlow from '../Pages/ServiceFlow/ServiceFlow';
import Service from '../Pages/Services/Service/Service';
import Sliders from '../Pages/Sliders/Sliders';
import UserService from '../Pages/UserService/UserService';

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
      <Sliders />
      <UserService />
      <FeeExample />
      <ServiceFlow />
      <FrequentlyQuestion />
    </>
  );
};

export default Home;
