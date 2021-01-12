import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Favorites1 from './Favorites1';
import Favorites2 from './Favorites2';
import MyProfile from './MyProfile';
import Favorites4 from './Favorites4';

const StackFavorites = createStackNavigator();
class RouteFavorites extends Component {
  render() {
    return (
      //<NavigationContainer>
      <StackFavorites.Navigator>
        <StackFavorites.Screen
          name="Favorites1"
          component={Favorites1}></StackFavorites.Screen>
        <StackFavorites.Screen
          name="Favorites2"
          component={Favorites2}></StackFavorites.Screen>
        <StackFavorites.Screen
          name="MyProfile"
          component={MyProfile}></StackFavorites.Screen>
        <StackFavorites.Screen
          name="Favorites4"
          component={Favorites4}></StackFavorites.Screen>
      </StackFavorites.Navigator>
      //</NavigationContainer>
    );
  }
}

export default RouteFavorites;
