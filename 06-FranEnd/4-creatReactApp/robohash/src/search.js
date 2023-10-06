import React from 'react';

export default function SearchComponent({ handleChange }) {
  const handleInputChange = (e) => {
    handleChange(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={handleInputChange}
      />
    </div>
  );
}
