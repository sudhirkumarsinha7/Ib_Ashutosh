import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RouteHome from './Home/RouteHome';

import RouteReactNative from './Course/RouteCourse';
import RouteContactUs from './Map/RouteMain';
import RouteAuthenticate from './Setting/RouteAuthenticate'

const Tab = createBottomTabNavigator();

MyTabs = () => {
  return (
    //<View style={{padding:30}}>
       <Tab.Navigator 
      // style={{backgroundColor:'blue',}}
          tabBarOptions={{
           activeTintColor: 'white',
           inactiveTintColor: 'gray',
          inactiveBackgroundColor : 'white',
          activeBackgroundColor : '#336699',
           labelStyle: {
           fontSize: 15,
            marginBottom:15,
            },
         }}
    >
      <Tab.Screen name="Home" component={RouteHome} options={{fontSize:30 }}/>
      <Tab.Screen name="Course" component={RouteReactNative} />
      <Tab.Screen name="Map" component={RouteContactUs} />
      <Tab.Screen name="Setting" component={RouteAuthenticate} />
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
