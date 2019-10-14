import {
  createAppContainer,
  createSwitchNavigator,
  TabNavigator,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from '../Screens/Splash';

import SignIn from '../Screens/AuthScreens/SignIn';
import SignUp from '../Screens/AuthScreens/SignUp';
import Home from '../Screens/AppScreens/Home';
import Destination from '../Screens/AppScreens/Destination';
import PackageDestination from '../Screens/AppScreens/PackageDestination';
import Profile from '../Screens/AppScreens/Profile';
import Booking from '../Screens/AppScreens/Booking';
import EditProfile from '../Components/Profile/EditProfile';
import Wishlist from '../Components/Profile/Wishlist';
import Balance from '../Components/Profile/Balance';
import PrivacyPolicy from '../Components/Profile/PrivacyPolicy';

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
    initialRouteName: 'Profile',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

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
    ProfileScreen: {
      screen: ProfileStack,
    },
    BookingScreen: {
      screen: Booking,
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
    initialRouteName: 'App',
  },
);

const InitialNavigation = createSwitchNavigator({
  splashScreen: Splash,
  AppNavigator: {screen: AppNavigator},
});

export default AppContainer = createAppContainer(AppNavigator);
