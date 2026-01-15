import ExperienceList from "./components/ExperienceList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experiences";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import NotFound from "./pages/Notfound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div
        style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
