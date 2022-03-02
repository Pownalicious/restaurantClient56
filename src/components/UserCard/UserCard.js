import React from "react";

export default function UserCard(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>{props.accountBlocked}</p>
    </div>
  );
}
