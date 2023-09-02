import React, { useState } from 'react';

const ContactCard = (props) => {
  const [showAge, setShowAge] = useState(true);

 

  return (
    <div className="contact-card">
      <img src={props.avatarUrl} alt="profile" />

      <div className="user-details">
        <p> name : {props.name} </p>
        <p>email: {props.email} </p>
        <button onClick={() => setShowAge(!showAge)}> show age </button>
        {showAge ? <p>{props.age} </p> : null}
      </div>
    </div>
  );
};

export default ContactCard;
