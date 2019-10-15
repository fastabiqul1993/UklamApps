import React, {Component} from 'react';
import {View, Image, StatusBar} from 'react-native';

import splash from '../../src/Assets/splash3.png';

class mySplash extends Component {
  splashLoading = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('result');
      }, 2000);
    });
  };

  componentDidMount = async () => {
    const data = await this.splashLoading();

    if (data !== null) {
      this.props.navigation.navigate('AppNavigator');
    }
  };

  render() {
    return (
      <>
        <StatusBar translucent backgroundColor={'transparent'} />
        <View style={Styles.container}>
          <Image source={splash} style={Styles.splash}></Image>
        </View>
      </>
    );
  }
}

const Styles = {
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  splash: {
    width: '100%',
    height: '100%',
  },
};

export default mySplash;
