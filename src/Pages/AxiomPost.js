import React from "react";
import { Link } from "react-router-dom";

const AxiomPost = () => {
  return (
    <div className="md:px-36 lg:px-52 xl:px-72 bg-black pb-4">
      <div className="hidden md:block w-full py-4 ">
        <div className="flex">
          <img
            className="flex-none w-1/3	p-2"
            src={require("../Data/img/axiompost/AX01.jpg")}
            alt=""
          />
          <img
            className="flex-none w-2/3	 p-2 "
            src={require("../Data/img/axiompost/AX03.jpg")}
            alt=""
          />
        </div>
        <div className="flex">
          <img
            className="flex-none w-2/3 p-2"
            src={require("../Data/img/axiompost/AX02.jpg")}
            alt=""
          />
          <img
            className="flex-none w-1/3 p-2"
            src={require("../Data/img/axiompost/AX04.jpg")}
            alt=""
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-8 py-0 md:py-4 bg-black text-white">
        <div
          id="carouselExampleControls"
          className="carousel slide relative mx-0 md:hidden w-full h-auto"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full h-full">
              <img
                src={require("../Data/img/axiompost/AX01.jpg")}
                className="block w-full"
                alt="Wallpaper"
              />
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src={require("../Data/img/axiompost/AX06.jpg")}
                className="block w-full"
                alt="PC"
              />
            </div>
            <div className="carousel-item relative float-left w-full ">
              <img
                src={require("../Data/img/axiompost/AX04.jpg")}
                className="block w-full h-auto "
                alt="Camera"
              />
            </div>
            <div className="carousel-item relative float-left w-full ">
              <img
                src={require("../Data/img/axiompost/AX05.jpg")}
                className="block w-full h-auto "
                alt="Camera"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div>
          <p className="text-white md:text-center w-[90%] md:pt-20 md:w-[70%] mx-auto text-lg">
            Found and owned by Yash Mistry, Axiom Post provides Remote
            Post-production services to clients. At Axiom Post, Yash covers work
            includes documentaries, short and feature films and documentary
            color correction and color grading work. Axiom Post is equipped with
            the professional working environment. Color grading is an essential
            part of post-production workflow. It allows you to enhance a video
            with results to attract and engage the viewers and relay the
            emotion. My services via Axiom Post achieve professional quality
            colour for your branded content, commercials, short films and
            feature films through industry standard post-production workflows
            using Blackmagic Design’s DaVinci Resolve.
          </p>
        </div>

        <div>
          <div className="text-white font-bristone flex justify-center text-xl p-4 pt-12 md:pt-20">
            <h1>CLIENTS & BRANDS</h1>
          </div>

          <div className="md:hidden w-[22%] md:w-[8%] justify-center gap-8 mx-auto my-10">
            <div className="flex md:block justify-center gap-6 my-2">
              <img
                src={require("../Data/img/aboutme/LOGO-US-SAILING-TEAM.jpg")}
                alt=""
              />
              <img src={require("../Data/img/aboutme/LOGO-BGR.jpg")} alt="" />
              <img src={require("../Data/img/aboutme/LOGO-OPC.jpg")} alt="" />
            </div>
            <div className="flex md:block justify-center gap-6 my-3">
              <img src={require("../Data/img/aboutme/LOGO-TIY.jpg")} alt="" />
              <img
                src={require("../Data/img/aboutme/LOGO-VITALS.jpg")}
                alt=""
              />
              <img
                src={require("../Data/img/aboutme/LOGO-HARKEN-DERM.jpg")}
                alt=""
              />
            </div>
          </div>

          <div className="hidden md:flex w-[7%] justify-center gap-8 mx-auto my-10">
            <img
              src={require("../Data/img/aboutme/LOGO-US-SAILING-TEAM.jpg")}
              alt=""
            />
            <img src={require("../Data/img/aboutme/LOGO-BGR.jpg")} alt="" />
            <img src={require("../Data/img/aboutme/LOGO-OPC.jpg")} alt="" />
            <img src={require("../Data/img/aboutme/LOGO-TIY.jpg")} alt="" />
            <img src={require("../Data/img/aboutme/LOGO-VITALS.jpg")} alt="" />
            <img
              src={require("../Data/img/aboutme/LOGO-HARKEN-DERM.jpg")}
              alt=""
            />
          </div>
        </div>

        <div className=" border-zinc-800 border-b-2 mx-2">
          <div className="text-white font-bristone flex justify-center text-xl p-4 pt-0 md:pt-10">
            <h1>PARTNERS</h1>
          </div>
          <div className="flex w-[25%] md:w-[8%] justify-center gap-8 mx-auto my-10">
            {/* <img src="/Img/aboutme/LOGO-PRIME-VIDEO.jpg" alt="" /> */}
            <img
              src={require("../Data/img/aboutme/LOGO-INDIEGOGO.jpg")}
              alt=""
            />
          </div>
        </div>

        <div className="text-white p-2  md:px-0 lg:px-4 2xl:px-6 md:flex md:justify-center gap-4">
          <div className="relative flex justify-center items-center shadow-md border-2 border-zinc-800	 my-4">
            <img
              src={require("../Data/img/axiompost/AXIOM-POST_BLOCK_01.jpg")}
              alt=""
            />
            <p className="absolute z-10  bottom-48 font-bristone text-xl text-center">
              Color Grading
            </p>
            <p className="absolute z-10  bottom-20 text-base px-5 text-center ">
              While there are some exceptions, grading applications are
              generally designed to import an EDL, XML, or AAF file...
            </p>
            <Link
              to="/colorgrading"
              className="absolute bottom-2 font-bristone text-xs my-4  px-3 md:px-4 py-2  rounded-md bg-zinc-800 text-gray-200 hover:bg-teal-700"
            >
              <button className="">Learn More ❯</button>
            </Link>
          </div>
          <div className="relative flex justify-center items-center  border-2 border-zinc-800 my-4">
            <img
              src={require("../Data/img/axiompost/AXIOM-POST_BLOCK_02.jpg")}
              alt=""
            />
            <p className="absolute z-10  bottom-48 font-bristone text-xl text-center">
              Remote Grading
            </p>
            <p className="absolute z-10  bottom-20 text-base px-5 text-center ">
              I work with clients across the globe, as DaVinci Resolve offers a
              remote video grading option. It allows two matching DaVinci
              Resolve...
            </p>
            <Link
              to="/remotegrading"
              className="absolute bottom-2 font-bristone text-xs my-4  px-3 md:px-4 py-2  rounded-md bg-zinc-800 text-gray-200 hover:bg-teal-700"
            >
              <button className="">Learn More ❯</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AxiomPost;
