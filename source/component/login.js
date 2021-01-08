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
        <SafeAreaView>
          <ScrollView>
            <View>
              <Text
                style={{
                  marginLeft: 50,
                  padding: 10,
                  fontSize: 25,
                  color: 'green',
                }}>
                Welcome to Login Page
              </Text>
            </View>

            <View style={styles.body}>
              <Text style={styles.text}> Uname:</Text>
              <TextInput
                style={styles.textbox}
                onChangeText={(text) => this.setState({Uname: text})}
                value={this.state.Uname}
              />

              <Text style={styles.password}> Password:</Text>
              <TextInput
                style={styles.passwordField}
                onChangeText={(text) => this.setState({Password: text})}
                value={this.state.Password}
              />
            </View>
            <View style={styles.button}>
              <Button
                onPress={() => {
                  alert(
                    'UserName :' +
                      this.state.Uname +
                      '\n' +
                      'Password:' +
                      this.state.Password,
                  );
                }}
                title="login"
              />
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
          </ScrollView>
        </SafeAreaView>
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
    fontSize: 25,
  },
  button: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 250,
  },

  button1: {
    marginTop: -35,
    marginLeft: 240,
    marginRight: 30,
  },

  textbox: {
    // backgroundColor: Colors.white,
    height: 40,
    width: 250,
    marginTop: -28,
    marginLeft: 150,
    borderColor: 'grey',
    borderWidth: 2,
    //textAlign:'center',
  },
  passwordField: {
    height: 40,
    width: 250,
    marginTop: -25,
    marginLeft: 150,
    borderColor: 'grey',
    borderWidth: 2,
    textAlign: 'left',
  },
  text: {
    color: Colors.blue,
    fontSize: 25,
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
