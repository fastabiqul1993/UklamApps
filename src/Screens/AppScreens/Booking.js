import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import {Icon} from 'native-base';
import FooterTab from '../../Components/Navbars/Footer';

class Booking extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, marginHorizontal: 10}}>
        <StatusBar translucent backgroundColor="transparent" />
        <Text
          style={{
            fontWeight: 'bold',
            marginBottom: 20,
            fontSize: 28,
            marginTop: 30,
          }}>
          Booking
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: '#fb724a',
              paddingVertical: 10,
              borderRadius: 20,
              paddingHorizontal: 20,
              marginRight: 14,
            }}>
            <Text style={{color: 'white', fontSize: 15}}>Activity</Text>
          </View>
          <View
            style={{
              backgroundColor: '#fb724a',
              paddingVertical: 10,
              borderRadius: 20,
              paddingHorizontal: 20,
            }}>
            <Text style={{color: 'white', fontSize: 15}}>History</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderRadius: 8,
            marginTop: 10,
            paddingVertical: 15,
            paddingHorizontal: 5,
            backgroundColor: '#FBEEE6',
          }}>
          <View
            style={{
              height: 60,
              width: 60,
              borderRadius: 10,
              marginRight: 5,
              overflow: 'hidden',
            }}>
            <Image
              style={{width: 60, height: 60}}
              resizemode="center"
              source={require('../../Assets/Icon/thumb.jpg')}
            />
          </View>
          <View>
            <Text>Judul/Nama Destinasi</Text>
            <Text style={{fontSize: 12, color: 'grey'}}>Tanggal</Text>
          </View>
          <View
            style={{
              width: 40,
              right: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 'auto',
            }}>
            <Icon
              active
              name="message"
              type="MaterialIcons"
              style={{color: '#fb724a'}}
            />
          </View>
        </View>
        <FooterTab />
      </SafeAreaView>
    );
  }
}

export default Booking;
