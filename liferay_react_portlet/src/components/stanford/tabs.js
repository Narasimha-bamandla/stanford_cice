import React from 'react';


const Tabs = () => {
  const items = [
    { id: 1, text: "Core & Distribution (Winter & Spring)", active: true },
    { id: 2, text: "Electives", active: false }, 
    // ... more items
  ];

  const items2 = [
    { id: 1, text: "Winter Courses", active: true },
    { id: 2, text: "Spring Courses", active: false }, 
    // ... more items
  ];
  return (
  <>
    <ul class="sdfd-tabs fill-tabs nav nav-tabs" role="tablist">
      {items.map((item, index) => (
        <li class="nav-item" key={index}>
            <button className={item.active ? 'nav-link active' : 'nav-link'}     >
            {item.text}
        </button></li>
      ))}
    </ul>
    <ul class="sdfd-tabs hline-tabs nav nav-tabs fullwidth" role="tablist">
      {items2.map((item, index) => (
        <li class="nav-item" key={index}>
            <button className={item.active ? 'nav-link active' : 'nav-link'}     >
            {item.text}
        </button></li>
      ))}
    </ul>
    </>
  );
};

export default Tabs;
