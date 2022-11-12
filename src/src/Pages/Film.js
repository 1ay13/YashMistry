import Vimeo from "@u-wave/react-vimeo";
import React from "react";
import { Link } from "react-router-dom";

const Commercial = () => {
  return (
    <>
      <div className="md:px-36 lg:px-52 xl:px-72">
        <div className="my-5">
          <Vimeo
            video="https://player.vimeo.com/video/523910748?h=37d64dc848"
            responsive
          ></Vimeo>
        </div>
        <div className="hidden md:block text-xl font-bold">
          <h3 className="mx-auto text-black font-bristone">Quick Links</h3>
          <div className="conntainer grid gap-x-2 mx-auto md:my-5 grid-cols-3 bg-auto">
            <Link to="/aboutus">
              <img
                className="img1"
                src="\img\quicklinks\PC_ABOUTME.jpg"
                alt=""
              />
            </Link>
            <Link to="/axiompost">
              <img src="/img/quicklinks/PC_AXIOM POST.jpg" alt="" />
            </Link>
            <Link to="/work">
              <img src="/img/quicklinks/PC_WORK.jpg" alt="" />
            </Link>
          </div>
        </div>
      </div>

      <div className="container block md:hidden text-lg font-bold px-5 py-0">
        <h5 className="mt-6 text-black font-bristone">Quick Links</h5>
        <div className="conntainer grid gap-x-2 my-5 grid-cols-3 bg-auto">
          <Link to="/aboutus">
            <img
              className="img1"
              src="\img\quicklinks\MOBILE_ABOUTME.jpg"
              alt=""
            />
          </Link>
          <Link to="/axiompost">
            <img src="/img/quicklinks/MOBILE_AXIOM_POST.jpg" alt="" />
          </Link>
          <Link to="/work">
            <img src="/img/quicklinks/MOBILE_WORK.jpg" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Commercial;
