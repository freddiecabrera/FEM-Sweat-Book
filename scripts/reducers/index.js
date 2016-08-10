import { combineReducers } from 'redux'
import Exercises from './Exercises'
import Categories from './Categories'
import UserInteraction from './UserInteraction'


const Reducers = combineReducers({
  Exercises,
  Categories,
  UserInteraction
})

export default Reducers
