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
import Service1 from '../Pages/Services/Service1/Service1';
import Service2 from '../Pages/Services/Service2/Service2';
import Service3 from '../Pages/Services/Service3/Service3';
import Service4 from '../Pages/Services/Service4/Service4';
import Service5 from '../Pages/Services/Service5/Service5';
import Sliders from '../Pages/Sliders/Sliders';
import UserService from '../Pages/UserService/UserService';

const Home = () => {
  return (
    <>
      <Header />
      <HeaderNav />
      <HeaderMain />
      <HeaderCheckBox />
      <Service1 />
      <Service2 />
      <Service3 />
      <Service4 />
      <Service5 />
      <ServiceBenefit />
      <Companies />
      <Sliders />
      <UserService />
      <FeeExample />
      <ServiceFlow />
      <FrequentlyQuestion />
      <Multilization />
      <Bannar />
      <ServiceList />
      <Footer />
    </>
  );
};

export default Home;
