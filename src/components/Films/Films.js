import './Films.css';
import React from "react";

import Grid from '../Grid';
import { useSelector } from "react-redux";

function Films() {
  const filmsContent = useSelector(state => state.films);


  const data = {
    header: [
      'title',
      'episode_id',
      'opening_crawl',
      'director',
      'producer',
      'release_date'
    ],
    values: filmsContent.films,
  };

  return (
    <div className='App'>
      <h1>Star Wars Films</h1>
      <Grid data={data} />
    </div>
  );
}

export default Films;
