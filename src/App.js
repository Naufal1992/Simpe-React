import "./App.css";
import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserTable from "./Component/table";
import AddUserFrom from "./Component/AddUserForm";
import EditUserForm from "./Component/EditUserForm";
import SearchUserForm from "./Component/SearchUserForm";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const usersData = [
    {
      id: 1,
      username: "vocaloid",
      email: "mmd@mail.com",
      experience: "Novice",
      level: "1",
    },
    {
      id: 2,
      username: "miku",
      email: "mmd2@mail.com",
      experience: "Novice",
      level: "1",
    },
    {
      id: 3,
      username: "dark vocaloid",
      email: "iwara@tv",
      experience: "Novice",
      level: "1",
    },
  ];
  const [users, setUsers] = useState(usersData);
  const [dummy, setDummy] = useState(usersData);
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
    setDummy([...dummy, user]);
  };
  const [editing, setEditing] = useState(false);
  const initialFormState = {
    id: null,
    username: "",
    email: "",
    experience: "",
    level: "",
  };
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      username: user.username,
      email: user.email,
      experience: user.experience,
      level: user.level,
    });
  };
  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
    setDummy(dummy.map((user) => (user.id === id ? updateUser : user)));
  };

  const filterHandler = (user) => {
    if (!user.username && !user.email && !user.experience && !user.level) {
      setUsers(dummy);
      // console.log(dummy);
      return;
    }
    const newFilterPlayer = users.filter((fil) => {
      if (user.username && fil.username !== user.username) return false;
      if (user.email && fil.email !== user.email) return false;
      if (user.experience && fil.experience !== user.experience) return false;
      if (user.level && fil.level !== user.level) return false;
      return true;
    });

    setUsers(newFilterPlayer);
    console.log(newFilterPlayer);
  };

  return (
    <div>
      <Container fluid>
        <h4>LIST PEMAIN</h4>
        <Row>
          {/* table form section */}
          <Col sm={8}>
            <UserTable users={users} editRow={editRow} />
          </Col>
          {/* form input section */}
          <Col sm={4}>
            {editing ? (
              <div>
                <h4>Edit Player</h4>
                <EditUserForm
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h4>Add Player</h4>
                <AddUserFrom addUser={addUser} />
              </div>
            )}
            <br></br>
            <br></br>
            <h4>Search Player</h4>
            <SearchUserForm filterHandler={filterHandler} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
