import React, { Fragment, useEffect } from 'react';
import { faBootstrap, faCss3Alt, faFacebook, faGithub, faHtml5, faJsSquare, faNodeJs, faPhp, faReact, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';

function Home(props) {
  const handleProjectHover = (e, id) => {
    let span = document.querySelector(`#${id}`);

    span.classList.toggle('rotate-6');
  };

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

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.overflowY = 'scroll';
    Aos.init();
    Aos.refresh();
  });

  return (
    <Fragment>
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
      <div id="home" className="pt-20 min-h-screen bg-blue-900">
        <div className="container mx-auto" data-aos="fade-right" data-aos-once={true} data-aos-duration="600">
          {/* <img src={process.env.PUBLIC_URL + 'biru.png'} alt="My Photo" className="w-1/6 justify-self-auto mx-auto mt-8 shadow-2xl rounded-full" /> */}
          <h1 className="m-8 mt-2 font-roboto text-semibold text-5xl text-white">Asep Aldi Hidayat</h1>
          <p className="m-8 mt-2 font-inter text-semibold text-md text-2xl text-white">Web Developer | Back End Developer</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 left-0">
          <path
            fill="#fbbf24"
            fillOpacity="1"
            d="M0,64L18.5,85.3C36.9,107,74,149,111,186.7C147.7,224,185,256,222,261.3C258.5,267,295,245,332,202.7C369.2,160,406,96,443,90.7C480,85,517,139,554,181.3C590.8,224,628,256,665,245.3C701.5,235,738,181,775,144C812.3,107,849,85,886,90.7C923.1,96,960,128,997,149.3C1033.8,171,1071,181,1108,181.3C1144.6,181,1182,171,1218,192C1255.4,213,1292,267,1329,277.3C1366.2,288,1403,256,1422,240L1440,224L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div id="about-me" className="pt-20 min-h-screen bg-yellow-400">
        <div className="container mx-auto w-full">
          <h1 className="text-center font-roboto text-4xl border-b-2 border-blue-900">About Me</h1>
          <div className="flex px-10 md:flex-row flex-col items-center justify-between">
            <img src={process.env.PUBLIC_URL + 'biru.png'} alt="My Photo" className="md:w-3/12 w-6/12 justify-self-auto mx-auto mt-8 shadow-2xl rounded-full my-2" data-aos="zoom-in" data-aos-once={true} data-aos-duration="1000" />
            <div className="w-8/12 font-inter" data-aos="fade-left" data-aos-once={true} data-aos-duration="1000">
              <p>
                I'm just graduated as <b>Software Engineer</b> at high school. I'm passionate on <b>Web Development</b> especially on server side and a fast learner at programming.
              </p>
              <p>I want to improve my experience and my knowledge at proramming</p>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2563eb"
            fill-opacity="1"
            d="M0,64L24,58.7C48,53,96,43,144,64C192,85,240,139,288,144C336,149,384,107,432,117.3C480,128,528,192,576,192C624,192,672,128,720,133.3C768,139,816,213,864,234.7C912,256,960,224,1008,202.7C1056,181,1104,171,1152,165.3C1200,160,1248,160,1296,133.3C1344,107,1392,53,1416,26.7L1440,0L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div id="skills" className="pt-20 min-h-screen bg-blue-600 text-white">
        <div className="container mx-auto">
          <h1 className="text-center font-roboto text-4xl border-b-2 border-blue-400">Skills</h1>
          <div className="flex mt-4 justify-center flex-wrap" data-aos="zoom-in" data-aos-once={true} data-aos-duration="1000">
            <div className="flex flex-col bg-white md:h-2/6  md:w-2/12 h-4/12 w-5/12 py-2 items-center rounded-b-2xl rounded-tr-2xl border border-blue-900 hover:shadow-2xl transition duration-150 m-4">
              <FontAwesomeIcon icon={faHtml5} style={{ color: 'orange' }} size="4x" />
              <p className="text-roboto text-blue-700 text-xl font-semibold">HTML</p>
              <p className="font-inter text-center text-black">Advance</p>
            </div>
            <div className="flex flex-col bg-white md:h-2/6  md:w-2/12 h-4/12 w-5/12 py-2 items-center rounded-b-2xl rounded-tr-2xl border border-blue-900 hover:shadow-2xl transition duration-150 m-4">
              <FontAwesomeIcon icon={faCss3Alt} style={{ color: 'blue' }} size="4x" />
              <p className="text-roboto text-blue-700 text-xl font-semibold">CSS</p>
              <p className="font-inter text-center text-black">Intermediate</p>
            </div>
            <div className="flex flex-col bg-white md:h-2/6  md:w-2/12 h-4/12 w-5/12 py-2 items-center rounded-b-2xl rounded-tr-2xl border border-blue-900 hover:shadow-2xl transition duration-150 m-4">
              <FontAwesomeIcon icon={faPhp} style={{ color: 'purple' }} size="4x" />
              <p className="text-roboto text-blue-700 text-xl font-semibold">PHP</p>
              <p className="font-inter text-center text-black">Intermediate</p>
            </div>
            <div className="flex flex-col bg-white md:h-2/6  md:w-2/12 h-4/12 w-5/12 py-2 items-center rounded-b-2xl rounded-tr-2xl border border-blue-900 hover:shadow-2xl transition duration-150 m-4">
              <FontAwesomeIcon icon={faJsSquare} style={{ color: 'yellow' }} size="4x" />
              <p className="text-roboto text-blue-700 text-xl font-semibold">Javascript</p>
              <p className="font-inter text-center text-black">Intermediate</p>
            </div>
            <div className="flex flex-col bg-white md:h-2/6  md:w-2/12 h-4/12 w-5/12 py-2 items-center rounded-b-2xl rounded-tr-2xl border border-blue-900 hover:shadow-2xl transition duration-150 m-4">
              <svg width="63px" viewBox="-24 0 304 304" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                <path
                  d="M13.104 287.306c-5.204 0-6.717-3.03-6.717-7.57 0-1.513.19-3.22.424-5.018 1.14-7.851 3.923-12.343 10.64-12.343 4.543 0 6.758 2.032 6.758 5.722v1.799h4.507c.05 0 .05-1.656.05-2.033 0-5.392-3.265-10.506-11.308-10.506-10.929 0-15.423 5.937-17.079 17.576-.237 1.562-.379 3.02-.379 4.576 0 6.86 2.699 13.1 12.349 13.1 7.332 0 11.687-3.575 14.24-7.975l-4.306-2.9c-2.79 4.401-5.82 5.572-9.179 5.572zm29.57-21.668c-8.754 0-12.536 4.492-13.813 13.432a23.325 23.325 0 0 0-.24 3.124c0 5.77 2.697 10.362 10.17 10.362 8.754 0 12.587-4.685 13.864-13.486.142-1.134.237-2.175.237-3.215.002-5.865-2.788-10.217-10.218-10.217zm3.643 13.435c-.947 6.483-2.979 8.47-6.814 8.47-3.073 0-4.586-1.278-4.586-5.11 0-.947.096-2.081.284-3.36.947-6.433 2.839-8.42 6.718-8.42 3.123 0 4.682 1.277 4.682 5.156 0 .946-.096 2.035-.284 3.264zm28.58-21.246l-1.465 8.685c-.094.755-.046.504.24 1.214-1.372-1.04-3.834-1.728-5.49-1.728-7.854 0-12.252 3.555-13.67 13.49a19.414 19.414 0 0 0-.237 3.171c0 7.241 4.257 9.94 9.98 9.94 2.416 0 4.78.05 6.623-1.509l.471 2.943h4.543l5.298-36.206h-6.293zm-4.494 28.342c-2.127 1.274-4.207 1.562-5.484 1.562-3.454 0-4.4-1.799-4.4-4.683 0-1.089.142-2.363.333-3.739 1.086-7.521 3.5-8.848 6.623-8.848 2.032 0 3.592.333 5.062 1.139l-2.134 14.569zm24.603-20.531c-8.66 0-12.725 4.113-14.099 13.432-.144 1.137-.239 2.226-.239 3.266 0 6.387 3.266 10.22 10.454 10.22 5.583 0 9.75-2.32 11.972-6.578l-4.779-1.94c-1.37 2.08-3.215 3.5-6.48 3.5-3.5 0-4.92-.942-4.92-4.065 0-.616.048-1.511.143-1.511h17.076c.24-2.414.52-4.12.52-5.535 0-4.728-1.796-10.79-9.648-10.79zm3.263 11.499H87.861c1.043-2.414 2.79-6.15 6.387-6.15 2.79 0 4.164 1.631 4.164 4.422-.003.473-.046 1.728-.143 1.728zm24.591-12.069l.567-4.827h-13.343l-.565 4.827h3.5l-3.782 24.137h-3.505l-.564 4.828h13.34l.57-4.828h-3.503l3.783-24.137h3.502zm27.11 7.241l1.705-4.827h-4.589l-3.309.683c-1.846-1.18-4.354-2.066-6.717-2.066-6.768 0-12.537 3.268-12.537 10.697 0 2.084.756 3.766 1.653 4.903-1.416.755-2.647 2.02-2.647 3.726 0 .756.282 1.53.852 2.238-2.841 1.706-4.586 4.533-4.586 7.842 0 6.39 6.669 7.753 11.778 7.753 6.433 0 14.099-1.47 14.099-9.655 0-2.79-1.75-4.97-6.812-5.916l-9.13-1.706c-1.04-.191-1.277-.522-1.277-.995 0-.71.43-1.086 1.136-1.086l.616.094c1.23.283 2.65.427 4.115.427 6.578 0 12.443-2.84 12.443-10.22 0-1.042-.188-1.747-.661-2.884.803.38 1.846.995 2.268.995h1.6v-.003zm-13.007 19.583c1.796.333 2.41.994 2.41 2.177 0 3.833-4.116 4.306-7.095 4.306-4.542 0-6.244-1.086-6.244-3.502 0-2.13.613-3.121 2.035-4.637l8.894 1.656zM135.02 279.5c-2.744 0-4.258-.992-4.258-3.36 0-3.5 2.035-5.535 5.583-5.535 2.839 0 4.212 1.183 4.212 3.498 0 3.502-1.989 5.397-5.537 5.397zm31.757-13.862c-2.65 0-5.013 1.3-7.948 3.616l-.425-1.772h-5.206l-3.642 26.55h6.292l2.745-20.134c1.846-1.135 4.115-2.783 6.055-2.783 2.364 0 3.218 1.141 3.218 3.316 0 .521-.05 2.064-.145 2.631l-2.315 16.97h6.293l2.315-17.108c.096-.8.19-2.119.19-2.874.003-4.5-2.129-8.412-7.427-8.412zm19.38 21.743l.048-.65 2.742-19.249h-10.456l-.659 4.827h4.586c-.379 0-.615.423-.661.804l-1.893 12.82c-.094.617-.14 1.901-.14 2.418 0 3.311 1.796 5.682 5.484 5.682h3.218l.71-4.828h-2.033c-.712 0-.946-1.257-.946-1.824zm4.067-29.554h-6.15c-.379 0-.379-1.393-.425-.92l-.854 6.802c-.049.428-.049 1.36.33 1.36h6.153c.379 0 .379-1.654.425-2.084l.854-5.25c.048-.473.048.092-.333.092zm12.831 29.715c-1.559 0-2.317-.663-2.317-2.08l.048-.097 1.987-13.056h7.19l2.175-4.827h-8.704l1.465-10.623-6.62 2.117-1.185 8.506h-3.831l-.661 4.827h4.446c-.425 2.414-.852.848-.898 1.323l-1.704 11.448c-.094.522-.094.9-.094 1.371 0 4.495 3.311 6.177 7.289 6.177 3.688 0 6.669-1.077 8.989-3.02l-2.935-3.61c-1.47.897-2.462 1.544-4.64 1.544zm23.087-21.904c-8.657 0-12.725 4.113-14.098 13.432-.142 1.137-.237 2.226-.237 3.266 0 6.387 3.264 10.22 10.454 10.22 5.583 0 9.75-2.32 11.97-6.578l-4.777-1.94c-1.37 2.08-3.217 3.5-6.483 3.5-3.498 0-4.92-.942-4.92-4.065 0-.616.051-1.511.146-1.511h17.077c.236-2.414.52-4.12.52-5.535 0-4.728-1.797-10.79-9.652-10.79zm3.266 11.499H219c1.04-2.414 2.788-6.15 6.387-6.15 2.79 0 4.164 1.631 4.164 4.422-.003.473-.049 1.728-.143 1.728zm23.797-11.5c-2.271 0-4.4 1.302-6.53 3.332l-.378-1.487h-5.202l-3.644 26.55h6.34l2.79-20.56c1.657-.991 3.549-1.838 5.347-1.838 1.137 0 2.223-.181 3.263-.04l.809-5.485c-.951-.189-1.897-.471-2.795-.471zM92.54 238.81c-14.32-6.19-27.72-21.922-27.752-38.019-.039-17.55 11.083-32.45 24.916-42.242-1.663 6.283-2.57 12.03 1.55 17.65 3.83 5.225 10.538 7.764 16.872 6.386 14.8-3.24 15.479-19.51 6.705-28.989-8.675-9.387-17.067-19.99-13.765-33.603 1.653-6.824 5.843-13.216 11.151-17.785-4.08 10.722 7.514 21.296 15.153 26.563 13.251 9.138 27.79 16.044 39.974 26.756 12.816 11.258 22.28 26.48 20.369 44.135-2.071 19.136-17.277 32.445-34.333 39.164 36.042-7.955 73.283-35.928 74.046-75.9.632-32.885-21.927-58.193-49.872-72.682l-1.46-.797c.767 1.861 1.018 3.444.989 4.861.25-1.045.42-2.119.468-3.227a15.728 15.728 0 0 1-.512 3.9l.044-.673a16.383 16.383 0 0 1-2.069 4.931l.41-.441c-5.575 9.247-20.668 11.255-28.124 1.68-11.986-15.402.251-32.008 1.963-48.318 2.143-20.441-10.676-40.285-26.57-52.16 8.754 14.161-2.779 32.896-12.006 43.37C101.74 53.523 90.859 62 80.982 71.225c-10.61 9.908-20.81 20.345-29.531 31.974-17.442 23.276-28.12 52.55-20.273 81.588 7.842 29.018 32.978 47.49 61.363 54.022z"
                  fill="#EE4323"
                />
              </svg>
              <p className="text-roboto text-blue-700 text-xl font-semibold">Codeigniter</p>
              <p className="font-inter text-center text-black">Intermediate</p>
            </div>
            <div className="flex flex-col bg-white md:h-2/6  md:w-2/12 h-4/12 w-5/12 py-2 items-center rounded-b-2xl rounded-tr-2xl border border-blue-900 hover:shadow-2xl transition duration-150 m-4">
              <FontAwesomeIcon icon={faBootstrap} style={{ color: 'blue' }} size="4x" />
              <p className="text-roboto text-blue-700 text-xl font-semibold">Bootstrap</p>
              <p className="font-inter text-center text-black">intermediate</p>
            </div>
            <div className="flex flex-col bg-white md:h-2/6  md:w-2/12 h-4/12 w-5/12 py-2 items-center rounded-b-2xl rounded-tr-2xl border border-blue-900 hover:shadow-2xl transition duration-150 m-4">
              <FontAwesomeIcon icon={faNodeJs} style={{ color: 'green' }} size="4x" />
              <p className="text-roboto text-blue-700 text-xl font-semibold">Express</p>
              <p className="font-inter text-center text-black">Intermediate</p>
            </div>
            <div className="flex flex-col bg-white md:h-2/6  md:w-2/12 h-4/12 w-5/12 py-2 items-center rounded-b-2xl rounded-tr-2xl border border-blue-900 hover:shadow-2xl transition duration-150 m-4">
              <FontAwesomeIcon icon={faReact} style={{ color: 'blue' }} size="4x" />
              <p className="text-roboto text-blue-700 text-xl font-semibold">React</p>
              <p className="font-inter text-center text-black">Basic</p>
            </div>
            <div className="flex flex-col bg-white md:h-2/6  md:w-2/12 h-4/12 w-5/12 py-2 items-center rounded-b-2xl rounded-tr-2xl border border-blue-900 hover:shadow-2xl transition duration-150 m-4">
              <FontAwesomeIcon icon={faBootstrap} style={{ color: 'blue' }} size="4x" />
              <p className="text-roboto text-blue-700 text-xl font-semibold">Tailwind CSS</p>
              <p className="font-inter text-center text-black">Basic</p>
            </div>
            <div className="flex flex-col bg-white md:h-2/6  md:w-2/12 h-4/12 w-5/12 py-2 items-center rounded-b-2xl rounded-tr-2xl border border-blue-900 hover:shadow-2xl transition duration-150 m-4">
              <svg width="62px" viewBox="-18.458 -22.75 191.151 191.151" xmlns="http://www.w3.org/2000/svg">
                <path d="M-18.458 6.58h191.151v132.49H-18.458V6.58z" fill="none" />
                <path
                  d="M40.054 113.583h-5.175c-.183-8.735-.687-16.947-1.511-24.642h-.046l-7.879 24.642h-3.94l-7.832-24.642h-.045c-.581 7.388-.947 15.602-1.099 24.642H7.81c.304-10.993 1.068-21.299 2.289-30.919h6.414l7.465 22.719h.046l7.511-22.719h6.137c1.344 11.268 2.138 21.575 2.382 30.919M62.497 90.771c-2.107 11.434-4.887 19.742-8.337 24.928-2.688 3.992-5.633 5.99-8.84 5.99-.855 0-1.91-.258-3.16-.77v-2.757c.611.088 1.328.138 2.152.138 1.498 0 2.702-.412 3.62-1.238 1.098-1.006 1.647-2.137 1.647-3.388 0-.858-.428-2.612-1.282-5.268L42.618 90.77h5.084l4.076 13.19c.916 2.995 1.298 5.086 1.145 6.277 2.229-5.953 3.786-12.444 4.673-19.468h4.901v.002z"
                  fill="#5d87a1"
                />
                <path
                  d="M131.382 113.583h-14.7V82.664h4.945v27.113h9.755v3.806zM112.834 114.33l-5.684-2.805c.504-.414.986-.862 1.42-1.381 2.416-2.838 3.621-7.035 3.621-12.594 0-10.229-4.014-15.346-12.045-15.346-3.938 0-7.01 1.298-9.207 3.895-2.414 2.84-3.619 7.022-3.619 12.551 0 5.435 1.068 9.422 3.205 11.951 1.955 2.291 4.902 3.438 8.843 3.438 1.47 0 2.819-.18 4.048-.543l7.4 4.308 2.018-3.474zm-18.413-6.934c-1.252-2.014-1.878-5.248-1.878-9.707 0-7.785 2.365-11.682 7.1-11.682 2.475 0 4.289.932 5.449 2.792 1.25 2.017 1.879 5.222 1.879 9.619 0 7.849-2.367 11.774-7.099 11.774-2.476.001-4.29-.928-5.451-2.796M85.165 105.013c0 2.622-.962 4.773-2.884 6.458-1.924 1.678-4.504 2.519-7.737 2.519-3.024 0-5.956-.966-8.794-2.888l1.329-2.655c2.442 1.223 4.653 1.831 6.638 1.831 1.863 0 3.319-.413 4.375-1.232 1.055-.822 1.684-1.975 1.684-3.433 0-1.837-1.281-3.407-3.631-4.722-2.167-1.19-6.501-3.678-6.501-3.678-2.349-1.712-3.525-3.55-3.525-6.578 0-2.506.877-4.529 2.632-6.068 1.757-1.545 4.024-2.315 6.803-2.315 2.87 0 5.479.769 7.829 2.291l-1.192 2.656c-2.01-.854-3.994-1.281-5.951-1.281-1.585 0-2.809.381-3.66 1.146-.858.762-1.387 1.737-1.387 2.933 0 1.828 1.308 3.418 3.722 4.759 2.196 1.192 6.638 3.723 6.638 3.723 2.409 1.709 3.612 3.53 3.612 6.534"
                  fill="#f8981d"
                />
                <path
                  d="M137.59 72.308c-2.99-.076-5.305.225-7.248 1.047-.561.224-1.453.224-1.531.933.303.3.338.784.601 1.198.448.747 1.229 1.752 1.942 2.276.783.6 1.569 1.194 2.393 1.717 1.453.899 3.1 1.422 4.516 2.318.825.521 1.645 1.195 2.471 1.756.406.299.666.784 1.193.971v-.114c-.264-.336-.339-.822-.598-1.196l-1.122-1.082c-1.084-1.456-2.431-2.727-3.884-3.771-1.196-.824-3.812-1.944-4.297-3.322l-.076-.076c.822-.077 1.797-.375 2.578-.604 1.271-.335 2.43-.259 3.734-.594.6-.15 1.195-.338 1.797-.523v-.337c-.676-.673-1.158-1.567-1.869-2.203-1.902-1.643-3.998-3.25-6.164-4.595-1.16-.749-2.652-1.231-3.887-1.868-.445-.225-1.195-.336-1.457-.71-.67-.822-1.047-1.904-1.533-2.877-1.08-2.053-2.129-4.331-3.061-6.502-.674-1.456-1.084-2.91-1.906-4.257-3.85-6.35-8.031-10.196-14.457-13.971-1.381-.786-3.024-1.121-4.779-1.533l-2.803-.148c-.598-.262-1.197-.973-1.719-1.309-2.132-1.344-7.621-4.257-9.189-.411-1.01 2.431 1.494 4.821 2.354 6.054.635.856 1.458 1.83 1.902 2.802.263.635.337 1.309.6 1.98.598 1.644 1.157 3.473 1.943 5.007.41.782.857 1.604 1.381 2.312.3.414.822.597.936 1.272-.521.744-.562 1.867-.861 2.801-1.344 4.221-.819 9.45 1.086 12.552.596.934 2.018 2.99 3.92 2.202 1.684-.672 1.311-2.801 1.795-4.668.111-.451.038-.747.262-1.043v.073c.521 1.045 1.047 2.052 1.53 3.1 1.159 1.829 3.177 3.735 4.858 5.002.895.676 1.604 1.832 2.725 2.245V74.1h-.074c-.227-.335-.559-.485-.857-.745-.674-.673-1.42-1.495-1.943-2.241-1.566-2.093-2.952-4.41-4.182-6.801-.602-1.16-1.121-2.428-1.606-3.586-.226-.447-.226-1.121-.601-1.346-.562.821-1.381 1.532-1.791 2.538-.711 1.609-.785 3.588-1.049 5.646l-.147.072c-1.19-.299-1.604-1.53-2.056-2.575-1.119-2.654-1.307-6.914-.336-9.976.26-.783 1.385-3.249.936-3.995-.225-.715-.973-1.122-1.383-1.685-.482-.708-1.01-1.604-1.346-2.39-.896-2.091-1.347-4.408-2.312-6.498-.451-.974-1.234-1.982-1.868-2.879-.712-1.008-1.495-1.718-2.058-2.913-.186-.411-.447-1.083-.148-1.53.073-.3.225-.412.523-.487.484-.409 1.867.111 2.352.336 1.385.56 2.543 1.083 3.699 1.867.523.375 1.084 1.085 1.755 1.272h.786c1.193.26 2.538.072 3.661.41 1.979.636 3.772 1.569 5.38 2.576 4.893 3.103 8.928 7.512 11.652 12.778.447.858.637 1.644 1.045 2.539.787 1.832 1.76 3.7 2.541 5.493.785 1.755 1.533 3.547 2.654 5.005.559.784 2.805 1.195 3.812 1.606.745.335 1.905.633 2.577 1.044 1.271.783 2.537 1.682 3.732 2.543.595.448 2.465 1.382 2.576 2.13M99.484 39.844a5.82 5.82 0 0 0-1.529.188v.075h.072c.301.597.824 1.011 1.197 1.532.301.599.562 1.193.857 1.791l.072-.074c.527-.373.789-.971.789-1.868-.227-.264-.262-.522-.451-.784-.22-.374-.705-.56-1.007-.86"
                  fill="#5d87a1"
                />
                <path d="M141.148 113.578h.774v-3.788h-1.161l-.947 2.585-1.029-2.585h-1.118v3.788h.731v-2.882h.041l1.078 2.882h.557l1.074-2.882v2.882zm-6.235 0h.819v-3.146h1.072v-.643h-3.008v.643h1.115l.002 3.146z" fill="#f8981d" />
              </svg>
              <p className="text-roboto text-blue-700 text-xl font-semibold">MySQL</p>
              <p className="font-inter text-center text-black">Intermediate</p>
            </div>
            <div className="flex flex-col bg-white md:h-2/6  md:w-2/12 h-4/12 w-5/12 py-2 items-center rounded-b-2xl rounded-tr-2xl border border-blue-900 hover:shadow-2xl transition duration-150 m-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="55">
                <path
                  d="M16.147 5.154l1.09 2.05a6.15 6.15 0 0 0 .824 1.024c.913.913 1.782 1.87 2.56 2.895 1.848 2.427 3.095 5.122 3.986 8.04.534 1.782.824 3.608.846 5.456.09 5.523-1.804 10.266-5.634 14.208a16.3 16.3 0 0 1-2.004 1.715c-.38 0-.557-.3-.713-.557-.3-.5-.468-1.047-.557-1.603-.134-.668-.223-1.336-.178-2.027v-.312c-.022-.067-.356-30.732-.223-30.888z"
                  fill="#599636"
                />
                <path
                  d="M16.147 5.088c-.045-.09-.09-.022-.134.022.022.445-.134.846-.38 1.225-.267.38-.624.668-.98.98-1.982 1.715-3.54 3.786-4.788 6.102-1.648 3.118-2.516 6.458-2.76 9.977-.11 1.27.4 5.746.802 7.037 1.09 3.43 3.05 6.302 5.6 8.796.624.6 1.292 1.158 1.982 1.692.2 0 .223-.178.267-.312a6.11 6.11 0 0 0 .2-.869c.2-1.113.312-2.227.445-3.34l-.245-31.31z"
                  fill="#6cac48"
                />
                <path
                  d="M17.24 41.9c.045-.512.3-.935.557-1.358-.267-.11-.468-.334-.624-.58-.134-.223-.245-.5-.334-.735-.312-.935-.38-1.915-.468-2.873v-.58c-.11.09-.134.846-.134.958-.067 1.024-.2 2.027-.4 3.006-.067.4-.11.802-.356 1.158 0 .045 0 .09.022.156.4 1.18.512 2.383.58 3.608v.445c0 .534-.022.423.423.6.178.067.38.09.557.223.134 0 .156-.11.156-.2l-.067-.735v-2.05c-.022-.356.045-.713.09-1.047z"
                  fill="#c2bfbf"
                />
                <g transform="matrix(1.021124 0 0 1.021124 -4.376266 -1.845946)">
                  <path
                    d="M37.73 33.72v2.077a1.45 1.45 0 0 0 .014.246c.027.246.178.396.4.465a4.97 4.97 0 0 0 .63.123c.123.014.164.068.178.2.014.465-.027.52-.478.492-1.052-.055-2.105-.068-3.157 0h-.1c-.328.014-.355-.014-.355-.342 0-.055.014-.123.014-.178 0-.1.068-.15.164-.15.22-.027.424-.082.63-.123.287-.068.45-.246.478-.533.04-.314.04-.642.04-.957l.014-3.662a.56.56 0 0 0-.3-.52 3.89 3.89 0 0 0-.78-.328c-.082-.027-.164-.04-.232-.082-.2-.096-.205-.273-.014-.383.068-.04.15-.068.232-.082a12.42 12.42 0 0 0 2.432-.615c.164-.055.205-.04.22.123.014.1 0 .22-.014.314-.027.178-.027.355-.027.52 0 .068.014.137.082.178s.137 0 .2-.04c.287-.22.574-.424.888-.6.45-.246.93-.465 1.45-.533.63-.082 1.175.082 1.654.492a3.1 3.1 0 0 1 .519.601c.137.2.15.205.328.068.52-.383 1.066-.724 1.654-.97.615-.26 1.244-.3 1.872-.082.642.232 1.08.683 1.34 1.298.22.492.314 1 .314 1.53v3.662c0 .246.1.4.342.52.26.1.547.15.82.205.178.04.178.04.178.22-.027.45-.068.478-.506.45a29.42 29.42 0 0 0-3.293 0c-.22.014-.22.014-.232-.205v-.068c-.014-.37-.014-.37.342-.45l.355-.096a.55.55 0 0 0 .424-.533l.04-1.025-.027-2.678a2.13 2.13 0 0 0-.15-.697c-.342-.834-1.093-1.134-1.818-1.052-.547.055-1.025.273-1.476.588-.096.068-.164.15-.15.287.123.875.04 1.75.055 2.624v1.9c0 .342.137.506.465.588l.63.137c.096.014.15.055.15.164v.1c-.014.383-.04.4-.424.396-1.093-.055-2.187-.04-3.266 0-.37.014-.4-.027-.383-.4.014-.22.04-.232.246-.273l.45-.082c.4-.082.547-.232.574-.656l.04-.916-.027-2.747c-.027-.342-.1-.67-.287-.984-.273-.506-.7-.765-1.285-.793-.588-.04-1.107.178-1.6.45-.342.2-.492.437-.465.834v1.995zm25.747.083v1.927a4.13 4.13 0 0 0 .027.41.42.42 0 0 0 .328.383 3.19 3.19 0 0 0 .724.123c.137.014.164.068.178.178v.096c-.014.478-.068.533-.533.506-1.04-.068-2.077-.055-3.116 0l-.4.014c-.082 0-.1-.04-.123-.096a1.39 1.39 0 0 1 0-.574c.014-.082.068-.1.15-.123.2-.027.37-.068.56-.1.342-.082.465-.22.478-.574l.04-1.148v-3.362c0-.246-.096-.396-.314-.506-.246-.137-.506-.232-.78-.328-.082-.027-.164-.055-.232-.096-.178-.123-.2-.3-.027-.437a.49.49 0 0 1 .273-.11c.875-.137 1.722-.328 2.542-.656.096-.04.137-.014.178.068s.055.178.04.273l-.04.642c0 .082-.04.2.027.232.082.055.137-.068.205-.1a6.09 6.09 0 0 1 1.326-.847c.424-.2.86-.328 1.353-.3.916.055 1.572.52 1.995 1.326.22.424.314.888.355 1.367l.04 1 .014 3.02c.014.232.096.383.328.465a4.47 4.47 0 0 0 .738.178c.22.027.232.068.246.273v.068c-.027.465-.055.478-.52.45a28.59 28.59 0 0 0-3.061 0c-.137.014-.273 0-.4.014-.082 0-.137-.014-.15-.096-.027-.178-.055-.355-.014-.547.014-.082.055-.123.15-.137l.63-.1c.22-.055.342-.2.37-.4l.027-.383-.014-2.856c0-.328-.014-.656-.082-.984-.164-.7-.697-1.2-1.42-1.27-.63-.068-1.2.096-1.722.437-.26.164-.37.396-.37.683v2.064c0-.04 0-.04.014-.04z"
                    fill="#47474a"
                  />
                  <path
                    d="M103.503 29.935c-.15-.998-.52-1.886-1.162-2.665a5.27 5.27 0 0 0-2.105-1.558c-.86-.355-1.777-.465-2.706-.492-.383-.014-5.603.068-5.986 0-.096-.014-.164.014-.22.096-.068.1-.137.205-.178.314-.164.37-.164.342.232.396.328.055.642.082.957.178.287.096.492.26.56.574.027.15.055 4.96.055 7.202l-.055 1.6c-.014.123-.027.246-.068.355-.055.164-.15.3-.314.37a1.62 1.62 0 0 1-.574.15c-.37.04-.424.055-.547.465l-.04.15c-.027.178-.014.205.164.205l4.086.04 1.6-.027 1.107-.137c1.257-.232 2.378-.752 3.334-1.585a5.55 5.55 0 0 0 1.312-1.722c.383-.765.547-1.6.588-2.446.068-.478.04-.97-.04-1.462zm-1.982 1.94c-.055.875-.232 1.722-.683 2.487-.574.998-1.394 1.695-2.528 1.94-.492.1-.984.15-1.5.082-.37-.04-.724-.082-1.066-.205-.615-.22-.834-.6-.847-1.2l-.014-8.24c0-.492.22-.6.574-.615.533-.04 1.08-.027 1.613.027a6.06 6.06 0 0 1 1.654.4 3.98 3.98 0 0 1 1.08.67c.738.63 1.23 1.42 1.5 2.35.22.752.26 1.517.22 2.282zm13.34 1.34c0-.082 0-.15-.014-.232-.123-.752-.52-1.326-1.134-1.763-.396-.287-.847-.478-1.312-.615-.082-.027-.15-.055-.232-.068.014-.068.055-.082.096-.096.273-.137.533-.287.765-.492.424-.355.7-.793.847-1.326.082-.287.082-.574.055-.875a2.35 2.35 0 0 0-.998-1.777c-.63-.465-1.367-.656-2.132-.67-1.476-.027-2.965 0-4.44 0-.424 0-.847.027-1.285-.04-.082-.014-.2-.04-.26.055-.1.178-.22.355-.26.56-.014.096.014.15.123.164l.943.137c.37.055.63.26.656.588a5.78 5.78 0 0 1 .04.683l-.027 2.555-.014 5.056c0 .3-.04.588-.096.888a.5.5 0 0 1-.355.41c-.273.082-.533.164-.82.164a.34.34 0 0 0-.355.232c-.055.123-.1.26-.123.383-.027.164.014.22.178.2.123-.014 4.633.096 5.48.014.506-.055 1-.123 1.503-.273.86-.273 1.654-.67 2.282-1.34.52-.547.82-1.203.847-1.968.04-.178.04-.355.04-.547zm-6.628-5.6l.04-1.093c0-.205.082-.3.287-.342.328-.068.656-.04.984-.027.328.027.642.068.97.164.6.178 1.066.52 1.34 1.093a1.96 1.96 0 0 1 .191.834c.014.383-.014.752-.164 1.12-.232.506-.6.834-1.134.93s-2.05.055-2.282.055c-.205 0-.22-.027-.22-.232V28.83a8.79 8.79 0 0 1-.014-1.203zm4.44 7.352c-.232.615-.656 1.04-1.257 1.27-.328.123-.656.2-1 .178-.424-.014-.847 0-1.27-.082-.574-.123-.834-.67-.875-1.066-.068-.697-.027-1.408-.04-1.927v-1.804c0-.22.027-.287.26-.287l1.285.014.875.1c.615.137 1.175.37 1.613.847.355.383.547.847.588 1.353.04.478.014.943-.164 1.394z"
                    fill="#c2bfbf"
                  />
                  <path
                    d="M77.95 30.85l.355.055c.383.014.834-.123.97-.656a1.38 1.38 0 0 0 0-.78c-.082 0-.123.068-.164.096-.205.164-.437.26-.683.287-.492.055-.984.027-1.462-.15l-.67-.232a3.95 3.95 0 0 0-1.45-.19c-.697.055-1.353.287-1.968.615-.656.355-1.12.888-1.34 1.613-.123.424-.137.86-.082 1.298.137.998.656 1.695 1.585 2.064.055.014.096.04.15.055.123.068.137.137.027.232l-.342.232-.82.506c-.205.123-.232.22-.164.437a1.43 1.43 0 0 0 .437.656 2.28 2.28 0 0 0 .629.383c.15.068.15.1.014.22l-.78.56c-.26.2-.52.4-.738.656a1.35 1.35 0 0 0-.328 1.23 2.31 2.31 0 0 0 .71 1.23 2.9 2.9 0 0 0 1.257.683c.765.22 1.558.232 2.337.082 1.12-.205 2.1-.7 2.87-1.544.533-.56.847-1.216.875-2a1.92 1.92 0 0 0-1.476-1.995l-.738-.137-2.255-.2c-.246-.014-.492-.055-.697-.178-.26-.164-.328-.478-.164-.683.123-.15.273-.246.465-.26l.437-.04a3.96 3.96 0 0 0 2.309-1.052 2.42 2.42 0 0 0 .697-1.162c.164-.588.164-1.2.027-1.8-.04-.15-.027-.164.164-.137zm-3.35 6.807c.082.014.164 0 .246 0 .574.027 1.162.068 1.722.22a3.58 3.58 0 0 1 .533.205c.547.3.752.82.683 1.38-.082.615-.424 1.052-.957 1.34-.355.2-.752.287-1.162.328-.15.014-.287 0-.437 0-.478.014-.943-.04-1.394-.232-.314-.123-.574-.3-.806-.547-.478-.478-.7-1.353.014-2.064.437-.4.93-.683 1.558-.63zm1.558-4.264c-.287.724-.916.943-1.544.847-.574-.082-.998-.396-1.27-.916-.355-.697-.45-1.42-.246-2.173.15-.56.492-.984 1.093-1.08.765-.137 1.5.137 1.886.902.2.37.287.82.287 1.462-.014.26-.068.615-.205.957zm-17.218-.93c-.123-.738-.396-1.408-.902-1.968-.752-.834-1.708-1.2-2.788-1.203-.943-.014-1.83.26-2.624.752a3.56 3.56 0 0 0-1.599 2.091c-.232.793-.22 1.6-.04 2.405.478 2.16 2.146 3.088 4.14 2.952.588-.04 1.148-.232 1.68-.492.793-.37 1.367-.957 1.763-1.736.314-.642.45-1.326.437-2.105l-.068-.697zM57 35.497a1.66 1.66 0 0 1-1.408 1.148c-.6.082-1.162-.068-1.667-.424a2.84 2.84 0 0 1-.861-1.025c-.56-1.148-.656-2.35-.37-3.58a2.05 2.05 0 0 1 .574-.998c.506-.465 1.093-.574 1.75-.437.63.137 1.107.478 1.5.998s.574 1.12.683 1.75c.055.314.055.642.068.847 0 .656-.055 1.2-.26 1.722zm31.8-2.924c-.1-.793-.396-1.517-.957-2.118-.738-.806-1.695-1.148-2.76-1.162-.916-.014-1.763.246-2.542.697-.875.52-1.476 1.257-1.708 2.255a4.77 4.77 0 0 0 .328 3.252c.45.957 1.216 1.572 2.228 1.845 1.12.3 2.187.164 3.225-.342.902-.437 1.544-1.12 1.913-2.05.22-.547.3-1.134.314-1.818.014-.123-.014-.342-.04-.56zm-1.886 2.747c-.22.738-.683 1.216-1.462 1.326-.574.082-1.12-.055-1.613-.383-.424-.287-.724-.67-.943-1.12-.246-.478-.383-.984-.437-1.503-.082-.642-.082-1.27.068-1.913a1.95 1.95 0 0 1 .123-.369c.383-.957 1.23-1.394 2.228-1.175.67.15 1.175.52 1.558 1.08.37.547.547 1.148.63 1.8.04.26.055.533.04.765 0 .533-.04 1.025-.2 1.503z"
                    fill="#47474a"
                  />
                </g>
              </svg>
              <p className="text-roboto text-blue-700 text-xl font-semibold">MongoDB</p>
              <p className="font-inter text-center text-black">Basic</p>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#60a5fa"
            fillOpacity="1"
            d="M0,96L40,90.7C80,85,160,75,240,69.3C320,64,400,64,480,85.3C560,107,640,149,720,176C800,203,880,213,960,224C1040,235,1120,245,1200,213.3C1280,181,1360,107,1400,69.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div id="project" className="pt-20 min-h-screen bg-blue-400 text-white">
        <div className="container mx-auto">
          <h1 className="text-center font-roboto text-4xl border-b-2 border-blue-900">My Project</h1>
          <div className="flex justify-around mt-6 md:flex-row flex-col" id="list-project">
            <div id="card" className="flex md:w-4/12 w-10/12 flex-col mx-auto my-5" data-aos="zoom-out" data-aos-once={true} data-aos-duration="1000">
              <div className="relative">
                <a
                  href="https://niaga-11.000webhostapp.com/"
                  target="_blank"
                  className="absolute inset-0 bg-blue-400 z-20 flex items-center justify-center font-inter bg-blue-700 bg-opacity-0 opacity-0 hover:opacity-100 hover:bg-opacity-75 duration-150"
                  onMouseEnter={(e) => handleProjectHover(e, 'niaga-11')}
                  onMouseOut={(e) => handleProjectHover(e, 'niaga-11')}
                >
                  VISIT WEBSITE
                </a>
                <img src={process.env.PUBLIC_URL + 'niaga-11.png'} alt="thumbnail" className="relative z-10" />
                <span id="niaga-11" className="absolute inset-0 cursor-pointer border-4 border-blue-900 transform z-0 transition duration-150 z-0"></span>
              </div>
              <p className="font-roboto text-2xl mt-3">Niaga 11</p>
              <p className="font-inter text-md">Marketplace</p>
              <div className="flex mt-1">
                <span className="font-inter text-sm bg-red-400 px-3 py-1 rounded-xl text-white mr-2">Codeigniter</span>
                <span className="font-inter text-sm bg-yellow-400 px-3 py-1 rounded-xl text-white mx-2">MySQL</span>
                <span className="font-inter text-sm bg-blue-700 px-3 py-1 rounded-xl text-white mx-2">Bootstrap</span>
              </div>
            </div>
            <div id="card" className="flex md:w-4/12 w-10/12 flex-col mx-auto my-5" data-aos="zoom-out" data-aos-once={true} data-aos-duration="1000">
              <div className="relative">
                <a
                  href="http://perpustakaan-ku.herokuapp.com/"
                  target="_blank"
                  className="absolute inset-0 bg-blue-400 z-20 flex items-center justify-center font-inter bg-blue-700 bg-opacity-0 opacity-0 hover:opacity-100 hover:bg-opacity-75 duration-150"
                  onMouseEnter={(e) => handleProjectHover(e, 'perpus')}
                  onMouseOut={(e) => handleProjectHover(e, 'perpus')}
                >
                  VISIT WEBSITE
                </a>
                <img src={process.env.PUBLIC_URL + 'perpus.png'} alt="thumbnail" className="relative z-10" />
                <span id="perpus" className="absolute inset-0 cursor-pointer border-4 border-blue-900 transform z-0 transition duration-150 z-0"></span>
              </div>
              <p className="font-roboto text-2xl mt-3">Perpus</p>
              <p className="font-inter text-md">Management Data</p>
              <div className="flex mt-1">
                <span className="font-inter text-sm bg-green-400 px-3 py-1 rounded-xl text-white mr-2">Express</span>
                <span className="font-inter text-sm bg-green-600 px-3 py-1 rounded-xl text-white mx-2">MongoDB</span>
                <span className="font-inter text-sm bg-blue-700 px-3 py-1 rounded-xl text-white mx-2">React</span>
                <span className="font-inter text-sm bg-purple-700 px-3 py-1 rounded-xl text-white mx-2">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,186.7C384,160,480,96,576,101.3C672,107,768,181,864,176C960,171,1056,85,1152,53.3C1248,21,1344,43,1392,53.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div id="contact" className="pt-20 min-h-screen text-blue-700 relative">
        <div className="container mx-auto">
          <h1 className="text-center font-roboto text-4xl border-b-2 border-blue-400">Contact</h1>
          <h1 className="text-center font-inter text-2xl mt-2">Get In Touch</h1>
          <div id="contact-list" className="flex justify-around items-center md:flex-row flex-col flex-col mt-3 relative z-10">
            <div className="flex flex-col items-center md:mx-1 my-2 p-2 border shadow-xl bg-white rounded-lg md:w-2/12 w-6/12">
              <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#5af745' }} size="4x" />
              <p className="font-inter text-xl">0895-4147-47753</p>
            </div>
            <div className="flex flex-col items-center md:mx-1 my-2 border shadow-xl bg-white rounded-lg md:w-2/12 w-6/12 p-2">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: '#f56e69' }} size="4x" />
              <p className="font-inter text-xl">aldyh128@gmail.com</p>
            </div>
            <div className="flex flex-col items-center md:mx-1 my-2 border shadow-xl bg-white rounded-lg md:w-2/12 w-6/12 p-2">
              <FontAwesomeIcon icon={faSearchLocation} style={{ color: '#364ff5' }} size="4x" />
              <p className="font-inter text-xl">Cimahi, Jawa Barat</p>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 left-0 z-0">
          <path
            fill="#1e3a8a"
            fillOpacity="1"
            d="M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,181.3C672,160,768,96,864,90.7C960,85,1056,139,1152,176C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
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
    </Fragment>
  );
}

export default Home;
