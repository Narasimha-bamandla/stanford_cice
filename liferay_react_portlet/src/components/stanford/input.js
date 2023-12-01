import React from 'react';  
import ClayForm, {ClayInput} from '@clayui/form'; 

const Input = () => { 

  return (
    <div style={{display:'flex', flexWrap:'wrap', gap:50,padding:50 }}>
     <ClayForm.Group  style={{width:120}}> 
      <ClayInput  
        id="units"
        placeholder="2 Units"
        type="text" className='sdtd-input'
      /> 
    </ClayForm.Group>
       <ClayForm.Group  style={{width:220}}> 
       <ClayInput  
      id="units"
      placeholder="2 Units"
      type="text" className='sdtd-input'
      disabled
    />
    </ClayForm.Group>
    </div>
  );
};

export default Input;
 