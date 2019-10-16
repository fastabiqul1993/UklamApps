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
import {Badge, Icon, Item} from 'native-base';

import Logo from '../../Assets/img/exam.jpg';
import Logo1 from '../../Assets/img/bg.jpg';

class myCarousel extends Component {
  state = {};
  render() {
    console.log('props in carousel = ', this.props.data);
    let destination = this.props.data;
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
                        this.props.navigation.navigate('PackageItemScreen');
                      }}>
                      <View style={styles.mainCard} key={index}>
                        <View>
                          <Image
                            source={{uri: res.photo}}
                            style={styles.image}
                          />
                          <View
                            style={{
                              backgroundColor: '#000',
                              width: '100%',
                              height: '30%',
                              position: 'absolute',
                              opacity: 0.2,
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
                              bottom: 10,
                              paddingHorizontal: 10,
                              paddingVertical: 1,
                              fontSize: 25,
                              color: 'white',
                              fontWeight: 'bold',
                              // backgroundColor: '#2fa31a',
                            }}>
                            {res.name}
                          </Text>
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
    width: 250,
    height: 170,
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
