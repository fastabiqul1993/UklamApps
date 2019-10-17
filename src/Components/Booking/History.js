import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ToastAndroid,
  FlatList,
} from 'react-native';
import {Container, Header, Content, Icon, Accordion} from 'native-base';
import FooterTab from '../../Components/Navbars/Footer';
import {getTransactionHistory} from '../../Publics/Redux/Actions/transaction';
// import {getAllGuide} from '../../Publics/Redux/Actions/user';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';

class History extends Component {
  // console.log('test props', this.props);
  state = {
    email: '',
    transaction: [],
  };

  componentDidMount = async () => {
    await AsyncStorage.getItem('email').then(email => {
      this.setState({email: email});
    });
    await this.props.dispatch(getTransactionHistory(this.state.email));
    // await this.props.dispatch(getAllGuide());
    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });

    await this.setState({
      transaction: this.props.transaction,
      // guide: this.props.guide,
    });

    // await console.log('trans', this.state.guide);
  };

  renderItem = ({item}) => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ChatScreen', {item})}>
          <View>
            <View>
              <View>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  {item.orderDate}
                </Text>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  {item.package.guide}
                </Text>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  {item.package.name}
                </Text>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  {item.package.description}
                </Text>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  {item.package.price}
                </Text>
                <View
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 10,
                    marginRight: 5,
                    overflow: 'hidden',
                    marginRight: 10,
                  }}>
                  <Image
                    style={{width: 60, height: 60}}
                    resizemode="center"
                    source={{uri: item.package.photo}}
                  />
                </View>

                <Text numberOfLines={1} ellipsizeMode="tail">
                  {item.package.status}
                </Text>
              </View>
              <View></View>
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        {console.log(this.state.transaction)}
        <FlatList
          data={this.state.transaction}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />

        <FooterTab />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    transaction: state.transaction.transactions,
    // guide: state.user.guide,
  };
};
export default withNavigation(connect(mapStateToProps)(History));
