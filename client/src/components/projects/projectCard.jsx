import { memo, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { getImageSvg } from "../../utility/getImage";

const ProjectCard = ({ id, images, location, title, status }) => {

  // Memoize background style (IMPORTANT)
  const cardStyle = useMemo(
    () => ({
      backgroundImage: `url(${images})`,
      backgroundColor: "#0008",
      backgroundBlendMode: "multiply",
    }),
    [images]
  );

  const statusClass =
    status === "completed" ? "bg-green-400" : "bg-a-royalsafforn";

  return (
    <NavLink
      to={id}
      className="
        h-full rounded-3xl bg-white cursor-pointer
        transition-all duration-500 bg-cover bg-bottom-right bg-no-repeat
        flex flex-col
      "
      style={cardStyle}
      aria-label={`View project ${title}`}
    >
      {/* Status */}
      <div className="flex justify-end pr-8 pt-8">
        <span
          className={`px-5 py-2 rounded-full text-white ${statusClass}`}
        >
          {status}
        </span>
      </div>

      {/* Content */}
      <div className="h-[350px] p-12 flex flex-col justify-end gap-4">
        <div className="w-full flex flex-col md:flex-row gap-2 md:items-end border-b-2 pb-4 border-gray-400">
          <div className="size-9 rounded-full bg-a-royalsafforn grid place-items-center">
            <img
              src={getImageSvg("location")}
              className="size-7"
              loading="lazy"
              alt="Location icon"
            />
          </div>
          <span className="text-white text-xl">{location}</span>
        </div>

        <h2 className="text-3xl xl:text-4xl text-white">
          {title}
        </h2>
      </div>
    </NavLink>
  );
};

export default memo(ProjectCard);
