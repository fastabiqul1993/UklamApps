import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {View, Text, ImageBackground} from 'react-native';
import Activity from '../../Components/Booking/Activity';
import History from '../../Components/Booking/History';

const Header = props => {
  return (
    <View style={{height: 80}}>
      {console.log('booking destination and guide = ', props)}
      <ImageBackground
        source={require('../../Assets/Background/headerbg.jpg')}
        style={{width: '100%', height: '100%', overflow: 'hidden'}}>
        <View
          style={{
            width: 150,
            alignItems: 'center',
            paddingHorizontal: 5,
            borderRadius: 5,
            overflow: 'hidden',
            backgroundColor: 'rgba(253, 254, 254, 0.8)',
            height: 50,
            marginTop: 16,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',

              fontSize: 28,

              color: '#fb724a',
            }}>
            Booking
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const TabScreen = createMaterialTopTabNavigator(
  {
    Activity: {screen: Activity},
    History: {screen: History},
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    backBehavior: 'history',
    tabBarOptions: {
      activeTintColor: '#fb724a',
      inactiveTintColor: '#EAEDED',
      style: {
        backgroundColor: 'transparent',
      },
      labelStyle: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
      },
      indicatorStyle: {
        borderBottomColor: '#fb724a',
        borderBottomWidth: 2,
      },
    },
  },
);

// making a StackNavigator to export as default
const Booking = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      header: <Header />,
    },
  },
});

export default createAppContainer(Booking);
