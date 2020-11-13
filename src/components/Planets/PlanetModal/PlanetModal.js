import React from "react";
import './PlanetModal.css';
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import Grid from "../../Grid";

function PlanetModal(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    props.onClose();
    alert(`The ${data.name} planet was created`);
  };

  return (
    <div className='modalContainer'>
      <div className='modalBackground' onClick={props.onClose} />
      <div className='modalContent'>
        <h2>New Planet</h2>
        <form className='formContent' onSubmit={handleSubmit(onSubmit)}>
          <div className='inputWrapper'>
            <label>Name:
              <input type='text' name="name" ref={register({ required: true })} />
            </label>
            {errors.name && <span>This field is required</span>}
          </div>
          <div className='inputWrapper'>
            <label>Rotation period:
              <input type='number' name="rotationPeriod" ref={register({ required: true })} />
            </label>
            {errors.rotationPeriod && <span>This field is required</span>}
          </div>
          <div className='inputWrapper'>
            <label>Orbital period:
              <input type='number' name="orbitalPeriod" ref={register({ required: true })} />
            </label>
            {errors.orbitalPeriod && <span>This field is required</span>}
          </div>
          <div className='inputWrapper'>
            <label>Diameter:
              <input type='number' name="diameter" ref={register({ required: true })} />
            </label>
            {errors.diameter && <span>This field is required</span>}
          </div>
          <div className='inputWrapper'>
            <label>Climate:
              <input type='text' name="climate" ref={register({ required: true })} />
            </label>
            {errors.climate && <span>This field is required</span>}
          </div>
          <div className='inputWrapper'>
            <label>Gravity:
              <input type='text' name="gravity" ref={register({ required: true })} />
            </label>
            {errors.gravity && <span>This field is required</span>}
          </div>
          <div className='inputWrapper'>
            <label>Terrain:
              <select className='select' name='terrain'>
                <option value="scrublands">Scrublands</option>
                <option value="savanna">Savanna</option>
                <option defaultValue="canyons">Canyons</option>
                <option value="sinkholes">Sinkholes</option>
              </select>
            </label>
            {errors.terrain && <span>This field is required</span>}
          </div>
          <div className='inputWrapper'>
            <label>Surface water:
              <input type='number' name="surfaceWater" ref={register({ required: true })} />
            </label>
            {errors.surfaceWater && <span>This field is required</span>}
          </div>
          <input type="submit" className='submitBtn'/>
        </form>
      </div>
    </div>
  )
}

Grid.propTypes = {
  onClose: PropTypes.func
};

export default PlanetModal
