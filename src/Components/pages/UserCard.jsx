import React from "react";

const UserCard = ({ user }) => {
  const { name, email, phone } = user;
  return (
    <div className="border rounded-2xl p-4 space-y-2">
      <div>
        <h2 className="text-2xl font-bold"> Name: {name} </h2>
        <p className="text-red-500 font-bold text-xl"> Email: {email} </p>
        <p> Phone: {phone} </p>
      </div>
      <div>
        <button className="btn"> show details </button> 
      </div>
    </div>
  );
};

export default UserCard;
