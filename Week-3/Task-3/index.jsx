import React from "react";

const UserCard = ({ name, email }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md border max-w-sm">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
};

export default UserCard;
