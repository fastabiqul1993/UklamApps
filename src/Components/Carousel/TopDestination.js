import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Badge, Icon} from 'native-base';

import Logo from '../../Assets/img/exam.jpg';
import Logo1 from '../../Assets/img/bg.jpg';
import jogja from '../../Assets/Background/jogja.jpg';
import malang from '../../Assets/Background/malang.jpg';

class myCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('destination from home = ', this.props);
    let {destination} = this.props;
    return (
      <>
        <View style={styles.container}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.card}>
              {/* {dataCategory.length > 0 ? (
                dataCategory.map((res, index) => {
                  return ( */}
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  this.props.navigation.navigate('DestinationScreen', {
                    destination: destination,
                  });
                }}>
                <View style={styles.mainCard}>
                  <View>
                    <Image source={jogja} style={styles.image} />
                    <View
                      style={{
                        backgroundColor: '#000',
                        width: '100%',
                        height: '35%',
                        position: 'absolute',
                        opacity: 0.2,
                        bottom: 0,
                        borderRadius: 20,

                        // borderRadius: 50,
                      }}>
                      <Text></Text>
                    </View>
                    <Text
                      style={{
                        position: 'absolute',
                        bottom: 35,
                        paddingHorizontal: 10,
                        paddingVertical: 1,
                        fontSize: 25,
                        color: 'white',
                        fontWeight: 'bold',
                        // backgroundColor: '#2fa31a',
                      }}>
                      Yogyakarta
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  this.props.navigation.navigate('DestinationScreen', {
                    destination: destination,
                  });
                }}>
                <View style={styles.mainCard}>
                  <View>
                    <Image source={malang} style={styles.image} />
                    <View
                      style={{
                        backgroundColor: '#000',
                        width: '100%',
                        height: '35%',
                        position: 'absolute',
                        opacity: 0.2,
                        bottom: 0,
                        borderRadius: 20,

                        // borderRadius: 50,
                      }}>
                      <Text></Text>
                    </View>
                    <Text
                      style={{
                        position: 'absolute',
                        bottom: 35,
                        paddingHorizontal: 10,
                        paddingVertical: 1,
                        fontSize: 25,
                        color: 'white',
                        fontWeight: 'bold',
                        // backgroundColor: '#2fa31a',
                      }}>
                      Malang
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.mainCard}>
                  <View>
                    <Image source={Logo} style={styles.image} />
                    <View
                      style={{
                        backgroundColor: '#000',
                        width: '100%',
                        height: '35%',
                        position: 'absolute',
                        opacity: 0.2,
                        bottom: 0,
                        borderRadius: 20,

                        // borderRadius: 50,
                      }}>
                      <Text></Text>
                    </View>
                    <Text
                      style={{
                        position: 'absolute',
                        bottom: 35,
                        paddingHorizontal: 10,
                        paddingVertical: 1,
                        fontSize: 25,
                        color: 'white',
                        fontWeight: 'bold',
                        // backgroundColor: '#2fa31a',
                      }}>
                      Bali
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              {/* );
                })
              ) : (
                <Text>Loading..</Text>
              )} */}
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
    width: 170,
    height: 230,
    margin: 5,
    backgroundColor: '#f9791b',
    borderRadius: 20,
  },
  badge: {
    backgroundColor: '#edbc5a',
    position: 'absolute',
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
