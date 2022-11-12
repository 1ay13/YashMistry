import "./App.css";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrolltoTop";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import Commercial from "./Pages/Commercial";
import Film from "./Pages/Film";
import Work from "./Pages/Work/Work.js";
import WorkPost from "./Pages/Work/WorkPost/WorkPost";
import AxiomPost from "./Pages/AxiomPost";
import { useContext } from "react";
import NoteContext from "./Context/noteContext";
import AboutMe from "./Pages/AboutMe";
import ColorGrading from "./Pages/ColorGrading";
import RemoteGrading from "./Pages/RemoteGrading";

function App() {
  const { activeMenu, acolor } = useContext(NoteContext);

  return (
    <div className="grid">
      <ScrollToTop />
      <div className="flex relative ">
        {activeMenu && (
          <div className="w-72 fixed bg-white z-50">
            <Sidebar />
          </div>
        )}
        <div className="h- w-full" style={{ background: acolor }}>
          <div className="flex h-fit flex-col">
            <div className="">
              <Header />
            </div>

            <div className="flex justify-center">
              <div className="">
                <Routes>
                  <Route path="/" element={<Commercial />} />
                  <Route path="/commercial" element={<Commercial />} />
                  <Route path="/film" element={<Film />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/work/:id" element={<WorkPost />} />
                  <Route path="/axiompost" element={<AxiomPost />} />
                  <Route path="/aboutme" element={<AboutMe />} />
                  <Route path="/colorgrading" element={<ColorGrading />} />
                  <Route path="/remotegrading" element={<RemoteGrading />} />
                </Routes>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-4">
  
</div>
            <div className="h-auto">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
