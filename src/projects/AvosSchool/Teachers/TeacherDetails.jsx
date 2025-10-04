import React from "react";
import { useParams } from "react-router";
import { teachers } from "../../../data/teachers";

const TeacherDetails = () => {
  const { teacherId } = useParams();
  const teacher = teachers.find(
    (t) => t.name.replace(/\s+/g, "-").toLowerCase() === teacherId
  );

  if (!teacher) {
    return <div style={{textAlign: 'center', marginTop: '2rem'}}>Teacher not found.</div>;
  }

  return (
    <div className="teacher-details" style={{maxWidth: 500, margin: '2rem auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '2rem', color: '#222'}}>
      <div style={{width: 180, height: 180, margin: '0 auto 1rem auto', borderRadius: '50%', overflow: 'hidden'}}>
        <img src={teacher.img} alt={teacher.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      </div>
      <h2 style={{marginBottom: '0.5rem'}}>{teacher.name}</h2>
      <h4 style={{color: '#3b82f6', marginBottom: '1.5rem'}}>{teacher.skills.subject}</h4>
      <div style={{marginBottom: '1rem'}}>
        <strong>Experience:</strong> {teacher.skills.experience}<br/>
        <strong>At Avos School:</strong> {teacher.skills.atAvosSchool}
      </div>
      <div style={{marginTop: '1rem', color: '#444'}}>{teacher.description}</div>
    </div>
  );
};

export default TeacherDetails;
