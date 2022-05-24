import React from 'react';
import MemberShow from './MemberShow';

import { useContext,useState,useEffect } from 'react';
import { MemberContext } from './MembersContext';

import classes from './CompanyList.module.css';
import  Pagination  from './Pagination';

const MembersList = () => {


const {members}=useContext(MemberContext)
// console.log("member lsit")
//   console.log(members)
const [search, setSearch] = useState("");
const [filteredMembers, setFilteredMembers] = useState([]);
useEffect(() => {
  setFilteredMembers(
    members.filter((member) =>
      member.name.toLowerCase().includes(search.toLowerCase())
    )
  );
}, [search, members]);

  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage] = useState(3);
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember= indexOfLastMember - membersPerPage;
  const currentMembers = filteredMembers.slice(indexOfFirstMember, indexOfLastMember);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  
  return (
    <div>
    <div>
    <input
    type="text"
    placeholder="Search Members"
    onChange={(e) => setSearch(e.target.value)}
  />
    </div>
  
   <MemberShow members={currentMembers}/>
  <Pagination membersPerPage={membersPerPage} totalMembers={filteredMembers.length} paginate={paginate}/>
    </div>
  
    
  );
};

export default MembersList;
