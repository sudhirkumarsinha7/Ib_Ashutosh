import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import Course from './Course';
import JavaScript from './JavaScript';
import ReactNative from './ReactNative';
import Redux from './Redux';
import ReactNavigation from './ReactNavigation';
const StackIb = createStackNavigator();
class RouteCourse extends Component {
  render() {
    return (
      // <NavigationContainer>
      <StackIb.Navigator>
        <StackIb.Screen name="Course"  component={Course}></StackIb.Screen>
        <StackIb.Screen name="JavaScript"  component={JavaScript}></StackIb.Screen>
         <StackIb.Screen name="ReactNative"  component={ReactNative}></StackIb.Screen> 
         <StackIb.Screen name="Redux"  component={Redux}></StackIb.Screen> 
         <StackIb.Screen name="ReactNavigation"  component={ReactNavigation}></StackIb.Screen>
       
      </StackIb.Navigator>
      // </NavigationContainer>
    );
  }
}

export default RouteCourse;
