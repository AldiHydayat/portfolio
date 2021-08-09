import React from 'react';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact(props) {
  return (
    <div id="contact" className="pt-20 min-h-screen relative bg-blue-900">
      <div className="container mx-auto">
        <h1 className="text-center font-roboto text-4xl border-b-2 border-blue-400 text-white">Contact</h1>
        <h1 className="text-center font-inter text-2xl mt-2 text-gray-200">Get In Touch</h1>
        <div id="contact-list" className="flex justify-around items-center md:flex-row flex-col flex-col mt-3 relative z-10">
          <div className="flex flex-col text-blue-700 items-center md:mx-1 my-2 p-2 border shadow-xl bg-white rounded-lg md:w-4/12 sm:w-4/12 w-6/12">
            <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#5af745' }} size="4x" />
            <p className="font-inter text-xl">0895-4147-47753</p>
          </div>
          <div className="flex flex-col text-blue-700 items-center md:mx-1 my-2 border shadow-xl bg-white rounded-lg md:w-4/12 sm:w-4/12 w-6/12 p-2">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: '#f56e69' }} size="4x" />
            <p className="font-inter text-xl">aldyh128@gmail.com</p>
          </div>
          <div className="flex flex-col text-blue-700 items-center md:mx-1 my-2 border shadow-xl bg-white rounded-lg md:w-4/12 sm:w-4/12 w-6/12 p-2">
            <FontAwesomeIcon icon={faSearchLocation} style={{ color: '#364ff5' }} size="4x" />
            <p className="font-inter text-xl">Cimahi, Jawa Barat</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
