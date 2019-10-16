import {
  createAppContainer,
  createSwitchNavigator,
  TabNavigator,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from '../Screens/Splash';

import SignIn from '../Screens/AuthScreens/SignIn';
import SignUp from '../Screens/AuthScreens/SignUp';
import Home from '../Screens/AppScreens/Home'; //Load Top city and more
import Destination from '../Screens/AppScreens/Destination';
// import Package from '../Screens/AppScreens/Package'; //selected City and load more tourist destination
import PackageDestination from '../Screens/AppScreens/PackageDestination'; // selected Destination and chose package
import ChatUser from '../Screens/AppScreens/ChatUser'; // chat with Guide
import Profile from '../Screens/AppScreens/Profile';
import Booking from '../Screens/AppScreens/Booking';
import EditProfile from '../Components/Profile/EditProfile';
import Wishlist from '../Components/Profile/Wishlist';
import Balance from '../Components/Profile/Balance';
import PrivacyPolicy from '../Components/Profile/PrivacyPolicy';

// import Destination from '../Screens/AppScreens/Destination';

// const BookingStack = createStackNavigator({
//   Booking,
// });
const ProfileStack = createStackNavigator(
  {
    ProfileScreen: {screen: Profile},
    EditScreen: {screen: EditProfile},
    WishlistScreen: {screen: Wishlist},
    BalanceScreen: {screen: Balance},
    PrivacyPolicyScreen: {screen: PrivacyPolicy},
  },
  {
    initialRouteName: 'ProfileScreen',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

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
    ProfileScreen: {
      screen: ProfileStack,
    },
    BookingScreen: {
      screen: Booking,
    },
    DestinationScreen: {
      screen: Destination,
    },
    // PackageItemScreen: {
    //   screen: Package,
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
