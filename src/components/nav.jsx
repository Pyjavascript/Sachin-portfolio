
import React, { useState } from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#a2d2ff] w-screen p-9 md:py-2 py-6 md:px-11 lg:px-8 px-3 flex flex-col sm:flex-row justify-between items-center">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <p className="text-white text-xl block font-bold">Dr. Sachin Mishra</p>
        </div>
        <div className="md:hidden flex items-center justify-center" onClick={toggleMenu}>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
      </div>
      <div className={`w-full ${isMenuOpen ? "flex" : "hidden"} md:flex items-center text-lg font-semibold justify-center gap-4 flex-col md:flex-row`}>
        <a href="#" className="text-white p-4 w-full text-center md:w-auto">
          Home
        </a>
        <a href="#" className="text-white p-4 w-full text-center md:w-auto">
          Research
        </a>
        <a href="#" className="text-white p-4 w-full text-center md:w-auto">
          Publications
        </a>
        <a href="#" className="text-white p-4 w-full text-center md:w-auto">
          Members
        </a>
        <a href="#" className="text-white p-4 w-full text-center md:w-auto">
          Gallery
        </a>
      </div>
    </nav>
  );
}

export default Nav;
