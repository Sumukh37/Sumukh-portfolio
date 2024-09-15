import logo from "../assets/KJ.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-16"src={logo} width="75px "alt="logo" />
    </div>
    <div className="m-8 flex mx-16 items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/sumukh-k-j-108898214/" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/Sumukh37" target="_blank"><FaGithub /></a>
        <a href="https://leetcode.com/u/user9102DH/" target="_blank"><SiLeetcode /></a>
        <a href="https://x.com/sumukhkj" target="_blank"><FaSquareXTwitter /></a>
    </div>
  </nav>
}

export default Navbar
