import React, { Component } from 'react';
import {  Text, View } from 'react-native';
import CardSilder from 'react-native-cards-slider';

 export default class CardSilderApp extends Component{
  render(){
    return(
      <View style={{}}>
        <Text style={{fontSize: 30, color: '#000',marginTop: -170 ,textAlign: 'center', color: 'dodgerblue'}}>
          Categories
        </Text>
        <CardSilder style={{margin: 10}}>
          <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'skyblue'}}>
            <Text style={{color: 'lightcyan', fontSize: 24, fontWeight: 'bold'}}>
              Groceries
            </Text>
          </View>
          <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'lightsalmon'}}>
            <Text style={{color: 'lightcyan', fontSize: 24, fontWeight: 'bold'}}>
                Electronics
            </Text>
          </View>
          <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'teal'}}>
            <Text style={{color: 'lightcyan', fontSize: 24, fontWeight: 'bold'}}>
              Crokery
            </Text>
          </View>
          <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'lightpink'}}>
            <Text style={{color: 'lightcyan', fontSize: 24, fontWeight: 'bold'}}>
              SmartPhones
            </Text>
          </View>
          <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'lightseagreen'}}>
            <Text style={{color: 'lightcyan', fontSize: 24, fontWeight: 'bold'}}>
              Pets
            </Text>
          </View>
          <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'lightcoral'}}>
            <Text style={{color: 'lightcyan', fontSize: 24, fontWeight: 'bold'}}>
              Babies & Toys
            </Text>
          </View>
          <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'lightsteelblue'}}>
            <Text style={{color: 'lightcyan', fontSize: 24, fontWeight: 'bold'}}>
            Sports & Outdoor
            </Text>
          </View>
          <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'mediumslateblue'}}>
            <Text style={{color: 'lightcyan', fontSize: 24, fontWeight: 'bold'}}>
            Health & Beauty
            </Text>
          </View>
        </CardSilder>
      </View>
    )
  }
}