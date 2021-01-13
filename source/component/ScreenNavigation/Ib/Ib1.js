import React, {Component} from 'react';
import {View, Button} from 'react-native';
// created link for Ideabytes

class Ib1 extends Component {
  render() {
    return (
      <View>
        <Button
          title="Ib2"
          onPress={() => {
            this.props.navigation.navigate('Ib2');
          }}></Button>
        <Button
          title="Ib3"
          onPress={() => {
            this.props.navigation.navigate('Ib3');
          }}></Button>
        <Button
          title="Ib4"
          onPress={() => {
            this.props.navigation.navigate('Ib4');
          }}></Button>
      </View>
    );
  }
}

export default Ib1;