import React, { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/cv-form.css";

const CVForm = () => {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState({
    school: "",
    title: "",
    date: "",
  });

  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    dateFrom: "",
    dateTo: "",
  });

  const [isEditingGeneral, setIsEditingGeneral] = useState(true);
  const [isEditingEducation, setIsEditingEducation] = useState(true);
  const [isEditingExperience, setIsEditingExperience] = useState(true);

  const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGeneralInfo({ ...generalInfo, [e.target.name]: e.target.value });
  };

  const handleEducationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  const handleExperienceChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  return (
    <div className="cv-form">
      <GeneralInfo
        info={generalInfo}
        handleChange={handleGeneralChange}
        isEditing={isEditingGeneral}
        toggleEdit={() => setIsEditingGeneral(!isEditingGeneral)}
      />
      <Education
        education={education}
        handleChange={handleEducationChange}
        isEditing={isEditingEducation}
        toggleEdit={() => setIsEditingEducation(!isEditingEducation)}
      />
      <Experience
        experience={experience}
        handleChange={handleExperienceChange}
        isEditing={isEditingExperience}
        toggleEdit={() => setIsEditingExperience(!isEditingExperience)}
      />
    </div>
  );
};

export default CVForm;
