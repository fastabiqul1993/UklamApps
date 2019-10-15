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

class Activity extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={{marginHorizontal: 10, marginVertical: 15}}>
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
        </View>
        <FooterTab />
      </SafeAreaView>
    );
  }
}

export default Activity;
