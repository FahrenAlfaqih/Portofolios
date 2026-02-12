import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experiences";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import NotFound from "./pages/Notfound";
import Sidebar from "./components/Sidebar";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="min-h-screen bg-black">
        <Sidebar />

        <main className="lg:ml-72 px-6 py-10 min-h-screen pt-20 lg:pt-10">
          <div className="max-w-6xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/skill" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
