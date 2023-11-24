import React from 'react';
import ClayCard from '@clayui/card';
import { Text, Heading } from '@clayui/core';
import ClayLink from '@clayui/link';
import ClayButton, { ClayButtonWithIcon } from '@clayui/button';
import ClayLayout from '@clayui/layout';
import DropDown from '@clayui/drop-down';
import ArrowRight from "../../assets/images/icons/arrow_right_icon.svg";
import CourseSearchIcon from "../../assets/images/icons/course_search_icon.svg";
import CourseRegIcon from "../../assets/images/icons/course_reg_icon.svg";
import ExternalLinkIcon from "../../assets/images/icons/outside_link_icon.svg";
import fillCircleIcon from "../../assets/images/icons/fill_circle_icon.svg";
import InfoIcon from "../../assets/images/icons/info_icon.svg";
import AngleDown from "../../assets/images/icons/angle_down_icon.svg";
import StanfordLogo from "../../assets/images/stanford_logo.png";
import "../../assets/style/custom.css";
import Header from './Header';
const OverallJourney = () => {
  const items = [
    {
      id: 1,
      name: "Overall Journey"
    },
    {
      id: 2,
      name: "GSB Course Research"
    },
    {
      id: 3,
      name: "GSB Registration"
    }
  ];

  return (
    <>
      <Header />
   <div className='OverallJourney'>
      <ClayLayout.ContainerFluid view>
        <ClayLayout.Row justify="center" style={{ paddingBottom: 34 }}  >
          <ClayLayout.Col size={4} align={'center'} className='title'>
            <Heading level={1} weight="semi-bold" marginBottom={0}   >
              Hi John,
            </Heading>
            <Heading level={3} weight="semi-bold" marginBottom={0}   >
              What do you want to do?
            </Heading>
          </ClayLayout.Col></ClayLayout.Row>
        <ClayLayout.Row justify="center" className="custom-gap">
          <ClayLayout.Col size={4}  >
            <ClayCard className='c-mr-10' style={{ width: 400, borderRadius: 20, }}>
              <ClayCard.Body>
                <ClayCard.Description displayType="title" style={{ paddingBottom: 34 }}>
                  <div className='steps' >STEP 1</div>
                  <img src={CourseSearchIcon} />
                  <Heading level={3} weight="semi-bold">
                    Course Research
                  </Heading>
                </ClayCard.Description>
                <ClayCard.Description truncate={false} displayType="text">
                  <ul class="timeline">
                    <li class="timeline-item">
                      <div class="panel ">
                        <div class="timeline-increment" >
                          <span class="timeline-icon" style={{ background: '#FFE6E2', border: '1px solid #FFE6E2' }}></span>
                        </div>
                        <Text size={14}>Learn about courses recommended as per your scholastic level, on &nbsp;
                          <ClayLink aria-label="Study Plan" href="#">
                            {'Study Plan'}
                          </ClayLink>
                        </Text>
                      </div>
                    </li>
                    <li class="timeline-item">
                      <div class="panel ">
                        <div class="timeline-increment" >
                          <span class="timeline-icon" style={{ background: '#FFE6E2', border: '1px solid #FFE6E2' }}></span>
                        </div>
                        <Text size={14}><ClayLink aria-label="Explore Courses" href="#">
                          {'Explore Courses'}
                        </ClayLink> available to you
                        </Text>
                      </div>
                    </li>

                    <li class="timeline-item">
                      <div class="panel ">
                        <div class="timeline-increment" >
                          <span class="timeline-icon" style={{ background: '#FFE6E2', border: '1px solid #FFE6E2' }}></span>
                        </div>
                        <Text size={14}>Learn about course details, students' feedbacks, available sections, and more!
                        </Text>
                      </div>
                    </li>
                    <li class="timeline-item">
                      <div class="panel ">
                        <div class="timeline-increment" >
                          <span class="timeline-icon" style={{ background: '#FFE6E2', border: '1px solid #FFE6E2' }}></span>
                        </div>
                        <Text size={14}>Plan a course schedule on the <ClayLink aria-label="Wishlist" href="#">
                          {'Wishlist'}
                        </ClayLink>
                        </Text>
                      </div>
                    </li>
                  </ul>
                </ClayCard.Description>
                <ClayButton displayType="primary" style={{ margin: 'auto', display: 'block' }} >
                  {"Take me to Course Research "}    <span className="inline-item inline-item-after">
                    <img src={ArrowRight} />
                  </span>
                </ClayButton>
              </ClayCard.Body>
            </ClayCard>

          </ClayLayout.Col>
          <ClayLayout.Col size={4}  >
            <ClayCard style={{ width: 400, borderRadius: 20, }}>
              <ClayCard.Body>
                <ClayCard.Description displayType="title" style={{ paddingBottom: 34 }}>
                  <div className='steps' >STEP 2</div>     <img src={CourseRegIcon} />
                  <Heading level={3} weight="semi-bold"  >
                    Course Registration
                  </Heading>
                </ClayCard.Description>
                <ClayCard.Description truncate={false} displayType="text">
                  <ul class="timeline">
                    <li class="timeline-item">
                      <div class="panel ">
                        <div class="timeline-increment" >
                          <span class="timeline-icon" style={{ background: '#FFE6E2', border: '1px solid #FFE6E2' }}></span>
                        </div>
                        <Text size={14}>Rank your Preferences added from the Wishlist when the Registration Event opens
                        </Text>
                      </div>
                    </li>
                    <li class="timeline-item">
                      <div class="panel ">
                        <div class="timeline-increment" >
                          <span class="timeline-icon" style={{ background: '#FFE6E2', border: '1px solid #FFE6E2' }}></span>
                        </div>
                        <Text size={14}>Import Courses from the Wishlist as Preferences on Registration
                        </Text>
                      </div>
                    </li>  <li class="timeline-item">
                      <div class="panel ">
                        <div class="timeline-increment" >
                          <span class="timeline-icon" style={{ background: '#FFE6E2', border: '1px solid #FFE6E2' }}></span>
                        </div>
                        <Text size={14}> Submit your Preferences for Registration to enroll
                        </Text>
                      </div>
                    </li>
                    <li class="timeline-item">
                      <div class="panel ">
                        <div class="timeline-increment" >
                          <span class="timeline-icon" style={{ background: '#FFE6E2', border: '1px solid #FFE6E2' }}></span>
                        </div>
                        <Text size={14}>Request Switching from Enrolled Courses after courses are allocated
                        </Text>
                      </div>
                    </li>
                  </ul>
                </ClayCard.Description>
                <ClayButton displayType="primary" style={{ margin: 'auto', display: 'block' }} >
                  {"Take me to Course Registration "}    <span className="inline-item inline-item-after">
                    <img src={ArrowRight} />
                  </span>
                </ClayButton>
              </ClayCard.Body>
            </ClayCard>
          </ClayLayout.Col>
        </ClayLayout.Row> <ClayLayout.Row justify="center" style={{ paddingBottom: 34 }}  >
          <ClayLayout.Col size={12} align={'center'} className='title'>
            <div class="steps_alert" style={{
              background: '#FFE6E2', display: 'flex',
              width: 886,
              padding: ' 8px 20px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 12,
              margin: 'auto',
              color: ' #8C1515',
              fontWeight: 600,
            }}>
              <Heading level={5} weight="semi-bold" marginBottom={0} style={{ marginBottom: 0 }} >
                Step 1 + Step 2 = Successful Submission for Registration!
              </Heading></div>
          </ClayLayout.Col></ClayLayout.Row>
      </ClayLayout.ContainerFluid>
  </div> 
    </>
  );
};

export default OverallJourney;