
import React from "react";
import "./App.css";

// Child Component
function StudentDetails(props) {
  return (
    <div className="student-card">
      <h2>Student Details</h2>

      <p>
        <b>Student Name:</b> {props.studentName}
      </p>

      <p>
        <b>Course:</b> {props.course}
      </p>

      <p>
        <b>Faculty Name:</b> {props.facultyName}
      </p>
    </div>
  );
}

// Parent Component
function App() {
  return (
    <div className="container">
      <h1>Student Information System</h1>

      <StudentDetails
        studentName="Manasa"
        course="Computer Science"
        facultyName="Mr. Ravi Kumar"
      />
    </div>
  );
}

export default App;
