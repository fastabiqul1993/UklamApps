import React, {Component, Fragment} from 'react';
import {View, StatusBar, ImageBackground, StyleSheet, Text} from 'react-native';
import {Header, Button, Icon, Left, Right, Thumbnail} from 'native-base';

import Maps from '../../Components/Maps/MapFind';

import Logo from '../../Assets/img/dest1.jpg';
import Logo1 from '../../Assets/img/bg2.jpg';

class myPackage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View>
        <Maps />
      </View>
    );
  }
}

export default myPackage;
