import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';
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
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {Col, Row} from 'react-native-easy-grid';

import {Login} from '../../Publics/Redux/Actions/auth';

import Logo from '../../Assets/brands/icon1-01.png';
import Bg from '../../Assets/Background/bg.jpg';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: '',
        password: '',
        role: 'user',
      },
      token: '',
      showToast: false,
      email: '',
      phone: '',
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
    // e.preventDefault();
    await this.props
      .dispatch(Login(this.state.formData))
      .then(() => {
        console.log('Data si props = ', this.props.auth.dataUser.token);
        this.setState(
          {
            token: this.props.auth.dataUser.token,
            email: this.props.auth.dataUser.guide.email,
            phone: this.props.auth.dataUser.guide.profile.phone,
          },
          () => {
            AsyncStorage.setItem('token', this.state.token);
            AsyncStorage.setItem('email', this.state.email);
            AsyncStorage.setItem('phone', this.state.phone);
            this.props.navigation.navigate('HomeScreen');
            console.warn(this.state.email, this.state.phone);
          },
        );
      })
      .catch(err => {
        alert(err);
      });
  };

  componentDidMount = async () => {
    await AsyncStorage.getItem('token', (err, res) => {
      console.log('Get AsynStorage Token =', res);
      if (res) {
        this.props.navigation.navigate('HomeScreen');
        console.warn('siapa', this.state.email, this.state.phone);
      }
    });
  };

  render() {
    return (
      <Fragment>
        <StatusBar translucent backgroundColor={'transparent'} />
        <Container>
          <Content>
            <ImageBackground
              source={Bg}
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#fb724a',
              }}>
              {/* <Container style={styles.container}>
            <Content showsVerticalScrollIndicator={false}> */}
              <View style={{marginHorizontal: 20}}>
                <View style={styles.title}>
                  <Image source={Logo} style={styles.image} />
                </View>
                <Form>
                  <Item
                    floatingLabel
                    style={{
                      height: 60,
                      borderBottomWidth: 2,
                      borderBottomColor: '#fff',
                    }}>
                    <Label style={{color: 'white', fontSize: 20}}>Email</Label>
                    <Input
                      style={{color: 'white'}}
                      keyboardType="email-address"
                      autoCompleteType="email"
                      onChangeText={text => this.handleChange('email', text)}
                    />
                  </Item>
                  <Item
                    floatingLabel
                    style={{
                      height: 60,
                      borderBottomWidth: 2,
                      borderBottomColor: '#fff',
                    }}>
                    <Label style={{color: 'white', fontSize: 20}}>
                      Password
                    </Label>
                    <Input
                      style={{color: 'white'}}
                      secureTextEntry={true}
                      onChangeText={text => this.handleChange('password', text)}
                    />
                  </Item>
                  <Button
                    full
                    dark
                    rounded
                    style={styles.btnSignin}
                    // onPress={() => {
                    //   this.props.navigation.navigate('HomeScreen');
                    // }}
                    onPress={() => {
                      this.handleSubmit();
                    }}>
                    <Text style={styles.textSignin}>Sign In</Text>
                  </Button>
                </Form>
                <Row style={styles.foot}>
                  <Col>
                    <Text
                      style={styles.btnForgot}
                      onPress={() => {
                        this.props.navigation.navigate('SignupScreen');
                      }}>
                      Sign Up
                    </Text>
                  </Col>
                  {/* <Col>
                <Text
                  style={styles.btnForgot}
                  onPress={() => {
                    this.props.navigation.navigate('HomeScreen');
                  }}>
                  as Guest...
                </Text>
              </Col> */}
                </Row>
                {/* </Content>
          </Container> */}
              </View>
            </ImageBackground>
          </Content>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(SignIn);

let btnSignup = {
  textDecorationLine: 'underline',
  color: '#fb724a',
  fontWeight: 'bold',
};

const styles = StyleSheet.create({
  image: {
    width: '70%',
    height: 200,
    marginTop: 20,
    marginBottom: 25,
    resizeMode: 'contain',
  },
  title: {
    padding: 10,
    alignItems: 'center',
  },

  btnSignin: {
    marginTop: 50,
    backgroundColor: 'transparent',
    opacity: 0.8,
    borderColor: 'white',
    borderWidth: 2,
  },
  textSignin: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Courier New',
    // fontWeight: 'bold',
  },
  foot: {
    marginTop: 100,
    marginBottom: 50,
    marginLeft: 15,
  },
  btnSignup: {
    ...btnSignup,
  },
  btnForgot: {
    ...btnSignup,
    textAlign: 'right',
    color: 'white',
  },
});
