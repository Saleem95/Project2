const coursesData = [
    {
      id: 1,
      name: 'Introduction to React Native',
      instructor: 'John Doe',
      description: 'Learn the basics of React Native development and build your first mobile app.',
      enrollmentStatus: 'Open',
      // thumbnail: 'your.image.here1',
      duration: '8 weeks',
      dueDate: '2023-12-31',
      progress: 50,
      completed: false,
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to React Native',
          content: 'Overview of React Native, setting up your development environment.',
        },
        {
          week: 2,
          topic: 'Building Your First App',
          content: 'Creating a simple mobile app using React Native components.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 101,
          name: 'Alice Johnson',
          email: 'alice@example.com',
        },
        {
          id: 102,
          name: 'Bob Smith',
          email: 'bob@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 2,
      name: 'Advanced JavaScript',
      instructor: 'Jane Smith',
      description: 'Master advanced JavaScript concepts and become a pro developer.',
      enrollmentStatus: 'Open',
      // thumbnail: 'your.image.here2',
      duration: '10 weeks',
      dueDate: '2023-12-3',
      progress: 40,
      completed: false,
      schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
      location: 'Online',
      prerequisites: ['Intermediate JavaScript knowledge'],
      syllabus: [
        {
          week: 1,
          topic: 'Closures and Scopes',
          content: 'Understanding closures, lexical scoping, and function scope.',
        },
        {
          week: 2,
          topic: 'Promises and Async/Await',
          content: 'Working with asynchronous JavaScript using promises and async/await.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 201,
          name: 'Charlie Brown',
          email: 'charlie@example.com',
        },
        {
          id: 202,
          name: 'David Wilson',
          email: 'david@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 3,
      name: 'Introduction to React',
      instructor: 'John Doe',
      description: 'Learn the basics of React development and build your first mobile app.',
      enrollmentStatus: 'Open',
      // thumbnail: 'your.image.here2',
      duration: '8 weeks',
      dueDate: '2023-12-11',
      progress: 30,
      completed: false,
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus: [
        {
          week: 2,
          topic: 'Introduction to React',
          content: 'Overview of React, setting up your development environment.',
        },
        {
          week: 2,
          topic: 'Building Your First App',
          content: 'Creating a simple mobile app using React components.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 205,
          name: 'Alice Johnson',
          email: 'alice@example.com',
        },
        {
          id: 201,
          name: 'Bob Smith',
          email: 'bob@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 4,
      name: 'Advanced JavaScript',
      instructor: 'Jane Smith',
      description: 'Master advanced JavaScript concepts and become a pro developer.',
      enrollmentStatus: 'Open',
      // thumbnail: 'your.image.here2',
      duration: '20 weeks',
      dueDate: '2023-01-1',
      progress: 50,
      completed: false,
      schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
      location: 'Online',
      prerequisites: ['Intermediate JavaScript knowledge'],
      syllabus: [
        {
          week: 2,
          topic: 'Closures and Scopes',
          content: 'Understanding closures, lexical scoping, and function scope.',
        },
        {
          week: 2,
          topic: 'Promises and Async/Await',
          content: 'Working with asynchronous JavaScript using promises and async/await.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 302,
          name: 'Charlie Brown',
          email: 'charlie@example.com',
        },
        {
          id: 302,
          name: 'David Wilson',
          email: 'david@example.com',
        },
        // Additional enrolled students...
      ],
    },
    // Add more courses here...
  ];
  
  export default coursesData;
  