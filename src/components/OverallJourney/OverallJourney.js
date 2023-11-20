import React from 'react'; 
import {   Heading } from '@clayui/core'; 
import ClayLayout from '@clayui/layout'; 
import Step1 from './Step1';
import Step2 from './Step2';
import Header from '../Header/Header';



export default class extends React.Component {
  render() {
   
    return (
      <> 
        <div className='OverallJourney'>
          <ClayLayout.ContainerFluid view>
            <ClayLayout.Row justify="center" style={{ paddingBottom: 34 }}  >
              <ClayLayout.Col size={12} align={'center'} className='title'>
                <Heading level={1} weight="semi-bold" marginBottom={0}   >
                  Hi John,
                </Heading>
                <Heading level={3} weight="semi-bold" marginBottom={0}   >
                  What do you want to do?
                </Heading>
              </ClayLayout.Col></ClayLayout.Row>
            <ClayLayout.Row justify="center" className="custom-gap">
              <ClayLayout.Col size={4}  >
                <Step1 />
              </ClayLayout.Col>
              <ClayLayout.Col size={4}  >
                <Step2 />
              </ClayLayout.Col>
            </ClayLayout.Row>
            <ClayLayout.Row justify="center" style={{ paddingBottom: 34 }}  >
              <ClayLayout.Col size={12} align={'center'} className='title'>
                <div class="steps_alert">
                  <Heading level={4} weight="semi-bold"  >
                    Step 1 + Step 2 = Successful Submission for Registration!
                  </Heading></div>
              </ClayLayout.Col></ClayLayout.Row>
          </ClayLayout.ContainerFluid>
        </div>
      </>
    );
  }
}