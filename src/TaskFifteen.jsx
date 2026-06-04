import React, { useEffect, useState } from "react";
import "./TaskFifteen.css";

export default function TaskFifteen() {
  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      setUsers(data.slice(0, 8));
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async () => {
    if (name === "" || email === "") {
      alert("Fill all fields");
      return;
    }

    const newUser = {
      name,
      email,
    };

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(newUser),
        }
      );

      const data = await response.json();

      setUsers([
        ...users,
        {
          ...data,
          id: users.length + 1,
        },
      ]);

      setName("");
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method: "DELETE",
        }
      );

      const filteredUsers = users.filter(
        (user) => user.id !== id
      );

      setUsers(filteredUsers);
    } catch (error) {
      console.log(error);
    }
  };

  const editUser = (user) => {
    setName(user.name);

    setEmail(user.email);

    setEditId(user.id);
  };

  const updateUser = async () => {
    try {
      const updatedUser = {
        name,
        email,
      };

      await fetch(
        `https://jsonplaceholder.typicode.com/users/${editId}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(updatedUser),
        }
      );

      const updatedData = users.map((user) =>
        user.id === editId
          ? { ...user, name, email }
          : user
      );

      setUsers(updatedData);

      setName("");
      setEmail("");

      setEditId(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="crud-container">
      <div className="crud-box">
        <h1 className="crud-title">
          Mini User Manager
        </h1>

        <div className="form-box">
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          {editId ? (
            <button
              className="update-btn"
              onClick={updateUser}
            >
              Update
            </button>
          ) : (
            <button
              className="add-btn"
              onClick={addUser}
            >
              Add
            </button>
          )}
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>

                  <td>{user.email}</td>

                  <td className="action-btns">
                    <button
                      className="edit-btn"
                      onClick={() =>
                        editUser(user)
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteUser(user.id)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}