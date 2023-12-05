import React, { useState } from 'react';
import { Heading } from '@clayui/core';
import ClayButton from '@clayui/button';

const CourseSections = () => { 
    return (
        <> 
            <div className='course_sections-data'>
                <div className='head'>
                    <div className='left-col'>
                        <Heading level={3} weight="semi-bold"     >
                            Section 1
                        </Heading>
                        <ClayButton className='sdfd-btn btn-secondary' displayType="secondary" size='sm' style={{ margin: 'auto', display: 'block' }} >
                            <span className="inline-item inline-item-before">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                    <rect width={24} height={24} rx={12} fill="#FFE6E2" />
                                    <path d="M15.6004 9.5998V8.2998C15.6004 7.37155 15.2211 6.48131 14.546 5.82493C13.8708 5.16855 12.9552 4.7998 12.0004 4.7998C11.0456 4.7998 10.1299 5.16855 9.45481 5.82493C8.77968 6.48131 8.40039 7.37155 8.40039 8.2998V9.5998" stroke="#8C1515" strokeWidth="1.44" strokeLinecap="round" />
                                    <path d="M16.6667 9.6001H7.33333C6.59695 9.6001 6 10.2613 6 11.077V17.7232C6 18.5389 6.59695 19.2001 7.33333 19.2001H16.6667C17.403 19.2001 18 18.5389 18 17.7232V11.077C18 10.2613 17.403 9.6001 16.6667 9.6001Z" fill="#8C1515" />
                                    <circle cx="12.0008" cy="15.5999" r="1.2" fill="white" />
                                </svg>
                            </span>     {"MBA1 permission required"}
                        </ClayButton></div>
                    <div className='right-col'>
                        <ClayButton displayType="primary" size='sm' style={{ margin: 'auto', display: 'block' }} >
                            <span className="inline-item inline-item-before">
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                    <path d="M17.3671 3.84172C16.9415 3.41589 16.4361 3.0781 15.8799 2.84763C15.3237 2.61716 14.7275 2.49854 14.1254 2.49854C13.5234 2.49854 12.9272 2.61716 12.371 2.84763C11.8147 3.0781 11.3094 3.41589 10.8838 3.84172L10.0004 4.72506L9.11709 3.84172C8.25735 2.98198 7.09129 2.49898 5.87542 2.49898C4.65956 2.49898 3.4935 2.98198 2.63376 3.84172C1.77401 4.70147 1.29102 5.86753 1.29102 7.08339C1.29102 8.29925 1.77401 9.46531 2.63376 10.3251L3.51709 11.2084L10.0004 17.6917L16.4838 11.2084L17.3671 10.3251C17.7929 9.89943 18.1307 9.39407 18.3612 8.83785C18.5917 8.28164 18.7103 7.68546 18.7103 7.08339C18.7103 6.48132 18.5917 5.88514 18.3612 5.32893C18.1307 4.77271 17.7929 4.26735 17.3671 3.84172V3.84172Z" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>     {"Add to Wishlist "}
                        </ClayButton>
                    </div>
                </div>
                <div className='content'>
                    <div className='  columns'>
                        <div className='data'>
                            <ul className='instructors'>
                                <li>
                                    <a href='#' className='external_link'>B Jacobs</a>
                                </li><li>
                                    <a href='#' className='external_link'>J Hurley</a>
                                </li><li>
                                    <a href='#' className='external_link'>E Tinotti</a>
                                </li><li>
                                    <a href='#' className='external_link'>B Srinivasan</a>
                                </li><li>
                                    <a href='#' className='external_link'>S Ross</a>
                                </li><li>
                                    <a href='#' className='external_link'>Y Khatun</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className='  columns'>
                        <div className='units'>  2 Units</div>
                        <div className='day-week-time'>
                            <div className='day'>   Mar 20 - Jun 03</div>
                            <div className='week'>   Mon, Tue, Wed</div>
                            <div className='time'>   10:00 AM - 11:20 AM </div>
                        </div>
                        <div className='limit'>  Limited to 16 GSB & 6 Non-GSB students</div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CourseSections;