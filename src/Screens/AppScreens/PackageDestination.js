import React, {Component, Fragment} from 'react';
import {
  View,
  StatusBar,
  ImageBackground,
  FlatList,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Header, Button, Icon, Left, Right, Thumbnail} from 'native-base';
import {Grid, Row, Col} from 'react-native-easy-grid';

import Carousel from '../../Components/Carousel/ChosePackage';

import Logo from '../../Assets/img/dest1.jpg';
import Logo1 from '../../Assets/img/bg2.jpg';

class myPackage extends Component {
  // constructor() {
  //   super();
  //   this.state = {};
  // }

  // Item = ({title}) => {
  //   return (
  //     <View style={styles.item}>
  //       <Text style={styles.title}>{title}</Text>
  //     </View>
  //   );
  // };


  render() {
    return (
      <View>
        {/* <ImageBackground
          source={Logo}
          style={{
            width: '100%',
            height: 370,
            backgroundColor: '#f9791b',
          }}>
          <Header transparent>
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
              backgroundColor: '#000',
              width: '100%',
              height: '25%',
              position: 'absolute',
              opacity: 0.4,
              bottom: 0,

              // borderRadius: 50,
            }}>
            <Text></Text>
          </View>
          <View style={{position: 'absolute', bottom: 35}}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
                fontSize: 30,
                color: 'white',
                fontWeight: 'bold',
                // backgroundColor: '#2fa31a',
              }}>
              Bromo
            </Text>
          </View>
          <View style={{position: 'absolute', bottom: 14, marginLeft: 27}}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 1,
                fontSize: 15,
                color: 'white',
                // backgroundColor: '#2fa31a',
              }}>
              East Java, Indonesia
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 15,
              marginLeft: 10,
            }}>
            <Icon
              type="FontAwesome"
              name="map-marker"
              style={{
                fontSize: 20,
                paddingHorizontal: 10,
                paddingVertical: 1,
                color: 'white',
              }}
            />

          </View>
        </ImageBackground>
        {/* <View style={{height: '69%', backgroundColor: '#e6e6e6'}}> */}
        <ImageBackground
          source={Logo1}
          style={{height: '69%', backgroundColor: '#e6e6e6'}}>
          <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
            <Text
              style={{
                fontSize: 20,
                paddingVertical: 10,
                paddingHorizontal: 10,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Chose Tour Package
            </Text>
          </View>
          <Carousel />
        </ImageBackground>
      </View>
      // </View>
    );
  }
}

export default myPackage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f7f7f7',
    height: 150,
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 100,
    backgroundColor: '#f9791b',
  },
  title: {
    fontSize: 32,
  },
});

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f21',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d12',
    title: 'Third Item',
  },
];
