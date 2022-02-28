import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TableCard from "../components/TableCard";

import { fetchTables, fetchReservations } from "../store/restaurant/actions";
import {
  selectReservations,
  selectTables,
} from "../store/restaurant/selectors";

export default function HomePage() {
  const today = new Date();
  const reservation = useSelector(selectReservations);
  const tables = useSelector(selectTables);
  const [date, setDate] = useState(today);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchTables());
  // }, [dispatch]);

  function dateOnchangeHandler(ev) {
    let nextDate = ev.target.value;
    setDate(nextDate);
    dispatch(fetchTables());
    // dispatch(fetchReservations(nextDate));
  }

  return (
    <div className="home-wrapper">
      HomePage
      <div className="reservation-field">
        <label htmlFor="start">Make a reservation:</label>
        <input
          type="date"
          name="reservation"
          value={date}
          min={today}
          max="2030-12-31"
          onChange={dateOnchangeHandler}
        />
      </div>
      {tables.map((table, index) => {
        let nextTable = checkReservation(table, date);
        return (
          <TableCard
            key={index}
            seats={nextTable.seats}
            id={nextTable.id}
            isReserved={nextTable.isReserved}
          />
        );
      })}
    </div>
  );
}

function checkReservation(table, reservationDate) {
  let isReserved = false;

  table.reservations.forEach((reservation) => {
    if (reservation.date === reservationDate) {
      isReserved = true;
    }
  });

  table.isReserved = isReserved;

  return table;
}
