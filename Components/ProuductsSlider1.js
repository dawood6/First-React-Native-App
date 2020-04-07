import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import CardSilder from 'react-native-cards-slider';
import CountDown from 'react-native-countdown-component';


const prouducts = [
    "http://static-01.daraz.pk/original/8b3c21e5d7c0f2f14736126ca70bfd02.jpg",
    "http://static-01.daraz.pk/p/14a422f7531cfad5720c46cd9a1b3812.jpg",
    "https://static-01.daraz.pk/original/c8a642be3c6ffd3436d770525c23f96d.jpg",
    "https://static-01.daraz.pk/p/a111e6deb9a1a0049d4a307f543d64cd.jpg",
    "https://static-01.daraz.pk/p/4f28e730fef7d78a194fa8295813ef6d.jpg",
  ];


 export default class ProuductSlider1 extends Component{
  render(){
    return(
      <View>
        <Text style={{fontSize: 30, color: '#000', marginTop:80, }}>
          Flash Sale
        </Text>
        <CardSilder >
          {prouducts.map((prouducts, index) => (
            <Image
              style={{height: 270, width: 200, margin: 10, marginLeft: 70 }}
              source={{ uri: prouducts }}
              key={index}
            />
          ))}
        </CardSilder>
        </View>
    )}
}