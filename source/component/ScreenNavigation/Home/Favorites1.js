import React, {Component} from 'react';
import {View, Button,TouchableOpacity,Text} from 'react-native';

// In this class i have created link for Favorites 


class Favorites1 extends Component {
  render() {
    return (
      <View>
           <View>
                <Button
                    title="DataHandling"
                     onPress={() => {
                     this.props.navigation.navigate('DataHandling');
                 }}></Button>
            </View>
            <View>    
              <Button
                   title="MyProfile"
                   onPress={() => {
                   this.props.navigation.navigate('MyProfile');
               }}></Button>
            </View>
            <View>
              <Button
                  title="QrScanner"
                  onPress={() => {
                  this.props.navigation.navigate('QrScanner');
              }}></Button>
            </View>
      </View>
    );
  }
}



export default Favorites1;
