import { Outlet, Link } from "react-router-dom";

export default function HomeButtons() {
  return (
    <>
      <button>
        <Link to={`/Projects`}>projects</Link>
      </button>
      <button>
        <Link to={`/News`}>news</Link>
      </button>
      <button>
        <Link to={`/Contact`}>contact</Link>
      </button>
      <button>
        <Link to={`/#about`}>about</Link>
      </button>
    </>
  );
}
