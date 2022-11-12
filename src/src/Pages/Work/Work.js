import React from "react";
import { data } from "../../Data/Data.js";
import WorkPage from "../../Components/WorkPage/WorkPage.js";

const Work = () => {
  return (
    <div className="px-4 md:px-36 lg:px-52 xl:px-72 bg-black">
      <WorkPage data={data} />
    </div>
  );
};

export default Work;
