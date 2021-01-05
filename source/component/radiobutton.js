import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import CheckBox from 'react-native-check-box';
import DropDownPicker from 'react-native-dropdown-picker';
//import Checkbox from 'react-native-modest-checkbox'

import Checkbox from '@react-native-community/checkbox';
class RadioCheck extends Component{

    constructor(props) {
        super(props);
        this.state = {
          UserName: '',
          Password: '',
          MobileNo: '',
          sex: '',
          value: 0,
          // check:false,
          cricket: false,
          badminton: false,
        };
      }

      
      show = () => {
        var radio_props = [
          {label: 'Male', value: 8},
          {label: 'Female', value: 1},
        ];
        return (
          <View>
            <Text style={styles.radioText}>Sex:</Text>
    
            <RadioForm
              style={styles.button}
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}
              onPress={(value) => {
                this.setState({value: value});
              }}
              labelStyle={{fontSize: 20, color: '#3366ff', marginRight: 10}}
              labelWrapStyle={{}}
            />
            </View>
        );
            };
    render(){
        return(
            
            <ScrollView>
                
            <View>
            {this.show()}
  
           </View>
                
            </ScrollView>
          
        );

    }
}

export default RadioButton;