import React, { use } from 'react';
import { Suspense } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Pictures from './Pictures';

function ProjectItemFallback() {
  return (<div>placeholder</div>)
}

const ProjectItem = () => {
  var x = 0;
  var y = 0;
  var halfX;
  if (typeof window !== "undefined") {
    x = window.screen.width;
    y = window.screen.height;
    halfX = x / 2;
  }
  
  return (
    <main>
      <Navbar></Navbar>
      <Suspense>
        <Pictures></Pictures>
      </Suspense>
      <Footer></Footer>
    </main>
  )
}

export default ProjectItem