import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';

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
              backgroundColor: '#fb724a',
              width: 40,
              height: 40,
              borderRadius: 20,
              marginRight: 16,
            }}></View>
          <View>
            <Text>Judul/Nama Destinasi</Text>
            <Text style={{fontSize: 12, color: 'grey'}}>Tanggal</Text>
          </View>
          <View
            style={{
              backgroundColor: '#fb724a',
              width: 50,
              right: 5,
              alignItems: 'center',
              marginLeft: 'auto',
            }}>
            <Text>Chat</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Booking;
