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
//import Checkbox from 'react-native-modest-checkbox';
import Checkbox from '@react-native-community/checkbox'

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
       // check:false,
       developer: false ,
       tester: false ,
        country : 'India',
        hobby:'',
    };
  }


  

  
  show = () => {
    var radio_props = [
      {label: 'Male', value: 0},
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
              this.setState({Sex: value});
            }}
            labelStyle={{fontSize: 15, color: '#3366ff', marginRight: 10}}
            labelWrapStyle={{}}
          />
        
      </View>
    );
  };

  // renderButton(fieldName, onChangeText, value) {
  //   return (
  //     <View>
  //       <Text style={styles.text}>{fieldName}</Text>
  //       <TextInput
  //         style={styles.textbox}
  //         onChangeText={onChangeText}
  //         value={value}
  //       />
  //     </View>
  //   );
  // }


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
                marginLeft: 40,
                fontSize: 23,
                fontWeight: 'bold',
                marginTop: 30,
                color:'blue'
              }}>
              {' '}
              Welcome to Registration Page{' '}
            </Text>
          </View>

          <View>
                       <Text style={styles.text}>UserName:</Text>
                       <TextInput style={styles.textbox}
                        onChangeText={(text) => this.setState({UserName:text})}
                         value={this.state.UserName}
                       /> 
                  
                     </View>
          {/* {this.formInput('Username')}
          {this.formInput('Password')}
          {this.formInput('MobieleNum')} */}

          {/* <FormInput
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
          /> */}
          {/* {this.renderButton(
            'Password',
            (Password) => {
              this.setState({Password});
            },
            this.state.Password,
          )} */}

          <View>
                         <Text style={styles.text}>Password:</Text>
                         <TextInput style={styles.textbox}
                         onChangeText={(text) => this.setState({Password:text})}
                         value={this.state.Password}
                         />
                     </View>

                     <View>
                         <Text style={styles.text}>MobileNo:</Text>
                         <TextInput style={styles.textbox}
                          onChangeText={(text)=>this.setState({MobileNo:text})}
                          value={this.state.MobileNo}
                         />
                     </View>

          <View>{this.show()}</View>

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
                width: 180,
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
            <Text style={{fontSize: 20, marginLeft: 20, marginTop: 20}}>
              Hobby:
            </Text>
          </View>

          <View style={styles.container1}> 
            <View>
            <Checkbox
              value={this.state.developer}
              onChange={this.developerChecked}
              style={{marginTop: -130, marginLeft: 1}}
            />
            <Text style={{marginTop: -30 , marginLeft: 30, fontSize: 20}}>
              {' '}
              Developer
            </Text>
          </View>

          <View style={styles.container2}>
            <Checkbox
              value={this.state.tester}
              onChange={this.testerCheck}
              style={{marginTop: -230, marginLeft: -75}}
            />
            <Text style={{marginTop: -30, marginLeft: -35, fontSize: 20}}>
              Tester
            </Text>
          </View>
          </View> 

          <View style={styles.button1}>
            <Button
              onPress={() => {
                alert(
                  'UserName :' +
                    this.state.UserName +
                    '\n' +
                    'Password:' +
                    this.state.Password +
                    '\n' +
                    'MobileNo:' +
                    this.state.MobileNo +
                    '\n' +
                    'Sex:'+
                      this.state.Sex +
                      '\n' +
                      'Hobby:'+
                      this.state.hobby,


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
    color:'#87CEFA',
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 35,
    flex:10,
  },

  radioText: {
    color:'#87CEFA',
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
    borderRadius:20

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
    borderRadius:50
  },

  button2: {
    marginTop: -35,
    marginLeft: 240,
    marginRight: 30,
    borderRadius:50
  },
});

export default Registration;
