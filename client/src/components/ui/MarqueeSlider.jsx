import React from 'react';
import { getImageSvg } from '../../utility/getImage';

const MarqueeSlider = ({reverse}) => {
  return (<>
    <div className="stock-ticker">
        <ul className={reverse && "animation-forward"}>
            <li className="w-fit">
                <div className='rounded-full bg-white p-3 pr-5 flex items-center gap-3'>
                    <div className='size-14 aspect-square bg-a-royalsafforn grid place-items-center rounded-full'>
                        <img src={getImageSvg("cup")} alt="cup" className='size-10' loading='lazy' title={`icon of cup`} />
                    </div>
                    <h3 className='text-3xl'>
                        Emerging Designer of the Year <span className='font-normal text-gray-400'>|</span>
                    </h3>
                    <small>2022</small>
                </div>
            </li>
        
            <li className="w-fit">
                <div className='rounded-full bg-white p-3 pr-5 flex items-center gap-3'>
                    <div className='size-14 aspect-square bg-a-royalsafforn grid place-items-center rounded-full'>
                        <img src={getImageSvg("cup")} alt="cup" className='size-10' loading='lazy' title={`icon of cup`} />
                    </div>
                    <h3 className='text-3xl'>
                        Emerging Designer of the Year <span className='font-normal text-gray-400'>|</span>
                    </h3>
                    <small>2022</small>
                </div>
            </li>
        
            <li className="w-fit">
                <div className='rounded-full bg-white p-3 pr-5 flex items-center gap-3'>
                    <div className='size-14 aspect-square bg-a-royalsafforn grid place-items-center rounded-full'>
                        <img src={getImageSvg("cup")} alt="cup" className='size-10' loading='lazy' title={`icon of cup`} />
                    </div>
                    <h3 className='text-3xl'>
                        Emerging Designer of the Year <span className='font-normal text-gray-400'>|</span>
                    </h3>
                    <small>2022</small>
                </div>
            </li>
        
            <li className="w-fit">
                <div className='rounded-full bg-white p-3 pr-5 flex items-center gap-3'>
                    <div className='size-14 aspect-square bg-a-royalsafforn grid place-items-center rounded-full'>
                        <img src={getImageSvg("cup")} alt="cup" className='size-10' loading='lazy' title={`icon of cup`} />
                    </div>
                    <h3 className='text-3xl'>
                        Emerging Designer of the Year <span className='font-normal text-gray-400'>|</span>
                    </h3>
                    <small>2022</small>
                </div>
            </li>
        
        </ul>

        <ul className={reverse && "animation-forward"}>
            <li className="w-fit">
                <div className='rounded-full bg-white p-3 pr-5 flex items-center gap-3'>
                    <div className='size-14 aspect-square bg-a-royalsafforn grid place-items-center rounded-full'>
                        <img src={getImageSvg("cup")} alt="cup" className='size-10' loading='lazy' title={`icon of cup`} />
                    </div>
                    <h3 className='text-3xl'>
                        Emerging Designer of the Year <span className='font-normal text-gray-400'>|</span>
                    </h3>
                    <small>2022</small>
                </div>
            </li>
        
            <li className="w-fit">
                <div className='rounded-full bg-white p-3 pr-5 flex items-center gap-3'>
                    <div className='size-14 aspect-square bg-a-royalsafforn grid place-items-center rounded-full'>
                        <img src={getImageSvg("cup")} alt="cup" className='size-10' loading='lazy' title={`icon of cup`} />
                    </div>
                    <h3 className='text-3xl'>
                        Emerging Designer of the Year <span className='font-normal text-gray-400'>|</span>
                    </h3>
                    <small>2022</small>
                </div>
            </li>
        
            <li className="w-fit">
                <div className='rounded-full bg-white p-3 pr-5 flex items-center gap-3'>
                    <div className='size-14 aspect-square bg-a-royalsafforn grid place-items-center rounded-full'>
                        <img src={getImageSvg("cup")} alt="cup" className='size-10' loading='lazy' title={`icon of cup`} />
                    </div>
                    <h3 className='text-3xl'>
                        Emerging Designer of the Year <span className='font-normal text-gray-400'>|</span>
                    </h3>
                    <small>2022</small>
                </div>
            </li>
        
            <li className="w-fit">
                <div className='rounded-full bg-white p-3 pr-5 flex items-center gap-3'>
                    <div className='size-14 aspect-square bg-a-royalsafforn grid place-items-center rounded-full'>
                        <img src={getImageSvg("cup")} alt="cup" className='size-10' loading='lazy' title={`icon of cup`} />
                    </div>
                    <h3 className='text-3xl'>
                        Emerging Designer of the Year <span className='font-normal text-gray-400'>|</span>
                    </h3>
                    <small>2022</small>
                </div>
            </li>
        
        </ul>

    </div>
  </>);
};

export default MarqueeSlider;