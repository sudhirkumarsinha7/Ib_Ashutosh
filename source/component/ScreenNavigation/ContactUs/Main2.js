import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
class Main2 extends Component {
  render() {
    return (
      <>
        <View
          style={{
            marginTop: 30,
            marginLeft: 50,
            marginRight: 15,
            fontStyle: 'bold',
          }}>
          <Text>Hi , This is main navigation page 2.</Text>
        </View>
        <View style={{marginTop: 30, marginLeft: 100, marginRight: 150}}>
          <Button title="Back" onPress={() => this.props.navigation.goBack()} />
        </View>
      </>
    );
  }
}

export default Main2;
