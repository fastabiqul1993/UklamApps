import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Image,
  ToastAndroid,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Icon, Button, Header, DatePicker, Text, Right, Left} from 'native-base';
import FooterTab from '../../Components/Navbars/Footer';
import AsyncStorage from '@react-native-community/async-storage';
import {postOrder} from '../../Publics/Redux/Actions/transaction';
import {connect} from 'react-redux';
import Logo from '../../Assets/img/dest1.jpg';

class Activity extends Component {
  state = {
    email: '',
    order: [],
    date: '',
    orderId: '',
    chosenDate: '',
  };

  setDate = newDate => {
    this.setState({chosenDate: newDate});
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <View
          style={{
            marginHorizontal: 30,
            marginVertical: 10,
            flex: 1,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#EBEDEF',
            overflow: 'hidden',
          }}>
          <ImageBackground
            source={Logo}
            style={{
              width: '100%',
              height: 200,
              backgroundColor: '#f9791b',
            }}>
            <View
              style={{
                backgroundColor: '#000',
                width: '100%',
                height: '40%',
                position: 'absolute',
                opacity: 0.4,
                bottom: 0,
              }}>
              <Text></Text>
            </View>
            <View style={{position: 'absolute', bottom: 35}}>
              <Text
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 1,
                  fontSize: 30,
                  color: 'white',
                  fontWeight: 'bold',
                  // backgroundColor: '#2fa31a',
                }}>
                Gunung Bromo
              </Text>
            </View>
            <View style={{position: 'absolute', bottom: 14, marginLeft: 27}}>
              <Text
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 1,
                  fontSize: 15,
                  color: 'white',
                  // backgroundColor: '#2fa31a',
                }}>
                Nama Guide
              </Text>
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: 15,
                marginLeft: 10,
              }}>
              <Icon
                type="FontAwesome"
                name="map-marker"
                style={{
                  fontSize: 20,
                  paddingHorizontal: 10,
                  paddingVertical: 1,
                  color: 'white',
                }}
              />
            </View>
          </ImageBackground>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Date </Text>
            <DatePicker
              defaultDate={new Date()}
              minimumDate={new Date(2019, 1, 1)}
              maximumDate={new Date(2019, 12, 31)}
              locale={'id'}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={'fade'}
              androidMode={'default'}
              placeHolderText="Select date"
              textStyle={{color: 'green'}}
              placeHolderTextStyle={{color: '#d3d3d3'}}
              onDateChange={this.setDate}
              disabled={false}
            />
          </View>

          <Text>Deskripsi</Text>
          <Text>Harga</Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#fb724a',
              marginHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 10,
            }}>
            <Text style={{color: 'white', fontSize: 16, alignSelf: 'center'}}>
              Book Now, {'\n'}Inform Your Guide
            </Text>
          </TouchableOpacity>
        </View>
        <FooterTab />
      </SafeAreaView>
    );
  }
}

export default Activity;
