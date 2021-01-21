import React, { Component } from 'react';
import { View , Text} from 'react-native';
import { WebView } from 'react-native-webview';
class ReactNative extends Component{
    render(){
        return(
             <WebView source={{ uri: 'https://reactnative.dev/' }} />
        );
    }
}

export default ReactNative;