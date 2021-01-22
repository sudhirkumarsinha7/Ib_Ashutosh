import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
class ManipulationString extends Component {
  constructor(props) {
    super(props);
    this.state = {Name: '', password: ''};
  }
  setName = (text) => {
    this.setState({Name: text});
  };
  setPass = (text) => {
    this.setState({password: text});
  };
  getName = () => {
    alert(
      'Name: ' + this.state.Name + '\n' + 'Password: ' + this.state.password,
    );
  };

  getString = () => {
    let str1 = this.state.Name;
    let str2 = this.state.password;
    let str = '';
    var i, j;
    for (i = 0, j = 0; i < str1.length && j < str2.length; i++, j++) {
      str += str1[i] + '_' + str2[j] + '_';
    }
    while(i<str1.length)
    {
      str=str+str1[i++]+'_';
    }

    while(j<str2.length)
    {
      str=str+str2[j++]+'_';
    }
    str = str.slice(0, -1); 
    alert(str);
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          borderWidth: 0,
          padding: 0,
          alignSelf: 'center',
          marginTop: Platform.OS == 'ios' ? 40 : 10,
        }}>
        <Text
          style={{
            alignSelf: 'center',
            padding: 10,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          String Manipulation
        </Text>
        <Text style={{paddingTop: 10, fontSize: 18}}>String1</Text>

        <TextInput
          style={{borderWidth: 2, fontSize: 17}}
          value={this.state.Name}
          onChangeText={(text) => this.setName(text)}
        />

        <Text style={{paddingTop: 10, fontSize: 18}}>String2</Text>

        <TextInput
          style={{borderWidth: 2, fontSize: 17}}
          value={this.state.password}
          onChangeText={(text) => this.setPass(text)}
        />

        <View style={{padding: 40}}>
          <Button title="Submit" onPress={this.getString} />
        </View>
      </View>
    );
  }
}
export default ManipulationString;

// import React, {Component} from 'react';
// import {Text, View, Button, TextInput} from 'react-native';
// import Style from '../utilities/style';
// class ManipulationString extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       String1: '',
//       String2: '',
//       outputString: '',
//     };
//   }

//   setStringt2(value) {
//     let {string1, outputString} = this.state;
//     let a = outputString + value;
//     this.setState({string2: value, outputString: a});
//   }
//   setStringt1(value) {
//     //let {string2,outputString} = this.state
//     this.setState({String1: ' ', outputString: ' '});
//     let a = string2 + value;
//     this.setState({String1: value, outputString: a});
//   }
//   render() {
//     return (
//       <View>
//         <View style={{flex:1}}>
//           <Text>String1</Text>
//           <TextInput
//             style={{borderWidth:1,padding:10,}}
//             onChangeText={(text) => {
//               this.setStringt1(text);
//             }}
//           />
//         </View>

//         {/* <View>
//           <Text>String2</Text>
//           <TextInput
//             style={Style.textbox}
//             onChangeText={(text) => this.setStringt2(text)}></TextInput>
//           <Text>{this.state.outputString}</Text>
//         </View> */}
//       </View>
//     );
//   }
// }

// export default ManipulationString;
