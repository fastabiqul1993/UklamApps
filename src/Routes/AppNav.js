import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from '../Screens/Splash';
import SignIn from '../Screens/AuthScreens/SignIn';
import SignUp from '../Screens/AuthScreens/SignUp';
import Home from '../Screens/AppScreens/Home';
import Destination from '../Screens/AppScreens/Destination';
import PackageDestination from '../Screens/AppScreens/PackageDestination';

const AuthStack = createStackNavigator(
  {
    SigninScreen: {
      screen: PackageDestination,
    },
    SignupScreen: {
      screen: SignUp,
    },
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const AppStack = createStackNavigator(
  {
    HomeScreen: {
      screen: Home,
    },
    // ProfileScreen: {
    //   screen: Profile,
    // },
    // MyProfileScreen: {
    //   screen: MyProfile,
    // },
    // chatScreen: {
    //   screen: Chat,
    // },
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const AppNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Auth',
  },
);

const InitialNavigation = createSwitchNavigator({
  splashScreen: Splash,
  AppNavigator: {screen: AppNavigator},
});

export default AppContainer = createAppContainer(InitialNavigation);
