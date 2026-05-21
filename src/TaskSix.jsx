import React, { useEffect, useState } from "react";
import "./TaskSix.css";

export default function UseEffectAPI() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>User Details</h1>
      </div>

      {loading ? (
        <h2 className="loading">Loading...</h2>
      ) : (
        <div className="card-container">
          {users.map((user) => (
            <div className="card" key={user.id}>
              <h2>{user.name}</h2>

              <p>
                <span>Email:</span> {user.email}
              </p>

              <p>
                <span>Phone:</span> {user.phone}
              </p>

              <p>
                <span>Website:</span> {user.website}
              </p>

              <p>
                <span>Company:</span> {user.company.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}