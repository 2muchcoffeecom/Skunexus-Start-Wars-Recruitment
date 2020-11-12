const initialState = {
  loading: false,
  residents: [],
  error: null
};

export default function residents(state = initialState, action) {
  switch (action.type) {
    case 'GET_FILMS_STARTED':
      return {
        ...state,
        loading: true
      };
    case 'GET_RESIDENTS_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        residents: [...action.payload]
      };
    case 'GET_RESIDENTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
