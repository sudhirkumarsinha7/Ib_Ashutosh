import 'react-native-gesture-handler';
// import * as React from 'react';
import React from 'react';
import {View,Text,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
const ScreenNavigation=()=> {
  return (

     
        
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name=" Details" component={DetailsScreen}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({navigation})
{
    return(
        <View >
            <Text>Home Screen</Text>
            <Button 
               onPress={()=> 
                  navigation.navigate('Details')}
                  title='go to Details screen'></Button>
        </View>
        
    );
    
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










//  ---------------------

// import React, { Component } from 'react';
// import {View} from 'react-native';
// // import Registration from './source/component/register';
// import LogIn from './source/component/login'
// //import Registration from './source/component/register'
//  import Test from './source/component/test1'
// class App extends Component {
//   render(){
//       return (
//         <View>
//          <Test/>
          
//         </View>
//       );
//   }
// }
    

// export default App;
