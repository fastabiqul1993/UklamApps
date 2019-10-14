import React, {Component} from 'react';
import {View, StatusBar, ImageBackground, FlatList} from 'react-native';
import {
  Header,
  Button,
  Icon,
  Left,
  Right,
  Container,
  Content,
} from 'native-base';

import Carousel from '../../Components/Carousel/Destination';

import Logo from '../../Assets/img/dest1.jpg';

class myPackage extends Component {

  constructor() {
    super()
    this.state = {
      
    }
  }

  const Item = ({ title }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        <ImageBackground
          source={Logo}
          style={{
            width: '100%',
            height: '80%',
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}>
          <Header style={{marginTop: 10}} transparent>
            <Left>
              <Button transparent>
                <Icon name="arrow-back" />
              </Button>
            </Left>

            <Right>
              <Button transparent>
                <Icon name="menu" />
              </Button>
            </Right>
          </Header>
          <StatusBar translucent backgroundColor={'transparent'} />
        </ImageBackground>
        <Container>
          <Content>
            <FlatList
              data={DATA}
              renderItem={({item}) => <Item title={item.title} />}
              keyExtractor={item => item.id}
            />
          </Content>
        </Container>
      </View>
    );
  }
}

export default myPackage;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
