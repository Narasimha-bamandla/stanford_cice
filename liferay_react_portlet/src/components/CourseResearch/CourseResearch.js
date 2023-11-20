import React, { Component } from 'react';
import ClayLayout from '@clayui/layout'; 
import Visualizer from './Visualizer';
import InfoBanner from './InfoBanner';
import Courses from './Courses';



export default class CourseResearch extends React.Component {
  render(){
  return (
    <>

      <InfoBanner />
      <div className='content-area'>
        <ClayLayout.ContainerFluid view>
          <ClayLayout.Row>
            <ClayLayout.Col size={8}   >
              <Courses />
            </ClayLayout.Col>
            <ClayLayout.Col size={4}   >
              <div className='btns-right'> <span className='button btn btn-primary btn-sm'>  <span>View Your Study Plan</span>  </span> </div>
              <Visualizer /> 
            </ClayLayout.Col>
            </ClayLayout.Row> 
        </ClayLayout.ContainerFluid>
      </div>
    </>
  );
  }
};
 