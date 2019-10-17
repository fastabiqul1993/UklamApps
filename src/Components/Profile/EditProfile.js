import React, {Component} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  ToastAndroid,
  ImageBackground,
  StatusBar,
  PermissionsAndroid,
  Dimensions,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {Icon} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {getUser, patchUser} from '../../Publics/Redux/Actions/user';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.navigation.getParam('profile').name,
      phone: '',
      address: '',
    };
  }

  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  changeImage = async type => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      mediaType: 'photo',
    };

    let cameraPermission =
      (await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA)) &&
      PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ) &&
      PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
    if (!cameraPermission) {
      cameraPermission = await this.requestCameraPermission();
    } else {
      ImagePicker.showImagePicker(options, response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          const source = {uri: 'data:image/jpeg;base64,' + response.data};

          setImage(response.uri);
          setImgData(source.uri);

          setInterval(function() {
            setImgLoading(true);
          }, 5000).catch(err => console.log(err));
        }
      });
    }
  };

  handleEdit = async () => {
    if (
      this.state.newname.length > 0 ||
      this.state.newphone.length > 0 ||
      this.state.newaddress > 0
    ) {
      if (this.state.newphone.length === 0) {
        var data = {name: this.state.user.name, email: this.state.newphone};
      } else {
        var data = {name: this.state.newname, email: this.state.user.phone};
      }
      await this.props
        .dispatch(patchUser(this.props.navigation.getParam('user').email, data))
        .then(async () => {
          AsyncStorage.setItem('name', data.name);
          AsyncStorage.setItem('email', data.email);
          await this._toastpatch();
        });
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'Tidak ada perubahan',
        ToastAndroid.LONG, //can be SHORT, LONG
        ToastAndroid.BOTTOM, //can be TOP, BOTTON, CENTER
        25, //xOffset
        50, //yOffset
      );
    }
  };

  _toastpatch = () => {
    //function to make Toast With Duration, Gravity And Offset
    ToastAndroid.showWithGravityAndOffset(
      'Update Success',
      ToastAndroid.LONG, //can be SHORT, LONG
      ToastAndroid.BOTTOM, //can be TOP, BOTTON, CENTER
      25, //xOffset
      50, //yOffset
    );
  };

  render() {
    const {photo, email} = this.props.navigation.getParam('user');
    const {name, phone, address} = this.props.navigation.getParam('profile');
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <ScrollView>
          {console.warn(this.state.name)}
          <View
            style={{
              alignItems: 'center',
              paddingTop: 60,
              flex: 1,
              flexDirection: 'column',
              backgroundColor: '#f48023',
              height: 200,
              justifyContent: 'flex-end',
            }}>
            <ImageBackground
              source={{uri: `${photo}`}}
              resizeMode="center"
              style={{width: 400, height: 200}}>
              <TouchableOpacity
                style={{
                  marginTop: 'auto',
                  bottom: -25,
                  right: 60,
                  marginLeft: 'auto',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  borderColor: '#E5E7E9',
                  borderWidth: 1,
                }}
                onPress={this.changeImage}>
                <Icon
                  name="camera"
                  type="MaterialIcons"
                  style={{color: '#fb724a'}}
                />
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text
              style={{
                color: '#f48023',
                marginVertical: 10,
                fontSize: 22,
                alignSelf: 'center',
              }}>
              Account
            </Text>
            <Text style={{fontSize: 18}}>Username</Text>
            <TextInput
              defaultValue={name}
              style={styles.elementform}
              onChangeText={text => this.setState({newname: text})}
            />

            <Text style={{fontSize: 18}}>Phone</Text>
            <TextInput
              defaultValue={phone}
              style={styles.elementform}
              onChangeText={text => this.setState({newphone: text})}
            />

            <Text style={{fontSize: 18}}>Address</Text>
            <TextInput
              defaultValue={address}
              style={styles.elementform}
              onChangeText={text => this.setState({newaddress: text})}
            />
            {/* 
          <Text style={{fontSize: 18}}>Password</Text>
          <TextInput placeholder="Password" style={styles.elementform} /> */}
          </View>
          <TouchableOpacity
            onPress={this.handleEdit}
            style={{
              marginTop: 20,
              backgroundColor: '#fb724a',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 8,
              height: 40,
              width: 160,
              right: 20,
              marginLeft: 'auto',
            }}>
            <Text style={{color: 'white', fontSize: 16}}> Simpan</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default connect()(EditProfile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  separator: {
    height: 2,
    backgroundColor: '#eeeeee',
    marginTop: 10,
    marginHorizontal: 10,
  },
  bigseparator: {
    height: 10,
    backgroundColor: '#eeeeee',
    marginTop: 10,
  },
  logoutButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  logoutContainer: {
    marginHorizontal: 30,
  },
  btnTxt: {
    color: '#fff',
  },
  image: {
    marginTop: 20,
    minWidth: 200,
    height: 200,
    resizeMode: 'contain',
    backgroundColor: '#ccc',
  },
  img: {
    flex: 1,
    height: 100,
    margin: 5,
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#ccc',
  },
  progressBar: {
    backgroundColor: 'rgb(3, 154, 229)',
    height: 3,
    shadowColor: '#000',
  },
  btn: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    backgroundColor: 'rgb(3, 154, 229)',
    marginTop: 20,
    alignItems: 'center',
  },

  elementform: {
    borderBottomWidth: 2,
    borderColor: '#eeeeee',
    fontSize: 12,
    marginBottom: 10,
    height: 40,
    paddingLeft: 10,
    fontSize: 14,
  },
});
