import React from 'react';

import Marquee from '../ui/marquee';
import Heading from '../common/Heading';

import CostEstimator from "../estimators/CostEstimator";
import ButtonArrow from '../ui/ButtonArrow';
import { getImagewebp } from '../../utility/getImage';
import ContactForm from '../common/ContactForm';

const ContactUs = ({setOpenPop}) => {

  return (<>
    <section className='h-full w-full bg-bg-brown'>
      <div className='sm:container mx-auto py-8 lg:py-16 px-4'>

        <div className='pb-10 hidden lg:flex flex-col justify-center items-center'>
            <Marquee quotes={"Enuire us"} />
            <div className='pt-8'></div>
            <Heading text={"Get specialist advice for residential, commercial or property"} classes={"md:w-2/3"} />
        </div>

        <div className='pt-5 flex flex-col flex-col lg:flex-row justify-center gap-5'>

          <div className='w-full lg:w-1/2 rounded-3xl px-5 lg:py-10 '>
            <Marquee quotes={"quick support"} />
            <h3 className="py-5 text-4xl" >We're Ready to Help You Anytime</h3>
            <p className="max-w-2xl pb-8 text-lg leading-8 text-gray-600">Our team is always ready to support you at every stage of your project. We’re here to make your entire journey smooth, simple, and stress-free.</p>
            <img src={getImagewebp("Contact-us-img")} loading='lazy' alt={`anusha structures building`} title={`building of anusha structures`} />
          </div>

          <div className='homeContact w-full lg:w-1/2 h-fit p-8 lg:p-16 flex flex-col justify-center gap-10 bg-white shadow-sm rounded-3xl relative '>
            <div className='flex flex-col gap-5 relative'>
                <Marquee quotes={"Contact from"} />
                <h3 className="text-4xl" >Ask Us Anything!</h3>
            </div>
            <ContactForm />
          </div>

        </div>

        <div className='text-center pt-5 xl:mt-0'>
          <ButtonArrow btnonclick={() => setOpenPop(true)} text='Start Your Construction' />
        </div>

      </div>
    </section>
  </>);
};

export default ContactUs;