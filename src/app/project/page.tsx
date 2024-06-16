import React from 'react';
import Image from 'next/image';

import Navbar from '../navbar/Navbar';
import ProjectItems from './ProjectItems';
import Footer from '../footer/Footer';
import image1 from '../assets/ps1.jpg';
import image2 from '../assets/ps2.jpeg';
import image3 from '../assets/ps3.jpeg';

const ProjectPage = () => {
  return (
    <main className=''>
      <Navbar></Navbar>
      <ProjectItems></ProjectItems>
      <Footer></Footer>
    </main>  )
}

export default ProjectPage