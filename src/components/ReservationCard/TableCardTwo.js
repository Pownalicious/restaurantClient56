import React from "react";
import { useDispatch } from "react-redux";

import { deleteReservation } from "../../store/restaurant/actions";

export default function TableCardTwo(props) {
  const dispatch = useDispatch();

  return (
    <div className="Reservation-card">
      <p>Date: {props.date}</p>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>ID: {props.tableId}</p>
      <button onClick={() => dispatch(deleteReservation(props.reservationId))}>
        Cancel
      </button>
      <hr />
    </div>
  );
}
