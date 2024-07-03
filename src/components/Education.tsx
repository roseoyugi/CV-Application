import React, { useState } from "react";
import "../styles/education.css";

interface EducationProps {
  education: {
    school: string;
    title: string;
    date: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isEditing: boolean;
  toggleEdit: () => void;
}

const Education: React.FC<EducationProps> = ({
  education,
  handleChange,
  isEditing,
  toggleEdit,
}) => {
  return (
    <div className="education">
      <h2>Education</h2>
      {isEditing ? (
        <form>
          <label>School:</label>
          <input
            type="text"
            name="school"
            value={education.school}
            onChange={handleChange}
          />
          <label>Title of Study:</label>
          <input
            type="text"
            name="title"
            value={education.title}
            onChange={handleChange}
          />
          <label>Date of Study:</label>
          <input
            type="text"
            name="date"
            value={education.date}
            onChange={handleChange}
          />
          <button type="button" onClick={toggleEdit}>
            Submit
          </button>
        </form>
      ) : (
        <div>
          <p>School: {education.school}</p>
          <p>Title of Study: {education.title}</p>
          <p>Date of Study: {education.date}</p>
          <button type="button" onClick={toggleEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default Education;
