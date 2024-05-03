import React, { useState } from 'react';

export const Form = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    setErrors({ ...errors, firstName: '' });
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setErrors({ ...errors, lastName: '' }); 
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrors({ ...errors, email: '' });
  };

  const validateForm = () => {
    const errors = {};

    if (firstName === '') {
      errors.firstName = 'First name is required';
    }

    if (lastName === '') {
      errors.lastName = 'Last name is required';
    }

    if (lastName === '') {
      errors.email = 'Email Address is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setErrors({});
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Form submitted successfully');
      clearForm(); 
      props.dismissForm();
    }
  };

  return (
    <>
      <div className="modal">
        <p>Did you complete this task?</p>
        <div className="container">
          <label className="form-label">First Name: </label>
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
          <hr></hr>
          <label className="form-label">Last Name: </label>
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
          <hr></hr>
          <label className="form-label">Email: </label>
          <input type="email" value={email} onChange={handleEmailChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <hr></hr>
        <button onClick={clearForm} className="btn">
          Clear
        </button>
        <button onClick={() => props.dismissForm()}className="btn btn-highlight">Cancel</button>
        <button onClick={handleSubmit} className="btn">Submit</button>
      </div>
      <div onClick={props.dismissForm} className="backdrop"></div>
    </>
  );
};