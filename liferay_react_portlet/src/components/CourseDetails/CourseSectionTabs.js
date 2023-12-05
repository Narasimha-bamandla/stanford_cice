import React, { useState } from 'react';
import { Heading } from '@clayui/core';
import ClayButton from '@clayui/button';

const CourseSectionTabs = () => {
    const sectionsItems = [
        { id: 1, section: "Section 1", name: 'Autumn', lock: true }, 
        { id: 2, section: "Section 2", name: 'Autumn', lock: false },
        { id: 3, section: "Section 3", name: 'Autumn', lock: false },
        { id: 4, section: "Section 4", name: 'Autumn', lock: false }, 

        { id: 5, section: "Section 1", name: 'Winter', lock: true }, 
        { id: 6, section: "Section 2", name: 'Winter', lock: false },
        { id: 7, section: "Section 3", name: 'Winter', lock: false },
        { id: 8, section: "Section 4", name: 'Winter', lock: false }, 

        { id: 9, section: "Section 1", name: 'Spring', lock: true }, 
        { id: 10, section: "Section 2", name: 'Spring', lock: false },
        { id: 11, section: "Section 3", name: 'Spring', lock: false },
        { id: 12, section: "Section 4", name: 'Spring', lock: false }, 
      ];
    return (
        <><ul class="course_sections-tabs sdfd-tabs top-round border-bottom-none fill-tabs nav nav-tabs" role="tablist">
           {sectionsItems.map((item, index) => (
              <li class={index == 0 ? 'nav-item active' : 'nav-item'}   key={index}> 
                <button className='nav-link'   >
                    <span className='section'><strong> {item.section}</strong>    
                  {item.lock &&  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <rect width={24} height={24} rx={12} fill="#FFE6E2" />
                        <path d="M15.6004 9.5998V8.2998C15.6004 7.37155 15.2211 6.48131 14.546 5.82493C13.8708 5.16855 12.9552 4.7998 12.0004 4.7998C11.0456 4.7998 10.1299 5.16855 9.45481 5.82493C8.77968 6.48131 8.40039 7.37155 8.40039 8.2998V9.5998" stroke="#8C1515" strokeWidth="1.44" strokeLinecap="round" />
                        <path d="M16.6667 9.6001H7.33333C6.59695 9.6001 6 10.2613 6 11.077V17.7232C6 18.5389 6.59695 19.2001 7.33333 19.2001H16.6667C17.403 19.2001 18 18.5389 18 17.7232V11.077C18 10.2613 17.403 9.6001 16.6667 9.6001Z" fill="#8C1515" />
                        <circle cx="12.0008" cy="15.5999" r="1.2" fill="white" />
                    </svg>} </span>
                    <span className='body3'>{item.name}</span>
                </button>

            </li>
            ))}  
        </ul> 
        </>
    )
}

export default CourseSectionTabs;