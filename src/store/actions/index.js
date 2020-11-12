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
        console.log(err)
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
    payload: {
      ...data
    }
  }
};
