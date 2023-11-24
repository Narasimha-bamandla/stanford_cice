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
const Header = () => {
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
      <div id='header' className='header-section' >
        <ClayLayout.ContainerFluid  >
          <ClayLayout.Row justify="center"     >
            <ClayLayout.Col size={4} align={'left'} >
              <img src={StanfordLogo} />
            </ClayLayout.Col>
            <ClayLayout.Col size={8} align={'right'} >
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <ClayButton className='howto-btn' > <img src={InfoIcon} /> How To </ClayButton>
                <DropDown className='profile-btn' trigger={<ClayButton displayType={null}>John Doe
                  <img src={AngleDown} /></ClayButton>}>
                  <DropDown.ItemList items={items}>

                    {item => (
                      <DropDown.Item
                        key={item.name}
                        onClick={() => {
                          // logic stuff...
                        }}
                      >
                        <img src={ExternalLinkIcon} />    {item.name}
                      </DropDown.Item>
                    )}
                  </DropDown.ItemList>
                </DropDown></div>
            </ClayLayout.Col>
          </ClayLayout.Row> </ClayLayout.ContainerFluid></div>
   
    </>
  );
};

export default Header;