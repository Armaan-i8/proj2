import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert,Button,Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from './CustomButton'

export default function LoginScreen({navigation}) {
  
  const [name, setName] = useState('');

   useEffect(() => {
        getData();
    },[]);

    const getData = () => {
        try {
            AsyncStorage.getItem('UserName')
                .then(value => {
                    if (value != null){
                        navigation.navigate('Home');
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const setData = async () => {
        if (name.length == 0 || name==' ') {
            Alert.alert('Warning, please write your Name.')
        } 
        else {
            try {
                var user = {
                    Name: name
                }
                await AsyncStorage.setItem('UserName', JSON.stringify(user));
                
            } 
            catch (error) {
                console.log(error);
            }
        }
    }


    return (

      <View style={styles.container}>
        <Text style={styles.logo}>Enter your details</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={(value) => setName(value)}/>
        </View>
        <CustomButton
                title='Login'
                color='#1eb900'
                onPressFunction={setData}

            />
  
      </View>
    );
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  }
});