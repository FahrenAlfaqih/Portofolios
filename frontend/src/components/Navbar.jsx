import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full flex justify-center py-6 px-6">
      <div className="bg-gray-900/90 backdrop-blur-lg rounded-full px-8 py-4 shadow-2xl border border-gray-700/50">
        <ul className="flex justify-center items-center gap-12 py-5 px-6 text-white">
          
          <li>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              style={{ color: "white", textDecoration: "none" }}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/experience"
              style={{ color: "white", textDecoration: "none" }}
            >
              Experiences
            </Link>
          </li>

          <li>
            <Link
              to="/project"
              style={{ color: "white", textDecoration: "none" }}
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="/skill"
              style={{ color: "white", textDecoration: "none" }}
            >
              Skills
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}
