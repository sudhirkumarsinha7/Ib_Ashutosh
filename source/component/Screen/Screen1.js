import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
class Screen1 extends Component {
  render() {
    return (
      <View>
        <Button
          title="screen2"
          onPress={() => {
            this.props.navigation.navigate('Screen2');
          }}></Button>
        <Button
          title="screen3"
          onPress={() => {
            this.props.navigation.navigate('Screen3');
          }}></Button>
        <Button
          title="screen4"
          onPress={() => {
            this.props.navigation.navigate('Screen4');
          }}></Button>
      </View>
    );
  }
}
export default Screen1;
