/**
 * /**
 * MyProfile.js
 * @author: Ashutosh kumar
 * Created On: 12 january, 2021.
 * Mainly used for Profile picture add and update. 

 */
import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {CustomTextView} from '../../../utilities/common';
import Modal from 'react-native-modal';


class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPhotoUpload: false,
    };
  }
  render() {
    return (
      <View>
        <View style={{backgroundColor: '#b3d9ff'}}>
          <Image
            source={require('../../../Images/ashu.png')}
            style={{
              width: 180,
              borderRadius: 110,
              height: 200,
              marginLeft: 100,
              marginTop: 30,
            }}
          />
        </View>
        <View style={{backgroundColor: '#b3cce6'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({isPhotoUpload: true})}>
            <Text>UpdateProfile</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            marginTop: 10,
            borderRadius: 15,
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
          <CustomTextView leftText={'Mobile'} rightText={'9570684028'} />
        </View>
        <Modal isVisible={this.state.isPhotoUpload}>
          <View style={{flex: 1, backgroundColor: 'white', maxHeight: 200}}>
          <Text style={{marginLeft:140,marginTop:10,}}>Pop Up</Text>
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
    // backgroundColor: "#ccfff5",
    // padding: 10,
    marginTop: 30,
    // marginLeft:120,
    // marginBottom:30,
    // height:40,
    // width:90,
    // borderRadius:40,
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
});
export default MyProfile;
