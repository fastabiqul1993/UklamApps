import React from 'react';
import {View, Text, SafeAreaView, Image, ToastAndroid} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Balance = props => {
  const {photo, email, balance} = props.navigation.getParam('user');
  const {name, phone, address} = props.navigation.getParam('profile');
  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 10}}>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            marginBottom: 20,
            fontSize: 28,
            marginTop: 30,
          }}>
          Balance
        </Text>
      </View>
      <View style={{justifyContent: 'center', alignContent: 'center'}}>
        <View style={{alignSelf: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{name}</Text>
        </View>
        <View
          style={{
            alignSelf: 'center',
            width: 150,
            height: 150,
            borderRadius: 75,
            overflow: 'hidden',
            marginTop: 20,
          }}>
          <Image
            source={{uri: `${photo}`}}
            resizeMode="cover"
            style={{width: 150, height: 150, borderRadius: 25}}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 20,
          }}>
          <Text>Current Balance</Text>
          <Text style={{fontSize: 18}}>Rp. {balance}</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#f48023',
            justifyContent: 'center',
            alignSelf: 'center',
            marginVertical: 20,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}>
          <Text style={{color: 'white'}}>Topup</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Balance;
