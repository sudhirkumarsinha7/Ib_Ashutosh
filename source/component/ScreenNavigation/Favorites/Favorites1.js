import React, {Component} from 'react';
import {View, Button} from 'react-native';

// In this class i have created link for Favorites 


class Favorites1 extends Component {
  render() {
    return (
      <View>
        <Button
          title="Favorites2"
          onPress={() => {
            this.props.navigation.navigate('Favorites2');
          }}></Button>
        <Button
          title="MyProfile"
          onPress={() => {
            this.props.navigation.navigate('MyProfile');
          }}></Button>
        <Button
          title="Favorites4"
          onPress={() => {
            this.props.navigation.navigate('Favorites4');
          }}></Button>
      </View>
    );
  }
}

export default Favorites1;
