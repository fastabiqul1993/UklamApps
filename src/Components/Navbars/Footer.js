import React, {Component} from 'react';
import {StyleSheet, Image, View, ToastAndroid} from 'react-native';
import {Container, Footer, FooterTab, Button, Icon, Text} from 'native-base';
import {withNavigation, SafeAreaView} from 'react-navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

_toastpatch = () => {
  //function to make Toast With Duration, Gravity And Offset
  ToastAndroid.showWithGravityAndOffset(
    'You Can Chat With Your Guide using Booking Menu',
    ToastAndroid.LONG, //can be SHORT, LONG
    ToastAndroid.BOTTOM, //can be TOP, BOTTON, CENTER
    25, //xOffset
    50, //yOffset
  );
};

_logOut = async () => {
  await AsyncStorage.clear();
  // .then(async uid => {
  //   firebase
  //     .database()
  //     .ref('user/' + uid)
  //     .update({status: 'offline'});
  //   await AsyncStorage.clear();
  //   firebase.auth().signOut();
  //   // Geolocation.stopObserving();
  //   this.props.navigation.navigate('SigninScreen');
  // })
  // .catch(function(error) {
  //   console.error(error);
  // });
};

const MainFooter = props => {
  return (
    <SafeAreaView
      style={{
        position: 'relative',
        bottom: 0,
        marginTop: 'auto',
        marginHorizontal: -10,
      }}>
      <Footer>
        <FooterTab style={{backgroundColor: '#FFF'}}>
          <Button
            vertical
            onPress={() => props.navigation.navigate('HomeScreen')}
            style={
              props.navigation.state.routeName === 'HomeScreen' && {
                backgroundColor: '#E5E7E9',
              }
            }>
            <Icon name="search" type="Feather" style={{color: '#fb724a'}} />
            <Text
              // style={
              //   props.navigation.state.routeName === 'HomeScreen'
              //     ? {textAlign: 'center', color: '#402366', fontSize: 15}
              //     : {textAlign: 'center', fontSize: 13}
              // }
              style={{fontSize: 10, color: '#fb724a'}}>
              Explore
            </Text>
          </Button>
          <Button
            style={
              props.navigation.state.routeName === 'BookingScreen' && {
                backgroundColor: '#E5E7E9',
              }
            }
            vertical
            onPress={() => props.navigation.navigate('BookingScreen')}>
            <Icon name="calendar" type="Feather" style={{color: '#fb724a'}} />
            <Text style={{fontSize: 10, color: '#fb724a'}}>Booking</Text>
          </Button>
          <Button
            vertical
            style={
              props.navigation.state.routeName === 'ChatScreen' && {
                backgroundColor: '#E5E7E9',
              }
            }
            onPress={() => _toastpatch()}>
            <Icon
              active
              name="message"
              type="MaterialIcons"
              style={{color: '#fb724a'}}
            />
            <Text style={{fontSize: 10, color: '#fb724a'}}>Chat</Text>
          </Button>
          <Button
            style={
              props.navigation.state.routeName === 'ProfileScreen' && {
                backgroundColor: '#E5E7E9',
              }
            }
            vertical
            onPress={() => {
              _logOut();
            }}
            onPress={() => props.navigation.navigate('ProfileScreen')}>
            <Icon name="person" style={{color: '#fb724a'}} />
            <Text style={{fontSize: 10, color: '#fb724a'}}>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>
    </SafeAreaView>
  );
};
export default withNavigation(MainFooter);
