import React, { useRef } from 'react';

import classes from './AddCompany.module.css';

function AddCompany(props) {
  const companyName = useRef('');
 
  const founded = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...
    
    const CompanyRec = {
      name: companyName.current.value,
      
      createdDate: founded.current.value,
    };

    props.onAddCompany(CompanyRec);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Company Name</label>
        <input type='text' id='title' ref={companyName} />
      </div>
     
      <div className={classes.control}>
        <label htmlFor='date'>Founded</label>
        <input type='date' id='date' ref={founded} />
      </div>
      <button>Add Company</button>
    </form>
  );
}

export default AddCompany;
