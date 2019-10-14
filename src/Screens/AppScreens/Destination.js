import React, {Component} from 'react';
import {View, StatusBar, ImageBackground, Text} from 'react-native';
import {Header, Button, Icon, Left, Right} from 'native-base';

import Carousel from '../../Components/Carousel/Destination';

import Logo from '../../Assets/img/dest1.jpg';

class myDestination extends Component {
  render() {
    return (
      <View>
        <ImageBackground
          source={Logo}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'stretch',
          }}>
          <Header style={{marginTop: 10}} transparent>
            <Left>
              <Button transparent>
                <Icon name="arrow-back" />
              </Button>
            </Left>

            <Right>
              <Button transparent>
                <Icon name="menu" />
              </Button>
            </Right>
          </Header>
          <StatusBar translucent backgroundColor={'transparent'} />
          <View
            style={{
              width: '100%',
              height: '100%',
              bottom: 0,
              backgroundColor: '#000',
              opacity: 0.2,
              position: 'absolute',
            }}></View>
          <View
            style={{flexDirection: 'row', position: 'absolute', bottom: 230}}>
            <Text
              style={{
                fontSize: 25,
                color: 'white',
                fontWeight: 'bold',
                paddingHorizontal: 10,
              }}>
              Malang, East Java
            </Text>
          </View>
          <View style={{position: 'absolute', bottom: 40}}>
            <Carousel />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default myDestination;
