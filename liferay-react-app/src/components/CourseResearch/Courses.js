import React, { useState } from 'react';
import { Heading } from '@clayui/core';
import ClayButton from '@clayui/button';
import DropDown from '@clayui/drop-down';
import AngleDown from "../../assets/images/icons/angle_down_icon.svg";
import ClayTabs from '@clayui/tabs';
import { ClayCheckbox } from '@clayui/form';
import CourseItem from './CourseItem';
import ClayList from '@clayui/list';

const CoursesList = () => {
  return (
   <>
   <div className='course-list'   >
    <ClayList style={{ width:'100%'}}>
      <ClayList.Header>Winter Courses</ClayList.Header>
      <ClayList.Item flex>
        <ClayList.ItemField><a href='#'>OIT 276 - Accelerated (2 Units)</a> <span className='rmd-txt'>RECOMMENDED</span></ClayList.ItemField> 
      </ClayList.Item> 
      <ClayList.Item flex>
        <ClayList.ItemField><a href='#'>OIT 274 - Base (2 Units)</a></ClayList.ItemField> 
      </ClayList.Item> 
    </ClayList>
    <ClayList style={{ width:'100%'}}>
      <ClayList.Header>Spring Courses</ClayList.Header>
      <ClayList.Item flex>
        <ClayList.ItemField><a href='#'>OIT 276 - Accelerated (2 Units)</a></ClayList.ItemField> 
      </ClayList.Item> 
      <ClayList.Item flex>
        <ClayList.ItemField><a href='#'>OIT 276 - Accelerated (2 Units)</a></ClayList.ItemField> 
      </ClayList.Item> 
    </ClayList> </div>
    </>
  );
};


const Checkbox = () => { 

  const [value, setValue] = useState(false);
  return ( 
   <> <ClayCheckbox
    aria-label="Collapse Listings"
    checked={value}
    onChange={() => setValue(val => !val)}
    label="Collapse Listings"
  /> </>
  )
}
const Courses = () => {
  const sortbyitems = [
    {
      id: 1,
      name: "OIT 276 - Accelerated (2 Units)"
    },
    {
      id: 2,
      name: "OIT 274 - Base (12 Units) "
    }
  ];


  const [active, setActive] = useState(0);
 
  const [toggleArrow, setToggleArrow] = useState(0);
  const handleToggle = () => {
    setToggleArrow((prevToggle) => (prevToggle === 0 ? 1 : 0));
  };

  return (
    <>
      <div className='tabs-action-items'> <ClayTabs active={active} modern onActiveChange={setActive} >
        <ClayTabs.Item
          innerProps={{
            "aria-controls": "tabpanel-1"
          }} className="btns"
        >
          {"Core & Distribution (Winter & Spring)"}
        </ClayTabs.Item>
        <ClayTabs.Item
          innerProps={{
            "aria-controls": "tabpanel-2"
          }} className="btns"
        >
          {"Electives"}
        </ClayTabs.Item>

      </ClayTabs>
        <div className='action-items'>  <ClayButton displayType={null} size='sm'>
          Core Courses (Autumn)
        </ClayButton>
        <Checkbox /></div></div>

      <ClayTabs.Content activeIndex={active} fade className="courses">
        <ClayTabs.TabPane aria-labelledby="tab-1">
          <span className='infobar'>   The Study Plan recommends some courses to you based on your survey and optional placement test results. However, selecting a course from your study plan doesn't guarantee your enrollment into the course. Your academic advisor will be able to view your study plan.</span>
          <Heading level={4} weight="semi-bold"     >
            CORE REQUIREMENTS
          </Heading>
          <div className='core-course-area'>
            <div className='header'>
              <div className='title'>
                Data Analysis & Decision Making
              </div>
              <div className='text-lbl'>
                <label> <strong>Recommended Level:</strong>  Accelerated</label>
                <label>  <strong> Eligible for Advanced:</strong> No</label>
              </div>
              <div className='sort-toggle'>  <DropDown trigger={<ClayButton size='sm' displayType={null}>
                <span className="text">
                  OIT 276 - Accelerated (2 Units)
                </span>
                <span className="inline-item inline-item-after">
                  <img src={AngleDown} />
                </span> </ClayButton>}>
                <DropDown.ItemList items={sortbyitems}>
                  {item => (
                    <DropDown.Item
                      key={item.name}
                      onClick={() => {
                        // logic stuff...
                      }}
                    >
                      {item.name}
                    </DropDown.Item>
                  )}
                </DropDown.ItemList>
              </DropDown>
                <ClayButton  active={toggleArrow} modern onClick={handleToggle} className={toggleArrow ? 'toggle-btn active':'toggle-btn'}  displayType={null} size='sm'>
                  <img src={AngleDown} />
                </ClayButton> </div>

            </div>
            <hr />
            <div className='content'> 
          {toggleArrow ? <><CoursesList /></> : <><div className='tabs'>
                <ClayButton className='active' displayType={'secondary'} size='sm'>
                  {"Winter Courses"}
                </ClayButton>
                <ClayButton className='' displayType={'secondary'} size='sm'>
                  {"Spring Courses"} <span>N/A</span>
                </ClayButton>
              </div>
              <div className='tabs-content'>
                <CourseItem />
              </div></>}    

              
            </div>
          </div>
          <div className='core-course-area'>
            <div className='header'>
              <div className='title'>
              Organizational Behaviour
              </div>
              <div className='text-lbl'>
                <label> <strong>Recommended Level:</strong>  Accelerated</label>
                <label>  <strong> Eligible for Advanced:</strong> No</label>
              </div>
              <div className='sort-toggle'>  <DropDown trigger={<ClayButton size='sm' displayType={null}>
                <span className="text">
                Select Course
                </span>
                <span className="inline-item inline-item-after">
                  <img src={AngleDown} />
                </span> </ClayButton>}>
                <DropDown.ItemList items={sortbyitems}>
                  {item => (
                    <DropDown.Item
                      key={item.name}
                      onClick={() => {
                        // logic stuff...
                      }}
                    >
                      {item.name}
                    </DropDown.Item>
                  )}
                </DropDown.ItemList>
              </DropDown>
                <ClayButton className='toggle-btn' displayType={null} size='sm'>
                  <img src={AngleDown} />
                </ClayButton> </div>

            </div>
            <hr />
            <div className='content'>
            <CoursesList />
        
            </div>
          </div>
        </ClayTabs.TabPane>
        <ClayTabs.TabPane aria-labelledby="tab-2">
          {"Electives"}
        </ClayTabs.TabPane>
        <ClayTabs.TabPane aria-labelledby="tab-3">
          Core Courses (Autumn)
        </ClayTabs.TabPane>
        <ClayTabs.TabPane aria-labelledby="tab-4">
          Core Courses ( )
        </ClayTabs.TabPane>
      </ClayTabs.Content>
    </>
  );
};



export default Courses;