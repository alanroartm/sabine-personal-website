import Navbar from "../componets/Navbar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
}
