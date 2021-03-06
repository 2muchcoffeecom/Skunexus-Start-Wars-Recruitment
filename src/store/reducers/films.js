const initialState = {
  loading: false,
  films: [],
  error: null
};

export default function films(state = initialState, action) {
  switch (action.type) {
    case 'GET_FILMS_STARTED':
      return {
        ...state,
        loading: true
      };
    case 'GET_FILMS_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        films: [...action.payload]
      };
    case 'GET_FILMS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
