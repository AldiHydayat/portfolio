import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Nav(props) {
  const handleScroll = (e, id) => {
    e.preventDefault();
    let element = document.querySelector(`#${id}`);

    element.scrollIntoView({ behavior: 'smooth' });
  };

  const navbarToggle = (e) => {
    let navbar = document.querySelector('#navbar');

    navbar.classList.toggle('-translate-x-full');
    navbar.classList.toggle('translate-x-0');
  };

  return (
    <div className="absolute top-0 left-0 z-50">
      <nav className="bg-blue-900 text-white w-full fixed">
        <div className="flex items-center md:justify-around justify-evenly py-4 h-50 container mx-auto">
          <h1 className="font-roboto text-xl font-semibold z-10 relative">Asep Aldi Hidayat</h1>
          <ul
            id="navbar"
            className="font-inter font-medium transform -translate-x-full md:translate-x-0 flex absolute md:static items-center transition duration-150 left-0 top-0 w-5/6 md:w-auto h-screen md:h-auto z-0 flex-col md:flex-row justify-evenly md:bg-transparent bg-blue-900"
          >
            <li className="mx-3">
              <a href="#home" onClick={(e) => handleScroll(e, 'home')}>
                Home
              </a>
            </li>
            <li className="mx-3">
              <a href="#about-me" onClick={(e) => handleScroll(e, 'about-me')}>
                About Me
              </a>
            </li>
            <li className="mx-3">
              <a href="#skills" onClick={(e) => handleScroll(e, 'skills')}>
                Skills
              </a>
            </li>
            <li className="mx-3">
              <a href="#project" onClick={(e) => handleScroll(e, 'project')}>
                Project
              </a>
            </li>
            <li className="mx-3">
              <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>
                Contact
              </a>
            </li>
          </ul>
          <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} className="md:hidden cursor-pointer z-10 relative" onClick={(e) => navbarToggle(e)} />
        </div>
      </nav>
    </div>
  );
}

export default Nav;
