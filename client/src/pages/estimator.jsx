import React from 'react';

// components
import Banner from "../components/common/Banner";
import CostEstimator from '../components/estimators/CostEstimator';
import Marquee from '../components/ui/marquee';
import Heading from '../components/common/Heading';
import LoanEstimator from "../components/estimators/LoanEstimator";
import BankingPatners from '../components/home/BankingPatners';
import Pricing from '../components/home/Pricing';
import ButtonArrow from '../components/ui/ButtonArrow';

const Estimator = ({setOpenPop}) => {

  const registeredFormControl = [
    {
      name : "name",
      label : "Name",
      placeholder : "Ex - Arunya",
      componentType : "input",
      type : "text",
      icon : "user"
    },
    {
      name : "phone",
      label : "Phone",
      placeholder : "Ex - +91 76959 50724",
      componentType : "input",
      type : "tel",
      icon : "call"
    },
    {
      name : "email",
      label : "Email",
      placeholder : "Ex - anushastructures02@gmail.com",
      componentType : "input",
      type : "text",
      icon : "email"
    },
    {
      name : "type",
      label : "Construction Type",
      placeholder : "Select your Type",
      componentType : "select",
      options : [
        {id:'commercial', name: "Commercial"},
        {id:'industrial', name: "Industrial"},
        {id:'residential', name: "Residential"},
        {id:'corporate', name: "Corporate"},
      ],
    },
    {
      name : "location",
      label : "Location of Plot",
      placeholder : "Ex - Perumal (St), velacherry",
      componentType : "input",
      type : "text",
      icon : "location-house"
    },
    {
      name : "builtarea",
      label : "Built-up Area (sqft)",
      placeholder : "Ex - 1000",
      componentType : "input",
      type : "text",
      icon : "ruler-l"
    },
  ];

  return (<>
        
    <Banner title={"Cost Estimator"} link1={"/home"} text1={"Home"} text2={"Cost Estimator"} />

    <section className='h-full w-full'>
      <div className='sm:container mx-auto py-10 px-4'>
        <div className='pb-10'>
          <Marquee quotes={"Free Estimate"} />
          <div className='pt-10'></div>
          <h1 className='siteHeading text-3xl md:text-4xl lg:text-5xl font-semibold'>Estimate your Home Construction Cost</h1>
          <p className="lg:pb-8 text-lg leading-8 text-gray-600">Building your dream home? Instantly calculate your construction cost and plan your budget with confidence</p>
        </div>

        <CostEstimator registeredFormControl={registeredFormControl} clsStyle={"grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}  />
      </div>
    </section>

    <section className='h-full w-full'>
      <div className='sm:container mx-auto py-10 px-4'>
        <div className='pb-10'>
          <Marquee quotes={"Free Estimate"} />
          <div className='pt-10'></div>
          <Heading text={"Estimate your Loan EMI"} align={"left"} />
          <p className="lg:pb-8 text-lg leading-8 text-gray-600">Calculate your home loan EMI, total interest, and repayment schedule with precision to make smart financial decisions and secure your future.</p>
        </div>

        <LoanEstimator clsStyle={"grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}  />
      </div>
    </section>

    <Pricing />
    <BankingPatners />

    <div className='pt-5 text-center'>
        <ButtonArrow btnonclick={() => setOpenPop(true)} text='Start Your Construction' />
    </div>


  </>);
};

export default Estimator;