import React from 'react';
import Members from './Members';


import classes from './CompanyList.module.css';

const MembersList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.members.map((member) => (
        <Members
          key={member.id}
          name={member.name}
          createdDate={member.createdDate}
         
        />
      ))}
    </ul>
  );
};

export default MembersList;
