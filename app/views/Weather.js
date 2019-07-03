import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { getWeather } from '../actions/Weather';

const { width } = Dimensions.get('window');

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      last: null
    };
  }

  componentWillMount() {
    this.props.dispatchGetWeather(this.props.lat, this.props.long);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.weather ?
          <View style={styles.weatherBlock}>
            <View style={styles.header}>
              <Text style={{ fontSize: 26, color: '#fff' }}>{this.props.weather.city.name}</Text>
              <TouchableOpacity style={styles.back} onPress={() => Actions.pop()}>
                <Icon style={{ color: '#fff', fontSize: 28 }} name={'arrow-left'} />
              </TouchableOpacity>
            </View>
            <ScrollView style={{ marginBottom: 50 }}>
              {this.props.weather.list.map((item) => {
                const dateParts = item.dt_txt.split(' ');
                const showDate = this.state.last !== dateParts[0];
                const dateToShow = dateParts[0].split('-')[2] + '.' + dateParts[0].split('-')[1];
                const timeToShow = dateParts[1].split(':')[0] + ':' + dateParts[1].split(':')[1];
                this.state.last = dateParts[0];
                return (
                  <View style={styles.item}>
                    {showDate ?
                      <View>
                        <Text style={{
                          fontSize: 22,
                          marginTop: 20,
                          paddingBottom: 5,
                          alignSelf: 'center'
                        }}
                        >{dateToShow}
                        </Text>
                        <View style={{ height: 25, width, flexDirection: 'row' }}>
                          <View style={{ flex: 1.5 }} />
                          <View style={{ alignItems: 'center', flex: 1 }}>
                            <Icon style={{ color: '#51adf5', fontSize: 24 }} name={'temperature-celsius'} />
                          </View>
                          <View style={{ alignItems: 'center', flex: 1 }}>
                            <Icon style={{ color: '#51adf5', fontSize: 24 }} name={'gauge'} />
                          </View>
                          <View style={{ alignItems: 'center', flex: 1 }}>
                            <Icon style={{ color: '#51adf5', fontSize: 24 }} name={'weather-windy'} />
                          </View>
                          <View style={{ alignItems: 'center', flex: 1 }}>
                            <Icon style={{ color: '#51adf5', fontSize: 24 }} name={'weather-pouring'} />
                          </View>
                        </View>
                      </View>
                      : null
                    }
                    <View style={{ height: 20, flexDirection: 'row' }}>
                      <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1.5
                      }}
                      >
                        <Text style={{ fontSize: 20 }}>{timeToShow}</Text>
                      </View>
                      <View style={{ alignItems: 'center', flex: 1 }}>
                        <Text>{(item.main.temp - 273.15).toFixed(1)}</Text>
                      </View>
                      <View style={{ alignItems: 'center', flex: 1 }}>
                        <Text>{(item.main.pressure / 1.333).toFixed(1)}</Text>
                      </View>
                      <View style={{ alignItems: 'center', flex: 1 }}>
                        <Text>{item.wind.speed.toFixed(1)}m/s</Text>
                      </View>
                      <View style={{ alignItems: 'center', flex: 1 }}>
                        <Text>{item.clouds.all}%</Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          :
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 22, paddingBottom: 5 }}>Loading...</Text>
          </View>
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
    alignItems: 'center',
  },
  item: {
    alignItems: 'center',
    width,
  },
  header: {
    width,
    height: 50,
    backgroundColor: '#51adf5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  back: {
    position: 'absolute',
    top: 15,
    left: 15
  }
});

const mapStateToProps = state => (state);

function mapDispatchToProps(dispatch) {
  return {
    dispatchGetWeather: (lat, long) => dispatch(getWeather(lat, long)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
