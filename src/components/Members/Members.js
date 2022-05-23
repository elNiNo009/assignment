import React from 'react';

import classes from './Company.module.css';

const Members = (props) => {
  return (
    <div className={classes.company}>
    <li >
      <h2>{props.name}</h2>
      <h3>{props.createdDate}</h3>
    </li>
    <div>
    <button>Edit</button>
    <button>Delete</button>
    </div>
    </div>
   
    
  );
};

export default Members;
