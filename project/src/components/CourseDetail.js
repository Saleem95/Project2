import React from 'react';
import { connect } from 'react-redux';
import { markCourseAsCompleted } from '../Redux/actions/courseActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCourses } from '../Redux/actions/courseActions';

const CourseDetail = ({ course, markCourseAsCompleted }) => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses);
  
    useEffect(() => {
      dispatch(loadCourses());
    }, [dispatch]);
  
    // useEffect(() => {
    //   dispatch(loadCourses());
    // }, [dispatch]); // Only run on mount

    if (!courses) {
      return <div>Loading...</div>;
    }

  return (
    <div>
      <h2>{course.name}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>Description: {course.description}</p>
      <p>Enrollment Status: {course.enrollmentStatus}</p>
      <p>Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <p>Prerequisites: {course.prerequisites.join(', ')}</p>
      <h3>Syllabus</h3>
      <ul>
        {course.syllabus.map((item) => (
          <li key={item.week}>
            Week {item.week}: {item.topic} - {item.content}
          </li>
        ))}
      </ul>
      <button onClick={() => markCourseAsCompleted(course.id)}>Mark as Completed</button>
    </div>
  );
};



const mapStateToProps = (state, ownProps) => {
    const courseId = parseInt(ownProps.match.params.id);
    const course = state.courseReducer.courses.find((c) => c.id === courseId);
    return { course };
  };


  // const mapStateToProps = (state) => ({
  //   courses: state.courseReducer.courses,
  // });
export default connect(mapStateToProps, { markCourseAsCompleted })(CourseDetail);
