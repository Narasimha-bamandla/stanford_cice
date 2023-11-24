import logo from './logo.svg';
import './App.scss';
import React from 'react';
import ClayCard from '@clayui/card';
import { Text, Heading } from '@clayui/core';
import ClayLink from '@clayui/link';
import ClayButton, { ClayButtonWithIcon } from '@clayui/button';
import ClayLayout from '@clayui/layout';
import DropDown from '@clayui/drop-down';
import "@clayui/css/lib/css/atlas.css";
import "./assets/style/custom.css";
import OverallJourney from './components/OverallJourney';
import CourseResearch from './components/CourseResearch/CourseResearch';
import Visualizer from './components/CourseResearch/Visualizer';
import CourseItem from './components/CourseResearch/CourseItem';
import Header from './components/OverallJourney/Header';
import Buttons from './components/stanford/buttons';
import Tabs from './components/stanford/tabs';
import Common from './components/stanford/common';
import Checkboxes from './components/stanford/checkboxes';
import Radiobuttons from './components/stanford/radiobuttons'; 
import DropdownList from './components/stanford/DropdownList';
import Icons from './components/stanford/icons';
import Input from './components/stanford/input';
import Slider from './components/stanford/slider';
import EventsList from './components/stanford/vcevents';
import Rateingbar from './components/stanford/ratingbar';
import Swatches from './components/stanford/swatches';


function App() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: 750, margin: '20px auto' }}>

      <h1>Rating bar</h1>
      <Rateingbar />
      <h1>Events</h1>
      <EventsList />
      <h1>Slider</h1>
      <Slider />
        <h1>Input</h1>
      <Input />   <h1>Icons</h1>
      <Icons />
      <h1>List Dropdown</h1>
        <div style={{ display: 'flex', flexDirection: 'column', padding: 20, gap: 20, border: '1px solid #ccc', borderRadius: 5, }}>
          <DropdownList />
        </div>
        <h1>Radio buttons</h1>
        <div style={{ display: 'flex', flexDirection: 'column', padding: 20, gap: 20, border: '1px solid #ccc', borderRadius: 5, }}>
          <Radiobuttons />
        </div>

        <h1>Checkboxes</h1>
        <div style={{ display: 'flex', flexDirection: 'column', padding: 20, gap: 20, border: '1px solid #ccc', borderRadius: 5, }}>
          <Checkboxes /></div>
        <h1>Headings, Text  and Tags</h1>
        <div style={{ display: 'flex', flexDirection: 'column', padding: 20, gap: 20, border: '1px solid #ccc', borderRadius: 5, }}>
          <Common />
        </div>
        <h1>Tabs</h1>
        <div style={{ display: 'flex', flexDirection: 'column', padding: 20, gap: 20, border: '1px solid #ccc', borderRadius: 5, }}>

          <Tabs /> </div>
        <h1>Buttons</h1>
        <div style={{ display: 'flex', flexDirection: 'column', padding: 20, gap: 20, border: '1px solid #ccc', borderRadius: 5, }}>

          <Buttons /></div>
      </div>
    </>
  );
}

export default App;
