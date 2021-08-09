import React from 'react';

function Project(props) {
  const handleProjectHover = (e, id) => {
    let span = document.querySelector(`#${id}`);

    span.classList.toggle('rotate-6');
  };

  return (
    <div id="project" className="pt-20 min-h-screen bg-blue-400 text-white relative">
      <div className="container mx-auto relative z-10">
        <h1 className="text-center font-roboto text-4xl border-b-2 border-blue-900">My Project</h1>
        <div className="flex justify-around mt-6 lg:flex-row flex-wrap flex-col " id="list-project">
          <div id="card" className="flex sm:w-8/12 lg:w-4/12 w-10/12 flex-col mx-auto my-5" data-aos="zoom-out" data-aos-once={true} data-aos-duration="1000">
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
            <div className="flex items-center mt-1">
              <span className="font-inter text-sm bg-red-400 px-3 py-1 rounded-xl text-white mr-2">Codeigniter</span>
              <span className="font-inter text-sm bg-yellow-400 px-3 py-1 rounded-xl text-white mx-2">MySQL</span>
              <span className="font-inter text-sm bg-blue-700 px-3 py-1 rounded-xl text-white mx-2">Bootstrap</span>
            </div>
          </div>
          <div id="card" className="flex sm:w-8/12 lg:w-4/12 w-10/12 flex-col mx-auto my-5" data-aos="zoom-out" data-aos-once={true} data-aos-duration="1000">
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
            <div className="flex items-center mt-1">
              <span className="font-inter text-sm bg-green-400 px-3 py-1 rounded-xl text-white mr-2">Express</span>
              <span className="font-inter text-sm bg-green-600 px-3 py-1 rounded-xl text-white mx-2">MongoDB</span>
              <span className="font-inter text-sm bg-blue-700 px-3 py-1 rounded-xl text-white mx-2">React</span>
              <span className="font-inter text-sm bg-purple-700 px-3 py-1 rounded-xl text-white mx-2">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 left-0 z-0">
        <path
          fill="#1e3a8a"
          fill-opacity="1"
          d="M0,192L48,197.3C96,203,192,213,288,186.7C384,160,480,96,576,101.3C672,107,768,181,864,176C960,171,1056,85,1152,53.3C1248,21,1344,43,1392,53.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Project;
