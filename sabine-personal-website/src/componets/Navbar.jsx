import { Outlet, Link } from "react-router-dom";
// PascalCasing for Components
function Navbar() {
  // JSX: JavaScript XML
  const siteTitle = "Sabine Meyer-Hill";
  return (
    <nav>
      <h2>
        <Link to={`/`}>{siteTitle}</Link>
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
