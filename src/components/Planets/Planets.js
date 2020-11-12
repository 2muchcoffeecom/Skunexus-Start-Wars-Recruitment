import './Planets.css';
import React, { useState, useEffect } from "react";
import axios from "axios";

import Grid from '../Grid';
import {getFilms, getPlanets} from "../../store/actions";
import {useDispatch, useSelector} from "react-redux";

function Planets() {
  const content = useSelector(state => state);
  const dispatch = useDispatch();


  const showFilms = (films) => {
    dispatch(getFilms(films));

    const data = {
      header: [
        'title',
        'episode_id',
        'opening_crawl',
        'director',
        'producer',
        'release_date'
      ],
    }
  }

  useEffect(() => {
    dispatch(getPlanets());
  }, []);

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
    values: content.planets,
    actions: [
      {
        label: 'Go to Films',
        // action: (row) => { console.log(`redirect to grid with ${row.films.length} Films`)}
        action: (row) => { showFilms(row.films)}
      },
      {
        label: 'Go to Residents',
        action: (row) => { console.log(`redirect to grid with ${row.residents.length} Residents`)}
      }
    ]
  }

  return (
    <div className='App'>
      <Grid data={data} />
    </div>
  );
}

export default Planets;
