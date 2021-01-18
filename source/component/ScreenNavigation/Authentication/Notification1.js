import React, {Component} from 'react';
import {View, Button, TouchableOpacity, Text} from 'react-native';

//created link for all the holiday of ideabytes

class Notification1 extends Component {
  render() {
    return (
      <View>
        <View>
          <Button
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
            }}></Button>
        </View>

        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{
              borderRadius: 30,
              width: 145,
              backgroundColor: '#008CBA',
              padding: 20,
              marginLeft: 120,
              marginTop: 50,
            }}
            onPress={() => this.props.navigation.navigate('Registration')}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: -9,
                }}>
                Registration
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{
              borderRadius: 30,
              width: 95,
              backgroundColor: '#008CBA',
              padding: 20,
              marginLeft: 150,
              marginTop: 130,
            }}
            onPress={() => this.props.navigation.navigate('LogIn')}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: -9,
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

export default Notification1;
