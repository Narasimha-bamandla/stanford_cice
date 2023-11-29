import React, { useState } from 'react'; 
import { CheckboxList } from '../stanford/DropdownList';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import ClayForm, { ClayInput, ClayCheckbox } from '@clayui/form';


const AdvancedFilters = () => {
  const [permisionRequiredValue, setPermisionRequiredValue] = useState(true);
  const [csiCertificatesValue, setCSICertificatesValue] = useState(false);
  const [dayCodeList, setDayCodeList] = useState(0);
  const [dayCodeValues, setDayCodeValues] = useState([1, 10]);
  const handleDayCodeChange = (values) => {
    setDayCodeValues(values);
  };
  const [academicYearValues, setAcademicYearValues] = useState([2, 13]);
  const handleAcademicYearChange = (values) => {
    setAcademicYearValues(values);
  };
  const handleDayCodeList = () => {
    setDayCodeList((prevVal) => (prevVal === 0 ? 1 : 0));
  };
  const [academicYearList, setAcademicYearList] = useState(0);
  const handleAcademicYearList = () => {
    setAcademicYearList((prevVal) => (prevVal === 0 ? 1 : 0));
  };
  const dayCodeItems = [
    {
      id: 1,
      name: "(All)"
    },
    {
      id: 2,
      name: "MON"
    },
    {
      id: 3,
      name: "TUE"
    },
    {
      id: 4,
      name: "WED"
    },
    {
      id: 5,
      name: "FRI"
    },
    {
      id: 6,
      name: "NS"
    },
  ];
  const academicYearItems = [
    {
      id: 1,
      name: "2020-2021"
    },
    {
      id: 2,
      name: "2021-2022"
    },
    {
      id: 3,
      name: "2022-2023"
    },
    {
      id: 4,
      name: "2023-2024"
    }
  ];
  const sortbyitems = [
    {
      id: 1,
      name: "Clark Kent"
    },
    {
      id: 2,
      name: "List item"
    },
    {
      id: 3,
      name: "Carol Denvers"
    },
    {
      id: 4,
      name: "Peggy Carter"
    },
    {
      id: 5,
      name: "Jake Peralta"
    },
    {
      id: 6,
      name: "Matt Murdock"
    }
  ];
  return (
    <div className='advancedfilters'>

      <div className='fields-grp'>
        <div className='flexcol'>
          <div className='flexrow'>
            <label>Units</label>
            <div className='flexcol'>
              <Slider
                range
                min={0}
                max={100}
                step={10}
                defaultValue={dayCodeValues}
                onChange={handleDayCodeChange}
                className='sdtd-rcslider'
              />
              <ClayForm.Group className='inputs-grp' >
                <ClayInput
                  id="unitsstart"
                  placeholder="1 Unit"
                  type="text"
                  value={dayCodeValues[0]}
                  className='sdtd-input fullwidth'
                />
                <ClayInput
                  id="unitsend"
                  placeholder="2 Units"
                  type="text"
                  value={dayCodeValues[1]}
                  className='sdtd-input fullwidth'
                />  </ClayForm.Group>
            </div> </div></div>
        <div className='vline'></div>
        <div className='flexrow'>
          <label>Meeting Time Frame</label>
          <div className='flexcol'>
            <Slider
              range
              min={0}
              max={100}
              step={10}
              defaultValue={academicYearValues}
              onChange={handleAcademicYearChange}
              className='sdtd-rcslider'
            />
            <ClayForm.Group className='inputs-grp' >
              <ClayInput
                id="timeframestart"
                placeholder="3 PM"
                type="text"
                value={academicYearValues[0]}
                className='sdtd-input fullwidth'
              />
              <ClayInput
                id="timeframeend"
                placeholder="4 PM"
                type="text"
                value={academicYearValues[1]}
                className='sdtd-input fullwidth'
              />  </ClayForm.Group>
          </div></div>
        <div className='vline'></div>
        <div className='flexcol'>
          <label>Day Code</label>
          <div className="DropdownList dropdown dropdown-btn">
            <button
              className={dayCodeList ? 'dropdown-toggle btn active' : 'dropdown-toggle btn'}
              type="button"
              aria-controls="daycode-dropdown-menu"
              aria-expanded="false"
              aria-haspopup="true"
              active={dayCodeList} modern onClick={handleDayCodeList}
            >
              All
              <svg
                className='arrow'
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.19995 6.40039L7.99995 11.2004L12.8 6.40039"
                  stroke="#2E2D29"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                  strokeLinejoin="bevel"
                />
              </svg>
            </button>
            {dayCodeList ? <>
              <div id="daycode-dropdown-menu" className="dropdown-menu show" role="presentation">
                <CheckboxList items={dayCodeItems} />
              </div></> : ''}
          </div>
        </div>
        <div className='vline'></div>
        <div className='flexcol'>
          <label>Academic Year</label>
          <div className="DropdownList   dropdown  dropdown-btn">
            <button
              className={academicYearList ? 'dropdown-toggle btn active' : 'dropdown-toggle btn'}
              type="button"
              aria-controls="daycode-dropdown-menu"
              aria-expanded="false"
              aria-haspopup="true"
              active={academicYearList} modern onClick={handleAcademicYearList}
            >
              2022-2023
              <svg
                className='arrow'
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.19995 6.40039L7.99995 11.2004L12.8 6.40039"
                  stroke="#2E2D29"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                  strokeLinejoin="bevel"
                />
              </svg>

            </button>
            {academicYearList ? <>
              <div id="daycode-dropdown-menu" className="dropdown-menu show" role="presentation">
                <CheckboxList items={academicYearItems} />
              </div></> : ''}
          </div>
        </div>
        <div className='vline'></div>
        <div className='flexcol'>
          <ClayCheckbox
            className='sm bold'
            aria-label="Permision Required"
            checked={permisionRequiredValue}
            onChange={() => setPermisionRequiredValue(val => !val)}
            label="Permision Required"
          />
          <ClayCheckbox
            className='sm bold'
            aria-label="CSI Certificates"
            checked={csiCertificatesValue}
            onChange={() => setCSICertificatesValue(val => !val)}
            label="CSI Certificates"
          />
        </div>
      </div>
      <div className='appliedfilters'>
        <div className='applied'>
          <label>Autumn
            <button class="sdfd-btn sm-btn ghost-btn     ">  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M4.73302 4.00006L7.84813 0.884861C8.05085 0.68223 8.05085 0.354604 7.84813 0.151973C7.6455 -0.0506577 7.31787 -0.0506577 7.11524 0.151973L4.00004 3.26717L0.884932 0.151973C0.682207 -0.0506577 0.354675 -0.0506577 0.152044 0.151973C-0.0506815 0.354604 -0.0506815 0.68223 0.152044 0.884861L3.26715 4.00006L0.152044 7.11526C-0.0506815 7.31789 -0.0506815 7.64551 0.152044 7.84815C0.253028 7.94922 0.385805 8 0.518488 8C0.651171 8 0.783854 7.94922 0.884932 7.84815L4.00004 4.73295L7.11524 7.84815C7.21632 7.94922 7.349 8 7.48168 8C7.61437 8 7.74705 7.94922 7.84813 7.84815C8.05085 7.64551 8.05085 7.31789 7.84813 7.11526L4.73302 4.00006Z" fill="#585754" />
            </svg></button></label>
            <label>1 Unit
            <button class="sdfd-btn sm-btn ghost-btn     ">  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M4.73302 4.00006L7.84813 0.884861C8.05085 0.68223 8.05085 0.354604 7.84813 0.151973C7.6455 -0.0506577 7.31787 -0.0506577 7.11524 0.151973L4.00004 3.26717L0.884932 0.151973C0.682207 -0.0506577 0.354675 -0.0506577 0.152044 0.151973C-0.0506815 0.354604 -0.0506815 0.68223 0.152044 0.884861L3.26715 4.00006L0.152044 7.11526C-0.0506815 7.31789 -0.0506815 7.64551 0.152044 7.84815C0.253028 7.94922 0.385805 8 0.518488 8C0.651171 8 0.783854 7.94922 0.884932 7.84815L4.00004 4.73295L7.11524 7.84815C7.21632 7.94922 7.349 8 7.48168 8C7.61437 8 7.74705 7.94922 7.84813 7.84815C8.05085 7.64551 8.05085 7.31789 7.84813 7.11526L4.73302 4.00006Z" fill="#585754" />
            </svg></button></label>
            <label>2 Units
            <button class="sdfd-btn sm-btn ghost-btn     ">  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M4.73302 4.00006L7.84813 0.884861C8.05085 0.68223 8.05085 0.354604 7.84813 0.151973C7.6455 -0.0506577 7.31787 -0.0506577 7.11524 0.151973L4.00004 3.26717L0.884932 0.151973C0.682207 -0.0506577 0.354675 -0.0506577 0.152044 0.151973C-0.0506815 0.354604 -0.0506815 0.68223 0.152044 0.884861L3.26715 4.00006L0.152044 7.11526C-0.0506815 7.31789 -0.0506815 7.64551 0.152044 7.84815C0.253028 7.94922 0.385805 8 0.518488 8C0.651171 8 0.783854 7.94922 0.884932 7.84815L4.00004 4.73295L7.11524 7.84815C7.21632 7.94922 7.349 8 7.48168 8C7.61437 8 7.74705 7.94922 7.84813 7.84815C8.05085 7.64551 8.05085 7.31789 7.84813 7.11526L4.73302 4.00006Z" fill="#585754" />
            </svg></button></label>
            <label>8:00 AM - 9:00 AM
            <button class="sdfd-btn sm-btn ghost-btn     ">  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M4.73302 4.00006L7.84813 0.884861C8.05085 0.68223 8.05085 0.354604 7.84813 0.151973C7.6455 -0.0506577 7.31787 -0.0506577 7.11524 0.151973L4.00004 3.26717L0.884932 0.151973C0.682207 -0.0506577 0.354675 -0.0506577 0.152044 0.151973C-0.0506815 0.354604 -0.0506815 0.68223 0.152044 0.884861L3.26715 4.00006L0.152044 7.11526C-0.0506815 7.31789 -0.0506815 7.64551 0.152044 7.84815C0.253028 7.94922 0.385805 8 0.518488 8C0.651171 8 0.783854 7.94922 0.884932 7.84815L4.00004 4.73295L7.11524 7.84815C7.21632 7.94922 7.349 8 7.48168 8C7.61437 8 7.74705 7.94922 7.84813 7.84815C8.05085 7.64551 8.05085 7.31789 7.84813 7.11526L4.73302 4.00006Z" fill="#585754" />
            </svg></button></label>
            <label>2022 - 23
            <button class="sdfd-btn sm-btn ghost-btn     ">  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M4.73302 4.00006L7.84813 0.884861C8.05085 0.68223 8.05085 0.354604 7.84813 0.151973C7.6455 -0.0506577 7.31787 -0.0506577 7.11524 0.151973L4.00004 3.26717L0.884932 0.151973C0.682207 -0.0506577 0.354675 -0.0506577 0.152044 0.151973C-0.0506815 0.354604 -0.0506815 0.68223 0.152044 0.884861L3.26715 4.00006L0.152044 7.11526C-0.0506815 7.31789 -0.0506815 7.64551 0.152044 7.84815C0.253028 7.94922 0.385805 8 0.518488 8C0.651171 8 0.783854 7.94922 0.884932 7.84815L4.00004 4.73295L7.11524 7.84815C7.21632 7.94922 7.349 8 7.48168 8C7.61437 8 7.74705 7.94922 7.84813 7.84815C8.05085 7.64551 8.05085 7.31789 7.84813 7.11526L4.73302 4.00006Z" fill="#585754" />
            </svg></button></label>
        </div>

        <div className='action-btns'>    <button class="sdfd-btn sm-btn primary-btn     ">Apply</button>
          <button class="sdfd-btn sm-btn secondary-btn     ">Clear Filters</button>
        </div>
      </div>


    </div>
  )
}


export default AdvancedFilters;