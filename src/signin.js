import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import GoogleSignIn from './Googlesignin';

const Signin = ({navigation}) => {
      const handleGoogleSignIn = (userInfo) => {
    console.log('Google Sign-In Success:', userInfo);

    navigation.navigate('Home');
  };

  return (
    <View>
      <Text> Signin</Text>
      <View style={{width:"90%",alignItems:'center'}}>
      <TouchableOpacity style={styles.buttonSinup} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.textStyle}>To Home</Text>
        </TouchableOpacity>
        <GoogleSignIn onPress={handleGoogleSignIn}/>
      </View>
     
    </View>
  )
}

export default Signin

const styles = StyleSheet.create({
    buttonSinup:{
        marginTop:5,
        backgroundColor: '#be8f01',
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
      },
      textStyle: {
        color: 'white',
        textAlign: 'center',
    
      },
})