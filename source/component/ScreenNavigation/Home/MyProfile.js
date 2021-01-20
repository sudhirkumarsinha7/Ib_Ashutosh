/**
 * MyProfile.js
 * @author: Ashutosh kumar
 * Created On: 12 january, 2021.
 * Mainly used for Profile picture add and update. 

 */
import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {CustomTextView} from '../../../utilities/common';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-picker';

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPhotoUpload: false,
      filePath: '',
    };
  }

  photoUpload = () => {
    // this.setState({isPhotoUpload: true})}
    this.chooseFile();
  };
  chooseFile = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else if (response.uri) {
        this.setState({filePath: response});
      }
    });
  };
  render() {
    return (
      <View>
        <View style={{backgroundColor: '#b3d9ff'}}>
          {this.state.filePath ? (
            <Image
              style={styles.imag}
              source={{uri: this.state.filePath.uri}}
            />
          ) : (
            <Image
              style={styles.imag}
              source={require('../../../Images/ashu.png')}
            />
          )}
        </View>
        <View style={{backgroundColor: '#b3cce6'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.photoUpload()}>
            <Text>UpdateProfile</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            marginTop: 10,
            borderRadius: 15,
            borderWidth:1,
          }}>
          <CustomTextView leftText={'Name'} rightText={'Ashutosh Kumar '} />
          <CustomTextView
            leftText={'Degination'}
            rightText={'Software Engineer '}
          />
          <CustomTextView leftText={'Department'} rightText={'Development '} />
          <CustomTextView leftText={'Location'} rightText={'Hyderabad '} />
          <CustomTextView
            leftText={'Email'}
            rightText={'ashutosh.choudhary@ideabytes.com '}
          />
         {/* <CustomTextView leftext={'Mobile'} rightText={'9570684028'} /> */}
        </View>
        <Modal isVisible={this.state.isPhotoUpload}>
          <View style={{flex: 1, backgroundColor: 'white', maxHeight: 200}}>
            <Text style={{marginLeft: 140, marginTop: 10}}>Pop Up</Text>
            <TouchableOpacity
              style={styles.button1}
              onPress={() =>
                this.setState({isPhotoUpload: !this.state.isPhotoUpload})
              }>
              <Text>QR Scanner</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              onPress={() =>
                this.setState({isPhotoUpload: !this.state.isPhotoUpload})
              }>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#ccfff5',
    padding: 10,
    marginTop: 20,
    marginLeft: 120,
    marginBottom: 30,
    height: 50,
    width: 150,
    borderRadius: 40,
  },
  button1: {
    alignItems: 'center',

    marginTop: 30,
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#ccfff5',
    padding: 10,
    marginTop: 40,
    marginLeft: 120,
    marginBottom: 30,
    height: 40,
    width: 90,
    borderRadius: 40,
  },
  imag: {
    width: 180,
    borderRadius: 110,
    height: 200,
    marginTop: 20,
    alignSelf: 'center',
  },
});
export default MyProfile;
