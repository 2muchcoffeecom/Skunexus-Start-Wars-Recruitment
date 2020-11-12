import { combineReducers } from 'redux'
import films from './films'
import planets from './planets'
import residents from './residents'

export default combineReducers({
  films,
  planets,
  residents
})
