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

  return (
    <div>
      <div className="Reservation-list">
        {reservations.length === 0 ? (
          <p>no reservations found</p>
        ) : (
          reservations.map((reservation, index) => {
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
          })
        )}
      </div>
    </div>
  );
}
