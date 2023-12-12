
// import coursesData from '../Routes/coursesData';

// export const loadCourses = () => (dispatch) => {
//   // In a real app, you would make an API call here
//   const courses = coursesData;
//   dispatch({
//     type: 'LOAD_COURSES',
//     payload: courses,
//   });
// };

// export const markCourseAsCompleted = (courseId) => (dispatch) => {
//   // Implement the logic to mark a course as completed here
//   dispatch({
//     type: 'MARK_COURSE_COMPLETED',
//     payload: courseId,
//   });
// };



// import coursesData from '../../Routes/coursesData';

export const loadCourses = () => (course) => {
  // In a real app, you would make an API call here
  // const courses = coursesData;
  // dispatch(
    return {
    type: 'LOAD_COURSES',
    payload: course,
  }
  // );
};

export const markCourseAsCompleted = (courseId) => (dispatch) => {
  // Implement the logic to mark a course as completed here
  // dispatch(
    return {
    type: 'MARK_COURSE_COMPLETED',
    payload: courseId,
  }
  // );
};
