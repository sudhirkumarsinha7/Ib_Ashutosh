import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Item, Icon, Input} from 'native-base';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {assets} from '../../../utilities/defaultdata';

let googleKey = 'AIzaSyCU2d-6MsB4agGdgpHUnBtPmjGpsL6BL2M';
var markers = [
  {
    latitude: 45.65,
    longitude: -78.90,
    title: 'Foo Place',
    subtitle: '1234 Foo Drive'
  }
];
const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: googleKey,
        language: 'en',
      }}
    />
  );
};
export class googleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: 'Hyderabad',
      region: {
        // hyderabad
        latitude: 17.4295865,
        longitude: 78.368776,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      },
    };
  }
  // getAddress(text){
  //   this.setState({ address: text })
  //   getLatLong(text)
  //       .then((location) => {
  //         this.setState({
  //           region: {
  //             ...this.state.region,
  //             latitude: location.lat,
  //             longitude: location.lng
  //           },
  //           currentPin: {
  //             latitude: location.lat,
  //             longitude: location.lng
  //           }
  //         })
  //       })
  //       .catch((error) => {
  //         this.props.onError(error)
  //       })
  // }
  render() {
    console.log(assets);
    return (
      <View style={styles.MainContainer}>  
  
      <MapView  
        style={styles.mapStyle}  
        showsUserLocation={false}  
        zoomEnabled={true}  
        zoomControlEnabled={true}  
        initialRegion={{  
          latitude: 17.4295865,   
          longitude: 78.368776,  
          latitudeDelta: 0.2,  
          longitudeDelta: 0.2,  
        }}>  
         


        {(assets.results).map((each)=>{
          return <Marker  
          coordinate={{ latitude: each.geoloc.coordinates[0], longitude: each.geoloc.coordinates[1] }}  
          title={each.name}  
          description={each.properties.values.address}  
        />  
        })}
         <Marker  
          coordinate={{ latitude: 17.4295865, longitude: 78.368776 }}  
          title={"Ideabytes"}  
          description={"Plot No:35, Beside Care Hospital Lane, Jayabheri Pine Valley, Gachibowli, Hyderabad, Telangana 500032"}  
        />   
      </MapView>  
      </View>
    );
  }
}

export default googleMap;

const styles = StyleSheet.create({  
  MainContainer: {  
    position: 'absolute',  
    top: 0,  
    left: 0,  
    right: 0,  
    bottom: 0,  
    alignItems: 'center',  
    justifyContent: 'flex-end',  
  },  
  mapStyle: {  
    position: 'absolute',  
    top: 0,  
    left: 0,  
    right: 0,  
    bottom: 0,  
  },  
});  
