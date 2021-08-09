import React from 'react';

function AboutMe(props) {
  return (
    <div id="about-me" className="pt-20 min-h-screen bg-yellow-400 relative">
      <div className="container mx-auto w-full">
        <h1 className="text-center font-roboto text-4xl border-b-2 border-blue-900">About Me</h1>
        <div className="flex px-10 sm:flex-row flex-col items-center justify-between">
          <img
            src={process.env.PUBLIC_URL + 'biru.png'}
            alt="My Photo"
            className="sm:w-4/12 w-6/12 justify-self-auto mx-auto mt-8 shadow-2xl rounded-full my-2 relative z-10"
            data-aos="zoom-in"
            data-aos-once={true}
            data-aos-duration="1000"
          />
          <div className="w-6/12 font-inter relative z-10" data-aos="fade-left" data-aos-once={true} data-aos-duration="1000">
            <p>
              I'm just graduated as <b>Software Engineer</b> at high school. I'm passionate on <b>Web Development</b> especially on server side and a fast learner at programming.
            </p>
            <p>I want to improve my experience and my knowledge at proramming</p>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 left-0 z-0">
        <path
          fill="#2563eb"
          fill-opacity="1"
          d="M0,64L24,58.7C48,53,96,43,144,64C192,85,240,139,288,144C336,149,384,107,432,117.3C480,128,528,192,576,192C624,192,672,128,720,133.3C768,139,816,213,864,234.7C912,256,960,224,1008,202.7C1056,181,1104,171,1152,165.3C1200,160,1248,160,1296,133.3C1344,107,1392,53,1416,26.7L1440,0L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default AboutMe;
