import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{ padding: "20px", backgroundColor: "#333", marginBottom: "20px" }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "20px",
          margin: "0",
          padding: "0",
        }}
      >
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
