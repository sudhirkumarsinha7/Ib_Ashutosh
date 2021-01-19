import React, {Component} from 'react';
import {View, Button} from 'react-native';
// created link for Ideabytes

class Ib1 extends Component {
  render() {
    return (
      <View>
        
        {/* <Button
          title="Ib3"
          onPress={() => {
            this.props.navigation.navigate('Ib3');
          }}></Button> */}
        <Button
          title="JavaScript"
          onPress={() => {
            this.props.navigation.navigate('JavaScript');
          }}></Button>
      </View>
    );
  }
}

export default Ib1;
