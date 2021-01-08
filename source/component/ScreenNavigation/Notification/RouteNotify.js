import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Notification1 from './Notification1';
import Notification2 from './Notification2';
import Notification3 from './Notification3';
import Notification4 from './Notification4';
const StackNotify = createStackNavigator();
class RouteNotify extends Component {
  render() {
    return (
      // <NavigationContainer>
      <StackNotify.Navigator>
        <StackNotify.Screen name="Notification1"  component={Notification1}></StackNotify.Screen>
        <StackNotify.Screen name="Notification2"  component={Notification2}></StackNotify.Screen>
        <StackNotify.Screen name="Notification3"  component={Notification3}></StackNotify.Screen>
        <StackNotify.Screen name="Notification4"  component={Notification4}></StackNotify.Screen>
      </StackNotify.Navigator>
      // </NavigationContainer>
    );
  }
}

export default RouteNotify;
