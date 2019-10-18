import React, {Component} from 'react';
import {View, StatusBar, ImageBackground, Text, Image} from 'react-native';
import {Header, Button, Icon, Left, Right} from 'native-base';

import Carousel from '../../Components/Carousel/Destination';

import Bg from '../../Assets/Background/jogja.jpg';

class myDestination extends Component {
  constructor() {
    super();
    this.state = {
      bgImage: '',
    };
  }
  render() {
    console.log(
      'props in destination = ',
      this.props.navigation.state.params.destination,
    );
    console.log('guide nya = ', this.props.navigation.state.params.user);
    let guide = this.props.navigation.state.params.user;
    let destination = this.props.navigation.state.params.destination;
    return (
      <View>
        {guide !== undefined ? (
          <ImageBackground
            source={Bg}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'stretch',
              backgroundColor: '#f9791b',
            }}>
            <View
              style={{
                backgroundColor: '#000',
                width: '100%',
                height: '45%',
                position: 'absolute',
                opacity: 0.3,
                bottom: 200,
                // borderRadius: 20,

                // borderRadius: 50,
              }}>
              <Text></Text>
            </View>
            <View
              style={{
                position: 'absolute',
                top: 110,
                backgroundColor: '#f9791b',
                width: '100%',
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 35,
                  color: 'white',
                  left: 25,
                }}>
                {guide.profile.name}
              </Text>
            </View>
            <View style={{position: 'absolute', top: 180, alignSelf: 'center'}}>
              <Image
                source={{uri: guide.photo}}
                style={{
                  width: 180,
                  height: 180,
                  borderRadius: 100,
                  backgroundColor: '#f9791b',
                  borderColor: '#42b72a',
                  borderWidth: 4,
                }}
              />
            </View>
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
                opacity: 0.1,
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
                Yogyakarta, Indonesia
              </Text>
            </View>
            <View style={{position: 'absolute', bottom: 40}}>
              <Carousel navigation={this.props.navigation} data={destination} />
            </View>
          </ImageBackground>
        ) : (
          <ImageBackground
            source={Bg}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'stretch',
              backgroundColor: '#f9791b',
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
                opacity: 0.4,
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
                Yogyakarta, Indonesia
              </Text>
            </View>
            <View style={{position: 'absolute', bottom: 40}}>
              <Carousel navigation={this.props.navigation} data={destination} />
            </View>
          </ImageBackground>
        )}
      </View>
    );
  }
}

export default myDestination;
