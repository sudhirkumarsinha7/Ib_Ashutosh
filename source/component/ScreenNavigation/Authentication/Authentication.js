import React, {Component} from 'react';
import {View, Button, TouchableOpacity, Text} from 'react-native';

//created link for all the holiday of ideabytes

class Authentication extends Component {
  render() {
    return (
      <View>

          <Text style={{padding:20,alignSelf:'center',fontWeight:'bold',fontSize:20}}> This is Authentication screen for a new user and Registered User</Text>
        <View>
          {/* <Button
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
            }}></Button> */}
        </View>

        <View >
            <TouchableOpacity
            style={{
              borderRadius: 10,
              width: 120,
              backgroundColor: 'green',
              padding: 12,
              alignSelf:'center',
              marginTop:30,
            }}
            onPress={() => this.props.navigation.navigate('Registration')}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  color:'white',
                }}>
                Registration
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View >
          <TouchableOpacity
            style={{
              borderRadius: 10,
              width: 80,
              backgroundColor: '#008CBA',
              padding: 10,
              alignSelf:'center',
              marginTop:20
               }}
            onPress={() => this.props.navigation.navigate('LogIn')}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  color:'red',

                }}>
                {' '}
                LogIn
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Authentication;
