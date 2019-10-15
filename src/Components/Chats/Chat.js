import React, {Component} from 'react';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import {View, StatusBar} from 'react-native';
import {Icon} from 'native-base';
import firebase from 'firebase';
import AsyncStorage from '@react-native-community/async-storage';

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
      person: this.props.navigation.getParam('item'),
      userId: AsyncStorage.getItem('userid'),
      userName: AsyncStorage.getItem('user.name'),
      userAvatar: AsyncStorage.getItem('user.photo'),
    };
  }

  onSend = async () => {
    if (this.state.message.length > 0) {
      let msgId = firebase
        .database()
        .ref('messages')
        .child(this.state.userId)
        .child(this.state.person.id)
        .push().key;
      let updates = {};
      let message = {
        _id: msgId,
        text: this.state.message,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        user: {
          _id: this.state.userId,
          name: this.state.userName,
          avatar: this.state.userAvatar,
        },
      };
      updates[
        'messages/' +
          this.state.userId +
          '/' +
          this.state.person.id +
          '/' +
          msgId
      ] = message;
      updates[
        'messages/' +
          this.state.person.id +
          '/' +
          this.state.userId +
          '/' +
          msgId
      ] = message;
      firebase
        .database()
        .ref()
        .update(updates);
      this.setState({message: ''});
    }
  };

  componentDidMount = async () => {
    const userId = await AsyncStorage.getItem('userid');
    const userName = await AsyncStorage.getItem('user.name');
    const userAvatar = await AsyncStorage.getItem('user.photo');
    this.setState({userId, userName, userAvatar});
    firebase
      .database()
      .ref('messages')
      .child(this.state.userId)
      .child(this.state.person.id)
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

  // icon berganti saat input text
  renderSend = props => {
    if (!props.text.trim()) {
      // text box empty
      return (
        <Icon name="microphone" type="FontAwesome" color="#fb724a" size={50} />
      );
    }
    //after type
    return <Icon name="ios-send" type="Ionicons" color="#fb724a" size={50} />;
  };

  render() {
    // console.log('chat data , ', this.props.data);
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <GiftedChat
          renderSend={this.renderSend}
          renderBubble={this.renderBubble}
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
      </View>
    );
  }
}
