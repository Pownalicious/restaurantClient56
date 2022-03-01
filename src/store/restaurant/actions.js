import axios from "axios";
import { showMessageWithTimeout } from "../appState/actions";
import { selectToken, selectUser } from "../user/selectors";

export const setTables = (data) => ({
  type: "SET/tables",
  payload: data,
});

export const getReservation = (data) => ({
  type: "GET/reservations",
  payload: data,
});

export const setReservations = (data) => ({
  type: "SET/reservations",
  payload: data,
});

const deleteReservationSucces = (reservationId) => {
  return {
    type: "DELETE/reservation",
    payload: reservationId,
  };
};

export const getDetail = (data) => ({
  type: "GET/detail",
  payload: data,
});

//SHOW AVAILIBLE TABLES
export function createReservation(tableId, date) {
  return async function thunk(dispatch, getState) {
    const { token } = selectUser(getState());
    const response = await axios.post(
      `http://localhost:4000/reservations`,
      {
        date,
        tableId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.data.success) {
      dispatch(
        showMessageWithTimeout("success", false, "Reservation created!", 2500)
      );
      dispatch(fetchTables());
    }
  };
}

//GET ALL RESERVATIONS
export default async function getReservations(dispatch, getState) {
  try {
    const response = await axios.get(
      `http://localhost:4000/admin/reservations`
    );
    console.log("Im getting reservation data back", response);
    dispatch(getReservation(response.data));
  } catch (error) {
    console.warn("No data");
  }
}

//GET ALL TABLES
export function fetchTables() {
  return async function thunk(dispatch) {
    const response = await axios.get(`http://localhost:4000/tables`);
    dispatch(setTables(response.data));
  };
}

//DELETE ONE RESERVATION
export const deleteReservation = (id) => {
  return async (dispatch, getState) => {
    const { token } = selectUser(getState());
    try {
      const response = await axios.delete(
        `http://localhost:4000/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Story deleted", response.data);
      dispatch(deleteReservationSucces(id));
    } catch (error) {
      console.log(error);
    }
  };
};
