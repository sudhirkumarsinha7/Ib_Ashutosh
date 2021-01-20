import React, { Component } from 'react';
import { View , Text} from 'react-native';
import { WebView } from 'react-native-webview';
class Redux extends Component{
    render(){
        return(
             <WebView source={{ uri: 'https://redux.js.org/' }} />
        );
    }
}

export default Redux;