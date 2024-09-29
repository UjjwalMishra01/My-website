import { useState } from "react";

const Header = () => {
  const [brandName, setBrandName] = useState("स्वागतम्!");

  const [menuLinks, setMenuLinks] = useState([
    { title: 'Home', link: '#home', id: 1 },
    { title: 'About', link: '#about', id: 2 },
    { title: 'Skills', link: '#expertise', id: 3 },
    { title: 'Services', link: '#services', id: 4 },
    { title: 'Contact', link: '#contact', id: 5 },
  ]);

  const [actionButton, setActionButton] = useState({
    title: "Download CV",
    href: "/Resume.pdf", // Path to the resume file
    download: "Resume.pdf" // Name of the file to be downloaded
  });

  return (
    <>
      <div className=" h-20 border main flex justify-between items-center px-16 bg-black text-white">
        <div>
          <h1 className="text-3xl font-bold">{brandName}</h1>
        </div>

        <div className="space-x-3">
          {menuLinks.map((link) => (
            <a key={link.id} href={link.link} className="hover:text-orange-600">
              {link.title}
            </a>
          ))}
        </div>

        <div>
          <a
            href={actionButton.href}
            download={actionButton.download}
            className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl"
          >
            {actionButton.title}
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
