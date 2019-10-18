import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  ToastAndroid,
  Alert,
} from 'react-native';
import {Icon, Button, Header, DatePicker, Text, Right, Left} from 'native-base';
import FooterTab from '../../Components/Navbars/Footer';
import AsyncStorage from '@react-native-community/async-storage';
import {postOrder} from '../../Publics/Redux/Actions/transaction';
import {connect} from 'react-redux';

class Activity extends Component {
  state = {
    pickedorder: [],
    order: [],
    guide: [],
    guideprofile: [],
    date: '',
    orderId: '',
    chosenDate: '',
    showStatus: 'rejected',
  };

  componentDidMount = async () => {
    await AsyncStorage.getItem('email').then(email => {
      this.setState({email: email});
    });
    console.log('cari statusnya bro', this.props.navigation.state.params);
    await this.setState({
      pickedorder: this.props.navigation.state.params.destination,
      guide: this.props.navigation.state.params.guide,
      guideprofile: this.props.navigation.state.params.guide.profile,
    });
    await new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
    // await console.log('cek ini', this.props.navigation.state.params);
  };

  setDate = newDate => {
    this.setState({chosenDate: newDate});
  };

  handleOrder = async () => {
    var data = {
      package: this.state.pickedorder._id,
      orderDate: this.state.chosenDate.toString().substr(4, 12),
    };
    console.log('lagi post order', data, this.state.email);
    await this.props
      .dispatch(postOrder(data, this.state.email))
      .then(async () => {
        await this._toastOrder();
        await console.log('hasil post order: ', this.props.orderReturn);
        await this.setState({order: this.props.orderReturn});
      });
  };

  _toastOrder = () => {
    //function to make Toast With Duration, Gravity And Offset
    ToastAndroid.showWithGravityAndOffset(
      'Booking sedang diproses, silahkan menunggu konfirmasi dari Guide  {\n}Apabila ada pertanyaan silahkan hubungi Guide dengan menekan tombol Pesan',
      ToastAndroid.LONG, //can be SHORT, LONG
      ToastAndroid.CENTER, //can be TOP, BOTTON, CENTER
      25, //xOffset
      50, //yOffset
    );
  };

  handleAlert = () => {
    console.warn(this.state.chosenDate);
    if (this.state.chosenDate != '') {
      Alert.alert(
        'Perhatian',
        'Apakah Anda Yakin untuk mengambil paket ini?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: this.handleOrder},
        ],
        {cancelable: false},
      );
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'Silahkan pilih Tanggal terlebih dulu',
        ToastAndroid.LONG, //can be SHORT, LONG
        ToastAndroid.CENTER, //can be TOP, BOTTON, CENTER
        25, //xOffset
        50, //yOffset
      );
    }
  };

  render() {
    const {description, photo, price, type, _id} = this.state.pickedorder;

    return (
      <SafeAreaView style={{flex: 1}}>
        {console.warn('Activity', this.state.pickedorder)}
        <StatusBar translucent backgroundColor="transparent" />
        {this.state.pickedorder.name != null || undefined ? (
          <View
            style={{
              marginHorizontal: 30,
              marginVertical: 10,
              flex: 1,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: '#EBEDEF',
              overflow: 'hidden',
            }}>
            <ImageBackground
              source={{uri: photo}}
              style={{
                width: '100%',
                height: 200,
                backgroundColor: '#f9791b',
              }}>
              <View
                style={{
                  backgroundColor: '#000',
                  width: '100%',
                  height: '40%',
                  position: 'absolute',
                  opacity: 0.4,
                  bottom: 0,
                }}>
                <Text></Text>
              </View>
              <View style={{position: 'absolute', bottom: 35}}>
                <Text
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 1,
                    fontSize: 30,
                    color: 'white',
                    fontWeight: 'bold',
                    // backgroundColor: '#2fa31a',
                  }}>
                  {this.state.pickedorder.name}
                  Nama
                </Text>
              </View>
              <View style={{position: 'absolute', bottom: 14, marginLeft: 27}}>
                <Text
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 1,
                    fontSize: 15,
                    color: 'white',
                    // backgroundColor: '#2fa31a',
                  }}>
                  {this.state.guideprofile.name}
                  Nama Guide
                </Text>
              </View>
              <View
                style={{
                  position: 'absolute',
                  bottom: 15,
                  marginLeft: 10,
                }}>
                <Icon
                  type="FontAwesome"
                  name="map-marker"
                  style={{
                    fontSize: 20,
                    paddingHorizontal: 10,
                    paddingVertical: 1,
                    color: 'white',
                  }}
                />
              </View>
            </ImageBackground>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>Pilih Tanggal : </Text>
              <DatePicker
                defaultDate={new Date()}
                minimumDate={new Date(2019, 1, 1)}
                maximumDate={new Date(2019, 12, 31)}
                locale={'id'}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={'fade'}
                androidMode={'default'}
                placeHolderText="Select date"
                textStyle={{color: 'green'}}
                placeHolderTextStyle={{color: '#d3d3d3'}}
                onDateChange={this.setDate}
                disabled={false}
              />
            </View>

            <Text>
              Deskripsi Paket: {'\n'}
              {description}
            </Text>
            <Text>
              Harga Paket Rp.{' '}
              {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </Text>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: '#fb724a',
                  marginHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 10,
                  flex: 1,
                }}
                onPress={this.handleAlert}>
                <Text
                  style={{color: 'white', fontSize: 16, alignSelf: 'center'}}>
                  Book Now
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: '#fb724a',
                  marginHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 10,
                  flex: 1,
                }}
                onPress={() =>
                  this.props.navigation.navigate('ChatScreen', {
                    item: this.state.order,
                  })
                }>
                <Text
                  style={{color: 'white', fontSize: 16, alignSelf: 'center'}}>
                  Chat Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Text>Silakan pilih paket terlebih dulu</Text>
          </View>
        )}
        <FooterTab />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    orderReturn: state.transaction.order,
  };
};

export default connect(mapStateToProps)(Activity);
