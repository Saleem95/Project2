// reducers/courseReducer.js
const initialState = {
  courses: [ ],
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_COURSES':
      return { ...state, courses: action.payload };
    default: return state;
  }
};
const MarkcourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MARK_COURSE_COMPLETED':
      // const courseId = action.payload;
      // console.log(state,"state");
      // const updatedCourses = state.courses.map((course) =>
      //   course.id === courseId ? { ...course, completed: true } : course
      // );

      return { ...state, courses: action.payload };
    default: return state;
  }
};

export default {courseReducer,MarkcourseReducer};
