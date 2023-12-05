import React, { useState } from 'react'; 


const Pagination = () => {
  const [active, setActive] = useState(8);

  return (
    <div className='sdtd-pagination' >
      <nav aria-label="Pagination">
        <ul className="pagination pagination-root" >
          <li className="page-item"><a className="page-link disabled"  aria-label="Go to the previous page" data-testid="prevArrow" tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" width={9} height={12} viewBox="0 0 9 12" fill="none"><path d="M0.744812 6.33679L6.71121 11.8398L8.25781 10.4131L3.83802 6.33679L8.25781 2.26053L6.71121 0.833739L0.744812 6.33679Z" fill="currentColor" /></svg></a></li>
          <li className="page-item"><a className="page-link" aria-label="Go to page, 1" tabindex="0">1</a></li>
          <li className="page-item"><a className="page-link" aria-label="Go to page, 2" tabindex="0">2</a></li>
          <li className="page-item"><a className="page-link" aria-label="Go to page, 3" tabindex="0">3</a></li>
          <li className="page-item"><a className="page-link" aria-label="Go to page, 4" tabindex="0">4</a></li>
          <li className="page-item"><a className="page-link" aria-label="Go to page, 5" tabindex="0">5</a></li>
          <li className="page-item"><a className="page-link" aria-label="Go to more" title="More" tabindex="0">...</a></li>
          <li className="page-item"><a className="page-link" aria-label="Go to the next page" data-testid="nextArrow" tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" width={8} height={11} viewBox="0 0 8 11" fill="none">
            <path d="M7.513 5.50305L1.5466 11.0061L-6.23324e-08 9.57931L4.41979 5.50305L-4.18493e-07 1.42679L1.5466 -6.63688e-07L7.513 5.50305Z" fill="#2E2D29" /></svg></a></li>
        </ul></nav>
    </div>
  );
};

export default Pagination;
