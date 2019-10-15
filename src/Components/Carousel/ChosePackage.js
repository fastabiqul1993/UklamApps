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

class myCarousel extends Component {
  state = {};
  render() {
    return (
      <>
        <View style={styles.container}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.card}>
              {/* {dataCategory.length > 0 ? (
                dataCategory.map((res, index) => {
                  return ( */}
              <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.mainCard}>
                  <View>
                    <Image source={Logo} style={styles.image} />
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
                    <Text
                      style={{
                        position: 'absolute',
                        bottom: 10,
                        paddingHorizontal: 10,
                        paddingVertical: 1,
                        fontSize: 25,
                        color: 'white',
                        fontWeight: 'bold',
                        // backgroundColor: '#2fa31a',
                      }}>
                      Paket 1
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
                        height: '30%',
                        position: 'absolute',
                        opacity: 0.4,
                        bottom: 0,

                        // borderRadius: 50,
                      }}>
                      <Text></Text>
                    </View>
                    <Text
                      style={{
                        position: 'absolute',
                        bottom: 10,
                        paddingHorizontal: 10,
                        paddingVertical: 1,
                        fontSize: 25,
                        color: 'white',
                        fontWeight: 'bold',
                        // backgroundColor: '#2fa31a',
                      }}>
                      Paket 2
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
                        height: '30%',
                        position: 'absolute',
                        opacity: 0.4,
                        bottom: 0,

                        // borderRadius: 50,
                      }}>
                      <Text></Text>
                    </View>
                    <Text
                      style={{
                        position: 'absolute',
                        bottom: 10,
                        paddingHorizontal: 10,
                        paddingVertical: 1,
                        fontSize: 25,
                        color: 'white',
                        fontWeight: 'bold',
                        // backgroundColor: '#2fa31a',
                      }}>
                      Paket 3
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
    width: 150,
    height: 190,
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
