import React from "react";

const RemoteGrading = () => {
  return (
    <div className="md:px-36 lg:px-52 xl:px-72 bg-black text-white">
      <h1 className="text-2xl font-bristone p-5 ">Remote Grading</h1>
      <p className="m-5 text-lg">
        I work with clients across the globe, as DaVinci Resolve offers a remote
        video grading option. It allows two matching DaVinci Resolve systems to
        be synchronised via a secure connection – so changes made on the
        colorist’s workstation are immediately applied on the remote client’s
        workstation. Cue commands are also synchronised to ensure that both
        systems are always on the same frame in the Timeline. Starting or
        stopping playback on the colorist’s DaVinci Resolve also starts and
        stops the remote client system. While a remote grading session is in
        progress, input from the user at the remote client’s DaVinci Resolve
        workstation is ignored. Currently, the remote grading feature supports
        only color correction and does not allow editing or conforming during a
        session. The two colorist and remote DaVinci Resolve systems must have
        matching timelines and the number of clips, clip durations and system
        resolutions must match. The requirements and limitations of a remote
        grading session are summarised below.
      </p>
      <ul className="list-disc pl-10 md:pl-24 text-lg">
        <li>Both systems must use the same calibrated display resolution.</li>
        <li>
          The timeline must be conformed on both systems before remote grading
          session starts.
        </li>
        <li>
          The number of clips and their duration must be identical for each
          timeline.
        </li>
        <li>
          Identical versions of DaVinci Resolve must be used on both systems.
        </li>
      </ul>
      <img
        src="/Img/axiompost/AXIOM-POST-REMOTE-GRADING.jpg"
        alt=""
        className=""
      />
    </div>
  );
};

export default RemoteGrading;
