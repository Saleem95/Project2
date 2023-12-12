// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './Components/store';
// import CourseList from './Components/CourseList';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <CourseList />
//     </Provider>
//   );
// };

// export default App;




// import React from 'react';
// import { Provider } from 'react-redux';
// import CourseList from './Components/CourseList';
// import store from './projectjs/store';
// import CourseDashboard from './projectjs/CourseDashboard';

// function App() {
//   return (
//     // <Provider store={store}>
//     //   <div className="App">
//     //     <CourseList />
//     //   </div>
//     // </Provider>
//     <>
//     <Provider store={store}>
//       <div className="App">
//         <CourseDashboard />
//       </div>
//     </Provider>
//     </>
//   );
// }

// export default App;


// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import StudentDashboard from './components/StudentDashboard';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<CourseList />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
        </Routes>
      </Router>
  );
}

export default App;
