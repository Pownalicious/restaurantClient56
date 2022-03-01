const initialState = {
  tables: [],
  reservations: [],
  detail: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET/tables": {
      return {
        ...state,
        tables: action.payload,
      };
    }
    case "GET/reservations": {
      return {
        ...state,
        reservations: action.payload,
      };
    }
    case "SET/reservations": {
      return {
        ...state,
        tables: action.payload,
      };
    }
    case "DELETE/story":
      return {
        ...state,
        reservations: state.reservations.filter((id) => action.payload !== id),
      };

    case "FETCH/detail": {
      return {
        ...state,
        detail: { ...action.payload },
      };
    }

    default: {
      return state;
    }
  }
}
