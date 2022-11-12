import React from "react";
import { MdCancel } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import NoteContext from "../Context/noteContext";
import { AiFillInstagram } from "react-icons/ai";
import { FaVimeoV } from "react-icons/fa";
import IMDB from "../Data/IMDB1.png";
import { RiLinkedinFill } from "react-icons/ri";

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useContext(NoteContext);
  const activelink =
    "flex pt-3 pb-2.5 text-black text-[10px] font-extrabold font-bristone pb-[24px] border-b-2 border-color mx-4  my-4";
  const normalLink =
    "flex pt-3 pb-2.5 text-black hover:font-extrabold text-[10px] pb-[20px]  font-bristone border-b-2 border-color my-4 mx-4";

  return (
    <div className="max-h-screen scrollbar-hide md:w-full overflow-scroll h-screen">
      {activeMenu && (
        <>
          <div className="flex justify-between  bg-black p-3">
            <Link
              to="/"
              className="m-0 ml-3 mt-2 text-xl font-bristone text-white "
              onClick={() => setActiveMenu(!activeMenu)}
            >
              YASH MISTRY
            </Link>
            <button
              type="button"
              onClick={() => setActiveMenu(!activeMenu)}
              className="text-xl p-2 hover:bg-light-gray mt-1 block bg-black text-white "
            >
              <MdCancel />
            </button>
          </div>
          <div className="mt-">
            <div>
              <NavLink
                to="/commercial"
                className={({ isActive }) =>
                  isActive ? activelink : normalLink
                }
                onClick={() => setActiveMenu(!activeMenu)}
              >
                COMMERCIAL
              </NavLink>
              <NavLink
                to="/film"
                className={({ isActive }) =>
                  isActive ? activelink : normalLink
                }
                onClick={() => setActiveMenu(!activeMenu)}
              >
                FILM
              </NavLink>
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  isActive ? activelink : normalLink
                }
                onClick={() => setActiveMenu(!activeMenu)}
              >
                WORK
              </NavLink>
              <NavLink
                to="/axiompost"
                className={({ isActive }) =>
                  isActive ? activelink : normalLink
                }
                onClick={() => setActiveMenu(!activeMenu)}
              >
                AXIOM POST
              </NavLink>
              <NavLink
                to="/aboutme"
                className={({ isActive }) =>
                  isActive ? activelink : normalLink
                }
                onClick={() => setActiveMenu(!activeMenu)}
              >
                ABOUT ME
              </NavLink>
            </div>
          </div>
          <div className="flex gap-4 mt-14 mx-4 items-center">
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
          <div className="mt-72">
            <p className="font-bristone font-semibold mx-4 pb-10">
              <span className="text-[7px]">Designed by </span>
              <span className="text-[10px]">JAY THAKAR</span>{" "}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
