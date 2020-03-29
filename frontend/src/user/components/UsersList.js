import React from "react";

import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

import "./UsersList.css";

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <Card>
        <h2 className="center">هیچ کاربری در سیستم پیدا نشد</h2>
      </Card>
    );
  }
  return (
    <ul className="users-list">
      {props.items.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          placesCount={user.placesCount}
        />
      ))}
    </ul>
  );
};

export default UsersList;
