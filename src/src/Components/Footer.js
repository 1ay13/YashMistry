import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaVimeoV } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import IMDB from "../Data/IMDB2.png";

const Footer = () => {
  return (
    <div className="text-xs block md:flex space-y-1 bg-black m-0 p-6 text-white text-center md:justify-around">
      <div className=" flex justify-center items-center gap-3 order-last md:mb-0 pb-4 md:pb-0">
        <a href="https://www.imdb.com/name/nm13937096/">
          <img src={IMDB} className="h-[18px] mr-1" alt="" />
        </a>
        <a href="https://www.instagram.com/YashMistri17/">
          <AiFillInstagram size="1.5rem" />
        </a>
        <a href="https://www.linkedin.com/in/amyashmov/">
          <RiLinkedinFill size="1.5rem" />
        </a>
        <a href="https://vimeo.com/amyashmov">
          <FaVimeoV size="1.5rem" />
        </a>
      </div>
      <p className="flex justify-center items-center space-x-1">
        <span className="font-altone">Designed By </span>
        <span className="font-bristone">JAY THAKAR</span>
      </p>
      <p className="flex justify-center items-center space-x-1">
        <span className="font-altone">Copyright 2022 </span>
        <span className="font-bristone">YASH MISTRY</span>
      </p>
    </div>
  );
};

export default Footer;
