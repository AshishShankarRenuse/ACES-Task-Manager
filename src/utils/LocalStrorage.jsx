const employees = [
  {
    "Id": 1,
    "FirstName": "Rajesh",
    "Email": "employee1@example.com",
    "Password": "123",
    "Tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Database Optimization",
        "description": "Optimize the database for faster query responses.",
        "date": "2024-11-15",
        "category": "Backend Development"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Design API",
        "description": "Develop RESTful API for mobile app integration.",
        "date": "2024-11-16",
        "category": "API Development"
      }
    ],
    "TaskSummary": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "Id": 2,
    "FirstName": "Sneha",
    "Email": "employee2@example.com",
    "Password": "123",
    "Tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Implement UI",
        "description": "Build front-end components for the dashboard.",
        "date": "2024-11-15",
        "category": "UI/UX Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Bug Fixes",
        "description": "Resolve issues from the previous release.",
        "date": "2024-11-14",
        "category": "Maintenance"
      }
    ],
    "TaskSummary": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "Id": 3,
    "FirstName": "Amit",
    "Email": "employee3@example.com",
    "Password": "123",
    "Tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true,
        "title": "Data Analysis",
        "description": "Analyze user data to improve engagement.",
        "date": "2024-11-13",
        "category": "Data Analysis"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Security Patch",
        "description": "Apply security patch to the system.",
        "date": "2024-11-15",
        "category": "Security"
      }
    ],
    "TaskSummary": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "Id": 4,
    "FirstName": "Priya",
    "Email": "employee4@example.com",
    "Password": "123",
    "Tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "User Research",
        "description": "Conduct interviews to gather user feedback.",
        "date": "2024-11-18",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Prototype Testing",
        "description": "Test the prototype with users for feedback.",
        "date": "2024-11-16",
        "category": "Prototyping"
      }
    ],
    "TaskSummary": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "Id": 5,
    "FirstName": "Vikram",
    "Email": "employee5@example.com",
    "Password": "123",
    "Tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Content Creation",
        "description": "Create content for the upcoming campaign.",
        "date": "2024-11-10",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Performance Testing",
        "description": "Test system performance under heavy load.",
        "date": "2024-11-15",
        "category": "Testing"
      }
    ],
    "TaskSummary": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  }
];


const admin = [
  {
    "Id": 1,
    "Email": "admin@example.com",
    "Password": "123"
  }
];

export const setLocalStorage=()=>{
    localStorage.setItem("employees",JSON.stringify(employees));
    localStorage.setItem("admin",JSON.stringify(admin));
}
export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem("employees"));
    const admin=JSON.parse(localStorage.getItem("admin"));

    return({employees,admin});
}