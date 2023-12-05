import React, { useState } from 'react';
import { CheckboxList } from '../stanford/DropdownList';
const RatingComponent = ({ data }) => {
    return (
        <>
            {data.map((item, index) => (
                <div className='ratings' key={index}>
                    <h6 className='name'>{item[0].name}</h6>
                    <h6 className='rating'> {item[0].rating}</h6>
                    <div className={'sdfd-ratingbar'}>
                        {item[0].ratingframe.map((frame, frameIndex) => (
                            <div key={frameIndex} className={`star${frame.star}`} style={{ width: `max(${frame.percent}%, 30px)`, minWidth: '30px' }}>
                                {frame.percent}%
                            </div>
                        ))}  </div>
                </div>
            ))}
        </>
    );
};
 

const StarRatingBar = () => {
    const starsData = [
        { star: 5, label: '5 stars' },
        { star: 4, label: '4 stars' },
        { star: 3, label: '3 stars' },
        { star: 2, label: '2 stars' },
        { star: 1, label: '1 star' },
    ];

    return (
        <div className="sdfd-stars">
            {starsData.map(({ star, label }) => (
                <div key={star} className={`star${star}`}>
                    <div className="color"></div>
                    {label}
                </div>
            ))}
        </div>
    );
};
const RatingsPanel = () => {
    const ratingBarsData = [
        [
            {
                name: 'Content',
                rating: '4.7',
                ratingframe: [
                    { star: 5, percent: 64 },
                    { star: 4, percent: 24 },
                    { star: 3, percent: 5 },
                    { star: 2, percent: 5 },
                    { star: 1, percent: 2 },
                ]
            }
        ],
        [
            {
                name: 'Teaching',
                rating: '4.5',
                ratingframe: [
                    { star: 5, percent: 48 },
                    { star: 4, percent: 22 },
                    { star: 3, percent: 20 },
                    { star: 2, percent: 3 },
                    { star: 1, percent: 7 },
                ]
            }
        ],
        [
            {
                name: 'Learning',
                rating: '4.3',
                ratingframe: [
                    { star: 5, percent: 70 },
                    { star: 4, percent: 21 },
                    { star: 3, percent: 3 },
                    { star: 2, percent: 2 },
                    { star: 1, percent: 4 },
                ]
            }
        ],
    ];
    const academicYearItems = [
        {
            id: 1,
            name: "2020-2021"
        },
        {
            id: 2,
            name: "2021-2022"
        },
        {
            id: 3,
            name: "2022-2023"
        },
        {
            id: 4,
            name: "2023-2024"
        }
    ];
    const [academicYearList, setAcademicYearList] = useState(0);
    const handleAcademicYearList = () => {
        setAcademicYearList((prevVal) => (prevVal === 0 ? 1 : 0));
    };
    return (
        <>
            <div className='ratings_panel'>
                <div className='sorting'>
                    Showing Ratings from  <div className="DropdownList   dropdown  dropdown-btn w200">
                        <button
                            className={academicYearList ? 'dropdown-toggle btn active' : 'dropdown-toggle btn'}
                            type="button"
                            aria-controls="daycode-dropdown-menu"
                            aria-expanded="false"
                            aria-haspopup="true"
                            active={academicYearList} modern onClick={handleAcademicYearList}
                        >
                            2022-2023
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
                        {academicYearList ? <>
                            <div id="daycode-dropdown-menu" className="dropdown-menu show" role="presentation">
                                <CheckboxList items={academicYearItems} />
                            </div></> : ''}
                    </div>
                </div>
                <div className='content'>
                    <RatingComponent data={ratingBarsData} />
                </div>
                <StarRatingBar />
            </div>
        </>
    )
}

export default RatingsPanel;