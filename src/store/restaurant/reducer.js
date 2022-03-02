const initialState = {
  tables: [],
  reservations: [],
  detail: null,
  users: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET/tables": {
      return {
        ...state,
        tables: action.payload,
      };
    }
    case "SET/reservations": {
      return {
        ...state,
        reservations: action.payload,
      };
    }
    case "GET/users": {
      return {
        ...state,
        users: action.payload,
      };
    }
    case "FETCH/detail": {
      return {
        ...state,
        detail: { ...action.payload },
      };
    }
    case "USER/accountBlocked": {
      const updateBlock = state.users.includes(action.payload)
        ? state.users.filter(
            (accountBlocked) => accountBlocked !== action.payload
          )
        : [...state.users, action.payload];
      return {
        ...state,
        favorites: updateBlock,
      };
    }
    default: {
      return state;
    }
  }
}
