import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import NoteContext from "../Context/noteContext";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const { activeMenu, setActiveMenu, screenSize, setScreenSize, setColor } =
    useContext(NoteContext);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (screenSize >= 768) {
      setActiveMenu(false);
    }
  }, [screenSize]);

  const activelink =
    "block mx-3 hover:text-teal-600 py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0  text-white";
  const normalLink =
    "block mx-3 hover:text-teal-600 py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0 text-zinc-400";

  return (
    <>
      <nav className=" bg-black text-white py-1 md:py-3 md:pt-5 ">
        <div className="flex justify-between md:justify-center m-0 p-3 md:p-5">
          <div className="hover:drop-shadow-md flex items-center">
            <AiOutlineMenu
              className="m-3 text-2xl md:hidden"
              onClick={() => setActiveMenu(!activeMenu)}
            />
          </div>
          <div className="p-1">
            <NavLink to="/" onClick={() => setColor("white")}>
              <p className="text-right md:text-center font-bristone text-2xl md:text-3xl">
                YASH MISTRY
              </p>
              <p className="text-right md:text-center font-altone text-sm md:text-base font-thin ">
                FREELANCE COLORIST
              </p>
            </NavLink>
          </div>
        </div>

        <div className="grid grid-cols-2 md:block text-xs font-bristone">
          <div className="hidden md:flex justify-center	pb-5">
            <NavLink
              end
              className={({ isActive }) => (isActive ? activelink : normalLink)}
              to="/"
            >
              Color Reel
            </NavLink>
            {/* <NavLink
              className={({ isActive }) => (isActive ? activelink : normalLink)}
              to="/film"
            >
              FILM
            </NavLink> */}
            <NavLink
              className={({ isActive }) => (isActive ? activelink : normalLink)}
              to="/work"
            >
              WORK
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "block mx-3 hover:text-teal-600 py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 dark:text-white text-white"
                  : "block mx-3 hover:text-teal-600 py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 text-teal-600"
              }
              to="/axiompost"
            >
              AXIOM POST
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? activelink : normalLink)}
              to="/aboutme"
            >
              ABOUT ME
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
