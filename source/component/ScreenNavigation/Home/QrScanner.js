import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  Alert,
} from 'react-native';
import {RNCamera, FaceDetector} from 'react-native-camera';
import Modal from 'react-native-modal';
import {BarCodeScanner} from '../../../utilities/BarCodeScanner';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  componentDidMount() {
    this.getCity();
  }
  getCity = async () => {
    let listData = await AsyncStorage.getItem(global.globalCityList);
    let tempData = JSON.parse(listData);
    console.log('QrScanner listData- ', listData);
    console.log('tempData - ', tempData);

    //  this.setState({list: tempData})
  };
  getTempList = async () => {
    let listData = await AsyncStorage.getItem(global.globalCityList);
    let tempData = JSON.parse(listData);
    return (
      <View>
        <Text>{JSON.stringify(tempData)}</Text>
      </View>
    );
  };

  //   componentDidMount() {
  //     AsyncStorageStatic.getItem('temp').then(value => {
  //       this.setState({ getValue: JSON.parse(value) }); //read like a stringified JSON
  //     });
  //  }
  updateState(key, value) {
    this.setState({[key]: value});
  }
  onClickCameraToScanCode() {
    this.setState({shouldDisplayCamera: true});
  }
  onSuccessScan(scannedData) {
    if (scannedData && scannedData.data) {
      this.setState({
        qrcode: scannedData.data,
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

  getSetCityName(city) {
    this.setState({cityName: city});
    //this.getCurrentTemp(city);
  }
  getCurrentTemp = (city) => {
    let {isLoading, list} = this.state;
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

        AsyncStorage.setItem(global.globalCityList, JSON.stringify(tempList));
        // this.setState({data: responseData});
      })
      .catch((error) => {
        this.setState({isLoading: false});
        console.log(error);
      });
  };
  render() {
    const {isLoading} = this.state;
    var {shouldDisplayCamera, qrcode} = this.state;
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{backgroundColor: 'white'}}>
          <View style={{backgroundColor: 'white'}}>
            <Text
              style={{
                padding: 10,
                fontWeight: 'bold',
                fontSize: 15,
                textAlign: 'justify',
                color: '#333333',
              }}>
              The worldwide momentum for adoption of paperless menus and other
              forms of public communications (such as museum guides) has led to
              a wider adoption of QR codes in public spaces. New services emerge
              to store files as QR codes as the demand grows.During the month of
              June 2011, 14 million American mobile users scanned a QR code or a
              barcode. Some 58% of those users scanned a QR or barcode from
              their homes, while 39% scanned from retail stores; 53% of the 14
              million users were men between the ages of 18 and 34.QR code usage
              decreased to 9.76 million in 2018 but is expected to grow to a
              total of 11 million households by the end of 2020.
            </Text>
          </View>

          <View
            style={{
              padding: 10,
              margin: 20,
              flex: 3,
              backgroundColor: 'white',
              flexDirection: 'row',
            }}>
            <View style={{flex: 0.6}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}> Temp: </Text>
            </View>
            <View style={{flex: 1.2}}>
              <TextInput
                style={{
                  borderColor: 'blue',
                  borderWidth: 1,
                  borderRadius: 20,
                  padding: 8,
                }}
                onChangeText={(Temp) => this.getSetCityName(Temp)}></TextInput>
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

          <View style={{flex:3,flexDirection:'row',padding:10,}}>
               <View style={{flex:0.8}}></View>
               <View style={{flex:1.2}}>
                <TouchableOpacity
                    style={{
                       backgroundColor: '#006400',
                       borderRadius: 30,
                       padding: 10,
                     }}
                    onPress={() => this.getCurrentTemp(this.state.cityName)}>
                    <View>
                         <Text style={{fontWeight: 'bold', fontSize: 15,textAlign:'center'}}>
                         GetTemp
                         </Text>
                     </View>
                 </TouchableOpacity>
             </View>
             <View style={{flex:1}}></View>
          </View>
          <View>
            {/* Math.round(cityTemp.main.temp - 273.15) + '°F' */}

            {/* obj ={JSON.stringify(this.state.data.main)}; */}
            {/* <Text>{obj}</Text> */}
          </View>
          {/* {this.getTempList()} */}
          <View>
            <Text>{JSON.stringify(this.state.list)}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default QrScanner;
