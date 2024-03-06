import { Outlet, Link } from "react-router-dom";
import About from "../componets/About";
import HomeButtons from "../componets/HomeButtons";
import "../styles/Root.css";
//import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <h2 className="title">
        <Link to={`/`}>Sabine Meyer-Hill</Link>
      </h2>
      <HomeButtons />
      <About />
    </>
  );
}
