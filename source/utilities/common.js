import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
class CustomTextView extends Component {
  render() {
    const {leftText, rightText} = this.props;
    return (
    
        <View style={{flexDirection: 'row', }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Roboto-Regular',
              color: 'blue',
              width: '27%',
            }}>
            {leftText}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Roboto-Regular',
              color: '#000000',
            }}>
            {rightText}
          </Text>
        </View>
    );
  }
}

export {CustomTextView};
