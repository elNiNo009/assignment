import React, { useParmas,useState, useEffect, useCallback, createContext } from "react";

import MemberList from "./MembersList";
import AddMember from "./AddMember";
import MemberContextProvider from "./MembersContext";
import "./App.css";
import { propTypes } from "react-bootstrap/esm/Image";
import { useParams } from "react-router-dom";

function MemberDash() {
  const params=useParams()
   console.log("Dash")
  // console.log(params.id)
  const companyId=params.id
  return (
    <div>
      <h1>Member Dashboard</h1>
      <MemberContextProvider companyId={companyId}>
        <div>
          <AddMember companyId={companyId}/>
        </div>
        <MemberList />
      </MemberContextProvider>
    </div>
  );
}

export default MemberDash;
