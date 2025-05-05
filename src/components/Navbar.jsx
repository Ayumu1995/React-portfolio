import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/raviKumarLogo.webp";
const Navbar = () => {
   return (
      <nav className="flex items-center justify-between py-6">
         <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-level="Home">
               <img src={logo} className="mx-2" width={50} height={33} />
            </a>
         </div>
         <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a
               href="https://www.linkedin.com/in/ayumu-miyamoto-937850336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="LinkedIn"
            >
               <FaLinkedin />
            </a>
            <a
               href="https://github.com/Ayumu1995"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="GitHub"
            >
               <FaGithub />
            </a>
            <a
               href="https://www.linkedin.com/in/ayumu-miyamoto-937850336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="LinkedIn"
            >
               <FaLinkedin />
            </a>
         </div>
      </nav>
   );
};

export default Navbar;
