import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import Ib1 from './Ib1';
import Ib3 from './Ib3';
import Ib4 from './Ib4';
const StackIb = createStackNavigator();
class RouteIb extends Component {
  render() {
    return (
      // <NavigationContainer>
      <StackIb.Navigator>
        <StackIb.Screen name="Ib1"  component={Ib1}></StackIb.Screen>
        {/* <StackIb.Screen name="TempApiCall"  component={TempApiCall}></StackIb.Screen> */}
        <StackIb.Screen name="Ib3"  component={Ib3}></StackIb.Screen>
        <StackIb.Screen name="Ib4"  component={Ib4}></StackIb.Screen>
      </StackIb.Navigator>
      // </NavigationContainer>
    );
  }
}

export default RouteIb;
