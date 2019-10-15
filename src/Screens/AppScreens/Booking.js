import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {View, Text} from 'react-native';
import Activity from '../../Components/Booking/Activity';
import History from '../../Components/Booking/History';

const Header = () => {
  return (
    <View style={{marginHorizontal: 10}}>
      <Text
        style={{
          fontWeight: 'bold',
          marginBottom: 10,
          fontSize: 28,
          marginTop: 30,
        }}>
        Booking
      </Text>
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
