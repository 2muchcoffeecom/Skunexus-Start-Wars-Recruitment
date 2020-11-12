import axios from "axios";

export const getPlanets = (nextPageUrl = 'https://swapi.dev/api/planets') => {
  return dispatch => {
    dispatch(getPlanetsStarted());

    axios
      .get(`${nextPageUrl}`)
      .then(res => {
        dispatch(getPlanetsSuccess(res.data));
      })
      .catch(err => {
        dispatch(getPlanetsFailure(err.message));
      })
  };
};

export const getFilms = (filmsUrl) => {
  return dispatch => {
    const requests = [];
    filmsUrl.forEach(filmUrl => {
      requests.push(axios.get(filmUrl))
    })

    axios.all(requests)
      .then(axios.spread((...args) => {
        const films = args.map(film => {
          return film.data
        })
        dispatch(getFilmsSuccess(films));
      }))
      .catch(err => {
        dispatch(getFilmsFailure(err.message));
      })
  }
};

export const getResidents = (residentsUrl) => {
  return dispatch => {
    const requests = [];
    residentsUrl.forEach(residentUrl => {
      requests.push(axios.get(residentUrl))
    })

    axios.all(requests)
      .then(axios.spread((...args) => {
        const residents = args.map(resident => {
          return resident.data
        })
        dispatch(getResidentsSuccess(residents));
      }))
      .catch(err => {
        dispatch(getResidentsFailure(err.message));
      })
  }
};

const getPlanetsSuccess = data => {
  return {
    type: 'GET_PLANETS_SUCCESS',
    payload: {
      ...data
    }
  }
};

const getPlanetsStarted = () => ({
  type: 'GET_PLANETS_STARTED'
});

const getPlanetsFailure = error => ({
  type: 'GET_PLANETS_FAILURE',
  payload: {
    error
  }
});


const getFilmsSuccess = data => {
  return {
    type: 'GET_FILMS_SUCCESS',
    payload: data
  }
};

const getFilmsFailure = error => ({
  type: 'GET_FILMS_FAILURE',
  payload: {
    error
  }
});


const getResidentsSuccess = data => {
  return {
    type: 'GET_RESIDENTS_SUCCESS',
    payload: data
  }
};

const getResidentsFailure = error => ({
  type: 'GET_RESIDENTS_FAILURE',
  payload: {
    error
  }
});
