import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Item,
  Input,
} from 'native-base';

import Logo from '../../Assets/brands/ugh-01.png';

const myHeader = () => {
  return (
    <View>
      <StatusBar translucent />

      <Header
        style={{backgroundColor: '#fb724a', height: 100}}
        androidStatusBarColor="transparent"
        noShadow>
        {/* <Left></Left> */}

        <Body>
          {/* <Image source={Logo} style={styles.image} /> */}

          <Item rounded style={{backgroundColor: 'white', marginTop: 20}}>
            <Input placeholder="Rounded Textbox" />
          </Item>
        </Body>
        {/* <Right></Right> */}
      </Header>
    </View>
  );
};

export default myHeader;

const styles = StyleSheet.create({
  cover: {
    // padding: 10,
    alignItems: 'center',
  },
  image: {
    marginTop: 15,
    width: 190,
    height: 70,
    marginLeft: 20,
    resizeMode: 'contain',
  },
});
