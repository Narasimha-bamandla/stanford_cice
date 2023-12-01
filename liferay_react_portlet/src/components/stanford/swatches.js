import React from 'react';  
const Swatches = () => {
  const swatchData = [
    { id: 1, colorswatch: 'colorclass1' },
    { id: 2, colorswatch: 'colorclass2' },
    { id: 3, colorswatch: 'colorclass3' },
    { id: 4, colorswatch: 'colorclass4' },
    { id: 5, colorswatch: 'colorclass' },
  ];

  return (
    <div className="swatches">
      {swatchData.map(({ id, colorswatch }) => (
        <div key={id} className={`colorswatch ${colorswatch}`}>
          <div className="color"></div>
          {colorswatch}
        </div>
      ))}
    </div>
  );
};

export default Swatches;
 