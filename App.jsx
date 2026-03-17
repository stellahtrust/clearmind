// src/App.jsx
import { useState } from 'react'
import './App.css'
import Student from './components/students';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Monic", course: "IT", year: "Year 1", honor: true, img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Monic" },
    { id: 2, name: "Ray", course: "Business", year: "Year 2", honor: false, img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ray" },
    { id: 3, name: "Abby", course: "Engineering", year: "Year 3", honor: true, img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Abby" }
  ]);

  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);

  // 🔥 NEW form states
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  const [honor, setHonor] = useState(false);

  // click
  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  // search
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`You searched for: ${search}`);
  };

  // add student
  const handleAddStudent = (e) => {
    e.preventDefault();

    const newStudent = {
      id: students.length + 1,
      name,
      course,
      year,
      honor,
      img: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`
    };

    setStudents([...students, newStudent]);

    setName("");
    setCourse("");
    setYear("");
    setHonor(false);
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Classroom Directory</h1>

      {/* SEARCH */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search student..."
          value={search}
          onChange={handleChange}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button type="submit">Search</button>
      </form>

      <p>{message}</p>

      {/* SELECTED STUDENT */}
      {selectedStudent && (
        <div style={{
          border: "3px solid black",
          padding: "20px",
          margin: "20px auto",
          width: "250px",
          borderRadius: "10px",
          backgroundColor: "#26914fa2"
        }}>
          <h2>Student Details</h2>
          <img 
            src={selectedStudent.img} 
            alt={selectedStudent.name} 
            style={{ width: "100px", borderRadius: "50%" }} 
          />
          <h3>{selectedStudent.name}</h3>
          <p>Course: {selectedStudent.course}</p>
          <p>Year: {selectedStudent.year}</p>
          <p>
            Status: {selectedStudent.honor ? "⭐ Honor Student" : "Regular Student"}
          </p>
        </div>
      )}

      {/* ADD STUDENT */}
      <form onSubmit={handleAddStudent} style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: "8px", margin: "5px" }}
        />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
          style={{ padding: "8px", margin: "5px" }}
        />

        <input
          type="text"
          placeholder="Year (e.g. Year 1)"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
          style={{ padding: "8px", margin: "5px" }}
        />

        <label style={{ margin: "5px" }}>
          Honor
          <input
            type="checkbox"
            checked={honor}
            onChange={(e) => setHonor(e.target.checked)}
          />
        </label>

        <br />
        <button type="submit" style={{ marginTop: "10px" }}>
          Add Student
        </button>
      </form>

      {/* STUDENTS */}
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        flexWrap: "wrap", 
        gap: "20px",
        marginTop: "20px"
      }}>
        
        {students.map((item) => (
          <Student 
            key={item.id}
            name={item.name} 
            course={item.course}
            year={item.year}
            image={item.img}
            isHonorStudent={item.honor}
            onClick={() => handleStudentClick(item)}
          />
        ))}

      </div>
    </div>
  );
}

export default App;