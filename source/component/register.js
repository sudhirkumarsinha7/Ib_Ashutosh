import React , {Component} from 'react';
import { 
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    Button,
    } from 'react-native';
   
 import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Colors } from 'react-native/Libraries/NewAppScreen';


import Icon from 'react-native-vector-icons/Feather';
    import DropDownPicker from 'react-native-dropdown-picker';
    import Checkbox from 'react-native-modest-checkbox'


class Registration extends Component{
    
    constructor(props)
    {
        super(props);
        this.state={UserName:'',Password:'',MobileNo:'',sex:''};
    }
    

    show=()=>{

        var radio_props  = [
            
            {label:  'Male', value: 0 },
            {label: 'Female', value: 1 }
          ];
        return (
            <View>
            <Text style={styles.radioText}>Sex:</Text>
        { <RadioForm style={styles.button}
          radio_props={radio_props}
          initial={0}
          formHorizontal={true}
          
          onPress={(value) => {this.setState({value:value})}}

          labelStyle={{fontSize: 20, color: '#3366ff',marginRight:10}}
          labelWrapStyle={{}}
        /> }
      </View>
         
         

         





        );
    }
    
     render(){
       
        
        this.state = {
            country: 'uk'
        }


     return(
        <>    
           <ScrollView>
                   <View>
                     <Text style={{marginLeft:40,fontSize:23,fontWeight:'bold',marginTop:30 }}> Welcome to  Registeration  Page </Text>
                   </View>

                   <View>
                       <Text style={styles.text}>UserName:</Text>
                       <TextInput style={styles.textbox}
                        onChangeText={(text) => this.setState({UserName:text})}
                         value={this.state.UserName}
                       /> 
                  
                     </View>


                     <View>
                         <Text style={styles.text}>Password:</Text>
                         <TextInput style={styles.textbox}
                         onChangeText={(text) => this.setState({Password:text})}
                         value={this.state.Password}
                         />
                     </View>

                     <View>
                         <Text style={styles.text}>MobileNo:</Text>
                         <TextInput style={styles.textbox}
                          onChangeText={(text)=>this.setState({MobileNo:text})}
                          value={this.state.MobileNo}
                         />
                     </View>

    

                                        <View>
                                             {this.show()}
 
                                       </View>
                    
                    
                     


                                       <View>
                  <Text  style={{fontSize:20,marginLeft:20,marginTop:20}}>Country:</Text>
              </View>
              
                <View>
                <DropDownPicker style={{marginLeft:40,width:30,flex:1}}
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

     


     <View><Text style={{fontSize:20,marginLeft:20,marginTop:50}}>Hobby:</Text></View>

      <View style={styles.container1}>
      
        <Checkbox
          label='cricket'
          onChange={(checked) => console.log('Checked!')}
        />
      </View>


      <View style={styles.container2}>
        <Checkbox
          label='Badminton'
          onChange={(checked) => console.log('Checked!')}
        />
      </View>





      <View style={styles.button1}>
                   <Button 
                   onPress={() => {
                     alert('UserName :' + this.state.Uname + '\n' + 'Password:'+ this.state.Password);
                   }}
                   title="Register" 
                  />
     
                
              </View>


                <View   style={styles.button2}>
                   <Button 
                    onPress = {()=> {(this.setState({Uname:'',Password:''})) 
                     alert('successfully cleared filed');
                  }}
                     
                      title="LogIn"  
                 
                    />
                 </View>       



                
                      
                </ScrollView>    

        </>    
            
    );
 }
}


const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
      },
    
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },


    container1: {
        flex: 1,
         marginLeft:120,
         marginTop:-25,
        //justifyContent: 'center',
    },

    container2: {
        flex: 1,
        marginLeft:220,
         marginTop:-27,
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
    textbox:{
        height:40,
        width:250,
        marginTop:-35,
        marginLeft:150,
        borderColor:'grey',
        borderWidth:2,
    },
    ddown:{
        height:40,
        width:100,
        marginTop:-35,
        marginLeft:150,
        borderColor:'grey',
        //borderWidth:2,
    },
    button:{
        marginTop:-28, 
        marginLeft : 90,
        marginRight : 250,
    },

    button1:{
        marginTop:30, 
        marginLeft : 30,
        marginRight : 250,
        
     },
   
     button2:{
       marginTop:-35, 
       marginLeft : 240,
       marginRight : 30,
       
       
    },


});

export default Registration;