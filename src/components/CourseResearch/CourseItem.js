import React, { Component } from 'react';
import ClayButton from '@clayui/button';


class CourseComponent extends Component {

  constructor(props) {
    super(props);

    // Initialize state if needed
    this.state = {
      // your state properties here
    };
  };
  render() {
    const { course, index } = this.props;
    return (
      <>

        <div className={course.colorClass ? `course-sec  ` + course.colorClass : 'course-sec'}>
          <div className='header'>
            <div className='course-code  '>
              <div className='courseid'>{course.courseId}</div>
              {course.rmd && <div className='rmd-txt'> RECOMMENDED</div>}
            </div>
            <ClayButton className='note-btn' displayType={null} size='xs'>
              <span className="inline-item inline-item-before">
                {course.notes ? <img src={'/o/stanford-clce-theme/images/icons/note_fill_icon.svg'} /> : <img src={'/o/stanford-clce-theme/images/icons/note_line_icon.svg'} />}
              </span>    {"My Notes"}
            </ClayButton>
          </div>
          <div className='course-name'> {course.courseName}</div>
          {course.notEligible && <div className='disclaimer'>  <img src={'/o/stanford-clce-theme/images/icons/alert_triangle_red_icon.svg'} /> You are not eligible to enroll in Advanced section. <a href="#">Read More</a></div>
          }

          <table className={course.notEligible && 'disabled'}>
            <colgroup>
              <col width={"11%"}>
              </col>
              <col width={"32%"}>
              </col>
              <col width={"32%"}>
              </col>
              <col width={"15%"}>
              </col>
            </colgroup>
            {course.courseSections.map((section) => (
              <tr key={section.sectionId}>


                <td> {section.sectionName} </td>
                <td>
                  <div className='instr-links'   >
                    {section.instructors.map((instructor, index) => (
                      <>  <span key={instructor.instructorId}>
                        <span className='vline'></span>  <a href={instructor.instructorLink}>{instructor.instructorName}</a>
                      </span>  </>
                    ))}  </div>
                </td>
                <td>
                  <div className='dwt' >
                    <span className='dates' >
                      {section.dates}
                    </span>
                    <span className='vline'></span>
                    <span className='wt' >
                      <div className='week' >
                        {section.days}
                      </div>
                      <div className='time' >
                        {section.timings}
                      </div>
                    </span>
                  </div>
                </td>
                <td>
                  <div className='seats' >
                    {section.seats}
                  </div>
                  <div className='rating' >
                    <img src={'/o/stanford-clce-theme/images/icons/star_icon.svg'} />
                    <span>
                      {section.rating}
                    </span>
                  </div>
                </td>
              </tr>
            ))}

          </table>
        </div>

      </>
    );
  }
};
class CoursesList extends Component {
  constructor(props) {
    super(props);

    // Initialize state if needed
    this.state = {
      // your state properties here
    };
  };
  render() {
    const { courses, index } = this.props;
    return (
      <>
        {courses.map((course, index) => (
          <>
            {(index !== 0) && <hr />}
            <CourseComponent key={course.id} course={course} />

          </>
        ))}
      </>
    );
  }
};
export default class CourseItem extends React.Component {

