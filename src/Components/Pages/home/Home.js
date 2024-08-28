import React from 'react';
import AiSection from './AiSection';
import Cybersecurity from './Cybersecurity';
import Services from './Services';
import OurPartners from './OurPartners';
import TechSpotlight from './TechSpotlight';
import Slider from './Slider';
import HomeSlider from './HomeSlider';
import GetinTouch from './GetinTouch';




function Home() {
 
  return (
    <>
    <HomeSlider/>     

      <AiSection />

      <Cybersecurity />

      <Services />

      <OurPartners />

      <TechSpotlight />

      <Slider/>

      <GetinTouch/>
    </>
  );
}

export default Home;
