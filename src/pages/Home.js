import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TableCard from "../components/TableCard/TableCard";

import { fetchTables } from "../store/restaurant/actions";
import { selectTables } from "../store/restaurant/selectors";

export default function HomePage() {
  const todayUnformatted = new Date().toLocaleDateString("nl-NL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const [day, month, year] = todayUnformatted.split("-");
  const today = [year, month, day].join("-");
  const tables = useSelector(selectTables);
  const [date, setDate] = useState(today);
  const dispatch = useDispatch();

  function dateOnchangeHandler(ev) {
    let nextDate = ev.target.value;
    setDate(nextDate);
    dispatch(fetchTables());
  }

  return (
    <div className="home-wrapper">
      <div className="reservation-field">
        <hr />
        <label htmlFor="start">Make a reservation </label> <br />
        <input
          type="date"
          name="reservation"
          value={date}
          min={today}
          max="2030-12-31"
          onChange={dateOnchangeHandler}
        />
      </div>
      <div className="Table-list">
        {date &&
          tables.map((table, index) => {
            let nextTable = checkReservation(table, date);
            return (
              <TableCard
                key={index}
                seats={nextTable.seats}
                id={nextTable.id}
                isReserved={nextTable.isReserved}
                selectedDate={date}
              />
            );
          })}
      </div>
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
