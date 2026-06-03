import React from "react";
import useFetchData from "./useFetchData";
import "./TaskFourteen.css";

export default function TaskFourteen() {
  const {
    data: users,
    loading,
    error,
  } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) {
    return <h1 className="status-msg">Loading Users...</h1>;
  }

  if (error) {
    return <h1 className="status-msg error">{error}</h1>;
  }

  return (
    <div className="task14-container">
      <div className="table-box">
        <h1 className="main-title">Team Directory</h1>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>@{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}