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
             <View style={{flex:6}}>
                    <View style={{backgroundColor: '#48D1CC',flex:1,}}>
                          <Text
                                style={{
                                fontSize: 25,
                                color: '#FFEBCD',
                                textAlign:'center',
                                }}>
                               Welcome to Login Page
                          </Text>
                    </View>

                    <View style={{flex:1}}></View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:0.4,padding:20,}}>   
                            <Text style={{fontSize:20,fontWeight:'bold'}}> Uname:</Text>
                        </View> 
                        <View style={{flax:0.6,padding:20,flaxDirection:'row',}}>   
                              <TextInput
                                    style={{borderWidth:1,borderRadius:30,width:150,marginTop:15}}
                                    onChangeText={(text) => this.setState({Uname: text})}
                                    value={this.state.Uname}
                              />
                        </View> 
                     </View>
              {/* <Text style={styles.password}> Password:</Text>
              <TextInput
                style={styles.passwordField}
                onChangeText={(text) => this.setState({Password: text})}
                value={this.state.Password}
              /> */}
            
            <View>
              <TouchableOpacity
                style={{
                  borderRadius: 30,
                  backgroundColor: 'green',
                  width: 120,
                  padding: 20,
                  marginLeft: 30,
                  marginTop: 90,
                  height: 40,
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
                      textAlign: 'center',
                      fontWeight: 'bold',
                      marginTop: -10,
                    }}>
                    {' '}
                    LogIn
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.button1}>
              <Button
                onPress={() => {
                  this.setState({Uname: '', Password: ''});
                  alert('successfully cleared filed');
                }}
                title="cancel"
              />
            </View>
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
