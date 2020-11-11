const initialState = {
  loading: false,
  planets: [],
  error: null
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PLANETS_STARTED':
      return {
        ...state,
        loading: true
      };
    case 'GET_PLANETS_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        planets: [...state.planets, action.payload]
      };
    case 'GET_PLANETS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
