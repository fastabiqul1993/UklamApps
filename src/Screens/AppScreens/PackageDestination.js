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
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
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
              height: '30%',
              position: 'absolute',
              opacity: 0.4,
              bottom: 0,

              // borderRadius: 50,
            }}>
            <Text></Text>
          </View>
          <View style={{position: 'absolute', bottom: 25}}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 1,
                fontSize: 25,
                color: 'white',
                fontWeight: 'bold',
                // backgroundColor: '#2fa31a',
              }}>
              Bromo
            </Text>
          </View>
          <View style={{position: 'absolute', bottom: 6, marginLeft: 25}}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 1,
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
                // backgroundColor: '#2fa31a',
              }}>
              East Java
            </Text>
          </View>
          <View style={{position: 'absolute', bottom: 2}}>
            <Icon
              name="flame"
              style={{
                paddingHorizontal: 10,
                paddingVertical: 1,
                color: 'white',
              }}
            />
          </View>
        </ImageBackground>
        <ScrollView>
          <View style={{marginBottom: 200, backgroundColor: '#f7f7f7'}}>
            <FlatList
              data={DATA}
              renderItem={({item}) => (
                <Fragment>
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
                </Fragment>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
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
