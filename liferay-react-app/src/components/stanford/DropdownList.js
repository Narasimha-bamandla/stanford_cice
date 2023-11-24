import React, {useState} from 'react';
import {ClayCheckbox} from '@clayui/form';
import DropDown from '@clayui/drop-down';
import AngleDown from "../../assets/images/icons/angle_down_icon.svg";
import {ClayRadio, ClayRadioGroup} from '@clayui/form';
import ExternalLinkIcon from "../../assets/images/icons/outside_link_icon.svg";
import ClayButton, { ClayButtonWithIcon } from '@clayui/button';
function MultiSelectCheckboxList({ items }) {
  // Initialize state to keep track of the checked checkbox indices
  const [checkedItems, setCheckedItems] = useState([]);

  // Handle checkbox change
  const handleCheckboxChange = (index) => {
    setCheckedItems((prevCheckedItems) => {
      if (prevCheckedItems.includes(index)) {
        // If already checked, remove from the array
        return prevCheckedItems.filter((item) => item !== index);
      } else {
        // If not checked, add to the array
        return [...prevCheckedItems, index];
      }
    });
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="custom-checkbox">
          <ClayCheckbox
            className='sm'
            aria-label={item.name}
            checked={checkedItems.includes(index)}
            onChange={() => handleCheckboxChange(index)}
            label={item.name}
          />
          {checkedItems.includes(index) && (
            <div className="custom-check-icon">
               <svg
  xmlns="http://www.w3.org/2000/svg"
  width={16}
  height={11}
  viewBox="0 0 16 11"
  fill="none"
>
  <path
    d="M14.6668 1L5.50016 10.1667L1.3335 6"
    stroke="currentColor"
    strokeWidth="1.66667"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
 
function RadioList({ items }) {
  // Initialize state to keep track of the selected radio index
  const [selectedItem, setSelectedItem] = useState(null);

  // Handle radio button change
  const handleRadioChange = (index) => {
    setSelectedItem(index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="custom-radio">
          <ClayRadio
            className='sm'
            aria-label={item.name}
            checked={index === selectedItem}
            onChange={() => handleRadioChange(index)}
            label={item.name}
          />
          {index === selectedItem && (
            <div className="custom-check-icon">
              <svg
  xmlns="http://www.w3.org/2000/svg"
  width={16}
  height={11}
  viewBox="0 0 16 11"
  fill="none"
>
  <path
    d="M14.6668 1L5.50016 10.1667L1.3335 6"
    stroke="currentColor"
    strokeWidth="1.66667"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

            </div>
          )}
        </div>
      ))}
    </div>
  );
}
function SelectList({ items }) {
  // Initialize state to keep track of the selected radio index
  const [selectedItem, setSelectedItem] = useState(null);

  // Handle radio button change
  const handleRadioChange = (index) => {
    setSelectedItem(index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="custom-radio">
          <ClayRadio
            className='sm'
            aria-label={item.name}
            checked={index === selectedItem}
            onChange={() => handleRadioChange(index)}
            label={item.name}
          /> 
        </div>
      ))}
    </div>
  );
}
function MenuList({ items }) {
  // Initialize state to keep track of the selected radio index
  const [selectedItem, setSelectedItem] = useState(null);

  // Handle radio button change
  const handleRadioChange = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className='Menulinks'>
      {items.map((item, index) => (
        <div key={index} className="menu-link">
           <a href='#'> <svg
  width={13}
  height={14}
  viewBox="0 0 13 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.5 7.66667V11.6667C10.5 12.0203 10.3595 12.3594 10.1095 12.6095C9.85943 12.8595 9.52029 13 9.16667 13H1.83333C1.47971 13 1.14057 12.8595 0.890524 12.6095C0.640476 12.3594 0.5 12.0203 0.5 11.6667V4.33333C0.5 3.97971 0.640476 3.64057 0.890524 3.39052C1.14057 3.14048 1.47971 3 1.83333 3H5.83333"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M8.5 1H12.5V5"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M5.16797 8.33333L12.5013 1"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
 {item.name}</a>
        </div>
      ))}
    </div>
  );
}

