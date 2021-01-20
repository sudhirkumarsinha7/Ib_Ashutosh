import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {tankData} from '../../../utilities/defaultdata';
import {CustomTextView} from '../../../utilities/common';

class DataHandling extends Component {
    eachItem({item}) {
    return (
      <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            marginTop: 10,
            borderRadius: 15,
            borderWidth:1,
          }}>
          <CustomTextView leftText={'Sensor'} rightText={item.asset_id} />
          <CustomTextView leftText={'Address'} rightText={item.address} />

        </View>
    );
  }
  render() {
    return (
      <View>
        <FlatList
          data={tankData.data.assets}
          renderItem={(item) => this.eachItem(item)}
          keyExtractor={(item) => item.asset_id}
        />
      </View>
    );
  }
}

export default DataHandling;
