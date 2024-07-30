import logo from "../assets/asnameLogo.png";
import { FaLinkedin} from "react-icons/fa";
import { FaGithub} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="px-4 md:px-8 mb-20 flex items-center justify-between py-4">
        <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" width={110} height={100}/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="http://www.linkedin.com/in/anshullsharma" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
            <a href="https://github.com/Anshul00910" aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
            <a href="mailto:sharma.anshul0910@gmail.com" aria-label="Send email" >
          <SiGmail />
        </a>
        </div>
    </nav>
  )
}

export default Navbar