import React from "react";

const AboutMe = () => {
  return (
    <div className="md:px-36 lg:px-52 xl:px-72 bg-black">
      <div className="block md:flex px-0 md:px-10 order-last items-start">
        <img
          src={require("../Data/img/aboutme/YASH-ABOUT-US.jpg")}
          alt=""
          className="md:w-[45%] p-0 md:p-3 order-last md:order-first object-contain hover:object-scale-down"
        />

        <div className="text-white md:w-[55%] z-50 py-4 px-4 md:px-6 md:text-lg">
          <p className="py-2 ">
            Yash Mistry is currently working as a Freelance Colorist providing
            post-production services through his own company called Axiom Post.
            Yash specializes in stylized and unique looks for his commercial,
            and feature film clients. An artist of unique vision, Yash has an
            experience of wide variety of long- and short-form work, most
            recently completing commercial color grading for
            <span className="italic"> US Sailing Team</span> featuring Olympic
            Athlete <span className="italic">Lara Dallman-Weiss.</span> In
            addition, Yash has delivered fine work to companies includes
            <span className="italic">
              TIY, Her Vitals, Harken Derm, OnPurposeCUBED, BGR, Skep360, Honey
              Glace Cakes
            </span>{" "}
            and many others. Recent commercial work includes projects for
            artists including
            <span className="italic"> Ingrid Schneider & Caroline Hahn.</span>
          </p>
          <p className="py-2">
            In the film realm, Yash has colored feature film
            <span className="italic"> Push</span>, starring and directed by
            Marilyn Camacho is submitted to New York Film Festival and will be
            available on Amazon Prime Video later this year, and short-film
            <span className="italic">Maxico</span> directed by Luke Jacobson,
            presented by Torquay Film Society. In addition to grading film and
            commercials, he has also graded documentaries which featured on
            various OTT platforms.
          </p>
          <p className="py-2 pb-4 	">
            A native of Gujarat, India, Yash was always fascinated by all
            aspects of visual imagery. He started his career as a colorist in
            2019. In later 2021, he started presenting work under his own
            post-production hub called Axiom Post.
          </p>
          <a href="https://instagram.com/yashmistri17">
            <p className="pt-5 border-t-2 border-zinc-800 border-b-2 pb-5 md:border-b-0">
              <span className="font-bold"> Instagram: </span> @yashmistri17
            </p>
          </a>
        </div>
      </div>
      <div>
        <div className="flex gap-3 md:gap-9 px-1 md:px-10 md:mt-14 md:ml-2 bg-black pb-10">
          <p className="hidden md:flex  text-white text-xs md:text-xl font-bristone w-52 md:w-80  items-center justify-center ml-2 bg-zinc-800">
            CONNECT
          </p>
          <div className="mr-1 mx-3 text-white">
            <h3 className="text-xl md:text-xl  font-bristone mt-4 md:mt-0">
              HIRE ME FOR YOUR NEXT PROJECT!
            </h3>
            <div className="font-altone  md:text-base font-normal">
              <p className="my-2 md:my-5 text-lg md:text-xl">Let's connect!</p>
              <p>I'm colorist who:</p>
              <p>
                - Protects information in image to craft best-looking image.
              </p>
              <p> - Brings your creative vision in reality.</p>
              <p> - Speaks your creative language.</p>
            </div>
            <a href="mailto:hi@yashmistry.com?subject=Inquiry%3A%20%7BPLEASE%20PUT%20YOUR%20PROJECT%20NAME%7&body=Please%20describe%20your%20project.%0D%0A%0D%0A------%0D%0AMake%20sure%20you%20answer%20the%20following%20questions.%0D%0A%0D%0AQ.%20What%20camera%20was%20your%20project%20shot%20with%3F%0D%0AA.%0D%0A%0D%0AQ.%20What%20software%20was%20your%20project%20was%20edited%20in%3F%0D%0AA.%0D%0A%0D%0AQ.%20What%20is%20the%20duration%20of%20your%20project%3F%0D%0AA.%0D%0A%0D%0AQ.%20When%20is%20your%20deadline%3F%0D%0AA.%0D%0A%0D%0AQ.%20Do%20you%20know%20what%20your%20budget%20is%3F%0D%0AA">
              <button className="hover:bg-teal-700 font-bristone text-xs my-4  px-3 md:px-9 py-3 font-normal rounded-md bg-zinc-800 text-gray-200">
                Contact Me ❯
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