  render() {
    const courses = [
      {
        id: 1,
        courseId: 'OIT 276 - Accelerated (2 Units)',
        rmd: true,
        notes: true,
        notEligible: false,
        courseName: 'Data and Decisions - Accelerated (Flipped Classroom)',
        colorClass: 'red-line',
        courseSections: [
          {
            sectionId: 1,
            sectionName: 'Section 1',
            instructors: [
              {
                instructorId: 1,
                instructorName: "S Zweig",
                instructorLink: "#",
              },
              {
                instructorId: 2,
                instructorName: "J Spiess",
                instructorLink: "#",
              },
              {
                instructorId: 3,
                instructorName: "J Hurley",
                instructorLink: "#",
              },
              {
                instructorId: 4,
                instructorName: "B Krishnan",
                instructorLink: "#",
              },
              {
                instructorId: 5,
                instructorName: "C Christopher",
                instructorLink: "#",
              },
              {
                instructorId: 5,
                instructorName: "S Swaminathan",
                instructorLink: "#",
              },
            ],
            dates: 'Jan 06 - Mar 11',
            days: 'Wed, Fri',
            timings: '01:30 PM - 02:50 PM',
            seats: 'Around 16 Seats',
            rating: '4.7',
          },
          {
            sectionId: 2,
            sectionName: 'Section 2',
            instructors: [
              {
                instructorId: 1,
                instructorName: "S Zweig",
                instructorLink: "#",
              },
              {
                instructorId: 2,
                instructorName: "J Spiess",
                instructorLink: "#",
              },
              {
                instructorId: 3,
                instructorName: "J Hurley",
                instructorLink: "#",
              },
              {
                instructorId: 4,
                instructorName: "B Krishnan",
                instructorLink: "#",
              },
              {
                instructorId: 5,
                instructorName: "C Christopher",
                instructorLink: "#",
              },
              {
                instructorId: 5,
                instructorName: "S Swaminathan",
                instructorLink: "#",
              },
            ],
            dates: 'Jan 06 - Mar 11',
            days: 'Wed, Fri',
            timings: '01:30 PM - 02:50 PM',
            seats: 'Around 16 Seats',
            rating: '4.7',
          },
          {
            sectionId: 2,
            sectionName: 'Section 2',
            instructors: [
              {
                instructorId: 1,
                instructorName: "S Zweig",
                instructorLink: "#",
              },
              {
                instructorId: 2,
                instructorName: "J Spiess",
                instructorLink: "#",
              },
              {
                instructorId: 3,
                instructorName: "J Hurley",
                instructorLink: "#",
              },
              {
                instructorId: 4,
                instructorName: "B Krishnan",
                instructorLink: "#",
              },
              {
                instructorId: 5,
                instructorName: "C Christopher",
                instructorLink: "#",
              },
              {
                instructorId: 5,
                instructorName: "S Swaminathan",
                instructorLink: "#",
              },
            ],
            dates: 'Jan 06 - Mar 11',
            days: 'Wed, Fri',
            timings: '01:30 PM - 02:50 PM',
            seats: 'Around 16 Seats',
            rating: '4.7',
          },
        ],
      },
      {
        id: 2,
        courseId: 'OIT 274 - Base (2 Units)',
        rmd: false,
        notes: false,
        notEligible: false,
        courseName: 'Data and Decisions - Base (Flipped Classroom)',

        courseSections: [
          {
            sectionId: 1,
            sectionName: 'Section 1',
            instructors: [
              {
                instructorId: 1,
                instructorName: "S Zweig",
                instructorLink: "#",
              },
              {
                instructorId: 2,
                instructorName: "J Spiess",
                instructorLink: "#",
              },
              {
                instructorId: 3,
                instructorName: "J Hurley",
                instructorLink: "#",
              },

              {
                instructorId: 5,
                instructorName: "S Swaminathan",
                instructorLink: "#",
              },
            ],
            dates: 'Jan 06 - Mar 11',
            days: 'Wed, Fri',
            time: '01:30 PM - 02:50 PM',
            seats: 'Around 16 Seats',
            rating: '4.7',
          },
          {
            sectionId: 1,
            sectionName: 'Section 2',
            instructors: [
              {
                instructorId: 1,
                instructorName: "S Zweig",
                instructorLink: "#",
              },
              {
                instructorId: 2,
                instructorName: "J Spiess",
                instructorLink: "#",
              },
              {
                instructorId: 3,
                instructorName: "J Hurley",
                instructorLink: "#",
              },

              {
                instructorId: 5,
                instructorName: "S Swaminathan",
                instructorLink: "#",
              },
            ],
            dates: 'Jan 06 - Mar 11',
            days: 'Wed, Fri',
            time: '01:30 PM - 02:50 PM',
            seats: 'Around 16 Seats',
            rating: '4.7',
          },
        ],
      },
      {
        id: 3,
        courseId: 'OIT 280 - Advanced (2 Units)',
        rmd: false,
        notes: false,
        notEligible: true,
        courseName: 'Data and Decisions - Advanced',

        courseSections: [
          {
            sectionId: 1,
            sectionName: 'Section 1',
            instructors: [
              {
                instructorId: 1,
                instructorName: "S Zweig",
                instructorLink: "#",
              },
              {
                instructorId: 2,
                instructorName: "J Spiess",
                instructorLink: "#",
              },
              {
                instructorId: 3,
                instructorName: "J Hurley",
                instructorLink: "#",
              },

              {
                instructorId: 5,
                instructorName: "S Swaminathan",
                instructorLink: "#",
              },
            ],
            dates: 'Jan 06 - Mar 11',
            days: 'Wed, Fri',
            time: '01:30 PM - 02:50 PM',
            seats: 'Around 16 Seats',
            rating: '4.7',
          },
          {
            sectionId: 2,
            sectionName: 'Section 2',
            instructors: [
              {
                instructorId: 1,
                instructorName: "S Zweig",
                instructorLink: "#",
              },
              {
                instructorId: 2,
                instructorName: "J Spiess",
                instructorLink: "#",
              },
              {
                instructorId: 3,
                instructorName: "J Hurley",
                instructorLink: "#",
              },

              {
                instructorId: 5,
                instructorName: "S Swaminathan",
                instructorLink: "#",
              },
            ],
            dates: 'Jan 06 - Mar 11',
            days: 'Wed, Fri',
            time: '01:30 PM - 02:50 PM',
            seats: 'Around 16 Seats',
            rating: '4.7',
          },
          {
            sectionId: 3,
            sectionName: 'Section 3',
            instructors: [
              {
                instructorId: 1,
                instructorName: "S Zweig",
                instructorLink: "#",
              },
              {
                instructorId: 2,
                instructorName: "J Spiess",
                instructorLink: "#",
              },
              {
                instructorId: 3,
                instructorName: "J Hurley",
                instructorLink: "#",
              },

              {
                instructorId: 5,
                instructorName: "S Swaminathan",
                instructorLink: "#",
              },
            ],
            dates: 'Jan 06 - Mar 11',
            days: 'Wed, Fri',
            time: '01:30 PM - 02:50 PM',
            seats: 'Around 16 Seats',
            rating: '4.7',
          },
        ],
      }

    ]

    return (
      <>
        <CoursesList courses={courses} />

      </>
    );
  }

};
