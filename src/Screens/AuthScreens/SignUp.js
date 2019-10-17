import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar,
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
import {Col, Row} from 'react-native-easy-grid';
import {connect} from 'react-redux';

import AsyncStorage from '@react-native-community/async-storage';

import {signUp} from '../../Publics/Redux/Actions/auth';

import Logo from '../../Assets/brands/icon1-01.png';
import Bg from '../../Assets/img/bg4.jpg';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: '',
        name: '',
        password: '',
        // image:'https://www.shareicon.net/data/2016/09/01/822711_user_512x512.png',
        role: 'user',
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
    if (formData.name.length < 6 || formData.email.length < 6) {
      let errMsg = '';
      if (formData.name.length < 6) {
        errMsg = 'The name must be 6 characters long or more';
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
      // await firebase
      //   .auth()
      //   .createUserWithEmailAndPassword(formData.email, formData.password)
      //   .then(({user}) => {
      //     const idUser = user.uid;
      //     let userf = firebase.auth().currentUser;
      //     userf.updateProfile({displayName: formData.name});
      //     firebase
      //       .database()
      //       .ref('user/' + idUser)
      //       .set({
      //         name: formData.name,
      //         image: formData.image,
      //         id: idUser,
      //         status: 'offline',
      //       });
      //     this.props.navigation.navigate('SignupScreen');
      //   });
      await this.props
        .dispatch(signUp(this.state.formData))
        .then(() => {
          this.props.navigation.navigate('SigninScreen');
          // console.log('Data si props = ', this.props.auth.dataUser.token);
          // this.setState(
          //   {
          //     token: this.props.auth.dataUser.token,
          //   },
          //   () => {
          //     AsyncStorage.setItem('token', this.state.token);
          //     this.props.navigation.navigate('HomeScreen');
          //   },
          // );
        })
        .catch(err => {
          alert(err);
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
                    <Label style={{color: 'white'}}>Name</Label>
                    <Input
                      style={{color: 'white'}}
                      onChangeText={text => this.handleChange('name', text)}
                    />
                  </Item>
                  <Item
                    floatingLabel
                    style={{
                      height: 60,
                      borderBottomWidth: 2,
                      borderBottomColor: '#fff',
                    }}>
                    <Label style={{color: 'white'}}>Email</Label>
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
                    <Label style={{color: 'white'}}>Password</Label>
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
                        this.props.navigation.navigate('SigninScreen');
                      }}>
                      Sign In
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
  console.log('my state = ', state);
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(SignUp);

let btnSignup = {
  textDecorationLine: 'underline',
  color: '#fb724a',
  fontWeight: 'bold',
};

const styles = StyleSheet.create({
  image: {
    width: '70%',
    height: 200,
    marginTop: 10,
    resizeMode: 'contain',
  },
  containerHead: {
    height: 0,
  },
  container: {
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
    marginTop: 20,
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
