import './Planets.css';
import React, { useEffect } from "react";

import Grid from '../Grid';
import {getFilms, getPlanets, getResidents} from "../../store/actions";
import {useDispatch, useSelector} from "react-redux";

function Planets() {
  const planetsContent = useSelector(state => state.planets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlanets());
  }, [dispatch]);

  const data = {
    header: [
      'name',
      'rotation_period',
      'orbital_period',
      'diameter',
      'climate',
      'gravity',
      'terrain',
      'surface_water',
      'population'
    ],
    values: planetsContent.planets,
    actions: [
      {
        link: "/films",
        label: 'Go to Films',
        action: (row) => {dispatch(getFilms(row.films))}
      },
      {
        link: "/residents",
        label: 'Go to Residents',
        action: (row) => {dispatch(getResidents(row.residents))}
      }
    ]
  }

  return (
    <div className='App'>
      <h1>Star Wars Planets</h1>
      <Grid data={data} />
    </div>
  );
}

export default Planets;
