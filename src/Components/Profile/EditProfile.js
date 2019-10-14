import React from 'react';

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

const EditProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView>
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
          {/* <ImageBackground
                resizeMode="contain"
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  height: '100%',
                  alignItems: 'flex-end',
                  paddingLeft: 20,
                }}
                source={{
                  uri: this.state.userAvatar,
                }}>
                <TouchableOpacity
                  style={{
                    right: 'auto',
                    left: 250,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    borderColor: '#E5E7E9',
                    borderWidth: 1,
                    marginBottom: -25,
                  }}
                  onPress={this.changeImage}>
                  <Image
                    source={require('../assets/icon/photoblack.png')}
                    style={{
                      width: 25,
                      height: 25,
                    }}
                  />
                </TouchableOpacity>
              </ImageBackground> */}
        </View>
        <View style={{marginHorizontal: 20}}>
          <Text style={{color: '#f48023', marginVertical: 10, fontSize: 22}}>
            Account
          </Text>
          <Text style={{fontSize: 18}}>Username</Text>
          <TextInput placeholder="Nama User" style={styles.elementform} />

          <View style={styles.separator}></View>
          <Text style={{fontSize: 18}}>Email</Text>
          <TextInput placeholder="Email" style={styles.elementform} />

          <View style={styles.separator}></View>
          <Text style={{fontSize: 18}}>Address</Text>
          <TextInput placeholder="Address" style={styles.elementform} />

          <View style={styles.separator}></View>
          <Text style={{fontSize: 18}}>Password</Text>
          <TextInput placeholder="Password" style={styles.elementform} />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: '#fb724a',
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 8,
          height: 40,
        }}>
        <Text style={{color: 'white', fontSize: 16}}> Simpan</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default EditProfile;

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
    borderColor: '#ABB2B9',
    borderRadius: 3,
    borderBottomWidth: 2,
    fontSize: 12,
    marginBottom: 0,
    height: 40,
    paddingLeft: 10,
  },
});
