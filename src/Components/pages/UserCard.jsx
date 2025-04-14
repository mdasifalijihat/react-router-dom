import React from "react";
import { Link } from "react-router";

const UserCard = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div className="border rounded-2xl p-4 space-y-2">
      <div>
        <h2 className="text-2xl font-bold"> Name: {name} </h2>
        <p className="text-red-500 font-bold text-xl"> Email: {email} </p>
        <p> Phone: {phone} </p>
      </div>
      <div>
        <Link to={`/users/${id}`}>show details </Link>
      </div>
    </div>
  );
};

export default UserCard;
