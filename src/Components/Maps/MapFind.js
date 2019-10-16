import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  AnimatedRegion,
} from 'react-native-maps';
import geolocation from '@react-native-community/geolocation';

import Carousel from '../Carousel/GuideCarousel';

import AsyncStorage from '@react-native-community/async-storage';

class myMap extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: -7.7585007,
        longitude: 110.378115,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      coordinate: new AnimatedRegion({
        latitude: -7.756594,
        longitude: 110.380572,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }),
    };
  }

  componentWillReceiveProps(nextProps) {
    const duration = 500;

    if (this.props.coordinate !== nextProps.coordinate) {
      if (Platform.OS === 'android') {
        if (this.marker) {
          this.marker._component.animateMarkerToCoordinate(
            nextProps.coordinate,
            duration,
          );
        }
      } else {
        this.state.coordinate
          .timing({
            ...nextProps.coordinate,
            duration,
          })
          .start();
      }
    }
  }

  render() {
    return (
      <View>
        <StatusBar translucent backgroundColor={'transparent'} />
        {/* <MapView
          style={styles.mapstyle}
          provider={PROVIDER_GOOGLE}
          showsCompass={true}
          showsUserLocation={true}
          followUserLocation={true}
          zoomControlEnabled={true}
          showsCompass={true}
          minZoomLevel={0} // default => 0
          maxZoomLevel={20}
          initialRegion={this.state.region}
          // region={this.state.region}
        ></MapView> */}
        <MapView initialRegion={this.state.region} style={styles.mapstyle}>
          <MapView.Marker.Animated
            ref={marker => {
              this.marker = marker;
            }}
            coordinate={this.state.coordinate}
          />
        </MapView>
        <Carousel />
      </View>
    );
  }
}

export default myMap;

const styles = StyleSheet.create({
  mapstyle: {
    width: '100%',
    height: '65%',
    position: 'relative',
  },
  mapCoor: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
  },
  markerYou: {
    width: 40,
    height: 40,
  },
  name: {
    fontSize: 10,
    textAlign: 'center',
    marginBottom: '2%',
  },
  markerOnline: {
    borderWidth: 2,
    borderColor: '#42b72a',
  },
  markerOffline: {
    borderWidth: 2,
    borderColor: 'gray',
  },
});
