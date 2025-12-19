import React from 'react';
import Marquee from '../ui/marquee';
import Heading from '../common/Heading';
import MarqueeSlider from '../ui/MarqueeSlider';

const Awards = () => {
  return (<>
    <section className='hfull w-full py-8 pt-16 lg:py-16 bg-bg-brown'>
      <div className='container mx-auto overflow-hidden'>

        <div className='pb-5 lg:pb-16 flex flex-col items-center'>
            <Marquee quotes={"Awards"} />
            <div className='pt-10'></div>
            <Heading text={"Recognitions we Received"} />
            <p className="py-5 text-lg leading-8 text-gray-600">We are a trusted developer focused on client success and creating lasting value in the communities we serve.</p>
        </div>

        <MarqueeSlider />
        <MarqueeSlider reverse={true} />

      </div>
    </section>
  </>);
};

export default Awards;