import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ToastAndroid,
  ImageBackground,
} from 'react-native';
import {Input, Form, Item} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Balance = props => {
  const {photo, email, balance} = props.navigation.getParam('user');
  const {name, phone, address} = props.navigation.getParam('profile');
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../../Assets/Background/background.jpg')}
        style={{
          width: '100%',
          height: '100%',

          left: 0,
          right: 0,
        }}
        resizeMode="stretch">
        <View
          style={{
            marginTop: 60,
            marginHorizontal: 20,
            backgroundColor: 'rgba(248, 249, 249 , 0.9)',
            borderRadius: 20,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 28,
              alignSelf: 'center',
              marginTop: 20,
              marginBottom: 40,
            }}>
            Balance
          </Text>

          <View
            style={{
              backgroundColor: 'rgba(242, 243, 244, 0.6)',
              borderRadius: 20,
            }}>
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
                source={require('../../Assets/Icon/balance.png')}
                style={{width: 200, height: 200}}
              />
            </View>

            <View style={{justifyContent: 'center', alignContent: 'center'}}>
              <View style={{alignSelf: 'center'}}>
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>{name}</Text>
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
              {/* <Form>
                <Item>
                  <Input placeholder="Input Balance" />
                </Item>
              </Form> */}
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
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Balance;
