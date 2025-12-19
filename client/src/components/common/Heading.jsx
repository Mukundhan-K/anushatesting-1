import React from 'react';

const Heading = ({text, align="center", classes}) => {
  return (
    <h2 className={`siteHeading text-3xl md:text-4xl lg:text-5xl text-${align} ${classes} font-semibold`}>{text}</h2>
  );
};

export default Heading;