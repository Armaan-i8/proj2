import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as React from 'react';
import {BackHandler,Button,TouchableOpacity,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/screens/HomeScreen';
import LoginScreen from './app/screens/LoginScreen';



const Stack = createStackNavigator();


const App=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen 
        name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} />
     </Stack.Navigator>   
    </NavigationContainer>
    
  );
}

export default App;
