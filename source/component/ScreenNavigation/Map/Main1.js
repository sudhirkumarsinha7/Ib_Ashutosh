import React, {Component} from 'react';
import {View, Button, ScrollView, TouchableOpacity, Text} from 'react-native';
// created link for Main

class Main1 extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <Text
            style={{
              color: 'black',
              marginTop: 20,
              padding: 10,
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            In this screen i have implemented String Manipulation and Google
            Map. To implement Google map we need Good API key,we need to geneate
            API key in credential section of google Account.
          </Text>
        </View>
        <View style={{padding: 10}}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              borderRadius: 20,
              padding: 0,
              backgroundColor: 'white',
              width: 160,
              fontWeight: 'bold',
              fontSize: 20,
              alignSelf: 'center',
              backgroundColor: '#ff0066',
            }}
            onPress={() => {
              this.props.navigation.navigate('StringManipulation');
            }}>
            <Text style={{fontSize: 20, padding: 15, color: 'white'}}>
              Stroperation
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{padding: 10}}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              borderRadius: 20,
              padding: 0,
              backgroundColor: 'white',
              width: 150,
              fontWeight: 20,
              alignSelf: 'center',
              backgroundColor: '#ffff00',
            }}
            onPress={() => {
              this.props.navigation.navigate('googleMap');
            }}>
            <Text style={{fontSize: 20, padding: 10, color: 'black'}}>
              GoogleMap
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default Main1;
