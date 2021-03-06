import React from "react";

import classes from "./Company.module.css";
import { MemberContext } from "./MembersContext";
import { useContext, useEffect } from "react";
import { Modal, Button} from "react-bootstrap";
import { useState } from "react";
import EditMember from "./EditMember";


const Members = (props) => {
  // console.log(props)
  const { deleteMemberHandler } = useContext(MemberContext);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [props]);
  return (
    <div className={classes.company}>
      <li>
        <h2>{props.membername}</h2>
        <h3>{props.membercreatedDate}</h3>
      </li>
      <div>
        <button onClick={handleShow} data-toggle="modal">
          Edit
        </button>
        <button onClick={() => deleteMemberHandler(props.memberkey)}>
          Delete
        </button>
      </div>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditMember member={props} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close Button
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Members;
