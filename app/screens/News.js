import React from 'react';
import { Button,View, Text, Animated, Image } from 'react-native';


function News({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white',paddingTop:20 }}>
        <Text>Washington: President Joe Biden on Tuesday told Americans worried about the rapidly spreading Omicron coronavirus variant that the country was "prepared" to fight it, as Israel -- which pioneered the use of Covid vaccine boosters -- announced fourth shots for those over 60 and health workers.
  Omicron, now present in dozens of countries, appears to be more infectious than earlier coronavirus strains, despite early indications that it does not cause a more severe form of Covid-19 than the Delta variant </Text>
      </View>
    );
  }

export default News;