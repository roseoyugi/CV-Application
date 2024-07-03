import React, { useState } from "react";
import "../styles/general-info.css";

interface GeneralInfoProps {
  info: {
    name: string;
    email: string;
    phone: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isEditing: boolean;
  toggleEdit: () => void;
}

const GeneralInfo: React.FC<GeneralInfoProps> = ({
  info,
  handleChange,
  isEditing,
  toggleEdit,
}) => {
  return (
    <div className="general-info">
      <h2>General Information</h2>
      {isEditing ? (
        <form>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={info.name}
            onChange={handleChange}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={info.email}
            onChange={handleChange}
          />
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={info.phone}
            onChange={handleChange}
          />
          <button type="button" onClick={toggleEdit}>
            Submit
          </button>
        </form>
      ) : (
        <div>
          <p>Name: {info.name}</p>
          <p>Email: {info.email}</p>
          <p>Phone: {info.phone}</p>
          <button type="button" onClick={toggleEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
