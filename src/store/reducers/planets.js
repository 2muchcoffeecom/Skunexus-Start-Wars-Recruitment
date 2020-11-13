import { unionWith } from 'lodash';

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
        planets: unionWith(action.payload.results, state.planets, (a, b) => a.name === b.name),
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
