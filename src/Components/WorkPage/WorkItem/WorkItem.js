import React from "react";
import { Link } from "react-router-dom";
import "./WorkItem.css";

const WorkItem = ({
  data: { id, description, title, createdAt, cover, mimg, category },
}) => {
  return (
    <Link
      to={`/work/${id}`}
      className="relative flex justify-center cursor-pointer items-center group"
    >
      <div class="relative">

      {/* src={require("../Data/img/axiompost/AXIOM-POST_BLOCK_01.jpg")} */}

        <img src={mimg} class="aspect-video object-cover" alt="..." />
        <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-teal-700"></div>
      </div>
      <div className="absolute opacity-0 group-hover:opacity-100 z-10 text-white text-center">
        <div className="hidden md:block text-xs tracking-wide translate-y-11 duration-100 group-hover:translate-y-0 font-bristone">
          {title.slice(0, 20).toUpperCase()}
        </div>
        <div className="hidden md:block text-xs tracking-wide translate-y-11 duration-100 group-hover:translate-y-0 font-">
          {category.toUpperCase()}
        </div>
      </div>
    </Link>
  );
};

export default WorkItem;
