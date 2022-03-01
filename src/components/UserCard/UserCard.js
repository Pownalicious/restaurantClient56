import React from "react";

export default function UserCard(props) {
  return (
    <div>
      User Card
      <p>{props.name}</p>
      <p>{props.email}</p>
      <p>{props.accountBlocked}</p>
    </div>
  );
}
