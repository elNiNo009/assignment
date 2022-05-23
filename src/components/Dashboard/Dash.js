import React, { useState, useEffect, useCallback } from "react";

import CompanyList from "./CompanyList";
import AddCompany from "./AddCompany";

import "./App.css";

function Dash() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCompaniesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:3000/companyRecord");

     // console.log(response);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedCompanies = [];

      for (const key in data) {
        loadedCompanies.push({
          id: data[key]._id,
          name: data[key].name,

          createddate: data[key].createddate,
        });
      }

      setCompanies(loadedCompanies);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCompaniesHandler();
  }, [fetchCompaniesHandler]);

  async function addCompanyHandler(company) {
    const response = await fetch("http://localhost:3000/companyAdd", {
      method: "POST",
      body: JSON.stringify(company),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    setCompanies((prevCompanies) => {
      return [company, ...prevCompanies];
    });
    //console.log("check");
    //console.log(data);
    //
  }

  let content = <p>Found Companies in List</p>;
  console.log("dash")
   console.log(companies)
  if (companies.length > 0) {
    content = <CompanyList items={companies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddCompany onAddCompany={addCompanyHandler} />
      </section>

      <div>{fetchCompaniesHandler}</div>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default Dash;
