import React, {Component} from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import Style from '../utilities/style';
class ManipulationString extends Component {
  constructor(props) {
    super(props);
    this.state = {
      String1: '',
      String2: '',
      outputString: '',
    };
  }

  setStringt2(value) {
    let {string1, outputString} = this.state;
    let a = outputString + value;
    this.setState({string2: value, outputString: a});
  }
  setStringt1(value) {
    //let {string2,outputString} = this.state
    this.setState({String1: ' ', outputString: ' '});
    let a = string2 + value;
    this.setState({String1: value, outputString: a});
  }
  render() {
    return (
      <View>
        <View>
          <Text>String1</Text>
          <TextInput
            style={Style.textbox}
            onChangeText={(text) => {
              this.setStringt1(text);
            }}
          />
        </View>

        <View>
          <Text>String2</Text>
          <TextInput
            style={Style.textbox}
            onChangeText={(text) => this.setStringt2(text)}></TextInput>
          <Text>{this.state.outputString}</Text>
        </View>
      </View>
    );
  }
}

export default ManipulationString;
