import Image from "next/image";
import Logo from '../../public/assets/logo.png';
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


export function Navbar() {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <Image src={Logo} alt='image' height={100} width={100} className="mx-2 w-10"/> 
            </div>
            <div className="m-8 flex items-center justify-center gap-5 text-2xl">
                <FaLinkedinIn />
                <FaGithub /> 
                <FaInstagram />
                <FaTwitterSquare />
            </div>
        </nav>
    )
}