import React from "react";
import WorkItem from "./WorkItem/WorkItem";

const WorkPage = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-2">
      {data.map((data) => (
        <WorkItem data={data} key={data.id} />
      ))}
    </div>
  );
};

export default WorkPage;
