import React from 'react';  
import ClaySlider from '@clayui/slider';

const Slider = () => { 

  return (
    <div style={{display:'flex', flexWrap:'wrap', gap:50,padding:50, width:'100%' }}> 
        <ClaySlider defaultValue={10} id="slider" className='sdtd-slider' />
    </div>
  );
};

export default Slider;
 