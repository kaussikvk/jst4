import React from "react";
import { useSearchParams } from "react-router-dom";
import "./TaskThirteen.css";

export default function TaskThirteen() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const itemsPerPage = 5;

  const users = [
    {
      id: 1,
      name: "Kaussik",
      email: "kaussik@gmail.com",
      role: "Opener",
      location: "Salem",
    },
    {
      id: 2,
      name: "Kamal",
      email: "kamal@gmail.com",
      role: "Opener",
      location: "Bangalore",
    },
    {
      id: 3,
      name: "Nishanth",
      email: "nisha@gmail.com",
      role: "Batsman",
      location: "Hyderabad",
    },
    {
      id: 4,
      name: "Thalapathy",
      email: "Thalapathy@gmail.com",
      role: "wicket Keeper",
      location: "Mumbai",
    },
    {
      id: 5,
      name: "tvk",
      email: "tvk@gmail.com",
      role: "Opener",
      location: "Delhi",
    },
    {
      id: 6,
      name: "Ajay",
      email: "ajay@gmail.com",
      role: "Captain",
      location: "Pune",
    },
    {
      id: 7,
      name: "Suriya",
      email: "suriya@gmail.com",
      role: "All rounder",
      location: "Coimbatore",
    },
    {
      id: 8,
      name: "Vikram",
      email: "vikram@gmail.com",
      role: "Off Spinner",
      location: "Salem",
    },
    {
      id: 9,
      name: "Deepan",
      email: "deepan@gmail.com",
      role: "Leg spinner",
      location: "Madurai",
    },
    {
      id: 10,
      name: "Manoj",
      email: "manoj@gmail.com",
      role: "Pace bowler",
      location: "Trichy",
    },
    {
      id: 11,
      name: "Keerthi",
      email: "keerthi@gmail.com",
      role: "wicket Keeper",
      location: "Erode",
    },
    {
      id: 12,
      name: "Sanjay",
      email: "sanjay@gmail.com",
      role: "Opener",
      location: "Vellore",
    },
    {
      id: 13,
      name: "Maran",
      email: "maran@gmail.com",
      role: "All Rounder",
      location: "Karur",
    },
    {
      id: 14,
      name: "Harish",
      email: "harish@gmail.com",
      role: "All Rounder",
      location: "Goa",
    },
    {
      id: 15,
      name: "dhoni",
      email: "dhoni@gmail.com",
      role: "Right hand batsman",
      location: "Kochi",
    },
    {
      id: 16,
      name: "Ramesh",
      email: "ramesh@gmail.com",
      role: "Left arm Pace Bowler",
      location: "Mysore",
    },
    {
      id: 17,
      name: "Arun",
      email: "arun@gmail.com",
      role: "All Rounder",
      location: "Ooty",
    },
    {
      id: 18,
      name: "Karthik",
      email: "karthik@gmail.com",
      role: "Spin Bowler",
      location: "Namakkal",
    },
    {
      id: 19,
      name: "sachin",
      email: "sachin@gmail.com",
      role: "Pace Bowler",
      location: "Tirupur",
    },
    {
      id: 20,
      name: "Yogesh",
      email: "yogesh@gmail.com",
      role: "Pace Bowler",
      location: "Cuddalore",
    },
  ];

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const endIndex = startIndex + itemsPerPage;

  const currentUsers = users.slice(startIndex, endIndex);


  const nextPage = () => {
    if (currentPage < totalPages) {
      setSearchParams({ page: currentPage + 1 });
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setSearchParams({ page: currentPage - 1 });
    }
  };

 
  const goToPage = (page) => {
    setSearchParams({ page });
  };

  return (
    <div className="task13-container">
      <h1 className="title">Kaussik's Cricket team Player Details</h1>

      <div className="card-wrapper">
        {currentUsers.map((user) => (
          <div className="user-card" key={user.id}>
            <h2>{user.name}</h2>

            <p>
              <span>ID :</span> {user.id}
            </p>

            <p>
              <span>Email :</span> {user.email}
            </p>

            <p>
              <span>Role :</span> {user.role}
            </p>

            <p>
              <span>Location :</span> {user.location}
            </p>
          </div>
        ))}
      </div>

      <div className="pagination-box">
        <button onClick={prevPage}>Prev</button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNum) => (
            <button
              key={pageNum}
              className={currentPage === pageNum ? "active-page" : ""}
              onClick={() => goToPage(pageNum)}
            >
              {pageNum}
            </button>
          )
        )}

        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}