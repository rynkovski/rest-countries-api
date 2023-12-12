import { Link } from "react-router-dom";
import Switcher from "../components/theme-switcher";

function Navbar() {
  return (
    <>
      <div className="border-b-2 dark:border-slate-600">
        <div className="max-w-7xl flex justify-between items-center mx-auto text-md sm:text-xl p-4 px-8">
          <Link to="/" className="font-bold py-2">
            Where in the world?
          </Link>
          <Switcher />
        </div>
      </div>
    </>
  );
}
export default Navbar;
