const initialState = {
  loading: false,
  planets: [],
  error: null
};

export default function planets(state = initialState, action) {
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
        planets: [...state.planets, ...action.payload.results]
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
