import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from '../Screens/Splash';
import SignIn from '../Screens/AuthScreens/SignIn';
import SignUp from '../Screens/AuthScreens/SignUp';
import Home from '../Screens/AppScreens/Home'; //Load Top city and more
import Package from '../Screens/AppScreens/Package'; //selected City and load more tourist destination
import PackageDestination from '../Screens/AppScreens/PackageDestination'; // selected DDestination and chose package
import SearchGuide from '../Screens/AppScreens/SearchGuide'; // search Guide in gmaps
import ChatUser from '../Screens/AppScreens/ChatUser'; // chat with Guide
// import Destination from '../Screens/AppScreens/Destination';

const AuthStack = createStackNavigator(
  {
    SigninScreen: {
      screen: SignIn,
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
