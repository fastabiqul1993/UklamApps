import React, {Component} from 'react';
import {
  GiftedChat,
  Bubble,
  Actions,
  SystemMessage,
  Send,
  Composer,
} from 'react-native-gifted-chat';
import {View, StatusBar} from 'react-native';
import {Icon} from 'native-base';
import firebase from 'firebase';
import AsyncStorage from '@react-native-community/async-storage';
import {Database} from '../../Configs/config';
export default class Example extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    // messages: [
    //   {
    //     _id: 1,
    //     text: 'Hello developer',
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: 'React Native',
    //       avatar: 'https://placeimg.com/140/140/any',
    //     },
    //   },
    // ],
    // username: 'aku',
    // uid: 2,
    // image: 'https://placeimg.com/140/140/any',
    // status: 'online',
    // text: '',
    // };
    // this.state = {
    //     messages: [],
    //     username: this.props.data.username,
    //     uid: this.props.data.id,
    //     image: this.props.data.image,
    //     status: this.props.data.status,
    //     text: '',
    //   };
    // }
    this.state = {
      message: '',
      messageList: [],

      // person: this.props.navigation.getParam('item'),
      // userId: AsyncStorage.getItem('userid'),
      // userName: AsyncStorage.getItem('user.name'),
      // userAvatar: AsyncStorage.getItem('user.photo'),
      // email: AsyncStorage.getItem('email'),
      person: {email: 'temannyakura@gmail.com', name: 'temannyakura'},
      userName: 'kura',
      email: 'kura@gmail.com',
      // userAvatar:''
    };
  }

  onSend = async () => {
    if (this.state.message.length > 0) {
      let msgEmail = firebase
        .database()
        .ref('messages')
        .child(this.state.userName)
        .child(this.state.person.name)
        .push().key;
      let updates = {};
      let message = {
        _email: msgEmail,
        text: this.state.message,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        user: {
          _email: this.state.email,
          name: this.state.userName,
          // avatar: this.state.userAvatar,
        },
      };
      updates[
        'messages/' +
          this.state.userName +
          '/' +
          this.state.person.name +
          '/' +
          msgEmail
      ] = message;
      updates[
        'messages/' +
          this.state.person.name +
          '/' +
          this.state.userName +
          '/' +
          msgEmail
      ] = message;
      firebase
        .database()
        .ref()
        .update(updates);
      this.setState({message: ''});
    }
  };

  componentDidMount = async () => {
    // const email = await AsyncStorage.getItem('email');
    // const userId = await AsyncStorage.getItem('userid');
    // const userName = await AsyncStorage.getItem('user.name');
    // const userAvatar = await AsyncStorage.getItem('user.photo');
    // this.setState({email, userId, userName, userAvatar});
    firebase
      .database()
      .ref('messages')
      .child(this.state.userName)
      .child(this.state.person.name)
      .on('child_added', val => {
        this.setState(previousState => ({
          messageList: GiftedChat.append(previousState.messageList, val.val()),
        }));
      });
  };

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#fb724a',
          },
        }}
      />
    );
  }

  // // icon berganti saat input text
  // renderSend = props => {
  //   if (!props.text.trim()) {
  //     // text box empty
  //     return (
  //       <Icon name="microphone" type="FontAwesome" color="#fb724a" size={50} />
  //     );
  //   }
  //   //after type
  //   return <Icon name="ios-send" type="Ionicons" color="#fb724a" size={50} />;
  // };

  render() {
    // console.log('chat data , ', this.props.data);
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <GiftedChat
          // renderSend={this.renderSend}
          renderBubble={this.renderBubble}
          text={this.state.message}
          messages={this.state.messageList}
          onInputTextChanged={val => {
            this.setState({message: val});
          }}
          messages={this.state.messageList}
          onSend={() => this.onSend()}
          showAvatarForEveryMessage={true}
          user={{
            _email: this.state.email,
          }}
        />
      </View>
    );
  }
}
