import React from 'react';

import Marquee from "../ui/marquee";
import ButtonArrow from "../ui/ButtonArrow";
import ExpandableGallery from "../ui/ExpandableGallery";
// import Heading from "../common/Heading";

import { getImageSvg } from "../../utility/getImage";
import { Link } from 'react-router-dom';

const About = () => {
  return (<>
    <section className='h-full w-full pb-8 lg:py-16'>
        <div className='sm:container mx-auto px-4'>

            <div className='grid grid-cols-11 gap-8 lg:gap-16'>

              <div className='col-span-11 xl:col-span-4'>

                <div id='serAbt' className='h-[350px] lg:h-[450px] w-auto flex items-end rounded-3xl bg-cover bg-no-repeat bg-center xsl:bg-center' >
                  <div className='flex relative'>
                    <div className='curve size-10 -top-[29px] bg-white'></div>
                    <div className='h-16 w-56 rounded-tr-3xl bg-white'></div>
                    <div className='curve size-10 -bottom-[11px] -right-[40px] bg-white'></div>
                  </div>
                </div>

                <div className='pb-5 '>
                    <Marquee quotes={"our commitment"} />
                    <div className='pt-8'></div>
                    <h1 className='text-4xl md:text-5xl'>Comprehensive Construction & Design Services Tailored to You</h1>
                </div>
               
                <Link to={"/about"} className='w-fit'>
                 <ButtonArrow text='Learn More' />
                </Link>

              </div>

              <div className='col-span-11 xl:col-span-7 xl:px-10 grid grid-cols-1 xsl:grid-cols-2 gap-5 md:gap-16'>
                <div className='border border-gray-400 rounded-3xl p-8 flex flex-col gap-5'>
                  <div className='border-b-2 border-gray-300 pb-5'>
                      <div className='size-24 aspect-square bg-gray-300 rounded-full grid place-items-center'>
                          <img src={getImageSvg("quality")} className='size-16' loading='lazy' alt={`quality icon`} title={`icon of quality`}  />
                      </div>
                  </div>
                  <h2 className='text-2xl md:text-3xl'>Corporate Responsibility</h2>
                  <p className='leading-6 text-xl text-gray-600'>We are committed and responsible to build, community-focused development.</p>
                </div>

                <div className='border border-gray-400 rounded-3xl p-8 flex flex-col gap-5'>
                  <div className='border-b-2 border-gray-300 pb-5'>
                      <div className='size-24 aspect-square bg-gray-300 rounded-full grid place-items-center'>
                          <img src={getImageSvg("quality")} className='size-16' loading='lazy' alt={`quality icon`} title={`icon of quality`}  />
                      </div>
                  </div>
                  <h2 className='text-2xl md:text-3xl'>Security & Compliance</h2>
                  <p className='leading-6 text-xl text-gray-600'>We follow industry leading safety protocols and legal standards to deliver complete peace of mind.</p>
                </div>

                <div className='border border-gray-400 rounded-3xl p-8 flex flex-col gap-5'>
                  <div className='border-b-2 border-gray-300 pb-5'>
                      <div className='size-24 aspect-square bg-gray-300 rounded-full grid place-items-center'>
                          <img src={getImageSvg("quality")} className='size-16' loading='lazy' alt={`quality icon`} title={`icon of quality`}  />
                      </div>
                  </div>
                  <h2 className='text-2xl md:text-3xl'>Experts with Team Spirit</h2>
                  <p className='leading-6 text-xl text-gray-600'>Our skilled professionals create innovative, future-ready project solutions</p>
                </div>

                <div className='border border-gray-400 rounded-3xl p-8 flex flex-col gap-5'>
                  <div className='border-b-2 border-gray-300 pb-5'>
                      <div className='size-24 aspect-square bg-gray-300 rounded-full grid place-items-center'>
                          <img src={getImageSvg("quality")} className='size-16' loading='lazy' alt={`quality icon`} title={`icon of quality`}  />
                      </div>
                  </div>
                  <h2 className='text-2xl md:text-3xl'>Diversity & Equity</h2>
                  <p className='leading-6 text-xl text-gray-600'>We ensure this with honest practices and complete professional integrity.</p>
                </div>

              </div>

            </div>

        </div>
    </section>
  </>);
};

export default About;