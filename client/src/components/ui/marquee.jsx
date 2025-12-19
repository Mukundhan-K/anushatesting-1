import React from 'react';

const Marquee = ({quotes, color="black"}) => {
 
  return (<>
    <div className="marquee-container">
        <div className={`marquee-wrapper border border-${color}`}>
        <div className="marquee font-outfit uppercase">
            <ul>
                {/* <li>Shaping</li>
                <li>future  </li>
                <li>through</li>
                <li>excellence</li> */}
                <li className={`text-${color}`}>{quotes}</li>
            </ul>
            <ul>
                {/* <li>Shaping</li>
                <li>future  </li>
                <li>through</li>
                <li>excellence</li> */}
                <li className={`text-${color}`}>{quotes}</li>
            </ul>
        </div>
        </div>
    </div>
  </>);
};

export default Marquee;