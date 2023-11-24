import React , {useState , Component} from 'react';
import ClayButton from '@clayui/button';
import AlertRedIcon from '../../assets/images/icons/alert_triangle_red_icon.svg';
import StarIcon from "../../assets/images/icons/star_icon.svg";
import NoteFillIcon from "../../assets/images/icons/note_fill_icon.svg";
import NoteLineIcon from "../../assets/images/icons/note_line_icon.svg";
import TimeIcon from "../../assets/images/icons/time_icon.svg";
export class AddNotes extends React.Component {
  render(){
    return(
      "Add Notes  "
    )
  }
}

export class MyNotesList extends React.Component {
  render(){
    return(
      <> 
     <div className='my-notes-list'>
    <div className='note'>  <p>
          Teacher great with practical examples, taken from real life situations 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam .... 
        </p> 
        <div className='time'><img src={TimeIcon} /> 5 min ago</div></div>
        <p>Course useful for Finance Mangement</p>
        <p>Cover multiple area related to overall accounting fields</p>
        <p>The instructors has an in-depth knowledge of the field; recommended by seniors</p>
        </div>
      </> 

    )
  }
}
const MyNotesBtn = (props) => {  
  const [myNotesList, setMyNotesList] = useState(0);
  const handleMyNotesList = () => {
    setMyNotesList((prevVal) => (prevVal === 0 ? 1 : 0));
  };
    return (
      <> 
        <ClayButton   active={myNotesList} modern onClick={handleMyNotesList}    className='note-btn' displayType={null} size='xs'>
              <span className="inline-item inline-item-before">
              {props.notes ? <img src={NoteFillIcon} />  : <img src={NoteLineIcon} />    }  
              </span>    {"My Notes"} 
            </ClayButton>
            {myNotesList ? <MyNotesList />  : ""   }  
            
      </>
    )
}
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
          <AddNotes />
       
          <div className='header'>
            <div className='course-code  '>
              <div className='courseid'>{course.courseId}</div>
            {course.rmd &&  <div className='rmd-txt'> RECOMMENDED</div>}  
            </div>
             <MyNotesBtn notes={course.notes} />
          </div>
          <div className='course-name'> {course.courseName}</div> 
          {course.notEligible &&   <div className='disclaimer'>  <img src={AlertRedIcon} /> You are not eligible to enroll in Advanced section. <a href="#">Read More</a></div>
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
                   <img src={StarIcon} />
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
  );}
};
export default class CourseItem extends Component  {

  render() {
    const courses = [
      {
        id: 1,
        courseId: 'OIT 276 - Accelerated (2 Units)',
        rmd: true,
        notes: true,
        notEligible: false, 
        courseName: 'Data and Decisions - Accelerated (Flipped Classroom)',
        colorClass:'red-line',
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
            dates:'Jan 06 - Mar 11',
            days: 'Wed, Fri',
            timings:'01:30 PM - 02:50 PM',
            seats:'Around 16 Seats',
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
            dates:'Jan 06 - Mar 11',
            days: 'Wed, Fri',
            timings:'01:30 PM - 02:50 PM',
            seats:'Around 16 Seats',
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
            dates:'Jan 06 - Mar 11',
            days: 'Wed, Fri',
            timings:'01:30 PM - 02:50 PM',
            seats:'Around 16 Seats',
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
            dates:'Jan 06 - Mar 11',
        days: 'Wed, Fri',
        time:'01:30 PM - 02:50 PM',
        seats:'Around 16 Seats',
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
            dates:'Jan 06 - Mar 11',
        days: 'Wed, Fri',
        time:'01:30 PM - 02:50 PM',
        seats:'Around 16 Seats',
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
            dates:'Jan 06 - Mar 11',
        days: 'Wed, Fri',
        time:'01:30 PM - 02:50 PM',
        seats:'Around 16 Seats',
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
            dates:'Jan 06 - Mar 11',
        days: 'Wed, Fri',
        time:'01:30 PM - 02:50 PM',
        seats:'Around 16 Seats',
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
            dates:'Jan 06 - Mar 11',
        days: 'Wed, Fri',
        time:'01:30 PM - 02:50 PM',
        seats:'Around 16 Seats',
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
