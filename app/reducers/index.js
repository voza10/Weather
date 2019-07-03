import {
  SAVE_WEATHER,
  SAVE_CURRENT_WEATHER
} from '../actions/Weather';

const initialState = {
  weather: null,
  currentWeather: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_WEATHER:
      return {
        ...state,
        weather: action.response,
      };
    case SAVE_CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: action.response,
      };
    default:
      return state;
  }
};

export default reducer;