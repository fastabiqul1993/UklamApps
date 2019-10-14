import React from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import {Icon} from 'native-base';
import FooterTabs from '../Footer';
const Wishlist = () => {
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
        Wishlist
      </Text>

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
            // backgroundColor: '#fb724a',
            width: 50,
            right: 5,
            alignItems: 'center',
            marginLeft: 'auto',
          }}>
          <Icon
            type="MaterialIcons"
            name="message"
            style={{color: '#fb724a'}}
          />
          {/* <Text>Chat</Text> */}
        </View>
      </View>
      <FooterTabs />
    </SafeAreaView>
  );
};

export default Wishlist;
