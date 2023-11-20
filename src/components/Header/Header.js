import React from 'react';
import ReactDOM from 'react-dom';
import ClayCard from '@clayui/card';
import { Text, Heading } from '@clayui/core';
import ClayLink from '@clayui/link';
import ClayButton from '@clayui/button';
import ClayLayout from '@clayui/layout';
import DropDown from '@clayui/drop-down'; 

 
 
export default class extends React.Component { 
  render() { 
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
        <div className='header-section'  >
          <ClayLayout.ContainerFluid  >
            <ClayLayout.Row justify="center"     >
              <ClayLayout.Col size={4} align={'left'} >
                <img src={"/o/stanford-clce-theme/images/stanford_logo.png"} />
              </ClayLayout.Col>
              <ClayLayout.Col size={8} align={'right'} >
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <ClayButton className='howto-btn'> <img src={"/o/stanford-clce-theme/images/icons/info_icon.svg"} /> How To </ClayButton>
                  <DropDown className='profile-btn' trigger={<ClayButton displayType={null}>John Doe 
                   <img src={"/o/stanford-clce-theme/images/icons/angle_down_icon.svg"} />
                   </ClayButton>}>
                    <DropDown.ItemList items={items}>

                      {item => (
                        <DropDown.Item
                          key={item.name}
                          onClick={() => {
                            // logic stuff...
                          }}  
                        > <img src={"/o/stanford-clce-theme/images/icons/outside_link_icon.svg"}  />     {item.name}
                        </DropDown.Item>
                      )}
                    </DropDown.ItemList>
                  </DropDown></div>
              </ClayLayout.Col>
            </ClayLayout.Row> </ClayLayout.ContainerFluid></div> 
      </>
    );
  }
}