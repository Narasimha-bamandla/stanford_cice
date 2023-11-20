import React from 'react';
import ReactDOM from 'react-dom';
import ClayCard from '@clayui/card';
import { Text, Heading } from '@clayui/core';
import ClayLink from '@clayui/link';
import ClayButton from '@clayui/button';
import ClayLayout from '@clayui/layout';
import DropDown from '@clayui/drop-down';

export default class extends React.Component {
  render(){
  return (
    <> 
  <ClayCard className='c-mr-10' style={{ width: 400, borderRadius: 20, }}>
                <ClayCard.Body>
                  <ClayCard.Description displayType="title" style={{ paddingBottom: 34 }}>
                    <div className='steps'>STEP 1</div>      
                    <img src="/o/stanford-clce-theme/images/icons/course_search_icon.svg" />
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
                      <img src="/o/stanford-clce-theme/images/icons/arrow_right_icon.svg" />
                    </span>
                  </ClayButton>
                </ClayCard.Body>
              </ClayCard>
              </>
  )
}
}
 