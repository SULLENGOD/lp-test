import { NavLink } from "react-router-dom";
import EyeLogo from "../assets/Eye.svg";

const Navbar = () => {
  return (
    <header className="flex gap-1 bg-gray-200">
      <img src={EyeLogo} alt="Logo" className="size-9 m-2"/>
      <nav className="flex gap-5">
        <NavLink to='/' className="self-center rounded-lg p-2 hover:bg-gray-700 hover:text-white ease-in-out duration-200">Home</NavLink>
        <NavLink to='/form' className="self-center rounded-lg p-2 hover:bg-gray-700 hover:text-white ease-in-out duration-200">Form</NavLink>             
      </nav>
    </header>
  );
};

export default Navbar;
