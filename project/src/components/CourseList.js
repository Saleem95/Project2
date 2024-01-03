// components/CourseList.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadCourses } from '../Redux/actions/courseActions';

const CourseList = ({ courses, loadCourses }) => {
  useEffect(() => {
    loadCourses();
  }, [loadCourses]);

  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.name}</h2>
          <p>Instructor: {course.instructor}</p>
          Add more course details
          Add more course details

         </div>
      )
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state); // Check the structure of the state object
  return {
    courses: state.courseReducer.courses,
  };
};

export default connect(mapStateToProps, { loadCourses })(CourseList);




