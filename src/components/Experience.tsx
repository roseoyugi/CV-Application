import React, { useState } from "react";
import "../styles/experience.css";

interface ExperienceProps {
  experience: {
    company: string;
    position: string;
    responsibilities: string;
    dateFrom: string;
    dateTo: string;
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isEditing: boolean;
  toggleEdit: () => void;
}

const Experience: React.FC<ExperienceProps> = ({
  experience,
  handleChange,
  isEditing,
  toggleEdit,
}) => {
  return (
    <div className="experience">
      <h2>Experience</h2>
      {isEditing ? (
        <form>
          <label>Company:</label>
          <input
            type="text"
            name="company"
            value={experience.company}
            onChange={handleChange}
          />
          <label>Position Title:</label>
          <input
            type="text"
            name="position"
            value={experience.position}
            onChange={handleChange}
          />
          <label>Main Responsibilities:</label>
          <textarea
            name="responsibilities"
            value={experience.responsibilities}
            onChange={handleChange}
          />
          <label>Date From:</label>
          <input
            type="text"
            name="dateFrom"
            value={experience.dateFrom}
            onChange={handleChange}
          />
          <label>Date To:</label>
          <input
            type="text"
            name="dateTo"
            value={experience.dateTo}
            onChange={handleChange}
          />
          <button type="button" onClick={toggleEdit}>
            Submit
          </button>
        </form>
      ) : (
        <div>
          <p>Company: {experience.company}</p>
          <p>Position Title: {experience.position}</p>
          <p>Main Responsibilities: {experience.responsibilities}</p>
          <p>Date From: {experience.dateFrom}</p>
          <p>Date To: {experience.dateTo}</p>
          <button type="button" onClick={toggleEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default Experience;
