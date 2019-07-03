import { Alert } from 'react-native';

export const getWeather = (lat, long) =>
  fetch('http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + long + '&appid=a6b7a5c3b9d4359ecccc7e69759ea8e9', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })
    .then(response => response.json(),
      (e) =>
        Alert.alert(
          '',
          'Network error',
          [
            { text: 'OK', onPress: () => console.log(e.message) }
          ],
          { cancelable: true }
        ))
    .then(responseJson => responseJson);

export const getCurrentWeather = (lat, long) =>
  fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=a6b7a5c3b9d4359ecccc7e69759ea8e9', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })
    .then(response => response.json(),
      (e) =>
        Alert.alert(
          '',
          'Network error',
          [
            { text: 'OK', onPress: () => console.log(e.message) }
          ],
          { cancelable: true }
        ))
    .then(responseJson => responseJson);