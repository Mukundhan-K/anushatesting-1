import React from 'react';
import Banner from '../components/common/Banner';
import Marquee from '../components/ui/marquee';
import Heading from '../components/common/Heading';
import ContactUs from '../components/home/ContactUs';
import { getImageSvg } from '../utility/getImage';
import CommonSEO from '../utility/commonSeo';
import ButtonArrow from '../components/ui/ButtonArrow';

const contact = ({setOpenPop}) => {

    const cards = [
      {img: "email", title: "Support email", text: "anushastructures02@gmail.com"},
      {img: "call", title: "Phone number", text: "+91 76959 50724"},
      {img: "location", title: "Location", text: "No:58 A,Madison Street,El paso, texus, USA"},
    ];

  return (<>

    <CommonSEO
      title={`Contact Us | Construction in Chennai | Builders,interior design,renovation chennai`}  
    />

    <Banner title={"Contact Us"} link1={"/home"} text1={"home"} text2={"Contact Us"} />

    <section className='h-full w-full md:pt-16'>
      <div className='sm:container mx-auto px-4'>
    
        <div className='pb-10 flex flex-col items-center'>
          <Marquee quotes={"our Details"} />
          <div className='pt-10'></div>
          <h1 className='siteHeading text-3xl md:text-4xl lg:text-5xl font-semibold lg:w-2/3 text-center'>Contact Us for Residential and Commercial Construction Services in Chennai</h1>
        </div>
     
        <section className={`pb-10 xl:p-10 rounded-3xl`}>
          <div className='sm:container mx-auto px-4 sm:px-0'>
              <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 items-center`}>
                  {cards.map(({img, title,text})=>(
                      <div key={title} className={`h-full rounded-3xl p-10 shadow-sm bg-bg-brown`}>
                          <div className='flex items-center gap-5 pb-7 border-b'>
                              <div className='size-16 aspect-square grid place-items-center bg-gray-300 rounded-full'>
                                  <img src={getImageSvg(img)} className='size-10!' loading='lazy' alt={`${img} icon`} title={`icon of ${img}`} />
                              </div>
                              <div className='font-josefin text-2xl font-semibold'>{title}</div>
                          </div>
                          <h4 className='pt-7 font-outfit text-2xl text-wrap break-all'>{text}</h4>
                      </div>
                  )
                  )}
              </div>

          <div className='pt-10 lg:pt-16 text-center'>
              <ButtonArrow btnonclick={() => setOpenPop(true)} text='Start Your Construction' />
          </div>

          </div>
        </section>

      </div>
    </section>

    <ContactUs setOpenPop={setOpenPop} />

    <div className=''>
    
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.397974781006!2d80.17995297359097!3d13.073945412629163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52616613ecf81d%3A0xf50543a112580f2f!2s%22O%22%20NATURALS!5e0!3m2!1sen!2sin!4v1761117560490!5m2!1sen!2sin" className='w-full h-[600px]' allowFullScreen="" loading="lazy" title="Google Map showing Anusha Structures office location" referrerPolicy="no-referrer-when-downgrade"></iframe>

    </div>


  </>);
};

export default contact;