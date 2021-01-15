import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
class TempApiCall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      isLoading: false,
      city:'',
    };
  }

  getSetCityName(city) {
    this.setState({cityName: city});
    //this.getCurrentTemp(city);
  }
  getCurrentTemp = (city) => {
    let {isLoading} = this.state;
    this.setState({isLoading: true});
    console.log('city',city)

    let url =
      'https://api.openweathermap.org/data/2.5/weather?q=' +
      city +
      '&appid=e75f3d4627ca4fed0759a3605e2e27bd';
    fetch(url,
        {'method':'GET'})
      .then((res) => res.json())
      .then((responseData) => {
          console.log('responseData ', responseData);
        this.setState({isLoading: false});

        this.setState({data: responseData});
      })
      .catch((error) => {
        this.setState({isLoading: false});
        console.log(error);
      });
    // const url =
    //   'https://api.openweathermap.org/data/2.5/weather?q=' +
    //   city +
    //   '&appid=e75f3d4627ca4fed0759a3605e2e27bd';
    // const url =
    // 'https://api.openweathermap.org/data/2.5/weather?q=' +
    // city+
    // '&appid=9de243494c0b295cca9337e1e96b00e2';
    // fetch(url)
    // .then((response) => response.json())
    // .then((json) => {
    //     console.log('responseData ', json);
      
    // })
    // .catch((err) => {
      
    // });
  };

  render() {
    const {isLoading} = this.state;

    return (
      <View>
        {/* {isLoading && <ActivityIndicator />} */}
        <View style={{padding: 10, margin: 15}}>
          <Text style={{padding: 5, fontSize: 20, fontWeight: 'bold'}}>
            Temperature:
          </Text>
          <TextInput
            style={{
              borderColor: 'blue',
              borderWidth: 1,
              borderRadius: 10,
              marginLeft: 120,
              marginTop: -40,
            }}
            onChangeText={(Temp) => this.getSetCityName(Temp)}></TextInput>
        </View>
        <View>
            <TouchableOpacity
                style={{width:168,backgroundColor:'#008CBA',marginLeft:90,marginTop:10,borderRadius:20,padding:10}} 
                onPress={() => this.getCurrentTemp(this.state.cityName)}
                >
                <View>
                    <Text style={{fontWeight:'bold',fontSize:20,}}>FetchTemperature</Text>
                </View>
            </TouchableOpacity>
        </View>

        <View>
          <Text>{'JSON.stringify(this.state.data)'}</Text>
          <Text>{JSON.stringify(this.state.data)}</Text>

        </View>
      </View>
    );
  }
}

export default TempApiCall;
