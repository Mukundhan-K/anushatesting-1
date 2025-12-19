import React from 'react';

// components
import Hero from "../components/home/hero";
import OurJourney from "../components/home/ourjourney.jsx";
import OurProcess from '../components/home/OurProcess';
import Pricing from '../components/home/Pricing';
import PhotoGallery from '../components/ui/PhotoGallery';
import OurProjects from '../components/home/OurProjects';
import Review from '../components/home/Review';
import BeforeAfter from '../components/home/BeforeAfter';
import BankingPatners from '../components/home/BankingPatners';
import CostEstimation from '../components/home/CostEstimation';
import ContactUs from '../components/home/ContactUs';
import CommonSEO from '../utility/commonSeo';
import { Helmet } from 'react-helmet';

const Home = ({setOpenPop}) => {
  return (<>
    <CommonSEO
      title='Home | Turnkey Construction in Chennai | Builders,interior design,renovation chennai'   
    />

    <Hero />
    <OurJourney />
    <OurProcess />
    <Pricing setOpenPop={setOpenPop} />
    <OurProjects />
    <Review setOpenPop={setOpenPop} />
    <BeforeAfter />
    <CostEstimation setOpenPop={setOpenPop} />
    <BankingPatners />
    <ContactUs setOpenPop={setOpenPop} />
  </>);
};

export default Home;