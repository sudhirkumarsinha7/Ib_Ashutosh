import 'react-native-gesture-handler';
//import * as React from 'react';
import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Button } from 'native-base';
const Stack = createStackNavigator();
const ScreenNavigation=()=> {
  return (

     
        
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name="Details" component={DetailsScreen}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen(navigation)
{
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button onPress={()=>navigation.push('Details')} title="go to Details screen"></Button>
        </View>
        
    )
    
}

function DetailsScreen()
{
    return(
        <View>
            <text>
                Details Screen
            </text>
        </View>
    )
}

export default ScreenNavigation;