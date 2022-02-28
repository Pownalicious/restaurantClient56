import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectToken } from "../store/user/selectors";

export default function ReservationCard(props) {
  const token = useSelector(selectToken);

  return (
    <div className={props.isReserved ? "is-reserved red" : "green"}>
      <p>SEATS: {props.seats}</p>
      <p>ID: {props.id}</p>
      {token ? (
        <button>Reserve table</button>
      ) : (
        <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
          Login to reserve
        </Link>
      )}
    </div>
  );
}
