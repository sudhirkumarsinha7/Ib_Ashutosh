  import React , {Component} from 'react';
   import { 
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    } from 'react-native';

    import { Colors } from 'react-native/Libraries/NewAppScreen';
    import CheckBox from 'react-native-check-box'
    import Icon from 'react-native-vector-icons/Feather';
    import DropDownPicker from 'react-native-dropdown-picker';
    import Checkbox from 'react-native-modest-checkbox'
    class test extends Component{
    
        
        render(){
            this.state = {
                country: 'uk'
            }
    
            return(
        <>

              <View>
                  <Text  style={{fontSize:20,marginLeft:20,marginTop:20}}>Country:</Text>
              </View>
              
                <View>
                <DropDownPicker style={{marginLeft:40,width:30}}
    items={[
        {label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, hidden: true},
        {label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />},
        {label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" />},
    ]}
    defaultValue={this.state.country}
    containerStyle={{height: 40}}
    style={{backgroundColor: '#fafafa'}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item => this.setState({
        country: item.value
    })}
   />


      </View>

     


     <View><Text style={{fontSize:20,marginLeft:20,marginTop:20}}>Hobby:</Text></View>

      <View style={styles.container}>
      
        <Checkbox
          label='cricket'
          onChange={(checked) => console.log('Checked!')}
        />
      </View>


      <View style={styles.container1}>
        <Checkbox
          label='Badminton'
          onChange={(checked) => console.log('Checked!')}
        />
      </View>


      

      </>
            );
        }
    }



    const styles = StyleSheet.create({
        scrollView: {
            backgroundColor: Colors.lighter,
          },
        
          container1: {
            flex: 1,
             marginLeft:120,
             marginTop:-10,
            //justifyContent: 'center',
        },

        container2: {
            flex: 1,
            marginLeft:220,
             marginTop:1,
            //alignItems: 'center',
            //justifyContent: 'center',
        },
        
        valueText: {
            fontSize: 18, 
            marginBottom: 50,
        },
        text:{
            color:Colors.blue,
            marginLeft:10,
            fontSize:25,
            fontWeight:'bold',
            marginTop:35,
        },
    
    
        radioText:{
            color:Colors.blue,
            marginLeft:10,
            fontSize:25,
            fontWeight:'bold',
            marginTop:40,
        },
        
        
    })

    export default test;