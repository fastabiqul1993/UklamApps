import React, {Component} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
// import firebase from 'firebase';
// import AsyncStorage from '@react-native-community/async-storage';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
      username: 'aku',
      uid: 2,
      image: 'https://placeimg.com/140/140/any',
      status: 'online',
      text: '',
    };
    // this.state = {
    //     messages: [],
    //     username: this.props.data.username,
    //     uid: this.props.data.id,
    //     image: this.props.data.image,
    //     status: this.props.data.status,
    //     text: '',
    //   };
  }

  render() {
    // console.log('chat data , ', this.props.data);
    return (
      <GiftedChat
        text={this.state.text}
        messages={this.state.messages}
        onSend={this.onSend}
        showAvatarForEveryMessage={true}
        user={{
          _id: this.state.myuid,
          name: this.state.myname,
          avatar: this.state.avatar,
        }}
        onInputTextChanged={value => this.setState({text: value})}
      />
    );
  }
}
