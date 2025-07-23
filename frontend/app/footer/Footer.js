// components/Footer.jsx
import Link from "next/link";
import "./Footer.css";
import { footerLinks, footerPolicies, socials } from "../constents/constents";

export default function Footer() {
  return (
    <footer className="max-w-7xl lg:mx-auto  sm:mx-25  text-gray-800 px-5 py-10  ">
      <div className="  border-b-2 pb-2 border-black">
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10">
          <div className="space-y-4 p-2">
            <div className="text-center">
              <img
                src="Finalloo.svg"
                alt="Spreads Logo"
                className="w-16 h-16 m-auto"
              />
              <h1 className="text-xl font-bold">Spreads</h1>
            </div>

            <div className="flex space-x-4 mt-4 me-4">
              {socials.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white ${item.bg} p-1 rounded-md text-xl hover:scale-110 transition`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Footer Sections with Routing */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg  mb-2">{section.title}</h3>
              <ul className="space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="  hover:underline ">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap mt-2 justify-center gap-3">
          {footerPolicies.map((item, i) => (
            <span key={i}>
              <Link href={item.href} className=" hover:underline">
                {item.name}
              </Link>
              {i < footerPolicies.length - 1 && " | "}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Links */}
      <div className="px-4 mt-3">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Side */}
          <div className="text-center md:text-left">
            <p className=" ">Spreads © 2025 — All rights reserved.</p>
            <p className=" ">Made in Bharat, Built for the World.</p>
          </div>

          {/* Right Side */}
          <div className="text-center md:text-right">
            <p className=" ">
              Contact Us:{" "}
              <a href="mailto:support@spreads.in" className="hover:underline">
                support@spreads.in
              </a>{" "}
              | Rewa HQ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
