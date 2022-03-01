import React from "react";
import { useDispatch } from "react-redux";

import { deleteReservation } from "../../store/restaurant/actions";

export default function ReservationCard(props) {
  const dispatch = useDispatch();

  function cancelHandler(reservationId) {
    let answer = window.confirm(
      "Are you sure you wish to cancel the reservation?"
    );
    if (!answer) return;
    dispatch(deleteReservation(reservationId));
  }

  return (
    <div className="Reservation-card">
      <p>Date: {props.date}</p>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>ID: {props.tableId}</p>
      <button onClick={() => cancelHandler(props.reservationId)}>Cancel</button>
      <hr />
    </div>
  );
}
