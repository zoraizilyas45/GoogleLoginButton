import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>home</Text>
     
      <View style={{width:"90%",alignItems:'center'}}>
      <TouchableOpacity style={styles.buttonSinup} onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.textStyle}>To Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

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