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

export const FormInput = ({fieldName, onChangeText, value}) => {
  return (
    <View>
      <Text style={styles.text}>{fieldName}</Text>
      <TextInput
        style={styles.textbox}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

class test extends Component {
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

        {/* <View>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {this.setState({value:value})}}
        />
      </View> */}
      </View>
    );
  };

  renderButton(fieldName, onChangeText, value) {
    return (
      <View>
        <Text style={styles.text}>{fieldName}</Text>
        <TextInput
          style={styles.textbox}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    );
  }

  cricketChecked = (id) => {
    this.setState((prevState) => ({cricket: !prevState.cricket}));
  };

  badmintonCheck = (id) => {
    this.setState((prevState) => ({badminton: !prevState.badminton}));
  };

  render() {
    return (
      <>
        <ScrollView>
          <View>
            <Text
              style={{
                marginLeft: 40,
                fontSize: 23,
                fontWeight: 'bold',
                marginTop: 30,
              }}>
              {' '}
              Welcome to Registeration Page{' '}
            </Text>
          </View>

          <FormInput
            fieldName={'Username'}
            onChangeText={(UserName) => {
              this.setState({UserName});
            }}
            value={this.state.UserName}
          />
          <FormInput
            fieldName={'Password'}
            onChangeText={(Password) => {
              this.setState({Password});
            }}
            value={this.state.Password}
          />
          <FormInput
            fieldName={'MobileNo'}
            onChangeText={(MobileNo) => {
              this.setState({MobileNo});
            }}
            value={this.state.MobileNo}
          />

          {/* {this.renderButton(
            'Password',
            (Password) => {
              this.setState({Password});
            },
            this.state.Password,
          )} */}

          <View>
            <Text style={{fontSize: 20, marginLeft: 20, marginTop: 20}}>
              Country:
            </Text>
          </View>

          <View>
            <DropDownPicker
              items={[
                {label: 'USA', value: 'usa'},
                {label: 'UK', value: 'uk'},
                {label: 'India', value: 'India'},
              ]}
              defaultValue={this.state.country}
              containerStyle={{
                height: 35,
                width: 250,
                marginLeft: 120,
                marginTop: -25,
              }}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              onChangeItem={(item) =>
                this.setState({
                  country: item.value,
                })
              }
            />
          </View>
          <View>
          <Text> {this.show()}</Text>
          </View>
          <View>
            <Text style={{fontSize: 20, marginLeft: 20, marginTop: 20}}>
              Post:
            </Text>
          </View>

          <View>
            <Checkbox
              value={this.state.cricket}
              onChange={this.cricketChecked}
              style={{marginTop: -25, marginLeft: 85}}
            />
            <Text style={{marginTop: -32, marginLeft: 120, fontSize: 20}}>
              {' '}
              Developer
            </Text>
          </View>

          <View style={styles.container2}>
            <Checkbox
              value={this.state.badminton}
              onChange={this.badmintonCheck}
              style={{marginTop: -131, marginLeft: 10}}
            />
            <Text style={{marginTop: -28, marginLeft: 50, fontSize: 20}}>
              Tester
            </Text>
          </View>

          <View style={styles.button1}>
            <Button
              onPress={() => {
                alert(
                  'UserName :' +
                    this.state.Uname +
                    '\n' +
                    'Password:' +
                    this.state.Password,
                );
              }}
              title="Register"
            />
          </View>

          <View style={styles.button2}>
            <Button
              onPress={() => {
                this.setState({Uname: '', Password: ''});
                alert('successfully cleared filed');
              }}
              title="LogIn"
            />
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  container1: {
    flex: 1,
    marginLeft: 120,
    marginTop: 105,
    //justifyContent: 'center',
  },

  container2: {
    flex: 1,
    marginLeft: 220,
    marginTop: 105,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  valueText: {
    fontSize: 18,
    marginBottom: 50,
  },
  text: {
    color: Colors.blue,
    marginLeft: 10,
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 35,
  },

  radioText: {
    color: Colors.blue,
    marginLeft: 10,
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 40,
  },
  textbox: {
    height: 40,
    width: 250,
    marginTop: -35,
    marginLeft: 150,
    borderColor: 'grey',
    borderWidth: 2,
  },
  ddown: {
    height: 40,
    width: 100,
    marginTop: -35,
    marginLeft: 150,
    borderColor: 'grey',
    //borderWidth:2,
  },
  button: {
    marginTop: -28,
    marginLeft: 90,
    marginRight: 250,
  },

  button1: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 250,
  },

  button2: {
    marginTop: -35,
    marginLeft: 240,
    marginRight: 30,
  },
});

export default test;
