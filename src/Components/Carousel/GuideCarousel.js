import React, {Component, Fragment} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Badge} from 'native-base';

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
    console.log('destination from mapfind = ', this.props);
    let {guides} = this.props;
    return (
      <>
        <View style={styles.container}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.card}>
              {guides.length > 0 ? (
                guides.map((res, index) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      // onPress={() => {
                      //   this.props.navigation.navigate('DestinationScreen', {
                      //     destination: destination,
                      //   });
                      // }}
                    >
                      <View style={styles.mainCard}>
                        <View>
                          <Image
                            source={{uri: res.photo}}
                            style={styles.image}
                          />
                          <View
                            style={{
                              backgroundColor: '#000',
                              width: '100%',
                              height: '35%',
                              position: 'absolute',
                              opacity: 0.2,
                              bottom: 0,
                              // borderRadius: 20,
                              borderBottomLeftRadius: 20,
                              borderBottomRightRadius: 20,

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
                            {res.profile.name}
                          </Text>
                          {res.profile.language.map((lang, index) => (
                            <Fragment>
                              {lang === 'bahasa' ? (
                                <Badge
                                  primary
                                  style={{
                                    position: 'absolute',
                                    bottom: 45,
                                    height: 25,
                                  }}>
                                  <Text
                                    style={{
                                      fontWeight: 'bold',
                                      fontSize: 15,
                                      color: 'white',
                                    }}>
                                    {lang}
                                  </Text>
                                </Badge>
                              ) : lang === 'english' ? (
                                <Badge
                                  danger
                                  style={{
                                    position: 'absolute',
                                    bottom: 45,
                                    height: 25,
                                    left: 65,
                                  }}>
                                  <Text
                                    style={{
                                      fontWeight: 'bold',
                                      fontSize: 15,
                                      color: 'white',
                                    }}>
                                    {lang}
                                  </Text>
                                </Badge>
                              ) : (
                                <Badge
                                  success
                                  style={{
                                    position: 'absolute',
                                    bottom: 45,
                                    height: 25,
                                    left: 130,
                                  }}>
                                  <Text
                                    style={{
                                      fontWeight: 'bold',
                                      fontSize: 15,
                                      color: 'white',
                                    }}>
                                    {lang}
                                  </Text>
                                </Badge>
                              )}
                            </Fragment>
                          ))}
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
    width: 240,
    height: 150,
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
