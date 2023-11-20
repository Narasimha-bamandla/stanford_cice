import React from 'react';
import { Text, Heading } from '@clayui/core';
import ClayButton from '@clayui/button';
import ClayLayout from '@clayui/layout';

import { ClayTooltipProvider } from '@clayui/tooltip'; 
export default class extends React.Component {
  render() {
    return (
      <>
        <div className='Visualizer'>
          <ClayLayout.ContainerFluid  >
            <ClayLayout.Row justify="center" style={{ padding:16,   }}  >
              <ClayLayout.Col size={12} align={'center'}  >
                <Text size={4} className weight="semi-bold"    >
                  VISUALIZER
                </Text> 
              </ClayLayout.Col></ClayLayout.Row>
            <ClayLayout.Row  style={{borderTop: '1px solid #D5D5D4', paddingTop:20,   }}  >
              <ClayLayout.Col size={12} align={'left'}   > 
                <Heading level={5} weight="semi-bold" marginBottom={0}   >
                  Winter
                  <Text size={4} className weight="normal" marginLeft={5}   >
                    &nbsp; 2022-23 <img src={'/o/stanford-clce-theme/images/icons/angle_down_icon.svg'} />
                  </Text>
                </Heading> 
              </ClayLayout.Col></ClayLayout.Row>     <ClayLayout.Row   style={ {paddingTop:5,    }}   >
              <ClayLayout.Col size={12} align={'left'}   >
                <div className='weeks'    >
                  <ClayButton className='active'> Week 1</ClayButton>
                  <ClayButton> Week 2</ClayButton>
                  <ClayButton> Week 3</ClayButton>
                  <ClayButton> Week 4</ClayButton>
                  <ClayButton> Week 5</ClayButton>
                  <ClayButton> Week 6</ClayButton>
                  <ClayButton> Week 7</ClayButton>
                  <ClayButton> Week 8</ClayButton>
                  <ClayButton> Week 9</ClayButton>
                  <ClayButton> Week 10</ClayButton>
                  <ClayButton> Week 11</ClayButton>
                  <ClayButton> Week 12</ClayButton>
                </div>
              </ClayLayout.Col></ClayLayout.Row>
            <ClayLayout.Row className="custom-gap">
              <ClayLayout.Col size={12} style={{ paddingTop: 15 }}  >
                <div className='viz_cal'>
                  <table className='cal'>
                    <tr>
                      <td> </td>
                      <td>Mon</td>
                      <td>Tue</td>
                      <td>Wed</td>
                      <td>Thu</td>
                      <td>Fri</td>
                    </tr>
                    <tr>
                      <td>8 AM </td>
                      <td>
                        <ClayTooltipProvider>
                          <ClayButton data-tooltip-align="top" title="Tooltip Content">
                            <div className='event CoreArea10'>OIT 276.01 <img src={'/o/stanford-clce-theme/images/icons/fav_icon.svg'} />
                            </div>
                          </ClayButton>
                        </ClayTooltipProvider>
                      </td>
                      <td> <ClayTooltipProvider>
                        <ClayButton data-tooltip-align="top" title="Tooltip Content">
                          <div className='event CoreArea2'>MGTECON 349.02 <img src={'/o/stanford-clce-theme/images/icons/fav_icon.svg'} />
                          </div>
                        </ClayButton>
                      </ClayTooltipProvider> </td>
                      <td><ClayTooltipProvider>
                        <ClayButton data-tooltip-align="top" title="Tooltip Content">
                          <div className='event CoreArea3'>OB 211.06  <img src={'/o/stanford-clce-theme/images/icons/fav_icon.svg'} />
                          </div>
                        </ClayButton>
                      </ClayTooltipProvider> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>9 AM </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>10 AM </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>11 AM </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>12 PM </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>1 PM </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>2 PM </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>  <tr>
                      <td>3 PM </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>  <tr>
                      <td>4 PM </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>  <tr>
                      <td>5 PM </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>  <tr>
                      <td>6 PM </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>  <tr>
                      <td>7 PM </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>  <tr>
                      <td>8 PM </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                  </table> 
                </div>
              </ClayLayout.Col>
            </ClayLayout.Row>
            <ClayLayout.Row    >
              <ClayLayout.Col size={6} align={'left'}   >
                <div className='Legends col' >  <div className='Enrolled LegendIcons'><img src={'/o/stanford-clce-theme/images/icons/check_circle_icon.svg'} /></div>
                <span className='fs-11 ' > 
                    Current Enrollments </span> </div>
              </ClayLayout.Col>
              <ClayLayout.Col size={6} align={'left'}   > 
               <div className='Legends col'><div className='Conflict LegendIcons'><img src={'/o/stanford-clce-theme/images/icons/alert_triangle_white_icon.svg'} /></div>
              <span className='fs-11 ' > 
              Timing-Conflicts  </span>    </div>
              </ClayLayout.Col></ClayLayout.Row>
            <ClayLayout.Row    >
              <ClayLayout.Col size={12} align={'left'} paddingBottom={16}    >
              <div className='fs-12 fw-sb' >
                  Planned Courses will turn red if their date & timings overlap with a currently enrolled course. You cannot submit these planned courses until you drop from the conflicting current enrollment.
                 </div>
              </ClayLayout.Col></ClayLayout.Row>
            <ClayLayout.Row  paddingBottom={16}   >
              <ClayLayout.Col size={12} align={'left'}   >
                <div className='Legends  '>
                  <img src={'/o/stanford-clce-theme/images/icons/alert_triangle_red_icon.svg'} />
                  <span className="Conflict box" > 
                  <span className='fs-12 fw-sb'     >
                  ACCT 212
                  </span>   </span>
                  <span className='fs-12 fw-sb'     >
                    has a timing conflict with
                  </span>
                  <span className="Enrolled box" >  
                      <span className='fs-12 fw-sb'     >
                      HRMGT 212
                  </span> 
                  </span> </div>
              </ClayLayout.Col></ClayLayout.Row>
            <ClayLayout.Row    >
              <ClayLayout.Col size={12} align={'left'} >  
                <a href='#' className='fs-12 fw-sb' >  
                  See more sections for OB 206
                </a> 
              </ClayLayout.Col></ClayLayout.Row>
          </ClayLayout.ContainerFluid></div> 

      </>
    );
  }

};
