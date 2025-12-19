import React from 'react';
import Marquee from '../ui/marquee';
import Heading from '../common/Heading';
import { getImagewebp } from '../../utility/getImage';

const BankingPatners = () => {

    const image = [
        {img:"sbi"},
        {img:"indian"},
        {img:"iob"},
        {img:"hdfc"},
        {img:"icic"},
        {img:"bajaj"},
    ];

  return (<>
    <section className='h-full w-full py-10'>
      <div className='sm:container mx-auto px-4'>
        <div className='md:pb-10 flex flex-col justify-center items-center'>
            <Marquee quotes={"home loans"} />
            <div className='pt-10'></div>
            <Heading text={"Our Banking Partners"} />
            <p className="max-w-2xl pb-8 text-center text-lg leading-8 text-gray-600">Helping customers get easy access of home construction loans</p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5'>
            {image.map(({img}, i)=>(
                <div key={i} className='border border-gray-400 rounded-3xl overflow-hidden'>
                    <img src={getImagewebp(`banks/${img}`)} className='block w-full h-full'loading='lazy' alt={`${img} icon`} title={`icon of ${img}`} />
                </div>
              )
            )}
        </div>
      </div>
    </section>
  </>);
};

export default BankingPatners;