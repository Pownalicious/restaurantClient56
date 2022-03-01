import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createReservation } from "../../store/restaurant/actions";
import { selectToken, selectUser } from "../../store/user/selectors";
import "./TableCard.css";

export default function ReservationCard(props) {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div
      className={
        (props.isReserved ? "is-reserved red " : "green ") + "TableCard"
      }
    >
      <p>Seats: {props.seats}</p>
      <p>Table: {props.id}</p>
      {!props.isReserved &&
        (token ? (
          <button
            onClick={() =>
              dispatch(createReservation(user.id, props.id, props.selectedDate))
            }
          >
            Reserve table
          </button>
        ) : (
          <Link to="/login" style={{ color: "black" }}>
            Login to reserve
          </Link>
        ))}
    </div>
  );
}
