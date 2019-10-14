import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';

const Balance = () => {
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
      <View style={{alignSelf: 'center'}}>
        <Text>User Name</Text>
      </View>
      <View style={{alignSelf: 'center'}}>
        <Image
          source={require('../../Assets/Icon/avatar.jpg')}
          resizeMode="contain"
          style={{width: 150, height: 150, borderRadius: 25}}
        />
      </View>
      <View
        style={{justifyContent: 'center', alignSelf: 'center', marginTop: 20}}>
        <Text>Current Balance</Text>
        <Text style={{fontSize: 18}}>Rp. 5000000</Text>
      </View>
    </SafeAreaView>
  );
};

export default Balance;
