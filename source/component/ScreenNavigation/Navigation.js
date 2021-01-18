import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RouteHome from './Home/RouteHome';

import RouteReactNative from './ReactNative/RouteIb';
import RouteContactUs from './ContactUs/RouteMain';
import RouteAuthenticate from './Authentication/RouteAuthenticate'

const Tab = createBottomTabNavigator();

MyTabs = () => {
  return (
    //<View style={{padding:30}}>
       <Tab.Navigator 
      // style={{backgroundColor:'blue',}}
       tabBarOptions={{
           labelStyle: {
           fontSize: 15,
           
         },
         style: {
        backgroundColor: '#00FFFF',
      },}}
    >
      <Tab.Screen name="Home" component={RouteHome} options={{fontSize:30 }}/>
      <Tab.Screen name="ReactNative" component={RouteReactNative} />
      <Tab.Screen name="ContactUs" component={RouteContactUs} />
      <Tab.Screen name="Authentication" component={RouteAuthenticate} />
    </Tab.Navigator>
   // </View>
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
