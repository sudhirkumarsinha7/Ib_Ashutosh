import React, { Component } from 'react';
import { View , Text} from 'react-native';
import { WebView } from 'react-native-webview';
class ReactNavigation extends Component{
    render(){
        return(
             <WebView source={{ uri: 'https://reactnavigation.org/docs/getting-started' }} />
        );
    }
}

export default ReactNavigation;