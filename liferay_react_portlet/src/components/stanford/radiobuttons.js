import React, {useState} from 'react';
import {ClayRadio, ClayRadioGroup} from '@clayui/form';


const Radiobuttons = () => { 
  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', gap:20}}> 
     	<ClayRadioGroup 
			defaultValue="one"
			inline
		>
			<ClayRadio label="Remember me" value="one" className='sm' />
			<ClayRadio label="Remember me" value="two" className='lg' />
			<ClayRadio label="Remember me" value="three" className='sm' disabled />
      <ClayRadio label="Remember me" value="three" className='lg' disabled />
		</ClayRadioGroup>
    
      </div>
  );
};

export default Radiobuttons;
