import React, {Component} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {Container, Footer, FooterTab, Button, Icon, Text} from 'native-base';
import {withNavigation, SafeAreaView} from 'react-navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
            onPress={() => props.navigation.navigate('ChatScreen')}>
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
