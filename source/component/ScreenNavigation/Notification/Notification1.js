import React, {Component} from 'react';
import {View, Button} from 'react-native';
//created link for all the holiday of ideabytes

class Notification1 extends Component {
  render() {
    return (
      <View>
        <Button
          title="Notification2"
          onPress={() => {
            this.props.navigation.navigate('Notification2');
          }}></Button>
        <Button
          title="Notification3"
          onPress={() => {
            this.props.navigation.navigate('Notification3');
          }}></Button>
        <Button
          title="Notification4"
          onPress={() => {
            this.props.navigation.navigate('Notification4');
          }}></Button>
      </View>
    );
  }
}

export default Notification1;
