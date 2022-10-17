import React from "react";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const UserTable = (props) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th className="text-center">No</th>
        <th className="text-center">Username</th>
        <th className="text-center">E-Mail</th>
        <th className="text-center">Experience</th>
        <th className="text-center">Level</th>
        <th className="text-center">Keterangan</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td className="text-center App-vertical-middle">{user.id}</td>
            <td className="App-vertical-middle">{user.username}</td>
            <td className="App-vertical-middle">{user.email}</td>
            <td className="text-center App-vertical-middle">
              {user.experience}
            </td>
            <td className="text-center App-vertical-middle">{user.level}</td>
            <td className="text-center App-vertical-middle">
              <Button variant="primary" onClick={()=> {
                props.editRow(user)
              }}>Edit</Button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </Table>
);
export default UserTable;
