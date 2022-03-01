import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserCard from "../components/UserCard/UserCard";
import { getUsers, toggleUserBlock } from "../store/user/actions";
import { selectUsers } from "../store/user/selectors";

export default function Users() {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  // fetch the users
  useEffect(() => {
    dispatch(getUsers);
  }, [dispatch]);

  return (
    <div>
      <ul>
        {users.length === 0 ? (
          <p>No users found</p>
        ) : (
          users.map((user, index) => {
            return (
              <li key={index}>
                <UserCard key={index} name={user.name} email={user.email} />
                <button onClick={() => dispatch(toggleUserBlock(user.id))}>
                  {user.accountBlocked ? "unBlock" : "Block"}
                </button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
