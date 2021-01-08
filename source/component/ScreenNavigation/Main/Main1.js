import React, {Component} from 'react';
import {View, Button} from 'react-native';
// created link for Main

class Main1 extends Component {
  render() {
    return (
      <View>
        <Button
          title="Main2"
          onPress={() => {
            this.props.navigation.navigate('Main2');
          }}></Button>
        <Button
          title="Main3"
          onPress={() => {
            this.props.navigation.navigate('Main3');
          }}></Button>
        <Button
          title="Main4"
          onPress={() => {
            this.props.navigation.navigate('Main4');
          }}></Button>
      </View>
    );
  }
}

export default Main1;
