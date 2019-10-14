import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from '../Screens/Splash';
import Profile from '../Screens/AppScreens/Profile';
import Booking from '../Screens/AppScreens/Booking';
import EditProfile from '../Components/Profile/EditProfile';
import Wishlist from '../Components/Profile/Wishlist';
import Balance from '../Components/Profile/Balance';
import PrivacyPolicy from '../Components/Profile/PrivacyPolicy';

// const BookingStack = createStackNavigator({
//   Booking,
// });
const ProfileStack = createStackNavigator({
  ProfileScreen: {screen: Profile},
  EditScreen: {screen: EditProfile},
  WishlistScreen: {screen: Wishlist},
  BalanceScreen: {screen: Balance},
  PrivacyPolicyScreen: {screen: PrivacyPolicy},
});

// const AuthStack = createStackNavigator(
//   {
//     SigninScreen: {
//       screen: Login,
//     },
//     SignupScreen: {
//       screen: Register,
//     },
//   },
//   {
//     defaultNavigationOptions: {
//       header: null,
//     },
//   },
// );

const AppStack = createStackNavigator(
  {
    // HomeScreen: {
    //   screen: Tabs,
    // },
    Profile: {
      screen: ProfileStack,
    },
    // MyProfileScreen: {
    //   screen: MyProfile,
    // },
    BookingScreen: {
      screen: Booking,
    },
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const AppNavigator = createSwitchNavigator(
  {
    // Auth: AuthStack,
    App: AppStack,
  },
  {
    // initialRouteName: 'Auth',
  },
);

export default AppContainer = createAppContainer(AppNavigator);
