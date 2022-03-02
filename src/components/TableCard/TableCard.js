import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createReservation } from "../../store/restaurant/actions";
import { selectToken } from "../../store/user/selectors";
import "./TableCard.css";

export default function TableCard(props) {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  return (
    <div
      className={
        (props.isReserved ? "is-reserved red " : "green ") + "TableCard"
      }
    >
      <p>Seats: {props.seats}</p>
      <p>Table: {props.tableId}</p>
      {!props.isReserved &&
        (token ? (
          <button
            onClick={() =>
              dispatch(createReservation(props.tableId, props.selectedDate))
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
