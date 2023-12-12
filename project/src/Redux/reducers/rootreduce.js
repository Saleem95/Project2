import { combineReducers } from 'redux';
import {courseReducer,MarkcourseReducer} from './courseReducer.js';

const rootReducer = combineReducers({
    courses: courseReducer,
    markcourse: MarkcourseReducer

  });
  

// export default rootReducer
export default rootReducer;
