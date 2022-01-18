import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{ useState, useEffect } from 'react';
import { Button,View, Text, Animated, Image,SafeAreaView,StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomButton from './CustomButton'
import { ScrollView } from 'react-native-gesture-handler';



function HomeScreen({ navigation,route }) {

const [name, setName] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            AsyncStorage.getItem('UserName')
                .then(value => {
                    if (value != null) {
                        let user = JSON.parse(value);
                        setName(user.Name);
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const removeData = async () => {
      try {
          await AsyncStorage.clear();
          navigation.navigate('LoginScreen');
      } catch (error) {
          console.log(error);
      }
  }


    return (
        
       
      <ScrollView style={{marginHorizontal:20}}>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white', padding:20 }}>
       <Text style={{alignSelf:"flex-start",fontSize:25,color:"purple",fontWeight:"bold"}}>Welcome {name}!</Text>
      <Text style={{alignSelf:"flex-start"}}>
        <Text style={{alignSelf:"flex-start",marginTop:15,color:"grey"}}>Published from</Text>
        <Text style={{color:"purple",fontWeight:"bold"}}> istudio</Text>
        <Text style={{color:"grey",alignSelf:"flex-end",justifyContent:"flex-end"}}>                                   23 Mar, 2019</Text>
        
      </Text>  
        <Image
        style={{height:250, width:300,alignSelf:"flex-end", justifyContent:"flex-end",marginTop:25,borderRadius:50}}
        source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        />
        <Text style={{alignSelf:"flex-start",paddingTop:20}}>
        <Text style={{fontSize:25,fontWeight:"bold",color:"purple",alignSelf:"flex-start"}}>4.7  </Text>
        <Image style={{height:23.7,width:125,paddingBottom:10}} source={{uri:'https://sidlove.files.wordpress.com/2013/03/four-stars_01.png'}}/>
        </Text>
        <Text style={{ marginTop:15, alignSelf:"flex-start",color:"grey"}}>
        892 Ratings on Google Play
        </Text>
        <Text style={{marginTop:20, color:"purple", fontSize:17,fontWeight:"bold",paddingTop:12,justifyContent:"center",alignSelf:"center",alignItems:"center"}}>
        Content
  justifyContent helps in aligning the children under the main axis of the container. This property can be used to center a child within the container horizontally and the flex-direction should be set to row or vertically if the flex-direction is set to the column.
  Flex-start which is a default value helps in aligning the children to the start of the main axis of the container.
  Flex-end helps in aligning the children to the end of the main axis of the container.
        </Text>
  
        <CustomButton
                title='Logout'
                color='#f40100'
                onPressFunction={removeData}
                />

      </View>
      </ScrollView>
    );
  }

  export default HomeScreen;