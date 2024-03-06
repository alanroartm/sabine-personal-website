import { Outlet, Link } from "react-router-dom";
import "../styles/Navbar.css";
// PascalCasing for Components
function Navbar() {
  // JSX: JavaScript XML
  return (
    <nav className="navbar">
      <h2>
        <Link to={`/`}>Sabine Meyer-Hill</Link>
      </h2>
      <ul>
        <li>
          <Link to={`/Projects`}>projects</Link>
        </li>
        <li>
          <Link to={`/News`}>news</Link>
        </li>
        <li>
          <Link to={`/Contact`}>contact</Link>
        </li>
        <li>
          <Link to={`/#about`}>about</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
