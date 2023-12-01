import React, {useState} from 'react';
import {ClayCheckbox} from '@clayui/form';


const Checkboxes = () => {
  const [value, setValue] = useState(true);
  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', gap:20}}> 
     <ClayCheckbox className='lg' checked={value} onChange={() => setValue(val => !val)} />
     <ClayCheckbox className='lg' checked={value} onChange={() => setValue(val => !val)} disabled />
      <ClayCheckbox className='sm' checked={value} onChange={() => setValue(val => !val)} />
      <ClayCheckbox className='sm' checked={value} onChange={() => setValue(val => !val)} disabled />
      <ClayCheckbox
      className='sm'
      aria-label="Remember me"
      checked={value}
      onChange={() => setValue(val => !val)}
      label="Remember me"
    />
        <ClayCheckbox
      className='sm'
      aria-label="Remember me"
      checked={value}
      onChange={() => setValue(val => !val)}
      label="Remember me" 
      disabled
    />
        <ClayCheckbox
      className='lg'
      aria-label="Remember me"
      checked={value}
      onChange={() => setValue(val => !val)}
      label="Remember me"
    />
        <ClayCheckbox
      className='lg'
      aria-label="Remember me"
      checked={value}
      onChange={() => setValue(val => !val)}
      label="Remember me" 
      disabled
    />
      </div>
  );
};

export default Checkboxes;
