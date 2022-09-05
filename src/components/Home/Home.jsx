import React from 'react';
import Companies from '../Pages/Companies/Companies';
import FeeExample from '../Pages/FeeExample/FeeExample';
import Header from '../Pages/Header/Header';
import HeaderCheckBox from '../Pages/HeaderCheckBox/HeaderCheckBox';
import HeaderMain from '../Pages/HeaderMain/HeaderMain';
import HeaderNav from '../Pages/headerNav/HeaderNav';
import ServiceBenefit from '../Pages/ServiceBenefit/ServiceBenefit';
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
      <UserService/>
      <FeeExample/>
    </>
  );
};

export default Home;
