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
            onPress={() => props.navigation.navigate('HomeScreen')}>
            <Icon name="search" type="Feather" style={{color: '#fb724a'}} />
            <Text style={{fontSize: 10, color: '#fb724a'}}>Explore</Text>
          </Button>
          <Button
            vertical
            onPress={() => props.navigation.navigate('BookingScreen')}>
            <Icon name="calendar" type="Feather" style={{color: '#fb724a'}} />
            <Text style={{fontSize: 10, color: '#fb724a'}}>Booking</Text>
          </Button>
          <Button vertical>
            <Icon
              active
              name="message"
              type="MaterialIcons"
              style={{color: '#fb724a'}}
            />
            <Text style={{fontSize: 10, color: '#fb724a'}}>Chat</Text>
          </Button>
          <Button
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

// const Footer = props => {
//   return (
//     <SafeAreaView
//       style={{
//         marginTop: -10,
//         height: 55,
//         position: 'relative',
//         flexDirection: 'row',
//       }}>
//       <TouchableOpacity
//         activeOpacity={0.9}
//         style={{flex: 1}}
//         onPress={() => props.navigation.navigate('HomeScreen')}>
//         <Text
//           style={
//             props.navigation.state.routeName === 'Home'
//               ? {textAlign: 'center', color: '#fb724a', fontSize: 15}
//               : {textAlign: 'center', fontSize: 13}
//           }>
//           Beranda
//         </Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         activeOpacity={0.9}
//         style={{flex: 1}}
//         onPress={() => props.navigation.navigate('BookingScreen')}>
//         <Text
//           style={
//             props.navigation.state.routeName === 'Booking'
//               ? {textAlign: 'center', color: '#fb724a', fontSize: 15}
//               : {textAlign: 'center', fontSize: 13}
//           }>
//           Beranda
//         </Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         activeOpacity={0.9}
//         style={{flex: 1}}
//         onPress={() => props.navigation.navigate('ProfileScreen')}>
//         <Text
//           style={
//             props.navigation.state.routeName === 'Profile'
//               ? {textAlign: 'center', color: '#fb724a', fontSize: 15}
//               : {textAlign: 'center', fontSize: 13}
//           }>
//           Beranda
//         </Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };
// export default Footer
