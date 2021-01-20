import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import DataHandling from './DataHandling';
import MyProfile from './MyProfile';
import QrScanner from './QrScanner';

const StackFavorites = createStackNavigator();
class RouteHome extends Component {
  render() {
    return (
      
      <StackFavorites.Navigator>
        <StackFavorites.Screen
          name="Home"
          component={Home}></StackFavorites.Screen>
        <StackFavorites.Screen
          name="DataHandling"
          component={DataHandling}></StackFavorites.Screen>
        <StackFavorites.Screen
          name="MyProfile"
          component={MyProfile}></StackFavorites.Screen>
        <StackFavorites.Screen
          name="QrScanner"
          component={QrScanner}></StackFavorites.Screen>
      </StackFavorites.Navigator>

      
      
    );
  }
}

export default RouteHome;
