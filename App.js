import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
// import Registration from './source/component/register';
import LogIn from './source/component/ScreenNavigation/Authentication/login';
import Registration from './source/component/ScreenNavigation/Authentication/register'
import Route from './source/component/Screen/Root';
// import FavoriteRoute from './source/component/ScreenNavigation/Home/RouteFavorites';
//import IbRoute from './source/component/ScreenNavigation/Ib/RouteIb';
//import MainRoute from './source/component/ScreenNavigation/Main/RouteMain';
import Root from './source/component/ScreenNavigation/Navigation';
import StringManipulation from './source/stringManipulation/ManipulationString';
import {tankData} from './source/utilities/defaultdata';

var assetsPath = tankData.data.assets;
var data = assetsPath.map(val => val.asset_id)
class App extends Component {
  constructor(props){
    super(props);
    this.stete={

    }
    global.globalCityList = 'globalCityList';
  }

  //  setCity= async ()=>{
  //    let a  =  await globalCityList;
  //    AsyncStorage.setItem('globalCityList',globalCityList)
  //  }
  render() {
    return (
      <View style={styles.container}>
        {/* <StringManipulation /> */}

        {/* <Text>{JSON.stringify(data)}</Text> 
           { console.log(data)} */}
           <Root/>
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
