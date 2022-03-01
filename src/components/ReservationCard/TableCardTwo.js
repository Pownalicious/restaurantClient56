import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { deleteReservation } from "../../store/restaurant/actions";

export default function TableCardTwo(props) {
  const dispatch = useDispatch();
  const { id } = useParams();

  return (
    <div className="Reservation-card">
      <p>Date: {props.date}</p>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>ID: {props.reservationId}</p>
      <button onClick={() => dispatch(deleteReservation(props.id))}>
        Cancel
      </button>
      <hr />
    </div>
  );
}
