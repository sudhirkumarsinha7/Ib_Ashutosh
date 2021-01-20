import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DropDownPicker from 'react-native-dropdown-picker';
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
class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: '',
      Password: '',
      MobileNo: '',
      Sex: '',
      developer: false,
      tester: false,
      country: 'India',
      hobby: '',
    };
  }

  show = () => {
    var radio_props = [
      {label: 'Male', value: 0},
      {label: 'Female', value: 1},
    ];
    return (
      <View>
          <View>
                <Text style={{paddingLeft:20,paddingTop:15,fontWeight:'bold',fontSize:20}}>Sex:</Text>
            </View>
            <View>
                  <RadioForm
                    style={{paddingLeft :55,}}
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={false}
                    onPress={(value) => {
                      this.setState({Sex: value});
                    }}
                    labelStyle={{fontSize: 15, color: '#3366ff', marginRight: 10}}
                    labelWrapStyle={{}}
                  />
          </View>
      </View>
    );
  };
  developerChecked = (id) => {
    this.setState((prevState) => ({developer: !prevState.developer}));
  };

  testerCheck = (id) => {
    this.setState((prevState) => ({tester: !prevState.tester}));
  };

  render() {
    return (
      <>
        <ScrollView>
          <View>
            <Text
              style={{
                fontSize: 23,
                fontWeight: 'bold',
                color: 'blue',
                alignSelf: 'center',
                marginTop: 30,
              }}>
              {' '}
              Welcome to Registration Page{' '}
            </Text>
          </View>
          <View style={{flex: 3}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 0.4}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', padding: 20}}>
                  UserName:
                </Text>
              </View>
              <View style={{flex: 0.5}}>
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    width: 150,
                    marginTop: 20,
                    padding: 7,
                  }}
                  onChangeText={(text) => this.setState({UserName: text})}
                  value={this.state.UserName}
                />
              </View>
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 0.4}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', padding: 20}}>
                  Password:
                </Text>
              </View>
              <View style={{flex: 0.5}}>
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    width: 150,
                    marginTop: 20,
                    padding: 7,
                  }}
                  onChangeText={(text) => this.setState({Password: text})}
                  value={this.state.UserName}
                />
              </View>
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 0.4}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', padding: 20}}>
                  MobileNo:
                </Text>
              </View>
              <View style={{flex: 0.5}}>
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    width: 150,
                    marginTop: 20,
                    padding: 7,
                  }}
                  onChangeText={(text) => this.setState({MobileNo: text})}
                  value={this.state.UserName}
                />
              </View>
            </View>
          </View>

          <View>{this.show()}</View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 0.4}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', padding: 20}}>
                Country:
              </Text>
            </View>

            <View style={{flex: 0.6}}>
              <DropDownPicker
                items={[
                  {label: 'USA', value: 'usa'},
                  {label: 'UK', value: 'uk'},
                  {label: 'India', value: 'India'},
                ]}
                defaultValue={this.state.country}
                containerStyle={{
                  width: 110,
                  padding: 10,
                  alignItems: 'center',
                  //alignContent:'center',
                }}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                  justifyContent: 'center',
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={(item) =>
                  this.setState({
                    country: item.value,
                  })
                }
              />
            </View>
          </View>
          <View>
            <View>
              <Text style={{fontSize: 20, fontWeight: 'bold', padding: 20}}>
                Hobby:
              </Text>
            </View>
      
            <View style={{flex: 0, padding: 0}}>
              <Checkbox
                value={this.state.developer}
                onChange={this.developerChecked}
                style={{marginTop:10,marginLeft:30}}
              />
             <Text
                style={{
                  fontSize: 20,
                  color: 'green',
                  paddingLeft:60,
                  marginTop:-30
                }}>
                {' '}
                Developer
              </Text>
            </View>

            <View style={{marginTop:10,marginLeft:30}}>
              <Checkbox value={this.state.tester} onChange={this.testerCheck} />
            
              <Text style={{fontSize: 20,
                  color: 'green',
                  paddingLeft:35,
                  marginTop:-30}}>Tester</Text>
            </View>
          </View>
          

          <View style={{padding:30,width:'50%',alignSelf:'center'}}>
            <Button
              onPress={() => {
                alert(
                  'UserName :' +
                    this.state.UserName +
                    '\n' +
                    'Password:' +
                    this.state.Password 
                  );
              }}
              title="Register"
            />
          </View>

          <View style={{padding:30,width:'50%',alignSelf:'center'}}>
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
    color: '#87CEFA',
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 35,
    flex: 10,
  },

  radioText: {
    color: '#87CEFA',
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
  },
  textbox: {
    height: 40,
    width: 200,
    marginTop: -35,
    marginLeft: 120,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 20,
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
    marginLeft: 60,
    marginRight: 250,
  },

  button1: {
    marginTop: -70,
    marginLeft: 30,
    marginRight: 250,
    borderRadius: 50,
  },

  button2: {
    marginTop: -35,
    marginLeft: 240,
    marginRight: 30,
    borderRadius: 50,
  },
});

export default Registration;
