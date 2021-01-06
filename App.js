import React, { Component } from 'react';
import {View,StyleSheet} from 'react-native';
// import Registration from './source/component/register';
import LogIn from './source/component/login'
//import Registration from './source/component/register'
 import Test from './source/component/test1'
 import Route from './source/component/Screen/Root';
class App extends Component {
  render(){
      return (
        <View style={styles.container}>
         <Route/>
          
        </View>
      );
  }
}
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
});

export default App;
