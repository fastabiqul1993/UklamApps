import React, {Component} from 'react';
import {
  StyleSheet,
  StatusBar,
  PermissionsAndroid,
  View,
  Image,
  Text,
  Alert,
} from 'react-native';
import {Thumbnail} from 'native-base';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import geolocation from '@react-native-community/geolocation';
import Carousel from '../Carousel/GuideCarousel';

import AsyncStorage from '@react-native-community/async-storage';

class myMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: -7.7585007,
        longitude: 110.378115,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },

      myCoordinate: '',
    };
  }

  onRegionChange(region) {
    this.setState({
      myCoordinate: {
        latitude: -7.89603,
        longitude: 110.380572,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    });
  }

  reqLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Hidupkan GPS untuk explore lebih',
          message: 'MeoChat Need permission for location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Anda dapat menggunakan GPS');
      } else {
        console.log('GPS permission denied');
      }
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  handleClick = (lat, long) => {
    this.setState({
      region: {...this.state.region, latitude: lat, longitude: long},
    });
  };

  render() {
    console.log('salam dari map = ', this.props);
    let {destination} = this.props;
    return (
      <View>
        <StatusBar translucent backgroundColor={'transparent'} />
        <Carousel guides={this.props.guides} click={this.handleClick} />
        <MapView
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
          region={this.state.region}
          // region={this.state.region}
        >
          {this.props.guides.map((user, index) => {
            if (user.location.latitude !== null) {
              return (
                <Marker
                  key={index}
                  // title={user.id == uid ? 'You' : user.username}
                  title={user.profile.name}
                  // description={user.id == uid ? '' : user.status}
                  description={user.status}
                  coordinate={user.location}
                  // onCalloutPress={
                  //   user.id == uid
                  //     ? () => {
                  //         console.log(uid);
                  //       }
                  //     : // () => {
                  //       //     console.log(user.username);
                  //       //   }
                  //       // this.props.navigation.navigate('chatScreen', item);
                  //       () => {
                  //         this.props.navigation.navigate('chatScreen', user);
                  //       }
                  // }
                  onCalloutPress={() => {
                    // this.props.navigation.navigate('DestinationScreen', {
                    //   user: user,
                    //   destination: destination,
                    // });
                    user.status == 'available'
                      ? this.props.navigation.navigate('DestinationScreen', {
                          user: user,
                          destination: destination,
                        })
                      : Alert.alert(
                          'Guide Unavailabe',
                          'Chose Another Guide...',
                          [
                            {
                              text: 'OK',
                              onPress: () => console.log('OK Pressed'),
                            },
                          ],
                          {cancelable: false},
                        );
                  }}>
                  {
                    //   user.id == uid ? (
                    //   <View>
                    //     <Image source={myMarker} style={styles.markerYou} />

                    //   </View>
                    // ) : (
                    <View>
                      <Thumbnail
                        small
                        source={{uri: user.photo}}
                        style={
                          user.status == 'available'
                            ? styles.markerOnline
                            : styles.markerOffline
                        }
                      />
                    </View>
                    // )
                  }
                </Marker>
              );
            }
          })}
        </MapView>
        {/* <MapView initialRegion={this.state.region} style={styles.mapstyle}>
          <MapView.Marker.Animated
            ref={marker => {
              this.marker = marker;
            }}
            coordinate={this.state.coordinate}
          />
        </MapView> */}
      </View>
    );
  }
}

export default myMap;

const styles = StyleSheet.create({
  mapstyle: {
    width: '100%',
    height: '68%',
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
