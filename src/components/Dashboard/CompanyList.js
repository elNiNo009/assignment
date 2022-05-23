import React from 'react';
import Company from './Company';


import classes from './CompanyList.module.css';

const CompanyList = (props) => {

  console.log("List")
  console.log(props)
  
  return (
   
   <div>
   {props.items.map((company,index) => (
    <Company
      myKey={company.id}
      key={index}
      name={company.name}
      createdDate={company.createddate}
     
    />
  ))}</div>
     
    
  );
};

export default CompanyList;
