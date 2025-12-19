import React from 'react';
import { getImageSvg } from '../../utility/getImage';

const WhyChooseUs = ({data, css, outercss, crdcss}) => {

  return (<>
      <section className={`${outercss ? outercss : "pt-5 pb-16 bg-bg-brown"}`}>
        <div className='sm:container mx-auto px-4'>
            <div className={`grid ${css ? css : 'sm:grid-cols-2 xl:grid-cols-4'} gap-4 sm:gap-8 items-center`}>
                {data.map(({img, title,text})=>(
                    <div key={title} className={`h-full rounded-3xl p-10 shadow-sm ${crdcss ? crdcss : 'bg-white'}`}>
                        <div className='flex items-center gap-5 pb-7 border-b'>
                            <div className='size-16 aspect-square grid place-items-center bg-gray-300 rounded-full'>
                                <img src={getImageSvg(img)} className='size-10!' loading='lazy' alt={`${img} icon`} title={`icon of ${img}`} />
                            </div>
                            <div className='font-josefin text-2xl font-semibold'>{title}</div>
                        </div>
                        <p className='pt-7'>{text}</p>
                    </div>
                 )
                )}
            </div>
        </div>
      </section>
    </> );
};

export default WhyChooseUs;