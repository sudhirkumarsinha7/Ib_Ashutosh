/** 
   Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {Uname: '', Password: ''};
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
          <ScrollView>
             <View style={{flex:4,}}>
                    <View style={{backgroundColor: '#48D1CC',flex:1}}>
                          <Text
                                style={{
                                fontSize: 25,
                                color: '#FFEBCD',
                                textAlign:'center',
                                padding:4,
                                }}>
                               Welcome to Login Page
                          </Text> 
                    </View> 
                    <View style={{flex:1,flexDirection:'row'}}>
                         <View style={{flex:0.5}}>   
                                <Text style={{fontSize:17,fontWeight:'bold',color:'blue',padding:20,}}> Uname:</Text>
                         </View> 
                         <View style={{flax:0.5,}}>   
                              <TextInput
                                    style={{borderWidth:1,borderRadius:10,width:150,marginTop:20,padding:7,}}
                                    onChangeText={(text) => this.setState({Uname: text})}
                                    value={this.state.Uname}
                                />
                        </View> 
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}> 
                         <View style={{flex:0.53,}}>
                             <Text style={{fontWeight:'bold',color:'blue',padding:20,fontSize:17,}}> Password:</Text>
                            </View>
                            <View style={{flex:0}}>
                                  <TextInput
                                         style={{borderWidth:1,borderRadius:10,width:150,padding:7,marginTop:22,}}
                                         onChangeText={(text) => this.setState({Password: text})}
                                         value={this.state.Password}
                                  />
                          </View>
                     </View>
                     </View>
                    <View style={{flex:0,}}>
                              <TouchableOpacity
                                        style={{
                                              borderRadius: 30,
                                              backgroundColor: 'green',
                                              width: 100,
                                              padding: 20,
                                              alignSelf:'center',
                                              marginTop:30,
                                              
                                              
                                        }}
                                          onPress={() =>
                                          alert(
                                            'UserName :' +
                                              this.state.Uname +
                                              '\n' +
                                              'Password:' +
                                              this.state.Password,
                                           )
                                }>
                                <View>
                                  <Text
                                    style={{
                                      alignSelf:'center',
                                      fontWeight: 'bold',
                                      color:'white',


                                    }}>
                                    {' '}
                                    LogIn
                                  </Text>
                                </View>
                              </TouchableOpacity>
            </View>

            <View style={{flex:1,flexDirection:'column-reverse',marginTop:30}}>
              <Button
                onPress={() => {
                  this.setState({Uname: '', Password: ''});
                  alert('successfully cleared filed');
                }}
                title="cancel"
              />
            </View>
          </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    marginTop: 80,
    //backgroundColor:'grey',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  password: {
    marginTop: 30,
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: 25,
    color: '#0000CD',
  },
  button: {
    marginTop: 100,
    marginLeft: 30,
    marginRight: 250,
    backgroundColor: 'green',
  },

  button1: {
    marginTop: -35,
    marginLeft: 240,
    marginRight: 30,
    borderRadius: 30,
  },

  textbox: {
    // backgroundColor: Colors.white,
    height: 40,
    width: 200,
    marginTop: -28,
    marginLeft: 150,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#98FB98',
    //textAlign:'center',
  },
  passwordField: {
    height: 40,
    width: 200,
    marginTop: -33,
    marginLeft: 150,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 20,
    textAlign: 'left',
    borderColor: '#98FB98',
  },
  text: {
    color: '#0000CD',
    fontSize: 25,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },

  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default LogIn;
