import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AddUserFrom = (props) => {
  const initialFormState = {
    id: null,
    username: "",
    email: "",
    experience: "",
    level: "",
  };
  const [user, setUser] = useState(initialFormState);
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
      <Form.Group className="mb-3">
        <Form.Label>Experience</Form.Label>
        <Form.Select
          type="text"
          placeholder="Enter Experience"
          name="experience"
          value={user.experience}
          onChange={handleInputChange}>
          <option> </option>
          <option>Novice</option>
          <option>Apprentice </option>
          <option>Adept</option>
          <option>Expert</option>
          <option>Master</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Level</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Level"
          name="level"
          value={user.level}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button
        onClick={(event) => {
          event.preventDefault();
          if (!user.username || !user.email || !user.experience || !user.level)
            return;
          props.addUser(user);
          setUser(initialFormState);
        }}>
        Add New Player
      </Button>
    </Form>
  );
};

export default AddUserFrom;
