import { createStackNavigator } from '@react-navigation/stack';
import Signin from '../signin';
import Home from '../home';

const Stack = createStackNavigator();

function MyStack() {
    
  return (
    
    
    <Stack.Navigator
    screenOptions={{
      headerShown: false
  }}
    initialRouteName='Signin'
    >
      
      <Stack.Screen name="Signin" component={Signin} />
      
      <Stack.Screen name="Home" component={Home} />
      
     
      
     
    </Stack.Navigator>
  );
}
export default MyStack