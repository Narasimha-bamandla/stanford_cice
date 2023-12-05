import React, { useState } from 'react';
const CourseInfo = () => {
    return (
        <>

            <div className='course_info-data'>
                <div className='columns'>
                    <div className='data'>
                        <label>
                            Appropriateness
                        </label>
                        <div className='data-text'>Open to MBA, MSx, and GSB PhD students</div>

                    </div>
                    <div className='data'>
                        <label>
                            Grade Distribution
                        </label>
                        <div className='data-text'> Participation - 25% | Project/Paper - 75%</div>


                    </div>
                    <div className='data'>
                        <label>
                            Attendance
                        </label>
                        <div className='data-text'> Mandatory attendance; Absences impact grade</div>
                    </div> 
                    <div className='data'>
                        <label>
                            Mode of Instructon
                        </label>
                        <div className='data-text'> Seminar</div> 
                    </div>   <div className='data'>
                        <label>
                            Notes
                        </label>
                        <div className='data-text'>  Cross-listed as MED272B, ME374B, and BIOE374B. One absence per quarter is allowed with advanced notice. By Application Only. The application will become available online in fall 2021 at http://biodesign.stanford.edu/programs/stanford-courses/biodesign-innovation.html.</div>
                    </div>
                </div>
                <div className='columns'>
                    <div className='data'>
                        <label>
                            Pass/Fail Option
                        </label>
                        <div className='data-text'> P/F Allowed</div>

                    </div>
                    <div className='data'>   <label>
                        Exams
                    </label>
                        <div className='data-text'> No Exam</div>

                    </div><div className='data'>
                        <label>
                            Projects/Paper
                        </label>
                        <div className='data-text'> 1 Group, 1 Individual Project/Paper</div>

                    </div> <div className='data'>  <label>
                        Axess #
                    </label>
                        <div className='data-text'> 1004</div> 
                    </div> </div> 
            </div>

        </>
    )
}

export default CourseInfo;