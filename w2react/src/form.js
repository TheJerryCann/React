import React, { useState } from 'react';

export const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  //                           #1
  const handleEmailChange = (event) => {
    //  #2           #3
    setEmail(event.target.value);
  };

  return (
        <>
            <label className="form-label">First Name</label>
            <input
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
            />
            <label className="form-label">Last Name</label>
            <input
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
            />
            <label className="form-label">Email</label>
            <input type="email" value={email} onChange={handleEmailChange} />
        </>
  );
};

export const Modal = (props) => {

    return (
        <>
            <div className="modal">
                <p>Did you complete this task?</p>
                <button onClick={() => props.dismissModal()}className="btn btn-highlight">Cancel</button>
                <button onClick={() => props.dismissModal()}className="btn">Confirm</button>
            </div>
            <div onClick={() => props.dismissModal()}className="backdrop"></div>
        </>
    );
};