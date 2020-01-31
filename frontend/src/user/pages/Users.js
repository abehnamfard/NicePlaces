import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "user1",
      name: "Ali Behnamfard",
      image: "https://via.placeholder.com/150",
      placesCount: 13
    },
    {
      id: "user2",
      name: "Sepide Sharafi",
      image: "https://via.placeholder.com/150",
      placesCount: 12
    }
  ];
  return <UsersList items={USERS} />;
};

export default Users;
