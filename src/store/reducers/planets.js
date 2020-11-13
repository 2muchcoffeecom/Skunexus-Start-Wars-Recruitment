import { unionWith } from 'lodash';

const initialState = {
  loading: false,
  planets: [],
  error: null,
  next: null,
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
        next: action.payload.next,
        planets: unionWith(action.payload.results, state.planets, (a, b) => a.name === b.name).sort((a, b) => {
          if (a.name < b.name)
            return -1;
          if (a.name > b.name)
            return 1;
          return 0;
        }),
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
