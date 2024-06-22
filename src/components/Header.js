import Logo from "../assets/logo-300x83.png";
import { Link, NavLink } from "react-router-dom";
export const Header = () => {
   return (


      <div className="h-28 sm:h-16 flex  flex-col sm:flex-row justify-between items-center px-28 py-2 mx-2    ">

         <div className=" items-center">
            <a href="/"  >
               <img src={Logo} />
            </a>

         </div>

         <nav className="max-sm:my-4 mr-8">
            <NavLink to="/" className="font-normal h-10 w-8 ml-8" end>Home</NavLink>
            <NavLink to="/about" className="font-normal h-10 w-8 ml-8">About</NavLink>
            <NavLink to="/projects" className="font-normal h-10 w-8 ml-8">Projects</NavLink>
            <NavLink to="/contact" className="font-normal h-10 w-8 ml-8">ContactUs</NavLink>

         </nav>
      </div>
   )
}
