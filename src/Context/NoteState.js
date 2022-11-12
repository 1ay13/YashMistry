import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = ({ children }) => {
  const [acolor, setColor] = useState("white");
  console.log(acolor)

  const [screenSize, setScreenSize] = useState(undefined);
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <NoteContext.Provider
      value={{
        acolor,
        setColor,
        screenSize,
        setScreenSize,
        width,
        setWidth,
        height,
        setHeight,
        activeMenu,
        setActiveMenu,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteState;