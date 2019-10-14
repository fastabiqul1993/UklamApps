import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Toast,
} from 'native-base';
import {Col, Row} from 'react-native-easy-grid';
import AsyncStorage from '@react-native-community/async-storage';
import Logo from '../../Assets/brands/logo.png';

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        username: '',
        email: '',
        password: '',
        image:
          'https://www.shareicon.net/data/2016/09/01/822711_user_512x512.png',
      },
      showToast: false,
    };
  }

  handleChange = (name, value) => {
    let newFormData = {...this.state.formData};
    newFormData[name] = value;
    this.setState({
      formData: newFormData,
    });
    console.log(newFormData);
  };

  handleSubmit = async () => {
    const {formData} = this.state;
    if (formData.username.length < 6 || formData.email.length < 6) {
      let errMsg = '';
      if (formData.username.length < 6) {
        errMsg = 'The Username must be 6 characters long or more';
      } else if (formData.email.length < 6) {
        errMsg = 'The Email must be 6 characters long or more';
      }
      Toast.show({
        text: errMsg,
        buttonText: 'Ok',
        type: 'danger',
        position: 'bottom',
        duration: 3000,
        style: styles.toast,
      });
    } else {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then(({user}) => {
          const idUser = user.uid;
          let userf = firebase.auth().currentUser;
          userf.updateProfile({displayName: formData.username});
          firebase
            .database()
            .ref('user/' + idUser)
            .set({
              username: formData.username,
              image: formData.image,
              id: idUser,
              status: 'offline',
            });
          this.props.navigation.navigate('SignupScreen');
        });
    }
  };

  componentDidMount = async () => {
    await AsyncStorage.getItem('token', (err, res) => {
      console.log(err, res);
      console.log('ini responnya =', res);
      if (res) this.props.navigation.navigate('HomeScreen');
    });
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.title}>
            <Image source={Logo} style={styles.image} />
          </View>
          <Form>
            <Item
              floatingLabel
              style={{height: 60, borderBottomColor: '#fb724a'}}>
              <Label>Username</Label>
              <Input
                maxLength={15}
                onChangeText={text => this.handleChange('username', text)}
              />
            </Item>

            <Item
              floatingLabel
              style={{height: 60, borderBottomColor: '#fb724a'}}>
              <Label>Email</Label>
              <Input
                keyboardType="email-address"
                autoCompleteType="email"
                onChangeText={text => this.handleChange('email', text)}
              />
            </Item>
            <Item
              floatingLabel
              style={{height: 60, borderBottomColor: '#fb724a'}}>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                maxLength={16}
                onChangeText={text => this.handleChange('password', text)}
              />
            </Item>
            <Button
              full
              dark
              rounded
              style={styles.btnSignin}
              onPress={this.handleSubmit}>
              <Text style={styles.textSignin}>Sign up</Text>
            </Button>
          </Form>
          <Row style={styles.foot}>
            <Col>
              <Text
                style={styles.btnForgot}
                onPress={() => {
                  this.props.navigation.navigate('SigninScreen');
                }}>
                Sign In
              </Text>
            </Col>
          </Row>
        </Content>
      </Container>
    );
  }
}

let btnSignup = {
  textDecorationLine: 'underline',
  color: '#fb724a',
  fontWeight: 'bold',
};

const styles = StyleSheet.create({
  image: {
    width: 280,
    height: 80,
    resizeMode: 'contain',
  },
  containerHead: {
    height: 0,
  },
  container: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 35,
  },
  title: {
    padding: 10,
    alignItems: 'center',
  },

  btnSignin: {
    marginTop: 50,
    marginLeft: 15,
    backgroundColor: '#fb724a',
  },
  textSignin: {
    color: 'white',
  },
  foot: {
    marginTop: 60,
    marginBottom: 50,
    marginLeft: 15,
  },
  toast: {
    margin: 20,
    borderRadius: 10,
  },
  btnSignup: {
    ...btnSignup,
  },
  btnForgot: {
    ...btnSignup,
    textAlign: 'right',
  },
});
