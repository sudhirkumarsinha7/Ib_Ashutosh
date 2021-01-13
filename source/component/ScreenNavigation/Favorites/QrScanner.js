import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Button,Alert} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera,FaceDetector } from 'react-native-camera';
import Modal from 'react-native-modal';
import {BarCodeScanner} from '../../../utilities/BarCodeScanner';
import {
    Icon,
  } from 'native-base';
class QrScanner extends Component {
   
   constructor(props) {
    super(props);
    this.onClearClicked = this.onClearClicked.bind(this);
    this.updateState = this.updateState.bind(this);
    this.onSuccessScan = this.onSuccessScan.bind(this);
    this.troubleShootCamera = this.troubleShootCamera.bind(this);
    this.loadScannerRef = this.loadScannerRef.bind(this);
    this.stateUpdater = this.stateUpdater.bind(this);
    this.state = {
      scanCode: '',
      isTextVisibility: false,
      isScannerPress:false,
      shouldDisplayCamera: false,
    };
  }

  onClearClicked() {
    this.setState({
      name: '',
      id: '',
      location: {},
    });
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
  render() {
    var {shouldDisplayCamera, qrcode} = this.state;
    return (
      //style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:30}}  style={{flex:0.5,borderWidth:1}}
    //   <View>
    //     <View>
    //       <Text
    //         style={{
    //           backgroundColor: 'green',
    //           textAlign: 'center',
    //           width: '100%',
    //           height: 30,
    //           fontSize: 20,
    //         }}>
    //         Qr Code Scanner screen
    //       </Text>
    //     </View>
    //     <View>
    //       <Text style={{fontSize: 20, marginTop: 20,}}>
    //         Code
    //       </Text>
    //       <TextInput
    //         style={{
    //           borderWidth: 1,
    //           borderRadius: 10,
    //           width: 120,
    //           height: 40,
    //           marginTop: -27,
    //           marginLeft: 65,
    //         }}
    //         onChangeText={(text) => this.setState({scanCode: text})}
    //         value={this.state.scanCode}></TextInput>
    //     </View>
    //     <View>
    //       <TouchableOpacity
    //         style={{
    //           marginLeft: 280,
    //           borderRadius: 20,
    //           backgroundColor: 'blue',
    //           marginRight: 20,
    //           marginTop: -35,

    //         }}
    //         onPress={() =>
    //             this.setState({isScannerPress: !this.state.isScannerPress})
    //           }>
    //         <Text style={{padding: 10, textAlign: 'center'}}>Camera</Text>
    //       </TouchableOpacity>
    //     </View>
    //     <Modal isVisible={this.state.isScannerPress}
    //     style={{flex: 1, backgroundColor: 'white', maxHeight: 200}}>
    //       <View >
           
    //           <Text>Camera</Text>
    //       </View>
    //     </Modal>
    //     <View>
    //       <TouchableOpacity
    //         style={{marginTop: 40, alignItems: 'center'}}
    //         onPress={this.ClickScanValue}>
    //         <Text>QR-CODE</Text>
    //       </TouchableOpacity>
    //       {this.state.isTextVisibility ? (
    //         <Text>{this.state.scanCode}</Text>
    //       ) : null}
    //     </View>
    //   </View>





   // //////////////

   <View>
        <TouchableOpacity onPress={() => this.onClickCameraToScanCode()}>
          <View>
            <View>
              <Text> Scan QR / Barcode</Text>
            </View>
            <View>
              <Icon name="camera" style={{color: 'grey'}} />
            </View>
          </View>
        </TouchableOpacity>
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
      </View>
 


    );
  }
}

export default QrScanner;
