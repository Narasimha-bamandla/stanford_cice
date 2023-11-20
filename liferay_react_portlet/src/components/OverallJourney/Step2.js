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
  <ClayCard style={{ width: 400, borderRadius: 20, }}>
                <ClayCard.Body>
                  <ClayCard.Description displayType="title" style={{ paddingBottom: 34 }}>
                    <div className='steps'>STEP 2</div>     <img src="/o/stanford-clce-theme/images/icons/course_reg_icon.svg" />   <Heading level={3} weight="semi-bold"  >
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
                          <Text size={14}>Request Switching from Enrolled Courses after courses are allocated</Text>
                        </div>
                      </li>
                    </ul>
                  </ClayCard.Description>
                  <ClayButton displayType="primary" style={{ margin: 'auto', display: 'block' }} >
                    {"Take me to Course Registration "}    <span className="inline-item inline-item-after">
                      <img src="/o/stanford-clce-theme/images/icons/arrow_right_icon.svg" />
                    </span>
                  </ClayButton>
                </ClayCard.Body>
              </ClayCard>
              </>
  )
}
}
 