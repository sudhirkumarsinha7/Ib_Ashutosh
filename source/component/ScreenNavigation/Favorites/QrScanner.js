import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Button, Alert} from 'react-native';
import {RNCamera, FaceDetector} from 'react-native-camera';
import Modal from 'react-native-modal';
import {BarCodeScanner} from '../../../utilities/BarCodeScanner';
import {Icon} from 'native-base';
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
      <View >
        <View style={{backgroundColor: 'white'}}>
          <Text
            style={{
              padding: 10,
              fontWeight: 'bold',
              fontSize: 15,
              textAlign: 'justify',
              color: '#333333',
            }}>
            A QR code (abbreviated from Quick Response code) is a type of matrix
            barcode, first designed in 1994 for the automotive industry in
            Japan. A barcode is a machine-readable optical label that contains
            information about the item to which it is attached. A QR code uses
            four standardised encoding modes to store data efficiently. The
            Quick Response system became popular outside the automotive industry
            due to its fast readability and greater storage capacity compared to
            standard UPC barcodes . Applications include product tracking, item
            identification, time tracking, document management, and general
            marketing. A QR code consists of black squares arranged in a square
            grid on a white background, which can be read by an imaging device
            such as a camera, and processed using Reed-Solomon error
            correction until the image can be appropriately interpreted. The
            required data is then extracted from patterns that are present in
            both horizontal and vertical components of the image. The standard
            gained even more traction during the COVID-19 pandemic. The
            worldwide momentum for adoption of paperless menus and other forms
            of public communications (such as museum guides) has led to a wider
            adoption of QR codes in public spaces. New services emerge to store
            files as QR codes as the demand grows.During the month of June 2011,
            14 million American mobile users scanned a QR code or a barcode.
            Some 58% of those users scanned a QR or barcode from their homes,
            while 39% scanned from retail stores; 53% of the 14 million users
            were men between the ages of 18 and 34.QR code usage decreased to
            9.76 million in 2018 but is expected to grow to a total of 11
            million households by the end of 2020.
          </Text>
        </View>
        <TouchableOpacity 
        style={{borderRadius:30,width:145,backgroundColor:'#008CBA',padding:10,marginLeft:140,marginTop:10}}
        onPress={() => this.onClickCameraToScanCode()}>
          <View>
            <Text> Scan QR / Barcode</Text>
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
