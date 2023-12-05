import React, { useState } from 'react';
import { RadioList } from '../stanford/DropdownList';

const StarRating = ({ star }) => {
    let stars = '';
    switch (star) {
        case 0.5:
            stars = <div className={`stars `}>
                <span className='star half'></span>
                <span className='star '></span>
                <span className='star '></span>
                <span className='star '></span>
                <span className='star '></span>
            </div>;
            break;
        case 1:
            stars = <div className={`stars `}>
                <span className='star full'></span>
                <span className='star '></span>
                <span className='star '></span>
                <span className='star '></span>
                <span className='star '></span>
            </div>;
            break;
        case 1.5:
            stars = <div className={`stars `}>
                <span className='star full'></span>
                <span className='star half'></span>
                <span className='star '></span>
                <span className='star '></span>
                <span className='star '></span>
            </div>;
            break;
        case 2:
            stars = <div className={`stars `}>
                <span className='star full'></span>
                <span className='star full'></span>
                <span className='star '></span>
                <span className='star '></span>
                <span className='star '></span>
            </div>;
            break;
        case 2.5:
            stars = <div className={`stars `}>
                <span className='star full'></span>
                <span className='star full'></span> <span className='star half'></span>
                <span className='star '></span>
                <span className='star '></span>
            </div>;
            break;
        case 3:
            stars = <div className={`stars `}>
                <span className='star full'></span>
                <span className='star full'></span>
                <span className='star full'></span>
                <span className='star '></span>
                <span className='star '></span>
            </div>;
            break;
        case 3.5:
            stars = <div className={`stars `}>
                <span className='star full'></span>
                <span className='star full'></span>
                <span className='star full'></span><span className='star half'></span>
                <span className='star '></span>
            </div>;
            break;
        case 4:
            stars = <div className={`stars `}>
                <span className='star full'></span>
                <span className='star full'></span>
                <span className='star full'></span>
                <span className='star full'></span>
                <span className='star '></span>
            </div>;
            break;
        case 4.5:
            stars = <div className={`stars `}>

                <span className='star full'></span>
                <span className='star full'></span>
                <span className='star full'></span>
                <span className='star full'></span>
                <span className='star half'></span>
            </div>;
            break;
        case 5:
            stars = <div className={`stars `}>
                <span className='star full'></span>
                <span className='star full'></span>
                <span className='star full'></span>
                <span className='star full'></span>
                <span className='star full'></span>
            </div>;
            break;
        default:
            stars = <div className={`stars `}>
                <span className='star '></span>
                <span className='star '></span>
                <span className='star '></span>
                <span className='star '></span>
                <span className='star '></span>
            </div>;
    }
    return stars;
}
const Comments = ({ data }) => {
    return (
        <>
            {data.map((item, index) => (
                <>
                    <div className='comment_card' key={index}>
                        <div className='left_col'>
                            <div><label> Content: </label> <div className='val'> {item.content}</div></div>
                            <div><label> Teaching: </label> <div className='val'> {item.teaching}</div> </div>
                            <div><label> Background in Subject: </label> <div className='val'> {item.subject}</div></div>
                            <div><label> Relation to Career: </label> <div className='val'> {item.career}</div></div>

                        </div>
                        <div className='right_col'>
                            <StarRating star={item.content} />
                            <div className='comment body2'>
                                {item.comments}   </div>
                            <div className='date_likes'>
                                <div className='date'>
                                    Posted on {item.date}
                                </div>
                                <div className='likes'>
                                    <strong>{item.likes} People</strong>   Agree with this Feedback
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </>
    );
};

const CourseComments = () => {
    const [sortList, setSortList] = useState(0);
    const handleSortList = () => {
        setSortList((prevVal) => (prevVal === 0 ? 1 : 0));
    };
    const sortItems = [
        {
            id: 1,
            name: "Most Recent"
        },
        {
            id: 2,
            name: "Most Liked Comments"
        }
    ];
    const commentsData = [
        {
            content: 5,
            teaching: 'N/A',
            subject: 'Moderate',
            career: 'Direct',
            date: 'June 24, 2021',
            likes: '20',
            comments: 'Take it!!! You will build a great working knowledge of accounting and be able to tie it to the real world.',
        },
        {
            content: 5,
            teaching: 'N/A',
            subject: 'Moderate',
            career: 'Direct',
            date: 'June 24, 2021',
            likes: '20',
            comments: 'Take it!!! You will build a great working knowledge of accounting and be able to tie it to the real world.',
        },
        {
            content: 5,
            teaching: 'N/A',
            subject: 'Moderate',
            career: 'Direct',
            date: 'June 24, 2021',
            likes: '20',
            comments: 'Take it!!! You will build a great working knowledge of accounting and be able to tie it to the real world.',
        }
    ];
    return (
        <>
            <div className='course_comments'>
                <div className='filters'>
                    <div className='filter'><span className='body2'> Filter by: <strong>5 stars</strong></span>  <a href="" className='grey-link'>Clear Filters</a>  </div>
                    <div className="DropdownList checkmark  dropdown  dropdown-btn  ">
                        <button
                            className={sortList ? 'dropdown-toggle btn active' : 'dropdown-toggle btn'}
                            type="button"
                            aria-controls="daycode-dropdown-menu"
                            aria-expanded="false"
                            aria-haspopup="true"
                            active={sortList} modern onClick={handleSortList}
                        >
                            Sort By
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
                        {sortList ? <>
                            <div id="daycode-dropdown-menu" className="dropdown-menu show" role="presentation">
                                <RadioList items={sortItems} />
                            </div></> : ''}
                    </div>
                </div>
                <div className='content'>
                    <Comments data={commentsData} /> 
                </div>
            </div>
        </>
    )
}

export default CourseComments;