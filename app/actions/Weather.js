export const SAVE_WEATHER = 'SAVE_WEATHER';
export const GET_WEATHER = 'GET_WEATHER';
export const SAVE_CURRENT_WEATHER = 'SAVE_CURRENT_WEATHER';
export const GET_CURRENT_WEATHER = 'GET_CURRENT_WEATHER';

export const saveWeather = (response) => ({
  type: SAVE_WEATHER,
  response
});

export const saveCurrentWeather = (response) => ({
  type: SAVE_CURRENT_WEATHER,
  response
});

export const getWeather = (lat, long) => ({
  type: GET_WEATHER,
  lat,
  long
});

export const getCurrentWeather = (lat, long) => ({
  type: GET_CURRENT_WEATHER,
  lat,
  long
});
