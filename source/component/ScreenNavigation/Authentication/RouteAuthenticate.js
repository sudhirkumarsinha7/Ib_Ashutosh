import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Authentication from './Authentication';
import Notification2 from './Notification2';
import Notification3 from './Notification3';
import Notification4 from './Notification4';
import Registration  from './register';
import LogIn from './login';
const StackNotify = createStackNavigator();
class RouteAuthenticate extends Component {
  render() {
    return (
      // <NavigationContainer>
      <StackNotify.Navigator>
        <StackNotify.Screen name="Setting"  component={Authentication}></StackNotify.Screen>
        <StackNotify.Screen name="Notification2"  component={Notification2}></StackNotify.Screen>
        <StackNotify.Screen name="Notification3"  component={Notification3}></StackNotify.Screen>
        <StackNotify.Screen name="Notification4"  component={Notification4}></StackNotify.Screen>
        <StackNotify.Screen name="LogIn" component={LogIn} ></StackNotify.Screen>
        <StackNotify.Screen name="Registration" component={Registration} ></StackNotify.Screen>
      </StackNotify.Navigator>
      // </NavigationContainer>
    );
  }
}

export default RouteAuthenticate;
