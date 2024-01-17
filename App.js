import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigation/appNavigator';


const App = () => {
  return (
    <View style={{flex:1}}>
    
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
  
    </View>
  )
}

export default App