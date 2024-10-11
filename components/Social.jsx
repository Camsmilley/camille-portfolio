import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Social = () => {
  return (
    <div>
      <div className="flex justify-center space-x-6 text-xl">
        <a
          href="https://www.linkedin.com/in/camille-domingo-62ab812a6/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-[#E4B1F0] transition duration-300"
        >
          <FaLinkedin /> {/* LinkedIn Icon */}
        </a>
        <a
          href="https://github.com/Camsmilley"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-[#E4B1F0] transition duration-300"
        >
          <FaGithub /> {/* GitHub Icon */}
        </a>
        <a
          href="https://mail.google.com/"
          className="text-accent hover:text-[#E4B1F0] transition duration-300"
        >
          <BiLogoGmail /> {/* Email Icon */}
        </a>
        <a
          href="https://www.facebook.com/camsmilley?mibextid=LQQJ4d"
          className="text-accent hover:text-[#E4B1F0] transition duration-300"
        >
          <FaFacebook /> {/* Fb Icon */}
        </a>
        <a
          href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F_httpgalaxyy%2Fprofilecard%2F%3Figsh%3DMXE3Y2NieTUwYzU3eA%253D%253D%26fbclid%3DIwZXh0bgNhZW0CMTAAAR154MDlySgemRXTopWCGh9Dr2BeuYywcQRq93nMMrYTy_b7FUk7bk5_1ls_aem_KeW8AVxaRWAO873kEZfX3g&h=AT0vPD2N_MRnoFTWpsUyZQGfuVVhKGeCcfCTPTnKSG8tT4GrCMbiqm5qSdhRohGGVMgY8-PiGkzQoS8tF2RCYRbTFSfbsnQe4bn-1j0kl4IckIxkGaWhwWmPkCO3JD88JW0ABlOeGNo2ouk"
          className="text-accent hover:text-[#E4B1F0] transition duration-300"
        >
          <FaInstagramSquare /> {/* IG Icon */}
        </a>
      </div>
    </div>
  );
};

export default Social;
