import React from "react";
import { useSelector, useDispatch } from "react-redux";
import UserCard from "../components/UserCard/UserCard";
import { toggleBlocked } from "../store/restaurant/actions";
import { selectUser } from "../store/user/selectors";

export default function Users() {
  const users = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        <li>
          {Object.keys(users).map((user, index) => {
            return <UserCard key={index} name={user.name} email={user.email} />;
          })}
          <button onClick={() => dispatch(toggleBlocked(users.id))}>
            {users.accountBlocked.includes(users.id) ? "Blck" : "unBlock"}
          </button>
        </li>
      </ul>
    </div>
  );
}
