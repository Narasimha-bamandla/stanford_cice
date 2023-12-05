import React, { useState } from 'react';
import { Heading } from '@clayui/core';
import ClayButton from '@clayui/button';
import DropDown from '@clayui/drop-down'; 
import ClayLayout from '@clayui/layout';
import NoteFillIcon from "../../assets/images/icons/note_fill_icon.svg";

const InfoBanner = () => {
  const [showAdvFiltersPopup, setShowAdvFiltersPopup] = useState(0);
  const handleShowAdvFiltersPopup = () => {
    setShowAdvFiltersPopup((prevToggle) => (prevToggle === 0 ? 1 : 0));
  };
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
    <div className='info-banner'>
      <ClayLayout.ContainerFluid  >
        <ClayLayout.Row>
          <ClayLayout.Col size={12} > 
          <div className='info-banner-area' >
            <ol className="breadcrumb">
              <li className="active breadcrumb-item">
                <span className="breadcrumb-text-truncate" title="Active">Course Research</span>
              </li>
            </ol>
            <Heading level={3} weight="semi-bold"     >
              FINANCE 321 <div className="tag sm"><strong>RECOMMENDED</strong>   </div>
            </Heading>
            <div className='title-frame'>
            <Heading level={2} weight="semi-bold"     >
              Investment Management and Entrepreneurial Finance
            </Heading>
            <ClayButton modern className='ghost-btn ' displayType={null} size='sm'>
              <span className="inline-item inline-item-before">
               <img src={NoteFillIcon} />   
              </span> {"My Notes"} 
            </ClayButton>
            </div>
            <div className='basicinfo'>
              <span className='info'>   <strong>Course Area:</strong> Finance </span><span className='vline'></span>
              <span className='info'>  <strong>Type:</strong>Core (Base)</span><span className='vline'></span>
              <span className='info'>  <strong>Quarter:</strong>Autumn, Winter</span><span className='vline'></span>
              <span className='info'>  <strong>Instructors:</strong> B Jacobs, J Hurley</span><span className='vline'></span>
              <span className='info'>  <strong>Certificates:</strong>CSI</span>
            </div>

          </div>   </ClayLayout.Col></ClayLayout.Row>

      </ClayLayout.ContainerFluid>
    </div>
  )
}


export default InfoBanner;