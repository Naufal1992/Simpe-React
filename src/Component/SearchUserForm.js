import React from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useState } from "react";

const SearchUserForm = (props) => {
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
          placeholder="Search Username"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>E-Mail</Form.Label>
        <Form.Control
          type="text"
          placeholder="Search E-mail"
          name="email"
          value={user.email}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Experience</Form.Label>
        <Form.Select
          type="text"
          placeholder="Search Experience"
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
          placeholder="Search Level"
          name="level"
          value={user.level}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button
        onClick={() => {
          props.filterHandler(user);
        }}>
        Search
      </Button>
    </Form>
  );
};
export default SearchUserForm;
