import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Badge} from 'native-base';

import Logo from '../../Assets/img/exam.jpg';
import Logo1 from '../../Assets/img/bg.jpg';

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
];

class myCarousel extends Component {
  state = {};
  render() {
    console.log('props in carousel = ', this.props.data);
    console.log('props in guide = ', this.props.navigation.state.params.user);
    let destination = this.props.data;
    let guide = this.props.navigation.state.params.user;
    return (
      <>
        <View style={styles.container}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.card}>
              {destination.length > 0 ? (
                destination.map((res, index) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => {
                        this.props.navigation.navigate('Activity', {
                          destination: res,
                          guide: guide,
                        });
                      }}>
                      <View style={styles.mainCard} key={index}>
                        <View>
                          <Image
                            source={{uri: res.photo}}
                            style={styles.image}
                          />
                          {/* <View
                            style={{
                              width: '100%',
                              height: '70%',
                              position: 'absolute',
                              flexDirection: 'row',
                            }}>
                            <FlatList
                              data={DATA}
                              renderItem={({item}) => (
                                <View style={{marginVertical: 3}}>
                                  {}
                                  <Badge primary>
                                    <Text>{item.title}</Text>
                                  </Badge>
                                </View>
                              )}
                              keyExtractor={item => item.id}
                            />
                          </View> */}

                          <View
                            style={{
                              backgroundColor: '#000',
                              width: '100%',
                              height: '40%',
                              position: 'absolute',
                              opacity: 0.3,
                              bottom: 0,
                              // borderRadius: 20,
                              borderBottomRightRadius: 20,
                              borderBottomLeftRadius: 20,

                              // borderRadius: 50,
                            }}>
                            <Text></Text>
                          </View>
                          <Text
                            style={{
                              position: 'absolute',
                              bottom: 33,
                              paddingHorizontal: 10,
                              paddingVertical: 1,
                              fontSize: 21,
                              color: 'white',
                              fontWeight: 'bold',
                              // backgroundColor: '#2fa31a',
                            }}>
                            {res.name}
                          </Text>
                          <Text
                            style={{
                              position: 'absolute',
                              bottom: 9,
                              paddingHorizontal: 10,
                              paddingVertical: 1,
                              fontSize: 15,
                              color: 'white',
                              fontWeight: 'bold',
                              // backgroundColor: '#2fa31a',
                            }}>
                            Rp.
                            {res.price
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                          </Text>
                        </View>
                        <View
                          style={{
                            width: '100%',
                            height: '20%',
                            position: 'absolute',
                            top: 10,
                            flexDirection: 'row',
                          }}>
                          <View style={{marginVertical: 0}}>
                            {res.type === 'tour' ? (
                              <Badge primary style={{height: 30}}>
                                <Text style={{fontSize: 20, color: 'white'}}>
                                  {res.type}
                                </Text>
                              </Badge>
                            ) : res.type === 'Artificial' ? (
                              <Badge info style={{height: 30}}>
                                <Text style={{fontSize: 20, color: 'white'}}>
                                  {res.type}
                                </Text>
                              </Badge>
                            ) : res.type === 'Nature' ? (
                              <Badge success style={{height: 30}}>
                                <Text style={{fontSize: 20, color: 'white'}}>
                                  {res.type}
                                </Text>
                              </Badge>
                            ) : res.type === 'Horror' ? (
                              <Badge danger style={{height: 30}}>
                                <Text style={{fontSize: 20, color: 'white'}}>
                                  {res.type}
                                </Text>
                              </Badge>
                            ) : (
                              <Badge
                                style={{height: 30, backgroundColor: 'black'}}>
                                <Text style={{fontSize: 20, color: 'white'}}>
                                  {res.type}
                                </Text>
                              </Badge>
                            )}
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })
              ) : (
                <Text>Loading..</Text>
              )}
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

export default myCarousel;

const styles = StyleSheet.create({
  //   container: {
  //     position: 'relative',
  //     marginBottom: 13,
  //   },
  card: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'stretch',
    marginLeft: 3,
    marginRight: 3,
    zIndex: 0,
  },
  mainCard: {
    width: 280,
    height: 170,
    margin: 5,
    backgroundColor: '#f9791b',
    borderRadius: 20,
  },
  text: {
    fontSize: 15,
    color: 'black',
  },

  title: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontWeight: 'bold',
    fontSize: 28,
    color: 'black',
    margin: 5,
    marginLeft: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    bottom: 0,
    borderRadius: 20,
  },
});
