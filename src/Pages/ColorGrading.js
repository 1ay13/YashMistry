import Vimeo from "@u-wave/react-vimeo";
import React from "react";

const ColorGrading = () => {
  return (
    <div className="md:px-36 lg:px-52 xl:px-72 bg-black text-white">
      <h1 className="text-2xl font-bristone p-5 ">
        Color Grading - Round-Trip Workflow
      </h1>

      <p className="p-5 text-lg">
        While there are some exceptions, grading applications are generally
        designed to import an EDL, XML, or AAF file that’s been exported from an
        NLE after the edit has been completed and then to export a corresponding
        EDL, XML, or AAF file of the finished project to send back to the
        original NLE. This process is referred to as a round-trip.
      </p>
      <p className="px-5 text-lg">
        An outline of the average round-trip workflow is as follows:
      </p>
      <ul className="list-disc pl-10 md:pl-24 text-lg p">
        <li>Lock the edit (you hope).</li>
        <li>Prep your timeline for handoff.</li>
        <li>Export the edit, Export the XML, AAF or EDL.</li>
        <li>Organize accompanying media.</li>
        <li>Grade the project.</li>
        <li>Render the final graded media.</li>
        <li>
          Export the graded timeline, and reimport it into your NLE or finishing
          application.
        </li>
      </ul>
      <div className="py-4 md:py-6">
        <h1 className="text-2xl font-bristone p-5 ">
          Guide on roundtrip workflow
        </h1>
        <Vimeo
          className="md:px-6"
          video="https://player.vimeo.com/video/523910748?h=37d64dc848"
          responsive
        ></Vimeo>
      </div>
    </div>
  );
};

export default ColorGrading;
