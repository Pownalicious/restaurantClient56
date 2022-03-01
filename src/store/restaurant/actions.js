import axios from "axios";
import { showMessageWithTimeout } from "../appState/actions";
import { selectToken, selectUser } from "../user/selectors";

export const setTables = (data) => ({
  type: "SET/tables",
  payload: data,
});

export const setReservations = (data) => ({
  type: "SET/reservations",
  payload: data,
});

//DELETE RESERVATION
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
export function getReservations() {
  return async function thunk(dispatch, getState) {
    try {
      const { token } = selectUser(getState());
      const response = await axios.get(
        `http://localhost:4000/admin/reservations`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Im getting reservation data back", response);
      dispatch(setReservations(response.data));
    } catch (error) {
      console.warn("No data");
    }
  };
}

//GET ALL TABLES
export function fetchTables() {
  return async function thunk(dispatch) {
    const response = await axios.get(`http://localhost:4000/tables`);
    dispatch(setTables(response.data));
  };
}

//DELETE ONE RESERVATION

export function deleteReservation(id) {
  return async function thunk(dispatch, getState) {
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

      if (response.data.success) {
        console.log("Reservation deleted", response);
        dispatch(getReservations());
      }
    } catch (error) {
      console.log(error);
    }
  };
}
