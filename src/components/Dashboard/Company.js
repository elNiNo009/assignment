import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import classes from './Company.module.css';

const Company = (props) => {
  console.log(props)
  return (
    
    <div className={classes.company}>
    <Link to="/companyRecordes/_id">
    <li >
       
      <h2>{props.name}</h2>
      <h3>{props.createdDate}</h3>
    </li>
    </Link>
    
    <div>
    <button>Edit</button>
    <button>Delete</button>
    </div>
   
    
    </div>
   
    //ss
  );
};

export default Company;
