import React from 'react';

import ButtonArrow from "../ui/ButtonArrow";
import Marquee from "../ui/marquee";
import Heading from "../common/Heading";
import { getImageSvg } from '../../utility/getImage';
import { Link } from 'react-router-dom';

const AboutUs = ({setOpenPop}) => {
  return (<>
    <section className='h-full w-full lg:py-16 '>
      <div className='sm:container mx-auto px-4'>

        <div className='grid lg:grid-cols-2 items-center gap-5 lg:gap-16'>

          <div className='lg:pb-10'>
            <Marquee quotes={"About us"} />
            <div className='pt-10'></div>
            <div className='xl:w-[700px] pb-5'>
              <Heading text={""} align='text-left' />
              <h1 className='siteHeading text-3xl md:text-4xl lg:text-5xl font-semibold'>Crafting the Future of Architecture and Design</h1>
            </div>
            <div className='hidden lg:block'>
              <Link to={"/services"} className='w-fit'>
                <ButtonArrow text='Explore All' />
              </Link>

            </div>
          </div>

          <div>
            <h2 className='text-2xl'>We turn your dream spaces into reality, brick by brick and detail by detail.</h2>
            <p className="pt-8 text-lg leading-8 text-gray-600"> Whether you need full-scale building construction or high-end interior design, we deliver unmatched precision, quality craftsmanship, and innovative solutions to create inspiring living and working environments across India.</p>
            <div className='block lg:hidden pt-10'>
              <Link to={"/services"} className='w-fit'>
                <ButtonArrow text='Explore All' />
              </Link>
            </div>

          </div>

        </div>

        <div id='aboutCnt' className='h-[400px] lg:h-[600px] mt-10 bg-cover bg-center bg-no-repeat rounded-3xl p-8' >
          <div className='w-fit py-3 px-5 mt-[300px] md:mt-0 bg-a-royalsafforn rounded-3xl text-xl'>Mr.SA.Sai Arun, MD-ASPL</div>
        </div>

        <div className='py-8 lg:pt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-16'>

          <div className='border border-gray-400 rounded-3xl p-8 flex flex-col gap-5'>
            <div className='border-b-2 border-gray-300 pb-5'>
                <div className='size-24 aspect-square bg-gray-300 rounded-full grid place-items-center'>
                    <img src={getImageSvg("quality")}className='size-16' loading='lazy' alt={`quality icon`} title={`icon of quality`} />
                </div>
            </div>
            <h3 className='text-3xl'>High quality</h3>
            <p className='leading-6 text-xl text-gray-600'>We are committed to zero incidents, with a lost time frequency rate that leads the industry.</p>
          </div>

          <div className='border border-gray-400 rounded-3xl p-8 flex flex-col gap-5'>
            <div className='border-b-2 border-gray-300 pb-5'>
                <div className='size-24 aspect-square bg-gray-300 rounded-full grid place-items-center'>
                    <img src={getImageSvg("quality")} className='size-16' loading="lazy"  alt={`quality icon`} title={`icon of quality`} />
                </div>
            </div>
            <h3 className='text-3xl'>Innovation</h3>
            <p className='leading-6 text-xl text-gray-600'>We uphold this standard through complete transparency & professional conduct in every action we take</p>
          </div>

          <div className='border border-gray-400 rounded-3xl p-8 flex flex-col gap-5'>
            <div className='border-b-2 border-gray-300 pb-5'>
                <div className='size-24 aspect-square bg-gray-300 rounded-full grid place-items-center'>
                    <img src={getImageSvg("quality")} className='size-16' loading="lazy" alt={`quality icon`} title={`icon of quality`} />
                </div>
            </div>
            <h3 className='text-3xl'>Free Consultation</h3>
            <p className='leading-6 text-xl text-gray-600'>We collaborate with investors and developers to build landmark projects that leave a lasting impact</p>
          </div>

          <div className='border border-gray-400 rounded-3xl p-8 flex flex-col gap-5'>
            <div className='border-b-2 border-gray-300 pb-5'>
                <div className='size-24 aspect-square bg-gray-300 rounded-full grid place-items-center'>
                    <img src={getImageSvg("quality")} className='size-16' loading="lazy" alt={`quality icon`} title={`icon of quality`} />
                </div>
            </div>
            <h3 className='text-3xl'>Timeline</h3>
            <p className='leading-6 text-xl text-gray-600'>Our versatile team provides timely, innovative solutions driven by future-focused expertis</p>
          </div>

        </div>

        <div className='lg:pt-5 pb-8 lg:pb-0 text-center'>
           <ButtonArrow btnonclick={() => setOpenPop(true)} text='Start Your Construction' />
        </div>

        

      </div>
    </section>
  </>);
};

export default AboutUs;