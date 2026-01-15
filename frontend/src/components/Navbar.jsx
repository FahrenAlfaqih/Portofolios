import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-lg sticky top-0 z-50 w-full">
      <ul className="flex justify-center items-center gap-12 py-5 px-6 text-white">
        <li>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
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
          <Link to="/skill" style={{ color: "white", textDecoration: "none" }}>
            Skills
          </Link>
        </li>
      </ul>
    </nav>
  );
}
