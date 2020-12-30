import React , {Component} from 'react';
import { 
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    } from 'react-native';
   
 import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
        <RadioForm style={styles.button}
          radio_props={radio_props}
          initial={0}
          formHorizontal={true}
          
          onPress={(value) => {this.setState({value:value})}}

          labelStyle={{fontSize: 20, color: '#3366ff',marginRight:10}}
          labelWrapStyle={{}}
        />
      </View>
        );
    }
    
     render(){
       
        
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
});

export default Registration;