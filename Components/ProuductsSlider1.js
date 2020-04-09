import React, { Component, Fragment } from "react";
import { Image, Text, View, Dimensions } from "react-native";
import CountDown from "react-native-countdown-component";
import Carousel from "react-native-snap-carousel";


const { width } = Dimensions.get("window");
const height = width * 0.6;

export default class ProuductSlider1 extends Component {
  state = {
    images: [
      {
        uri:
          "http://static-01.daraz.pk/original/8b3c21e5d7c0f2f14736126ca70bfd02.jpg",
      },
      {
        uri:
          "https://static-01.daraz.pk/original/c8a642be3c6ffd3436d770525c23f96d.jpg",
      },
      {
        uri: "http://static-01.daraz.pk/p/a111e6deb9a1a0049d4a307f543d64cd.jpg",
      },
      {
        uri:
          "https://static-01.daraz.pk/p/4f28e730fef7d78a194fa8295813ef6d.jpg",
      },
      {
        uri:
          "http://static-01.daraz.pk/p/c7e92b47dc0432f37f2dc54e43777892.jpg",
      },
      {
        uri:
          "https://static-01.daraz.pk/original/690a14dd00ceae1e5f75952e30cfd130.jpg_200x200q80-product.jpg",
      },
      {
        uri:
          "https://static-01.daraz.pk/p/dcde4742d6a0820e78cd1a0ee0007341.jpg_200x200q80-product.jpg",
      },
      {
        uri:
          "https://static-01.daraz.pk/original/70885cc4ba50ee5f6e1017b6652cc4a8.jpg_200x200q80-product.jpg",
      },
      {
        uri:
          "https://static-01.daraz.pk/p/eaab9cd1fd6083f4d27bb6fb218e25b4.jpg_200x200q75-product.jpg",
      },
      
    ],
  };

  _renderItem = ({ item, index }) => {
    return (
      <View>
        <Image source={{ uri: item.uri }} key={index}  style={{width: 170,height:200}}/>        
      </View>
    );
  };

  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 30,
            color: "#000",
            marginTop: 80,
            color: "dodgerblue",
          }}
        >
          Flash Sale ⚡
        </Text>
        <CountDown
          style={{ marginLeft: 120, marginTop: -45 }}
          digitTxtStyle={{ color: "dodgerblue" }}
          digitStyle={{ backgroundColor: "#000" }}
          until={2000}
          timeToShow={["H", "M", "S"]}
          size={20}
        />
        <Carousel
          layout={'default'}
          ref={(ref) => (this.carousel = ref)}
          data={this.state.images}
          renderItem={this._renderItem}
          sliderWidth= {width}
          itemWidth={200}
          sliderHeight={height}
          itemHeight={10}
        />
       
      </View>
    );
  }
}
