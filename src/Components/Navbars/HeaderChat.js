import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Thumbnail,
  Title,
} from 'native-base';

const myHeader = props => {
  console.log('data item = ', props.data);
  // const data = props.data;
  return (
    <View>
      <Header
        style={{backgroundColor: '#fb724a', height: 80, paddingTop: 20}}
        androidStatusBarColor="#fb724a"
        noShadow>
        <Left>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <TouchableOpacity
          style={{paddingTop: 11}}
          // onPress={() => {
          //   props.navigation.navigate('ProfileScreen', data);
          // }}
        >
          <Body style={{flexDirection: 'row'}}>
            <Thumbnail
              small
              source={{
                uri: props.data.package.photo,
              }}
            />
            <View style={{paddingHorizontal: 20}}>
              <Title>{props.data.package.guide}</Title>
            </View>
          </Body>
        </TouchableOpacity>
        <Right>
          <Button transparent>
            <Icon name="more" />
          </Button>
        </Right>
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
