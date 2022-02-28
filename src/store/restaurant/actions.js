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

export const getDetail = (data) => ({
  type: "GET/detail",
  payload: data,
});

export function fetchTables() {
  return async function thunk(dispatch) {
    const response = await axios.get(`http://localhost:4000/tables`);
    dispatch(setTables(response.data));
  };
}

export function createReservation(userId, tableId, date) {
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

export function fetchReservations(nextDate) {
  return async function thunk(dispatch) {
    const response = await axios.post(`http://localhost:4000/reservations`, {
      nextDate,
    });
    dispatch(setReservations(response.data));
  };
}

// export async function fetchPost(dispatch, getState) {
//   try {
//     const response = await axios.get("http://localhost:4000/reservations");
//     dispatch(getReservation(response.data));
//   } catch (error) {
//     console.log("No data");
//   }
// }

// export function fetchDetailPost(id) {
//   return async function thunk(dispatch, getState) {
//     const response = await axios.get(`http://localhost:4000/spaces/${id}`);
//     dispatch(getDetail(response.data));
//   };
// }