function CheckboxList({ items }) {
  // Initialize state to keep track of checked state for each item
  const [checkedItems, setCheckedItems] = useState(() =>
    items.reduce((acc, item, index) => {
      acc[index] = false; // Initially, no checkboxes are checked
      return acc;
    }, {})
  );

  // Handle checkbox change for a specific item
  const handleCheckboxChange = (index) => {
    setCheckedItems((prevCheckedItems) => {
      const newCheckedItems = { ...prevCheckedItems };
      newCheckedItems[index] = !newCheckedItems[index]; // Toggle the checked state
      return newCheckedItems;
    });
  };

  return (
    <div>
      {items.map((item, index) => (
        <ClayCheckbox
          key={index}
          className='sm'
          aria-label={item.name}
          checked={checkedItems[index]}
          onChange={() => handleCheckboxChange(index)}
          label={item.name}
        />
      ))}
    </div>
  );
}

const DropdownList = () => {
  const links = [
    {
      id: 1,
      name: " Overall Journey"
    },
    {
      id: 2,
      name: "GSB Course Research"
    },
    {
      id: 3,
      name: "GSB Registration" 
       }, 
  ];
  const selectItems = [
    {
      id: 1,
      name: " All"
    },
    {
      id: 2,
      name: "Core"
    },
    {
      id: 3,
      name: "Electives" 
       }, 
  ];
  const items = [
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
  const [value, setValue] = useState(true);
  const [dropdownList, setDropdownList] = useState(0);
  const handleDropdownList = () => {
    setDropdownList((prevVal) => (prevVal === 0 ? 1 : 0));
  };
  const [dropdownList2, setDropdownList2] = useState(0);
  const handleDropdownList2 = () => {
    setDropdownList2((prevVal) => (prevVal === 0 ? 1 : 0));
  };
  const [dropdownList3, setDropdownList3] = useState(0);
  const handleDropdownList3 = () => {
    setDropdownList3((prevVal) => (prevVal === 0 ? 1 : 0));
  };
  const [dropdownList4, setDropdownList4] = useState(0);
  const handleDropdownList4 = () => {
    setDropdownList4((prevVal) => (prevVal === 0 ? 1 : 0));
  };
  const [dropdownList5, setDropdownList5] = useState(0);
  const handleDropdownList5 = () => {
    setDropdownList5((prevVal) => (prevVal === 0 ? 1 : 0));
  };
  return (
    <div style={{display:'flex',  flexWrap:'wrap', justifyContent:'center', gap:20}}> 
   <div className="DropdownList  dropdown  dropdown-btn">
  <button
    className={dropdownList ? 'dropdown-toggle btn active' : 'dropdown-toggle btn'}
    type="button"
    aria-controls="checklist-dropdown-menu"
    aria-expanded="false"
    aria-haspopup="true"
    active={dropdownList} modern onClick={handleDropdownList} 
  >
   <div className='iconlabel'><svg
  xmlns="http://www.w3.org/2000/svg"
  width={16}
  height={16}
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    d="M4.8001 4.82064C4.8001 6.49205 6.23583 7.85222 8.0001 7.85222C9.76436 7.85222 11.2001 6.49205 11.2001 4.82064C11.2001 3.14923 9.76436 1.78906 8.0001 1.78906C6.23583 1.78906 4.8001 3.14923 4.8001 4.82064ZM13.689 14.5891H14.4001V13.9154C14.4001 11.3156 12.1665 9.19959 9.42232 9.19959H6.57788C3.83299 9.19959 1.6001 11.3156 1.6001 13.9154V14.5891H13.689Z"
    fill="currentColor"
  />
</svg> Instructor</div> {" "}
    <svg
    className='arrow'
  width={16}
  height={16}
  viewBox="0 0 16 16"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3.19995 6.40039L7.99995 11.2004L12.8 6.40039"
    stroke="#2E2D29"
    strokeWidth="1.5"
    strokeLinecap="square"
    strokeLinejoin="bevel"
  />
</svg>

  </button>
  {dropdownList ? <>
  <div id="checklist-dropdown-menu" className="dropdown-menu show" role="presentation">
  <CheckboxList items={items} /> 
  </div></> : ''}
</div>
<div className="DropdownList checkmark dropdown  dropdown-btn">
  <button
    className={dropdownList2 ? 'dropdown-toggle btn active' : 'dropdown-toggle btn'}
    type="button"
    aria-controls="singleselectlist-dropdown-menu"
    aria-expanded="false"
    aria-haspopup="true"
    active={dropdownList2} modern onClick={handleDropdownList2} 
  >
    Sort by{" "}
    <svg
    className='arrow'
  width={16}
  height={16}
  viewBox="0 0 16 16"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3.19995 6.40039L7.99995 11.2004L12.8 6.40039"
    stroke="#2E2D29"
    strokeWidth="1.5"
    strokeLinecap="square"
    strokeLinejoin="bevel"
  />
</svg>

  </button>
  {dropdownList2 ? <>
  <div id="singleselectlist-dropdown-menu" className="dropdown-menu show" role="presentation">  
    <RadioList items={items} />
  </div></> : ''}
</div>
<div className="DropdownList checkmark dropdown  dropdown-btn">
  <button
    className={dropdownList3 ? 'dropdown-toggle btn active' : 'dropdown-toggle btn'}
    type="button"
    aria-controls="multiselectlist-dropdown-menu"
    aria-expanded="false"
    aria-haspopup="true"
    active={dropdownList3} modern onClick={handleDropdownList3} 
  >
    Select team member{" "}
    <svg
    className='arrow'
  width={16}
  height={16}
  viewBox="0 0 16 16"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3.19995 6.40039L7.99995 11.2004L12.8 6.40039"
    stroke="#2E2D29"
    strokeWidth="1.5"
    strokeLinecap="square"
    strokeLinejoin="bevel"
  />
</svg>

  </button>
  {dropdownList3 ? <>
  <div id="multiselectlist-dropdown-menu" className="dropdown-menu show" role="presentation">  
    <MultiSelectCheckboxList items={items} />
  </div></> : ''}
</div>
<div className="DropdownList NavDropdownMenu  dropdown  dropdown-btn">
  <button
    className={dropdownList4 ? 'dropdown-toggle btn active' : 'dropdown-toggle btn'}
    type="button"
    aria-controls="menulist-dropdown-menu"
    aria-expanded="false"
    aria-haspopup="true"
    active={dropdownList4} modern onClick={handleDropdownList4} 
  >
    John Doe{" "}
    <svg
    className='arrow'
  width={16}
  height={16}
  viewBox="0 0 16 16"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3.19995 6.40039L7.99995 11.2004L12.8 6.40039"
    stroke="#2E2D29"
    strokeWidth="1.5"
    strokeLinecap="square"
    strokeLinejoin="bevel"
  />
</svg>

  </button>
  {dropdownList4 ? <>
  <div id="menulist-dropdown-menu" className="dropdown-menu show" role="presentation">  
    <MenuList items={links} />
  </div></> : ''}
</div>
<div className="DropdownList SelectList  dropdown  dropdown-btn">
  <button
    className={dropdownList5 ? 'dropdown-toggle btn active' : 'dropdown-toggle btn'}
    type="button"
    aria-controls="selectlist-dropdown-menu"
    aria-expanded="false"
    aria-haspopup="true"
    active={dropdownList5} modern onClick={handleDropdownList5} 
  >
    All{" "}
    <svg
    className='arrow'
  width={16}
  height={16}
  viewBox="0 0 16 16"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3.19995 6.40039L7.99995 11.2004L12.8 6.40039"
    stroke="#2E2D29"
    strokeWidth="1.5"
    strokeLinecap="square"
    strokeLinejoin="bevel"
  />
</svg>

  </button>
  {dropdownList5 ? <>
  <div id="selectlist-dropdown-menu" className="dropdown-menu show" role="presentation">  
    <SelectList items={selectItems} />
  </div></> : ''}
</div>
      </div>
  );
};

export default DropdownList;