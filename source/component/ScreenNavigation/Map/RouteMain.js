import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import Main1 from './Main1';
import Main2 from './Main2';
// import Main3 from './Main3';
import Main4 from './Main4';
import googleMap from './googleMap'
import manipulation from '../../../stringManipulation/ManipulationString'
const StackMain = createStackNavigator();
class RouteMain extends Component {
  render() {
    return (
      // <NavigationContainer>
      <StackMain.Navigator >
        <StackMain.Screen name="ContactUs"  component={Main1}></StackMain.Screen>
        <StackMain.Screen name="StringManipulation"  component={manipulation}></StackMain.Screen>
       {/* // <StackMain.Screen name="Main3"  component={Main3}></StackMain.Screen> */}
        <StackMain.Screen name="Main4"  component={Main4}></StackMain.Screen>
        <StackMain.Screen name="googleMap"  component={googleMap}></StackMain.Screen>
      </StackMain.Navigator>
      // </NavigationContainer>
    );
  }
}

export default RouteMain;
