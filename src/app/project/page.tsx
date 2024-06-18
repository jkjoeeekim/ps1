import React from 'react';

import Navbar from '../navbar/Navbar';
import ProjectItems from './ProjectItems';
import Footer from '../footer/Footer';

const ProjectPage = () => {
  return (
    <main className='bg-[#f7f4ed]'>
      <Navbar></Navbar>
      <ProjectItems></ProjectItems>
      <Footer></Footer>
    </main>  )
}

export default ProjectPage