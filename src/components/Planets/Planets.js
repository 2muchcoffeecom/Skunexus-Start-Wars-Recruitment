import './Planets.css';
import React, { useEffect, useState } from "react";

import Grid from '../Grid';
import PlanetModal from "./PlanetModal";
import {getFilms, getPlanets, getResidents} from "../../store/actions";
import {useDispatch, useSelector} from "react-redux";


function Planets() {
  const [modalVisible, changeModalVisible] = useState(false);
  const planetsContent = useSelector(state => state.planets);
  const dispatch = useDispatch();
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    if (planetsContent.next) {
      dispatch(getPlanets(planetsContent.next));
    }
  };

  useEffect(() => {
    dispatch(getPlanets());
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [planetsContent]);

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
    ],
    customColumns: true,
    isActionDisplay: true,
  };

  return (
    <div className='App'>
      <div className='title'>
        <h1>Star Wars Planets</h1>
        <button onClick={() => changeModalVisible(true)}>Create Planet</button>
      </div>
      {modalVisible && <PlanetModal
        onClose={() => changeModalVisible(false)}
      />}
      <Grid data={data} />
    </div>
  );
}

export default Planets;
