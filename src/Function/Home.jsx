import React, { Fragment, useEffect } from 'react';
import Aos from 'aos';
import Nav from '../Component/Nav';
import Header from './Header';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Project from './Project';
import Footer from './Footer';

function Home(props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.overflowY = 'scroll';
    Aos.init();
    Aos.refresh();
  });

  return (
    <Fragment>
      <Nav />
      <Header />
      <AboutMe />
      <Skills />
      <Project />
      <Footer />
    </Fragment>
  );
}

export default Home;
