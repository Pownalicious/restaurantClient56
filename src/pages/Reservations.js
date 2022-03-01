import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectReservations } from "../store/restaurant/selectors";
import getReservations from "../store/restaurant/actions";
import TableCardTwo from "../components/ReservationCard/TableCardTwo";

export default function Reservations() {
  const dispatch = useDispatch();
  const reservation = useSelector(selectReservations);

  useEffect(() => {
    dispatch(getReservations);
  }, []);

  reservation.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
  return (
    <div>
      <div className="Reservation-list">
        {reservation.map((table, index) => {
          return (
            <TableCardTwo
              key={index}
              id={table.id}
              date={table.date}
              name={table.user.name}
              email={table.user.email}
              tableId={table.reservationId}
            />
          );
        })}
      </div>
    </div>
  );
}
