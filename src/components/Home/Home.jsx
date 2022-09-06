import React from 'react';
import Bannar from '../Pages/Bannar/Bannar';
import Companies from '../Pages/Companies/Companies';
import FeeExample from '../Pages/FeeExample/FeeExample';
import Footer from '../Pages/Footer/Footer';
import FrequentlyQuestion from '../Pages/FrequentlyQuestion/FrequentlyQuestion';
import Header from '../Pages/Header/Header';
import HeaderCheckBox from '../Pages/HeaderCheckBox/HeaderCheckBox';
import HeaderMain from '../Pages/HeaderMain/HeaderMain';
import HeaderNav from '../Pages/headerNav/HeaderNav';
import Multilization from '../Pages/Multilization/Multilization';
import ServiceBenefit from '../Pages/ServiceBenefit/ServiceBenefit';
import ServiceFlow from '../Pages/ServiceFlow/ServiceFlow';
import ServiceList from '../Pages/ServiceList/ServiceList';
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
      {/* <ServiceBenefit />
       <Companies />
      <Sliders />
      <UserService />
      <FeeExample />
      <ServiceFlow />
      <FrequentlyQuestion />
      <Multilization />
      <Bannar />
      <ServiceList />
      <Footer /> */}
    </>
  );
};

export default Home;
