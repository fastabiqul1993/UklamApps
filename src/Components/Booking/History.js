import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import {Container, Header, Content, Icon, Accordion} from 'native-base';
import FooterTab from '../../Components/Navbars/Footer';
import {getTransactionHistory} from '../../Publics/Redux/Actions/transaction';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

class History extends Component {
  state = {
    email: '',
    transaction: [],
  };

  componentDidMount = async () => {
    await AsyncStorage.getItem('email').then(email => {
      this.setState({email: email});
    });
    await this.props
      .dispatch(getTransactionHistory(this.state.email))
      .then(this.setState({transaction: this.props.transaction}))
      .then(console.log(this.state.transaction));
  };

  _renderHeader(item, expanded) {
    return (
      <View
        style={{
          marginTop: 10,
          marginHorizontal: 10,
          borderRadius: 8,
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#fb724a',
        }}>
        <Text style={{fontWeight: '600', color: 'white'}}>
          {item.package.name}
        </Text>
        {expanded ? (
          <Icon style={{fontSize: 18}} name="remove-circle" />
        ) : (
          <Icon style={{fontSize: 18}} name="add-circle" />
        )}
      </View>
    );
  }
  _renderContent(item) {
    return (
      <View
        style={{
          marginBottom: 10,
          marginHorizontal: 10,
          backgroundColor: '#FBEEE6',
          flexDirection: 'row',
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          paddingVertical: 15,
          paddingHorizontal: 5,
          justifyContent: 'space-between',
          alignContent: 'center',
          paddingHorizontal: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
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
          <View>
            <Text>{item.package.description}</Text>
            <Text style={{fontSize: 12, color: 'grey'}}>{item.orderDate}</Text>
            <Text style={{fontSize: 12, color: 'grey'}}>{item.guide}</Text>
            <Text style={{fontSize: 12, color: 'grey'}}>
              Rp. {item.package.price}
            </Text>
            <Text style={{fontSize: 12, color: 'grey'}}>{item.status}</Text>
          </View>
        </View>
        <View style={{justifyContent: ce}}>
          <Icon
            active
            name="message"
            type="MaterialIcons"
            style={{color: '#fb724a'}}
          />
          <Text>Message {item.package.guide}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <Accordion
          dataArray={this.state.transaction}
          animation={true}
          expanded={true}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
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
  };
};
export default connect(mapStateToProps)(History);
