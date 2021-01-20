import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  Alert,
  FlatList,
} from 'react-native';
import {RNCamera, FaceDetector} from 'react-native-camera';
import Modal from 'react-native-modal';
import {BarCodeScanner} from '../../../utilities/BarCodeScanner';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CustomTextView} from '../../../utilities/common';

/*  
     This is parent class for Bar code scanner
     in this class i am importing Barcode scanner 
    * QrScanner.js
    * @author: Ashutosh kumar
    * Created On: 15 january, 2021.
    * Mainly used for Bar code and Qr code scanning 


*/
class QrScanner extends Component {
  constructor(props) {
    super(props);

    // this.onClearClicked = this.onClearClicked.bind(this);
    this.updateState = this.updateState.bind(this);
    this.onSuccessScan = this.onSuccessScan.bind(this);
    this.troubleShootCamera = this.troubleShootCamera.bind(this);
    this.loadScannerRef = this.loadScannerRef.bind(this);
    this.stateUpdater = this.stateUpdater.bind(this);
    this.state = {
      scanCode: '',
      isTextVisibility: false,
      isScannerPress: false,
      shouldDisplayCamera: false,
      data: [],
      list: [],
      isLoading: false,
      city: '',
    };
  }
  
  updateState(key, value) {
    this.setState({[key]: value});
  }
  onClickCameraToScanCode() {
    this.setState({shouldDisplayCamera: true});
  }
  onSuccessScan(scannedData) {
    if (scannedData && scannedData.data) {
      this.setState({
        city: scannedData.data,
        shouldDisplayCamera: false,
      });
    } else if (scannedData && scannedData.data === '') {
      alert('Invalid QR Code.');
    } else {
      this.scanner.reactivate();
    }
  }

  troubleShootCamera() {
    // eslint-disable-next-line no-constant-condition
    if (true) {
      // permission granted
      Alert.alert(
        'Troubleshooting Camera',
        'Troubleshooting completed, Please hold the device steadily and try again.',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
    if (this.codeScannerRef && this.codeScannerRef) {
      // todo: called RNCamera refresh function
    }
    this.scanner && this.scanner.reactivate();
  }
  loadScannerRef(node) {
    this.scanner = node;
  }
  stateUpdater(newState) {
    this.setState(newState);
  }

  ClickScanValue = () => {
    this.setState({isTextVisibility: !this.state.isTextVisibility});
  };

  SetCityName(city) {
    this.setState({city: city});
  }
  getCurrentTemp = () => {
    let {isLoading, list,city} = this.state;
    this.setState({isLoading: true});
    let tempList = list;
    console.log('city', city);

    let url =
      'https://api.openweathermap.org/data/2.5/weather?q=' +
      city +
      '&appid=e75f3d4627ca4fed0759a3605e2e27bd';
    fetch(url, {method: 'GET'})
      .then((res) => res.json())
      .then((responseData) => {
        console.log('responseData ', responseData);
        this.setState({isLoading: false});
        let data = {
          cityName: city,
          Temp: responseData.main.temp,
        };
        console.log('responseData data', data);
        console.log('responseData tempList before', tempList);

        tempList = tempList.push(data);
        console.log('responseData tempList after', tempList);
        
      })
      .catch((error) => {
        this.setState({isLoading: false});
        console.log(error);
      });
  };
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
          <CustomTextView leftText={'City '} rightText={item.cityName} />
          <CustomTextView leftText={'Temp'} rightText={Math.round(item.Temp - 273) + ' °F'} />

        </View>
    );
  }
  render() {
    const {isLoading} = this.state;
    var {shouldDisplayCamera, qrcode} = this.state;
    return (
      <ScrollView>
        <View>
          <View
            style={{
              flex: 10,
              //margin: 20,   
                         
            }}>
            <View style={{flex: 0.5, }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}> City Name: </Text>
            </View>
            <View style={{flex:0,}}>
              <TextInput
                style={{
                  borderColor: 'blue',
                  borderWidth: 1,
                  borderRadius: 20,
                  padding: 8,
                }}
                value= {this.state.city}
                onChangeText={(Temp) => this.SetCityName(Temp)}></TextInput>
            </View>
            <View style={{flex: 1.2}}>
              <TouchableOpacity
                style={{
                  borderRadius: 30,
                  backgroundColor: '#008CBA',
                  marginLeft:15,
                  padding: 12,
                }}
                onPress={() => this.onClickCameraToScanCode()}>
                <View>
                  <Text> Scan Barcode</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{flex:3,flexDirection:'row',padding:10,}}>
               <View style={{flex:0.8}}></View>
               <View style={{flex:1.2}}>
                <TouchableOpacity
                    style={{
                       backgroundColor: '#006400',
                       borderRadius: 30,
                       padding: 10,
                     }}
                    onPress={() => this.getCurrentTemp()}>
                    <View>
                         <Text style={{fontWeight: 'bold', fontSize: 15,textAlign:'center'}}>
                         GetTemp
                         </Text>
                     </View>
                 </TouchableOpacity>
             </View>
             <View style={{flex:1}}></View>
          </View>
            <FlatList
          data={this.state.list}
          renderItem={(item) => this.eachItem(item)}
        />
          </View>

          {shouldDisplayCamera && (
            <Modal
              animationType="slide"
              transparent={false}
              visible={shouldDisplayCamera} // todo: useless prop: remove after checking
              onRequestClose={() => {
                this.setState({shouldDisplayCamera: !shouldDisplayCamera});
              }}>
              <BarCodeScanner
                onSuccessScan={this.onSuccessScan}
                troubleShootCamera={this.troubleShootCamera}
                ref={(codeScannerRef) => {
                  this.codeScannerRef = codeScannerRef;
                }}
                scanner={this.loadScannerRef}
                stateUpdater={this.stateUpdater}
                state={this.state}
              />
            </Modal>
          )}
          {qrcode && <Text>{'QRcode   ' + this.state.qrcode}</Text>}
          
          <View>
            {/* Math.round(cityTemp.main.temp - 273.15) + '°F' */}

            {/* obj ={JSON.stringify(this.state.data.main)}; */}
            {/* <Text>{obj}</Text> */}
          </View>
          {/* {this.getTempList()} */}
          {/* <View>
            <Text>{JSON.stringify(this.state.list)}</Text>
          </View> */}
        </View>
      </ScrollView>
    );
  }
}

export default QrScanner;
