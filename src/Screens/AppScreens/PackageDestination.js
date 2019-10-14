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

import Carousel from '../../Components/Carousel/Destination';

import Logo from '../../Assets/img/dest1.jpg';

class myPackage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View>
        <ImageBackground
          source={Logo}
          style={{
            width: '100%',
            height: 200,
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
              height: '40%',
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
                paddingVertical: 1,
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
        <View style={{height: '69%', backgroundColor: '#f7f7f7'}}>
          <FlatList
            data={DATA}
            renderItem={({item}) => (
              <Fragment>
                <ScrollView>
                  {/* <View style={{marginBottom: 200, backgroundColor: '#f7f7f7'}}> */}
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      this.props.navigation.navigate('chatScreen', item);
                    }}>
                    <View style={styles.item}>
                      <Grid>
                        <Col
                          style={{
                            width: '40%',
                          }}>
                          <View style={styles.image}>
                            <Image source={Logo} style={styles.image} />
                            <View
                              style={{
                                backgroundColor: '#000',
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                opacity: 0.2,

                                // borderRadius: 50,
                              }}>
                              <Text></Text>
                            </View>
                          </View>
                        </Col>
                        <Col>
                          <Row>
                            <View style={{paddingVertical: 4}}>
                              <Text style={{fontSize: 20}}>{item.title}</Text>
                            </View>
                          </Row>
                          <Row>
                            <Text style={{color: 'gray'}}>{item.title}</Text>
                          </Row>
                        </Col>
                      </Grid>
                    </View>
                  </TouchableOpacity>
                  {/* </View> */}
                </ScrollView>
              </Fragment>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
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
    backgroundColor: '#fff',
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
