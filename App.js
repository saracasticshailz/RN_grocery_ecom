import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginPage from './src/pages/screen/LoginPage';
import Dashboard from './src/pages/screen/Dashboard';


 const navigator=  createStackNavigator({
   LoginPage:LoginPage,
   Dashboard:Dashboard
 },
 
 {
   initialRouteName:'LoginPage',
  //  defaultNavigationOptions:{
  //    title:'LoginPage'
  //  }
 });

 export default createAppContainer(navigator);

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
