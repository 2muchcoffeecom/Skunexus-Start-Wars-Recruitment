import './Residents.css';
import React from "react";

import Grid from '../Grid';
import { useSelector } from "react-redux";

function Residents() {
  const residentsContent = useSelector(state => state.residents);


  const data = {
    header: [
      'name',
      'height',
      'mass',
      'hair_color',
      'skin_color',
      'eye_color',
      'birth_year',
      'gender',
],
    values: residentsContent.residents,
  };

  return (
    <div className='App'>
      <h1>Star Wars Residents</h1>
      <Grid data={data} />
    </div>
  );
}

export default Residents;
