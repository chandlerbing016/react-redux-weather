import { combineReducers } from 'redux';
import WeatherReducer from './reducer_wheather';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
