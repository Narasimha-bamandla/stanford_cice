import React from 'react';   
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const RCSlider = () => {
  // State to manage the range values
  const [rangeValues, setRangeValues] = useState([1, 10 ]);

  // Handler function to update the range values
  const handleRangeChange = (values) => {
    setRangeValues(values);
  };

  return (
    <div>
      {/* rc-slider component for the double range */}
      <Slider
        range
        min={0}
        max={100}
        step={10}
        defaultValue={rangeValues}
        onChange={handleRangeChange}
        className='sdtd-rcslider'
      />
    <ClayForm.Group className='inputs-grp' >  
                  <ClayInput
                  id="unitsstart"
                  placeholder="1 Unit"
                  type="text"
                  value={rangeValues[0]}
                  className='sdtd-input fullwidth'
                />
                  <ClayInput
                    id="unitsend"
                    placeholder="2 Units"
                    type="text"
                    value={rangeValues[1]}
                    className='sdtd-input fullwidth'
                  />  </ClayForm.Group>
 
    </div>
  );
};

export default RCSlider;
 