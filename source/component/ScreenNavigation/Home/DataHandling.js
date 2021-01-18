import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {tankData} from '../../../utilities/defaultdata';

class DataHandling extends Component {
    eachItem({item}) {
    return (
      <View style={{backgroundColor:'white',padding:10,borderWidth:1,}}>
        <View style={{flexDirection:'row',backgroundColor:'white',padding:10,borderWidth:1,}}>
        <Text>{'Sensor: ' +item.asset_id}</Text>
        <Text>{'Name: '+item.tenant_name}</Text>
      </View>
      <View style={{flexDirection:'row',backgroundColor:'white',padding:10,borderWidth:1,}}>
        <Text>{item.tenat_admin_group_id}</Text>
        <Text>{item.address}</Text>
      </View>
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
