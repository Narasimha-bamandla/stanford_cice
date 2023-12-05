import React, { useState } from 'react';
import Header from './components/Header/Header';
import CourseResearch from './components/CourseResearch/CourseResearch';  
import CourseDetails from './components/CourseDetails/CourseDetails';  



export default class extends React.Component {

  render() {
   
    return (
      <> 
        {/* <CourseResearch />    */}
        <CourseDetails />
      </>
    );
  }
}