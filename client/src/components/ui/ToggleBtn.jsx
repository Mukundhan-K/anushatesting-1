import React from 'react';
import { getImageSvg } from '../../utility/getImage';

const ToggleBtn = ({parentState, setparentState, icon1, icon2}) => {
  return (<>
    <div className="toggle-cont">
        <input className="toggle-input" id="toggle" name="toggle" type="checkbox"
            checked={parentState} onChange={(e)=>setparentState(()=>e.target.checked)}
        />
        <label className="toggle-label" htmlFor="toggle">
            <div className="cont-label-play">
                <span className="label-play">
                  <img src={(!parentState) ? getImageSvg(icon1) : getImageSvg(icon2)} className='block drop-shadow-2xl select-none'
                     loading='lazy' alt={`toggle icon`} title={`icon for toggle`}
                  />
                </span>
            </div>
        </label>
    </div>
  </>);
};

export default ToggleBtn;