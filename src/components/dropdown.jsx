import React from 'react';

const Dropdown = ({ label, options, id, handleFormChange }) => {
    return (
        <div className='dropdown'>
            <label>{label}</label><br/>
                <select className="dropdown-list" autoComplete='country-name' id={id}
                    onChange={handleFormChange}
                    required>
                    {options.map((option) => (
                        <option value={option.value} key={option.abbreviation}>{option.name}</option>
                    ))}
                </select>
        </div>
    );
  };
  
  export default Dropdown;