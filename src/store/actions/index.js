import axios from "axios";

export const getPlanets = () => {
  return dispatch => {
    dispatch(getPlanetsStarted());

    axios
      .get("https://swapi.dev/api/planets/")
      .then(res => {
        dispatch(getPlanetsSuccess(res.data));
      })
      .catch(err => {
        dispatch(getPlanetsFailure(err.message));
      });
  };
};

const getPlanetsSuccess = planets => ({
  type: 'GET_PLANETS_SUCCESS',
  payload: {
    ...planets
  }
});

const getPlanetsStarted = () => ({
  type: 'GET_PLANETS_STARTED'
});

const getPlanetsFailure = error => ({
  type: 'GET_PLANETS_FAILURE',
  payload: {
    error
  }
});
