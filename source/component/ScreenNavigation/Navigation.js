import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RouteFavorites from './Favorites/RouteFavorites';

import RouteIb from './Ib/RouteIb';
import RouteMain from './Main/RouteMain';
import RouteNotify from './Notification/RouteNotify'

const Tab = createBottomTabNavigator();

MyTabs = () => {
  return (
       <Tab.Navigator 
       tabBarOptions={{
           labelStyle: {
           fontSize: 15,
         },}}
    >
      <Tab.Screen name="Home" component={RouteFavorites} options={{fontSize:30 }}/>
      <Tab.Screen name="Settings" component={RouteIb} />
      <Tab.Screen name="Disply" component={RouteMain} />
      <Tab.Screen name="Holiday" component={RouteNotify} />
    </Tab.Navigator>
  );
}

const Root = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default Root;
