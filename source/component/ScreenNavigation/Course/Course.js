import React, {Component} from 'react';
import {ScrollView,View, Button,TouchableOpacity,Text} from 'react-native';
// created link for Ideabytes

class Course extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor:'white'}}>
             <View>
               <Text style={{color: 'black',
                       marginTop: 20,
                       padding: 10,
                       fontSize: 17,
                      // alignSelf:'center',
                        textAlign: 'center',
                        }}>
                        This link will be help full for a begineer React Native Developer. They need to follow all the document given below.
                        </Text>
             </View>
              <View style={{padding: 5}}>
                      <TouchableOpacity
                              style={{
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    backgroundColor: '#660000',
                                    width: 150,
                                    fontWeight: 20,
                                    alignSelf: 'center',
                              }}
                              onPress={() => {
                                    this.props.navigation.navigate('JavaScript');
                              }}>
                        <Text style={{fontSize: 20, padding: 10,color:'white'}}>JavaScript</Text>
                      </TouchableOpacity>
          </View>

          <View style={{padding: 5}}>
                      <TouchableOpacity
                              style={{
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    backgroundColor: '#00264d',
                                    width: 150,
                                    fontWeight: 20,
                                    alignSelf: 'center',
                                    marginTop:30,
                              }}
                              onPress={() => {
                                    this.props.navigation.navigate('ReactNative');
                              }}>
                        <Text style={{fontSize: 20, padding: 10,color:'#00ace6'}}>ReactNative</Text>
                      </TouchableOpacity>
          </View>


          <View style={{padding: 5}}>
                      <TouchableOpacity
                              style={{
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    backgroundColor: '#669999',
                                    width: 150,
                                    fontWeight: 20,
                                    alignSelf: 'center',
                                    marginTop:30,
                              }}
                              onPress={() => {
                                    this.props.navigation.navigate('Redux');
                              }}>
                        <Text style={{fontSize: 20, padding: 10,color:'white'}}>Redux</Text>
                      </TouchableOpacity>
          </View>

          <View style={{padding: 5}}>
                      <TouchableOpacity
                              style={{
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    backgroundColor: '#339966',
                                    width: 180,
                                    fontWeight: 20,
                                    alignSelf: 'center',
                                    marginTop:40,
                              }}
                              onPress={() => {
                                    this.props.navigation.navigate('ReactNavigation');
                              }}>
                        <Text style={{fontSize: 20, padding: 10,color:'#0d261a'}}>ReactNavigation</Text>
                      </TouchableOpacity>
          </View>


      </ScrollView>
    );
  }
}

export default Course;
