import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from '../Screens/Splash';
// import Tabs from '../Screens/Main/Tabs';
// import Login from '../Screens/Auth/Login';
// import Register from '../Screens/Auth/Register';
// import Profile from '../Components/Profile/ProfileAnother';
// import MyProfile from '../Components/Profile/myProfile';
// import Chat from '../Screens/Main/Chats';
// // import Maps from '../Components/Maps/Map';

const InitialNavigation = createSwitchNavigator({
  splashScreen: Splash,
  //   AppNavigator: {screen: AppNavigator},
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

// const AppStack = createStackNavigator(
//   {
//     HomeScreen: {
//       screen: Tabs,
//     },
//     ProfileScreen: {
//       screen: Profile,
//     },
//     MyProfileScreen: {
//       screen: MyProfile,
//     },
//     chatScreen: {
//       screen: Chat,
//     },
//   },
//   {
//     defaultNavigationOptions: {
//       header: null,
//     },
//   },
// );

// const AppNavigator = createSwitchNavigator(
//   {
//     Auth: AuthStack,
//     App: AppStack,
//   },
//   {
//     initialRouteName: 'Auth',
//   },
// );

export default AppContainer = createAppContainer(InitialNavigation);
