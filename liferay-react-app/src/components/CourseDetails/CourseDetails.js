import React from 'react';
import InfoBanner from './InfoBanner';
import ClayLayout from '@clayui/layout';
import { Heading } from '@clayui/core';
import ClayButton from '@clayui/button';
import { ClayPaginationWithBasicItems } from '@clayui/pagination';
import Pagination from '../stanford/pagination';
import LinkCards from './LinkCards';
import CourseInfo from './CourseInfo';
import CourseSections from './CourseSections';
import RatingsPanel from './RatingsPanel';
import CourseComments from './CourseComments';
import CourseSectionTabs from './CourseSectionTabs';


const CourseDetails = () => {
  const students = [
    { id: 1, text: " B Jacobs", active: true },
    { id: 2, text: "J Hurley", active: false },
    { id: 3, text: "B Krishnan", active: false },
    { id: 4, text: "E Tinotti", active: false },
    { id: 3, text: "S Ross", active: false },
    { id: 4, text: "Y Khatun", active: false }, 
  ];
  const quicklinks = [
    { id: 1, text: "Overview",   },
    { id: 2, text: "Course Information",    },
    { id: 3, text: "Helpful Links",  },
    { id: 4, text: "Student Course Evaluations",  }, 
  ];
  
  
  
  
  return (
    <>

      <InfoBanner />
      <div className='course-details'>
        <div className='col-left'>
        <div className='course_overview' id='overview'>
          <Heading level={2} weight="semi-bold"      >
            Overview
          </Heading>
          <div className='body2'>
            This course covers all the stages of funding for early stage high-growth companies, from seed funding to venture capital rounds to a successful exit. We will concentrate on how entrepreneurs and investors make and should make important decisions. Examples of issues that we will cover are: How can entrepreneurs raise funding successfully? What are typical mistakes entrepreneurs make in raising capital and negotiating with investors? How to choose your investor? How to pitch to an investor? How do angels and VCs generate and process their deal flow and select companies? How are VCs involved in business decisions such as recruiting talent and replacing CEOs? What are the important provisions of financeancial contracts between VCs and founders? How to value early-stage companies? The course is very applied and mostly case-based. We will discuss a lot of nitty-gritty details that is a must for founders and investors. Case protagonists, founders, angels, and VCs will be among guest speakers. No prior knowledge of the VC industry is needed.
          </div> </div>
        </div><div className='col-right'></div>
        </div>
        <div className='course-details'>
          <div className='course_sections' >
            <Heading level={2} weight="semi-bold"     >
              Sections
            </Heading> 
            <CourseSectionTabs />
          </div> 
          </div>
          <div className='course-details'>
          <div className='col-left'>
          <div className='course_sections'>
          <CourseSections />
          </div>
          <div className='course_info' id='courseinformation'>
            <Heading level={3} weight="semi-bold"     >
              Course Information
            </Heading>
            <CourseInfo />
          </div>
          <div className='help-links' id='helpfullinks'>
            <Heading level={3} weight="semi-bold"     >
              Helpful Links
            </Heading>
            <LinkCards />
          </div>

        <div className='student_course_evaluations' id='studentcourseevaluations'>
          <Heading level={3} weight="semi-bold"     >
            Student Course Evaluations
          </Heading>
          <ul class="sdfd-tabs fill-tabs nav nav-tabs fullwidth mw148" role="tablist">
            {students.map((item, index) => (
              <li class="nav-item" key={index}>
                <button className={item.active ? 'nav-link active' : 'nav-link'}     >
                  {item.text}
                </button></li>
            ))}
          </ul>

          <RatingsPanel />
          <CourseComments />

          <Pagination />
          </div>
        </div><div className='col-right' > 
          <ul class="course_quick_links sdfd-tabs achor-tabs"  >
            {quicklinks.map((item, index) => (
              <li class={index == 0 ? 'nav-item active' : 'nav-item'}  key={index}>
                <a className='nav-link' href={'#'+item.text.toLowerCase().trim().replace(/\s+/g, '')}   >
                  {item.text}
                </a></li>
            ))}
          </ul>  
        </div>
      </div>

    </>
  );
};

export default CourseDetails;