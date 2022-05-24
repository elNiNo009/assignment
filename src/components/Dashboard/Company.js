import React from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

import classes from "./Company.module.css";

const Company = (props) => {
 // console.log(props);

//  async function onDeleteHandler(company) {
//   const response = await fetch("http://localhost:3000/companyAdd", {
//     method: "POST",
//     body: JSON.stringify(company),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await response.json();

//   setCompanies((prevCompanies) => {
//     return [company, ...prevCompanies];
//   });
//   //console.log("check");
//   //console.log(data);
//   //
// }

// async function onEditHandler(company) {
//   const response = await fetch("http://localhost:3000/companyAdd", {
//     method: "POST",
//     body: JSON.stringify(company),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await response.json();

//   setCompanies((prevCompanies) => {
//     return [company, ...prevCompanies];
//   });
//   //console.log("check");
//   //console.log(data);
//   //
// }

  return (
    <div className={classes.company}>
      <Link to={"/companyRecords/"+props.myKey} >
        <li>
          <h2>{props.name}</h2>
          <h3>{props.createdDate}</h3>
        </li>
      </Link>

      <div>
        <button >Edit</button>
        <button >Delete</button>
      </div>
    </div>

    //ss
  );
};

export default Company;
