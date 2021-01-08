import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
// import Registration from './source/component/register';
import LogIn from './source/component/login';
//import Registration from './source/component/register'
import Test from './source/component/test1';
import Route from './source/component/Screen/Root';
// import FavoriteRoute from './source/component/ScreenNavigation/Favorites/RouteFavorites';
//import IbRoute from './source/component/ScreenNavigation/Ib/RouteIb';
//import MainRoute from './source/component/ScreenNavigation/Main/RouteMain';
import Root from './source/component/ScreenNavigation/Navigation';
import StringManipulation from './source/stringManipulation/ManipulationString';
import {tankData} from './source/utilities/defaultdata';

var assetsPath = tankData.data.assets;
var data = assetsPath.map(val => val.asset_id)
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <StringManipulation /> */}

        <Text>{JSON.stringify(data)}</Text> 
           { console.log(data)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    backgroundColor: '#FFF',
  },
});

export default App;
