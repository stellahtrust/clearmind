// src/components/students.jsx
function Student({ name, image, borderColor, isHonorStudent, onClick }) {
  return (
    <div 
      onClick={() => onClick(name)}
      style={{
        border: `4px solid ${borderColor}`,
        borderRadius: "15px",
        padding: "20px",
        margin: "10px",
        textAlign: "center",
        width: "200px",
        backgroundColor: "#2c2b21",
        cursor: "pointer"
      }}
    >
      <img src={image} alt={name} style={{ width: "100px", borderRadius: "50%" }} />
      
      <h3>
        {name} {isHonorStudent && "⭐"} 
      </h3>

      <p style={{ color: borderColor }}>Active Member</p>
    </div>
  );
}

export default Student;