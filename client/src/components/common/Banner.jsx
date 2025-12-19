import React, { memo, useMemo } from "react";
import { NavLink } from "react-router-dom";

const Banner = ({
  img,
  title,
  link1,
  text1,
  text2,
  height = "200px",
}) => {

  const bannerStyle = useMemo(() => ({
    backgroundImage: img ? `url(${img})` : undefined,
    backgroundColor: "#0006",
    backgroundBlendMode: "multiply",
  }), [img]);

  return (
    <>
      <section
        id="banner"
        className="banner w-full py-24 bg-cover bg-center bg-no-repeat"
        style={bannerStyle}
      >
        <div
          className="sm:container mx-auto px-4 flex flex-col justify-end gap-5"
          style={{ height }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold font-josefin capitalize text-white">
            {title}
          </h1>

          <div className="flex items-center gap-2 text-white text-xl pb-5 capitalize font-bold pl-4">
            <NavLink to={link1}>{text1}</NavLink> /
            <span>{text2}</span>
          </div>
        </div>
      </section>

      <div className="w-full h-20 -mt-20 rounded-t-[100px] bg-white" />
    </>
  );
};

export default memo(Banner);