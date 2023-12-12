import React from 'react';
import { connect } from 'react-redux';

const StudentDashboard = ({ enrolledCourses, markCourseAsCompleted }) => {
  return (
    <div>
      <h2>My Enrolled Courses</h2>
      {enrolledCourses.map((course) => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <p>Instructor: {course.instructor}</p>
          <p>Due Date: {course.dueDate}</p>
          <progress value={course.progress} max="100"></progress>
          <button onClick={() => markCourseAsCompleted(course.id)}>Mark as Completed</button>
        </div>
      ))}
    </div>
  );
};


const mapStateToProps = (state) => {
  console.log(state); // Check the structure of the state object
  return{
    enrolledCourses: state.courses.filter((course) => course.completed === false),
  };
}
//   }
//   enrolledCourses: state.courseReducer.courses.filter((course) => !course.completed),
// });

export default connect(mapStateToProps)(StudentDashboard);
