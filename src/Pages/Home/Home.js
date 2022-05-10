import React from 'react';
import Banner from './Banner';
import Dental from './Dental';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Dental></Dental>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
    </>
  );
};

export default Home;