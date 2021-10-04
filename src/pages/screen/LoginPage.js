import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput,Button,TouchableHighlight,Image} from 'react-native';
import { NavigationContext } from 'react-navigation';
import Service from '../api/Service';
import Dashboard from './Dashboard';


const LoginPage=({navigation})=>{
const [Username,setUsername]=useState('');
const [Password,setPassword]=useState();
const [enteredOTP,setEnteredOTP]=useState('');
const [results,setResults]=useState(); 
const [buttonText,setButtonText]=useState('Get OTP'); 
const [gototp,setOTP]=useState();

const loginApi=async()=>{
  const reqObject={
    mobile:Username.mobile,
    "country_code" : "+91"  
  };
await Service.post('/login',
reqObject).then(res=>{
  console.log(res.data);
  const status=res.data.message;
  if(status ==- 'Failed!!. '){
   return;
  }else{
    setButtonText('Enter OTP');
    setOTP(res.data.otp);
  }
});
};

const verifyOTP=async()=>{
//var bodyFormData = new FormData();
console.log('enteredOTP : '+enteredOTP);
//bodyFormData.append("otp",enteredOTP);
const bodyFormData={
  'otp':enteredOTP
}


console.log(bodyFormData);

await Service.post('/verifyregisteration',bodyFormData).then(res=>{
  console.log("res otp "+JSON.stringify( res));
  if (res.data.success === 'true'){
    navigation.navigate('Dashboard');
    setButtonText('Get OTP');
  }
  
})
//navigation.navigate('Dashboard');
setButtonText('Get OTP');
}
return (
    <View style={style.container}>
        {/* <Text>Login </Text> */}
       
        <View style={style.inputContainer}>
          <TextInput style={style.inputs}
              placeholder="Mobile Number"
              keyboardType="phone-pad"
              underlineColorAndroid='transparent'
              onChangeText={(mobile) => {
                  setUsername({mobile});
                  }}/>
        </View>

     
        <View style={style.inputContainer}>
          <TextInput style={style.inputs}
              placeholder="OTP"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) =>setEnteredOTP({password})}/>
        </View>
        <TouchableHighlight style={[style.buttonContainer, style.loginButton]} onPress={() =>{  
          if(buttonText === 'Get OTP'){
            console.log('login');
            loginApi();

          }else{
            console.log('otp');
            verifyOTP();
          }
         }}>
          <Text style={style.loginText}>{buttonText}</Text>
        </TouchableHighlight>

        <TouchableHighlight style={style.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={style.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text>Register</Text>
        </TouchableHighlight>
    </View>
)
}

const style =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      //  backgroundColor: '#DCDCDC',
      },
    mainViewStyle:{
backgroundColor:'#d3d3d3',
height:50,
borderRadius:7,
marginHorizontal:15,
marginTop:30,
padding:2,
flexDirection:'row',
justifyContent:'center'
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputStyle:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
      },
      buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
      },
      loginButton: {
        backgroundColor: "#00b5ec",
      },
      loginText: {
        color: 'white',
      },
      inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
})
export default LoginPage;