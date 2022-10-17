import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Username"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>E-Mail</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter E-mail"
          name="email"
          value={user.email}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button
        onClick={(event) => {
          event.preventDefault();
          props.updateUser(user.id, user);
        }}>
        Update Player
      </Button>{" "}
      <Button onClick={() => props.setEditing(false)}>Cencel</Button>
    </Form>
  );
};

export default EditUserForm;
