import React, {useState} from 'react';
import { Heading } from '@clayui/core';
import ClayButton from '@clayui/button';
import DropDown from '@clayui/drop-down';
import AngleDown from "../../assets/images/icons/angle_down_icon.svg";
import FilterIcon from "../../assets/images/icons/filter_icon.svg";
import UserIcon from "../../assets/images/icons/user_icon.svg"; 
import ClayLayout from '@clayui/layout'; 
import AdvancedFilters from './AdvancedFilters';
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
    <div className='info-banner'>     <ClayLayout.ContainerFluid  >
          <ClayLayout.Row>
            <ClayLayout.Col size={12} > <div className='info-banner-area' > 
      
        <ol class="breadcrumb">
          <li class="active breadcrumb-item">
            <span class="breadcrumb-text-truncate" title="Active">Course Research</span>
          </li>
        </ol>

        <Heading level={2} weight="semi-bold"     >
          Hi John, You are viewing courses for MBA1
        </Heading>
        <div className='unitinfo'>
          <strong> Total Planned Units: 24 </strong>
          <span> Winter: 14 units</span>
          <span> Spring: 10 units</span>
          <strong> Current Core Units:  9</strong>
          <strong> Current Distribution Units: 15</strong>
          <strong> (Minimum Requirement: 15 Units)</strong>
        </div>
        <div className='filters'>
          <div className='left_col'>  
           <DropDown trigger={<ClayButton size='sm' displayType={null}> <span className="inline-item inline-item-before">
                <img src={UserIcon} />
              </span> Instructor <span className="inline-item inline-item-after">
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
            <ClayButton  onClick={handleShowAdvFiltersPopup} className='filter-btn' displayType="secondary" size='sm'>
              {"Advanced Filters"}   <span className="inline-item inline-item-after">
                <img src={FilterIcon} />
              </span>
            </ClayButton>     </div>
          <div className='right_col'>
            <DropDown trigger={<ClayButton size='sm' displayType={null}>Sort by <span className="inline-item inline-item-after">
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
            </DropDown>   </div>
        </div> </div>   </ClayLayout.Col></ClayLayout.Row>
        {showAdvFiltersPopup ? <AdvancedFilters /> : ''}
        </ClayLayout.ContainerFluid>
        </div>
  )
}
 

export default InfoBanner;