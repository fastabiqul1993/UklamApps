import React, {Component} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {Container, Footer, FooterTab, Button, Icon, Text} from 'native-base';

export default class FooterTabs extends Component {
  render() {
    return (
      <Footer>
        <FooterTab style={{backgroundColor: '#FFF'}}>
          <Button vertical>
            <Icon name="search" type="Feather" style={{color: '#fb724a'}} />
            <Text style={{fontSize: 10}}>Explore</Text>
          </Button>
          <Button vertical>
            <Icon name="calendar" type="Feather" style={{color: '#fb724a'}} />
            <Text style={{fontSize: 10}}>Booking</Text>
          </Button>
          <Button vertical active activeButtonStyle={{backgroundColor: 'red'}}>
            <Icon
              active
              name="message"
              type="MaterialIcons"
              style={{color: '#fb724a'}}
            />
            <Text style={{fontSize: 10}}>Chat</Text>
          </Button>
          <Button vertical>
            <Icon name="person" style={{color: '#fb724a'}} />
            <Text style={{fontSize: 10}}>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
