import React from 'react';
import { Button,View, Text, Animated, Image ,ImageBackground} from 'react-native';


function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white'  }}>
        <Text>Details Screen</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      </View>
    );
  }

export default DetailsScreen;