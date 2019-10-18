import React, {Component} from 'react';
import {SafeAreaView, View, StyleSheet, Text, ToastAndroid} from 'react-native';
import {Container, Tab, Tabs} from 'native-base';
import {Row, Grid} from 'react-native-easy-grid';

import HeaderChat from '../../Components/Navbars/HeaderChat';
import Chat from '../../Components/Chats/Chat';

const myChat = props => {
  return (
    <SafeAreaView style={styles.container}>
      {console.log(props.navigation.getParam('item'))}
      <Grid>
        <HeaderChat data={props.navigation.getParam('item')} />
        <Row
          size={1}
          style={{
            backgroundColor: '#fb724a',
            //   borderBottomLeftRadius: 50,
            //   borderBottomRightRadius: 50,
          }}>
          <Container style={{backgroundColor: '#fb724a'}}></Container>
        </Row>
        <Row size={90}>
          <Container
            style={{
              backgroundColor: 'white',
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              height: '100%',
            }}>
            <Chat data={props.navigation.getParam('item')} />
          </Container>
        </Row>
      </Grid>
    </SafeAreaView>
  );
};

export default myChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    // padding: 10,
    marginVertical: 3,
    marginHorizontal: 16,
  },
});
