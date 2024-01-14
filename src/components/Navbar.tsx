import { Link } from "react-router-dom";
import Switcher from "../components/theme-switcher";

function Navbar() {
  return (
    <>
      <div className="shadow-lg h-18 dark:bg-slate-700 ">
        <div className="flex items-center justify-between px-4 py-2 mx-auto max-w-7xl text-md sm:text-xl">
          <Link to="/" className="py-2 font-bold">
            Where in the world?
          </Link>
          <Switcher />
        </div>
      </div>
    </>
  );
}
export default Navbar;
