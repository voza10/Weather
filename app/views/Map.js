import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import { Actions } from 'react-native-router-flux';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import { getCurrentWeather } from '../actions/Weather';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {

      marker: []
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.container}
          customMapStyle={mapStyle}
          initialRegion={{
            latitude: 49.5,
            longitude: 32,
            latitudeDelta: 8,
            longitudeDelta: 8,
          }}
          onLongPress={e => {
            this.setState({
              marker: [{
                lat: e.nativeEvent.coordinate.latitude,
                long: e.nativeEvent.coordinate.longitude
              }]
            });
            this.props.dispatchGetCurrentWeather(
              e.nativeEvent.coordinate.latitude,
              e.nativeEvent.coordinate.longitude
            );
          }}
        >
          {this.state.marker.map((item) => (
            <Marker
              onPress={() => {
                Actions.weather({ lat: this.state.marker[0].lat, long: this.state.marker[0].long });
              }}
              coordinate={{
                latitude: item.lat,
                longitude: item.long,
              }}
            >
              <Icon style={{ color: '#1cd8f5', fontSize: 36 }} name={'map-marker'} />
            </Marker>
          ))}
        </MapView>
        {this.props.currentWeather ?
          <TouchableOpacity
            style={styles.weatherBlock}
            onPress={() => {
              Actions.weather({
                lat: this.state.marker[0].lat,
                long: this.state.marker[0].long
              });
            }}
          >
            <Text style={{ fontSize: 22, paddingBottom: 5 }}>{this.props.currentWeather.name}</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon style={{ color: '#51adf5', fontSize: 24 }} name={'temperature-celsius'} />
                <Text>{(this.props.currentWeather.main.temp - 273.15).toFixed(1)}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 5 }}>
                <Icon style={{ color: '#51adf5', fontSize: 24 }} name={'gauge'} />
                <Text>{(this.props.currentWeather.main.pressure / 1.333).toFixed(1)}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 5 }}>
                <Icon style={{ color: '#51adf5', fontSize: 24 }} name={'weather-windy'} />
                <Text>{this.props.currentWeather.wind.speed}m/s</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 5 }}>
                <Icon style={{ color: '#51adf5', fontSize: 24 }} name={'weather-pouring'} />
                <Text>{this.props.currentWeather.clouds.all}%</Text>
              </View>
            </View>
          </TouchableOpacity>
          : null
        }
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  weatherBlock: {
    position: 'absolute',
    top: 20,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '95%',
    padding: 10,
    borderRadius: 15,
  }
});

const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#1d2c4d'
      }
    ]
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8ec3b9'
      }
    ]
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1a3646'
      }
    ]
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#4b6878'
      }
    ]
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#64779e'
      }
    ]
  },
  {
    featureType: 'administrative.province',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#4b6878'
      }
    ]
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#334e87'
      }
    ]
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [
      {
        color: '#023e58'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#283d6a'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#6f9ba5'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1d2c4d'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#023e58'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3C7680'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#304a7d'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#98a5be'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1d2c4d'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#2c6675'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#255763'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#b0d5ce'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#023e58'
      }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#98a5be'
      }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1d2c4d'
      }
    ]
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#283d6a'
      }
    ]
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3a4762'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#0e1626'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#4e6d70'
      }
    ]
  }
];

const mapStateToProps = state => (state);

function mapDispatchToProps(dispatch) {
  return {
    dispatchGetCurrentWeather: (lat, long) => dispatch(getCurrentWeather(lat, long)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
