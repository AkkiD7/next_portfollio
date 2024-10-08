import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between shadow-md mb-20">
        <div className="flex flex-shrink-0 items-center">
          <h1 className="font-extrabold text-xl mx-2">akkid7.dev</h1>
        </div>

        <div className="m-8 flex items-center gap-4 text-2xl">
          <Link
            href="https://www.linkedin.com/in/akkid7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/AkkiD7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://x.com/AkkiD77"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </Link>
          <Link
            href="https://www.instagram.com/akkid7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </Link>
        </div>
      </nav>
    </>
  );
}
