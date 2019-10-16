import React, {Component} from 'react';
import {Row, Col, Grid} from 'react-native-easy-grid';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {Item, Input, Container, Content, Icon} from 'native-base';
import {connect} from 'react-redux';

import {getPackages} from '../../Publics/Redux/Actions/packages';
import {getGuides} from '../../Publics/Redux/Actions/guide';

import Carousel from '../../Components/Carousel/TopDestination';
import Maps from '../../Components/Maps/MapFind';

import Logo from '../../Assets/Background/comp2.jpg';
import FooterTab from '../../Components/Navbars/Footer';

class myHome extends Component {
  constructor() {
    super();
    this.state = {
      userPackages: [],
      Guides: [],
    };
  }

  componentDidMount = async () => {
    await this.props.dispatch(getPackages());
    await this.props.dispatch(getGuides()).then(() => {
      console.log('state user package = ', this.props);
      this.setState({
        userPackages: this.props.packages.dataPackages,
        Guides: this.props.guides.dataGuide,
      });
    });
  };
  render() {
    console.log('state packages = ', this.state.userPackages);
    return (
      <View style={styles.container}>
        <Container>
          <Content style={{height: 145, backgroundColor: '#f5f5f5'}}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={{height: 150}}>
              <ImageBackground
                source={Logo}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'stretch',
                  backgroundColor: '#f9791b',
                }}>
                <Text
                  style={{
                    paddingHorizontal: 20,
                    paddingTop: 20,
                    fontWeight: 'bold',
                    fontSize: 30,
                    color: '#fff',
                  }}>
                  Your Next Trip
                </Text>
                <Item
                  rounded
                  style={{
                    marginTop: 20,
                    paddingHorizontal: 20,
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: '#fff',
                  }}>
                  <Input
                    style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}}
                    placeholderTextColor="#fff"
                    placeholder="Explore Here ..."
                  />
                </Item>
              </ImageBackground>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="md-ribbon"
                  style={{
                    paddingVertical: 13,
                    fontSize: 30,
                    paddingLeft: 10,
                    color: '#f9791b',
                  }}
                />
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    // color: 'grey',
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                  }}>
                  Top Destination
                </Text>
              </View>
              <View style={{height: 250}}>
                <Carousel
                  navigation={this.props.navigation}
                  destination={this.state.userPackages}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="md-search"
                  style={{
                    paddingVertical: 13,
                    fontSize: 30,
                    paddingLeft: 10,
                    color: '#f9791b',
                  }}
                />
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    // color: 'grey',
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                  }}>
                  Find Guide
                </Text>
              </View>
              <View style={{height: 495}}>
                <Maps guides={this.state.Guides} />
              </View>
            </ScrollView>
          </Content>
        </Container>
        <FooterTab />
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('my state = ', state);
  return {
    packages: state.packages,
    guides: state.guides,
  };
};

export default connect(mapStateToProps)(myHome);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    marginVertical: 3,
    marginHorizontal: 16,
  },
});
