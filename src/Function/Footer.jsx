import { faFacebook, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Footer(props) {
  return (
    <div className="h-4/6 bg-blue-900 text-white py-6" id="footer">
      <div className="container mx-auto flex flex-col">
        <div className="flex items-center justify-center mb-2">
          <a href="https://www.facebook.com/people/Asep-Aldi-Hidayat/100005949619087/" target="_blank" className="mx-2">
            <FontAwesomeIcon icon={faFacebook} style={{ color: 'white' }} size="lg" />
          </a>
          <a href="https://github.com/AldiHydayat" target="_blank">
            <FontAwesomeIcon icon={faGithub} style={{ color: 'white' }} size="lg" className="mx-2" />
          </a>
          <a href="https://mywa.link/pvymmnv4" target="_blank" className="mx-2">
            <FontAwesomeIcon icon={faWhatsapp} style={{ color: 'white' }} size="lg" />
          </a>
        </div>
        <p className="font-inter text-center">Copyright ©{new Date().getFullYear()} All rights reserved | by Asep Aldi Hidayat</p>
      </div>
    </div>
  );
}

export default Footer;
