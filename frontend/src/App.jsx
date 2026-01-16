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
    <BrowserRouter>
      <Sidebar />

      <main className="max-w-6xl mx-auto px-6 py-10 min-h-[calc(100vh-80px)] ml-72">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
