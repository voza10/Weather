import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';

import { Actions } from 'react-native-router-flux';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const { width } = Dimensions.get('window');

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder={'Start to input city...'}
          minLength={2}
          autoFocus={false}
          returnKeyType={'search'}
          listViewDisplayed={false}
          fetchDetails={true}
          onPress={(data, details = null) => {
            Actions.weather({
              lat: details.geometry.location.lat,
              long: details.geometry.location.lng
            });
          }}
          styles={{
            container: {
              borderRadius: 10,
              borderWidth: 0,
            },
            textInputContainer: {
              height: 50,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderWidth: 1,
              borderTopWidth: 1,
              borderTopColor: '#1cd8f5',
              borderBottomColor: '#1cd8f5',
              borderColor: '#1cd8f5',
              width: '100%',
              backgroundColor: '#FFFFFF',

            },
            textInput: {
              height: 35,
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
              width: width * 0.8
            },
            listView: {
              backgroundColor: '#FFFFFF',
              borderWidth: 1,
              borderColor: '#1cd8f5',
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            },
          }}
          currentLocation={false}
          query={{
            key: 'AIzaSyDYm3nV6JCHyDiFXqt22VS39INonhi-O70',
            language: 'en',
            //types: '(cities)'
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignContent: 'center'
  },

});

const mapStateToProps = state => (state);


function mapDispatchToProps(dispatch) {
  return {
    dispatchGetLeaderBoard: () => dispatch(getLeaderBoard()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
