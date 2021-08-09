import React from 'react';

function Header(props) {
  return (
    <div id="home" className="pt-20 min-h-screen bg-blue-900 relative">
      <div className="container mx-auto" data-aos="fade-right" data-aos-once={true} data-aos-duration="600">
        {/* <img src={process.env.PUBLIC_URL + 'biru.png'} alt="My Photo" className="w-1/6 justify-self-auto mx-auto mt-8 shadow-2xl rounded-full" /> */}
        <h1 className="m-8 mt-2 font-roboto text-semibold text-5xl text-white">Asep Aldi Hidayat</h1>
        <p className="m-8 mt-2 font-inter text-semibold text-md text-2xl text-white">Web Developer | Back End Developer</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 left-0 z-0">
        <path
          fill="#fbbf24"
          fillOpacity="1"
          d="M0,64L18.5,85.3C36.9,107,74,149,111,186.7C147.7,224,185,256,222,261.3C258.5,267,295,245,332,202.7C369.2,160,406,96,443,90.7C480,85,517,139,554,181.3C590.8,224,628,256,665,245.3C701.5,235,738,181,775,144C812.3,107,849,85,886,90.7C923.1,96,960,128,997,149.3C1033.8,171,1071,181,1108,181.3C1144.6,181,1182,171,1218,192C1255.4,213,1292,267,1329,277.3C1366.2,288,1403,256,1422,240L1440,224L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Header;
