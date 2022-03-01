import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectReservations } from "../store/restaurant/selectors";
import { selectToken } from "../store/user/selectors";
import { getReservations } from "../store/restaurant/actions";
import ReservationCard from "../components/ReservationCard/ReservationCard";

export default function Reservations() {
  const dispatch = useDispatch();
  const reservations = useSelector(selectReservations);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(getReservations());
    }
  }, [dispatch, token]);

  reservations.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
  return (
    <div>
      <div className="Reservation-list">
        {reservations.map((reservation, index) => {
          return (
            <ReservationCard
              key={index}
              reservationId={reservation.id}
              date={reservation.date}
              name={reservation.user.name}
              email={reservation.user.email}
              tableId={reservation.tableId}
            />
          );
        })}
      </div>
    </div>
  );
}
