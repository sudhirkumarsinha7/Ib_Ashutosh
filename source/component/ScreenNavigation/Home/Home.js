// This is welcome screen 

import React, {Component} from 'react';
import {
  ImageBackground,
  ScrollView,
  View,
  Text,
  Button,
  TouchableOpacity,
  Platform,
} from 'react-native';

class Home extends Component {
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <ImageBackground
          style={{height: 1000}}
          source={require('../../../Images/ideabytes.png')}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              padding: 10,
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: Platform.OS == 'ios' ? 40 : 10,
            }}>
            Welcome to home Page Of IdeaBytes
          </Text>

          <Text
            style={{
              color: 'white',
              marginTop: 20,
              padding: 10,
              fontSize: 17,
              textAlign: 'center',
            }}>
            React native helps developer to write code once and work on both
            plateform in Android and Ios.
          </Text>
          <View>
            <Text style={{ 
              color: 'white',
              marginTop: 20,
              padding: 10,
              fontSize: 17,
              textAlign: 'center',
            }}>
            To work with React Native, you will need to have an understanding of JavaScript fundamentals. 
            </Text>
          </View>
          <View style={{padding: 10}}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                borderRadius: 20,
                padding: 0,
                backgroundColor: '#C0C0C0',
                width: 150,
                fontWeight: 20,
                alignSelf: 'center',
              }}
              onPress={() => {
                this.props.navigation.navigate('DataHandling');
              }}>
              <Text style={{fontSize: 20, padding: 10}}>FlatList</Text>
            </TouchableOpacity>
          </View>

          <View style={{padding: 10}}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                borderRadius: 20,
                padding: 0,
                backgroundColor: 'green',
                width: 150,
                fontWeight: 20,
                alignSelf: 'center',
              }}
              onPress={() => {
                this.props.navigation.navigate('MyProfile');
              }}>
              <Text style={{fontSize: 20, padding: 10}}>MyProfile</Text>
            </TouchableOpacity>
          </View>

          <View style={{padding: 10}}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                borderRadius: 20,
                padding: 0,
                backgroundColor: 'black',
                width: 150,
                fontWeight: 20,
                alignSelf: 'center',
              }}
              onPress={() => {
                this.props.navigation.navigate('QrScanner');
              }}>
              <Text style={{fontSize: 20, padding: 10,color:'white',}}>QrScanner</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}
export default Home;
